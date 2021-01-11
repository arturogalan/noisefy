import {scale} from '../util';

export default class Synth {
  constructor(audioContext) {
    this._audioContext = audioContext;
    this._activeOscillators = {
      'A': {},
      'A#': {},
      'B': {},
      'C': {},
      'C#': {},
      'D': {},
      'D#': {},
      'E': {},
      'F': {},
      'F#': {},
      'G': {},
      'G#': {},
    };
    this._singleOscillator = undefined;
    this._gain = this._audioContext.createGain();
    this._filter = this._audioContext.createBiquadFilter();
    this._waveform = 'sawtooth';

    // Connect all
    this._gain.connect(this._filter);
    this._filter.connect(this._audioContext.destination);

    this.volume = 50;
  }

  get volume() {
    return this._volume;
  }

  set volume(value) {
    this._volume = Number(value);
    const normalizedValue = scale(value, 0, 100, 0, 1);
    this._gain.gain.setValueAtTime(normalizedValue, this._audioContext.currentTime);
  }

  get waveForm() {
    return this._waveform;
  }

  set waveForm(value) {
    this._waveform = value;
  }

  playNote({key, octave = 2}) {
    if (!this._activeOscillators[key]) {
      throw new Error(key + ' is not a key valid value');
    }
    if (!this._activeOscillators[key][octave]) {
      const osc = this._audioContext.createOscillator();
      osc.type = this._waveform;
      osc.frequency.setValueAtTime(Synth.getFrequency(key, octave), this._audioContext.currentTime);
      osc.connect(this._gain);
      osc.start();
      this._activeOscillators[key][octave] = osc;
    }
  }

  stopNote({key, octave = 2}) {
    if (!this._activeOscillators[key]) {
      throw new Error(key + ' is not a key valid value');
    }
    if (this._activeOscillators[key][octave]) {
      this._activeOscillators[key][octave].stop();
      delete this._activeOscillators[key][octave];
    }
  }

  stopAllNotes() {
    const possibleOctaves = Array(6).fill(0);
    possibleOctaves.forEach((_, octave)=> {
      Object.keys(this._activeOscillators).forEach((key)=> {
        this.stopNote({key, octave});
      });
    });
  }

  playSingleNote({key, octave = 2}) {
    if (!this._activeOscillators[key]) {
      throw new Error(key + ' is not a key valid value');
    }
    this._singleOscillator && this._singleOscillator.stop();
    this._singleOscillator = this._audioContext.createOscillator();
    this._singleOscillator.connect(this._gain);
    this._singleOscillator.frequency.setValueAtTime(Synth.getFrequency(key, octave), this._audioContext.currentTime);
    this._singleOscillator.type = this._waveform;
    this._singleOscillator.start();
  }

  stopSingleNote() {
    this._singleOscillator && this._singleOscillator.stop();
  }
}

Synth.getFrequency = function(note, octave) {
  const notes = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#'];
  let keyNumber = notes.indexOf(note);

  if (keyNumber < 3) {
    keyNumber = keyNumber + 12 + ((octave - 1) * 12) + 1;
  } else {
    keyNumber = keyNumber + ((octave - 1) * 12) + 1;
  }

  // Return frequency of note
  return 440 * Math.pow(2, (keyNumber - 49) / 12);
};
