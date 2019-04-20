let win = typeof window !== 'undefined' ? window : global;
/**
 * Check if the current browser supports getUserMedia.
 */
const getUserMedia = navigator.getUserMedia ||
  navigator.webkitGetUserMedia ||
  navigator.mozGetUserMedia ||
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

const updateDeviceList = function(callback, event) {
  navigator.mediaDevices.enumerateDevices().then((devices)=> {
    let devicesMap = devices.map((device)=> {
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
    });
    callback(devicesMap, event);
  });
};
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
      callback(list, event)
    });
  };
};

export {
  hasGetUserMedia,
  hasAudioContext,
  deviceList,
  deviceListHandler,
};
