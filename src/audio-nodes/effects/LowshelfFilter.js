import BiquadFilter from './BiquadFilter';
import {BIQUAD_FILTER_TYPES} from '../factories/FiltersGenerator';
/**
 * The audio-effects Basic Lowshelf filter class.
 * This class lets you add a Lowshelf cut biquad filter.
 */
export default class LowshelfFilter extends BiquadFilter {
  constructor(audioContext) {
    super(audioContext, BIQUAD_FILTER_TYPES.LOWSHELF);
    this.frequency = 720;
    this.gain = -6;
  }
}
