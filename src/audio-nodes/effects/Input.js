
import SingleAudioNode from '../SingleAudioNode';
import MultiAudioNode from '../MultiAudioNode';
import {hasGetUserMedia} from '../../Util';

export default class Input extends SingleAudioNode {
  constructor(audioContext) {
    super(audioContext);
    this._deferredConnects = [];
    this._hasPermissions = false;
  }

  get input() {
    return this.node;
  }
  set input(stream) {
    // Create a media-stream source.
    this.node = this.audioContext.createMediaStreamSource(stream);
  }
  /**
     * Get your microphone sound as input.
     * @return {Promise<AudioNode>} Resolves when you accept to use the microphone.
     */
  getUserMedia() {
    return new Promise((resolve, reject)=> {
      if (hasGetUserMedia) {
        navigator.getUserMedia({
          audio: {
            optional: [
              {
                "echoCancellation" : false,
              },
              {
                "mozNoiseSuppression": false,
              },
              {
                "mozAutoGainControl": false,
              },
  
            ]
        }
        }, (stream)=> {
          this.input = stream;
          this._hasPermissions = true;
          window.stream = stream; // make stream available to console
          // Connect the deffered connects
          this._deferredConnects.forEach((node)=> {
            this.connect(node);
          });

          resolve(stream);
        }, (error)=> {
          reject(error);
        });
      } else {
        reject(Error('Your browser does not support the use of user-media, please upgrade or use another browser!'));
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
      } else {
        this.getUserMedia().then(()=> {
          navigator.mediaDevices.enumerateDevices().then((devices)=> {
            resolve(devices.filter((device)=> {
              return device.kind && device.kind === 'audioinput';
            }));
          }).catch((error)=> {
            reject(error);
          });
        }).catch((error)=> {
          reject(error);
        });
      }
    });
  }
}
