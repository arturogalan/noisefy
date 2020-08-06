import SingleAudioNode from '../SingleAudioNode';

/**
 * The audio-effects volume class.
 * This class lets you change the volume of the audio signal.
 */
export default class Volume extends SingleAudioNode {
  constructor(audioContext) {
    super(audioContext);
    // Default sampling value from [0-10]
    // The default input range as the other effects is 0-10 that is
    // If we want a [0-1] range we must set undersampling to 10
    this._undersampling = 1;
    // Create the gain-node which we'll use to change the volume.
    this.node = this.audioContext.createGain();
    // The initial volume level is 0
    this.level = 0;
    // not muted
    this._mute = false;
  }
  
  set undersampling(value) {
    this._undersampling = value;
    this.level = this._level;
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
    this._level = volume;
    // Parse the volume, it can not be lower than 0.
    let vol = parseFloat(volume >= 0 ? volume : 0);
    console.log('raw volume', volume);
    console.log('is muted', this._mute);
    if (this._mute && vol > 0) {
      this._levelBeforeMute = volume;
    } else {
      console.log('SETTED normalized vol with undersampling', this._undersampling, 'to', vol / this._undersampling)
      this.node.gain.value = vol / this._undersampling;
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
      if (this.level > 0) this._levelBeforeMute = this.level;
      // Set the volume to 0
      this.level = 0;
    } else {
      // Set the volume to the previous volume.
      this.level = this._levelBeforeMute || this._level;
    }
  }
}
