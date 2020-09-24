import SingleAudioNode from '../SingleAudioNode';
import { validateValues, trace } from '../../util';
import { DISTORTION_TYPES, getDistortionTypeGenerateFunction } from '../factories/DistortionGenerator';
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
    this._intensity = intensity;
    // Set the internal intensity value.
    const value = 150 * parseFloat(intensity);
    const minp = 0;
    const maxp = 1500;
    // The result should be between 10 an 1500
    const minv = Math.log(10);
    const maxv = Math.log(1500);
    // calculate adjustment factor
    const scale = (maxv - minv) / (maxp - minp);
    // end of logarithmic adjustment
    const normalizedIntensity = Math.exp(minv + scale * (value - minp));
    trace('setting', this.distortionType, 'normalized intensity', normalizedIntensity);
    this.node.curve = getDistortionTypeGenerateFunction(this.distortionType)(normalizedIntensity);
  }

  get distortionType() {
    return this._distortionType;
  }

  set distortionType(distortionTypeRequested) {
    if (Object.values(DISTORTION_TYPES).includes(distortionTypeRequested)) {
      this._distortionType = distortionTypeRequested;
      // Force recalculation of intensity and curve if there is intensity
      if (this._intensity) {this.intensity = this._intensity;}
    } else {
      throw new Error(`The distorion type ${distortionTypeRequested} is not included in the distortionTypes set.`);
    }
  }
}
