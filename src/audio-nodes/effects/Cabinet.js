import MultiAudioNode from '../MultiAudioNode';
import { normalize } from '../../util';
import { CABINET_FILES } from '../factories/CabinetGenerator';

const CABINET_LOCAL_FILES = {};
let defaultCabinet;
for (const type in CABINET_FILES) {
  if (!defaultCabinet) defaultCabinet = type;
  CABINET_LOCAL_FILES[type] = CABINET_FILES[type];
}

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
export default class Cabinet extends MultiAudioNode {
  // _wet;
  // _level;
  // _buffer;

  constructor(audioContext, requiredCabinetType) {
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

    this.gain = 5;
    // set by default the first cabinet we found in definition
    this._cabinetImpulse = defaultCabinet;
  }

  get responseFile() {
    return this.responseFile;
  }

  set responseFile(file) {
    getInputResponseFile(file).then((buffer)=> {
      this.buffer = buffer;
    }).catch((e)=> {
      console.error('Error processing file:', e);
    });
  }

  get cabinetImpulse() {
    return this._cabinetImpulse;
  }

  set cabinetImpulse(requiredCabinetType) {
    const file = require(`../../assets/impulses/cabinet/${CABINET_LOCAL_FILES[requiredCabinetType]}`);
    this.responseFile = file;
    this._cabinetImpulse = requiredCabinetType;
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
    this._wet = parseFloat(wetness);

    // Set the new value for the wetness controll gain-node
    this.nodes.wetGainNode.gain.setValueAtTime(this._wet, this.audioContext.currentTime);
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
    this._level = parseFloat(level);

    // Set the delayTime value of the delay-node
    this.nodes.levelGainNode.gain.setValueAtTime(this._level, this.audioContext.currentTime);
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
