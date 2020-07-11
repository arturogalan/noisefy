import MultiAudioNode from '../MultiAudioNode';
import {normalize} from '../../util';
const irf = require('../../assets/impulses/reverb/hall-reverb.ogg');

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
  // _wet;
  // _level;
  // _buffer;

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
    // Set the internal wetness value
    this._wet = parseFloat(normalize(1, wetness));

    // Set the new value for the wetness controll gain-node
    this.nodes.wetGainNode.gain.value = this._wet;
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
    this._level = parseFloat(normalize(1, level));

    // Set the delayTime value of the delay-node
    this.nodes.levelGainNode.gain.value = this._level;
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
    this.audioContext.decodeAudioData(buffer, (buffer)=> {
      // Set the internal buffer value
      this._buffer = buffer;

      // Set the buffer gain-node value
      this.nodes.convolverNode.buffer = this._buffer;
    }, (error)=> {
      console.error('Error decoding file:', error);
    });
  }
}
