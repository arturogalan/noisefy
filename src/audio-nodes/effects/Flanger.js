import MultiAudioNode from '../MultiAudioNode';
import {normalize} from '../../util';

/**
 * The audio-effects flanger class.
 * This class lets you add a flanger effect.
 */
export default class Flanger extends MultiAudioNode {
  // private _delay: number;
  // private _depth: number;
  // private _feedback: number;
  // private _speed: number;

  constructor(audioContext) {
    super(audioContext);

    this.nodes = {
      inputGainNode: audioContext.createGain(), // Create the input gain-node
      wetGainNode: audioContext.createGain(), // Create the wetness controll gain-node
      delayNode: audioContext.createDelay(), // Create the delay node
      gainNode: audioContext.createGain(), // Create the gain controll gain-node
      feedbackGainNode: audioContext.createGain(), // Create the feedback controll gain-node
      oscillatorNode: audioContext.createOscillator(), // Create the oscilator node
    };

    // Wire it all up
    this.nodes.oscillatorNode.connect(this.nodes.gainNode);
    this.nodes.gainNode.connect(this.nodes.delayNode.delayTime);
    this.nodes.inputGainNode.connect(this.nodes.wetGainNode);
    this.nodes.inputGainNode.connect(this.nodes.delayNode);
    this.nodes.delayNode.connect(this.nodes.wetGainNode);
    this.nodes.delayNode.connect(this.nodes.feedbackGainNode);
    this.nodes.feedbackGainNode.connect(this.nodes.inputGainNode);

    // Setup the oscillator
    this.nodes.oscillatorNode.type = 'sine';
    this.nodes.oscillatorNode.start(0);

    // Set the input gain-node as the input-node.
    this.node = this.nodes.inputGainNode;

    // Set the output gain-node as the output-node.
    this.output = this.nodes.wetGainNode;

    // Set the default delay of 0.005 seconds
    this.delay = 0.005;

    // Set the default depth to 0.002;
    this.depth = 0.002;

    // Set the default feedback to 0.5
    this.feedback = 0.5;

    // Set the default speed to 0.25Hz
    this.speed = 0.25;
  }

  /**
   * Getter for the effect's delay
   * @return {number}
   */
  get delay() {
    return this._delay;
  }

  /**
   * Setter for the effect's delay
   * @param  {number} delay
   */
  set delay(delay) {
    // Set the internal delay value 0.001 to 0.02
    this._delay = parseFloat(normalize(0.02, delay));

    // Set the new value for the delay-node
    this.nodes.delayNode.delayTime.value = this._delay;
  }

  /**
   * Getter for the effect's depth
   * @return {number}
   */
  get depth() {
    return this._depth;
  }

  /**
   * Setter for the effect's depth
   * @param  {number} depth
   */
  set depth(depth) {
    // Set the internal depth value
    this._depth = parseFloat(normalize(0.02, depth));

    // Set the gain value of the gain-node
    this.nodes.gainNode.gain.value = this._depth;
  }

  /**
   * Getter for the effect's feedback
   * @return {number}
   */
  get feedback() {
    return this._feedback;
  }

  /**
   * Setter for the effect's feedback
   * @param  {number} feedback
   */
  set feedback(feedback) {
    // Set the internal feedback value 0 to 1
    this._feedback = parseFloat(normalize(1, feedback));

    // Set the feedback gain-node value
    this.nodes.feedbackGainNode.gain.value = this._feedback;
  }

  /**
   * Getter for the effect's speed
   * @return {number}
   */
  get speed() {
    return this._speed;
  }

  /**
   * Setter for the effect's speed
   * @param  {number} speed
   */
  set speed(speed) {
    // Set the internal speed value
    this._speed = parseFloat(normalize(1, speed));

    // Set the speed gain-node value
    this.nodes.oscillatorNode.frequency.value = this._speed;
  }
}
