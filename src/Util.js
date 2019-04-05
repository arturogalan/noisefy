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

export {
  hasGetUserMedia,
  hasAudioContext,
};
