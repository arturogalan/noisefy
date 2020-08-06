import { AMP_TYPES, AMP_TYPES_SCHEMAS, AMP_SETTING_TYPE, AMP_COMPONENT_NAME, AMP_COMPONENT_TYPE, AMP_SETTING_NAME } from '../factories/AmpGenerator';
import { DISTORTION_TYPES } from '../factories/DistortionGenerator';
import { CABINET_TYPES } from '../factories/CabinetGenerator';
import { AMP_TYPES_PRESETS } from '../factories/PresetGenerator';
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
// We need the amp definition to get the settings for each object 'component' inside the channel.
// We need the real channel components to get the value of each setting.
const filterChannelComponentsByType = ({ampType, channelNumber, selectedChannel, settingType})=> {
  const componentNames = [];
  AMP_TYPES_SCHEMAS[ampType][`CHANNEL_${channelNumber}`].forEach((component)=> {
    const settingsNames = component.settingsList
      .filter((setting)=> setting.type === settingType)
      .map((setting)=> {
        return {
          name: setting.name,
          value: selectedChannel.getCompSettingValue({componentName: component.name, settingName: setting.name})
          // value: setting.value,
        }
      });
    if (settingsNames.length) {
      componentNames.push({
        name: component.name,
        settingList: settingsNames,
      });
    }
  });
  return componentNames;
}
const getComponentSettingsByName = function(requestedAmpType, requestedName) {
  const component = Object.values(AMP_TYPES_SCHEMAS[requestedAmpType].COMPONENTS).find((c)=> c.name === requestedName);
  return component.settingsList.map((setting)=> ({name: setting.name, value: setting.value, type: setting.type}));
};

export default class Amp {
  constructor(audioContext, ampTypeRequested) {
    this._audioContext = audioContext;
    if (!Object.values(AMP_TYPES).includes(ampTypeRequested)) {
      throw new Error(`The amp type ${ampTypeRequested} is not included in the ampTypes set.`);
    }
    console.log('Creating amp of type: ', ampTypeRequested);

    this._channel1 = new MultiEffectNode(this._audioContext)
    this._channel1.components = AMP_TYPES_SCHEMAS[ampTypeRequested].CHANNEL_1;
    this._channel2 = new MultiEffectNode(this._audioContext)
    this._channel2.components = AMP_TYPES_SCHEMAS[ampTypeRequested].CHANNEL_2;

    const inputComponent = AMP_TYPES_SCHEMAS[ampTypeRequested].INPUT;
    const initializatedInputComponent = new Noisefy[capitalize(inputComponent.type)](this._audioContext);
    console.log('creating ', capitalize(inputComponent.type));
    for (const setting of inputComponent.settingsList) {
      console.log('initializing', setting.name, 'setting to value:', setting.value);
      initializatedInputComponent[setting.name] = setting.value;
    }
    this._input = initializatedInputComponent;

    const outputComponent = AMP_TYPES_SCHEMAS[ampTypeRequested].OUTPUT;
    const initializatedOuputComponent = new Noisefy[capitalize(outputComponent.type)](this._audioContext);
    console.log('creating ', capitalize(outputComponent.type));
    for (const setting of outputComponent.settingsList) {
      console.log('initializing', setting.name, 'setting to value:', setting.value);
      initializatedOuputComponent[setting.name] = setting.value;
    }
    this._output = initializatedOuputComponent;

    const cabinetComponent = AMP_TYPES_SCHEMAS[ampTypeRequested].CABINET;
    const initializatedCabinetComponent = new Noisefy[capitalize(cabinetComponent.type)](this._audioContext);
    console.log('creating ', capitalize(cabinetComponent.type));
    for (const setting of cabinetComponent.settingsList) {
      console.log('initializing', setting.name, 'setting to value:', setting.value);
      initializatedCabinetComponent[setting.name] = setting.value;
    }
    this._cabinet = initializatedCabinetComponent;


    console.log('channel 1', this._channel1);
    console.log('channel 2', this._channel2);
    console.log('input', this._input);
    console.log('output', this._output);

    this._ampBypass = new Noisefy.Volume(this._audioContext);
    this._channel1Bypass = new Noisefy.Volume(this._audioContext);
    this._channel2Bypass = new Noisefy.Volume(this._audioContext);
    this._input.connect(this._ampBypass);
    this._ampBypass.connect(this._channel1Bypass);
    this._ampBypass.connect(this._channel2Bypass);
    this._channel1Bypass.connect(this._channel1.input);
    this._channel2Bypass.connect(this._channel2.input);
    this._channel1.output.connect(this._cabinet);
    this._channel2.output.connect(this._cabinet);
    this._cabinet.connect(this._output);

    //By default channel1 (clean channel) active
    this._ampBypass.mute = true;
    this._ampBypass.level = 1;
    this._channel1Bypass.level = 1;
    this._channel2Bypass.level = 1;
    this._channel2Bypass.mute = true;
    this._activeChannel = 1;

    //By default amp muted
    this.muted = true;
    //Set the type
    this._ampType = ampTypeRequested;

  }

