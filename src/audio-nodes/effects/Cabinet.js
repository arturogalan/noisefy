import MultiAudioNode from '../MultiAudioNode';
import {CABINET_TYPES} from '../factories/CabinetGenerator';
const irfRequiredFiles = {};
Object.keys(CABINET_TYPES).forEach((cabinetImpulseKey)=> {
  irfRequiredFiles[cabinetImpulseKey] = {
    name: cabinetImpulseKey,
    fileUrl: require(`../../assets/impulses/cabinet/${CABINET_TYPES[cabinetImpulseKey]}`),
  };
});

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

    // Set the default wetness to 0.5
    // this.wet = 0.30901699437494745;
    this.wet = 0.3;


    // Set the default level to 1
    // this.level = 0.9510565162951535;
    this.level = 0.9;

    this.responseFile = (irfRequiredFiles[requiredCabinetType] || irfRequiredFiles.WARSHALL_1).fileUrl;
    this._cabinetImpulse = (irfRequiredFiles[requiredCabinetType] || irfRequiredFiles.WARSHALL_1).name;
  //   function setGain(value) {
  //     var v1 = Math.cos(value * Math.PI / 2);
  //     var v2 = Math.cos((1 - value) * Math.PI / 2);
  //     directGain.gain.value = v1;
  //     convolverGain.gain.value = v2;
  // }
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
    this.responseFile = (irfRequiredFiles[requiredCabinetType] || irfRequiredFiles.WARSHALL_1).fileUrl;
    this._cabinetImpulse = (irfRequiredFiles[requiredCabinetType] || irfRequiredFiles.WARSHALL_1).name;
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
    this._level = parseFloat(level);

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

  set gain(value) {
    const wetValue = Math.cos(value * Math.PI / 2);
    const levelValue = Math.cos((1 - value) * Math.PI / 2);
    this.wet = wetValue;
    this.level = levelValue;
  }
}
