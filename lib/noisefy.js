(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("noisefy", [], factory);
	else if(typeof exports === 'object')
		exports["noisefy"] = factory();
	else
		root["noisefy"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/Util.js":
/*!*********************!*\
  !*** ./src/Util.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateValues = exports.deviceListHandler = exports.deviceList = exports.hasAudioContext = exports.getUserMedia = exports.hasGetUserMedia = void 0;

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var win = typeof window !== 'undefined' ? window : global;
/**
 * Check if the current browser supports getUserMedia.
 // https://stackoverflow.com/questions/37673000/typeerror-getusermedia-called-on-an-object-that-does-not-implement-interface
 */

var getUserMedia = navigator.getUserMedia || navigator.mozGetUserMedia || navigator.webkitGetUserMedia || navigator.msGetUserMedia;
exports.getUserMedia = getUserMedia;
var hasGetUserMedia = !!getUserMedia;
/**
 * Check if the current browser supports the web-audio-api .
 */

exports.hasGetUserMedia = hasGetUserMedia;
var audioContext = win.AudioContext || win.webkitAudioContext || win.mozAudioContext || win.msAudioContext;
var hasAudioContext = !!audioContext;
exports.hasAudioContext = hasAudioContext;

var deviceList = function deviceList() {
  return navigator.mediaDevices.enumerateDevices().then(function (devices) {
    return Promise.resolve(devices.map(function (device) {
      var _device$kind$match = device.kind.match(/(\w+)(input|output)/i),
          _device$kind$match2 = _slicedToArray(_device$kind$match, 3),
          kind = _device$kind$match2[0],
          type = _device$kind$match2[1],
          direction = _device$kind$match2[2];

      return {
        kind: kind,
        type: type,
        direction: direction,
        deviceId: device.deviceId,
        groupId: device.groupId,
        label: device.label,
        capabilities: device.getCapabilities ? device.getCapabilities() : ''
      };
    }));
  });
};

exports.deviceList = deviceList;

var deviceListHandler = function deviceListHandler(callback) {
  navigator.mediaDevices.ondevicechange = function (event) {
    deviceList().then(function (list) {
      callback(list, event);
    });
  };
};

exports.deviceListHandler = deviceListHandler;

var validateValues = function validateValues(value, range, effectName) {
  if (range[0] > value || value > range[1]) {
    throw Error("The value ".concat(value, " setted for the effect ").concat(effectName, " is wrong, must be in range: ").concat(range));
  }
};

exports.validateValues = validateValues;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./src/assets/impulses/reverb/hall-reverb.ogg":
/*!****************************************************!*\
  !*** ./src/assets/impulses/reverb/hall-reverb.ogg ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected character '\u0000' (1:4)\nYou may need an appropriate loader to handle this file type.\n(Source code omitted for this binary file)");

/***/ }),

/***/ "./src/audio-nodes/MultiAudioNode.js":
/*!*******************************************!*\
  !*** ./src/audio-nodes/MultiAudioNode.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _SingleAudioNode2 = _interopRequireDefault(__webpack_require__(/*! ./SingleAudioNode */ "./src/audio-nodes/SingleAudioNode.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * The multi-audio-node class.
 * When creating an effect existing out of multiple audio-nodes, we can wrap it in this class.
 * You MUST set the input node (effect.node) and the output node of the effect (effect.output) when extending this class.
 * The input node is the first audio-node in the effect, the previous effect will be connected to this node.
 * The output node is the last audio-node in the effect, the next effect will be connected to this node.
 */
var MultiAudioNode =
/*#__PURE__*/
function (_SingleAudioNode) {
  _inherits(MultiAudioNode, _SingleAudioNode);

  function MultiAudioNode() {
    _classCallCheck(this, MultiAudioNode);

    return _possibleConstructorReturn(this, (MultiAudioNode.__proto__ || Object.getPrototypeOf(MultiAudioNode)).apply(this, arguments));
  }

  _createClass(MultiAudioNode, [{
    key: "connect",

    /**
       * Connect the effect to other effects or native audio-nodes.
       * @param  {AudioNode|SingleAudioNode|MultiAudioNode} node
       * @return {AudioNode|SingleAudioNode|MultiAudioNode}
       */
    value: function connect(node) {
      if (node instanceof _SingleAudioNode2.default || node instanceof MultiAudioNode) {
        this.output.connect(node.node);
      } else {
        this.output.connect(node);
      }

      return node;
    }
    /**
       * Disconnect the effect.
       * @return {AudioNode}
       */

  }, {
    key: "disconnect",
    value: function disconnect() {
      this.output.disconnect();
      return this.output;
    }
    /**
       * Destroy an effect.
       * @return {AudioNode}
       */

  }, {
    key: "destroy",
    value: function destroy() {
      var _this = this;

      Object.keys(this.nodes).forEach(function (node) {
        if (_this.nodes[node].disconnect && typeof _this.nodes[node].disconnect === 'function') {
          _this.nodes[node].disconnect();
        }
      });
      return this.disconnect();
    }
  }, {
    key: "output",
    // TODO Why is this commented?
    // constructor(audioContext) {
    //   super(audioContext);
    // }

    /**
     * Getter for the effects output node.
     * @return {AudioNode}
     */
    get: function get() {
      return this._outputNode;
    } // When creating and object that extends this class, you have to set this output property pointing to your main audioNode
    // to properly connect other elements throw the connect method beyond
    ,
    set: function set(output) {
      this._outputNode = output;
    }
  }]);

  return MultiAudioNode;
}(_SingleAudioNode2.default);

exports.default = MultiAudioNode;
module.exports = exports["default"];

/***/ }),

/***/ "./src/audio-nodes/SingleAudioNode.js":
/*!********************************************!*\
  !*** ./src/audio-nodes/SingleAudioNode.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The basic audio node class.
 * This is de skeleton for a audio  effect.
 * When the effect only contains 1 audioNode this class can be used.
 */
var SingleAudioNode =
/*#__PURE__*/
function () {
  // nodes = {}; //{[key: string]: AudioNode|GainNode|DelayNode|WaveShaperNode|BiquadFilterNode|OscillatorNode|ConvolverNode} = {};
  function SingleAudioNode(audioContext) {
    _classCallCheck(this, SingleAudioNode);

    // Set the audio-context.
    this._audioContext = audioContext;
  }
  /**
   * The effects AudioContext getter.
   * @return {AudioContext} The AudioContext used by the effect.
   */


  _createClass(SingleAudioNode, [{
    key: "connect",

    /**
     * Connect the effect to other effects or native audio-nodes.
     * @param  {AudioNode|SingleAudioNode} node
     * @return {AudioNode|SingleAudioNode}
     */
    value: function connect(node) {
      if (node instanceof SingleAudioNode) {
        this.node.connect(node.node);
      } else {
        this.node.connect(node);
      }

      return node;
    }
    /**
     * disconnect the effect.
     * @return {AudioNode}
     */

  }, {
    key: "disconnect",
    value: function disconnect() {
      this.node.disconnect();
      return this.node;
    }
    /**
     * Alias for the disconnect method, to offer the same api as a MultiAudioNode.
     * @return {AudioNode}
     */

  }, {
    key: "destroy",
    value: function destroy() {
      return this.disconnect();
    }
  }, {
    key: "audioContext",
    get: function get() {
      return this._audioContext;
    }
    /**
     * The effects AudioContext setter.
     * @param  {AudioContext} audioContext
     */
    ,
    set: function set(audioContext) {
      this._audioContext = audioContext;
    }
    /**
     * The effect's audio-node getter.
     * @return {AudioNode} The audio-node used for the effect.
     */

  }, {
    key: "node",
    get: function get() {
      return this._node;
    }
    /**
     * The effect's audio-node setter.
     * @param  {AudioNode} node
     */
    ,
    set: function set(node) {
      this._node = node;
    }
  }]);

  return SingleAudioNode;
}();

exports.default = SingleAudioNode;
module.exports = exports["default"];

/***/ }),

/***/ "./src/audio-nodes/amp/Amp.js":
/*!************************************!*\
  !*** ./src/audio-nodes/amp/Amp.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nError: Unknown substitution \"BODY\" given\n    at Object.keys.forEach.key (/Users/turu/git/noisefy/node_modules/@babel/template/lib/populate.js:35:15)\n    at Array.forEach (<anonymous>)\n    at populatePlaceholders (/Users/turu/git/noisefy/node_modules/@babel/template/lib/populate.js:33:31)\n    at arg (/Users/turu/git/noisefy/node_modules/@babel/template/lib/string.js:22:51)\n    at arg (/Users/turu/git/noisefy/node_modules/@babel/template/lib/builder.js:77:14)\n    at pushComputedPropsSpec (/Users/turu/git/noisefy/node_modules/babel-plugin-transform-es2015-for-of/lib/index.js:157:20)\n    at PluginPass.ForOfStatement (/Users/turu/git/noisefy/node_modules/babel-plugin-transform-es2015-for-of/lib/index.js:72:21)\n    at newFn (/Users/turu/git/noisefy/node_modules/@babel/traverse/lib/visitors.js:193:21)\n    at NodePath._call (/Users/turu/git/noisefy/node_modules/@babel/traverse/lib/path/context.js:53:20)\n    at NodePath.call (/Users/turu/git/noisefy/node_modules/@babel/traverse/lib/path/context.js:40:17)\n    at NodePath.visit (/Users/turu/git/noisefy/node_modules/@babel/traverse/lib/path/context.js:88:12)\n    at TraversalContext.visitQueue (/Users/turu/git/noisefy/node_modules/@babel/traverse/lib/context.js:118:16)\n    at TraversalContext.visitMultiple (/Users/turu/git/noisefy/node_modules/@babel/traverse/lib/context.js:85:17)\n    at TraversalContext.visit (/Users/turu/git/noisefy/node_modules/@babel/traverse/lib/context.js:144:19)\n    at Function.traverse.node (/Users/turu/git/noisefy/node_modules/@babel/traverse/lib/index.js:94:17)\n    at NodePath.visit (/Users/turu/git/noisefy/node_modules/@babel/traverse/lib/path/context.js:95:18)\n    at TraversalContext.visitQueue (/Users/turu/git/noisefy/node_modules/@babel/traverse/lib/context.js:118:16)\n    at TraversalContext.visitSingle (/Users/turu/git/noisefy/node_modules/@babel/traverse/lib/context.js:90:19)\n    at TraversalContext.visit (/Users/turu/git/noisefy/node_modules/@babel/traverse/lib/context.js:146:19)\n    at Function.traverse.node (/Users/turu/git/noisefy/node_modules/@babel/traverse/lib/index.js:94:17)\n    at NodePath.visit (/Users/turu/git/noisefy/node_modules/@babel/traverse/lib/path/context.js:95:18)\n    at TraversalContext.visitQueue (/Users/turu/git/noisefy/node_modules/@babel/traverse/lib/context.js:118:16)\n    at TraversalContext.visitMultiple (/Users/turu/git/noisefy/node_modules/@babel/traverse/lib/context.js:85:17)\n    at TraversalContext.visit (/Users/turu/git/noisefy/node_modules/@babel/traverse/lib/context.js:144:19)\n    at Function.traverse.node (/Users/turu/git/noisefy/node_modules/@babel/traverse/lib/index.js:94:17)\n    at NodePath.visit (/Users/turu/git/noisefy/node_modules/@babel/traverse/lib/path/context.js:95:18)\n    at TraversalContext.visitQueue (/Users/turu/git/noisefy/node_modules/@babel/traverse/lib/context.js:118:16)\n    at TraversalContext.visitSingle (/Users/turu/git/noisefy/node_modules/@babel/traverse/lib/context.js:90:19)\n    at TraversalContext.visit (/Users/turu/git/noisefy/node_modules/@babel/traverse/lib/context.js:146:19)\n    at Function.traverse.node (/Users/turu/git/noisefy/node_modules/@babel/traverse/lib/index.js:94:17)\n    =============\n    at _default (/Users/turu/git/noisefy/node_modules/babel-plugin-transform-es2015-for-of/lib/index.js:13:20)\n    at loadDescriptor (/Users/turu/git/noisefy/node_modules/@babel/core/lib/config/full.js:165:14)\n    at cachedFunction (/Users/turu/git/noisefy/node_modules/@babel/core/lib/config/caching.js:33:19)\n    at loadPluginDescriptor (/Users/turu/git/noisefy/node_modules/@babel/core/lib/config/full.js:200:28)\n    at config.plugins.reduce (/Users/turu/git/noisefy/node_modules/@babel/core/lib/config/full.js:69:20)\n    at Array.reduce (<anonymous>)\n    at recurseDescriptors (/Users/turu/git/noisefy/node_modules/@babel/core/lib/config/full.js:67:38)\n    at recurseDescriptors (/Users/turu/git/noisefy/node_modules/@babel/core/lib/config/full.js:94:27)\n    at loadFullConfig (/Users/turu/git/noisefy/node_modules/@babel/core/lib/config/full.js:108:6)\n    at process.nextTick (/Users/turu/git/noisefy/node_modules/@babel/core/lib/transform.js:28:33)\n    at process._tickCallback (internal/process/next_tick.js:61:11)");

/***/ }),

/***/ "./src/audio-nodes/effects/Delay.js":
/*!******************************************!*\
  !*** ./src/audio-nodes/effects/Delay.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _MultiAudioNode2 = _interopRequireDefault(__webpack_require__(/*! ../MultiAudioNode */ "./src/audio-nodes/MultiAudioNode.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * The audio-effects delay class.
 * This class lets you add a delay effect.
 */
var Delay =
/*#__PURE__*/
function (_MultiAudioNode) {
  _inherits(Delay, _MultiAudioNode);

  // private _wet: number;
  // private _speed: number;
  // private _duration: number;
  function Delay(audioContext) {
    var _this;

    _classCallCheck(this, Delay);

    _this = _possibleConstructorReturn(this, (Delay.__proto__ || Object.getPrototypeOf(Delay)).call(this, audioContext));
    _this.nodes = {
      inputGainNode: audioContext.createGain(),
      // Create the input and output nodes of the effect
      outputGainNode: audioContext.createGain(),
      wetGainNode: audioContext.createGain(),
      // Create the gain-node we'll use to controll the wetness of the delay
      durationGainNode: audioContext.createGain(),
      // Create the gain node we'll use to controll the duration of the delay
      delayNode: audioContext.createDelay() // Create the delay node

    }; // Wire it all up

    _this.nodes.inputGainNode.connect(_this.nodes.wetGainNode);

    _this.nodes.inputGainNode.connect(_this.nodes.delayNode);

    _this.nodes.durationGainNode.connect(_this.nodes.delayNode);

    _this.nodes.delayNode.connect(_this.nodes.durationGainNode);

    _this.nodes.delayNode.connect(_this.nodes.outputGainNode);

    _this.nodes.wetGainNode.connect(_this.nodes.outputGainNode); // Set the input gain-node as the input-node.


    _this.node = _this.nodes.inputGainNode; // Set the output gain-node as the output-node.

    _this.output = _this.nodes.outputGainNode; // Set the default wetness to 1

    _this.wet = 1; // Set the default speed to 1 second

    _this.speed = 1; // Set the default duration to 0.4

    _this.duration = 0.4;
    return _this;
  }
  /**
   * Getter for the effect's wetness
   * @return {number}
   */


  _createClass(Delay, [{
    key: "wet",
    get: function get() {
      return this._wet;
    }
    /**
     * Setter for the effect's wetness
     * @param  {number|string} wetness
     */
    ,
    set: function set(wetness) {
      // Set the internal wetness value
      this._wet = parseFloat(wetness); // Set the new value for the wetness controll gain-node

      this.nodes.wetGainNode.gain.value = this._wet;
    }
    /**
     * Getter for the effect's speed
     * @return {number}
     */

  }, {
    key: "speed",
    get: function get() {
      return this._speed;
    }
    /**
     * Setter for the effect's speed
     * @param {number|string} speed
     */
    ,
    set: function set(speed) {
      // Set the internal speed value
      this._speed = parseFloat(speed); // Set the delayTime value of the delay-node

      this.nodes.delayNode.delayTime.value = this._speed;
    }
    /**
     * Getter for the effect's duration
     * @return {number}
     */

  }, {
    key: "duration",
    get: function get() {
      return this._duration;
    }
    /**
     * Setter for the effect's duration
     * @param  {number|string} duration
     */
    ,
    set: function set(duration) {
      // Set the internal duration value
      this._duration = parseFloat(duration); // Set the duration gain-node value

      this.nodes.durationGainNode.gain.value = this._duration;
    }
  }]);

  return Delay;
}(_MultiAudioNode2.default);

exports.default = Delay;
module.exports = exports["default"];

/***/ }),

/***/ "./src/audio-nodes/effects/Distortion.js":
/*!***********************************************!*\
  !*** ./src/audio-nodes/effects/Distortion.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _SingleAudioNode2 = _interopRequireDefault(__webpack_require__(/*! ../SingleAudioNode */ "./src/audio-nodes/SingleAudioNode.js"));

var _Util = __webpack_require__(/*! ../../Util */ "./src/Util.js");

var _DistortionGenerator = __webpack_require__(/*! ../factories/DistortionGenerator */ "./src/audio-nodes/factories/DistortionGenerator.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * The audio-effects distortion class.
 * This class lets you add a distortion effect.
 */
var Distortion =
/*#__PURE__*/
function (_SingleAudioNode) {
  _inherits(Distortion, _SingleAudioNode);

  function Distortion(audioContext) {
    var _this;

    _classCallCheck(this, Distortion);

    _this = _possibleConstructorReturn(this, (Distortion.__proto__ || Object.getPrototypeOf(Distortion)).call(this, audioContext));
    _this.node = _this.audioContext.createWaveShaper(); // TODO Is this oversample important?
    // this.node.oversample = '4x';

    _this.distortionType = _DistortionGenerator.DISTORTION_TYPES.STANDARD;
    return _this;
  }

  _createClass(Distortion, [{
    key: "intensity",
    get: function get() {
      return this._intensity;
    },
    set: function set(intensity) {
      (0, _Util.validateValues)(intensity, [0, 10], 'distortion'); // Set the internal intensity value.

      var value = 150 * parseFloat(intensity);
      var minp = 0;
      var maxp = 1500; // The result should be between 10 an 1500

      var minv = Math.log(10);
      var maxv = Math.log(1500); // calculate adjustment factor

      var scale = (maxv - minv) / (maxp - minp); // end of logarithmic adjustment

      this._intensity = Math.exp(minv + scale * (value - minp));
      this.node.curve = (0, _DistortionGenerator.getDistortionTypeGenerateFunction)(this.distortionType)(this._intensity);
    }
  }, {
    key: "distortionType",
    get: function get() {
      return this._distortionType;
    },
    set: function set(distortionTypeRequested) {
      if (Object.values(_DistortionGenerator.DISTORTION_TYPES).includes(distortionTypeRequested)) {
        this._distortionType = distortionTypeRequested;
        this.node.curve = (0, _DistortionGenerator.getDistortionTypeGenerateFunction)(this._distortionType)(this._intensity);
        console.log("The distortion type ".concat(distortionTypeRequested, " has been set"));
      } else {
        throw new Error("The distorion type ".concat(distortionTypeRequested, " is not included in the distortionTypes set."));
      }
    }
  }]);

  return Distortion;
}(_SingleAudioNode2.default);

exports.default = Distortion;
module.exports = exports["default"];

/***/ }),

/***/ "./src/audio-nodes/effects/Equalizer.js":
/*!**********************************************!*\
  !*** ./src/audio-nodes/effects/Equalizer.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _MultiAudioNode2 = _interopRequireDefault(__webpack_require__(/*! ../MultiAudioNode */ "./src/audio-nodes/MultiAudioNode.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * The audio-effects Basic Equalizer class.
 * This class lets you add an Equalizer with bass mid and trebble filters.
 */
var Equalizer =
/*#__PURE__*/
function (_MultiAudioNode) {
  _inherits(Equalizer, _MultiAudioNode);

  function Equalizer(audioContext) {
    var _this;

    _classCallCheck(this, Equalizer);

    _this = _possibleConstructorReturn(this, (Equalizer.__proto__ || Object.getPrototypeOf(Equalizer)).call(this, audioContext));
    _this.nodes = {
      trebbleFilterNode: _this.audioContext.createBiquadFilter(),
      middleFilterNode: _this.audioContext.createBiquadFilter(),
      bassFilterNode: _this.audioContext.createBiquadFilter()
    };
    _this.nodes.trebbleFilterNode.frequency.value = 6500;
    _this.nodes.trebbleFilterNode.type = 'highshelf';
    _this.nodes.trebbleFilterNode.Q.value = 0.7071;
    _this.nodes.middleFilterNode.frequency.value = 1700;
    _this.nodes.middleFilterNode.type = 'peaking';
    _this.nodes.middleFilterNode.Q.value = 0.7071;
    _this.nodes.bassFilterNode.frequency.value = 100;
    _this.nodes.bassFilterNode.type = 'lowshelf';
    _this.nodes.bassFilterNode.Q.value = 0.7071; // Connect all nodes together

    _this.nodes.trebbleFilterNode.connect(_this.nodes.middleFilterNode);

    _this.nodes.middleFilterNode.connect(_this.nodes.bassFilterNode); // node and output node


    _this.node = _this.nodes.trebbleFilterNode;
    _this.output = _this.nodes.bassFilterNode;
    return _this;
  } // Setters and getters for public properties


  _createClass(Equalizer, [{
    key: "trebbleGain",
    get: function get() {
      return this._trebbleGain;
    },
    set: function set(gain) {
      var normalizedValue = parseFloat(gain);
      this._trebbleGain = (normalizedValue - 10) * 10;
      this.nodes.trebbleFilterNode.gain.value = this._trebbleGain;
    }
  }, {
    key: "middleGain",
    get: function get() {
      return this._middleGain;
    },
    set: function set(gain) {
      var normalizedValue = parseFloat(gain);
      this._middleGain = (normalizedValue - 5) * 4;
      this.nodes.middleFilterNode.gain.value = this._middleGain;
    }
  }, {
    key: "bassGain",
    get: function get() {
      return this._bassGain;
    },
    set: function set(gain) {
      var normalizedValue = parseFloat(gain);
      this._bassGain = (normalizedValue - 10) * 7;
      this.nodes.bassFilterNode.gain.value = this._bassGain;
    }
  }]);

  return Equalizer;
}(_MultiAudioNode2.default);

