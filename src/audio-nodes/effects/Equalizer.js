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
    console.log('trebble gain raw: ', gain);

    const normalizedValue = (parseFloat(gain) - 10) * 10;
    console.log('trebble gain normalized: ', normalizedValue);
    this.nodes.trebbleFilterNode.gain.value = normalizedValue;
    this._trebbleGain = gain;
  }
  get middleGain() {
    return this._middleGain;
  }
  set middleGain(gain) {
    const normalizedValue = (parseFloat(gain) - 5) * 4;
    console.log('middle gain', normalizedValue);
    this.nodes.middleFilterNode.gain.value = normalizedValue;
    this._middleGain = gain;
  }
  get bassGain() {
    return this._bassGain;
  }
  set bassGain(gain) {
    const normalizedValue = (parseFloat(gain) - 10) * 7;
    this.nodes.bassFilterNode.gain.value = normalizedValue;
    console.log('bass gain', normalizedValue);
    this._bassGain = gain;
  }
}
