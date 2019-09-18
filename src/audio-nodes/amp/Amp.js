import {AMP_TYPES, AMP_TYPES_SCHEMAS, AMP_SETTING_TYPE, AMP_SETTING_NAME, AMP_COMPONENT_TYPE} from '../factories/AmpGenerator';
import * as Noisefy from '../../index';
import MultiEffectNode from '../MultiEffectNode';

const capitalize = function(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
};
const iterateObjectProps = (objectToIterate, funcToApply, funcToFilter)=> {
  let index = 0;
  const keys = Object.keys(objectToIterate);
  for (const prop in objectToIterate) {
    const propObject = objectToIterate[prop];
    if (!funcToFilter || funcToFilter(propObject)) {
      funcToApply(propObject, index, keys);
    }
    index++;
  }
};

export default class Amp extends MultiEffectNode {
  constructor(audioContext, ampTypeRequested) {
    super(audioContext);
    if (!Object.values(AMP_TYPES).includes(ampTypeRequested)) {
      throw new Error(`The amp type ${ampTypeRequested} is not included in the ampTypes set.`);
    }
    console.log('Creating amp of type: ', ampTypeRequested);
    // This has to be an object to let access by component name
    this._components = {};
    // For each component defined, preset of settingList and add it to components class prop
    // for (const componentKey in AMP_TYPES_SCHEMAS[ampTypeRequested].COMPONENTS) {
    //   const component = AMP_TYPES_SCHEMAS[ampTypeRequested].COMPONENTS[componentKey];
    //   const initializatedComponent = new Noisefy[capitalize(component.type)];
    //   console.log('creating ', capitalize(component.type));
    //   for (const setting of component.settingList) {
    //     console.log('initializing ', setting.name, ' setting to value: ', setting.value);
    //     initializatedComponent.effect[setting.name] = setting.value;
    //   }
    //   this._components[component.name] = initializatedComponent;
    // }

    iterateObjectProps(AMP_TYPES_SCHEMAS[ampTypeRequested].COMPONENTS, (component)=> {
      const initializatedComponent = new Noisefy[capitalize(component.type)];
      console.log('creating ', capitalize(component.type));
      for (const setting of component.settingList) {
        console.log('initializing ', setting.name, ' setting to value: ', setting.value);
        initializatedComponent.effect[setting.name] = setting.value;
      }
      this._components[component.name] = initializatedComponent;
    });

    //Connect them all!
    // const componentsKeys = Object.keys(this._components);
    // componentsKeys.forEach((componentKey, index)=> {
    //   if (index === 0) {
    //     console.log('setting input ', componentKey);
    //     this.input = this._components[componentKey];
    //   }
    //   if (index > 1) {
    //     console.log('connecting ', componentsKeys[index - 1], 'with ', componentKey );
    //     this._components[componentsKeys[index - 1]].effect.connect(this._components[componentKey].effect);
    //   }
    //   if (index === componentsKeys.length) {
    //     console.log('setting output ', componentKey);
    //     this.output = this._components[componentKey];
    //   }
    // });

    iterateObjectProps(this._components, (component, index, componentsKeys)=> {
      if (index === 0) {
        console.log('setting input ', component.name);
        this.input = component;
      }
      if (index > 1) {
        console.log('connecting ', componentsKeys[index - 1], 'with ', component.name );
        this._components[componentsKeys[index - 1]].effect.connect(component.effect);
      }
      if (index === componentsKeys.length) {
        console.log('setting output ', component.name);
        this.output = component;
      }
    });
    //Set the type
    this._ampType = ampTypeRequested;
  }

  // Expose method utility to set components properties
  setAmpComponentEffectProperty({componentName, componentProperty, value}) {
    const component = this._components[componentName];
    if (!component) {console.error(`component ${componentName} not found in amp`); return;}
    if (!component[componentProperty]) {console.error(`componentProperty ${componentProperty} not found in component ${componentName}`); return;}
    component[componentProperty] = value;
  }
  // Retrieve all the settings of type Knob of all the components of the amp, grouped by component
  getKnobComponentsSettings() {
    const componentNames = [];
    for (const component in AMP_TYPES_SCHEMAS[this._ampType].COMPONENTS) {
      const settingsNames = component.settingList.filter((setting)=> setting.type === AMP_SETTING_TYPE.KNOB);
      if (settingsNames.length) {
        componentNames.push({
          componentName: component.name,
          knobSettingList: settingsNames,
        });
      }
    }
    return componentNames;
  }
  getDistortionTypes() {
    const result = {};
    const funcToFilter = (component)=> component.type === AMP_COMPONENT_TYPE.DISTORTION;
    const funcToApply = (component)=> result[component.name] = component.settingList.find((setting)=> setting.name === AMP_SETTING_NAME.DISTORTION_TYPE);
    iterateObjectProps(this._components, funcToApply, funcToFilter);
    iterateObjectProps(result, (distorion)=> console.log(`found distortionType: ${distorion}`));
    return result;
  }
}