exports.default = Equalizer;
module.exports = exports["default"];

/***/ }),

/***/ "./src/audio-nodes/effects/Flanger.js":
/*!********************************************!*\
  !*** ./src/audio-nodes/effects/Flanger.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _MultiAudioNode2 = _interopRequireDefault(__webpack_require__(/*! ../MultiAudioNode */ "./src/audio-nodes/MultiAudioNode.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * The audio-effects flanger class.
 * This class lets you add a flanger effect.
 */
var Flanger =
/*#__PURE__*/
function (_MultiAudioNode) {
  _inherits(Flanger, _MultiAudioNode);

  // private _delay: number;
  // private _depth: number;
  // private _feedback: number;
  // private _speed: number;
  function Flanger(audioContext) {
    var _this;

    _classCallCheck(this, Flanger);

    _this = _possibleConstructorReturn(this, (Flanger.__proto__ || Object.getPrototypeOf(Flanger)).call(this, audioContext));
    _this.nodes = {
      inputGainNode: audioContext.createGain(),
      // Create the input gain-node
      wetGainNode: audioContext.createGain(),
      // Create the wetness controll gain-node
      delayNode: audioContext.createDelay(),
      // Create the delay node
      gainNode: audioContext.createGain(),
      // Create the gain controll gain-node
      feedbackGainNode: audioContext.createGain(),
      // Create the feedback controll gain-node
      oscillatorNode: audioContext.createOscillator() // Create the oscilator node

    }; // Wire it all up

    _this.nodes.oscillatorNode.connect(_this.nodes.gainNode);

    _this.nodes.gainNode.connect(_this.nodes.delayNode.delayTime);

    _this.nodes.inputGainNode.connect(_this.nodes.wetGainNode);

    _this.nodes.inputGainNode.connect(_this.nodes.delayNode);

    _this.nodes.delayNode.connect(_this.nodes.wetGainNode);

    _this.nodes.delayNode.connect(_this.nodes.feedbackGainNode);

    _this.nodes.feedbackGainNode.connect(_this.nodes.inputGainNode); // Setup the oscillator


    _this.nodes.oscillatorNode.type = 'sine';

    _this.nodes.oscillatorNode.start(0); // Set the input gain-node as the input-node.


    _this.node = _this.nodes.inputGainNode; // Set the output gain-node as the output-node.

    _this.output = _this.nodes.wetGainNode; // Set the default delay of 0.005 seconds

    _this.delay = 0.005; // Set the default depth to 0.002;

    _this.depth = 0.002; // Set the default feedback to 0.5

    _this.feedback = 0.5; // Set the default speed to 0.25Hz

    _this.speed = 0.25;
    return _this;
  }
  /**
   * Getter for the effect's delay
   * @return {number}
   */


  _createClass(Flanger, [{
    key: "delay",
    get: function get() {
      return this._delay;
    }
    /**
     * Setter for the effect's delay
     * @param  {number} delay
     */
    ,
    set: function set(delay) {
      // Set the internal delay value
      this._delay = parseFloat(delay); // Set the new value for the delay-node

      this.nodes.delayNode.delayTime.value = this._delay;
    }
    /**
     * Getter for the effect's depth
     * @return {number}
     */

  }, {
    key: "depth",
    get: function get() {
      return this._depth;
    }
    /**
     * Setter for the effect's depth
     * @param  {number} depth
     */
    ,
    set: function set(depth) {
      // Set the internal depth value
      this._depth = parseFloat(depth); // Set the gain value of the gain-node

      this.nodes.gainNode.gain.value = this._depth;
    }
    /**
     * Getter for the effect's feedback
     * @return {number}
     */

  }, {
    key: "feedback",
    get: function get() {
      return this._feedback;
    }
    /**
     * Setter for the effect's feedback
     * @param  {number} feedback
     */
    ,
    set: function set(feedback) {
      // Set the internal feedback value
      this._feedback = parseFloat(feedback); // Set the feedback gain-node value

      this.nodes.feedbackGainNode.gain.value = this._feedback;
    }
    /**
     * Getter for the effect's speed
     * @return {number}
     */

  }, {
    key: "speed",
    get: function get() {
      return this._speed;
    }
    /**
     * Setter for the effect's speed
     * @param  {number} speed
     */
    ,
    set: function set(speed) {
      // Set the internal speed value
      this._speed = parseFloat(speed); // Set the speed gain-node value

      this.nodes.oscillatorNode.frequency.value = this._speed;
    }
  }]);

  return Flanger;
}(_MultiAudioNode2.default);

exports.default = Flanger;
module.exports = exports["default"];

/***/ }),

/***/ "./src/audio-nodes/effects/Input.js":
/*!******************************************!*\
  !*** ./src/audio-nodes/effects/Input.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _SingleAudioNode2 = _interopRequireDefault(__webpack_require__(/*! ../SingleAudioNode */ "./src/audio-nodes/SingleAudioNode.js"));

var _MultiAudioNode = _interopRequireDefault(__webpack_require__(/*! ../MultiAudioNode */ "./src/audio-nodes/MultiAudioNode.js"));

var _Util = __webpack_require__(/*! ../../Util */ "./src/Util.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Input =
/*#__PURE__*/
function (_SingleAudioNode) {
  _inherits(Input, _SingleAudioNode);

  function Input(audioContext) {
    var _this;

    _classCallCheck(this, Input);

    _this = _possibleConstructorReturn(this, (Input.__proto__ || Object.getPrototypeOf(Input)).call(this, audioContext));
    _this._deferredConnects = [];
    _this._hasPermissions = false;
    return _this;
  }

  _createClass(Input, [{
    key: "getUserMedia",

    /**
       * Get your microphone sound as input.
       * @return {Promise<AudioNode>} Resolves when you accept to use the microphone.
       */
    value: function getUserMedia() {
      var _this2 = this;

      return new Promise(function (resolve, reject) {
        if (_Util.hasGetUserMedia) {
          // Firefox
          if (navigator.mozGetUserMedia) {
            navigator.mediaDevices.getUserMedia({
              audio: {
                optional: [{
                  'echoCancellation': false
                }, {
                  'mozNoiseSuppression': false
                }, {
                  'mozAutoGainControl': false
                }]
              }
            }, function (stream) {
              _this2.input = stream;
              _this2._hasPermissions = true;
              window.stream = stream; // make stream available to console
              // Connect the deffered connects

              _this2._deferredConnects.forEach(function (node) {
                _this2.connect(node);
              });

              resolve(stream);
            }, function (error) {
              reject(error);
            }); // Chrome
          } else {
            navigator.getUserMedia({
              audio: {
                optional: [{
                  'echoCancellation': false
                }, {
                  'mozNoiseSuppression': false
                }, {
                  'mozAutoGainControl': false
                }]
              }
            }, function (stream) {
              _this2.input = stream;
              _this2._hasPermissions = true;
              window.stream = stream; // make stream available to console
              // Connect the deffered connects

              _this2._deferredConnects.forEach(function (node) {
                _this2.connect(node);
              });

              resolve(stream);
            }, function (error) {
              reject(error);
            });
          }
        } else {
          reject(Error('Your browser does not support the use of user-media, please upgrade or use another browser!'));
        }
      });
    }
    /**
       * Connect the effect to other effects or native audio-nodes.
       * @param  {AudioNode|SingleAudioNode|MultiAudioNode} node
       * @return {AudioNode|SingleAudioNode|MultiAudioNode}
       */

  }, {
    key: "connect",
    value: function connect(node) {
      // If there is no input node yet, connect when there is a node
      if (typeof this.node === 'undefined') {
        this._deferredConnects.push(node);

        return node;
      }

      if (node instanceof _SingleAudioNode2.default || node instanceof _MultiAudioNode.default) {
        this.node.connect(node.node);
      } else {
        this.node.connect(node);
      }

      return node;
    } // Get a list of audio in-and-output devices devices.
    // @return A list of the available audio in-and-output devices.

  }, {
    key: "getAudioDevices",
    value: function getAudioDevices() {
      var _this3 = this;

      return new Promise(function (resolve, reject) {
        if (_this3._hasPermissions) {
          navigator.mediaDevices.enumerateDevices().then(function (devices) {
            resolve(devices.filter(function (device) {
              return device.kind && device.kind === 'audioinput';
            }));
          }).catch(function (error) {
            reject(error);
          });
        } else {
          _this3.getUserMedia().then(function () {
            navigator.mediaDevices.enumerateDevices().then(function (devices) {
              resolve(devices.filter(function (device) {
                return device.kind && device.kind === 'audioinput';
              }));
            }).catch(function (error) {
              reject(error);
            });
          }).catch(function (error) {
            reject(error);
          });
        }
      });
    }
  }, {
    key: "input",
    get: function get() {
      return this.node;
    },
    set: function set(stream) {
      // Create a media-stream source.
      this.node = this.audioContext.createMediaStreamSource(stream);
    }
  }]);

  return Input;
}(_SingleAudioNode2.default);

exports.default = Input;
module.exports = exports["default"];

/***/ }),

/***/ "./src/audio-nodes/effects/Output.js":
/*!*******************************************!*\
  !*** ./src/audio-nodes/effects/Output.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _SingleAudioNode2 = _interopRequireDefault(__webpack_require__(/*! ../SingleAudioNode */ "./src/audio-nodes/SingleAudioNode.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * The audio-effects output class.
 * This class connects to your device's audio output.
 */
var Output =
/*#__PURE__*/
function (_SingleAudioNode) {
  _inherits(Output, _SingleAudioNode);

  function Output(audioContext) {
    var _this;

    _classCallCheck(this, Output);

    _this = _possibleConstructorReturn(this, (Output.__proto__ || Object.getPrototypeOf(Output)).call(this, audioContext));

    if (_this.audioContext) {
      _this.node = audioContext.destination;
    }

    return _this;
  }

  return Output;
}(_SingleAudioNode2.default);

exports.default = Output;
module.exports = exports["default"];

/***/ }),

/***/ "./src/audio-nodes/effects/Presence.js":
/*!*********************************************!*\
  !*** ./src/audio-nodes/effects/Presence.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _SingleAudioNode2 = _interopRequireDefault(__webpack_require__(/*! ../SingleAudioNode */ "./src/audio-nodes/SingleAudioNode.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * The audio-effects Basic Presence class.
 * This class lets you add an Presence with bass mid and trebble filters.
 */
var Presence =
/*#__PURE__*/
function (_SingleAudioNode) {
  _inherits(Presence, _SingleAudioNode);

  function Presence(audioContext) {
    var _this;

    _classCallCheck(this, Presence);

    _this = _possibleConstructorReturn(this, (Presence.__proto__ || Object.getPrototypeOf(Presence)).call(this, audioContext));
    _this.node = _this.audioContext.createBiquadFilter();
    _this.node.frequency.value = 3900;
    _this.node.type = 'peaking';
    _this.node.Q.value = 0.7071;
    return _this;
  } // Setters and getters for public properties


  _createClass(Presence, [{
    key: "gain",
    get: function get() {
      return this._gain;
    },
    set: function set(gain) {
      var normalizedValue = parseFloat(gain);
      this._gain = (normalizedValue - 5) * 2;
      this.node.gain.value = this._gain;
    }
  }]);

  return Presence;
}(_SingleAudioNode2.default);

exports.default = Presence;
module.exports = exports["default"];

/***/ }),

/***/ "./src/audio-nodes/effects/Reverb.js":
/*!*******************************************!*\
  !*** ./src/audio-nodes/effects/Reverb.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _MultiAudioNode2 = _interopRequireDefault(__webpack_require__(/*! ../MultiAudioNode */ "./src/audio-nodes/MultiAudioNode.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var irf = __webpack_require__(/*! ../../assets/impulses/reverb/hall-reverb.ogg */ "./src/assets/impulses/reverb/hall-reverb.ogg");

var getInputResponseFile = function getInputResponseFile(file) {
  return fetch(file, {
    method: 'get'
  }).then(function (response) {
    return response.arrayBuffer();
  });
};
/**
 * The audio-effects reverb class.
 * This class lets you add a reverb effect.
 */


var Reverb =
/*#__PURE__*/
function (_MultiAudioNode) {
  _inherits(Reverb, _MultiAudioNode);

  // _wet;
  // _level;
  // _buffer;
  function Reverb(audioContext, buffer) {
    var _this;

    _classCallCheck(this, Reverb);

    _this = _possibleConstructorReturn(this, (Reverb.__proto__ || Object.getPrototypeOf(Reverb)).call(this, audioContext));
    _this.nodes = {
      inputGainNode: audioContext.createGain(),
      // Create the input and output gain-node
      outputGainNode: audioContext.createGain(),
      convolverNode: audioContext.createConvolver(),
      // Create the convolver node to create the reverb effect
      wetGainNode: audioContext.createGain(),
      // Create the wetness controll gain-node
      levelGainNode: audioContext.createGain() // Create the level controll gain-node

    }; // Wire it all up

    _this.nodes.inputGainNode.connect(_this.nodes.convolverNode);

    _this.nodes.inputGainNode.connect(_this.nodes.wetGainNode);

    _this.nodes.convolverNode.connect(_this.nodes.levelGainNode);

    _this.nodes.levelGainNode.connect(_this.nodes.outputGainNode);

    _this.nodes.wetGainNode.connect(_this.nodes.outputGainNode); // Set the input gain-node as the input-node.


    _this.node = _this.nodes.inputGainNode; // Set the output gain-node as the output-node.

    _this.output = _this.nodes.outputGainNode; // Set the default wetness to 0.5

    _this.wet = 0.5; // Set the default level to 1

    _this.level = 1;
    return _this;
  }
  /**
   * Get the standard input responsefile.
   * @param {Any} file
   * @return {Promise<AudioBuffer>}
   */


  _createClass(Reverb, [{
    key: "responseFile",
    set: function set(file) {
      var _this2 = this;

      // TODO Get the file from mapping constants
      getInputResponseFile(irf).then(function (buffer) {
        if (!_this2.buffer) {
          _this2.buffer = buffer;
        }
      }).catch(function (e) {
        console.error('Error processing file:', e);
      });
    }
    /**
     * Getter for the effect's wetness
     * @return {number}
     */

  }, {
    key: "wet",
    get: function get() {
      return this._wet;
    }
    /**
     * Setter for the effect's wetness
     * @param  {number} wetness
     */
    ,
    set: function set(wetness) {
      // Set the internal wetness value
      this._wet = parseFloat(wetness); // Set the new value for the wetness controll gain-node

      this.nodes.wetGainNode.gain.value = this._wet;
    }
    /**
     * Getter for the effect's level
     * @return {number}
     */

  }, {
    key: "level",
    get: function get() {
      return this._level;
    }
    /**
     * Setter for the effect's level
     * @param  {number} level
     */
    ,
    set: function set(level) {
      // Set the internal level value
      this._level = parseFloat(level); // Set the delayTime value of the delay-node

      this.nodes.levelGainNode.gain.value = this._level;
    }
    /**
     * Getter for the effect's convolver buffer
     * @return {Buffer}
     */

  }, {
    key: "buffer",
    get: function get() {
      return this._buffer;
    }
    /**
     * Setter for the effect's convolver buffer
     * @param  {Stream} buffer
     */
    ,
    set: function set(buffer) {
      var _this3 = this;

      this.audioContext.decodeAudioData(buffer, function (buffer) {
        // Set the internal buffer value
        _this3._buffer = buffer; // Set the buffer gain-node value

        _this3.nodes.convolverNode.buffer = _this3._buffer;
      });
    }
  }]);

  return Reverb;
}(_MultiAudioNode2.default);

exports.default = Reverb;
module.exports = exports["default"];

/***/ }),

/***/ "./src/audio-nodes/effects/Tremolo.js":
/*!********************************************!*\
  !*** ./src/audio-nodes/effects/Tremolo.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _SingleAudioNode2 = _interopRequireDefault(__webpack_require__(/*! ../SingleAudioNode */ "./src/audio-nodes/SingleAudioNode.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * The audio-effects tremolo class.
 * This class lets you add a tremolo effect.
 */
var Tremolo =
/*#__PURE__*/
function (_SingleAudioNode) {
  _inherits(Tremolo, _SingleAudioNode);

  // private _speed: number;
  function Tremolo(audioContext) {
    var _this;

    _classCallCheck(this, Tremolo);

    _this = _possibleConstructorReturn(this, (Tremolo.__proto__ || Object.getPrototypeOf(Tremolo)).call(this, audioContext));
    _this.nodes = {
      gainNode: audioContext.createGain(),
      // Create the gain-node
      oscillatorNode: audioContext.createOscillator() // Create the oscilator node

    }; // Wire it all up

    _this.nodes.oscillatorNode.connect(_this.nodes.gainNode.gain); // Setup the oscillator


    _this.nodes.oscillatorNode.type = 'sine';

    _this.nodes.oscillatorNode.start(0); // Set the gain-node as the main node.


    _this.node = _this.nodes.gainNode; // Set the default speed to 20Hz

    _this.speed = 20;
    return _this;
  }
  /**
   * Getter for the effect's speed
   * @return {number}
   */


  _createClass(Tremolo, [{
    key: "speed",
    get: function get() {
      return this._speed;
    }
    /**
     * Setter for the effect's speed
     * @param  {number} speed
     */
    ,
    set: function set(speed) {
      // Set the internal speed value
      this._speed = parseFloat(speed); // Set the new value for the oscillator frequency

      this.nodes.oscillatorNode.frequency.value = this._speed;
    }
  }]);

  return Tremolo;
}(_SingleAudioNode2.default);

exports.default = Tremolo;
module.exports = exports["default"];

/***/ }),

/***/ "./src/audio-nodes/effects/Volume.js":
/*!*******************************************!*\
  !*** ./src/audio-nodes/effects/Volume.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _SingleAudioNode2 = _interopRequireDefault(__webpack_require__(/*! ../SingleAudioNode */ "./src/audio-nodes/SingleAudioNode.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * The audio-effects volume class.
 * This class lets you change the volume of the audio signal.
 */
var Volume =
/*#__PURE__*/
function (_SingleAudioNode) {
  _inherits(Volume, _SingleAudioNode);

  function Volume(audioContext) {
    var _this;

    _classCallCheck(this, Volume);

    _this = _possibleConstructorReturn(this, (Volume.__proto__ || Object.getPrototypeOf(Volume)).call(this, audioContext)); // Create the gain-node which we'll use to change the volume.

    _this.node = _this.audioContext.createGain(); // The initial volume level is 0

    _this.level = 0;
    return _this;
  }
  /**
     * Getter for the effects volume.
     * @return {Float}
     */


  _createClass(Volume, [{
    key: "level",
    get: function get() {
      return this._level;
    }
    /**
       * Setter for the effects volume.
       * @param  {Float} volume The volume, tipical between 0 and 1.
       */
    ,
    set: function set(volume) {
      // Parse the volume, it can not be lower than 0.
      var vol = parseFloat(volume >= 0 ? volume : 0);

      if (this._mute && vol > 0) {
        this._levelBeforeMute = vol;
      } else {
        this.node.gain.value = this._level = vol;
        this._mute = vol === 0;
      }
    }
    /**
       * Getter for the effcts mute functionality.
       * @return {[type]} [description]
       */

  }, {
    key: "mute",
    get: function get() {
      return this._mute;
    }
    /**
       * Setter for the effects mute functionality.
       * @param  {Boolean} mute Whether the effect is muted.
       */
    ,
    set: function set(mute) {
      this._mute = !!mute;

      if (this._mute) {
        // Keep track of the volume before muting
        this._levelBeforeMute = this.level; // Set the volume to 0

        this.level = 0;
      } else {
        // Set the volume to the previous volume.
        this.level = this._levelBeforeMute || this._level;
      }
    }
  }]);

  return Volume;
}(_SingleAudioNode2.default);

exports.default = Volume;
module.exports = exports["default"];

/***/ }),

