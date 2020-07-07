import SingleAudioNode from './SingleAudioNode';
import MultiAudioNode from './MultiAudioNode';
/**
 * The multi-effect-node class.
 * When creating a more complex object existing out of multiple audio effects (for example an amp),
 * we can wrap it in this class.
 * You can set the input node (effect.node) and the output node of the effect (effect.output).
 * The input node is the first audio-node in the first component effect, your previous effect will be connected to this node.
 * The output node is the last audio-node in the las component effect, the next effect will be connected to this node.
 */
export default class MultiEffectNode {
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
  get input() {
    return this._inputNode;
  }

  /**
   * The effect's audio-node setter.
   * @param  {AudioNode} input
   */
  set input(input) {
    this._inputNode = input;
  }

  /**
     * Getter for the effects output node.
     * @return {AudioNode}
     */
  get output() {
    return this._outputNode;
  }

  // When creating and object that extends this class, you have to set this output property pointing to
  // the last audionNode of your main effect
  // to properly connect other elements throw the connect method beyond
  set output(output) {
    this._outputNode = output;
  }

  connect(node) {
    if (node instanceof SingleAudioNode || node instanceof MultiAudioNode) {
      this.output.connect(node.node);
    }
    return node;
  }

  /**
     * Disconnect the effect.
     * @return {AudioNode}
     */
  disconnect() {
    this.output.disconnect();
    return this.output;
  }

  /**
     * Destroy an effect.
     * @return {AudioNode}
     */
  destroy() {
    // Each component is and effect of type SingleAudioNode or MultiAudioNode
    for (const component in this.components) {
      component.destroy();
    }
    return this.disconnect();
  }
}
