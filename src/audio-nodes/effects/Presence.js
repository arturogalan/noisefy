import SingleAudioNode from '../SingleAudioNode';

/**
 * The audio-effects Basic Presence class.
 * This class lets you add a Presence filter.
 */
export default class Presence extends SingleAudioNode {
  constructor(audioContext) {
    super(audioContext);

    this.node = this.audioContext.createBiquadFilter();
    this.node.frequency.value = 3900;
    this.node.type = 'peaking';
    this.node.Q.value = 0.7071;
  }

  // Setters and getters for public properties
  get gain() {
    return this._gain;
  }

  set gain(gain) {
    const normalizedValue = (parseFloat(gain) - 5) * 2;
    this.node.gain.value = normalizedValue;
    this._gain = gain;
  }
}
