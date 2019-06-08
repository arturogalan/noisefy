let win = typeof window !== 'undefined' ? window : global;
/**
 * Check if the current browser supports getUserMedia.
 // https://stackoverflow.com/questions/37673000/typeerror-getusermedia-called-on-an-object-that-does-not-implement-interface
 */
const getUserMedia = navigator.getUserMedia ||
navigator.mozGetUserMedia ||
navigator.webkitGetUserMedia ||
navigator.msGetUserMedia;
const hasGetUserMedia = !!getUserMedia;
/**
 * Check if the current browser supports the web-audio-api .
 */
const audioContext = win.AudioContext ||
  win.webkitAudioContext ||
  win.mozAudioContext ||
  win.msAudioContext;

const hasAudioContext = !!audioContext;

const deviceList = function() {
  return navigator.mediaDevices.enumerateDevices().then((devices)=> {
    return Promise.resolve(devices.map((device)=> {
      let [kind, type, direction] = device.kind.match(/(\w+)(input|output)/i);
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

export {
  hasGetUserMedia,
  getUserMedia,
  hasAudioContext,
  deviceList,
  deviceListHandler,
};
