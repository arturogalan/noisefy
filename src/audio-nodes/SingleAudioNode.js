/**
 * The basic audio node class.
 * This is de skeleton for a audio  effect.
 * When the effect only contains 1 audioNode this class can be used.
 */
export default class SingleAudioNode {
  // nodes = {}; //{[key: string]: AudioNode|GainNode|DelayNode|WaveShaperNode|BiquadFilterNode|OscillatorNode|ConvolverNode} = {};

  constructor(audioContext) {
    // Set the audio-context.
    this._audioContext = audioContext;
  }

  /**
   * The effects AudioContext getter.
   * @return {AudioContext} The AudioContext used by the effect.
   */
  get audioContext() {
    return this._audioContext;
  }

  /**
   * The effects AudioContext setter.
   * @param  {AudioContext} audioContext
   */
  set audioContext(audioContext) {
    this._audioContext = audioContext;
  }

  /**
   * The effect's audio-node getter.
   * @return {AudioNode} The audio-node used for the effect.
   */
  get node() {
    return this._node;
  }

  /**
   * The effect's audio-node setter.
   * @param  {AudioNode} node
   */
  set node(node) {
    this._node = node;
  }

  /**
   * Connect the effect to other effects or native audio-nodes.
   * @param  {AudioNode|SingleAudioNode} node
   * @return {AudioNode|SingleAudioNode}
   */
  connect(node) {
    if (node instanceof SingleAudioNode) {
      this.node.connect(node.node);
    } else {
      this.node.connect(node);
    }
    return node;
  }

  /**
   * disconnect the effect.
   * @return {AudioNode}
   */
  disconnect() {
    this.node.disconnect();
    return this.node;
  }

  /**
   * Alias for the disconnect method, to offer the same api as a MultiAudioNode.
   * @return {AudioNode}
   */
  destroy() {
    return this.disconnect();
  }
}
