
// this presets should map with an amp type and set every values of the amp schematics, internals and knob types 
const PRESET_TYPES = {
  HARD_ROCK_1: {
    'name': 'Hard Rock classic 1',
    'boost': false,
    // OG volume knob
    'outputGain': 7.0,
    // MV master knob
    'masterVolume': 7.2,
    // 'BF'
    'bassFilter': 8.2,
    // 'MF'
    'middleFilter': 8.2,
    // 'TF'
    'trebleFilter': 3.8,
    // 'PF'
    'presenceFilter': 6.9,
    // STAGE1 - disto 1 ODD harmonics
    'stage1': {
      'lowShelf1':
      {
        // 'LS1Freq'
        'frequency': 720,
        // 'LS1Gain'
        'gain': -6,
      },
      'lowShelf2':
      {
        // 'LS2Freq'
        'frequency': 320,
        // 'LS2Gain'
        'gain': -5,
      },
      //  gain1
      'preampGain': 1,
      // 'distoName'
      'distortionType': 'asymetric',
      // K1
      'intensity': '7.8',
      'hiPass1':
      {
        // 'LS2Freq'
        'frequency': 0,
        // 'LS2Gain'
        'Qvalue': 0.7071,
      },
    },
    // STAGE2 - disto 2 EVEN harmonics
    'stage2': {
      // 'distoName'
      'distortionType': 'notSoDistorded',
      // 'K2'
      'intensity': '7.8',
      // gain2
      'preampGain': 1,
      'lowShelf1': {
        // 'LS3Freq'
        'frequency': 720,
        // 'LS3Gain'
        'gain': -6,
      },
    },
    'room': {
      // 'CN'
      'cabinetImpulse': 'Marshall 1960, axis',
      // 'CG'
      'gain': '9.4',

    },
    // TODO hipass config?
    // hipass??? it seems that doesn't change in setPreset function
    // 'HP1Freq': 6,
    // 'HP1Q': 0.707099974155426,

    // NOT USED cause I don't have second equalizer and reverb is a pedal apart
    // second equalizer
    // 'EQ': [5, 11, -6, -10, 7, 2],
    // reverb --
    // 'RN': 'Fender Hot Rod',
    // 'RG': '2.0',
  },
};
