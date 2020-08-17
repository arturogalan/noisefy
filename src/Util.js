import {
  AudioContext,
} from 'standardized-audio-context';

const createAudioContext = function() {
  return new AudioContext({
    latencyHint: 'interactive',
  });
};

const deviceList = function() {
  return navigator.mediaDevices.enumerateDevices().then((devices)=> {
    return Promise.resolve(devices.map((device)=> {
      const [kind, type, direction] = device.kind.match(/(\w+)(input|output)/i);
      return {
        kind,
        type,
        direction,
        deviceId: device.deviceId,
        groupId: device.groupId,
        label: device.label,
        capabilities: device.getCapabilities ? device.getCapabilities() : '',
      };
    }));
  });
};
const deviceListHandler = function(callback) {
  navigator.mediaDevices.ondevicechange = function(event) {
    deviceList().then((list)=> {
      callback(list, event);
    });
  };
};
const validateValues = function(value, range, effectName) {
  if (range[0] > value || value > range[1]) {
    throw Error(`The value ${value} setted for the effect ${effectName} is wrong, must be in range: ${range}`);
  }
};
const convertToMono = (audioContext, input)=> {
  const splitter = audioContext.createChannelSplitter(2);
  const merger = audioContext.createChannelMerger(2);

  input.connect(splitter);
  splitter.connect(merger, 0, 0);
  splitter.connect(merger, 0, 1);
  return merger;
};
const normalize = (max, value)=> {
  // The input of every effect is 0 to 10 based, helper to normalize
  const base = 10;
  return (max * value) / base;
};
const denormalize = (max, value)=> {
  // The input of every effect is 0 to 10 based, helper to denormalize
  const base = 10;
  return (max * value) * base;
};
const scale = (num, inMin, inMax, outMin, outMax)=> {
  return (num - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
};

const trace = (...args)=> {
  const isVerbose = false;
  if (isVerbose) {
    // 🎼 🎵 🎶
    console.log('🎵', ...args);
  }
};
export {
  normalize,
  denormalize,
  scale,
  createAudioContext,
  deviceList,
  deviceListHandler,
  validateValues,
  convertToMono,
  trace,
};
