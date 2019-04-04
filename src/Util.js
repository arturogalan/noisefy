/**
 * Check if the current browser supports getUserMedia.
 */
const getUserMedia = navigator.getUserMedia ||
  navigator.webkitGetUserMedia ||
  navigator.mozGetUserMedia ||
  navigator.msGetUserMedia;

/**
 * Check if the current browser supports the web-audio-api .
 */

const audioContext = win.AudioContext ||
  win.webkitAudioContext ||
  win.mozAudioContext ||
  win.msAudioContext;

export default { 
  hasGetUserMedia = !!getUserMedia,
  hasAudioContext = !!audioContext,
}
