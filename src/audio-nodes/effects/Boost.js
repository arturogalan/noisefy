import MultiAudioNode from '../MultiAudioNode';
import {scale, trace} from '../../util';
import { DISTORTION_TYPES, getDistortionTypeGenerateFunction } from '../factories/DistortionGenerator';

export default class Boost extends MultiAudioNode {
  constructor(audioContext) {
    super(audioContext);

    this.nodes = {
      inputGainNode: audioContext.createGain(),
      outputGainNode: audioContext.createGain(),
      filterNode: audioContext.createBiquadFilter(), // Tone
      shaperNode: audioContext.createWaveShaper(), // Distortion shape
    };

    // Wire it all up
    this.nodes.inputGainNode.connect(this.nodes.shaperNode);
    this.nodes.shaperNode.connect(this.nodes.filterNode);
    this.nodes.filterNode.connect(this.nodes.outputGainNode);

    // Set the input gain-node as the input-node.
    this.node = this.nodes.inputGainNode;
    // Set the output gain-node as the output-node.
    this.output = this.nodes.outputGainNode;

    this.nodes.shaperNode.curve = getDistortionTypeGenerateFunction(DISTORTION_TYPES.STANDARD_LOW)(640);
    this.nodes.filterNode.frequency.value = 3317;
    this.nodes.inputGainNode.gain.value = 1;
    this.nodes.outputGainNode.gain.value = 2;
  }

  /**
   * Getter for the effect's gain
   * @return {number}
   */
  get gain() {
    return this._gain;
  }

  /**
   * Setter for the effect's gain
   * @param  {number} gain
   */
  set gain(gain) {
    // Set the internal gain value
    this._gain = gain;
    const normalizedValue = scale(this._gain, 0, 10, 0, 1);
    trace('internal gain', normalizedValue);

    this.nodes.outputGainNode.gain.setValueAtTime(normalizedValue, this.audioContext.currentTime);
  }

  /**
   * Getter for the effect's tone
   * @return {number}
   */
  get tone() {
    return this._tone;
  }

  /**
   * Setter for the effect's tone
   * @param  {number} tone
   */
  set tone(tone) {
    // Set the internal tone value
    this._tone = tone;
    const normalizedValue = scale(this._tone, 0, 10, 2000, 4000);
    // TODO check that between 2000 and 4000 works
    trace('internal tone', normalizedValue);
    this.nodes.filterNode.frequency.setValueAtTime(normalizedValue, this.audioContext.currentTime);
  }
}
