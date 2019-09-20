/* eslint-disable no-tabs */
/* eslint-disable max-len */
import SingleAudioNode from '../SingleAudioNode';
import {BIQUAD_FILTER_TYPES} from '../factories/FiltersGenerator';

// type       |Description                                                                        | frequency                                                             |    Q	                                                                        |    gain                                                                 |
// lowpass    |Standard second-order resonant lowpass filter with 12dB/octave rolloff.            | The cutoff frequency.                                                 | Indicates how peaked the frequency is around the cutoff.                     | Not used                                                                |
//            |Frequencies below the cutoff pass through; frequencies above it are attenuated.	  |                                                                       | The greater the value is, the greater is the peak.                           |                                                                         |
// highpass   |Standard second-order resonant highpass filter with 12dB/octave rolloff.           | The cutoff frequency.	                                                | Indicates how peaked the frequency is around the cutoff.                     | Not used                                                                |
//            |Frequencies below the cutoff are attenuated; frequencies above it pass through.    |                                                                       | The greater the value, the greater the peak.                                 |                                                                         |
// bandpass   |Standard second-order bandpass filter. Frequencies outside the given range of      | The center of the range of frequencies.                               | Controls the width of the frequency band. The greater                        | Not used                                                                |
//            |frequencies are attenuated; the frequencies inside it pass through.	              |                                                                       | the Q value, the smaller the frequency band.                                 |                                                                         |
// lowshelf   |Standard second-order lowshelf filter. Frequencies lower than the frequency get a  | The upper limit of the frequencies getting a boost or an attenuation. | Not used	                                                                    | The boost, in dB, to be applied; if negative, it will be an attenuation.|
//            |boost, or an attenuation; frequencies over it are unchanged.	                      |                                                                       |                                                                              |                                                                         |
// highshelf  |Standard second-order highshelf filter. Frequencies higher than the                | The lower limit of the frequencies getting a boost or an attenuation. | Not used	                                                                    | The boost, in dB, to be applied; if negative, it will be an attenuation.|
//            |frequency get a boost or an attenuation; frequencies lower than it are unchanged.  |	                                                                      |                                                                              |                                                                         |
// peaking    |Frequencies inside the range get a boost or an attenuation;                        | The middle of the frequency range getting a boost or an attenuation.  | Controls the width of the frequency band. The greater	                      | The boost, in dB, to be applied; if negative, it will be an attenuation.|
//            |frequencies outside it are unchanged.	                                            |                                                                       | the Q value, the smaller the frequency band.                                 |                                                                         |
// notch      |Standard notch filter, also called a band-stop or band-rejection filter.           | Controls the width of the frequency band.                             |	Not used                                                                    |                                                                         |
//            |It is the opposite of a bandpass filter: frequencies outside the give range of     | The greater the Q value, the smaller the frequency band               |                                                                              |                                                                         |
//            |frequencies inside it are attenuated | The center of the range of frequencies.     |                                                                       |                                                                              |                                                                         |
// allpass    |Standard second-order allpass filter. It lets all frequencies through,             | The frequency with the maximal group delay, that is, the frequency    | Controls how sharp the transition is at the medium frequency.  	            | Not used                                                                |
//            |but changes the phase-relationship between the various frequencies.                | where the center of the phase transition occurs.                      | The larger this parameter is, the sharper and larger the transition will be. |                                                                         |

/**
 * The audio-effects Biquad filter class.
 * This class lets you add a Highpass cut biquad filter.
 */
export default class BiquadFilter extends SingleAudioNode {
  constructor(audioContext, filterType) {
    super(audioContext);
    this.node = this.audioContext.createBiquadFilter();
    this.type = filterType;
  }
  get type() {
    return this._type;
  }
  set type(typeRequested) {
    if (Object.values(BIQUAD_FILTER_TYPES).includes(typeRequested)) {
      this._type = typeRequested;
      this.node.type = this._type;
      console.log(`The biquad type ${typeRequested} has been set`);
    } else {
      throw new Error(`The biquadFilter type ${typeRequested} is not included in the filters set.`);
    }
  }
  // Setters and getters for public properties
  get gain() {
    return this._gain;
  }
  set gain(gain) {
    this._gain = parseFloat(gain);
    this.node.gain.value = this._gain;
  }
  get frequency() {
    return this._frequency;
  }
  set frequency(frequency) {
    this._frequency = frequency;
    this.node.frequency.value = this._frequency;
  }
  get Q() {
    return this._Q;
  }
  set Q(value) {
    this._Q = value;
    this.node.Q.value = this.Q;
  }
}
