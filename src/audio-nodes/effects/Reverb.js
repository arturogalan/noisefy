import MultiAudioNode from '../MultiAudioNode';
import {trace, scale, normalize} from '../../util';
const irf = require('../../assets/impulses/reverb/hall-reverb.wav');

const getInputResponseFile = function(file) {
  return fetch(file, {
    method: 'get',
  }).then((response)=> {
    return response.clone().arrayBuffer();
  }).catch((e)=> {
    console.error('Error getting the file:', e);
  });
};

/**
 * The audio-effects reverb class.
 * This class lets you add a reverb effect.
 */
export default class Reverb extends MultiAudioNode {
  constructor(audioContext) {
    super(audioContext);

    this.nodes = {
      inputGainNode: audioContext.createGain(), // Create the input and output gain-node
      outputGainNode: audioContext.createGain(),
      convolverNode: audioContext.createConvolver(), // Create the convolver node to create the reverb effect
      wetGainNode: audioContext.createGain(), // Create the wetness controll gain-node
      levelGainNode: audioContext.createGain(), // Create the level controll gain-node
    };

    // Wire it all up
    this.nodes.inputGainNode.connect(this.nodes.convolverNode);
    this.nodes.inputGainNode.connect(this.nodes.wetGainNode);
    this.nodes.convolverNode.connect(this.nodes.levelGainNode);
    this.nodes.levelGainNode.connect(this.nodes.outputGainNode);
    this.nodes.wetGainNode.connect(this.nodes.outputGainNode);

    // Set the input gain-node as the input-node.
    this.node = this.nodes.inputGainNode;

    // Set the output gain-node as the output-node.
    this.output = this.nodes.outputGainNode;

    // Set the default wetness to 0.5
    this.wet = 0.5;

    // Set the default level to 1
    this.level = 1;

    this.responseFile = irf;
  }

  get responseFile() {
    return this.responseFile;
  }

  set responseFile(file) {
    // TODO Get the file from mapping constants
    getInputResponseFile(file).then((buffer)=> {
      if (!this.buffer) {
        this.buffer = buffer;
      }
    }).catch((e)=> {
      console.error('Error processing file:', e);
    });
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
   * @param  {number} wetness
   */
  set wet(wetness) {
    // Set the internal wetness value 0 to 1
    this._wet = wetness;
    const normalizedValue = scale(this._wet, 0, 10, 0, 1);
    trace('internal wetness', normalizedValue);

    // Set the new value for the wetness controll gain-node
    this.nodes.wetGainNode.gain.setValueAtTime(normalizedValue, this.audioContext.currentTime);
  }

  /**
   * Getter for the effect's level
   * @return {number}
   */
  get level() {
    return this._level;
  }

  /**
   * Setter for the effect's level
   * @param  {number} level
   */
  set level(level) {
    // Set the internal level value
    this._level = level;
    const normalizedValue = scale(this._wet, 0, 10, 0, 1);

    trace('internal level', normalizedValue);

    // Set the delayTime value of the delay-node
    this.nodes.levelGainNode.gain.setValueAtTime(normalizedValue, this.audioContext.currentTime);
  }

  /**
   * Getter for the effect's convolver buffer
   * @return {Buffer}
   */
  get buffer() {
    return this._buffer;
  }

  /**
   * Setter for the effect's convolver buffer
   * @param  {Stream} buffer
   */
  set buffer(buffer) {
    this.audioContext.decodeAudioData(buffer).then((decodedBuffer)=> {
      // Set the internal buffer value
      this._buffer = decodedBuffer;

      // Set the buffer gain-node value
      this.nodes.convolverNode.buffer = this._buffer;
    });
  }

  get gain() {
    return this._gain;
  }

  set gain(value) {
    const normalizedValue = parseFloat(normalize(1, value));
    const wetValue = Math.cos(normalizedValue * Math.PI / 2);
    const levelValue = Math.cos((1 - normalizedValue) * Math.PI / 2);
    this.wet = wetValue;
    this.level = levelValue;
    this._gain = normalizedValue;
  }
}
