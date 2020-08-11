
const DISTORTION_PRESETS = [
  {name: 'Fuzz', distortionStage1: 'asymetric', distortionStage2: 'superFuzz'},
  {name: 'Hard Rock classic', distortionStage1: 'asymetric', distortionStage2: 'vertical'},
  {name: 'Modern High Gain', distortionStage1: 'asymetric', distortionStage2: 'highGainModern'},
  // {name: 'Fuzz 1', distortionStage1: 'asymetric', distortionStage2: 'fuzz'},
  // {name: 'High Gain 1', distortionStage1: 'asymetric', distortionStage2: 'highGain'},
  // {name: 'Hard Rock classic 2', distortionStage1: 'standardLow', distortionStage2: 'vertical'},
  // {name: 'Crunch', distortionStage1: 'asymetric', distortionStage2: 'crunch'},
];

const CLEAN_PRESETS = [
  {name: 'Clean standard', distortionStage1: 'asymetric', distortionStage2: 'standard'},
  {name: 'Clean crystal', distortionStage1: 'asymetric', distortionStage2: 'superClean'},
  {name: 'Clean crunchy', distortionStage1: 'asymetric', distortionStage2: 'crunch'},
  // {name: 'Harmonics', distortionStage1: 'standard', distortionStage2: 'standard'},
  // {name: 'Crunchy 2', distortionStage1: 'crunch', distortionStage2: 'crunch'},
  // {name: 'Another Clean Sound', distortionStage1: 'asymetric', distortionStage2: 'crunch'},
];

