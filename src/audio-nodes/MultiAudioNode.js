
import {SingleAudioNode} from './SingleAudioNode';

/**
 * The multi-audio-node class.
 * When creating an effect existing out of multiple audio-nodes, we can wrap it in this class.
 * You can set the input node (effect.node) and the output node of the effect (effect.output).
 * The input node is the first audio-node in the effect, the previous effect will be connected to this node.
 * The output node is the last audio-node in the effect, the next effect will be connected to this node.
 */
export class MultiAudioNode extends SingleAudioNode {

    constructor(audioContext) {
        super(audioContext);
    }

    /**
     * Getter for the effects output node.
     * @return {AudioNode}
     */
    get output() {
        return this._outputNode;
    }

    /**
     * Setter for the effects output node.
     * @param  {AudioNode} output
     * @return {AudioNode}
     */
    set output(output) {
        this._outputNode = output;
    }

    /**
     * Connect the effect to other effects or native audio-nodes.
     * @param  {AudioNode|SingleAudioNode|MultiAudioNode} node
     * @return {AudioNode|SingleAudioNode|MultiAudioNode}
     */
    connect(node)  {
      this.output.connect(node);
      return node;
    }

    /**
     * Disconnect the effect.
     * @return {AudioNode}
     */
    disconnect(){
        this.output.disconnect();
        return this.output;
    }

    /**
     * Destroy an effect.
     * @return {AudioNode}
     */
    destroy() {
        Object.keys(this.nodes).forEach(node => {
            if (this.nodes[node].disconnect && typeof this.nodes[node].disconnect === 'function') {
                this.nodes[node].disconnect();
            }
        });

        return this.disconnect()
    }
};
