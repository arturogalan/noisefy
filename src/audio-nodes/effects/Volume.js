import SingleAudioNode from '../SingleAudioNode';

/**
 * The audio-effects volume class.
 * This class lets you change the volume of the audio signal.
 */
export default class Volume extends SingleAudioNode {
  constructor(audioContext) {
    super(audioContext);
    // Create the gain-node which we'll use to change the volume.
    this.node = this.audioContext.createGain();
    // The initial volume level is 0
    this.level = 0;
  }

  /**
     * Getter for the effects volume.
     * @return {Float}
     */
  get level() {
    return this._level;
  }

  /**
     * Setter for the effects volume.
     * @param  {Float} volume The volume, tipical between 0 and 1.
     */
  set level(volume) {
    // Parse the volume, it can not be lower than 0.
    let vol = parseFloat(volume >= 0 ? volume : 0);
    if (this._mute && vol > 0) {
      this._levelBeforeMute = vol;
    } else {
      this.node.gain.value = this._level = vol;
      this._mute = (vol === 0);
    }
  }

  /**
     * Getter for the effcts mute functionality.
     * @return {[type]} [description]
     */
  get mute() {
    return this._mute;
  }

  /**
     * Setter for the effects mute functionality.
     * @param  {Boolean} mute Whether the effect is muted.
     */
  set mute(mute) {
    this._mute = !!mute;
    if (this._mute) {
      // Keep track of the volume before muting
      this._levelBeforeMute = this.level;
      // Set the volume to 0
      this.level = 0;
    } else {
      // Set the volume to the previous volume.
      this.level = this._levelBeforeMute || this._level;
    }
  }
}
