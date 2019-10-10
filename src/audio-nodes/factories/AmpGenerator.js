import {CABINET_TYPES} from './CabinetGenerator';


// Here we define the different amp types and their schematics and cabinets, or cabinets shold be another generator?
// with some initials values.
export const AMP_SETTING_TYPE = {
  KNOB: 'knob',
  INTERNAL: 'internal',
  BOOLEAN: 'boolean',
  SELECT: 'select',
  CABINET: 'cabinet',
};
export const AMP_SETTING_NAME = {
  DISTORTION_TYPE: 'distortionType',
  CABINET_IMPULSE: 'cabinetImpulse',
};
// effect/node type of each component -> one of effects folder
export const AMP_COMPONENT_TYPE = {
  VOLUME: 'volume',
  EQUALIZER: 'equalizer',
  PRESENCE: 'presence',
  DISTORTION: 'distortion',
  LOWSHELF: 'LowshelfFilter',
  HIGHPASS: 'HighpassFilter',
  PEAKING: 'PeakingFilter',
  CABINET: 'cabinet',
};
// name of the component
// This order is the order the components appear in the amp header
export const AMP_COMPONENT_NAME = {
  CABINET: 'cabinet',
  DISTORTION: 'distortion', //input?
  EQUALIZER: 'equalizer',
  PRESENCE: 'presence',
  VOLUME: 'volume',
  MASTER: 'master', // ouput?
};
export const AMP_TYPES = {
  WARSHALL: 'Wharsall',
};
export const AMP_TYPES_SCHEMAS = {
  [AMP_TYPES.WARSHALL]: {
    COMPONENTS: {
      // 1 to 10
      input: {
        name: 'input',
        type: AMP_COMPONENT_TYPE.VOLUME,
        settingsList: [
          {
            name: 'level',
            value: 1,
            type: AMP_SETTING_TYPE.KNOB,
          },
          {
            name: 'mute',
            value: false,
            type: AMP_SETTING_TYPE.BOOLEAN,
          },
        ],
      },
      // No knob for this input gain set to 1
      inputGain: {
        name: 'inputGain',
        type: AMP_COMPONENT_TYPE.VOLUME,
        settingsList: [
          {
            name: 'level',
            value: 1,
            type: AMP_SETTING_TYPE.INTERNAL,
          },
          {
            name: 'mute',
            value: false,
            type: AMP_SETTING_TYPE.BOOLEAN,
          },
        ],
      },
      // bypass not added
      lowShelf1: {
        name: 'lowShelf1',
        type: AMP_COMPONENT_TYPE.LOWSHELF,
        settingsList: [
          {
            name: 'gain',
            value: -6,
            type: AMP_SETTING_TYPE.INTERNAL,
          },
          {
            name: 'frequency',
            value: 720,
            type: AMP_SETTING_TYPE.INTERNAL,
          },
        ],
      },
      lowShelf2: {
        name: 'lowShelf2',
        type: AMP_COMPONENT_TYPE.LOWSHELF,
        settingsList: [
          {
            name: 'gain',
            value: -5,
            type: AMP_SETTING_TYPE.INTERNAL,
          },
          {
            name: 'frequency',
            value: 320,
            type: AMP_SETTING_TYPE.INTERNAL,
          },
        ],
      },
      preampStage1: {
        name: 'preampStage1',
        type: AMP_COMPONENT_TYPE.VOLUME,
        settingsList: [
          {
            name: 'level',
            value: 1,
            type: AMP_SETTING_TYPE.INTERNAL,
          },
          {
            name: 'mute',
            value: false,
            type: AMP_SETTING_TYPE.BOOLEAN,
          },
        ],
      },
      // As this disto is asymetric and intensity is not relevant, at this moment
      // we define it as internal maybe in a future we should let the user change this disto type
      distortionStage1: {
        name: 'distortionStage1',
        type: AMP_COMPONENT_TYPE.DISTORTION,
        settingsList: [
          {
            name: 'distortionType',
            value: 'asymetric',
            // type: AMP_SETTING_TYPE.SELECT,
            type: AMP_SETTING_TYPE.INTERNAL,
          },
          {
            // 0 to 10
            name: 'intensity',
            value: 8,
            type: AMP_SETTING_TYPE.KNOB,
            // type: AMP_SETTING_TYPE.INTERNAL,
            range: {
              min: 0,
              max: 10,
            },
            normalize: (val)=> val,
          },
        ],
      },
      highPass1: {
        name: 'highPass1',
        type: AMP_COMPONENT_TYPE.HIGHPASS,
        settingsList: [
          {
            name: 'frequency',
            value: 6,
            type: AMP_SETTING_TYPE.INTERNAL,
          },
          {
            name: 'QValue',
            value: 0.7071,
            type: AMP_SETTING_TYPE.INTERNAL,
          },
        ],
      },
      lowShelf3: {
        name: 'lowShelf3',
        type: AMP_COMPONENT_TYPE.LOWSHELF,
        settingsList: [
          {
            name: 'gain',
            value: -6,
            type: AMP_SETTING_TYPE.INTERNAL,
          },
          {
            name: 'frequency',
            value: 720,
            type: AMP_SETTING_TYPE.INTERNAL,
          },
        ],
      },
      preampStage2: {
        name: 'preampStage2',
        type: AMP_COMPONENT_TYPE.VOLUME,
        settingsList: [
          {
            name: 'level',
            value: 1,
            type: AMP_SETTING_TYPE.INTERNAL,
          },
          {
            name: 'mute',
            value: false,
            type: AMP_SETTING_TYPE.BOOLEAN,
          },
        ],
      },
      // esta no tiene curve_length MAL
      distortionStage2: {
        name: 'distortionStage2',
        type: AMP_COMPONENT_TYPE.DISTORTION,
        settingsList: [
          {
            name: 'distortionType',
            value: 'highGain',
            type: AMP_SETTING_TYPE.SELECT,
          },
          {
            name: 'intensity',
            value: 3,
            type: AMP_SETTING_TYPE.KNOB,
            range: {
              min: 0,
              max: 10,
            },
            normalize: (val)=> val,
          },
        ],
      },
      // This is the VOLUME knob
      // 0 to 1
      outputGain: {
        name: 'outputGain',
        type: AMP_COMPONENT_TYPE.VOLUME,
        settingsList: [
          {
            name: 'level',
            value: 0.5,
            type: AMP_SETTING_TYPE.KNOB,
            range: {
              min: 0,
              max: 10,
            },
            normalize: (val)=> val / 10,
          },
          {
            name: 'mute',
            value: false,
            type: AMP_SETTING_TYPE.BOOLEAN,
          },
        ],
      },
      equalizer: {
        name: 'equalizer',
        type: AMP_COMPONENT_TYPE.EQUALIZER,
        settingsList: [
          {
            // (value-10) * 7 -70 to 0 when 1-10
            name: 'bassGain',
            value: 8.2,
            type: AMP_SETTING_TYPE.KNOB,
            range: {
              min: 1,
              max: 10,
            },
          },
          {
            // (value-5) * 4 -20 to 20 when 1-10
            name: 'middleGain',
            value: 8.2,
            type: AMP_SETTING_TYPE.KNOB,
            range: {
              min: 1,
              max: 10,
            },
          },
          {
            // (value-10) * 10 |    -100 to 0;
            name: 'trebbleGain',
            value: 4,
            type: AMP_SETTING_TYPE.KNOB,
            range: {
              min: -100,
              max: 0,
            },
          },
        ],
      },
      // -10 to 10 --- (value-5) * 2 when 1-10
      presence: {
        name: 'presence',
        type: AMP_COMPONENT_TYPE.PRESENCE,
        settingsList: [
          {
            name: 'gain',
            value: 6.9,
            type: AMP_SETTING_TYPE.KNOB,
            range: {
              min: 1,
              max: 10,
            },
            normalize: (val)=> (val - 5) * 2,
          },
        ],
      },
      eqLowCut: {
        name: 'eqLowCut',
        type: AMP_COMPONENT_TYPE.PEAKING,
        settingsList: [
          {
            name: 'gain',
            value: -19,
            type: AMP_SETTING_TYPE.INTERNAL,
          },
          {
            name: 'frequency',
            value: 60,
            type: AMP_SETTING_TYPE.INTERNAL,
          },
        ],
      },
      eqHighCut: {
        name: 'eqHighCut',
        type: AMP_COMPONENT_TYPE.PEAKING,
        settingsList: [
          {
            name: 'gain',
            value: -25,
            type: AMP_SETTING_TYPE.INTERNAL,
          },
          {
            name: 'frequency',
            value: 10000,
            type: AMP_SETTING_TYPE.INTERNAL,
          },
        ],
      },
      // This is the master volume knob 0 to 10
      master: {
        name: 'master',
        type: AMP_COMPONENT_TYPE.VOLUME,
        settingsList: [
          {
            name: 'level',
            value: 3,
            type: AMP_SETTING_TYPE.KNOB,
            range: {
              min: 0,
              max: 10,
            },
            normalize: (val)=> val,
          },
          {
            name: 'mute',
            value: false,
            type: AMP_SETTING_TYPE.BOOLEAN,
          },
        ],
      },
      [AMP_COMPONENT_NAME.CABINET]: {
        name: AMP_COMPONENT_NAME.CABINET,
        type: AMP_COMPONENT_TYPE.CABINET,
        settingsList: [
          {
            name: 'cabinetImpulse',
            value: CABINET_TYPES.MARSHALL_1960,
            type: AMP_SETTING_TYPE.CABINET,
          },
          {
            name: 'level',
            value: 0.9510565162951535,
            type: AMP_SETTING_TYPE.INTERNAL,
          },
          {
            name: 'wet',
            value: 0.30901699437494745,
            type: AMP_SETTING_TYPE.INTERNAL,
          },
        ],
      },
      // 0 to 1
      output: {
        name: 'output',
        type: AMP_COMPONENT_TYPE.VOLUME,
        settingsList: [
          {
            name: 'level',
            value: 0.5,
            type: AMP_SETTING_TYPE.KNOB,
            range: {
              min: 0,
              max: 10,
            },
            normalize: (val)=> val / 10,
          },
          {
            name: 'mute',
            value: false,
            type: AMP_SETTING_TYPE.BOOLEAN,
          },
        ],
      },
    },
  },
};