/***/ "./src/audio-nodes/factories/AmpGenerator.js":
/*!***************************************************!*\
  !*** ./src/audio-nodes/factories/AmpGenerator.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AMP_TYPES_SCHEMAS = exports.AMP_TYPES = exports.AMP_COMPONENT_NAME = exports.AMP_COMPONENT_TYPE = exports.AMP_SETTING_TYPE = void 0;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Here we define the different amp types and their schematics and cabinets, or cabinets shold be another generator? 
// with some initials values.
var AMP_SETTING_TYPE = {
  KNOB: 'knob',
  INTERNAL: 'internal',
  BOOLEAN: 'boolean',
  SELECT: 'select',
  CABINET: 'cabinet'
}; // effect/node type of each component -> one of effects folder

exports.AMP_SETTING_TYPE = AMP_SETTING_TYPE;
var AMP_COMPONENT_TYPE = {
  VOLUME: 'volume',
  EQUALIZER: 'equalizer',
  PRESENCE: 'presence',
  DISTORTION: 'distortion',
  LOWSHELF: 'LowshelfFilter',
  HIGHPASS: 'HighpassFilter',
  PEAKING: 'PeakingFilter',
  CABINET: 'cabinet'
}; // name of the component
// This order is the order the components appear in the amp header

exports.AMP_COMPONENT_TYPE = AMP_COMPONENT_TYPE;
var AMP_COMPONENT_NAME = {
  DISTORTION: 'distortion',
  //input?
  EQUALIZER: 'equalizer',
  PRESENCE: 'presence',
  VOLUME: 'volume',
  MASTER: 'master' // ouput?

};
exports.AMP_COMPONENT_NAME = AMP_COMPONENT_NAME;
var AMP_TYPES = {
  WARSHALL: 'Wharsall'
};
exports.AMP_TYPES = AMP_TYPES;

var AMP_TYPES_SCHEMAS = _defineProperty({}, AMP_TYPES.WARSHALL, {
  // OUTPUT: 
  COMPONENTS: {
    volume: {
      name: 'volume',
      type: AMP_COMPONENT_TYPE.VOLUME,
      settingsList: [{
        name: 'level',
        value: 3,
        type: AMP_SETTING_TYPE.KNOB
      }]
    },
    inputGain: {
      name: 'inputGain',
      type: AMP_COMPONENT_TYPE.VOLUME,
      settingsList: [{
        name: 'level',
        value: 3,
        type: AMP_SETTING_TYPE.INTERNAL
      }]
    },
    // bypass not added
    lowShelf1: {
      name: 'lowShelf1',
      type: AMP_COMPONENT_TYPE.LOWSHELF,
      settingsList: [{
        name: 'gain',
        value: -6,
        type: AMP_SETTING_TYPE.INTERNAL
      }, {
        name: 'frequency',
        value: 720,
        type: AMP_SETTING_TYPE.INTERNAL
      }]
    },
    lowShelf2: {
      name: 'lowShelf2',
      type: AMP_COMPONENT_TYPE.LOWSHELF,
      settingsList: [{
        name: 'gain',
        value: -5,
        type: AMP_SETTING_TYPE.INTERNAL
      }, {
        name: 'frequency',
        value: 320,
        type: AMP_SETTING_TYPE.INTERNAL
      }]
    },
    preampStage1: {
      name: 'preampStage1',
      type: AMP_COMPONENT_TYPE.VOLUME,
      settingsList: [{
        name: 'level',
        value: 1,
        type: AMP_SETTING_TYPE.INTERNAL
      }]
    },
    distortionStage1: {
      name: 'distortionStage1',
      type: AMP_COMPONENT_NAME.DISTORTION,
      settingsList: [{
        name: 'distortionType',
        value: 'asymetric',
        type: AMP_SETTING_TYPE.SELECT
      }, {
        name: 'intensity',
        value: 8,
        type: AMP_SETTING_TYPE.KNOB
      }]
    },
    highPass1: {
      name: 'highPass1',
      type: AMP_COMPONENT_TYPE.HIGHPASS,
      settingsList: [{
        name: 'frequency',
        value: 0,
        type: AMP_SETTING_TYPE.INTERNAL
      }, {
        name: 'QValue',
        value: 0.7071,
        type: AMP_SETTING_TYPE.INTERNAL
      }]
    },
    lowShelf3: {
      name: 'lowShelf3',
      type: AMP_COMPONENT_TYPE.LOWSHELF,
      settingsList: [{
        name: 'gain',
        value: -6,
        type: AMP_SETTING_TYPE.INTERNAL
      }, {
        name: 'frequency',
        value: 720,
        type: AMP_SETTING_TYPE.INTERNAL
      }]
    },
    preampStage2: {
      name: 'preampStage2',
      type: AMP_COMPONENT_TYPE.VOLUME,
      settingsList: [{
        name: 'level',
        value: 1,
        type: AMP_SETTING_TYPE.INTERNAL
      }]
    },
    distortionStage2: {
      name: 'distortionStage2',
      type: AMP_COMPONENT_NAME.DISTORTION,
      settingsList: [{
        name: 'distortionType',
        value: 'notSoDistorted',
        type: AMP_SETTING_TYPE.SELECT
      }, {
        name: 'intensity',
        value: 8,
        type: AMP_SETTING_TYPE.KNOB
      }]
    },
    outputGain: {
      name: 'outputGain',
      type: AMP_COMPONENT_TYPE.VOLUME,
      settingsList: [{
        name: 'level',
        value: 7,
        type: AMP_SETTING_TYPE.KNOB
      }]
    },
    equalizer: {
      name: 'equalizer',
      type: AMP_COMPONENT_TYPE.EQUALIZER,
      settingsList: [{
        name: 'trebbleGain',
        value: 4,
        type: AMP_SETTING_TYPE.KNOB
      }, {
        name: 'middleGain',
        value: 8.2,
        type: AMP_SETTING_TYPE.KNOB
      }, {
        name: 'bassGain',
        value: 8.2,
        type: AMP_SETTING_TYPE.KNOB
      }]
    },
    presence: {
      name: 'presence',
      type: AMP_COMPONENT_TYPE.PRESENCE,
      settingsList: [{
        name: 'gain',
        value: 4,
        type: AMP_SETTING_TYPE.KNOB
      }]
    },
    eqLowCut: {
      name: 'eqLowCut',
      type: AMP_COMPONENT_TYPE.PEAKING,
      settingsList: [{
        name: 'gain',
        value: -19,
        type: AMP_SETTING_TYPE.INTERNAL
      }, {
        name: 'frequency',
        value: 60,
        type: AMP_SETTING_TYPE.INTERNAL
      }]
    },
    eqHighCut: {
      name: 'eqHighCut',
      type: AMP_COMPONENT_TYPE.PEAKING,
      settingsList: [{
        name: 'gain',
        value: -25,
        type: AMP_SETTING_TYPE.INTERNAL
      }, {
        name: 'frequency',
        value: 10000,
        type: AMP_SETTING_TYPE.INTERNAL
      }]
    },
    master: {
      name: 'master',
      type: AMP_COMPONENT_TYPE.VOLUME,
      settingsList: [{
        name: 'level',
        value: 2,
        type: AMP_SETTING_TYPE.KNOB
      }, {
        name: 'mute',
        value: false,
        type: AMP_SETTING_TYPE.BOOLEAN
      }],
      cabinet: {
        name: 'cabinet',
        type: AMP_COMPONENT_TYPE.CABINET,
        settingsList: [{
          name: 'cabinetImpulse',
          value: 'Marshall 1960, axis',
          type: AMP_SETTING_TYPE.CABINET
        }, {
          name: 'gain',
          value: 9.4,
          type: AMP_SETTING_TYPE.INTERNAL
        }]
      }
    }
  }
}); // Here we should develop the methods to create all the effects of the amp and connect them together
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


exports.AMP_TYPES_SCHEMAS = AMP_TYPES_SCHEMAS;

/***/ }),

/***/ "./src/audio-nodes/factories/DistortionGenerator.js":
/*!**********************************************************!*\
  !*** ./src/audio-nodes/factories/DistortionGenerator.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDistortionTypeGenerateFunction = exports.DISTORTION_TYPES = void 0;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var DISTORTION_TYPES = {
  ASYMETRIC: 'asymetric',
  STANDARD: 'standard',
  SUPER_CLEAN: 'superClean',
  CLEAN: 'clean',
  SMOOTH: 'smooth',
  FUZZ: 'fuzz',
  SUPERFUZZ: 'superFuzz',
  CRUNCH: 'crunch',
  NOT_SO_DISTORTED: 'notSoDistorted',
  STANDARD_LOW: 'standardLow',
  HIGH_GAIN: 'highGain',
  HIGH_GAIN_MODERN: 'highGainModern',
  BEZIER: 'bezier',
  CLASS_A: 'classA',
  VERTICAL: 'vertical'
};
exports.DISTORTION_TYPES = DISTORTION_TYPES;

var getDistortionTypeGenerateFunction = function getDistortionTypeGenerateFunction(type) {
  var _DISTORTION_TYPES$STA;

  return (_DISTORTION_TYPES$STA = {}, _defineProperty(_DISTORTION_TYPES$STA, DISTORTION_TYPES.STANDARD, function (intensity) {
    var amount = 44100;
    var deg = Math.PI / 180;
    var curve = new Float32Array(amount);

    for (var i = 0; i < amount; ++i) {
      var x = i * 2 / amount - 1;
      curve[i] = (3 + intensity) * x * 57 * deg / (Math.PI + intensity * Math.abs(x));
    }

    return curve;
  }), _defineProperty(_DISTORTION_TYPES$STA, DISTORTION_TYPES.HIGH_GAIN, function (intens) {
    var intensity = intens / 153 * 10;
    var amount = 22050;
    var curve = new Float32Array(amount);

    for (var i = 0; amount > i; i += 1) {
      curve[i] = (2 * i / amount - 1 < 0 ? -1 : 1) * intensity;
    }

    return curve;
  }), _defineProperty(_DISTORTION_TYPES$STA, DISTORTION_TYPES.HIGH_GAIN_MODERN, function (intens) {
    var intensity = intens / 2;
    intensity = 1 / (1 + Math.pow(intensity, 4));
    var amount = 22050;
    var curve = new Float32Array(amount);

    for (var i = 0; amount > i; i += 1) {
      var x = 2 * i / amount - 1;
      curve[i] = x / (Math.abs(x) + intensity);
    }

    return curve;
  }), _defineProperty(_DISTORTION_TYPES$STA, DISTORTION_TYPES.ASYMETRIC, function (intens) {
    var intensity = intens / 1500;
    var curve = new Float32Array(44100);

    for (var i = 0; i < intensity; i++) {
      var x = i * 2 / intensity - 1;

      if (x < -0.08905) {
        curve[i] = -3 / 4 * (1 - Math.pow(1 - (Math.abs(x) - 0.032857), 12) + 1 / 3 * (Math.abs(x) - 0.032847)) + 0.01;
      } else if (x >= -0.08905 && x < 0.320018) {
        curve[i] = -6.153 * (x * x) + 3.9375 * x;
      } else {
        curve[i] = 0.630035;
      }
    }

    return curve;
  }), _DISTORTION_TYPES$STA)[type] || function () {};
};

exports.getDistortionTypeGenerateFunction = getDistortionTypeGenerateFunction;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Equalizer", {
  enumerable: true,
  get: function get() {
    return _Equalizer.default;
  }
});
Object.defineProperty(exports, "Delay", {
  enumerable: true,
  get: function get() {
    return _Delay.default;
  }
});
Object.defineProperty(exports, "Flanger", {
  enumerable: true,
  get: function get() {
    return _Flanger.default;
  }
});
Object.defineProperty(exports, "Input", {
  enumerable: true,
  get: function get() {
    return _Input.default;
  }
});
Object.defineProperty(exports, "Output", {
  enumerable: true,
  get: function get() {
    return _Output.default;
  }
});
Object.defineProperty(exports, "Presence", {
  enumerable: true,
  get: function get() {
    return _Presence.default;
  }
});
Object.defineProperty(exports, "Reverb", {
  enumerable: true,
  get: function get() {
    return _Reverb.default;
  }
});
Object.defineProperty(exports, "Tremolo", {
  enumerable: true,
  get: function get() {
    return _Tremolo.default;
  }
});
Object.defineProperty(exports, "Volume", {
  enumerable: true,
  get: function get() {
    return _Volume.default;
  }
});
Object.defineProperty(exports, "hasAudioContext", {
  enumerable: true,
  get: function get() {
    return _Util.hasAudioContext;
  }
});
Object.defineProperty(exports, "hasGetUserMedia", {
  enumerable: true,
  get: function get() {
    return _Util.hasGetUserMedia;
  }
});
Object.defineProperty(exports, "deviceList", {
  enumerable: true,
  get: function get() {
    return _Util.deviceList;
  }
});
Object.defineProperty(exports, "deviceListHandler", {
  enumerable: true,
  get: function get() {
    return _Util.deviceListHandler;
  }
});
Object.defineProperty(exports, "Distortion", {
  enumerable: true,
  get: function get() {
    return _Distortion.default;
  }
});
Object.defineProperty(exports, "DISTORTION_TYPES", {
  enumerable: true,
  get: function get() {
    return _DistortionGenerator.DISTORTION_TYPES;
  }
});
Object.defineProperty(exports, "Amp", {
  enumerable: true,
  get: function get() {
    return _Amp.default;
  }
});
Object.defineProperty(exports, "AMP_TYPES", {
  enumerable: true,
  get: function get() {
    return _AmpGenerator.AMP_TYPES;
  }
});

var _Equalizer = _interopRequireDefault(__webpack_require__(/*! ./audio-nodes/effects/Equalizer */ "./src/audio-nodes/effects/Equalizer.js"));

var _Delay = _interopRequireDefault(__webpack_require__(/*! ./audio-nodes/effects/Delay */ "./src/audio-nodes/effects/Delay.js"));

var _Flanger = _interopRequireDefault(__webpack_require__(/*! ./audio-nodes/effects/Flanger */ "./src/audio-nodes/effects/Flanger.js"));

var _Input = _interopRequireDefault(__webpack_require__(/*! ./audio-nodes/effects/Input */ "./src/audio-nodes/effects/Input.js"));

var _Output = _interopRequireDefault(__webpack_require__(/*! ./audio-nodes/effects/Output */ "./src/audio-nodes/effects/Output.js"));

var _Presence = _interopRequireDefault(__webpack_require__(/*! ./audio-nodes/effects/Presence */ "./src/audio-nodes/effects/Presence.js"));

var _Reverb = _interopRequireDefault(__webpack_require__(/*! ./audio-nodes/effects/Reverb */ "./src/audio-nodes/effects/Reverb.js"));

var _Tremolo = _interopRequireDefault(__webpack_require__(/*! ./audio-nodes/effects/Tremolo */ "./src/audio-nodes/effects/Tremolo.js"));

var _Volume = _interopRequireDefault(__webpack_require__(/*! ./audio-nodes/effects/Volume */ "./src/audio-nodes/effects/Volume.js"));

var _Util = __webpack_require__(/*! ./Util */ "./src/Util.js");

var _Distortion = _interopRequireDefault(__webpack_require__(/*! ./audio-nodes/effects/Distortion */ "./src/audio-nodes/effects/Distortion.js"));

var _DistortionGenerator = __webpack_require__(/*! ./audio-nodes/factories/DistortionGenerator */ "./src/audio-nodes/factories/DistortionGenerator.js");

var _Amp = _interopRequireDefault(__webpack_require__(/*! ./audio-nodes/amp/Amp */ "./src/audio-nodes/amp/Amp.js"));

