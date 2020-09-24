import SingleAudioNode from './SingleAudioNode';
import MultiAudioNode from './MultiAudioNode';
import * as Noisefy from '../index';
import { trace } from '../util';

const capitalize = function(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
};
/**
 * The multi-effect-node class.
 * When creating a more complex object existing out of multiple audio effects (for example an amp),
 * we can wrap it in this class.
 * You can set the input node (effect.node) and the output node of the effect (effect.output).
 * The input node is the first audio-node in the first component effect, your previous effect will be connected to this node.
 * The output node is the last audio-node in the las component effect, the next effect will be connected to this node.
 */
export default class MultiEffectNode {
  constructor(audioContext) {
    // Set the audio-context.
    this._audioContext = audioContext;
  }

  /**
   * The effects AudioContext getter.
   * @return {AudioContext} The AudioContext used by the effect.
   */
  get audioContext() {
    return this._audioContext;
  }

  /**
   * The effects AudioContext setter.
   * @param  {AudioContext} audioContext
   */
  set audioContext(audioContext) {
    this._audioContext = audioContext;
  }

  set components(compsArray) {
    this._components = {};
    let prevComponent;
    compsArray.forEach((component, index)=> {
      const initializatedComponent = new Noisefy[capitalize(component.type)](this._audioContext);
      trace('creating ', capitalize(component.type));
      for (const setting of component.settingsList) {
        trace('initializing', setting.name, 'setting to value:', setting.value);
        initializatedComponent[setting.name] = setting.value;
      }
      // If first or last also input or output of the multiEffectNode
      if (index === 0) {
        this.input = initializatedComponent;
      }
      if (index === compsArray.length - 1) {
        this.output = initializatedComponent;
      }
      // Connect to the previous component
      if (prevComponent) {
        prevComponent.connect(initializatedComponent);
      }
      prevComponent = initializatedComponent;
      this._components[component.name] = initializatedComponent;
    });
  }

  // setEffectProperty({componentName, componentProperty, value}) {
  //   const component = this._components[componentName];
  //   const componentProp = component[componentProperty];
  //   const componentPropDefinition = componentDefinition.settingsList.find((prop)=> prop.name === componentProperty);
  //   if (!component) {console.error(`component ${componentName} not found in amp`); return;}
  //   if (componentProp === undefined) {console.error(`componentProperty ${componentProperty} not found in component ${componentName}`); return;}
  //   if (componentPropDefinition === undefined) {console.error(`componentPropDefinition ${componentProperty} not found in AmpGenerator component ${componentName}`); return;}

  //   const normalize = componentPropDefinition.normalize || ((val)=> val);
  //   component[componentProperty] = normalize(value);
  //   trace(`Setting to ${componentName} component, ${componentProperty} prop the value ${value}, (normalized: ${normalize(value)})`);
  // }

  get components() {
    return this._components;
  }

  getCompSettingValue({componentName, settingName}) {
    const comp = this._components[componentName];
    if (!comp) throw new Error(`The comp ${componentName} is not included in the effects list.`);
    return comp[settingName];
  }

  /**
   * The effect's audio-node getter.
   * @return {AudioNode} The audio-node used for the effect.
   */
  get input() {
    return this._inputNode;
  }

  /**
   * The effect's audio-node setter.
   * @param  {AudioNode} input
   */
  set input(input) {
    this._inputNode = input;
  }

  /**
     * Getter for the effects output node.
     * @return {AudioNode}
     */
  get output() {
    return this._outputNode;
  }

  // When creating and object that extends this class, you have to set this output property pointing to
  // the last audionNode of your main effect
  // to properly connect other elements throw the connect method beyond
  set output(output) {
    this._outputNode = output;
  }

  connect(node) {
    if (node instanceof SingleAudioNode || node instanceof MultiAudioNode) {
      this.output.connect(node.node);
    }
    return node;
  }

  /**
     * Disconnect the effect.
     * @return {AudioNode}
     */
  disconnect() {
    this.output.disconnect();
    return this.output;
  }

  /**
     * Destroy an effect.
     * @return {AudioNode}
     */
  destroy() {
    // Each component is and effect of type SingleAudioNode or MultiAudioNode
    for (const component in this.components) {
      component.destroy();
    }
    return this.disconnect();
  }
}
