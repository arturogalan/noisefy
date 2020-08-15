import SingleAudioNode from '../SingleAudioNode';

/**
 * The audio-effects tremolo class.
 * This class lets you add a tremolo effect.
 *
 * Standard values are "sine", "square", "sawtooth", "triangle" and "custom". The default is "sine".
 */
export default class Tremolo extends SingleAudioNode {
  // private _speed: number;

  constructor(audioContext) {
    super(audioContext);

    this.nodes = {
      gainNode: audioContext.createGain(), // Create the gain-node
      oscillatorNode: audioContext.createOscillator(), // Create the oscilator node
    };

    // Wire it all up
    this.nodes.oscillatorNode.connect(this.nodes.gainNode.gain);

    // Setup the oscillator
    this.nodes.oscillatorNode.type = 'sine';
    this.nodes.oscillatorNode.start(0);

    // Set the gain-node as the main node.
    this.node = this.nodes.gainNode;

    // Set the default speed to 20Hz
    this.speed = 20;
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
    // Set the internal speed value 0 to 10 no scaling
    this._speed = parseFloat(speed);

    // Set the new value for the oscillator frequency
    this.nodes.oscillatorNode.frequency.value = this._speed;
  }
}
