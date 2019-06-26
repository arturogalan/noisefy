import MultiAudioNode from '../MultiAudioNode';

/**
 * The audio-effects distortion class.
 * This class lets you add a distortion effect.
 */
export default class Distortion extends MultiAudioNode {
  // private _intensity: number;
  // private _gain: number;
  // private _lowPassFilter: boolean;

  constructor(audioContext) {
    super(audioContext);

    this.nodes = {
      waveshaper: this.audioContext.createWaveShaper(), // Create the waveshaper-node we'll use to create the distortion effect.
      gainNode: this.audioContext.createGain(), // Create the gain-nodes we use to increase the gain.
      gainNode2: this.audioContext.createGain(),
      biquadFilterNode: this.audioContext.createBiquadFilter(), // Create the biquad-filter-node we'll use to create a lowpass filter.
    };

    // Set the oversample value to 4x by default.
    this.nodes.waveshaper.oversample = '4x';

    // Set the type of to lowpass by default.
    this.nodes.biquadFilterNode.type = 'lowpass';

    // Set the frequency value to 2000 by default.
    this.nodes.biquadFilterNode.frequency.value = 2000;

    // Connect all nodes together
    this.nodes.waveshaper.connect(this.nodes.gainNode);
    this.nodes.gainNode.connect(this.nodes.gainNode2);
    this.nodes.gainNode2.connect(this.nodes.biquadFilterNode);

    // Set the waveshaper-node as the input-node.
    this.node = this.nodes.waveshaper;
    // Set the biquad-filter-node as the output-node.
    this.output = this.nodes.biquadFilterNode;

    // The default intensity is 100.
    this.intensity = 100;

    // The default gain is 1.
    this.gain = 50;

    // // The lowpass filter is turned off by default.
    this.lowPassFilter = false;
  }

  /**
   * Calculate a distortion curve.
   *
   * http://stackoverflow.com/questions/22312841/waveshaper-node-in-webaudio-how-to-emulate-distortion
   *
   * @param  {number} intens The intensity of the curve modification.
   * @return {Float32Array}
   */
  calculateDistortionCurve(intens) {
    const intensity = parseInt(intens) || 100;
    const amount = 44100;
    const deg = Math.PI / 180;
    const curve = new Float32Array(amount);

    for (let i = 0; i < amount; ++i) {
      let x = i * 2 / amount - 1;
      curve[i] = (3 + intensity) * x * 20 * deg / (Math.PI + intensity * Math.abs(x));
    }

    return curve;
  }

  /**
   * Getter for the effect's intensity.
   * @return {number}
   */
  get intensity() {
    return this._intensity;
  }

  /**
   * @param  {number} intensity
   * Setter for the effect's intensity.
   */
  set intensity(intensity) {
    // Set the internal intensity value.
    this._intensity = parseInt(intensity);

    // Set the new curve of the waveshaper-node
    this.nodes.waveshaper.curve = this.calculateDistortionCurve(this._intensity);
  }

  /**
   * Getter for the effect's gain.
   * @return {number}
   */
  get gain() {
    return this._gain;
  }

  /**
   * Setter for the effect's gain.
   * @param  {number} gain
   */
  set gain(gain) {
    // Set the internal gain value.
    this._gain = parseFloat(gain);

    // Set the gain-node's gain value.
    this.nodes.gainNode.gain.value = this._gain;
    this.nodes.gainNode2.gain.value = 1 / this._gain;
  }

  /**
   * Getter for the lowpass filter.
   * @return {boolean}
   */
  get lowPassFilter() {
    return this._lowPassFilter;
  }

  /**
   * Setter for the lowpass filter.
   * @param {boolean} lowPassFilter
   */
  set lowPassFilter(lowPassFilter) {
    // Set the internal lowpass filter value.
    this._lowPassFilter = !!lowPassFilter;
    // Set the biquad-filter-node's frequency.
    this.nodes.biquadFilterNode.frequency.value = (this._lowPassFilter ? 2000 : 1000);
  }
}
