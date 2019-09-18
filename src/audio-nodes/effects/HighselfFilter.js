import BiquadFilter from './BiquadFilter';
import {BIQUAD_FILTER_TYPES} from './BiquadFilter';

/**
 * The audio-effects Basic Highpass filter class.
 * This class lets you add a Highpass cut biquad filter.
 */
export default class HighselfFilter extends BiquadFilter {
  constructor(audioContext) {
    super(audioContext, BIQUAD_FILTER_TYPES.HIGHSELF);
    this.frequency = 6500;
    this.Q = 0.7071;
  }
}
