import BiquadFilter from './BiquadFilter';
import {BIQUAD_FILTER_TYPES} from '../factories/FiltersGenerator';

/**
 * The audio-effects Basic Highpass filter class.
 * This class lets you add a Highpass cut biquad filter.
 */
export default class HighpassFilter extends BiquadFilter {
  constructor(audioContext) {
    super(audioContext, BIQUAD_FILTER_TYPES.HIGHPASS);
    this.frequency = 6;
    this.Q = 0.7071;
  }
}