const DISTORTION_TYPES = {
  ASYMETRIC: 'asymetric',
  STANDARD: 'standard',
  STANDARD_LOW: 'standardLow',
  HIGH_GAIN: 'highGain',
  HIGH_GAIN_MODERN: 'highGainModern',
  CLEAN: 'clean',
  SUPER_CLEAN: 'superClean',
  SMOOTH: 'smooth',
  FUZZ: 'fuzz',
  SUPERFUZZ: 'superFuzz',
  CRUNCH: 'crunch',
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
        const x = i * 2 / amount - 1;
        curve[i] = (3 + intensity) * x * 57 * deg / (Math.PI + intensity * Math.abs(x));
      }
      return curve;
    },
    [DISTORTION_TYPES.STANDARD_LOW]: (intensity)=> {
      const amount = 44100;
      const curve = new Float32Array(amount);
      const deg = Math.PI / 180;
      for (let i = 0; i < amount; ++i) {
        const x = i * 2 / amount - 1;
        curve[i] = (3 + intensity) * x * 20 * deg / (Math.PI + intensity * Math.abs(x));
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
      const intensity = 1 / (1 + Math.pow((intens / 2), 4));
      // console.log('internal intensity', intensity)
      const amount = 22050;
      const curve = new Float32Array(amount);

      for (let i = 0; amount > i; i += 1) {
        const x = 2 * i / amount - 1;
        // gain does nothing, adding * 100 to intensity
        // curve[i] = x / (Math.abs(x) + intensity);
        curve[i] = x / (Math.abs(x) + (intensity * 100));
      }
      return curve;
    },
    // amount not relevant, asymetric fixed curve, helpful to generate ODD harmonics
    [DISTORTION_TYPES.ASYMETRIC]: ()=> {
      const curve = new Float32Array(44100);
      const amount = 44100;
      for (let i = 0; i < amount; i++) {
        const x = i * 2 / amount - 1;
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
    [DISTORTION_TYPES.VERTICAL]: (intens)=> {
      const intensity = Math.pow((intens / 150) + 2, 3);
      const amount = 22050;
      const curve = new Float32Array(amount);

      for (let d = 0; amount > d; d += 1) {
        const f = 2 * d / amount - 1;
        curve[d] = (1 + intensity) * f / (1 + intensity * Math.abs(f));
      }
      return curve;
    },
    [DISTORTION_TYPES.SUPER_CLEAN]: (intens)=> {
      const intensity = (((intens / 150) + 6) / 4);
      const amount = 22050;
      const curve = new Float32Array(amount);
      for (let d = 0; amount > d; d += 1) {
        const e = 2 * d / 22050 - 1;
        curve[d] = (1 + intensity) * e / (1 + intensity * Math.abs(e));
      }
      return curve;
    },
    [DISTORTION_TYPES.CLEAN]: (intens)=> {
      const intensity = intens / 1500;
      const amount = 44100;
      const curve = new Float32Array(amount);
      const a = 1 - intensity > 0.99 ? 0.99 : 1 - intensity;

      for (let i = 0; i < amount; i++) {
        const x = i * 2 / amount - 1;
        const abx = Math.abs(x);
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
      const curve = new Float32Array(amount);
      let intensity = intens / 1500;

      intensity = Math.min(intensity, 0.9);
      const k = 2 * intensity / (1 - intensity);
      for (let i = 0; i < amount; i++) {
        const x = i * 2 / amount - 1;
        curve[i] = (1 + k) * x / (1 + k * Math.abs(x));
      }
      return curve;
    },
    [DISTORTION_TYPES.FUZZ]: (intens)=> {
      const amount = 44100;
      const curve = new Float32Array(amount);
      const intensity = intens / 1500;
      const a = 1 - intensity;
      for (let i = 0; i < amount; i++) {
        const x = i * 2 / amount - 1;
        const y = x < 0 ? -Math.pow(Math.abs(x), a + 0.04) : Math.pow(x, a);
        curve[i] = tanh(y * 2);
      }
      return curve;
    },
    [DISTORTION_TYPES.SUPERFUZZ]: (intens)=> {
      const amount = 22050;
      const curve = new Float32Array(amount);
      const intensity = Math.pow((intens / 150), 3);
      for (let d = 0; amount > d; d += 1) {
        const e = 2 * d / amount - 1;
        curve[d] = (1 + intensity) * e / (1 + intensity * Math.abs(e));
      }
      return curve;
    },
    [DISTORTION_TYPES.CRUNCH]: (intens)=> {
      const amount = 22050;
      const curve = new Float32Array(amount);
      const intensity = Math.pow((intens / 150), 2);
      for (let d = 0; d < 22050; d += 1) {
        const f = 2 * d / 22050 - 1;
        curve[d] = (1 + intensity) * f / (1 + intensity * Math.abs(f));
      }
      return curve;
    },
    [DISTORTION_TYPES.BEZIER]: (intens)=> {
      const p0 = {x: 0, y: 100};
      const p1 = {x: 10, y: 50};
      const p2 = {x: 0, y: 50};
      const p3 = {x: 100, y: 0};
      const amount = 44100;
      const accuracy = 1 / amount;
      const curve = new Float32Array(amount);
      let index = 0;
      curve[index++] = map(p0.y, 0, 100, 1, -1);
      for (let i = 0; i < 1; i += accuracy) {
        const p = bezier(i, p0, p1, p2, p3);
        curve[index++] = map(p.y, 0, 100, 1, -1);
      }
      return curve;
    },
    [DISTORTION_TYPES.CLASS_A]: (intens)=> {
      const intensity = 10 + 3 * (intens / 150);
      const amount = 22050;
      const curve = new Float32Array(amount);
      for (let d = 0; amount > d; d += 1) {
        const e = 2 * d / amount - 1;
        curve[d] = (1 + intensity) * e / (1 + intensity * Math.abs(e));
      }
      return curve;
    },
    [DISTORTION_TYPES.VERTICAL]: (intens)=> {
      const intensity = Math.pow((intens / 150) + 2, 3);
      const amount = 22050;
      const curve = new Float32Array(amount);
      for (let d = 0; d < 22050; d += 1) {
        const e = 2 * d / 22050 - 1;
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
  const cX = 3 * (p1.x - p0.x);
  const bX = 3 * (p2.x - p1.x) - cX;
  const aX = p3.x - p0.x - cX - bX;
  const cY = 3 * (p1.y - p0.y);
  const bY = 3 * (p2.y - p1.y) - cY;
  const aY = p3.y - p0.y - cY - bY;
  const x = (aX * Math.pow(t, 3)) + (bX * Math.pow(t, 2)) + (cX * t) + p0.x;
  const y = (aY * Math.pow(t, 3)) + (bY * Math.pow(t, 2)) + (cY * t) + p0.y;
  return {x: x, y: y};
};

export {
  DISTORTION_TYPES,
  DISTORTION_PRESETS,
  CLEAN_PRESETS,
  getDistortionTypeGenerateFunction,
};
