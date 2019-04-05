import MultiAudioNode from '../MultiAudioNode';

/**
 * The audio-effects delay class.
 * This class lets you add a delay effect.
 */
export default class Delay extends MultiAudioNode {
  // private _wet: number;
  // private _speed: number;
  // private _duration: number;

  constructor(audioContext) {
    super(audioContext);

    this.nodes = {
      inputGainNode: audioContext.createGain(), // Create the input and output nodes of the effect
      outputGainNode: audioContext.createGain(),
      wetGainNode: audioContext.createGain(), // Create the gain-node we'll use to controll the wetness of the delay
      durationGainNode: audioContext.createGain(), // Create the gain node we'll use to controll the duration of the delay
      delayNode: audioContext.createDelay(), // Create the delay node
    };

    // Wire it all up
    this.nodes.inputGainNode.connect(this.nodes.wetGainNode);
    this.nodes.inputGainNode.connect(this.nodes.delayNode);
    this.nodes.durationGainNode.connect(this.nodes.delayNode);
    this.nodes.delayNode.connect(this.nodes.durationGainNode);
    this.nodes.delayNode.connect(this.nodes.outputGainNode);
    this.nodes.wetGainNode.connect(this.nodes.outputGainNode);

    // Set the input gain-node as the input-node.
    this.node = this.nodes.inputGainNode;
    // Set the output gain-node as the output-node.
    this.output = this.nodes.outputGainNode;

    // Set the default wetness to 1
    this.wet = 1;

    // Set the default speed to 1 second
    this.speed = 1;

    // Set the default duration to 0.4
    this.duration = 0.4;
  }

  /**
   * Getter for the effect's wetness
   * @return {number}
   */
  get wet() {
    return this._wet;
  }

  /**
   * Setter for the effect's wetness
   * @param  {number|string} wetness
   */
  set wet(wetness) {
    // Set the internal wetness value
    this._wet = parseFloat(wetness);

    // Set the new value for the wetness controll gain-node
    this.nodes.wetGainNode.gain.value = this._wet;
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
   * @param {number|string} speed
   */
  set speed(speed) {
    // Set the internal speed value
    this._speed = parseFloat(speed);

    // Set the delayTime value of the delay-node
    this.nodes.delayNode.delayTime.value = this._speed;
  }

  /**
   * Getter for the effect's duration
   * @return {number}
   */
  get duration() {
    return this._duration;
  }

  /**
   * Setter for the effect's duration
   * @param  {number|string} duration
   */
  set duration(duration) {
    // Set the internal duration value
    this._duration = parseFloat(duration);

    // Set the duration gain-node value
    this.nodes.durationGainNode.gain.value = this._duration;
  }
}
