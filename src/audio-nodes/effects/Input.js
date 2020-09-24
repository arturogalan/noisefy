
import SingleAudioNode from '../SingleAudioNode';
import MultiAudioNode from '../MultiAudioNode';
import {
  MediaStreamAudioSourceNode,
} from 'standardized-audio-context';
import {convertToMono} from '../../util';


export default class Input extends SingleAudioNode {
  constructor(audioContext, mono = true) {
    super(audioContext);
    this._deferredConnects = [];
    this._hasPermissions = false;
    this._isConvertedToMono = mono;
  }

  get input() {
    return this.node;
  }

  set input(streamSource) {
    this.node = streamSource;
  }

  activateInput() {
    return new Promise((resolve, reject)=> {
      try {
        navigator.mediaDevices.getUserMedia({
          audio: {
            echoCancellation: false,
            autoGainControl: false,
            noiseSuppression: false,
            latency: 0,
          },
        }).then((mediaStream)=> {
          const input = new MediaStreamAudioSourceNode(this.audioContext, {
            mediaStream,
          });
          this.node = this._isConvertedToMono ? convertToMono(this.audioContext, input) : input;
          this._hasPermissions = true;
          if (this.audioContext.state === 'suspended') {
            this.audioContext.resume();
          }
          resolve();
        });
      } catch (err) {
        reject(err);
      }
    });
  }

  /**
     * Connect the effect to other effects or native audio-nodes.
     * @param  {AudioNode|SingleAudioNode|MultiAudioNode} node
     * @return {AudioNode|SingleAudioNode|MultiAudioNode}
     */
  connect(node) {
    // If there is no input node yet, connect when there is a node
    if (typeof this.node === 'undefined') {
      this._deferredConnects.push(node);
      return node;
    }
    if (node instanceof SingleAudioNode || node instanceof MultiAudioNode) {
      this.node.connect(node.node);
    } else {
      this.node.connect(node);
    }
    return node;
  }

  // Get a list of audio in-and-output devices devices.
  // @return A list of the available audio in-and-output devices.
  getAudioDevices() {
    return new Promise((resolve, reject)=> {
      if (this._hasPermissions) {
        navigator.mediaDevices.enumerateDevices().then((devices)=> {
          resolve(devices.filter((device)=> {
            return device.kind && device.kind === 'audioinput';
          }));
        }).catch((error)=> {
          reject(error);
        });
      }
    });
  }
}