// Here we should develop the methods to create all the effects of the amp and connect them together


// changeBoost(p.boost);

// // stage 1
// changeLowShelf1FrequencyValue(p.LS1Freq);
// changeLowShelf1GainValue(p.LS1Gain);
// changeLowShelf2FrequencyValue(p.LS2Freq);
// changeLowShelf2GainValue(p.LS2Gain);
// changePreampStage1GainValue(p.gain1);
// changeDisto1TypeFromPreset(p.distoName1);
// changeDistorsionValues(p.K1, 0);

// // stage 2
// changeLowShelf3FrequencyValue(p.LS3Freq);
// changeLowShelf3GainValue(p.LS3Gain);
// changePreampStage2GainValue(p.gain2);
// changeDisto2TypeFromPreset(p.distoName2);
// changeDistorsionValues(p.K2, 1);

// changeOutputGain(p.OG);

// changeBassFilterValue(p.BF);
// changeMidFilterValue(p.MF);
// changeTrebleFilterValue(p.TF);
// changePresenceFilterValue(p.PF);

// changeMasterVolume(p.MV);

// changeReverbGain(p.RG);
// changeReverbImpulse(p.RN);

// changeRoom(p.CG);
// changeCabinetSimImpulse(p.CN);

// changeEQValues(p.EQ);
