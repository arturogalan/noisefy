import MultiAudioNode from '../MultiAudioNode';

/**
 * The audio-effects Basic Equalizer class.
 * This class lets you add an Equalizer with bass mid and trebble filters.
 */
export default class Equalizer extends MultiAudioNode {
  constructor(audioContext) {
    super(audioContext);

    this.nodes = {
      trebbleFilterNode: this.audioContext.createBiquadFilter(),
      middleFilterNode: this.audioContext.createBiquadFilter(),
      bassFilterNode: this.audioContext.createBiquadFilter(),
    };

    this.nodes.trebbleFilterNode.frequency.value = 6500;
    this.nodes.trebbleFilterNode.type = 'highshelf';
    this.nodes.trebbleFilterNode.Q.value = 0.7071;

    this.nodes.middleFilterNode.frequency.value = 1700;
    this.nodes.middleFilterNode.type = 'peaking';
    this.nodes.middleFilterNode.Q.value = 0.7071;

    this.nodes.bassFilterNode.frequency.value = 100;
    this.nodes.bassFilterNode.type = 'lowshelf';
    this.nodes.bassFilterNode.Q.value = 0.7071;


    // Connect all nodes together
    this.nodes.trebbleFilterNode.connect(this.nodes.middleFilterNode);
    this.nodes.middleFilterNode.connect(this.nodes.bassFilterNode);
    // node and output node
    this.node = this.nodes.trebbleFilterNode;
    this.output = this.nodes.bassFilterNode;
  }

  // Setters and getters for public properties
  get trebbleGain() {
    return this._trebbleGain;
  }
  set trebbleGain(gain) {
    const normalizedValue = parseFloat(gain);
    this._trebbleGain = (normalizedValue - 10) * 10;
    console.log('trebble gain', this._trebbleGain);
    this.nodes.trebbleFilterNode.gain.value = this._trebbleGain;
  }
  get middleGain() {
    return this._middleGain;
  }
  set middleGain(gain) {
    const normalizedValue = parseFloat(gain);
    this._middleGain = (normalizedValue - 5) * 4;
    console.log('middle gain', this._middleGain);
    this.nodes.middleFilterNode.gain.value = this._middleGain;
  }
  get bassGain() {
    return this._bassGain;
  }
  set bassGain(gain) {
    const normalizedValue = parseFloat(gain);
    this._bassGain = (normalizedValue - 10) * 7;
    console.log('bass gain', this._bassGain);
    this.nodes.bassFilterNode.gain.value = this._bassGain;
  }
}
