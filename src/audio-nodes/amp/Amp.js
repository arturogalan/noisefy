import {AMP_TYPES, AMP_TYPES_SCHEMAS, AMP_SETTING_TYPE, AMP_COMPONENT_NAME, AMP_COMPONENT_TYPE, AMP_SETTING_NAME} from '../factories/AmpGenerator';
import {DISTORTION_TYPES} from '../factories/DistortionGenerator';
import {CABINET_TYPES} from '../factories/CabinetGenerator';
import * as Noisefy from '../../index';
import MultiEffectNode from '../MultiEffectNode';

const capitalize = function(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
};
const filterComponentSettingsByType = function(requestedAmpType, requestedType) {
  const componentNames = [];
  Object.values(AMP_TYPES_SCHEMAS[requestedAmpType].COMPONENTS).forEach((component)=> {
    const settingsNames = component.settingsList.filter((setting)=> setting.type === requestedType);
    if (settingsNames.length) {
      componentNames.push({
        name: component.name,
        settingList: settingsNames,
      });
    }
  });
  return componentNames;
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
    for (const componentKey in AMP_TYPES_SCHEMAS[ampTypeRequested].COMPONENTS) {
      const component = AMP_TYPES_SCHEMAS[ampTypeRequested].COMPONENTS[componentKey];
      const initializatedComponent = new Noisefy[capitalize(component.type)](this._audioContext);
      console.log('creating ', capitalize(component.type));
      for (const setting of component.settingsList) {
        console.log('initializing', setting.name, 'setting to value:', setting.value);
        initializatedComponent[setting.name] = setting.value;
      }
      this._components[component.name] = initializatedComponent;
    }
    //Connect them all!
    const componentsKeys = Object.keys(this._components);
    componentsKeys.forEach((componentKey, index)=> {
      if (index === 0) {
        console.log('setting input', componentKey);
        this.input = this._components[componentKey];
      }
      if (index >= 1) {
        console.log('connecting', componentsKeys[index - 1], 'with', componentKey );
        this._components[componentsKeys[index - 1]].connect(this._components[componentKey]);
      }
      if (index === componentsKeys.length - 1) {
        console.log('setting output', componentKey);
        this.output = this._components[componentKey];
      }
    });
    //Set the type
    this._ampType = ampTypeRequested;
  }

  // Expose method utility to set components properties
  setAmpComponentEffectProperty({componentName, componentProperty, value}) {
    const component = this._components[componentName];
    const componentProp = component[componentProperty];
    const componentDefinition = AMP_TYPES_SCHEMAS[this._ampType].COMPONENTS[componentName];
    const componentPropDefinition = componentDefinition.settingsList.find((prop)=> prop.name === componentProperty);
    if (!component) {console.error(`component ${componentName} not found in amp`); return;}
    if (componentProp === undefined) {console.error(`componentProperty ${componentProperty} not found in component ${componentName}`); return;}
    if (!componentDefinition) {console.error(`component definition for ${componentName} not found in AmpGenerator`); return;}
    if (componentPropDefinition === undefined) {console.error(`componentPropDefinition ${componentProperty} not found in AmpGenerator component ${componentName}`); return;}

    const normalize = componentPropDefinition.normalize || ((val)=> val);
    component[componentProperty] = normalize(value);
    console.log(`Setting to ${componentName} component, ${componentProperty} prop the value ${value}, (normalized: ${normalize(value)})`);
  }
  getInputComponent() {
    return filterComponentSettingsByType(this._ampType, AMP_SETTING_TYPE.INPUT);
  }
  getOutputComponent() {
    return filterComponentSettingsByType(this._ampType, AMP_SETTING_TYPE.OUTPUT);
  }
  // Retrieve all the settings of type Knob of all the components of the amp, grouped by component
  getKnobTypeComponents() {
    return filterComponentSettingsByType(this._ampType, AMP_SETTING_TYPE.KNOB);
  }
  getSelectedDistortions() {
    const distoTypesComponentNames = Object.values(AMP_TYPES_SCHEMAS[this._ampType].COMPONENTS).filter((comp)=> comp.type === AMP_COMPONENT_TYPE.DISTORTION);
    const selectedDistos = [];
    distoTypesComponentNames.forEach((comp)=> selectedDistos.push({
      componentName: comp.name,
      distortionType: this._components[comp.name][AMP_SETTING_NAME.DISTORTION_TYPE],
    }));
    return selectedDistos;
  }
  getDistortionTypes() {
    return Object.values(DISTORTION_TYPES);
  }
  getSelectedCabinet() {
    return this._components[AMP_COMPONENT_NAME.CABINET][AMP_SETTING_NAME.CABINET_IMPULSE];
  }
  getCabinetTypes() {
    return Object.keys(CABINET_TYPES);
  }
}
