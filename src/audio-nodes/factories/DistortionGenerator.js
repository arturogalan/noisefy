const DISTORTION_TYPES = {
  STANDARD: 'standard',
  HIGH_GAIN: 'highGain',
  HIGH_GAIN_MODERN: 'highGainModern',
  ASYMETRIC: 'asymetric',
  NOT_SO_DISTORTED: 'notSoDistorted',
  SUPER_CLEAN: 'superClean',
  CLEAN: 'clean',
  SMOOTH: 'smooth',
  FUZZ: 'fuzz',
  SUPERFUZZ: 'superFuzz',
  CRUNCH: 'crunch',
  STANDARD_LOW: 'standardLow',
  BEZIER: 'bezier',
  CLASS_A: 'classA',
  VERTICAL: 'vertical',
};

const getDistortionTypeGenerateFunction = (type)=> {
  return {
    [DISTORTION_TYPES.STANDARD]: (intensity)=> {
      const amount = 44100;
      const deg = Math.PI / 180;
      const curve = new Float32Array(amount);

      for (let i = 0; i < amount; ++i) {
        let x = i * 2 / amount - 1;
        curve[i] = (3 + intensity) * x * 57 * deg / (Math.PI + intensity * Math.abs(x));
      }
      return curve;
    },
    [DISTORTION_TYPES.HIGH_GAIN]: (intens)=> {
      const intensity = (intens / 10) / 153;
      const amount = 22050;
      const curve = new Float32Array(amount);

      for (let i = 0; amount > i; i += 1) {
        curve[i] = (2 * i / amount - 1 < 0 ? -1 : 1) * intensity;
      }
      return curve;
    },
    [DISTORTION_TYPES.HIGH_GAIN_MODERN]: (intens)=> {
      let intensity = 1 / (1 + Math.pow((intens / 2), 4));
      const amount = 22050;
      const curve = new Float32Array(amount);

      for (let i = 0; amount > i; i += 1) {
        let x = 2 * i / amount - 1;
        curve[i] = x / (Math.abs(x) + intensity);
      }
      return curve;
    },
    // amount not relevant, asymetric fixed curve, helpful to generate ODD harmonics
    [DISTORTION_TYPES.ASYMETRIC]: ()=> {
      let curve = new Float32Array(44100);
      const amount = 44100;
      for (let i = 0; i < amount; i++) {
        let x = i * 2 / amount - 1;
        if (x < -0.08905) {
          curve[i] = (-3 / 4) * (1 - (Math.pow((1 - (Math.abs(x) - 0.032857)), 12)) + (1 / 3) * (Math.abs(x) - 0.032847)) + 0.01;
        } else if (x >= -0.08905 && x < 0.320018) {
          curve[i] = (-6.153 * (x * x)) + 3.9375 * x;
        } else {
          curve[i] = 0.630035;
        }
      }
      return curve;
    },
    [DISTORTION_TYPES.NOT_SO_DISTORTED]: (intens)=> {
      let intensity = Math.pow((intens / 150) + 2, 3);
      const amount = 22050;
      const curve = new Float32Array(amount);

      for (let d = 0; amount > d; d += 1) {
        let f = 2 * d / amount - 1;
        curve[d] = (1 + intensity) * f / (1 + intensity * Math.abs(f));
      }
      return curve;
    },
    [DISTORTION_TYPES.SUPER_CLEAN]: (intens)=> {
      let intensity = (((intens / 150) + 6) / 4);
      const amount = 22050;
      const curve = new Float32Array(amount);
      for (let d = 0; amount > d; d += 1) {
        let e = 2 * d / 22050 - 1;
        curve[d] = (1 + intensity) * e / (1 + intensity * Math.abs(e));
      }
      return curve;
    },
    [DISTORTION_TYPES.CLEAN]: (intens)=> {
      let intensity = intens / 1500;
      const amount = 44100;
      const curve = new Float32Array(amount);
      let a = 1 - intensity > 0.99 ? 0.99 : 1 - intensity;

      for (let i = 0; i < amount; i++) {
        let x = i * 2 / amount - 1;
        let abx = Math.abs(x);
        let y;
        if (abx < a) {
          y = abx;
        } else if (abx > a) {
          y = a + (abx - a) / (1 + Math.pow((abx - a) / (1 - a), 2));
        } else if (abx > 1) {
          y = abx;
          curve[i] = sign(x) * y * (1 / ((a + 1) / 2));
        }
      }
      return curve;
    },
    [DISTORTION_TYPES.SMOOTH]: (intens)=> {
      const amount = 44100;
      let curve = new Float32Array(amount);
      let intensity = intens / 1500;

      intensity = Math.min(intensity, 0.9);
      let k = 2 * intensity / (1 - intensity);
      for (let i = 0; i < amount; i++) {
        let x = i * 2 / amount - 1;
        curve[i] = (1 + k) * x / (1 + k * Math.abs(x));
      }
      return curve;
    },
    [DISTORTION_TYPES.FUZZ]: (intens)=> {
      let amount = 44100;
      let curve = new Float32Array(amount);
      let intensity = intens / 1500;
      let a = 1 - intensity;
      for (let i = 0; i < amount; i++) {
        let x = i * 2 / amount - 1;
        let y = x < 0 ? -Math.pow(Math.abs(x), a + 0.04) : Math.pow(x, a);
        curve[i] = tanh(y * 2);
      }
      return curve;
    },
    [DISTORTION_TYPES.SUPERFUZZ]: (intens)=> {
      let amount = 22050;
      let curve = new Float32Array(amount);
      let intensity = Math.pow((intens / 150), 3);
      for (let d = 0; amount > d; d += 1) {
        let e = 2 * d / amount - 1;
        curve[d] = (1 + intensity) * e / (1 + intensity * Math.abs(e));
      }
      return curve;
    },
    [DISTORTION_TYPES.CRUNCH]: (intens)=> {
      let amount = 22050;
      let curve = new Float32Array(amount);
      let intensity = Math.pow((intens / 150), 2);
      for (let d = 0; 22050 > d; d += 1) {
        let f = 2 * d / 22050 - 1;
        curve[d] = (1 + intensity) * f / (1 + intensity * Math.abs(f));
      }
      return curve;
    },
    [DISTORTION_TYPES.STANDARD_LOW]: (intens)=> {
      let amount = 44100;
      let curve = new Float32Array(amount);
      let deg = Math.PI / 180;
      for (let i = 0; i < amount; ++i) {
        let x = i * 2 / amount - 1;
        curve[i] = (3 + intens) * x * 20 * deg / (Math.PI + intens * Math.abs(x));
      }
      return curve;
    },
    [DISTORTION_TYPES.BEZIER]: (intens)=> {
      let p0 = {x: 0, y: 100};
      let p1 = {x: 10, y: 50};
      let p2 = {x: 0, y: 50};
      let p3 = {x: 100, y: 0};
      let amount = 44100;
      let accuracy = 1/amount;
      let curve = new Float32Array(amount);
      let index = 0;
      curve[index++] = map(p0.y, 0, 100, 1, -1);
      for (let i=0; i<1; i+=accuracy) {
        let p = bezier(i, p0, p1, p2, p3);
        curve[index++] = map(p.y, 0, 100, 1, -1);
      }
      return curve;
    },
    [DISTORTION_TYPES.CLASS_A]: (intens)=> {
      const intensity = 10 + 3 * (intens / 150);
      const amount = 22050;
      let curve = new Float32Array(amount);
      for (let d = 0; amount > d; d += 1) {
        let e = 2 * d / amount - 1;
        curve[d] = (1 + intensity) * e / (1 + intensity * Math.abs(e));
      }
      return curve;
    },
    [DISTORTION_TYPES.VERTICAL]: (intens)=> {
      const intensity = Math.pow((intens / 150) + 2, 3);
      const amount = 22050;
      let curve = new Float32Array(amount);
      for (let d = 0; 22050 > d; d += 1) {
        let e = 2 * d / 22050 - 1;
        curve[d] = (1 + intensity) * e / (1 + intensity * Math.abs(e));
      }
      return curve;
    },
  }[type] || (()=> {});
};


const sign = (x)=> {
  if (x === 0) {
    return 1;
  }
  return Math.abs(x) / x;
};
const tanh = (n)=> {
  return (Math.exp(n) - Math.exp(-n)) / (Math.exp(n) + Math.exp(-n));
};
const map = (value, istart, istop, ostart, ostop)=> {
  return ostart + (ostop - ostart) * ((value - istart) / (istop - istart));
};
const bezier = (t, p0, p1, p2, p3)=> {
  let cX = 3 * (p1.x - p0.x);
  let bX = 3 * (p2.x - p1.x) - cX;
  let aX = p3.x - p0.x - cX - bX;
  let cY = 3 * (p1.y - p0.y);
  let bY = 3 * (p2.y - p1.y) - cY;
  let aY = p3.y - p0.y - cY - bY;
  let x = (aX * Math.pow(t, 3)) + (bX * Math.pow(t, 2)) + (cX * t) + p0.x;
  let y = (aY * Math.pow(t, 3)) + (bY * Math.pow(t, 2)) + (cY * t) + p0.y;
  return {x: x, y: y};
};

export {
  DISTORTION_TYPES,
  getDistortionTypeGenerateFunction,
};
