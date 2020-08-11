import { DEFAULT_CABINET } from './CabinetGenerator';


// Here we define the different amp types and their schematics and cabinets, or cabinets shold be another generator?
// with some initials values.
export const AMP_SETTING_TYPE = {
  INPUT: 'input',
  OUTPUT: 'output',
  KNOB: 'knob',
  INTERNAL: 'internal',
  BOOLEAN: 'boolean',
  SELECT: 'select',
  CABINET: 'cabinet',
  CABINET_KNOB: 'cabinet-knob',
};
export const AMP_SETTING_NAME = {
  DISTORTION_TYPE: 'distortionType',
  CABINET_IMPULSE: 'cabinetImpulse',
  CABINET_WET: 'wet',
  CABINET_GAIN: 'gain',
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
  DISTORTION: 'distortion', // input?
  EQUALIZER: 'equalizer',
  PRESENCE: 'presence',
  VOLUME: 'volume',
  MASTER: 'master', // ouput?
};
export const AMP_TYPES = {
  WARSHALL: 'Warshall',
};
export const AMP_TYPES_SCHEMAS = {
  [AMP_TYPES.WARSHALL]: {
    INPUT: {
      name: 'input',
      type: AMP_COMPONENT_TYPE.VOLUME,
      settingsList: [
        {
          name: 'level',
          value: 1.6,
          type: AMP_SETTING_TYPE.INPUT,
        },
        {
          name: 'mute',
          value: false,
          type: AMP_SETTING_TYPE.BOOLEAN,
        },
      ],
    },

    OUTPUT: {
      name: 'output',
      type: AMP_COMPONENT_TYPE.VOLUME,
      settingsList: [
        {
          name: 'level',
          value: 3,
          type: AMP_SETTING_TYPE.OUTPUT,
        },
        // Values in gain from 0 to 1
        {
          name: 'undersampling',
          value: 10,
          type: AMP_SETTING_TYPE.INTERNAL,
        },
        {
          name: 'mute',
          value: false,
          type: AMP_SETTING_TYPE.BOOLEAN,
        },
      ],
    },

    CHANNEL_1: [
      // No knob for this input gain set to 1
      {
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
      {
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
      {
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
      {
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
      {
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
            value: 1,
            type: AMP_SETTING_TYPE.KNOB,
          },
        ],
      },
      {
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
      {
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
      {
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
      {
        name: 'distortionStage2',
        type: AMP_COMPONENT_TYPE.DISTORTION,
        settingsList: [
          {
            name: 'distortionType',
            value: 'standard',
            type: AMP_SETTING_TYPE.SELECT,
          },
          {
            name: 'intensity',
            value: 1,
            type: AMP_SETTING_TYPE.KNOB,
          },
        ],
      },
      // This is the VOLUME knob
      // 0 to 1
      {
        name: 'outputGain',
        type: AMP_COMPONENT_TYPE.VOLUME,
        settingsList: [
          {
            name: 'level',
            value: 6,
            type: AMP_SETTING_TYPE.KNOB,
          },
          // Values in gain from 0 to 1
          {
            name: 'undersampling',
            value: 10,
            type: AMP_SETTING_TYPE.INTERNAL,
          },
          {
            name: 'mute',
            value: false,
            type: AMP_SETTING_TYPE.BOOLEAN,
          },
        ],
      },
      {
        name: 'equalizer',
        type: AMP_COMPONENT_TYPE.EQUALIZER,
        settingsList: [
          {
            // (value-10) * 7 -70 to 0 when 1-10
            name: 'bassGain',
            value: 6.2,
            type: AMP_SETTING_TYPE.KNOB,
          },
          {
            // (value-5) * 4 -20 to 20 when 1-10
            name: 'middleGain',
            value: 8.2,
            type: AMP_SETTING_TYPE.KNOB,
          },
          {
            // (value-10) * 10 |    -100 to 0;
            name: 'trebbleGain',
            value: 4,
            type: AMP_SETTING_TYPE.KNOB,
          },
        ],
      },
      // -10 to 10 --- (value-5) * 2 when 1-10
      {
        name: 'presence',
        type: AMP_COMPONENT_TYPE.PRESENCE,
        settingsList: [
          {
            name: 'gain',
            value: 6.9,
            type: AMP_SETTING_TYPE.KNOB,
          },
        ],
      },
      {
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
      {
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
      {
        name: 'master',
        type: AMP_COMPONENT_TYPE.VOLUME,
        settingsList: [
          {
            name: 'level',
            value: 5,
            type: AMP_SETTING_TYPE.KNOB,
          },
          {
            name: 'mute',
            value: false,
            type: AMP_SETTING_TYPE.BOOLEAN,
          },
        ],
      },
    ],


    CHANNEL_2: [
      // No knob for this input gain set to 1
      {
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
      {
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
      {
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
      {
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
      {
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
          },
        ],
      },
      {
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
      {
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
      {
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
      {
        name: 'distortionStage2',
        type: AMP_COMPONENT_TYPE.DISTORTION,
        settingsList: [
          {
            name: 'distortionType',
            value: 'highGainModern',
            type: AMP_SETTING_TYPE.SELECT,
          },
          {
            name: 'intensity',
            value: 3,
            type: AMP_SETTING_TYPE.KNOB,
          },
        ],
      },
      // This is the VOLUME knob
      // 0 to 1
      {
        name: 'outputGain',
        type: AMP_COMPONENT_TYPE.VOLUME,
        settingsList: [
          {
            name: 'level',
            value: 5,
            type: AMP_SETTING_TYPE.KNOB,
          },
          // Values in gain from 0 to 1
          {
            name: 'undersampling',
            value: 10,
            type: AMP_SETTING_TYPE.INTERNAL,
          },
          {
            name: 'mute',
            value: false,
            type: AMP_SETTING_TYPE.BOOLEAN,
          },
        ],
      },
      {
        name: 'equalizer',
        type: AMP_COMPONENT_TYPE.EQUALIZER,
        settingsList: [
          {
            // (value-10) * 7 -70 to 0 when 1-10
            name: 'bassGain',
            value: 6.2,
            type: AMP_SETTING_TYPE.KNOB,
          },
          {
            // (value-5) * 4 -20 to 20 when 1-10
            name: 'middleGain',
            value: 8.2,
            type: AMP_SETTING_TYPE.KNOB,
          },
          {
            // (value-10) * 10 |    -100 to 0;
            name: 'trebbleGain',
            value: 4,
            type: AMP_SETTING_TYPE.KNOB,
          },
        ],
      },
      // -10 to 10 --- (value-5) * 2 when 1-10
      {
        name: 'presence',
        type: AMP_COMPONENT_TYPE.PRESENCE,
        settingsList: [
          {
            name: 'gain',
            value: 6.9,
            type: AMP_SETTING_TYPE.KNOB,
          },
        ],
      },
      {
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
      {
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
      {
        name: 'master',
        type: AMP_COMPONENT_TYPE.VOLUME,
        settingsList: [
          {
            name: 'level',
            value: 5,
            type: AMP_SETTING_TYPE.KNOB,
          },
          {
            name: 'mute',
            value: false,
            type: AMP_SETTING_TYPE.BOOLEAN,
          },
        ],
      },
    ],


    CABINET: {
      name: AMP_COMPONENT_NAME.CABINET,
      type: AMP_COMPONENT_TYPE.CABINET,
      settingsList: [
        {
          name: 'cabinetImpulse',
          value: DEFAULT_CABINET,
          type: AMP_SETTING_TYPE.CABINET,
        },
        {
          name: 'gain',
          value: 90,
          type: AMP_SETTING_TYPE.CABINET_KNOB,
        },
      ],
    },

  },
};
