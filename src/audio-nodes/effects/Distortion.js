import SingleAudioNode from '../SingleAudioNode';
import {validateValues} from '../../Util';
import {DISTORTION_TYPES, getDistortionTypeGenerateFunction} from '../factories/DistortionGenerator';
/**
 * The audio-effects distortion class.
 * This class lets you add a distortion effect.
 */
export default class Distortion extends SingleAudioNode {
  constructor(audioContext) {
    super(audioContext);
    this.node = this.audioContext.createWaveShaper();
    // TODO Is this oversample important?
    // this.node.oversample = '4x';
    this.distortionType = DISTORTION_TYPES.STANDARD;
  }

  get intensity() {
    return this._intensity;
  }

  set intensity(intensity) {
    validateValues(intensity, [0, 10], 'distortion');
    // Set the internal intensity value.
    let value = 150 * parseFloat(intensity);
    let minp = 0;
    let maxp = 1500;
    // The result should be between 10 an 1500
    let minv = Math.log(10);
    let maxv = Math.log(1500);
    // calculate adjustment factor
    let scale = (maxv - minv) / (maxp - minp);
    // end of logarithmic adjustment

    this._intensity = Math.exp(minv + scale * (value - minp));
    this.node.curve = getDistortionTypeGenerateFunction(this.distortionType)(this._intensity);
  }

  get distortionType() {
    return this._distortionType;
  }

  set distortionType(distortionTypeRequested) {
    if (Object.values(DISTORTION_TYPES).includes(distortionTypeRequested)) {
      this._distortionType = distortionTypeRequested;
      this.node.curve = getDistortionTypeGenerateFunction(this._distortionType)(this._intensity);
      console.log(`The distortion type ${distortionTypeRequested} has been set`);
    } else {
      throw new Error(`The distorion type ${distortionTypeRequested} is not included in the distortionTypes set.`);
    }
  }
}
