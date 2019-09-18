const DISTORTION_TYPES = {
  ASYMETRIC: 'asymetric',
  STANDARD: 'standard',
  SUPER_CLEAN: 'superClean',
  CLEAN: 'clean',
  SMOOTH: 'smooth',
  FUZZ: 'fuzz',
  SUPERFUZZ: 'superFuzz',
  CRUNCH: 'crunch',
  NOT_SO_DISTORTED: 'notSoDistorted',
  STANDARD_LOW: 'standardLow',
  HIGH_GAIN: 'highGain',
  HIGH_GAIN_MODERN: 'highGainModern',
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
      const intensity = intens / 153 * 10;
      const amount = 22050;
      const curve = new Float32Array(amount);

      for (let i = 0; amount > i; i += 1) {
        curve[i] = (2 * i / amount - 1 < 0 ? -1 : 1) * intensity;
      }
      return curve;
    },
    [DISTORTION_TYPES.HIGH_GAIN_MODERN]: (intens)=> {
      let intensity = intens / 2;
      intensity = 1 / (1 + Math.pow(intensity, 4));
      const amount = 22050;
      const curve = new Float32Array(amount);

      for (let i = 0; amount > i; i += 1) {
        let x = 2 * i / amount - 1;
        curve[i] = x / (Math.abs(x) + intensity);
      }
      return curve;
    },
    // amount not relevant, asymetric fixed curve, helpful to generate ODD harmonics
    [DISTORTION_TYPES.ASYMETRIC]: (intens)=> {
      let intensity = intens / 1500;
      let curve = new Float32Array(44100);

      for (let i = 0; i < intensity; i++) {
        let x = i * 2 / intensity - 1;
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
  }[type] || (()=> {});
};

export {
  DISTORTION_TYPES,
  getDistortionTypeGenerateFunction,
};
