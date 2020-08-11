import { AMP_COMPONENT_NAME, AMP_TYPES } from './AmpGenerator';
import { DEFAULT_CABINET } from './CabinetGenerator';


export const PRESET_TYPES = {
  HARD_ROCK: 'HARD_ROCK',
};

export const AMP_TYPES_PRESETS = {
  [AMP_TYPES.WARSHALL]: {
    [PRESET_TYPES.HARD_ROCK]: {
      COMPONENTS: {
        input: {
          settingsList: [
            {
              name: 'level',
              value: 1,
            },
            {
              name: 'mute',
              value: false,
            },
          ],
        },
        inputGain: {
          settingsList: [
            {
              name: 'level',
              value: 1,
            },
            {
              name: 'mute',
              value: false,
            },
          ],
        },
        lowShelf1: {
          settingsList: [
            {
              name: 'gain',
              value: -6,
            },
            {
              name: 'frequency',
              value: 720,
            },
          ],
        },
        lowShelf2: {
          settingsList: [
            {
              name: 'gain',
              value: -5,
            },
            {
              name: 'frequency',
              value: 320,
            },
          ],
        },
        preampStage1: {
          settingsList: [
            {
              name: 'level',
              value: 1,
            },
            {
              name: 'mute',
              value: false,
            },
          ],
        },
        distortionStage1: {
          settingsList: [
            {
              name: 'distortionType',
              value: 'asymetric',
            },
            {
              name: 'intensity',
              value: 8,
            },
          ],
        },
        highPass1: {
          settingsList: [
            {
              name: 'frequency',
              value: 6,
            },
            {
              name: 'QValue',
              value: 0.7071,
            },
          ],
        },
        lowShelf3: {
          settingsList: [
            {
              name: 'gain',
              value: -6,
            },
            {
              name: 'frequency',
              value: 720,
            },
          ],
        },
        preampStage2: {
          settingsList: [
            {
              name: 'level',
              value: 1,
            },
            {
              name: 'mute',
              value: false,
            },
          ],
        },
        distortionStage2: {
          settingsList: [
            {
              name: 'distortionType',
              value: 'notSoDistorted',
            },
            {
              name: 'intensity',
              value: 7.8,
            },
          ],
        },
        outputGain: {
          name: 'outputGain',
          settingsList: [
            {
              name: 'level',
              value: 7,
            },
            {
              name: 'mute',
              value: false,
            },
          ],
        },
        equalizer: {
          settingsList: [
            {
              name: 'bassGain',
              value: 8.2,
            },
            {
              name: 'middleGain',
              value: 8.2,
            },
            {
              name: 'trebbleGain',
              value: 4,
            },
          ],
        },
        presence: {
          settingsList: [
            {
              name: 'gain',
              value: 6.9,
            },
          ],
        },
        // eqLowCut: {
        //   settingsList: [
        //     {
        //       name: 'gain',
        //       value: -19,
        //     },
        //     {
        //       name: 'frequency',
        //       value: 60,
        //     },
        //   ],
        // },
        // eqHighCut: {
        //   settingsList: [
        //     {
        //       name: 'gain',
        //       value: -25,
        //     },
        //     {
        //       name: 'frequency',
        //       value: 10000,
        //     },
        //   ],
        // },
        // This is the master volume knob 0 to 10
        master: {
          settingsList: [
            {
              name: 'level',
              value: 3,
            },
            {
              name: 'mute',
              value: false,
            },
          ],
        },
        [AMP_COMPONENT_NAME.CABINET]: {
          settingsList: [
            {
              name: 'cabinetImpulse',
              value: DEFAULT_CABINET,
            },
            {
              name: 'gain',
              value: 9.4,
            },
            // {
            //   name: 'level',
            //   value: 0.9510565162951535,
            // },
            // {
            //   name: 'wet',
            //   value: 0.30901699437494745,
            // },
          ],
        },
        output: {
          settingsList: [
            {
              name: 'level',
              value: 0.5,
            },
            {
              name: 'mute',
              value: false,
            },
          ],
        },
      },
    },
  },
};