var _AmpGenerator = __webpack_require__(/*! ./audio-nodes/factories/AmpGenerator */ "./src/audio-nodes/factories/AmpGenerator.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ub2lzZWZ5L3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9ub2lzZWZ5L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL25vaXNlZnkvKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIiwid2VicGFjazovL25vaXNlZnkvLi9zcmMvVXRpbC5qcyIsIndlYnBhY2s6Ly9ub2lzZWZ5Ly4vc3JjL2F1ZGlvLW5vZGVzL011bHRpQXVkaW9Ob2RlLmpzIiwid2VicGFjazovL25vaXNlZnkvLi9zcmMvYXVkaW8tbm9kZXMvU2luZ2xlQXVkaW9Ob2RlLmpzIiwid2VicGFjazovL25vaXNlZnkvLi9zcmMvYXVkaW8tbm9kZXMvZWZmZWN0cy9EZWxheS5qcyIsIndlYnBhY2s6Ly9ub2lzZWZ5Ly4vc3JjL2F1ZGlvLW5vZGVzL2VmZmVjdHMvRGlzdG9ydGlvbi5qcyIsIndlYnBhY2s6Ly9ub2lzZWZ5Ly4vc3JjL2F1ZGlvLW5vZGVzL2VmZmVjdHMvRXF1YWxpemVyLmpzIiwid2VicGFjazovL25vaXNlZnkvLi9zcmMvYXVkaW8tbm9kZXMvZWZmZWN0cy9GbGFuZ2VyLmpzIiwid2VicGFjazovL25vaXNlZnkvLi9zcmMvYXVkaW8tbm9kZXMvZWZmZWN0cy9JbnB1dC5qcyIsIndlYnBhY2s6Ly9ub2lzZWZ5Ly4vc3JjL2F1ZGlvLW5vZGVzL2VmZmVjdHMvT3V0cHV0LmpzIiwid2VicGFjazovL25vaXNlZnkvLi9zcmMvYXVkaW8tbm9kZXMvZWZmZWN0cy9QcmVzZW5jZS5qcyIsIndlYnBhY2s6Ly9ub2lzZWZ5Ly4vc3JjL2F1ZGlvLW5vZGVzL2VmZmVjdHMvUmV2ZXJiLmpzIiwid2VicGFjazovL25vaXNlZnkvLi9zcmMvYXVkaW8tbm9kZXMvZWZmZWN0cy9UcmVtb2xvLmpzIiwid2VicGFjazovL25vaXNlZnkvLi9zcmMvYXVkaW8tbm9kZXMvZWZmZWN0cy9Wb2x1bWUuanMiLCJ3ZWJwYWNrOi8vbm9pc2VmeS8uL3NyYy9hdWRpby1ub2Rlcy9mYWN0b3JpZXMvQW1wR2VuZXJhdG9yLmpzIiwid2VicGFjazovL25vaXNlZnkvLi9zcmMvYXVkaW8tbm9kZXMvZmFjdG9yaWVzL0Rpc3RvcnRpb25HZW5lcmF0b3IuanMiLCJ3ZWJwYWNrOi8vbm9pc2VmeS8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJ3aW4iLCJ3aW5kb3ciLCJnbG9iYWwiLCJnZXRVc2VyTWVkaWEiLCJuYXZpZ2F0b3IiLCJtb3pHZXRVc2VyTWVkaWEiLCJ3ZWJraXRHZXRVc2VyTWVkaWEiLCJtc0dldFVzZXJNZWRpYSIsImhhc0dldFVzZXJNZWRpYSIsImF1ZGlvQ29udGV4dCIsIkF1ZGlvQ29udGV4dCIsIndlYmtpdEF1ZGlvQ29udGV4dCIsIm1vekF1ZGlvQ29udGV4dCIsIm1zQXVkaW9Db250ZXh0IiwiaGFzQXVkaW9Db250ZXh0IiwiZGV2aWNlTGlzdCIsIm1lZGlhRGV2aWNlcyIsImVudW1lcmF0ZURldmljZXMiLCJ0aGVuIiwiZGV2aWNlcyIsIlByb21pc2UiLCJyZXNvbHZlIiwibWFwIiwiZGV2aWNlIiwia2luZCIsIm1hdGNoIiwidHlwZSIsImRpcmVjdGlvbiIsImRldmljZUlkIiwiZ3JvdXBJZCIsImxhYmVsIiwiY2FwYWJpbGl0aWVzIiwiZ2V0Q2FwYWJpbGl0aWVzIiwiZGV2aWNlTGlzdEhhbmRsZXIiLCJjYWxsYmFjayIsIm9uZGV2aWNlY2hhbmdlIiwiZXZlbnQiLCJsaXN0IiwidmFsaWRhdGVWYWx1ZXMiLCJ2YWx1ZSIsInJhbmdlIiwiZWZmZWN0TmFtZSIsIkVycm9yIiwiTXVsdGlBdWRpb05vZGUiLCJub2RlIiwib3V0cHV0IiwiY29ubmVjdCIsImRpc2Nvbm5lY3QiLCJPYmplY3QiLCJrZXlzIiwibm9kZXMiLCJmb3JFYWNoIiwiX291dHB1dE5vZGUiLCJTaW5nbGVBdWRpb05vZGUiLCJfYXVkaW9Db250ZXh0IiwiX25vZGUiLCJEZWxheSIsImlucHV0R2Fpbk5vZGUiLCJjcmVhdGVHYWluIiwib3V0cHV0R2Fpbk5vZGUiLCJ3ZXRHYWluTm9kZSIsImR1cmF0aW9uR2Fpbk5vZGUiLCJkZWxheU5vZGUiLCJjcmVhdGVEZWxheSIsIndldCIsInNwZWVkIiwiZHVyYXRpb24iLCJfd2V0Iiwid2V0bmVzcyIsInBhcnNlRmxvYXQiLCJnYWluIiwiX3NwZWVkIiwiZGVsYXlUaW1lIiwiX2R1cmF0aW9uIiwiRGlzdG9ydGlvbiIsImNyZWF0ZVdhdmVTaGFwZXIiLCJkaXN0b3J0aW9uVHlwZSIsIlNUQU5EQVJEIiwiX2ludGVuc2l0eSIsImludGVuc2l0eSIsIm1pbnAiLCJtYXhwIiwibWludiIsIk1hdGgiLCJsb2ciLCJtYXh2Iiwic2NhbGUiLCJleHAiLCJjdXJ2ZSIsIl9kaXN0b3J0aW9uVHlwZSIsImRpc3RvcnRpb25UeXBlUmVxdWVzdGVkIiwidmFsdWVzIiwiaW5jbHVkZXMiLCJjb25zb2xlIiwiRXF1YWxpemVyIiwidHJlYmJsZUZpbHRlck5vZGUiLCJjcmVhdGVCaXF1YWRGaWx0ZXIiLCJtaWRkbGVGaWx0ZXJOb2RlIiwiYmFzc0ZpbHRlck5vZGUiLCJmcmVxdWVuY3kiLCJRIiwiX3RyZWJibGVHYWluIiwibm9ybWFsaXplZFZhbHVlIiwiX21pZGRsZUdhaW4iLCJfYmFzc0dhaW4iLCJGbGFuZ2VyIiwiZ2Fpbk5vZGUiLCJmZWVkYmFja0dhaW5Ob2RlIiwib3NjaWxsYXRvck5vZGUiLCJjcmVhdGVPc2NpbGxhdG9yIiwic3RhcnQiLCJkZWxheSIsImRlcHRoIiwiZmVlZGJhY2siLCJfZGVsYXkiLCJfZGVwdGgiLCJfZmVlZGJhY2siLCJJbnB1dCIsIl9kZWZlcnJlZENvbm5lY3RzIiwiX2hhc1Blcm1pc3Npb25zIiwicmVqZWN0IiwiYXVkaW8iLCJvcHRpb25hbCIsInN0cmVhbSIsImlucHV0IiwiZXJyb3IiLCJwdXNoIiwiZmlsdGVyIiwiY2F0Y2giLCJjcmVhdGVNZWRpYVN0cmVhbVNvdXJjZSIsIk91dHB1dCIsImRlc3RpbmF0aW9uIiwiUHJlc2VuY2UiLCJfZ2FpbiIsImlyZiIsInJlcXVpcmUiLCJnZXRJbnB1dFJlc3BvbnNlRmlsZSIsImZpbGUiLCJmZXRjaCIsIm1ldGhvZCIsInJlc3BvbnNlIiwiYXJyYXlCdWZmZXIiLCJSZXZlcmIiLCJidWZmZXIiLCJjb252b2x2ZXJOb2RlIiwiY3JlYXRlQ29udm9sdmVyIiwibGV2ZWxHYWluTm9kZSIsImxldmVsIiwiZSIsIl9sZXZlbCIsIl9idWZmZXIiLCJkZWNvZGVBdWRpb0RhdGEiLCJUcmVtb2xvIiwiVm9sdW1lIiwidm9sdW1lIiwidm9sIiwiX211dGUiLCJfbGV2ZWxCZWZvcmVNdXRlIiwibXV0ZSIsIkFNUF9TRVRUSU5HX1RZUEUiLCJLTk9CIiwiSU5URVJOQUwiLCJCT09MRUFOIiwiU0VMRUNUIiwiQ0FCSU5FVCIsIkFNUF9DT01QT05FTlRfVFlQRSIsIlZPTFVNRSIsIkVRVUFMSVpFUiIsIlBSRVNFTkNFIiwiRElTVE9SVElPTiIsIkxPV1NIRUxGIiwiSElHSFBBU1MiLCJQRUFLSU5HIiwiQU1QX0NPTVBPTkVOVF9OQU1FIiwiTUFTVEVSIiwiQU1QX1RZUEVTIiwiV0FSU0hBTEwiLCJBTVBfVFlQRVNfU0NIRU1BUyIsIkNPTVBPTkVOVFMiLCJuYW1lIiwic2V0dGluZ3NMaXN0IiwiaW5wdXRHYWluIiwibG93U2hlbGYxIiwibG93U2hlbGYyIiwicHJlYW1wU3RhZ2UxIiwiZGlzdG9ydGlvblN0YWdlMSIsImhpZ2hQYXNzMSIsImxvd1NoZWxmMyIsInByZWFtcFN0YWdlMiIsImRpc3RvcnRpb25TdGFnZTIiLCJvdXRwdXRHYWluIiwiZXF1YWxpemVyIiwicHJlc2VuY2UiLCJlcUxvd0N1dCIsImVxSGlnaEN1dCIsIm1hc3RlciIsImNhYmluZXQiLCJESVNUT1JUSU9OX1RZUEVTIiwiQVNZTUVUUklDIiwiU1VQRVJfQ0xFQU4iLCJDTEVBTiIsIlNNT09USCIsIkZVWloiLCJTVVBFUkZVWloiLCJDUlVOQ0giLCJOT1RfU09fRElTVE9SVEVEIiwiU1RBTkRBUkRfTE9XIiwiSElHSF9HQUlOIiwiSElHSF9HQUlOX01PREVSTiIsIkJFWklFUiIsIkNMQVNTX0EiLCJWRVJUSUNBTCIsImdldERpc3RvcnRpb25UeXBlR2VuZXJhdGVGdW5jdGlvbiIsImFtb3VudCIsImRlZyIsIlBJIiwiRmxvYXQzMkFycmF5IiwiaSIsIngiLCJhYnMiLCJpbnRlbnMiLCJwb3ciXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNsRkE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw0Q0FBNEM7O0FBRTVDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkJBLElBQUlBLEdBQUcsR0FBRyxPQUFPQyxNQUFQLEtBQWtCLFdBQWxCLEdBQWdDQSxNQUFoQyxHQUF5Q0MsTUFBbkQ7QUFDQTs7Ozs7QUFJQSxJQUFNQyxZQUFZLEdB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LENBQVNELENBQVQsSUFBYyxRQUFuQixDQUFWLEVBQXlDLEVBQXpDLENBQUwsR0FBc0QsSUFBSSxDQUFMLElBQVd2SSxJQUFJLENBQUN3SSxHQUFMLENBQVNELENBQVQsSUFBYyxRQUF6QixDQUFqRSxJQUF1RyxJQUFsSDtBQUNELE9BRkQsTUFFTyxJQUFJQSxDQUFDLElBQUksQ0FBQyxPQUFOLElBQWlCQSxDQUFDLEdBQUcsUUFBekIsRUFBbUM7QUFDeENsSSxhQUFLLENBQUNpSSxDQUFELENBQUwsR0FBWSxDQUFDLEtBQUQsSUFBVUMsQ0FBQyxHQUFHQSxDQUFkLENBQUQsR0FBcUIsU0FBU0EsQ0FBekM7QUFDRCxPQUZNLE1BRUE7QUFDTGxJLGFBQUssQ0FBQ2lJLENBQUQsQ0FBTCxHQUFXLFFBQVg7QUFDRDtBQUNGOztBQUNELFdBQU9qSSxLQUFQO0FBQ0QsR0FsREksMEJBbURMOUQsSUFuREssS0FtREssWUFBSyxDQUFFLENBbkRuQjtBQW9ERCxDQXJERDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQkE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0EiLCJmaWxlIjoibm9pc2VmeS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwibm9pc2VmeVwiLCBbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJub2lzZWZ5XCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIm5vaXNlZnlcIl0gPSBmYWN0b3J5KCk7XG59KSh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgPyBzZWxmIDogdGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJ2YXIgZztcblxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcbmcgPSAoZnVuY3Rpb24oKSB7XG5cdHJldHVybiB0aGlzO1xufSkoKTtcblxudHJ5IHtcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXG5cdGcgPSBnIHx8IG5ldyBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCk7XG59IGNhdGNoIChlKSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXG5cdGlmICh0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKSBnID0gd2luZG93O1xufVxuXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGc7XG4iLCJsZXQgd2luID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cgOiBnbG9iYWw7XG4vKipcbiAqIENoZWNrIGlmIHRoZSBjdXJyZW50IGJyb3dzZXIgc3VwcG9ydHMgZ2V0VXNlck1lZGlhLlxuIC8vIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzM3NjczMDAwL3R5cGVlcnJvci1nZXR1c2VybWVkaWEtY2FsbGVkLW9uLWFuLW9iamVjdC10aGF0LWRvZXMtbm90LWltcGxlbWVudC1pbnRlcmZhY2VcbiAqL1xuY29uc3QgZ2V0VXNlck1lZGlhID0gbmF2aWdhdG9yLmdldFVzZXJNZWRpYSB8fFxubmF2aWdhdG9yLm1vekdldFVzZXJNZWRpYSB8fFxubmF2aWdhdG9yLndlYmtpdEdldFVzZXJNZWRpYSB8fFxubmF2aWdhdG9yLm1zR2V0VXNlck1lZGlhO1xuY29uc3QgaGFzR2V0VXNlck1lZGlhID0gISFnZXRVc2VyTWVkaWE7XG4vKipcbiAqIENoZWNrIGlmIHRoZSBjdXJyZW50IGJyb3dzZXIgc3VwcG9ydHMgdGhlIHdlYi1hdWRpby1hcGkgLlxuICovXG5jb25zdCBhdWRpb0NvbnRleHQgPSB3aW4uQXVkaW9Db250ZXh0IHx8XG4gIHdpbi53ZWJraXRBdWRpb0NvbnRleHQgfHxcbiAgd2luLm1vekF1ZGlvQ29udGV4dCB8fFxuICB3aW4ubXNBdWRpb0NvbnRleHQ7XG5cbmNvbnN0IGhhc0F1ZGlvQ29udGV4dCA9ICEhYXVkaW9Db250ZXh0O1xuXG5jb25zdCBkZXZpY2VMaXN0ID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzLmVudW1lcmF0ZURldmljZXMoKS50aGVuKChkZXZpY2VzKT0+IHtcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGRldmljZXMubWFwKChkZXZpY2UpPT4ge1xuICAgICAgbGV0IFtraW5kLCB0eXBlLCBkaXJlY3Rpb25dID0gZGV2aWNlLmtpbmQubWF0Y2goLyhcXHcrKShpbnB1dHxvdXRwdXQpL2kpO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAga2luZCxcbiAgICAgICAgdHlwZSxcbiAgICAgICAgZGlyZWN0aW9uLFxuICAgICAgICBkZXZpY2VJZDogZGV2aWNlLmRldmljZUlkLFxuICAgICAgICBncm91cElkOiBkZXZpY2UuZ3JvdXBJZCxcbiAgICAgICAgbGFiZWw6IGRldmljZS5sYWJlbCxcbiAgICAgICAgY2FwYWJpbGl0aWVzOiBkZXZpY2UuZ2V0Q2FwYWJpbGl0aWVzID8gZGV2aWNlLmdldENhcGFiaWxpdGllcygpIDogJycsXG4gICAgICB9O1xuICAgIH0pKTtcbiAgfSk7XG59O1xuY29uc3QgZGV2aWNlTGlzdEhhbmRsZXIgPSBmdW5jdGlvbihjYWxsYmFjaykge1xuICBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzLm9uZGV2aWNlY2hhbmdlID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICBkZXZpY2VMaXN0KCkudGhlbigobGlzdCk9PiB7XG4gICAgICBjYWxsYmFjayhsaXN0LCBldmVudCk7XG4gICAgfSk7XG4gIH07XG59O1xuY29uc3QgdmFsaWRhdGVWYWx1ZXMgPSBmdW5jdGlvbih2YWx1ZSwgcmFuZ2UsIGVmZmVjdE5hbWUpIHtcbiAgaWYgKHJhbmdlWzBdID4gdmFsdWUgfHwgdmFsdWUgPiByYW5nZVsxXSkge1xuICAgIHRocm93IEVycm9yKGBUaGUgdmFsdWUgJHt2YWx1ZX0gc2V0dGVkIGZvciB0aGUgZWZmZWN0ICR7ZWZmZWN0TmFtZX0gaXMgd3JvbmcsIG11c3QgYmUgaW4gcmFuZ2U6ICR7cmFuZ2V9YCk7XG4gIH1cbn07XG5cbmV4cG9ydCB7XG4gIGhhc0dldFVzZXJNZWRpYSxcbiAgZ2V0VXNlck1lZGlhLFxuICBoYXNBdWRpb0NvbnRleHQsXG4gIGRldmljZUxpc3QsXG4gIGRldmljZUxpc3RIYW5kbGVyLFxuICB2YWxpZGF0ZVZhbHVlcyxcbn07XG4iLCJcbmltcG9ydCBTaW5nbGVBdWRpb05vZGUgZnJvbSAnLi9TaW5nbGVBdWRpb05vZGUnO1xuXG4vKipcbiAqIFRoZSBtdWx0aS1hdWRpby1ub2RlIGNsYXNzLlxuICogV2hlbiBjcmVhdGluZyBhbiBlZmZlY3QgZXhpc3Rpbmcgb3V0IG9mIG11bHRpcGxlIGF1ZGlvLW5vZGVzLCB3ZSBjYW4gd3JhcCBpdCBpbiB0aGlzIGNsYXNzLlxuICogWW91IE1VU1Qgc2V0IHRoZSBpbnB1dCBub2RlIChlZmZlY3Qubm9kZSkgYW5kIHRoZSBvdXRwdXQgbm9kZSBvZiB0aGUgZWZmZWN0IChlZmZlY3Qub3V0cHV0KSB3aGVuIGV4dGVuZGluZyB0aGlzIGNsYXNzLlxuICogVGhlIGlucHV0IG5vZGUgaXMgdGhlIGZpcnN0IGF1ZGlvLW5vZGUgaW4gdGhlIGVmZmVjdCwgdGhlIHByZXZpb3VzIGVmZmVjdCB3aWxsIGJlIGNvbm5lY3RlZCB0byB0aGlzIG5vZGUuXG4gKiBUaGUgb3V0cHV0IG5vZGUgaXMgdGhlIGxhc3QgYXVkaW8tbm9kZSBpbiB0aGUgZWZmZWN0LCB0aGUgbmV4dCBlZmZlY3Qgd2lsbCBiZSBjb25uZWN0ZWQgdG8gdGhpcyBub2RlLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNdWx0aUF1ZGlvTm9kZSBleHRlbmRzIFNpbmdsZUF1ZGlvTm9kZSB7XG4gIC8vIFRPRE8gV2h5IGlzIHRoaXMgY29tbWVudGVkP1xuICAvLyBjb25zdHJ1Y3RvcihhdWRpb0NvbnRleHQpIHtcbiAgLy8gICBzdXBlcihhdWRpb0NvbnRleHQpO1xuICAvLyB9XG5cbiAgLyoqXG4gICAqIEdldHRlciBmb3IgdGhlIGVmZmVjdHMgb3V0cHV0IG5vZGUuXG4gICAqIEByZXR1cm4ge0F1ZGlvTm9kZX1cbiAgICovXG4gIGdldCBvdXRwdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX291dHB1dE5vZGU7XG4gIH1cbiAgLy8gV2hlbiBjcmVhdGluZyBhbmQgb2JqZWN0IHRoYXQgZXh0ZW5kcyB0aGlzIGNsYXNzLCB5b3UgaGF2ZSB0byBzZXQgdGhpcyBvdXRwdXQgcHJvcGVydHkgcG9pbnRpbmcgdG8geW91ciBtYWluIGF1ZGlvTm9kZVxuICAvLyB0byBwcm9wZXJseSBjb25uZWN0IG90aGVyIGVsZW1lbnRzIHRocm93IHRoZSBjb25uZWN0IG1ldGhvZCBiZXlvbmRcbiAgc2V0IG91dHB1dChvdXRwdXQpIHtcbiAgICB0aGlzLl9vdXRwdXROb2RlID0gb3V0cHV0O1xuICB9XG5cbiAgLyoqXG4gICAgICogQ29ubmVjdCB0aGUgZWZmZWN0IHRvIG90aGVyIGVmZmVjdHMgb3IgbmF0aXZlIGF1ZGlvLW5vZGVzLlxuICAgICAqIEBwYXJhbSAge0F1ZGlvTm9kZXxTaW5nbGVBdWRpb05vZGV8TXVsdGlBdWRpb05vZGV9IG5vZGVcbiAgICAgKiBAcmV0dXJuIHtBdWRpb05vZGV8U2luZ2xlQXVkaW9Ob2RlfE11bHRpQXVkaW9Ob2RlfVxuICAgICAqL1xuICBjb25uZWN0KG5vZGUpIHtcbiAgICBpZiAobm9kZSBpbnN0YW5jZW9mIFNpbmdsZUF1ZGlvTm9kZSB8fCBub2RlIGluc3RhbmNlb2YgTXVsdGlBdWRpb05vZGUpIHtcbiAgICAgIHRoaXMub3V0cHV0LmNvbm5lY3Qobm9kZS5ub2RlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5vdXRwdXQuY29ubmVjdChub2RlKTtcbiAgICB9XG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cblxuICAvKipcbiAgICAgKiBEaXNjb25uZWN0IHRoZSBlZmZlY3QuXG4gICAgICogQHJldHVybiB7QXVkaW9Ob2RlfVxuICAgICAqL1xuICBkaXNjb25uZWN0KCkge1xuICAgIHRoaXMub3V0cHV0LmRpc2Nvbm5lY3QoKTtcbiAgICByZXR1cm4gdGhpcy5vdXRwdXQ7XG4gIH1cblxuICAvKipcbiAgICAgKiBEZXN0cm95IGFuIGVmZmVjdC5cbiAgICAgKiBAcmV0dXJuIHtBdWRpb05vZGV9XG4gICAgICovXG4gIGRlc3Ryb3koKSB7XG4gICAgT2JqZWN0LmtleXModGhpcy5ub2RlcykuZm9yRWFjaCgobm9kZSk9PiB7XG4gICAgICBpZiAodGhpcy5ub2Rlc1tub2RlXS5kaXNjb25uZWN0ICYmIHR5cGVvZiB0aGlzLm5vZGVzW25vZGVdLmRpc2Nvbm5lY3QgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdGhpcy5ub2Rlc1tub2RlXS5kaXNjb25uZWN0KCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdGhpcy5kaXNjb25uZWN0KCk7XG4gIH1cbn1cbiIsIi8qKlxuICogVGhlIGJhc2ljIGF1ZGlvIG5vZGUgY2xhc3MuXG4gKiBUaGlzIGlzIGRlIHNrZWxldG9uIGZvciBhIGF1ZGlvICBlZmZlY3QuXG4gKiBXaGVuIHRoZSBlZmZlY3Qgb25seSBjb250YWlucyAxIGF1ZGlvTm9kZSB0aGlzIGNsYXNzIGNhbiBiZSB1c2VkLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaW5nbGVBdWRpb05vZGUge1xuICAvLyBub2RlcyA9IHt9OyAvL3tba2V5OiBzdHJpbmddOiBBdWRpb05vZGV8R2Fpbk5vZGV8RGVsYXlOb2RlfFdhdmVTaGFwZXJOb2RlfEJpcXVhZEZpbHRlck5vZGV8T3NjaWxsYXRvck5vZGV8Q29udm9sdmVyTm9kZX0gPSB7fTtcblxuICBjb25zdHJ1Y3RvcihhdWRpb0NvbnRleHQpIHtcbiAgICAvLyBTZXQgdGhlIGF1ZGlvLWNvbnRleHQuXG4gICAgdGhpcy5fYXVkaW9Db250ZXh0ID0gYXVkaW9Db250ZXh0O1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBlZmZlY3RzIEF1ZGlvQ29udGV4dCBnZXR0ZXIuXG4gICAqIEByZXR1cm4ge0F1ZGlvQ29udGV4dH0gVGhlIEF1ZGlvQ29udGV4dCB1c2VkIGJ5IHRoZSBlZmZlY3QuXG4gICAqL1xuICBnZXQgYXVkaW9Db250ZXh0KCkge1xuICAgIHJldHVybiB0aGlzLl9hdWRpb0NvbnRleHQ7XG4gIH1cblxuICAvKipcbiAgICogVGhlIGVmZmVjdHMgQXVkaW9Db250ZXh0IHNldHRlci5cbiAgICogQHBhcmFtICB7QXVkaW9Db250ZXh0fSBhdWRpb0NvbnRleHRcbiAgICovXG4gIHNldCBhdWRpb0NvbnRleHQoYXVkaW9Db250ZXh0KSB7XG4gICAgdGhpcy5fYXVkaW9Db250ZXh0ID0gYXVkaW9Db250ZXh0O1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBlZmZlY3QncyBhdWRpby1ub2RlIGdldHRlci5cbiAgICogQHJldHVybiB7QXVkaW9Ob2RlfSBUaGUgYXVkaW8tbm9kZSB1c2VkIGZvciB0aGUgZWZmZWN0LlxuICAgKi9cbiAgZ2V0IG5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX25vZGU7XG4gIH1cblxuICAvKipcbiAgICogVGhlIGVmZmVjdCdzIGF1ZGlvLW5vZGUgc2V0dGVyLlxuICAgKiBAcGFyYW0gIHtBdWRpb05vZGV9IG5vZGVcbiAgICovXG4gIHNldCBub2RlKG5vZGUpIHtcbiAgICB0aGlzLl9ub2RlID0gbm9kZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb25uZWN0IHRoZSBlZmZlY3QgdG8gb3RoZXIgZWZmZWN0cyBvciBuYXRpdmUgYXVkaW8tbm9kZXMuXG4gICAqIEBwYXJhbSAge0F1ZGlvTm9kZXxTaW5nbGVBdWRpb05vZGV9IG5vZGVcbiAgICogQHJldHVybiB7QXVkaW9Ob2RlfFNpbmdsZUF1ZGlvTm9kZX1cbiAgICovXG4gIGNvbm5lY3Qobm9kZSkge1xuICAgIGlmIChub2RlIGluc3RhbmNlb2YgU2luZ2xlQXVkaW9Ob2RlKSB7XG4gICAgICB0aGlzLm5vZGUuY29ubmVjdChub2RlLm5vZGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm5vZGUuY29ubmVjdChub2RlKTtcbiAgICB9XG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cblxuICAvKipcbiAgICogZGlzY29ubmVjdCB0aGUgZWZmZWN0LlxuICAgKiBAcmV0dXJuIHtBdWRpb05vZGV9XG4gICAqL1xuICBkaXNjb25uZWN0KCkge1xuICAgIHRoaXMubm9kZS5kaXNjb25uZWN0KCk7XG4gICAgcmV0dXJuIHRoaXMubm9kZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBbGlhcyBmb3IgdGhlIGRpc2Nvbm5lY3QgbWV0aG9kLCB0byBvZmZlciB0aGUgc2FtZSBhcGkgYXMgYSBNdWx0aUF1ZGlvTm9kZS5cbiAgICogQHJldHVybiB7QXVkaW9Ob2RlfVxuICAgKi9cbiAgZGVzdHJveSgpIHtcbiAgICByZXR1cm4gdGhpcy5kaXNjb25uZWN0KCk7XG4gIH1cbn1cbiIsImltcG9ydCBNdWx0aUF1ZGlvTm9kZSBmcm9tICcuLi9NdWx0aUF1ZGlvTm9kZSc7XG5cbi8qKlxuICogVGhlIGF1ZGlvLWVmZmVjdHMgZGVsYXkgY2xhc3MuXG4gKiBUaGlzIGNsYXNzIGxldHMgeW91IGFkZCBhIGRlbGF5IGVmZmVjdC5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGVsYXkgZXh0ZW5kcyBNdWx0aUF1ZGlvTm9kZSB7XG4gIC8vIHByaXZhdGUgX3dldDogbnVtYmVyO1xuICAvLyBwcml2YXRlIF9zcGVlZDogbnVtYmVyO1xuICAvLyBwcml2YXRlIF9kdXJhdGlvbjogbnVtYmVyO1xuXG4gIGNvbnN0cnVjdG9yKGF1ZGlvQ29udGV4dCkge1xuICAgIHN1cGVyKGF1ZGlvQ29udGV4dCk7XG5cbiAgICB0aGlzLm5vZGVzID0ge1xuICAgICAgaW5wdXRHYWluTm9kZTogYXVkaW9Db250ZXh0LmNyZWF0ZUdhaW4oKSwgLy8gQ3JlYXRlIHRoZSBpbnB1dCBhbmQgb3V0cHV0IG5vZGVzIG9mIHRoZSBlZmZlY3RcbiAgICAgIG91dHB1dEdhaW5Ob2RlOiBhdWRpb0NvbnRleHQuY3JlYXRlR2FpbigpLFxuICAgICAgd2V0R2Fpbk5vZGU6IGF1ZGlvQ29udGV4dC5jcmVhdGVHYWluKCksIC8vIENyZWF0ZSB0aGUgZ2Fpbi1ub2RlIHdlJ2xsIHVzZSB0byBjb250cm9sbCB0aGUgd2V0bmVzcyBvZiB0aGUgZGVsYXlcbiAgICAgIGR1cmF0aW9uR2Fpbk5vZGU6IGF1ZGlvQ29udGV4dC5jcmVhdGVHYWluKCksIC8vIENyZWF0ZSB0aGUgZ2FpbiBub2RlIHdlJ2xsIHVzZSB0byBjb250cm9sbCB0aGUgZHVyYXRpb24gb2YgdGhlIGRlbGF5XG4gICAgICBkZWxheU5vZGU6IGF1ZGlvQ29udGV4dC5jcmVhdGVEZWxheSgpLCAvLyBDcmVhdGUgdGhlIGRlbGF5IG5vZGVcbiAgICB9O1xuXG4gICAgLy8gV2lyZSBpdCBhbGwgdXBcbiAgICB0aGlzLm5vZGVzLmlucHV0R2Fpbk5vZGUuY29ubmVjdCh0aGlzLm5vZGVzLndldEdhaW5Ob2RlKTtcbiAgICB0aGlzLm5vZGVzLmlucHV0R2Fpbk5vZGUuY29ubmVjdCh0aGlzLm5vZGVzLmRlbGF5Tm9kZSk7XG4gICAgdGhpcy5ub2Rlcy5kdXJhdGlvbkdhaW5Ob2RlLmNvbm5lY3QodGhpcy5ub2Rlcy5kZWxheU5vZGUpO1xuICAgIHRoaXMubm9kZXMuZGVsYXlOb2RlLmNvbm5lY3QodGhpcy5ub2Rlcy5kdXJhdGlvbkdhaW5Ob2RlKTtcbiAgICB0aGlzLm5vZGVzLmRlbGF5Tm9kZS5jb25uZWN0KHRoaXMubm9kZXMub3V0cHV0R2Fpbk5vZGUpO1xuICAgIHRoaXMubm9kZXMud2V0R2Fpbk5vZGUuY29ubmVjdCh0aGlzLm5vZGVzLm91dHB1dEdhaW5Ob2RlKTtcblxuICAgIC8vIFNldCB0aGUgaW5wdXQgZ2Fpbi1ub2RlIGFzIHRoZSBpbnB1dC1ub2RlLlxuICAgIHRoaXMubm9kZSA9IHRoaXMubm9kZXMuaW5wdXRHYWluTm9kZTtcbiAgICAvLyBTZXQgdGhlIG91dHB1dCBnYWluLW5vZGUgYXMgdGhlIG91dHB1dC1ub2RlLlxuICAgIHRoaXMub3V0cHV0ID0gdGhpcy5ub2Rlcy5vdXRwdXRHYWluTm9kZTtcblxuICAgIC8vIFNldCB0aGUgZGVmYXVsdCB3ZXRuZXNzIHRvIDFcbiAgICB0aGlzLndldCA9IDE7XG5cbiAgICAvLyBTZXQgdGhlIGRlZmF1bHQgc3BlZWQgdG8gMSBzZWNvbmRcbiAgICB0aGlzLnNwZWVkID0gMTtcblxuICAgIC8vIFNldCB0aGUgZGVmYXVsdCBkdXJhdGlvbiB0byAwLjRcbiAgICB0aGlzLmR1cmF0aW9uID0gMC40O1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHRlciBmb3IgdGhlIGVmZmVjdCdzIHdldG5lc3NcbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKi9cbiAgZ2V0IHdldCgpIHtcbiAgICByZXR1cm4gdGhpcy5fd2V0O1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHRlciBmb3IgdGhlIGVmZmVjdCdzIHdldG5lc3NcbiAgICogQHBhcmFtICB7bnVtYmVyfHN0cmluZ30gd2V0bmVzc1xuICAgKi9cbiAgc2V0IHdldCh3ZXRuZXNzKSB7XG4gICAgLy8gU2V0IHRoZSBpbnRlcm5hbCB3ZXRuZXNzIHZhbHVlXG4gICAgdGhpcy5fd2V0ID0gcGFyc2VGbG9hdCh3ZXRuZXNzKTtcblxuICAgIC8vIFNldCB0aGUgbmV3IHZhbHVlIGZvciB0aGUgd2V0bmVzcyBjb250cm9sbCBnYWluLW5vZGVcbiAgICB0aGlzLm5vZGVzLndldEdhaW5Ob2RlLmdhaW4udmFsdWUgPSB0aGlzLl93ZXQ7XG4gIH1cblxuICAvKipcbiAgICogR2V0dGVyIGZvciB0aGUgZWZmZWN0J3Mgc3BlZWRcbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKi9cbiAgZ2V0IHNwZWVkKCkge1xuICAgIHJldHVybiB0aGlzLl9zcGVlZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXR0ZXIgZm9yIHRoZSBlZmZlY3QncyBzcGVlZFxuICAgKiBAcGFyYW0ge251bWJlcnxzdHJpbmd9IHNwZWVkXG4gICAqL1xuICBzZXQgc3BlZWQoc3BlZWQpIHtcbiAgICAvLyBTZXQgdGhlIGludGVybmFsIHNwZWVkIHZhbHVlXG4gICAgdGhpcy5fc3BlZWQgPSBwYXJzZUZsb2F0KHNwZWVkKTtcblxuICAgIC8vIFNldCB0aGUgZGVsYXlUaW1lIHZhbHVlIG9mIHRoZSBkZWxheS1ub2RlXG4gICAgdGhpcy5ub2Rlcy5kZWxheU5vZGUuZGVsYXlUaW1lLnZhbHVlID0gdGhpcy5fc3BlZWQ7XG4gIH1cblxuICAvKipcbiAgICogR2V0dGVyIGZvciB0aGUgZWZmZWN0J3MgZHVyYXRpb25cbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKi9cbiAgZ2V0IGR1cmF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9kdXJhdGlvbjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXR0ZXIgZm9yIHRoZSBlZmZlY3QncyBkdXJhdGlvblxuICAgKiBAcGFyYW0gIHtudW1iZXJ8c3RyaW5nfSBkdXJhdGlvblxuICAgKi9cbiAgc2V0IGR1cmF0aW9uKGR1cmF0aW9uKSB7XG4gICAgLy8gU2V0IHRoZSBpbnRlcm5hbCBkdXJhdGlvbiB2YWx1ZVxuICAgIHRoaXMuX2R1cmF0aW9uID0gcGFyc2VGbG9hdChkdXJhdGlvbik7XG5cbiAgICAvLyBTZXQgdGhlIGR1cmF0aW9uIGdhaW4tbm9kZSB2YWx1ZVxuICAgIHRoaXMubm9kZXMuZHVyYXRpb25HYWluTm9kZS5nYWluLnZhbHVlID0gdGhpcy5fZHVyYXRpb247XG4gIH1cbn1cbiIsImltcG9ydCBTaW5nbGVBdWRpb05vZGUgZnJvbSAnLi4vU2luZ2xlQXVkaW9Ob2RlJztcbmltcG9ydCB7dmFsaWRhdGVWYWx1ZXN9IGZyb20gJy4uLy4uL1V0aWwnO1xuaW1wb3J0IHtESVNUT1JUSU9OX1RZUEVTLCBnZXREaXN0b3J0aW9uVHlwZUdlbmVyYXRlRnVuY3Rpb259IGZyb20gJy4uL2ZhY3Rvcmllcy9EaXN0b3J0aW9uR2VuZXJhdG9yJztcbi8qKlxuICogVGhlIGF1ZGlvLWVmZmVjdHMgZGlzdG9ydGlvbiBjbGFzcy5cbiAqIFRoaXMgY2xhc3MgbGV0cyB5b3UgYWRkIGEgZGlzdG9ydGlvbiBlZmZlY3QuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERpc3RvcnRpb24gZXh0ZW5kcyBTaW5nbGVBdWRpb05vZGUge1xuICBjb25zdHJ1Y3RvcihhdWRpb0NvbnRleHQpIHtcbiAgICBzdXBlcihhdWRpb0NvbnRleHQpO1xuICAgIHRoaXMubm9kZSA9IHRoaXMuYXVkaW9Db250ZXh0LmNyZWF0ZVdhdmVTaGFwZXIoKTtcbiAgICAvLyBUT0RPIElzIHRoaXMgb3ZlcnNhbXBsZSBpbXBvcnRhbnQ/XG4gICAgLy8gdGhpcy5ub2RlLm92ZXJzYW1wbGUgPSAnNHgnO1xuICAgIHRoaXMuZGlzdG9ydGlvblR5cGUgPSBESVNUT1JUSU9OX1RZUEVTLlNUQU5EQVJEO1xuICB9XG5cbiAgZ2V0IGludGVuc2l0eSgpIHtcbiAgICByZXR1cm4gdGhpcy5faW50ZW5zaXR5O1xuICB9XG5cbiAgc2V0IGludGVuc2l0eShpbnRlbnNpdHkpIHtcbiAgICB2YWxpZGF0ZVZhbHVlcyhpbnRlbnNpdHksIFswLCAxMF0sICdkaXN0b3J0aW9uJyk7XG4gICAgLy8gU2V0IHRoZSBpbnRlcm5hbCBpbnRlbnNpdHkgdmFsdWUuXG4gICAgbGV0IHZhbHVlID0gMTUwICogcGFyc2VGbG9hdChpbnRlbnNpdHkpO1xuICAgIGxldCBtaW5wID0gMDtcbiAgICBsZXQgbWF4cCA9IDE1MDA7XG4gICAgLy8gVGhlIHJlc3VsdCBzaG91bGQgYmUgYmV0d2VlbiAxMCBhbiAxNTAwXG4gICAgbGV0IG1pbnYgPSBNYXRoLmxvZygxMCk7XG4gICAgbGV0IG1heHYgPSBNYXRoLmxvZygxNTAwKTtcbiAgICAvLyBjYWxjdWxhdGUgYWRqdXN0bWVudCBmYWN0b3JcbiAgICBsZXQgc2NhbGUgPSAobWF4diAtIG1pbnYpIC8gKG1heHAgLSBtaW5wKTtcbiAgICAvLyBlbmQgb2YgbG9nYXJpdGhtaWMgYWRqdXN0bWVudFxuXG4gICAgdGhpcy5faW50ZW5zaXR5ID0gTWF0aC5leHAobWludiArIHNjYWxlICogKHZhbHVlIC0gbWlucCkpO1xuXG4gICAgdGhpcy5ub2RlLmN1cnZlID0gZ2V0RGlzdG9ydGlvblR5cGVHZW5lcmF0ZUZ1bmN0aW9uKHRoaXMuZGlzdG9ydGlvblR5cGUpKHRoaXMuX2ludGVuc2l0eSk7XG4gIH1cblxuICBnZXQgZGlzdG9ydGlvblR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Rpc3RvcnRpb25UeXBlO1xuICB9XG5cbiAgc2V0IGRpc3RvcnRpb25UeXBlKGRpc3RvcnRpb25UeXBlUmVxdWVzdGVkKSB7XG4gICAgaWYgKE9iamVjdC52YWx1ZXMoRElTVE9SVElPTl9UWVBFUykuaW5jbHVkZXMoZGlzdG9ydGlvblR5cGVSZXF1ZXN0ZWQpKSB7XG4gICAgICB0aGlzLl9kaXN0b3J0aW9uVHlwZSA9IGRpc3RvcnRpb25UeXBlUmVxdWVzdGVkO1xuICAgICAgdGhpcy5ub2RlLmN1cnZlID0gZ2V0RGlzdG9ydGlvblR5cGVHZW5lcmF0ZUZ1bmN0aW9uKHRoaXMuX2Rpc3RvcnRpb25UeXBlKSh0aGlzLl9pbnRlbnNpdHkpO1xuICAgICAgY29uc29sZS5sb2coYFRoZSBkaXN0b3J0aW9uIHR5cGUgJHtkaXN0b3J0aW9uVHlwZVJlcXVlc3RlZH0gaGFzIGJlZW4gc2V0YCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIGRpc3RvcmlvbiB0eXBlICR7ZGlzdG9ydGlvblR5cGVSZXF1ZXN0ZWR9IGlzIG5vdCBpbmNsdWRlZCBpbiB0aGUgZGlzdG9ydGlvblR5cGVzIHNldC5gKTtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCBNdWx0aUF1ZGlvTm9kZSBmcm9tICcuLi9NdWx0aUF1ZGlvTm9kZSc7XG5cbi8qKlxuICogVGhlIGF1ZGlvLWVmZmVjdHMgQmFzaWMgRXF1YWxpemVyIGNsYXNzLlxuICogVGhpcyBjbGFzcyBsZXRzIHlvdSBhZGQgYW4gRXF1YWxpemVyIHdpdGggYmFzcyBtaWQgYW5kIHRyZWJibGUgZmlsdGVycy5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXF1YWxpemVyIGV4dGVuZHMgTXVsdGlBdWRpb05vZGUge1xuICBjb25zdHJ1Y3RvcihhdWRpb0NvbnRleHQpIHtcbiAgICBzdXBlcihhdWRpb0NvbnRleHQpO1xuXG4gICAgdGhpcy5ub2RlcyA9IHtcbiAgICAgIHRyZWJibGVGaWx0ZXJOb2RlOiB0aGlzLmF1ZGlvQ29udGV4dC5jcmVhdGVCaXF1YWRGaWx0ZXIoKSxcbiAgICAgIG1pZGRsZUZpbHRlck5vZGU6IHRoaXMuYXVkaW9Db250ZXh0LmNyZWF0ZUJpcXVhZEZpbHRlcigpLFxuICAgICAgYmFzc0ZpbHRlck5vZGU6IHRoaXMuYXVkaW9Db250ZXh0LmNyZWF0ZUJpcXVhZEZpbHRlcigpLFxuICAgIH07XG5cbiAgICB0aGlzLm5vZGVzLnRyZWJibGVGaWx0ZXJOb2RlLmZyZXF1ZW5jeS52YWx1ZSA9IDY1MDA7XG4gICAgdGhpcy5ub2Rlcy50cmViYmxlRmlsdGVyTm9kZS50eXBlID0gJ2hpZ2hzaGVsZic7XG4gICAgdGhpcy5ub2Rlcy50cmViYmxlRmlsdGVyTm9kZS5RLnZhbHVlID0gMC43MDcxO1xuXG4gICAgdGhpcy5ub2Rlcy5taWRkbGVGaWx0ZXJOb2RlLmZyZXF1ZW5jeS52YWx1ZSA9IDE3MDA7XG4gICAgdGhpcy5ub2Rlcy5taWRkbGVGaWx0ZXJOb2RlLnR5cGUgPSAncGVha2luZyc7XG4gICAgdGhpcy5ub2Rlcy5taWRkbGVGaWx0ZXJOb2RlLlEudmFsdWUgPSAwLjcwNzE7XG5cbiAgICB0aGlzLm5vZGVzLmJhc3NGaWx0ZXJOb2RlLmZyZXF1ZW5jeS52YWx1ZSA9IDEwMDtcbiAgICB0aGlzLm5vZGVzLmJhc3NGaWx0ZXJOb2RlLnR5cGUgPSAnbG93c2hlbGYnO1xuICAgIHRoaXMubm9kZXMuYmFzc0ZpbHRlck5vZGUuUS52YWx1ZSA9IDAuNzA3MTtcblxuXG4gICAgLy8gQ29ubmVjdCBhbGwgbm9kZXMgdG9nZXRoZXJcbiAgICB0aGlzLm5vZGVzLnRyZWJibGVGaWx0ZXJOb2RlLmNvbm5lY3QodGhpcy5ub2Rlcy5taWRkbGVGaWx0ZXJOb2RlKTtcbiAgICB0aGlzLm5vZGVzLm1pZGRsZUZpbHRlck5vZGUuY29ubmVjdCh0aGlzLm5vZGVzLmJhc3NGaWx0ZXJOb2RlKTtcbiAgICAvLyBub2RlIGFuZCBvdXRwdXQgbm9kZVxuICAgIHRoaXMubm9kZSA9IHRoaXMubm9kZXMudHJlYmJsZUZpbHRlck5vZGU7XG4gICAgdGhpcy5vdXRwdXQgPSB0aGlzLm5vZGVzLmJhc3NGaWx0ZXJOb2RlO1xuICB9XG5cbiAgLy8gU2V0dGVycyBhbmQgZ2V0dGVycyBmb3IgcHVibGljIHByb3BlcnRpZXNcbiAgZ2V0IHRyZWJibGVHYWluKCkge1xuICAgIHJldHVybiB0aGlzLl90cmViYmxlR2FpbjtcbiAgfVxuICBzZXQgdHJlYmJsZUdhaW4oZ2Fpbikge1xuICAgIGNvbnN0IG5vcm1hbGl6ZWRWYWx1ZSA9IHBhcnNlRmxvYXQoZ2Fpbik7XG4gICAgdGhpcy5fdHJlYmJsZUdhaW4gPSAobm9ybWFsaXplZFZhbHVlIC0gMTApICogMTA7XG4gICAgdGhpcy5ub2Rlcy50cmViYmxlRmlsdGVyTm9kZS5nYWluLnZhbHVlID0gdGhpcy5fdHJlYmJsZUdhaW47XG4gIH1cbiAgZ2V0IG1pZGRsZUdhaW4oKSB7XG4gICAgcmV0dXJuIHRoaXMuX21pZGRsZUdhaW47XG4gIH1cbiAgc2V0IG1pZGRsZUdhaW4oZ2Fpbikge1xuICAgIGNvbnN0IG5vcm1hbGl6ZWRWYWx1ZSA9IHBhcnNlRmxvYXQoZ2Fpbik7XG4gICAgdGhpcy5fbWlkZGxlR2FpbiA9IChub3JtYWxpemVkVmFsdWUgLSA1KSAqIDQ7XG4gICAgdGhpcy5ub2Rlcy5taWRkbGVGaWx0ZXJOb2RlLmdhaW4udmFsdWUgPSB0aGlzLl9taWRkbGVHYWluO1xuICB9XG4gIGdldCBiYXNzR2FpbigpIHtcbiAgICByZXR1cm4gdGhpcy5fYmFzc0dhaW47XG4gIH1cbiAgc2V0IGJhc3NHYWluKGdhaW4pIHtcbiAgICBjb25zdCBub3JtYWxpemVkVmFsdWUgPSBwYXJzZUZsb2F0KGdhaW4pO1xuICAgIHRoaXMuX2Jhc3NHYWluID0gKG5vcm1hbGl6ZWRWYWx1ZSAtIDEwKSAqIDc7XG4gICAgdGhpcy5ub2Rlcy5iYXNzRmlsdGVyTm9kZS5nYWluLnZhbHVlID0gdGhpcy5fYmFzc0dhaW47XG4gIH1cbn1cbiIsImltcG9ydCBNdWx0aUF1ZGlvTm9kZSBmcm9tICcuLi9NdWx0aUF1ZGlvTm9kZSc7XG5cbi8qKlxuICogVGhlIGF1ZGlvLWVmZmVjdHMgZmxhbmdlciBjbGFzcy5cbiAqIFRoaXMgY2xhc3MgbGV0cyB5b3UgYWRkIGEgZmxhbmdlciBlZmZlY3QuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZsYW5nZXIgZXh0ZW5kcyBNdWx0aUF1ZGlvTm9kZSB7XG4gIC8vIHByaXZhdGUgX2RlbGF5OiBudW1iZXI7XG4gIC8vIHByaXZhdGUgX2RlcHRoOiBudW1iZXI7XG4gIC8vIHByaXZhdGUgX2ZlZWRiYWNrOiBudW1iZXI7XG4gIC8vIHByaXZhdGUgX3NwZWVkOiBudW1iZXI7XG5cbiAgY29uc3RydWN0b3IoYXVkaW9Db250ZXh0KSB7XG4gICAgc3VwZXIoYXVkaW9Db250ZXh0KTtcblxuICAgIHRoaXMubm9kZXMgPSB7XG4gICAgICBpbnB1dEdhaW5Ob2RlOiBhdWRpb0NvbnRleHQuY3JlYXRlR2FpbigpLCAvLyBDcmVhdGUgdGhlIGlucHV0IGdhaW4tbm9kZVxuICAgICAgd2V0R2Fpbk5vZGU6IGF1ZGlvQ29udGV4dC5jcmVhdGVHYWluKCksIC8vIENyZWF0ZSB0aGUgd2V0bmVzcyBjb250cm9sbCBnYWluLW5vZGVcbiAgICAgIGRlbGF5Tm9kZTogYXVkaW9Db250ZXh0LmNyZWF0ZURlbGF5KCksIC8vIENyZWF0ZSB0aGUgZGVsYXkgbm9kZVxuICAgICAgZ2Fpbk5vZGU6IGF1ZGlvQ29udGV4dC5jcmVhdGVHYWluKCksIC8vIENyZWF0ZSB0aGUgZ2FpbiBjb250cm9sbCBnYWluLW5vZGVcbiAgICAgIGZlZWRiYWNrR2Fpbk5vZGU6IGF1ZGlvQ29udGV4dC5jcmVhdGVHYWluKCksIC8vIENyZWF0ZSB0aGUgZmVlZGJhY2sgY29udHJvbGwgZ2Fpbi1ub2RlXG4gICAgICBvc2NpbGxhdG9yTm9kZTogYXVkaW9Db250ZXh0LmNyZWF0ZU9zY2lsbGF0b3IoKSwgLy8gQ3JlYXRlIHRoZSBvc2NpbGF0b3Igbm9kZVxuICAgIH07XG5cbiAgICAvLyBXaXJlIGl0IGFsbCB1cFxuICAgIHRoaXMubm9kZXMub3NjaWxsYXRvck5vZGUuY29ubmVjdCh0aGlzLm5vZGVzLmdhaW5Ob2RlKTtcbiAgICB0aGlzLm5vZGVzLmdhaW5Ob2RlLmNvbm5lY3QodGhpcy5ub2Rlcy5kZWxheU5vZGUuZGVsYXlUaW1lKTtcbiAgICB0aGlzLm5vZGVzLmlucHV0R2Fpbk5vZGUuY29ubmVjdCh0aGlzLm5vZGVzLndldEdhaW5Ob2RlKTtcbiAgICB0aGlzLm5vZGVzLmlucHV0R2Fpbk5vZGUuY29ubmVjdCh0aGlzLm5vZGVzLmRlbGF5Tm9kZSk7XG4gICAgdGhpcy5ub2Rlcy5kZWxheU5vZGUuY29ubmVjdCh0aGlzLm5vZGVzLndldEdhaW5Ob2RlKTtcbiAgICB0aGlzLm5vZGVzLmRlbGF5Tm9kZS5jb25uZWN0KHRoaXMubm9kZXMuZmVlZGJhY2tHYWluTm9kZSk7XG4gICAgdGhpcy5ub2Rlcy5mZWVkYmFja0dhaW5Ob2RlLmNvbm5lY3QodGhpcy5ub2Rlcy5pbnB1dEdhaW5Ob2RlKTtcblxuICAgIC8vIFNldHVwIHRoZSBvc2NpbGxhdG9yXG4gICAgdGhpcy5ub2Rlcy5vc2NpbGxhdG9yTm9kZS50eXBlID0gJ3NpbmUnO1xuICAgIHRoaXMubm9kZXMub3NjaWxsYXRvck5vZGUuc3RhcnQoMCk7XG5cbiAgICAvLyBTZXQgdGhlIGlucHV0IGdhaW4tbm9kZSBhcyB0aGUgaW5wdXQtbm9kZS5cbiAgICB0aGlzLm5vZGUgPSB0aGlzLm5vZGVzLmlucHV0R2Fpbk5vZGU7XG5cbiAgICAvLyBTZXQgdGhlIG91dHB1dCBnYWluLW5vZGUgYXMgdGhlIG91dHB1dC1ub2RlLlxuICAgIHRoaXMub3V0cHV0ID0gdGhpcy5ub2Rlcy53ZXRHYWluTm9kZTtcblxuICAgIC8vIFNldCB0aGUgZGVmYXVsdCBkZWxheSBvZiAwLjAwNSBzZWNvbmRzXG4gICAgdGhpcy5kZWxheSA9IDAuMDA1O1xuXG4gICAgLy8gU2V0IHRoZSBkZWZhdWx0IGRlcHRoIHRvIDAuMDAyO1xuICAgIHRoaXMuZGVwdGggPSAwLjAwMjtcblxuICAgIC8vIFNldCB0aGUgZGVmYXVsdCBmZWVkYmFjayB0byAwLjVcbiAgICB0aGlzLmZlZWRiYWNrID0gMC41O1xuXG4gICAgLy8gU2V0IHRoZSBkZWZhdWx0IHNwZWVkIHRvIDAuMjVIelxuICAgIHRoaXMuc3BlZWQgPSAwLjI1O1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHRlciBmb3IgdGhlIGVmZmVjdCdzIGRlbGF5XG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICovXG4gIGdldCBkZWxheSgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGVsYXk7XG4gIH1cblxuICAvKipcbiAgICogU2V0dGVyIGZvciB0aGUgZWZmZWN0J3MgZGVsYXlcbiAgICogQHBhcmFtICB7bnVtYmVyfSBkZWxheVxuICAgKi9cbiAgc2V0IGRlbGF5KGRlbGF5KSB7XG4gICAgLy8gU2V0IHRoZSBpbnRlcm5hbCBkZWxheSB2YWx1ZVxuICAgIHRoaXMuX2RlbGF5ID0gcGFyc2VGbG9hdChkZWxheSk7XG5cbiAgICAvLyBTZXQgdGhlIG5ldyB2YWx1ZSBmb3IgdGhlIGRlbGF5LW5vZGVcbiAgICB0aGlzLm5vZGVzLmRlbGF5Tm9kZS5kZWxheVRpbWUudmFsdWUgPSB0aGlzLl9kZWxheTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXR0ZXIgZm9yIHRoZSBlZmZlY3QncyBkZXB0aFxuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqL1xuICBnZXQgZGVwdGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RlcHRoO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHRlciBmb3IgdGhlIGVmZmVjdCdzIGRlcHRoXG4gICAqIEBwYXJhbSAge251bWJlcn0gZGVwdGhcbiAgICovXG4gIHNldCBkZXB0aChkZXB0aCkge1xuICAgIC8vIFNldCB0aGUgaW50ZXJuYWwgZGVwdGggdmFsdWVcbiAgICB0aGlzLl9kZXB0aCA9IHBhcnNlRmxvYXQoZGVwdGgpO1xuXG4gICAgLy8gU2V0IHRoZSBnYWluIHZhbHVlIG9mIHRoZSBnYWluLW5vZGVcbiAgICB0aGlzLm5vZGVzLmdhaW5Ob2RlLmdhaW4udmFsdWUgPSB0aGlzLl9kZXB0aDtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXR0ZXIgZm9yIHRoZSBlZmZlY3QncyBmZWVkYmFja1xuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqL1xuICBnZXQgZmVlZGJhY2soKSB7XG4gICAgcmV0dXJuIHRoaXMuX2ZlZWRiYWNrO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHRlciBmb3IgdGhlIGVmZmVjdCdzIGZlZWRiYWNrXG4gICAqIEBwYXJhbSAge251bWJlcn0gZmVlZGJhY2tcbiAgICovXG4gIHNldCBmZWVkYmFjayhmZWVkYmFjaykge1xuICAgIC8vIFNldCB0aGUgaW50ZXJuYWwgZmVlZGJhY2sgdmFsdWVcbiAgICB0aGlzLl9mZWVkYmFjayA9IHBhcnNlRmxvYXQoZmVlZGJhY2spO1xuXG4gICAgLy8gU2V0IHRoZSBmZWVkYmFjayBnYWluLW5vZGUgdmFsdWVcbiAgICB0aGlzLm5vZGVzLmZlZWRiYWNrR2Fpbk5vZGUuZ2Fpbi52YWx1ZSA9IHRoaXMuX2ZlZWRiYWNrO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHRlciBmb3IgdGhlIGVmZmVjdCdzIHNwZWVkXG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICovXG4gIGdldCBzcGVlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc3BlZWQ7XG4gIH1cblxuICAvKipcbiAgICogU2V0dGVyIGZvciB0aGUgZWZmZWN0J3Mgc3BlZWRcbiAgICogQHBhcmFtICB7bnVtYmVyfSBzcGVlZFxuICAgKi9cbiAgc2V0IHNwZWVkKHNwZWVkKSB7XG4gICAgLy8gU2V0IHRoZSBpbnRlcm5hbCBzcGVlZCB2YWx1ZVxuICAgIHRoaXMuX3NwZWVkID0gcGFyc2VGbG9hdChzcGVlZCk7XG5cbiAgICAvLyBTZXQgdGhlIHNwZWVkIGdhaW4tbm9kZSB2YWx1ZVxuICAgIHRoaXMubm9kZXMub3NjaWxsYXRvck5vZGUuZnJlcXVlbmN5LnZhbHVlID0gdGhpcy5fc3BlZWQ7XG4gIH1cbn1cbiIsIlxuaW1wb3J0IFNpbmdsZUF1ZGlvTm9kZSBmcm9tICcuLi9TaW5nbGVBdWRpb05vZGUnO1xuaW1wb3J0IE11bHRpQXVkaW9Ob2RlIGZyb20gJy4uL011bHRpQXVkaW9Ob2RlJztcbmltcG9ydCB7aGFzR2V0VXNlck1lZGlhfSBmcm9tICcuLi8uLi9VdGlsJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5wdXQgZXh0ZW5kcyBTaW5nbGVBdWRpb05vZGUge1xuICBjb25zdHJ1Y3RvcihhdWRpb0NvbnRleHQpIHtcbiAgICBzdXBlcihhdWRpb0NvbnRleHQpO1xuICAgIHRoaXMuX2RlZmVycmVkQ29ubmVjdHMgPSBbXTtcbiAgICB0aGlzLl9oYXNQZXJtaXNzaW9ucyA9IGZhbHNlO1xuICB9XG5cbiAgZ2V0IGlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLm5vZGU7XG4gIH1cbiAgc2V0IGlucHV0KHN0cmVhbSkge1xuICAgIC8vIENyZWF0ZSBhIG1lZGlhLXN0cmVhbSBzb3VyY2UuXG4gICAgdGhpcy5ub2RlID0gdGhpcy5hdWRpb0NvbnRleHQuY3JlYXRlTWVkaWFTdHJlYW1Tb3VyY2Uoc3RyZWFtKTtcbiAgfVxuICAvKipcbiAgICAgKiBHZXQgeW91ciBtaWNyb3Bob25lIHNvdW5kIGFzIGlucHV0LlxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8QXVkaW9Ob2RlPn0gUmVzb2x2ZXMgd2hlbiB5b3UgYWNjZXB0IHRvIHVzZSB0aGUgbWljcm9waG9uZS5cbiAgICAgKi9cbiAgZ2V0VXNlck1lZGlhKCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KT0+IHtcbiAgICAgIGlmIChoYXNHZXRVc2VyTWVkaWEpIHtcbiAgICAgICAgLy8gRmlyZWZveFxuICAgICAgICBpZiAobmF2aWdhdG9yLm1vekdldFVzZXJNZWRpYSkge1xuICAgICAgICAgIG5hdmlnYXRvci5tZWRpYURldmljZXMuZ2V0VXNlck1lZGlhKHtcbiAgICAgICAgICAgIGF1ZGlvOiB7XG4gICAgICAgICAgICAgIG9wdGlvbmFsOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgJ2VjaG9DYW5jZWxsYXRpb24nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICdtb3pOb2lzZVN1cHByZXNzaW9uJzogZmFsc2UsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAnbW96QXV0b0dhaW5Db250cm9sJzogZmFsc2UsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSwgKHN0cmVhbSk9PiB7XG4gICAgICAgICAgICB0aGlzLmlucHV0ID0gc3RyZWFtO1xuICAgICAgICAgICAgdGhpcy5faGFzUGVybWlzc2lvbnMgPSB0cnVlO1xuICAgICAgICAgICAgd2luZG93LnN0cmVhbSA9IHN0cmVhbTsgLy8gbWFrZSBzdHJlYW0gYXZhaWxhYmxlIHRvIGNvbnNvbGVcbiAgICAgICAgICAgIC8vIENvbm5lY3QgdGhlIGRlZmZlcmVkIGNvbm5lY3RzXG4gICAgICAgICAgICB0aGlzLl9kZWZlcnJlZENvbm5lY3RzLmZvckVhY2goKG5vZGUpPT4ge1xuICAgICAgICAgICAgICB0aGlzLmNvbm5lY3Qobm9kZSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcmVzb2x2ZShzdHJlYW0pO1xuICAgICAgICAgIH0sIChlcnJvcik9PiB7XG4gICAgICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgICAgIH0pO1xuICAgICAgICAvLyBDaHJvbWVcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBuYXZpZ2F0b3IuZ2V0VXNlck1lZGlhKHtcbiAgICAgICAgICAgIGF1ZGlvOiB7XG4gICAgICAgICAgICAgIG9wdGlvbmFsOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgJ2VjaG9DYW5jZWxsYXRpb24nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICdtb3pOb2lzZVN1cHByZXNzaW9uJzogZmFsc2UsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAnbW96QXV0b0dhaW5Db250cm9sJzogZmFsc2UsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSwgKHN0cmVhbSk9PiB7XG4gICAgICAgICAgICB0aGlzLmlucHV0ID0gc3RyZWFtO1xuICAgICAgICAgICAgdGhpcy5faGFzUGVybWlzc2lvbnMgPSB0cnVlO1xuICAgICAgICAgICAgd2luZG93LnN0cmVhbSA9IHN0cmVhbTsgLy8gbWFrZSBzdHJlYW0gYXZhaWxhYmxlIHRvIGNvbnNvbGVcbiAgICAgICAgICAgIC8vIENvbm5lY3QgdGhlIGRlZmZlcmVkIGNvbm5lY3RzXG4gICAgICAgICAgICB0aGlzLl9kZWZlcnJlZENvbm5lY3RzLmZvckVhY2goKG5vZGUpPT4ge1xuICAgICAgICAgICAgICB0aGlzLmNvbm5lY3Qobm9kZSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcmVzb2x2ZShzdHJlYW0pO1xuICAgICAgICAgIH0sIChlcnJvcik9PiB7XG4gICAgICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZWplY3QoRXJyb3IoJ1lvdXIgYnJvd3NlciBkb2VzIG5vdCBzdXBwb3J0IHRoZSB1c2Ugb2YgdXNlci1tZWRpYSwgcGxlYXNlIHVwZ3JhZGUgb3IgdXNlIGFub3RoZXIgYnJvd3NlciEnKSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgLyoqXG4gICAgICogQ29ubmVjdCB0aGUgZWZmZWN0IHRvIG90aGVyIGVmZmVjdHMgb3IgbmF0aXZlIGF1ZGlvLW5vZGVzLlxuICAgICAqIEBwYXJhbSAge0F1ZGlvTm9kZXxTaW5nbGVBdWRpb05vZGV8TXVsdGlBdWRpb05vZGV9IG5vZGVcbiAgICAgKiBAcmV0dXJuIHtBdWRpb05vZGV8U2luZ2xlQXVkaW9Ob2RlfE11bHRpQXVkaW9Ob2RlfVxuICAgICAqL1xuICBjb25uZWN0KG5vZGUpIHtcbiAgICAvLyBJZiB0aGVyZSBpcyBubyBpbnB1dCBub2RlIHlldCwgY29ubmVjdCB3aGVuIHRoZXJlIGlzIGEgbm9kZVxuICAgIGlmICh0eXBlb2YgdGhpcy5ub2RlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhpcy5fZGVmZXJyZWRDb25uZWN0cy5wdXNoKG5vZGUpO1xuICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfVxuICAgIGlmIChub2RlIGluc3RhbmNlb2YgU2luZ2xlQXVkaW9Ob2RlIHx8IG5vZGUgaW5zdGFuY2VvZiBNdWx0aUF1ZGlvTm9kZSkge1xuICAgICAgdGhpcy5ub2RlLmNvbm5lY3Qobm9kZS5ub2RlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5ub2RlLmNvbm5lY3Qobm9kZSk7XG4gICAgfVxuICAgIHJldHVybiBub2RlO1xuICB9XG5cbiAgLy8gR2V0IGEgbGlzdCBvZiBhdWRpbyBpbi1hbmQtb3V0cHV0IGRldmljZXMgZGV2aWNlcy5cbiAgLy8gQHJldHVybiBBIGxpc3Qgb2YgdGhlIGF2YWlsYWJsZSBhdWRpbyBpbi1hbmQtb3V0cHV0IGRldmljZXMuXG4gIGdldEF1ZGlvRGV2aWNlcygpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCk9PiB7XG4gICAgICBpZiAodGhpcy5faGFzUGVybWlzc2lvbnMpIHtcbiAgICAgICAgbmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5lbnVtZXJhdGVEZXZpY2VzKCkudGhlbigoZGV2aWNlcyk9PiB7XG4gICAgICAgICAgcmVzb2x2ZShkZXZpY2VzLmZpbHRlcigoZGV2aWNlKT0+IHtcbiAgICAgICAgICAgIHJldHVybiBkZXZpY2Uua2luZCAmJiBkZXZpY2Uua2luZCA9PT0gJ2F1ZGlvaW5wdXQnO1xuICAgICAgICAgIH0pKTtcbiAgICAgICAgfSkuY2F0Y2goKGVycm9yKT0+IHtcbiAgICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZ2V0VXNlck1lZGlhKCkudGhlbigoKT0+IHtcbiAgICAgICAgICBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzLmVudW1lcmF0ZURldmljZXMoKS50aGVuKChkZXZpY2VzKT0+IHtcbiAgICAgICAgICAgIHJlc29sdmUoZGV2aWNlcy5maWx0ZXIoKGRldmljZSk9PiB7XG4gICAgICAgICAgICAgIHJldHVybiBkZXZpY2Uua2luZCAmJiBkZXZpY2Uua2luZCA9PT0gJ2F1ZGlvaW5wdXQnO1xuICAgICAgICAgICAgfSkpO1xuICAgICAgICAgIH0pLmNhdGNoKChlcnJvcik9PiB7XG4gICAgICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9KS5jYXRjaCgoZXJyb3IpPT4ge1xuICAgICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG4iLCJpbXBvcnQgU2luZ2xlQXVkaW9Ob2RlIGZyb20gJy4uL1NpbmdsZUF1ZGlvTm9kZSc7XG5cbi8qKlxuICogVGhlIGF1ZGlvLWVmZmVjdHMgb3V0cHV0IGNsYXNzLlxuICogVGhpcyBjbGFzcyBjb25uZWN0cyB0byB5b3VyIGRldmljZSdzIGF1ZGlvIG91dHB1dC5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3V0cHV0IGV4dGVuZHMgU2luZ2xlQXVkaW9Ob2RlIHtcbiAgY29uc3RydWN0b3IoYXVkaW9Db250ZXh0KSB7XG4gICAgc3VwZXIoYXVkaW9Db250ZXh0KTtcblxuICAgIGlmICh0aGlzLmF1ZGlvQ29udGV4dCkge1xuICAgICAgdGhpcy5ub2RlID0gYXVkaW9Db250ZXh0LmRlc3RpbmF0aW9uO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IFNpbmdsZUF1ZGlvTm9kZSBmcm9tICcuLi9TaW5nbGVBdWRpb05vZGUnO1xuXG4vKipcbiAqIFRoZSBhdWRpby1lZmZlY3RzIEJhc2ljIFByZXNlbmNlIGNsYXNzLlxuICogVGhpcyBjbGFzcyBsZXRzIHlvdSBhZGQgYW4gUHJlc2VuY2Ugd2l0aCBiYXNzIG1pZCBhbmQgdHJlYmJsZSBmaWx0ZXJzLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcmVzZW5jZSBleHRlbmRzIFNpbmdsZUF1ZGlvTm9kZSB7XG4gIGNvbnN0cnVjdG9yKGF1ZGlvQ29udGV4dCkge1xuICAgIHN1cGVyKGF1ZGlvQ29udGV4dCk7XG5cbiAgICB0aGlzLm5vZGUgPSB0aGlzLmF1ZGlvQ29udGV4dC5jcmVhdGVCaXF1YWRGaWx0ZXIoKTtcbiAgICB0aGlzLm5vZGUuZnJlcXVlbmN5LnZhbHVlID0gMzkwMDtcbiAgICB0aGlzLm5vZGUudHlwZSA9ICdwZWFraW5nJztcbiAgICB0aGlzLm5vZGUuUS52YWx1ZSA9IDAuNzA3MTtcbiAgfVxuXG4gIC8vIFNldHRlcnMgYW5kIGdldHRlcnMgZm9yIHB1YmxpYyBwcm9wZXJ0aWVzXG4gIGdldCBnYWluKCkge1xuICAgIHJldHVybiB0aGlzLl9nYWluO1xuICB9XG4gIHNldCBnYWluKGdhaW4pIHtcbiAgICBjb25zdCBub3JtYWxpemVkVmFsdWUgPSBwYXJzZUZsb2F0KGdhaW4pO1xuICAgIHRoaXMuX2dhaW4gPSAobm9ybWFsaXplZFZhbHVlIC0gNSkgKiAyO1xuICAgIHRoaXMubm9kZS5nYWluLnZhbHVlID0gdGhpcy5fZ2FpbjtcbiAgfVxufVxuIiwiaW1wb3J0IE11bHRpQXVkaW9Ob2RlIGZyb20gJy4uL011bHRpQXVkaW9Ob2RlJztcbmNvbnN0IGlyZiA9IHJlcXVpcmUoJy4uLy4uL2Fzc2V0cy9pbXB1bHNlcy9yZXZlcmIvaGFsbC1yZXZlcmIub2dnJyk7XG5jb25zdCBnZXRJbnB1dFJlc3BvbnNlRmlsZSA9IGZ1bmN0aW9uKGZpbGUpIHtcbiAgcmV0dXJuIGZldGNoKGZpbGUsIHtcbiAgICBtZXRob2Q6ICdnZXQnLFxuICB9KS50aGVuKChyZXNwb25zZSk9PiB7XG4gICAgcmV0dXJuIHJlc3BvbnNlLmFycmF5QnVmZmVyKCk7XG4gIH0pO1xufVxuXG4vKipcbiAqIFRoZSBhdWRpby1lZmZlY3RzIHJldmVyYiBjbGFzcy5cbiAqIFRoaXMgY2xhc3MgbGV0cyB5b3UgYWRkIGEgcmV2ZXJiIGVmZmVjdC5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmV2ZXJiIGV4dGVuZHMgTXVsdGlBdWRpb05vZGUge1xuICAvLyBfd2V0O1xuICAvLyBfbGV2ZWw7XG4gIC8vIF9idWZmZXI7XG5cbiAgY29uc3RydWN0b3IoYXVkaW9Db250ZXh0LCBidWZmZXIpIHtcbiAgICBzdXBlcihhdWRpb0NvbnRleHQpO1xuXG4gICAgdGhpcy5ub2RlcyA9IHtcbiAgICAgIGlucHV0R2Fpbk5vZGU6IGF1ZGlvQ29udGV4dC5jcmVhdGVHYWluKCksIC8vIENyZWF0ZSB0aGUgaW5wdXQgYW5kIG91dHB1dCBnYWluLW5vZGVcbiAgICAgIG91dHB1dEdhaW5Ob2RlOiBhdWRpb0NvbnRleHQuY3JlYXRlR2FpbigpLFxuICAgICAgY29udm9sdmVyTm9kZTogYXVkaW9Db250ZXh0LmNyZWF0ZUNvbnZvbHZlcigpLCAvLyBDcmVhdGUgdGhlIGNvbnZvbHZlciBub2RlIHRvIGNyZWF0ZSB0aGUgcmV2ZXJiIGVmZmVjdFxuICAgICAgd2V0R2Fpbk5vZGU6IGF1ZGlvQ29udGV4dC5jcmVhdGVHYWluKCksIC8vIENyZWF0ZSB0aGUgd2V0bmVzcyBjb250cm9sbCBnYWluLW5vZGVcbiAgICAgIGxldmVsR2Fpbk5vZGU6IGF1ZGlvQ29udGV4dC5jcmVhdGVHYWluKCksIC8vIENyZWF0ZSB0aGUgbGV2ZWwgY29udHJvbGwgZ2Fpbi1ub2RlXG4gICAgfTtcblxuICAgIC8vIFdpcmUgaXQgYWxsIHVwXG4gICAgdGhpcy5ub2Rlcy5pbnB1dEdhaW5Ob2RlLmNvbm5lY3QodGhpcy5ub2Rlcy5jb252b2x2ZXJOb2RlKTtcbiAgICB0aGlzLm5vZGVzLmlucHV0R2Fpbk5vZGUuY29ubmVjdCh0aGlzLm5vZGVzLndldEdhaW5Ob2RlKTtcbiAgICB0aGlzLm5vZGVzLmNvbnZvbHZlck5vZGUuY29ubmVjdCh0aGlzLm5vZGVzLmxldmVsR2Fpbk5vZGUpO1xuICAgIHRoaXMubm9kZXMubGV2ZWxHYWluTm9kZS5jb25uZWN0KHRoaXMubm9kZXMub3V0cHV0R2Fpbk5vZGUpO1xuICAgIHRoaXMubm9kZXMud2V0R2Fpbk5vZGUuY29ubmVjdCh0aGlzLm5vZGVzLm91dHB1dEdhaW5Ob2RlKTtcblxuICAgIC8vIFNldCB0aGUgaW5wdXQgZ2Fpbi1ub2RlIGFzIHRoZSBpbnB1dC1ub2RlLlxuICAgIHRoaXMubm9kZSA9IHRoaXMubm9kZXMuaW5wdXRHYWluTm9kZTtcblxuICAgIC8vIFNldCB0aGUgb3V0cHV0IGdhaW4tbm9kZSBhcyB0aGUgb3V0cHV0LW5vZGUuXG4gICAgdGhpcy5vdXRwdXQgPSB0aGlzLm5vZGVzLm91dHB1dEdhaW5Ob2RlO1xuXG4gICAgLy8gU2V0IHRoZSBkZWZhdWx0IHdldG5lc3MgdG8gMC41XG4gICAgdGhpcy53ZXQgPSAwLjU7XG5cbiAgICAvLyBTZXQgdGhlIGRlZmF1bHQgbGV2ZWwgdG8gMVxuICAgIHRoaXMubGV2ZWwgPSAxO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgc3RhbmRhcmQgaW5wdXQgcmVzcG9uc2VmaWxlLlxuICAgKiBAcGFyYW0ge0FueX0gZmlsZVxuICAgKiBAcmV0dXJuIHtQcm9taXNlPEF1ZGlvQnVmZmVyPn1cbiAgICovXG4gIHNldCByZXNwb25zZUZpbGUoZmlsZSkge1xuICAgIC8vIFRPRE8gR2V0IHRoZSBmaWxlIGZyb20gbWFwcGluZyBjb25zdGFudHNcbiAgICBnZXRJbnB1dFJlc3BvbnNlRmlsZShpcmYpLnRoZW4oKGJ1ZmZlcik9PiB7XG4gICAgICBpZiAoIXRoaXMuYnVmZmVyKSB7XG4gICAgICAgIHRoaXMuYnVmZmVyID0gYnVmZmVyO1xuICAgICAgfVxuICAgIH0pLmNhdGNoKChlKT0+IHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHByb2Nlc3NpbmcgZmlsZTonLCBlKTtcbiAgICB9KTtcbiAgfVxuXG5cbiAgLyoqXG4gICAqIEdldHRlciBmb3IgdGhlIGVmZmVjdCdzIHdldG5lc3NcbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKi9cbiAgZ2V0IHdldCgpIHtcbiAgICByZXR1cm4gdGhpcy5fd2V0O1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHRlciBmb3IgdGhlIGVmZmVjdCdzIHdldG5lc3NcbiAgICogQHBhcmFtICB7bnVtYmVyfSB3ZXRuZXNzXG4gICAqL1xuICBzZXQgd2V0KHdldG5lc3MpIHtcbiAgICAvLyBTZXQgdGhlIGludGVybmFsIHdldG5lc3MgdmFsdWVcbiAgICB0aGlzLl93ZXQgPSBwYXJzZUZsb2F0KHdldG5lc3MpO1xuXG4gICAgLy8gU2V0IHRoZSBuZXcgdmFsdWUgZm9yIHRoZSB3ZXRuZXNzIGNvbnRyb2xsIGdhaW4tbm9kZVxuICAgIHRoaXMubm9kZXMud2V0R2Fpbk5vZGUuZ2Fpbi52YWx1ZSA9IHRoaXMuX3dldDtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXR0ZXIgZm9yIHRoZSBlZmZlY3QncyBsZXZlbFxuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqL1xuICBnZXQgbGV2ZWwoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2xldmVsO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHRlciBmb3IgdGhlIGVmZmVjdCdzIGxldmVsXG4gICAqIEBwYXJhbSAge251bWJlcn0gbGV2ZWxcbiAgICovXG4gIHNldCBsZXZlbChsZXZlbCkge1xuICAgIC8vIFNldCB0aGUgaW50ZXJuYWwgbGV2ZWwgdmFsdWVcbiAgICB0aGlzLl9sZXZlbCA9IHBhcnNlRmxvYXQobGV2ZWwpO1xuXG4gICAgLy8gU2V0IHRoZSBkZWxheVRpbWUgdmFsdWUgb2YgdGhlIGRlbGF5LW5vZGVcbiAgICB0aGlzLm5vZGVzLmxldmVsR2Fpbk5vZGUuZ2Fpbi52YWx1ZSA9IHRoaXMuX2xldmVsO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHRlciBmb3IgdGhlIGVmZmVjdCdzIGNvbnZvbHZlciBidWZmZXJcbiAgICogQHJldHVybiB7QnVmZmVyfVxuICAgKi9cbiAgZ2V0IGJ1ZmZlcigpIHtcbiAgICByZXR1cm4gdGhpcy5fYnVmZmVyO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHRlciBmb3IgdGhlIGVmZmVjdCdzIGNvbnZvbHZlciBidWZmZXJcbiAgICogQHBhcmFtICB7U3RyZWFtfSBidWZmZXJcbiAgICovXG4gIHNldCBidWZmZXIoYnVmZmVyKSB7XG4gICAgdGhpcy5hdWRpb0NvbnRleHQuZGVjb2RlQXVkaW9EYXRhKGJ1ZmZlciwgKGJ1ZmZlcik9PiB7XG4gICAgICAvLyBTZXQgdGhlIGludGVybmFsIGJ1ZmZlciB2YWx1ZVxuICAgICAgdGhpcy5fYnVmZmVyID0gYnVmZmVyO1xuXG4gICAgICAvLyBTZXQgdGhlIGJ1ZmZlciBnYWluLW5vZGUgdmFsdWVcbiAgICAgIHRoaXMubm9kZXMuY29udm9sdmVyTm9kZS5idWZmZXIgPSB0aGlzLl9idWZmZXI7XG4gICAgfSk7XG4gIH1cbn1cbiIsImltcG9ydCBTaW5nbGVBdWRpb05vZGUgZnJvbSAnLi4vU2luZ2xlQXVkaW9Ob2RlJztcblxuLyoqXG4gKiBUaGUgYXVkaW8tZWZmZWN0cyB0cmVtb2xvIGNsYXNzLlxuICogVGhpcyBjbGFzcyBsZXRzIHlvdSBhZGQgYSB0cmVtb2xvIGVmZmVjdC5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVHJlbW9sbyBleHRlbmRzIFNpbmdsZUF1ZGlvTm9kZSB7XG4gIC8vIHByaXZhdGUgX3NwZWVkOiBudW1iZXI7XG5cbiAgY29uc3RydWN0b3IoYXVkaW9Db250ZXh0KSB7XG4gICAgc3VwZXIoYXVkaW9Db250ZXh0KTtcblxuICAgIHRoaXMubm9kZXMgPSB7XG4gICAgICBnYWluTm9kZTogYXVkaW9Db250ZXh0LmNyZWF0ZUdhaW4oKSwgLy8gQ3JlYXRlIHRoZSBnYWluLW5vZGVcbiAgICAgIG9zY2lsbGF0b3JOb2RlOiBhdWRpb0NvbnRleHQuY3JlYXRlT3NjaWxsYXRvcigpLCAvLyBDcmVhdGUgdGhlIG9zY2lsYXRvciBub2RlXG4gICAgfTtcblxuICAgIC8vIFdpcmUgaXQgYWxsIHVwXG4gICAgdGhpcy5ub2Rlcy5vc2NpbGxhdG9yTm9kZS5jb25uZWN0KHRoaXMubm9kZXMuZ2Fpbk5vZGUuZ2Fpbik7XG5cbiAgICAvLyBTZXR1cCB0aGUgb3NjaWxsYXRvclxuICAgIHRoaXMubm9kZXMub3NjaWxsYXRvck5vZGUudHlwZSA9ICdzaW5lJztcbiAgICB0aGlzLm5vZGVzLm9zY2lsbGF0b3JOb2RlLnN0YXJ0KDApO1xuXG4gICAgLy8gU2V0IHRoZSBnYWluLW5vZGUgYXMgdGhlIG1haW4gbm9kZS5cbiAgICB0aGlzLm5vZGUgPSB0aGlzLm5vZGVzLmdhaW5Ob2RlO1xuXG4gICAgLy8gU2V0IHRoZSBkZWZhdWx0IHNwZWVkIHRvIDIwSHpcbiAgICB0aGlzLnNwZWVkID0gMjA7XG4gIH1cblxuICAvKipcbiAgICogR2V0dGVyIGZvciB0aGUgZWZmZWN0J3Mgc3BlZWRcbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKi9cbiAgZ2V0IHNwZWVkKCkge1xuICAgIHJldHVybiB0aGlzLl9zcGVlZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXR0ZXIgZm9yIHRoZSBlZmZlY3QncyBzcGVlZFxuICAgKiBAcGFyYW0gIHtudW1iZXJ9IHNwZWVkXG4gICAqL1xuICBzZXQgc3BlZWQoc3BlZWQpIHtcbiAgICAvLyBTZXQgdGhlIGludGVybmFsIHNwZWVkIHZhbHVlXG4gICAgdGhpcy5fc3BlZWQgPSBwYXJzZUZsb2F0KHNwZWVkKTtcblxuICAgIC8vIFNldCB0aGUgbmV3IHZhbHVlIGZvciB0aGUgb3NjaWxsYXRvciBmcmVxdWVuY3lcbiAgICB0aGlzLm5vZGVzLm9zY2lsbGF0b3JOb2RlLmZyZXF1ZW5jeS52YWx1ZSA9IHRoaXMuX3NwZWVkO1xuICB9XG59XG4iLCJpbXBvcnQgU2luZ2xlQXVkaW9Ob2RlIGZyb20gJy4uL1NpbmdsZUF1ZGlvTm9kZSc7XG5cbi8qKlxuICogVGhlIGF1ZGlvLWVmZmVjdHMgdm9sdW1lIGNsYXNzLlxuICogVGhpcyBjbGFzcyBsZXRzIHlvdSBjaGFuZ2UgdGhlIHZvbHVtZSBvZiB0aGUgYXVkaW8gc2lnbmFsLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWb2x1bWUgZXh0ZW5kcyBTaW5nbGVBdWRpb05vZGUge1xuICBjb25zdHJ1Y3RvcihhdWRpb0NvbnRleHQpIHtcbiAgICBzdXBlcihhdWRpb0NvbnRleHQpO1xuICAgIC8vIENyZWF0ZSB0aGUgZ2Fpbi1ub2RlIHdoaWNoIHdlJ2xsIHVzZSB0byBjaGFuZ2UgdGhlIHZvbHVtZS5cbiAgICB0aGlzLm5vZGUgPSB0aGlzLmF1ZGlvQ29udGV4dC5jcmVhdGVHYWluKCk7XG4gICAgLy8gVGhlIGluaXRpYWwgdm9sdW1lIGxldmVsIGlzIDBcbiAgICB0aGlzLmxldmVsID0gMDtcbiAgfVxuXG4gIC8qKlxuICAgICAqIEdldHRlciBmb3IgdGhlIGVmZmVjdHMgdm9sdW1lLlxuICAgICAqIEByZXR1cm4ge0Zsb2F0fVxuICAgICAqL1xuICBnZXQgbGV2ZWwoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2xldmVsO1xuICB9XG5cbiAgLyoqXG4gICAgICogU2V0dGVyIGZvciB0aGUgZWZmZWN0cyB2b2x1bWUuXG4gICAgICogQHBhcmFtICB7RmxvYXR9IHZvbHVtZSBUaGUgdm9sdW1lLCB0aXBpY2FsIGJldHdlZW4gMCBhbmQgMS5cbiAgICAgKi9cbiAgc2V0IGxldmVsKHZvbHVtZSkge1xuICAgIC8vIFBhcnNlIHRoZSB2b2x1bWUsIGl0IGNhbiBub3QgYmUgbG93ZXIgdGhhbiAwLlxuICAgIGxldCB2b2wgPSBwYXJzZUZsb2F0KHZvbHVtZSA+PSAwID8gdm9sdW1lIDogMCk7XG4gICAgaWYgKHRoaXMuX211dGUgJiYgdm9sID4gMCkge1xuICAgICAgdGhpcy5fbGV2ZWxCZWZvcmVNdXRlID0gdm9sO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm5vZGUuZ2Fpbi52YWx1ZSA9IHRoaXMuX2xldmVsID0gdm9sO1xuICAgICAgdGhpcy5fbXV0ZSA9ICh2b2wgPT09IDApO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgICAqIEdldHRlciBmb3IgdGhlIGVmZmN0cyBtdXRlIGZ1bmN0aW9uYWxpdHkuXG4gICAgICogQHJldHVybiB7W3R5cGVdfSBbZGVzY3JpcHRpb25dXG4gICAgICovXG4gIGdldCBtdXRlKCkge1xuICAgIHJldHVybiB0aGlzLl9tdXRlO1xuICB9XG5cbiAgLyoqXG4gICAgICogU2V0dGVyIGZvciB0aGUgZWZmZWN0cyBtdXRlIGZ1bmN0aW9uYWxpdHkuXG4gICAgICogQHBhcmFtICB7Qm9vbGVhbn0gbXV0ZSBXaGV0aGVyIHRoZSBlZmZlY3QgaXMgbXV0ZWQuXG4gICAgICovXG4gIHNldCBtdXRlKG11dGUpIHtcbiAgICB0aGlzLl9tdXRlID0gISFtdXRlO1xuICAgIGlmICh0aGlzLl9tdXRlKSB7XG4gICAgICAvLyBLZWVwIHRyYWNrIG9mIHRoZSB2b2x1bWUgYmVmb3JlIG11dGluZ1xuICAgICAgdGhpcy5fbGV2ZWxCZWZvcmVNdXRlID0gdGhpcy5sZXZlbDtcbiAgICAgIC8vIFNldCB0aGUgdm9sdW1lIHRvIDBcbiAgICAgIHRoaXMubGV2ZWwgPSAwO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBTZXQgdGhlIHZvbHVtZSB0byB0aGUgcHJldmlvdXMgdm9sdW1lLlxuICAgICAgdGhpcy5sZXZlbCA9IHRoaXMuX2xldmVsQmVmb3JlTXV0ZSB8fCB0aGlzLl9sZXZlbDtcbiAgICB9XG4gIH1cbn1cbiIsIlxuLy8gSGVyZSB3ZSBkZWZpbmUgdGhlIGRpZmZlcmVudCBhbXAgdHlwZXMgYW5kIHRoZWlyIHNjaGVtYXRpY3MgYW5kIGNhYmluZXRzLCBvciBjYWJpbmV0cyBzaG9sZCBiZSBhbm90aGVyIGdlbmVyYXRvcj8gXG4vLyB3aXRoIHNvbWUgaW5pdGlhbHMgdmFsdWVzLlxuZXhwb3J0IGNvbnN0IEFNUF9TRVRUSU5HX1RZUEUgPSB7XG4gIEtOT0I6ICdrbm9iJyxcbiAgSU5URVJOQUw6ICdpbnRlcm5hbCcsXG4gIEJPT0xFQU46ICdib29sZWFuJyxcbiAgU0VMRUNUOiAnc2VsZWN0JyxcbiAgQ0FCSU5FVDogJ2NhYmluZXQnLFxufTtcbi8vIGVmZmVjdC9ub2RlIHR5cGUgb2YgZWFjaCBjb21wb25lbnQgLT4gb25lIG9mIGVmZmVjdHMgZm9sZGVyXG5leHBvcnQgY29uc3QgQU1QX0NPTVBPTkVOVF9UWVBFID0ge1xuICBWT0xVTUU6ICd2b2x1bWUnLFxuICBFUVVBTElaRVI6ICdlcXVhbGl6ZXInLFxuICBQUkVTRU5DRTogJ3ByZXNlbmNlJyxcbiAgRElTVE9SVElPTjogJ2Rpc3RvcnRpb24nLFxuICBMT1dTSEVMRjogJ0xvd3NoZWxmRmlsdGVyJyxcbiAgSElHSFBBU1M6ICdIaWdocGFzc0ZpbHRlcicsXG4gIFBFQUtJTkc6ICdQZWFraW5nRmlsdGVyJyxcbiAgQ0FCSU5FVDogJ2NhYmluZXQnLFxufTtcbi8vIG5hbWUgb2YgdGhlIGNvbXBvbmVudFxuLy8gVGhpcyBvcmRlciBpcyB0aGUgb3JkZXIgdGhlIGNvbXBvbmVudHMgYXBwZWFyIGluIHRoZSBhbXAgaGVhZGVyXG5leHBvcnQgY29uc3QgQU1QX0NPTVBPTkVOVF9OQU1FID0ge1xuICBESVNUT1JUSU9OOiAnZGlzdG9ydGlvbicsIC8vaW5wdXQ/XG4gIEVRVUFMSVpFUjogJ2VxdWFsaXplcicsXG4gIFBSRVNFTkNFOiAncHJlc2VuY2UnLFxuICBWT0xVTUU6ICd2b2x1bWUnLFxuICBNQVNURVI6ICdtYXN0ZXInLCAvLyBvdXB1dD9cbn07XG5leHBvcnQgY29uc3QgQU1QX1RZUEVTID0ge1xuICBXQVJTSEFMTDogJ1doYXJzYWxsJyxcbn1cblxuZXhwb3J0IGNvbnN0IEFNUF9UWVBFU19TQ0hFTUFTID0ge1xuICBbQU1QX1RZUEVTLldBUlNIQUxMXToge1xuICAgIC8vIE9VVFBVVDogXG4gICAgQ09NUE9ORU5UUzoge1xuICAgICAgdm9sdW1lOiB7XG4gICAgICAgIG5hbWU6ICd2b2x1bWUnLFxuICAgICAgICB0eXBlOiBBTVBfQ09NUE9ORU5UX1RZUEUuVk9MVU1FLFxuICAgICAgICBzZXR0aW5nc0xpc3Q6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnbGV2ZWwnLFxuICAgICAgICAgICAgdmFsdWU6IDMsXG4gICAgICAgICAgICB0eXBlOiBBTVBfU0VUVElOR19UWVBFLktOT0IsXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgICBpbnB1dEdhaW46IHtcbiAgICAgICAgbmFtZTogJ2lucHV0R2FpbicsXG4gICAgICAgIHR5cGU6IEFNUF9DT01QT05FTlRfVFlQRS5WT0xVTUUsXG4gICAgICAgIHNldHRpbmdzTGlzdDogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdsZXZlbCcsXG4gICAgICAgICAgICB2YWx1ZTogMyxcbiAgICAgICAgICAgIHR5cGU6IEFNUF9TRVRUSU5HX1RZUEUuSU5URVJOQUwsXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgICAvLyBieXBhc3Mgbm90IGFkZGVkXG4gICAgICBsb3dTaGVsZjE6IHtcbiAgICAgICAgbmFtZTogJ2xvd1NoZWxmMScsXG4gICAgICAgIHR5cGU6IEFNUF9DT01QT05FTlRfVFlQRS5MT1dTSEVMRixcbiAgICAgICAgc2V0dGluZ3NMaXN0OiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ2dhaW4nLFxuICAgICAgICAgICAgdmFsdWU6IC02LFxuICAgICAgICAgICAgdHlwZTogQU1QX1NFVFRJTkdfVFlQRS5JTlRFUk5BTCxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdmcmVxdWVuY3knLFxuICAgICAgICAgICAgdmFsdWU6IDcyMCxcbiAgICAgICAgICAgIHR5cGU6IEFNUF9TRVRUSU5HX1RZUEUuSU5URVJOQUwsXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgICBsb3dTaGVsZjI6IHtcbiAgICAgICAgbmFtZTogJ2xvd1NoZWxmMicsXG4gICAgICAgIHR5cGU6IEFNUF9DT01QT05FTlRfVFlQRS5MT1dTSEVMRixcbiAgICAgICAgc2V0dGluZ3NMaXN0OiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ2dhaW4nLFxuICAgICAgICAgICAgdmFsdWU6IC01LFxuICAgICAgICAgICAgdHlwZTogQU1QX1NFVFRJTkdfVFlQRS5JTlRFUk5BTCxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdmcmVxdWVuY3knLFxuICAgICAgICAgICAgdmFsdWU6IDMyMCxcbiAgICAgICAgICAgIHR5cGU6IEFNUF9TRVRUSU5HX1RZUEUuSU5URVJOQUwsXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgICBwcmVhbXBTdGFnZTE6IHtcbiAgICAgICAgbmFtZTogJ3ByZWFtcFN0YWdlMScsXG4gICAgICAgIHR5cGU6IEFNUF9DT01QT05FTlRfVFlQRS5WT0xVTUUsXG4gICAgICAgIHNldHRpbmdzTGlzdDogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdsZXZlbCcsXG4gICAgICAgICAgICB2YWx1ZTogMSxcbiAgICAgICAgICAgIHR5cGU6IEFNUF9TRVRUSU5HX1RZUEUuSU5URVJOQUwsXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgICBkaXN0b3J0aW9uU3RhZ2UxOiB7XG4gICAgICAgIG5hbWU6ICdkaXN0b3J0aW9uU3RhZ2UxJyxcbiAgICAgICAgdHlwZTogQU1QX0NPTVBPTkVOVF9OQU1FLkRJU1RPUlRJT04sXG4gICAgICAgIHNldHRpbmdzTGlzdDogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdkaXN0b3J0aW9uVHlwZScsXG4gICAgICAgICAgICB2YWx1ZTogJ2FzeW1ldHJpYycsXG4gICAgICAgICAgICB0eXBlOiBBTVBfU0VUVElOR19UWVBFLlNFTEVDVCxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdpbnRlbnNpdHknLFxuICAgICAgICAgICAgdmFsdWU6IDgsXG4gICAgICAgICAgICB0eXBlOiBBTVBfU0VUVElOR19UWVBFLktOT0IsXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgICBoaWdoUGFzczE6IHtcbiAgICAgICAgbmFtZTogJ2hpZ2hQYXNzMScsXG4gICAgICAgIHR5cGU6IEFNUF9DT01QT05FTlRfVFlQRS5ISUdIUEFTUyxcbiAgICAgICAgc2V0dGluZ3NMaXN0OiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ2ZyZXF1ZW5jeScsXG4gICAgICAgICAgICB2YWx1ZTogMCxcbiAgICAgICAgICAgIHR5cGU6IEFNUF9TRVRUSU5HX1RZUEUuSU5URVJOQUwsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnUVZhbHVlJyxcbiAgICAgICAgICAgIHZhbHVlOiAwLjcwNzEsXG4gICAgICAgICAgICB0eXBlOiBBTVBfU0VUVElOR19UWVBFLklOVEVSTkFMLFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgICAgbG93U2hlbGYzOiB7XG4gICAgICAgIG5hbWU6ICdsb3dTaGVsZjMnLFxuICAgICAgICB0eXBlOiBBTVBfQ09NUE9ORU5UX1RZUEUuTE9XU0hFTEYsXG4gICAgICAgIHNldHRpbmdzTGlzdDogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdnYWluJyxcbiAgICAgICAgICAgIHZhbHVlOiAtNixcbiAgICAgICAgICAgIHR5cGU6IEFNUF9TRVRUSU5HX1RZUEUuSU5URVJOQUwsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnZnJlcXVlbmN5JyxcbiAgICAgICAgICAgIHZhbHVlOiA3MjAsXG4gICAgICAgICAgICB0eXBlOiBBTVBfU0VUVElOR19UWVBFLklOVEVSTkFMLFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgICAgcHJlYW1wU3RhZ2UyOiB7XG4gICAgICAgIG5hbWU6ICdwcmVhbXBTdGFnZTInLFxuICAgICAgICB0eXBlOiBBTVBfQ09NUE9ORU5UX1RZUEUuVk9MVU1FLFxuICAgICAgICBzZXR0aW5nc0xpc3Q6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnbGV2ZWwnLFxuICAgICAgICAgICAgdmFsdWU6IDEsXG4gICAgICAgICAgICB0eXBlOiBBTVBfU0VUVElOR19UWVBFLklOVEVSTkFMLFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgICAgZGlzdG9ydGlvblN0YWdlMjoge1xuICAgICAgICBuYW1lOiAnZGlzdG9ydGlvblN0YWdlMicsXG4gICAgICAgIHR5cGU6IEFNUF9DT01QT05FTlRfTkFNRS5ESVNUT1JUSU9OLFxuICAgICAgICBzZXR0aW5nc0xpc3Q6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnZGlzdG9ydGlvblR5cGUnLFxuICAgICAgICAgICAgdmFsdWU6ICdub3RTb0Rpc3RvcmRlZCcsXG4gICAgICAgICAgICB0eXBlOiBBTVBfU0VUVElOR19UWVBFLlNFTEVDVCxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdpbnRlbnNpdHknLFxuICAgICAgICAgICAgdmFsdWU6IDgsXG4gICAgICAgICAgICB0eXBlOiBBTVBfU0VUVElOR19UWVBFLktOT0IsXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgICBvdXRwdXRHYWluOiB7XG4gICAgICAgIG5hbWU6ICdvdXRwdXRHYWluJyxcbiAgICAgICAgdHlwZTogQU1QX0NPTVBPTkVOVF9UWVBFLlZPTFVNRSxcbiAgICAgICAgc2V0dGluZ3NMaXN0OiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ2xldmVsJyxcbiAgICAgICAgICAgIHZhbHVlOiA3LFxuICAgICAgICAgICAgdHlwZTogQU1QX1NFVFRJTkdfVFlQRS5LTk9CLFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgICAgZXF1YWxpemVyOiB7XG4gICAgICAgIG5hbWU6ICdlcXVhbGl6ZXInLFxuICAgICAgICB0eXBlOiBBTVBfQ09NUE9ORU5UX1RZUEUuRVFVQUxJWkVSLFxuICAgICAgICBzZXR0aW5nc0xpc3Q6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAndHJlYmJsZUdhaW4nLFxuICAgICAgICAgICAgdmFsdWU6IDQsXG4gICAgICAgICAgICB0eXBlOiBBTVBfU0VUVElOR19UWVBFLktOT0IsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnbWlkZGxlR2FpbicsXG4gICAgICAgICAgICB2YWx1ZTogOC4yLFxuICAgICAgICAgICAgdHlwZTogQU1QX1NFVFRJTkdfVFlQRS5LTk9CLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ2Jhc3NHYWluJyxcbiAgICAgICAgICAgIHZhbHVlOiA4LjIsXG4gICAgICAgICAgICB0eXBlOiBBTVBfU0VUVElOR19UWVBFLktOT0IsXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgICBwcmVzZW5jZToge1xuICAgICAgICBuYW1lOiAncHJlc2VuY2UnLFxuICAgICAgICB0eXBlOiBBTVBfQ09NUE9ORU5UX1RZUEUuUFJFU0VOQ0UsXG4gICAgICAgIHNldHRpbmdzTGlzdDogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdnYWluJyxcbiAgICAgICAgICAgIHZhbHVlOiA0LFxuICAgICAgICAgICAgdHlwZTogQU1QX1NFVFRJTkdfVFlQRS5LTk9CLFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgICAgZXFMb3dDdXQ6IHtcbiAgICAgICAgbmFtZTogJ2VxTG93Q3V0JyxcbiAgICAgICAgdHlwZTogQU1QX0NPTVBPTkVOVF9UWVBFLlBFQUtJTkcsXG4gICAgICAgIHNldHRpbmdzTGlzdDogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdnYWluJyxcbiAgICAgICAgICAgIHZhbHVlOiAtMTksXG4gICAgICAgICAgICB0eXBlOiBBTVBfU0VUVElOR19UWVBFLklOVEVSTkFMLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ2ZyZXF1ZW5jeScsXG4gICAgICAgICAgICB2YWx1ZTogNjAsXG4gICAgICAgICAgICB0eXBlOiBBTVBfU0VUVElOR19UWVBFLklOVEVSTkFMLFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgICAgZXFIaWdoQ3V0OiB7XG4gICAgICAgIG5hbWU6ICdlcUhpZ2hDdXQnLFxuICAgICAgICB0eXBlOiBBTVBfQ09NUE9ORU5UX1RZUEUuUEVBS0lORyxcbiAgICAgICAgc2V0dGluZ3NMaXN0OiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ2dhaW4nLFxuICAgICAgICAgICAgdmFsdWU6IC0yNSxcbiAgICAgICAgICAgIHR5cGU6IEFNUF9TRVRUSU5HX1RZUEUuSU5URVJOQUwsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnZnJlcXVlbmN5JyxcbiAgICAgICAgICAgIHZhbHVlOiAxMDAwMCxcbiAgICAgICAgICAgIHR5cGU6IEFNUF9TRVRUSU5HX1RZUEUuSU5URVJOQUwsXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgICBtYXN0ZXI6IHtcbiAgICAgICAgbmFtZTogJ21hc3RlcicsXG4gICAgICAgIHR5cGU6IEFNUF9DT01QT05FTlRfVFlQRS5WT0xVTUUsXG4gICAgICAgIHNldHRpbmdzTGlzdDogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdsZXZlbCcsXG4gICAgICAgICAgICB2YWx1ZTogMixcbiAgICAgICAgICAgIHR5cGU6IEFNUF9TRVRUSU5HX1RZUEUuS05PQixcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdtdXRlJyxcbiAgICAgICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgICAgICAgIHR5cGU6IEFNUF9TRVRUSU5HX1RZUEUuQk9PTEVBTixcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgY2FiaW5ldDoge1xuICAgICAgICBuYW1lOiAnY2FiaW5ldCcsXG4gICAgICAgIHR5cGU6IEFNUF9DT01QT05FTlRfVFlQRS5DQUJJTkVULFxuICAgICAgICBzZXR0aW5nc0xpc3Q6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnY2FiaW5ldEltcHVsc2UnLFxuICAgICAgICAgICAgdmFsdWU6ICdNYXJzaGFsbCAxOTYwLCBheGlzJyxcbiAgICAgICAgICAgIHR5cGU6IEFNUF9TRVRUSU5HX1RZUEUuQ0FCSU5FVCxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdnYWluJyxcbiAgICAgICAgICAgIHZhbHVlOiA5LjQsXG4gICAgICAgICAgICB0eXBlOiBBTVBfU0VUVElOR19UWVBFLklOVEVSTkFMLFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgICAgfVxuICAgIH0sXG4gIH1cbn07XG5cbmV4cG9ydCB7XG5cbn1cblxuLy8gSGVyZSB3ZSBzaG91bGQgZGV2ZWxvcCB0aGUgbWV0aG9kcyB0byBjcmVhdGUgYWxsIHRoZSBlZmZlY3RzIG9mIHRoZSBhbXAgYW5kIGNvbm5lY3QgdGhlbSB0b2dldGhlclxuXG5cbi8vIGNoYW5nZUJvb3N0KHAuYm9vc3QpO1xuXG4vLyAvLyBzdGFnZSAxXG4vLyBjaGFuZ2VMb3dTaGVsZjFGcmVxdWVuY3lWYWx1ZShwLkxTMUZyZXEpO1xuLy8gY2hhbmdlTG93U2hlbGYxR2FpblZhbHVlKHAuTFMxR2Fpbik7XG4vLyBjaGFuZ2VMb3dTaGVsZjJGcmVxdWVuY3lWYWx1ZShwLkxTMkZyZXEpO1xuLy8gY2hhbmdlTG93U2hlbGYyR2FpblZhbHVlKHAuTFMyR2Fpbik7XG4vLyBjaGFuZ2VQcmVhbXBTdGFnZTFHYWluVmFsdWUocC5nYWluMSk7XG4vLyBjaGFuZ2VEaXN0bzFUeXBlRnJvbVByZXNldChwLmRpc3RvTmFtZTEpO1xuLy8gY2hhbmdlRGlzdG9yc2lvblZhbHVlcyhwLksxLCAwKTtcblxuLy8gLy8gc3RhZ2UgMlxuLy8gY2hhbmdlTG93U2hlbGYzRnJlcXVlbmN5VmFsdWUocC5MUzNGcmVxKTtcbi8vIGNoYW5nZUxvd1NoZWxmM0dhaW5WYWx1ZShwLkxTM0dhaW4pO1xuLy8gY2hhbmdlUHJlYW1wU3RhZ2UyR2FpblZhbHVlKHAuZ2FpbjIpO1xuLy8gY2hhbmdlRGlzdG8yVHlwZUZyb21QcmVzZXQocC5kaXN0b05hbWUyKTtcbi8vIGNoYW5nZURpc3RvcnNpb25WYWx1ZXMocC5LMiwgMSk7XG5cbi8vIGNoYW5nZU91dHB1dEdhaW4ocC5PRyk7XG5cbi8vIGNoYW5nZUJhc3NGaWx0ZXJWYWx1ZShwLkJGKTtcbi8vIGNoYW5nZU1pZEZpbHRlclZhbHVlKHAuTUYpO1xuLy8gY2hhbmdlVHJlYmxlRmlsdGVyVmFsdWUocC5URik7XG4vLyBjaGFuZ2VQcmVzZW5jZUZpbHRlclZhbHVlKHAuUEYpO1xuXG4vLyBjaGFuZ2VNYXN0ZXJWb2x1bWUocC5NVik7XG5cbi8vIGNoYW5nZVJldmVyYkdhaW4ocC5SRyk7XG4vLyBjaGFuZ2VSZXZlcmJJbXB1bHNlKHAuUk4pO1xuXG4vLyBjaGFuZ2VSb29tKHAuQ0cpO1xuLy8gY2hhbmdlQ2FiaW5ldFNpbUltcHVsc2UocC5DTik7XG5cbi8vIGNoYW5nZUVRVmFsdWVzKHAuRVEpOyIsImNvbnN0IERJU1RPUlRJT05fVFlQRVMgPSB7XG4gIEFTWU1FVFJJQzogJ2FzeW1ldHJpYycsXG4gIFNUQU5EQVJEOiAnc3RhbmRhcmQnLFxuICBTVVBFUl9DTEVBTjogJ3N1cGVyQ2xlYW4nLFxuICBDTEVBTjogJ2NsZWFuJyxcbiAgU01PT1RIOiAnc21vb3RoJyxcbiAgRlVaWjogJ2Z1enonLFxuICBTVVBFUkZVWlo6ICdzdXBlckZ1enonLFxuICBDUlVOQ0g6ICdjcnVuY2gnLFxuICBOT1RfU09fRElTVE9SVEVEOiAnbm90U29EaXN0b3J0ZWQnLFxuICBTVEFOREFSRF9MT1c6ICdzdGFuZGFyZExvdycsXG4gIEhJR0hfR0FJTjogJ2hpZ2hHYWluJyxcbiAgSElHSF9HQUlOX01PREVSTjogJ2hpZ2hHYWluTW9kZXJuJyxcbiAgQkVaSUVSOiAnYmV6aWVyJyxcbiAgQ0xBU1NfQTogJ2NsYXNzQScsXG4gIFZFUlRJQ0FMOiAndmVydGljYWwnLFxufTtcblxuY29uc3QgZ2V0RGlzdG9ydGlvblR5cGVHZW5lcmF0ZUZ1bmN0aW9uID0gKHR5cGUpPT4ge1xuICByZXR1cm4ge1xuICAgIFtESVNUT1JUSU9OX1RZUEVTLlNUQU5EQVJEXTogKGludGVuc2l0eSk9PiB7XG4gICAgICBjb25zdCBhbW91bnQgPSA0NDEwMDtcbiAgICAgIGNvbnN0IGRlZyA9IE1hdGguUEkgLyAxODA7XG4gICAgICBjb25zdCBjdXJ2ZSA9IG5ldyBGbG9hdDMyQXJyYXkoYW1vdW50KTtcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbW91bnQ7ICsraSkge1xuICAgICAgICBsZXQgeCA9IGkgKiAyIC8gYW1vdW50IC0gMTtcbiAgICAgICAgY3VydmVbaV0gPSAoMyArIGludGVuc2l0eSkgKiB4ICogNTcgKiBkZWcgLyAoTWF0aC5QSSArIGludGVuc2l0eSAqIE1hdGguYWJzKHgpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjdXJ2ZTtcbiAgICB9LFxuICAgIFtESVNUT1JUSU9OX1RZUEVTLkhJR0hfR0FJTl06IChpbnRlbnMpPT4ge1xuICAgICAgY29uc3QgaW50ZW5zaXR5ID0gaW50ZW5zIC8gMTUzICogMTA7XG4gICAgICBjb25zdCBhbW91bnQgPSAyMjA1MDtcbiAgICAgIGNvbnN0IGN1cnZlID0gbmV3IEZsb2F0MzJBcnJheShhbW91bnQpO1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgYW1vdW50ID4gaTsgaSArPSAxKSB7XG4gICAgICAgIGN1cnZlW2ldID0gKDIgKiBpIC8gYW1vdW50IC0gMSA8IDAgPyAtMSA6IDEpICogaW50ZW5zaXR5O1xuICAgICAgfVxuICAgICAgcmV0dXJuIGN1cnZlO1xuICAgIH0sXG4gICAgW0RJU1RPUlRJT05fVFlQRVMuSElHSF9HQUlOX01PREVSTl06IChpbnRlbnMpPT4ge1xuICAgICAgbGV0IGludGVuc2l0eSA9IGludGVucyAvIDI7XG4gICAgICBpbnRlbnNpdHkgPSAxIC8gKDEgKyBNYXRoLnBvdyhpbnRlbnNpdHksIDQpKTtcbiAgICAgIGNvbnN0IGFtb3VudCA9IDIyMDUwO1xuICAgICAgY29uc3QgY3VydmUgPSBuZXcgRmxvYXQzMkFycmF5KGFtb3VudCk7XG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBhbW91bnQgPiBpOyBpICs9IDEpIHtcbiAgICAgICAgbGV0IHggPSAyICogaSAvIGFtb3VudCAtIDE7XG4gICAgICAgIGN1cnZlW2ldID0geCAvIChNYXRoLmFicyh4KSArIGludGVuc2l0eSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gY3VydmU7XG4gICAgfSxcbiAgICAvLyBhbW91bnQgbm90IHJlbGV2YW50LCBhc3ltZXRyaWMgZml4ZWQgY3VydmUsIGhlbHBmdWwgdG8gZ2VuZXJhdGUgT0REIGhhcm1vbmljc1xuICAgIFtESVNUT1JUSU9OX1RZUEVTLkFTWU1FVFJJQ106IChpbnRlbnMpPT4ge1xuICAgICAgbGV0IGludGVuc2l0eSA9IGludGVucyAvIDE1MDA7XG4gICAgICBsZXQgY3VydmUgPSBuZXcgRmxvYXQzMkFycmF5KDQ0MTAwKTtcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbnRlbnNpdHk7IGkrKykge1xuICAgICAgICBsZXQgeCA9IGkgKiAyIC8gaW50ZW5zaXR5IC0gMTtcbiAgICAgICAgaWYgKHggPCAtMC4wODkwNSkge1xuICAgICAgICAgIGN1cnZlW2ldID0gKC0zIC8gNCkgKiAoMSAtIChNYXRoLnBvdygoMSAtIChNYXRoLmFicyh4KSAtIDAuMDMyODU3KSksIDEyKSkgKyAoMSAvIDMpICogKE1hdGguYWJzKHgpIC0gMC4wMzI4NDcpKSArIDAuMDE7XG4gICAgICAgIH0gZWxzZSBpZiAoeCA+PSAtMC4wODkwNSAmJiB4IDwgMC4zMjAwMTgpIHtcbiAgICAgICAgICBjdXJ2ZVtpXSA9ICgtNi4xNTMgKiAoeCAqIHgpKSArIDMuOTM3NSAqIHg7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY3VydmVbaV0gPSAwLjYzMDAzNTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGN1cnZlO1xuICAgIH0sXG4gIH1bdHlwZV0gfHwgKCgpPT4ge30pO1xufTtcblxuZXhwb3J0IHtcbiAgRElTVE9SVElPTl9UWVBFUyxcbiAgZ2V0RGlzdG9ydGlvblR5cGVHZW5lcmF0ZUZ1bmN0aW9uLFxufTtcbiIsIlxuaW1wb3J0IEVxdWFsaXplciBmcm9tICcuL2F1ZGlvLW5vZGVzL2VmZmVjdHMvRXF1YWxpemVyJztcbmltcG9ydCBEZWxheSBmcm9tICcuL2F1ZGlvLW5vZGVzL2VmZmVjdHMvRGVsYXknO1xuaW1wb3J0IEZsYW5nZXIgZnJvbSAnLi9hdWRpby1ub2Rlcy9lZmZlY3RzL0ZsYW5nZXInO1xuaW1wb3J0IElucHV0IGZyb20gJy4vYXVkaW8tbm9kZXMvZWZmZWN0cy9JbnB1dCc7XG5pbXBvcnQgT3V0cHV0IGZyb20gJy4vYXVkaW8tbm9kZXMvZWZmZWN0cy9PdXRwdXQnO1xuaW1wb3J0IFByZXNlbmNlIGZyb20gJy4vYXVkaW8tbm9kZXMvZWZmZWN0cy9QcmVzZW5jZSc7XG5pbXBvcnQgUmV2ZXJiIGZyb20gJy4vYXVkaW8tbm9kZXMvZWZmZWN0cy9SZXZlcmInO1xuaW1wb3J0IFRyZW1vbG8gZnJvbSAnLi9hdWRpby1ub2Rlcy9lZmZlY3RzL1RyZW1vbG8nO1xuaW1wb3J0IFZvbHVtZSBmcm9tICcuL2F1ZGlvLW5vZGVzL2VmZmVjdHMvVm9sdW1lJztcbmltcG9ydCB7aGFzQXVkaW9Db250ZXh0LCBoYXNHZXRVc2VyTWVkaWEsIGRldmljZUxpc3QsIGRldmljZUxpc3RIYW5kbGVyfSBmcm9tICcuL1V0aWwnO1xuaW1wb3J0IERpc3RvcnRpb24gZnJvbSAnLi9hdWRpby1ub2Rlcy9lZmZlY3RzL0Rpc3RvcnRpb24nO1xuaW1wb3J0IHtESVNUT1JUSU9OX1RZUEVTfSBmcm9tICcuL2F1ZGlvLW5vZGVzL2ZhY3Rvcmllcy9EaXN0b3J0aW9uR2VuZXJhdG9yJztcbmltcG9ydCBBbXAgZnJvbSAnLi9hdWRpby1ub2Rlcy9hbXAvQW1wJztcbmltcG9ydCB7QU1QX1RZUEVTfSBmcm9tICcuL2F1ZGlvLW5vZGVzL2ZhY3Rvcmllcy9BbXBHZW5lcmF0b3InO1xuXG5leHBvcnQge1xuICBFcXVhbGl6ZXIsXG4gIERlbGF5LFxuICBEaXN0b3J0aW9uLFxuICBGbGFuZ2VyLFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBQcmVzZW5jZSxcbiAgUmV2ZXJiLFxuICBUcmVtb2xvLFxuICBWb2x1bWUsXG4gIGhhc0F1ZGlvQ29udGV4dCxcbiAgaGFzR2V0VXNlck1lZGlhLFxuICBkZXZpY2VMaXN0LFxuICBkZXZpY2VMaXN0SGFuZGxlcixcbiAgRElTVE9SVElPTl9UWVBFUyxcbiAgQW1wLFxuICBBTVBfVFlQRVMsXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==