  toggleChannel() {
    this._channel1Bypass.mute = !this._channel1Bypass.mute;
    this._channel2Bypass.mute = !this._channel2Bypass.mute
    this._activeChannel = this._activeChannel === 1 ? 2 : 1;
  }
  get muted() {
    return this._isMuted
  }
  set muted(value) {
    this._ampBypass.mute = value;
  }
  get input() {
    return this._input;
  }
  get output() {
    return this._output;
  }
  getInputGain() {
    return this._input.level;
  }
  getOutputGain() {
    return this._output.level
  }
  get activeChannel() {
    return this._activeChannel;
  }

  setEffectProperty({channel, componentName, componentProperty, value}) {
    const componentDefinition = AMP_TYPES_SCHEMAS[this._ampType].COMPONENTS[componentName];
    if (!componentDefinition) {console.error(`component definition for ${componentName} not found in AmpGenerator`); return;}
    const selectedChannel = this[`_channel${channel}`];
    selectedChannel.setEffectProperty({componentName, componentProperty, value});
  }
  getEffectProperty({channel, componentName, componentProperty}) {
    const selectedChannel = this[`_channel${channel}`];
    const component = selectedChannel.components[componentName];
    return component[componentProperty];
  }
  getCabinetProperty({property}) {
    return this._cabinet[property];
  }
  setCabinetProperty({property, value}) {
    debugger;
    this._cabinet[property] = value;
  }
  getChannelKnobTypeComponents({channel}) {
    const selectedChannel = this[`_channel${channel}`];
    return filterChannelComponentsByType({ampType: this._ampType, channelNumber: channel, selectedChannel, settingType: AMP_SETTING_TYPE.KNOB});
  }
  getChannelDistortions({channel}) {
    const selectedChannel = this[`_channel${channel}`];
    const distoTypesComponentNames = AMP_TYPES_SCHEMAS[this._ampType][`CHANNEL_${channel}`].filter((comp)=> comp.type === AMP_COMPONENT_TYPE.DISTORTION);
    const selectedDistos = [];
    distoTypesComponentNames.forEach((comp)=> selectedDistos.push({
      componentName: comp.name,
      distortionType: selectedChannel.components[comp.name][AMP_SETTING_NAME.DISTORTION_TYPE],
    }));
    return selectedDistos;
  }
  setAmpChannelEffectProperty({channel, componentName, componentProperty, value}){
    const selectedChannel = this[`_channel${channel}`];
    const component = selectedChannel.components[componentName];
    const componentProp = component[componentProperty];
    const componentDefinition = AMP_TYPES_SCHEMAS[this._ampType][`CHANNEL_${channel}`].find((el)=>el.name === componentName);
    const componentPropDefinition = componentDefinition.settingsList.find((prop)=> prop.name === componentProperty);
    if (!component) {console.error(`component ${componentName} not found in amp`); return;}
    if (componentProp === undefined) {console.error(`componentProperty ${componentProperty} not found in component ${componentName}`); return;}
    if (!componentDefinition) {console.error(`component definition for ${componentName} not found in AmpGenerator`); return;}
    if (componentPropDefinition === undefined) {console.error(`componentPropDefinition ${componentProperty} not found in AmpGenerator component ${componentName}`); return;}

    const normalize = componentPropDefinition.normalize || ((val)=> val);
    component[componentProperty] = normalize(value);
    console.log(`Setting to channel ${channel}, ${componentName} component, ${componentProperty} prop the value ${value}, (normalized: ${normalize(value)})`);
  
  }
  setAmpInputEffectProperty({componentProperty, value}){
    this._input[componentProperty] = value;
  }
  setAmpOutputEffectProperty({componentProperty, value}){
    this._output[componentProperty] = value;
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
  getAmpComponentEffectProperty({componentName, componentProperty}) {
    const component = this._components[componentName];
    return component[componentProperty];
  }
  // getInputGainComponent() {
  //   return filterComponentSettingsByType(this._ampType, AMP_SETTING_TYPE.INPUT);
  // }
  // getOutputGainComponent() {
  //   return filterComponentSettingsByType(this._ampType, AMP_SETTING_TYPE.OUTPUT);
  // }
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
    return this._cabinet[AMP_SETTING_NAME.CABINET_IMPULSE];
    // return this._components[AMP_COMPONENT_NAME.CABINET][AMP_SETTING_NAME.CABINET_IMPULSE];
  }
  getCabinetTypes() {
    return Object.keys(CABINET_TYPES);
  }
  getCabinetSettings() {
    // console.log(getComponentSettingsByName(this._ampType, AMP_COMPONENT_NAME.CABINET));
    // return getComponentSettingsByName(this._ampType, AMP_COMPONENT_NAME.CABINET).filter((setting)=> setting.type === AMP_SETTING_TYPE.CABINET_KNOB);
    const component = AMP_TYPES_SCHEMAS[this._ampType].CABINET;
    return component.settingsList.filter((setting)=> setting.type === AMP_SETTING_TYPE.CABINET_KNOB);
  }
  set preset(presetName) {
    const presetComponents = AMP_TYPES_PRESETS[this._ampType][presetName].COMPONENTS;
    Object.keys(presetComponents).forEach((component)=> {
      presetComponents[component].settingsList.forEach((setting)=> {
        console.log(component, setting);
        this.setAmpComponentEffectProperty({componentName: component, componentProperty: setting.name, value: setting.value});
      });
    });
  }
}
