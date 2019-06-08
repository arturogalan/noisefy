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
exports.deviceListHandler = exports.deviceList = exports.hasAudioContext = exports.getUserMedia = exports.hasGetUserMedia = void 0;

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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

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
 * You can set the input node (effect.node) and the output node of the effect (effect.output).
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
        this.node.connect(node.node);
      } else {
        this.node.connect(node);
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
    // constructor(audioContext) {
    //   super(audioContext);
    // }

    /**
       * Getter for the effects output node.
       * @return {AudioNode}
       */
    get: function get() {
      return this._outputNode;
    },
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
 * The audio-effects distortion class.
 * This class lets you add a distortion effect.
 */
var Distortion =
/*#__PURE__*/
function (_MultiAudioNode) {
  _inherits(Distortion, _MultiAudioNode);

  // private _intensity: number;
  // private _gain: number;
  // private _lowPassFilter: boolean;
  function Distortion(audioContext) {
    var _this;

    _classCallCheck(this, Distortion);

    _this = _possibleConstructorReturn(this, (Distortion.__proto__ || Object.getPrototypeOf(Distortion)).call(this, audioContext));
    _this.nodes = {
      waveshaper: _this.audioContext.createWaveShaper(),
      // Create the waveshaper-node we'll use to create the distortion effect.
      gainNode: _this.audioContext.createGain(),
      // Create the gain-nodes we use to increase the gain.
      gainNode2: _this.audioContext.createGain(),
      biquadFilterNode: _this.audioContext.createBiquadFilter() // Create the biquad-filter-node we'll use to create a lowpass filter.

    }; // Set the oversample value to 4x by default.

    _this.nodes.waveshaper.oversample = '4x'; // Set the type of to lowpass by default.

    _this.nodes.biquadFilterNode.type = 'lowpass'; // Set the frequency value to 2000 by default.

    _this.nodes.biquadFilterNode.frequency.value = 2000; // Connect all nodes together

    _this.nodes.waveshaper.connect(_this.nodes.gainNode);

    _this.nodes.gainNode.connect(_this.nodes.gainNode2);

    _this.nodes.gainNode2.connect(_this.nodes.biquadFilterNode); // Set the waveshaper-node as the input-node.


    _this.node = _this.nodes.waveshaper; // Set the biquad-filter-node as the output-node.

    _this.output = _this.nodes.biquadFilterNode; // The default intensity is 100.

    _this.intensity = 100; // The default gain is 1.

    _this.gain = 50; // // The lowpass filter is turned off by default.

    _this.lowPassFilter = false;
    return _this;
  }
  /**
   * Calculate a distortion curve.
   *
   * http://stackoverflow.com/questions/22312841/waveshaper-node-in-webaudio-how-to-emulate-distortion
   *
   * @param  {number} intens The intensity of the curve modification.
   * @return {Float32Array}
   */


  _createClass(Distortion, [{
    key: "calculateDistortionCurve",
    value: function calculateDistortionCurve(intens) {
      var intensity = parseInt(intens) || 100;
      var amount = 44100;
      var deg = Math.PI / 180;
      var curve = new Float32Array(amount);
      var i = 0;
      var x;

      for (; i < amount; ++i) {
        x = i * 2 / amount - 1;
        curve[i] = (3 + intensity) * x * 20 * deg / (Math.PI + intensity * Math.abs(x));
      }

      return curve;
    }
    /**
     * Getter for the effect's intensity.
     * @return {number}
     */

  }, {
    key: "intensity",
    get: function get() {
      return this._intensity;
    }
    /**
     * @param  {number} intensity
     * Setter for the effect's intensity.
     */
    ,
    set: function set(intensity) {
      // Set the internal intensity value.
      this._intensity = parseInt(intensity); // Set the new curve of the waveshaper-node

      this.nodes.waveshaper.curve = this.calculateDistortionCurve(this._intensity);
    }
    /**
     * Getter for the effect's gain.
     * @return {number}
     */

  }, {
    key: "gain",
    get: function get() {
      return this._gain;
    }
    /**
     * Setter for the effect's gain.
     * @param  {number} gain
     */
    ,
    set: function set(gain) {
      // Set the internal gain value.
      this._gain = parseFloat(gain); // Set the gain-node's gain value.

      this.nodes.gainNode.gain.value = this._gain;
      this.nodes.gainNode2.gain.value = 1 / this._gain;
    }
    /**
     * Getter for the lowpass filter.
     * @return {boolean}
     */

  }, {
    key: "lowPassFilter",
    get: function get() {
      return this._lowPassFilter;
    }
    /**
     * Setter for the lowpass filter.
     * @param {boolean} lowPassFilter
     */
    ,
    set: function set(lowPassFilter) {
      // Set the internal lowpass filter value.
      this._lowPassFilter = !!lowPassFilter; // Set the biquad-filter-node's frequency.

      this.nodes.biquadFilterNode.frequency.value = this._lowPassFilter ? 2000 : 1000;
    }
  }]);

  return Distortion;
}(_MultiAudioNode2.default);

exports.default = Distortion;
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
    key: "wet",

    /**
     * Getter for the effect's wetness
     * @return {number}
     */
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
      var _this2 = this;

      this.audioContext.decodeAudioData(buffer, function (buffer) {
        // Set the internal buffer value
        _this2._buffer = buffer; // Set the buffer gain-node value

        _this2.nodes.convolverNode.buffer = _this2._buffer;
      });
    }
  }], [{
    key: "getInputResponseFile",
    value: function getInputResponseFile(file) {
      return fetch(file, {
        method: 'get'
      }).then(function (response) {
        return response.arrayBuffer();
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

    _this.node = _this.audioContext.createGain(); // The initial volume level is 100%.

    _this.level = 1; // The effect is not muted by default.

    _this.mute = false;
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
      var vol = parseFloat(volume);
      vol = vol >= 0 ? vol : 0; // Set the internal volume value.

      this._level = vol; // Set the gainNode's gain value.

      this.node.gain.value = vol; // Set the internal mute value.

      this._mute = vol === 0;
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
      // Set the internal mute value.
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
Object.defineProperty(exports, "Delay", {
  enumerable: true,
  get: function get() {
    return _Delay.default;
  }
});
Object.defineProperty(exports, "Distortion", {
  enumerable: true,
  get: function get() {
    return _Distortion.default;
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

var _Delay = _interopRequireDefault(__webpack_require__(/*! ./audio-nodes/effects/Delay */ "./src/audio-nodes/effects/Delay.js"));

var _Distortion = _interopRequireDefault(__webpack_require__(/*! ./audio-nodes/effects/Distortion */ "./src/audio-nodes/effects/Distortion.js"));

var _Flanger = _interopRequireDefault(__webpack_require__(/*! ./audio-nodes/effects/Flanger */ "./src/audio-nodes/effects/Flanger.js"));

var _Input = _interopRequireDefault(__webpack_require__(/*! ./audio-nodes/effects/Input */ "./src/audio-nodes/effects/Input.js"));

var _Output = _interopRequireDefault(__webpack_require__(/*! ./audio-nodes/effects/Output */ "./src/audio-nodes/effects/Output.js"));

var _Reverb = _interopRequireDefault(__webpack_require__(/*! ./audio-nodes/effects/Reverb */ "./src/audio-nodes/effects/Reverb.js"));

var _Tremolo = _interopRequireDefault(__webpack_require__(/*! ./audio-nodes/effects/Tremolo */ "./src/audio-nodes/effects/Tremolo.js"));

var _Volume = _interopRequireDefault(__webpack_require__(/*! ./audio-nodes/effects/Volume */ "./src/audio-nodes/effects/Volume.js"));

var _Util = __webpack_require__(/*! ./Util */ "./src/Util.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ub2lzZWZ5L3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9ub2lzZWZ5L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL25vaXNlZnkvKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIiwid2VicGFjazovL25vaXNlZnkvLi9zcmMvVXRpbC5qcyIsIndlYnBhY2s6Ly9ub2lzZWZ5Ly4vc3JjL2F1ZGlvLW5vZGVzL011bHRpQXVkaW9Ob2RlLmpzIiwid2VicGFjazovL25vaXNlZnkvLi9zcmMvYXVkaW8tbm9kZXMvU2luZ2xlQXVkaW9Ob2RlLmpzIiwid2VicGFjazovL25vaXNlZnkvLi9zcmMvYXVkaW8tbm9kZXMvZWZmZWN0cy9EZWxheS5qcyIsIndlYnBhY2s6Ly9ub2lzZWZ5Ly4vc3JjL2F1ZGlvLW5vZGVzL2VmZmVjdHMvRGlzdG9ydGlvbi5qcyIsIndlYnBhY2s6Ly9ub2lzZWZ5Ly4vc3JjL2F1ZGlvLW5vZGVzL2VmZmVjdHMvRmxhbmdlci5qcyIsIndlYnBhY2s6Ly9ub2lzZWZ5Ly4vc3JjL2F1ZGlvLW5vZGVzL2VmZmVjdHMvSW5wdXQuanMiLCJ3ZWJwYWNrOi8vbm9pc2VmeS8uL3NyYy9hdWRpby1ub2Rlcy9lZmZlY3RzL091dHB1dC5qcyIsIndlYnBhY2s6Ly9ub2lzZWZ5Ly4vc3JjL2F1ZGlvLW5vZGVzL2VmZmVjdHMvUmV2ZXJiLmpzIiwid2VicGFjazovL25vaXNlZnkvLi9zcmMvYXVkaW8tbm9kZXMvZWZmZWN0cy9UcmVtb2xvLmpzIiwid2VicGFjazovL25vaXNlZnkvLi9zcmMvYXVkaW8tbm9kZXMvZWZmZWN0cy9Wb2x1bWUuanMiLCJ3ZWJwYWNrOi8vbm9pc2VmeS8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJ3aW4iLCJ3aW5kb3ciLCJnbG9iYWwiLCJnZXRVc2VyTWVkaWEiLCJuYXZpZ2F0b3IiLCJtb3pHZXRVc2VyTWVkaWEiLCJ3ZWJraXRHZXRVc2VyTWVkaWEiLCJtc0dldFVzZXJNZWRpYSIsImhhc0dldFVzZXJNZWRpYSIsImF1ZGlvQ29udGV4dCIsIkF1ZGlvQ29udGV4dCIsIndlYmtpdEF1ZGlvQ29udGV4dCIsIm1vekF1ZGlvQ29udGV4dCIsIm1zQXVkaW9Db250ZXh0IiwiaGFzQXVkaW9Db250ZXh0IiwiZGV2aWNlTGlzdCIsIm1lZGlhRGV2aWNlcyIsImVudW1lcmF0ZURldmljZXMiLCJ0aGVuIiwiZGV2aWNlcyIsIlByb21pc2UiLCJyZXNvbHZlIiwibWFwIiwiZGV2aWNlIiwia2luZCIsIm1hdGNoIiwidHlwZSIsImRpcmVjdGlvbiIsImRldmljZUlkIiwiZ3JvdXBJZCIsImxhYmVsIiwiY2FwYWJpbGl0aWVzIiwiZ2V0Q2FwYWJpbGl0aWVzIiwiZGV2aWNlTGlzdEhhbmRsZXIiLCJjYWxsYmFjayIsIm9uZGV2aWNlY2hhbmdlIiwiZXZlbnQiLCJsaXN0IiwiTXVsdGlBdWRpb05vZGUiLCJub2RlIiwiY29ubmVjdCIsIm91dHB1dCIsImRpc2Nvbm5lY3QiLCJPYmplY3QiLCJrZXlzIiwibm9kZXMiLCJmb3JFYWNoIiwiX291dHB1dE5vZGUiLCJTaW5nbGVBdWRpb05vZGUiLCJfYXVkaW9Db250ZXh0IiwiX25vZGUiLCJEZWxheSIsImlucHV0R2Fpbk5vZGUiLCJjcmVhdGVHYWluIiwib3V0cHV0R2Fpbk5vZGUiLCJ3ZXRHYWluTm9kZSIsImR1cmF0aW9uR2Fpbk5vZGUiLCJkZWxheU5vZGUiLCJjcmVhdGVEZWxheSIsIndldCIsInNwZWVkIiwiZHVyYXRpb24iLCJfd2V0Iiwid2V0bmVzcyIsInBhcnNlRmxvYXQiLCJnYWluIiwidmFsdWUiLCJfc3BlZWQiLCJkZWxheVRpbWUiLCJfZHVyYXRpb24iLCJEaXN0b3J0aW9uIiwid2F2ZXNoYXBlciIsImNyZWF0ZVdhdmVTaGFwZXIiLCJnYWluTm9kZSIsImdhaW5Ob2RlMiIsImJpcXVhZEZpbHRlck5vZGUiLCJjcmVhdGVCaXF1YWRGaWx0ZXIiLCJvdmVyc2FtcGxlIiwiZnJlcXVlbmN5IiwiaW50ZW5zaXR5IiwibG93UGFzc0ZpbHRlciIsImludGVucyIsInBhcnNlSW50IiwiYW1vdW50IiwiZGVnIiwiTWF0aCIsIlBJIiwiY3VydmUiLCJGbG9hdDMyQXJyYXkiLCJpIiwieCIsImFicyIsIl9pbnRlbnNpdHkiLCJjYWxjdWxhdGVEaXN0b3J0aW9uQ3VydmUiLCJfZ2FpbiIsIl9sb3dQYXNzRmlsdGVyIiwiRmxhbmdlciIsImZlZWRiYWNrR2Fpbk5vZGUiLCJvc2NpbGxhdG9yTm9kZSIsImNyZWF0ZU9zY2lsbGF0b3IiLCJzdGFydCIsImRlbGF5IiwiZGVwdGgiLCJmZWVkYmFjayIsIl9kZWxheSIsIl9kZXB0aCIsIl9mZWVkYmFjayIsIklucHV0IiwiX2RlZmVycmVkQ29ubmVjdHMiLCJfaGFzUGVybWlzc2lvbnMiLCJyZWplY3QiLCJhdWRpbyIsIm9wdGlvbmFsIiwic3RyZWFtIiwiaW5wdXQiLCJlcnJvciIsIkVycm9yIiwicHVzaCIsImZpbHRlciIsImNhdGNoIiwiY3JlYXRlTWVkaWFTdHJlYW1Tb3VyY2UiLCJPdXRwdXQiLCJkZXN0aW5hdGlvbiIsIlJldmVyYiIsImJ1ZmZlciIsImNvbnZvbHZlck5vZGUiLCJjcmVhdGVDb252b2x2ZXIiLCJsZXZlbEdhaW5Ob2RlIiwibGV2ZWwiLCJfbGV2ZWwiLCJfYnVmZmVyIiwiZGVjb2RlQXVkaW9EYXRhIiwiZmlsZSIsImZldGNoIiwibWV0aG9kIiwicmVzcG9uc2UiLCJhcnJheUJ1ZmZlciIsIlRyZW1vbG8iLCJWb2x1bWUiLCJtdXRlIiwidm9sdW1lIiwidm9sIiwiX211dGUiLCJfbGV2ZWxCZWZvcmVNdXRlIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNENBQTRDOztBQUU1Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25CQSxJQUFJQSxHQUFHLEdBQUcsT0FBT0MsTUFBUCxLQUFrQixXQUFsQixHQUFnQ0EsTUFBaEMsR0FBeUNDLE1BQW5EO0FBQ0E7Ozs7O0FBSUEsSUFBTUMsWUFBWSxHQUFHQyxTQUFTLENBQUNELFlBQVYsSUFDckJDLFNBQVMsQ0FBQ0MsZUFEVyxJQUVyQkQsU0FBUyxDQUFDRSxrQkFGVyxJQUdyQkYsU0FBUyxDQUFDRyxjQUhWOztBQUlBLElBQU1DLGVBQWUsR0FBRyxDQUFDLENBQUNMLFlBQTFCO0FBQ0E7Ozs7O0FBR0EsSUFBTU0sWUFBWSxHQUFHVCxHQUFHLENBQUNVLFlBQUosSUFDbkJWLEdBQUcsQ0FBQ1csa0JBRGUsSUFFbkJYLEdBQUcsQ0FBQ1ksZUFGZSxJQUduQlosR0FBRyxDQUFDYSxjQUhOO0FBS0EsSUFBTUMsZUFBZSxHQUFHLENBQUMsQ0FBQ0wsWUFBMUI7OztBQUVBLElBQU1NLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQVc7QUFDNUIsU0FBT1gsU0FBUyxDQUFDWSxZQUFWLENBQXVCQyxnQkFBdkIsR0FBMENDLElBQTFDLENBQStDLFVBQUNDLE9BQUQsRUFBWTtBQUNoRSxXQUFPQyxPQUFPLENBQUNDLE9BQVIsQ0FBZ0JGLE9BQU8sQ0FBQ0csR0FBUixDQUFZLFVBQUNDLE1BQUQsRUFBVztBQUFBLCtCQUNkQSxNQUFNLENBQUNDLElBQVAsQ0FBWUMsS0FBWixDQUFrQixzQkFBbEIsQ0FEYztBQUFBO0FBQUEsVUFDdkNELElBRHVDO0FBQUEsVUFDakNFLElBRGlDO0FBQUEsVUFDM0JDLFNBRDJCOztBQUU1QyxhQUFPO0FBQ0xILFlBQUksRUFBSkEsSUFESztBQUVMRSxZQUFJLEVBQUpBLElBRks7QUFHTEMsaUJBQVMsRUFBVEEsU0FISztBQUlMQyxnQkFBUSxFQUFFTCxNQUFNLENBQUNLLFFBSlo7QUFLTEMsZUFBTyxFQUFFTixNQUFNLENBQUNNLE9BTFg7QUFNTEMsYUFBSyxFQUFFUCxNQUFNLENBQUNPLEtBTlQ7QUFPTEMsb0JBQVksRUFBRVIsTUFBTSxDQUFDUyxlQUFQLEdBQXlCVCxNQUFNLENBQUNTLGVBQVAsRUFBekIsR0FBb0Q7QUFQN0QsT0FBUDtBQVNELEtBWHNCLENBQWhCLENBQVA7QUFZRCxHQWJNLENBQVA7QUFjRCxDQWZEOzs7O0FBZ0JBLElBQU1DLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsQ0FBU0MsUUFBVCxFQUFtQjtBQUMzQzlCLFdBQVMsQ0FBQ1ksWUFBVixDQUF1Qm1CLGNBQXZCLEdBQXdDLFVBQVNDLEtBQVQsRUFBZ0I7QUFDdERyQixjQUFVLEdBQUdHLElBQWIsQ0FBa0IsVUFBQ21CLElBQUQsRUFBUztBQUN6QkgsY0FBUSxDQUFDRyxJQUFELEVBQU9ELEtBQVAsQ0FBUjtBQUNELEtBRkQ7QUFHRCxHQUpEO0FBS0QsQ0FORDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25DQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTs7Ozs7OztJQU9xQkUsYzs7Ozs7Ozs7Ozs7Ozs7QUFpQm5COzs7Ozs0QkFLUUMsSSxFQUFNO0FBQ1osVUFBSUEsSUFBSSxxQ0FBSixJQUFtQ0EsSUFBSSxZQUFZRCxjQUF2RCxFQUF1RTtBQUNyRSxhQUFLQyxJQUFMLENBQVVDLE9BQVYsQ0FBa0JELElBQUksQ0FBQ0EsSUFBdkI7QUFDRCxPQUZELE1BRU87QUFDTCxhQUFLQSxJQUFMLENBQVVDLE9BQVYsQ0FBa0JELElBQWxCO0FBQ0Q7O0FBQ0QsYUFBT0EsSUFBUDtBQUNEO0FBRUQ7Ozs7Ozs7aUNBSWE7QUFDWCxXQUFLRSxNQUFMLENBQVlDLFVBQVo7QUFDQSxhQUFPLEtBQUtELE1BQVo7QUFDRDtBQUVEOzs7Ozs7OzhCQUlVO0FBQUE7O0FBQ1JFLFlBQU0sQ0FBQ0MsSUFBUCxDQUFZLEtBQUtDLEtBQWpCLEVBQXdCQyxPQUF4QixDQUFnQyxVQUFDUCxJQUFELEVBQVM7QUFDdkMsWUFBSSxLQUFJLENBQUNNLEtBQUwsQ0FBV04sSUFBWCxFQUFpQkcsVUFBakIsSUFBK0IsT0FBTyxLQUFJLENBQUNHLEtBQUwsQ0FBV04sSUFBWCxFQUFpQkcsVUFBeEIsS0FBdUMsVUFBMUUsRUFBc0Y7QUFDcEYsZUFBSSxDQUFDRyxLQUFMLENBQVdOLElBQVgsRUFBaUJHLFVBQWpCO0FBQ0Q7QUFDRixPQUpEO0FBTUEsYUFBTyxLQUFLQSxVQUFMLEVBQVA7QUFDRDs7O0FBbkREO0FBQ0E7QUFDQTs7QUFFQTs7Ozt3QkFJYTtBQUNYLGFBQU8sS0FBS0ssV0FBWjtBQUNELEs7c0JBRVVOLE0sRUFBUTtBQUNqQixXQUFLTSxXQUFMLEdBQW1CTixNQUFuQjtBQUNEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pCSDs7Ozs7SUFLcUJPLGU7OztBQUNuQjtBQUVBLDJCQUFZdkMsWUFBWixFQUEwQjtBQUFBOztBQUN4QjtBQUNBLFNBQUt3QyxhQUFMLEdBQXFCeEMsWUFBckI7QUFDRDtBQUVEOzs7Ozs7Ozs7QUFnQ0E7Ozs7OzRCQUtROEIsSSxFQUFNO0FBQ1osVUFBSUEsSUFBSSxZQUFZUyxlQUFwQixFQUFxQztBQUNuQyxhQUFLVCxJQUFMLENBQVVDLE9BQVYsQ0FBa0JELElBQUksQ0FBQ0EsSUFBdkI7QUFDRCxPQUZELE1BRU87QUFDTCxhQUFLQSxJQUFMLENBQVVDLE9BQVYsQ0FBa0JELElBQWxCO0FBQ0Q7O0FBQ0QsYUFBT0EsSUFBUDtBQUNEO0FBRUQ7Ozs7Ozs7aUNBSWE7QUFDWCxXQUFLQSxJQUFMLENBQVVHLFVBQVY7QUFDQSxhQUFPLEtBQUtILElBQVo7QUFDRDtBQUVEOzs7Ozs7OzhCQUlVO0FBQ1IsYUFBTyxLQUFLRyxVQUFMLEVBQVA7QUFDRDs7O3dCQXpEa0I7QUFDakIsYUFBTyxLQUFLTyxhQUFaO0FBQ0Q7QUFFRDs7Ozs7c0JBSWlCeEMsWSxFQUFjO0FBQzdCLFdBQUt3QyxhQUFMLEdBQXFCeEMsWUFBckI7QUFDRDtBQUVEOzs7Ozs7O3dCQUlXO0FBQ1QsYUFBTyxLQUFLeUMsS0FBWjtBQUNEO0FBRUQ7Ozs7O3NCQUlTWCxJLEVBQU07QUFDYixXQUFLVyxLQUFMLEdBQWFYLElBQWI7QUFDRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzQ0g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7Ozs7SUFJcUJZLEs7Ozs7O0FBQ25CO0FBQ0E7QUFDQTtBQUVBLGlCQUFZMUMsWUFBWixFQUEwQjtBQUFBOztBQUFBOztBQUN4QiwwR0FBTUEsWUFBTjtBQUVBLFVBQUtvQyxLQUFMLEdBQWE7QUFDWE8sbUJBQWEsRUFBRTNDLFlBQVksQ0FBQzRDLFVBQWIsRUFESjtBQUMrQjtBQUMxQ0Msb0JBQWMsRUFBRTdDLFlBQVksQ0FBQzRDLFVBQWIsRUFGTDtBQUdYRSxpQkFBVyxFQUFFOUMsWUFBWSxDQUFDNEMsVUFBYixFQUhGO0FBRzZCO0FBQ3hDRyxzQkFBZ0IsRUFBRS9DLFlBQVksQ0FBQzRDLFVBQWIsRUFKUDtBQUlrQztBQUM3Q0ksZUFBUyxFQUFFaEQsWUFBWSxDQUFDaUQsV0FBYixFQUxBLENBSzRCOztBQUw1QixLQUFiLENBSHdCLENBV3hCOztBQUNBLFVBQUtiLEtBQUwsQ0FBV08sYUFBWCxDQUF5QlosT0FBekIsQ0FBaUMsTUFBS0ssS0FBTCxDQUFXVSxXQUE1Qzs7QUFDQSxVQUFLVixLQUFMLENBQVdPLGFBQVgsQ0FBeUJaLE9BQXpCLENBQWlDLE1BQUtLLEtBQUwsQ0FBV1ksU0FBNUM7O0FBQ0EsVUFBS1osS0FBTCxDQUFXVyxnQkFBWCxDQUE0QmhCLE9BQTVCLENBQW9DLE1BQUtLLEtBQUwsQ0FBV1ksU0FBL0M7O0FBQ0EsVUFBS1osS0FBTCxDQUFXWSxTQUFYLENBQXFCakIsT0FBckIsQ0FBNkIsTUFBS0ssS0FBTCxDQUFXVyxnQkFBeEM7O0FBQ0EsVUFBS1gsS0FBTCxDQUFXWSxTQUFYLENBQXFCakIsT0FBckIsQ0FBNkIsTUFBS0ssS0FBTCxDQUFXUyxjQUF4Qzs7QUFDQSxVQUFLVCxLQUFMLENBQVdVLFdBQVgsQ0FBdUJmLE9BQXZCLENBQStCLE1BQUtLLEtBQUwsQ0FBV1MsY0FBMUMsRUFqQndCLENBbUJ4Qjs7O0FBQ0EsVUFBS2YsSUFBTCxHQUFZLE1BQUtNLEtBQUwsQ0FBV08sYUFBdkIsQ0FwQndCLENBcUJ4Qjs7QUFDQSxVQUFLWCxNQUFMLEdBQWMsTUFBS0ksS0FBTCxDQUFXUyxjQUF6QixDQXRCd0IsQ0F3QnhCOztBQUNBLFVBQUtLLEdBQUwsR0FBVyxDQUFYLENBekJ3QixDQTJCeEI7O0FBQ0EsVUFBS0MsS0FBTCxHQUFhLENBQWIsQ0E1QndCLENBOEJ4Qjs7QUFDQSxVQUFLQyxRQUFMLEdBQWdCLEdBQWhCO0FBL0J3QjtBQWdDekI7QUFFRDs7Ozs7Ozs7d0JBSVU7QUFDUixhQUFPLEtBQUtDLElBQVo7QUFDRDtBQUVEOzs7OztzQkFJUUMsTyxFQUFTO0FBQ2Y7QUFDQSxXQUFLRCxJQUFMLEdBQVlFLFVBQVUsQ0FBQ0QsT0FBRCxDQUF0QixDQUZlLENBSWY7O0FBQ0EsV0FBS2xCLEtBQUwsQ0FBV1UsV0FBWCxDQUF1QlUsSUFBdkIsQ0FBNEJDLEtBQTVCLEdBQW9DLEtBQUtKLElBQXpDO0FBQ0Q7QUFFRDs7Ozs7Ozt3QkFJWTtBQUNWLGFBQU8sS0FBS0ssTUFBWjtBQUNEO0FBRUQ7Ozs7O3NCQUlVUCxLLEVBQU87QUFDZjtBQUNBLFdBQUtPLE1BQUwsR0FBY0gsVUFBVSxDQUFDSixLQUFELENBQXhCLENBRmUsQ0FJZjs7QUFDQSxXQUFLZixLQUFMLENBQVdZLFNBQVgsQ0FBcUJXLFNBQXJCLENBQStCRixLQUEvQixHQUF1QyxLQUFLQyxNQUE1QztBQUNEO0FBRUQ7Ozs7Ozs7d0JBSWU7QUFDYixhQUFPLEtBQUtFLFNBQVo7QUFDRDtBQUVEOzs7OztzQkFJYVIsUSxFQUFVO0FBQ3JCO0FBQ0EsV0FBS1EsU0FBTCxHQUFpQkwsVUFBVSxDQUFDSCxRQUFELENBQTNCLENBRnFCLENBSXJCOztBQUNBLFdBQUtoQixLQUFMLENBQVdXLGdCQUFYLENBQTRCUyxJQUE1QixDQUFpQ0MsS0FBakMsR0FBeUMsS0FBS0csU0FBOUM7QUFDRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2R0g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7Ozs7SUFJcUJDLFU7Ozs7O0FBQ25CO0FBQ0E7QUFDQTtBQUVBLHNCQUFZN0QsWUFBWixFQUEwQjtBQUFBOztBQUFBOztBQUN4QixvSEFBTUEsWUFBTjtBQUVBLFVBQUtvQyxLQUFMLEdBQWE7QUFDWDBCLGdCQUFVLEVBQUUsTUFBSzlELFlBQUwsQ0FBa0IrRCxnQkFBbEIsRUFERDtBQUN1QztBQUNsREMsY0FBUSxFQUFFLE1BQUtoRSxZQUFMLENBQWtCNEMsVUFBbEIsRUFGQztBQUUrQjtBQUMxQ3FCLGVBQVMsRUFBRSxNQUFLakUsWUFBTCxDQUFrQjRDLFVBQWxCLEVBSEE7QUFJWHNCLHNCQUFnQixFQUFFLE1BQUtsRSxZQUFMLENBQWtCbUUsa0JBQWxCLEVBSlAsQ0FJK0M7O0FBSi9DLEtBQWIsQ0FId0IsQ0FVeEI7O0FBQ0EsVUFBSy9CLEtBQUwsQ0FBVzBCLFVBQVgsQ0FBc0JNLFVBQXRCLEdBQW1DLElBQW5DLENBWHdCLENBYXhCOztBQUNBLFVBQUtoQyxLQUFMLENBQVc4QixnQkFBWCxDQUE0QmpELElBQTVCLEdBQW1DLFNBQW5DLENBZHdCLENBZ0J4Qjs7QUFDQSxVQUFLbUIsS0FBTCxDQUFXOEIsZ0JBQVgsQ0FBNEJHLFNBQTVCLENBQXNDWixLQUF0QyxHQUE4QyxJQUE5QyxDQWpCd0IsQ0FtQnhCOztBQUNBLFVBQUtyQixLQUFMLENBQVcwQixVQUFYLENBQXNCL0IsT0FBdEIsQ0FBOEIsTUFBS0ssS0FBTCxDQUFXNEIsUUFBekM7O0FBQ0EsVUFBSzVCLEtBQUwsQ0FBVzRCLFFBQVgsQ0FBb0JqQyxPQUFwQixDQUE0QixNQUFLSyxLQUFMLENBQVc2QixTQUF2Qzs7QUFDQSxVQUFLN0IsS0FBTCxDQUFXNkIsU0FBWCxDQUFxQmxDLE9BQXJCLENBQTZCLE1BQUtLLEtBQUwsQ0FBVzhCLGdCQUF4QyxFQXRCd0IsQ0F3QnhCOzs7QUFDQSxVQUFLcEMsSUFBTCxHQUFZLE1BQUtNLEtBQUwsQ0FBVzBCLFVBQXZCLENBekJ3QixDQTBCeEI7O0FBQ0EsVUFBSzlCLE1BQUwsR0FBYyxNQUFLSSxLQUFMLENBQVc4QixnQkFBekIsQ0EzQndCLENBNkJ4Qjs7QUFDQSxVQUFLSSxTQUFMLEdBQWlCLEdBQWpCLENBOUJ3QixDQWdDeEI7O0FBQ0EsVUFBS2QsSUFBTCxHQUFZLEVBQVosQ0FqQ3dCLENBbUN4Qjs7QUFDQSxVQUFLZSxhQUFMLEdBQXFCLEtBQXJCO0FBcEN3QjtBQXFDekI7QUFFRDs7Ozs7Ozs7Ozs7OzZDQVF5QkMsTSxFQUFRO0FBQy9CLFVBQU1GLFNBQVMsR0FBR0csUUFBUSxDQUFDRCxNQUFELENBQVIsSUFBb0IsR0FBdEM7QUFDQSxVQUFNRSxNQUFNLEdBQUcsS0FBZjtBQUNBLFVBQU1DLEdBQUcsR0FBR0MsSUFBSSxDQUFDQyxFQUFMLEdBQVUsR0FBdEI7QUFDQSxVQUFNQyxLQUFLLEdBQUcsSUFBSUMsWUFBSixDQUFpQkwsTUFBakIsQ0FBZDtBQUNBLFVBQUlNLENBQUMsR0FBRyxDQUFSO0FBQ0EsVUFBSUMsQ0FBSjs7QUFFQSxhQUFPRCxDQUFDLEdBQUdOLE1BQVgsRUFBbUIsRUFBRU0sQ0FBckIsRUFBd0I7QUFDdEJDLFNBQUMsR0FBR0QsQ0FBQyxHQUFHLENBQUosR0FBUU4sTUFBUixHQUFpQixDQUFyQjtBQUNBSSxhQUFLLENBQUNFLENBQUQsQ0FBTCxHQUFXLENBQUMsSUFBSVYsU0FBTCxJQUFrQlcsQ0FBbEIsR0FBc0IsRUFBdEIsR0FBMkJOLEdBQTNCLElBQWtDQyxJQUFJLENBQUNDLEVBQUwsR0FBVVAsU0FBUyxHQUFHTSxJQUFJLENBQUNNLEdBQUwsQ0FBU0QsQ0FBVCxDQUF4RCxDQUFYO0FBQ0Q7O0FBRUQsYUFBT0gsS0FBUDtBQUNEO0FBRUQ7Ozs7Ozs7d0JBSWdCO0FBQ2QsYUFBTyxLQUFLSyxVQUFaO0FBQ0Q7QUFFRDs7Ozs7c0JBSWNiLFMsRUFBVztBQUN2QjtBQUNBLFdBQUthLFVBQUwsR0FBa0JWLFFBQVEsQ0FBQ0gsU0FBRCxDQUExQixDQUZ1QixDQUl2Qjs7QUFDQSxXQUFLbEMsS0FBTCxDQUFXMEIsVUFBWCxDQUFzQmdCLEtBQXRCLEdBQThCLEtBQUtNLHdCQUFMLENBQThCLEtBQUtELFVBQW5DLENBQTlCO0FBQ0Q7QUFFRDs7Ozs7Ozt3QkFJVztBQUNULGFBQU8sS0FBS0UsS0FBWjtBQUNEO0FBRUQ7Ozs7O3NCQUlTN0IsSSxFQUFNO0FBQ2I7QUFDQSxXQUFLNkIsS0FBTCxHQUFhOUIsVUFBVSxDQUFDQyxJQUFELENBQXZCLENBRmEsQ0FJYjs7QUFDQSxXQUFLcEIsS0FBTCxDQUFXNEIsUUFBWCxDQUFvQlIsSUFBcEIsQ0FBeUJDLEtBQXpCLEdBQWlDLEtBQUs0QixLQUF0QztBQUNBLFdBQUtqRCxLQUFMLENBQVc2QixTQUFYLENBQXFCVCxJQUFyQixDQUEwQkMsS0FBMUIsR0FBa0MsSUFBSSxLQUFLNEIsS0FBM0M7QUFDRDtBQUVEOzs7Ozs7O3dCQUlvQjtBQUNsQixhQUFPLEtBQUtDLGNBQVo7QUFDRDtBQUVEOzs7OztzQkFJa0JmLGEsRUFBZTtBQUMvQjtBQUNBLFdBQUtlLGNBQUwsR0FBc0IsQ0FBQyxDQUFDZixhQUF4QixDQUYrQixDQUcvQjs7QUFDQSxXQUFLbkMsS0FBTCxDQUFXOEIsZ0JBQVgsQ0FBNEJHLFNBQTVCLENBQXNDWixLQUF0QyxHQUErQyxLQUFLNkIsY0FBTCxHQUFzQixJQUF0QixHQUE2QixJQUE1RTtBQUNEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BJSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTs7OztJQUlxQkMsTzs7Ozs7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFFQSxtQkFBWXZGLFlBQVosRUFBMEI7QUFBQTs7QUFBQTs7QUFDeEIsOEdBQU1BLFlBQU47QUFFQSxVQUFLb0MsS0FBTCxHQUFhO0FBQ1hPLG1CQUFhLEVBQUUzQyxZQUFZLENBQUM0QyxVQUFiLEVBREo7QUFDK0I7QUFDMUNFLGlCQUFXLEVBQUU5QyxZQUFZLENBQUM0QyxVQUFiLEVBRkY7QUFFNkI7QUFDeENJLGVBQVMsRUFBRWhELFlBQVksQ0FBQ2lELFdBQWIsRUFIQTtBQUc0QjtBQUN2Q2UsY0FBUSxFQUFFaEUsWUFBWSxDQUFDNEMsVUFBYixFQUpDO0FBSTBCO0FBQ3JDNEMsc0JBQWdCLEVBQUV4RixZQUFZLENBQUM0QyxVQUFiLEVBTFA7QUFLa0M7QUFDN0M2QyxvQkFBYyxFQUFFekYsWUFBWSxDQUFDMEYsZ0JBQWIsRUFOTCxDQU1zQzs7QUFOdEMsS0FBYixDQUh3QixDQVl4Qjs7QUFDQSxVQUFLdEQsS0FBTCxDQUFXcUQsY0FBWCxDQUEwQjFELE9BQTFCLENBQWtDLE1BQUtLLEtBQUwsQ0FBVzRCLFFBQTdDOztBQUNBLFVBQUs1QixLQUFMLENBQVc0QixRQUFYLENBQW9CakMsT0FBcEIsQ0FBNEIsTUFBS0ssS0FBTCxDQUFXWSxTQUFYLENBQXFCVyxTQUFqRDs7QUFDQSxVQUFLdkIsS0FBTCxDQUFXTyxhQUFYLENBQXlCWixPQUF6QixDQUFpQyxNQUFLSyxLQUFMLENBQVdVLFdBQTVDOztBQUNBLFVBQUtWLEtBQUwsQ0FBV08sYUFBWCxDQUF5QlosT0FBekIsQ0FBaUMsTUFBS0ssS0FBTCxDQUFXWSxTQUE1Qzs7QUFDQSxVQUFLWixLQUFMLENBQVdZLFNBQVgsQ0FBcUJqQixPQUFyQixDQUE2QixNQUFLSyxLQUFMLENBQVdVLFdBQXhDOztBQUNBLFVBQUtWLEtBQUwsQ0FBV1ksU0FBWCxDQUFxQmpCLE9BQXJCLENBQTZCLE1BQUtLLEtBQUwsQ0FBV29ELGdCQUF4Qzs7QUFDQSxVQUFLcEQsS0FBTCxDQUFXb0QsZ0JBQVgsQ0FBNEJ6RCxPQUE1QixDQUFvQyxNQUFLSyxLQUFMLENBQVdPLGFBQS9DLEVBbkJ3QixDQXFCeEI7OztBQUNBLFVBQUtQLEtBQUwsQ0FBV3FELGNBQVgsQ0FBMEJ4RSxJQUExQixHQUFpQyxNQUFqQzs7QUFDQSxVQUFLbUIsS0FBTCxDQUFXcUQsY0FBWCxDQUEwQkUsS0FBMUIsQ0FBZ0MsQ0FBaEMsRUF2QndCLENBeUJ4Qjs7O0FBQ0EsVUFBSzdELElBQUwsR0FBWSxNQUFLTSxLQUFMLENBQVdPLGFBQXZCLENBMUJ3QixDQTRCeEI7O0FBQ0EsVUFBS1gsTUFBTCxHQUFjLE1BQUtJLEtBQUwsQ0FBV1UsV0FBekIsQ0E3QndCLENBK0J4Qjs7QUFDQSxVQUFLOEMsS0FBTCxHQUFhLEtBQWIsQ0FoQ3dCLENBa0N4Qjs7QUFDQSxVQUFLQyxLQUFMLEdBQWEsS0FBYixDQW5Dd0IsQ0FxQ3hCOztBQUNBLFVBQUtDLFFBQUwsR0FBZ0IsR0FBaEIsQ0F0Q3dCLENBd0N4Qjs7QUFDQSxVQUFLM0MsS0FBTCxHQUFhLElBQWI7QUF6Q3dCO0FBMEN6QjtBQUVEOzs7Ozs7Ozt3QkFJWTtBQUNWLGFBQU8sS0FBSzRDLE1BQVo7QUFDRDtBQUVEOzs7OztzQkFJVUgsSyxFQUFPO0FBQ2Y7QUFDQSxXQUFLRyxNQUFMLEdBQWN4QyxVQUFVLENBQUNxQyxLQUFELENBQXhCLENBRmUsQ0FJZjs7QUFDQSxXQUFLeEQsS0FBTCxDQUFXWSxTQUFYLENBQXFCVyxTQUFyQixDQUErQkYsS0FBL0IsR0FBdUMsS0FBS3NDLE1BQTVDO0FBQ0Q7QUFFRDs7Ozs7Ozt3QkFJWTtBQUNWLGFBQU8sS0FBS0MsTUFBWjtBQUNEO0FBRUQ7Ozs7O3NCQUlVSCxLLEVBQU87QUFDZjtBQUNBLFdBQUtHLE1BQUwsR0FBY3pDLFVBQVUsQ0FBQ3NDLEtBQUQsQ0FBeEIsQ0FGZSxDQUlmOztBQUNBLFdBQUt6RCxLQUFMLENBQVc0QixRQUFYLENBQW9CUixJQUFwQixDQUF5QkMsS0FBekIsR0FBaUMsS0FBS3VDLE1BQXRDO0FBQ0Q7QUFFRDs7Ozs7Ozt3QkFJZTtBQUNiLGFBQU8sS0FBS0MsU0FBWjtBQUNEO0FBRUQ7Ozs7O3NCQUlhSCxRLEVBQVU7QUFDckI7QUFDQSxXQUFLRyxTQUFMLEdBQWlCMUMsVUFBVSxDQUFDdUMsUUFBRCxDQUEzQixDQUZxQixDQUlyQjs7QUFDQSxXQUFLMUQsS0FBTCxDQUFXb0QsZ0JBQVgsQ0FBNEJoQyxJQUE1QixDQUFpQ0MsS0FBakMsR0FBeUMsS0FBS3dDLFNBQTlDO0FBQ0Q7QUFFRDs7Ozs7Ozt3QkFJWTtBQUNWLGFBQU8sS0FBS3ZDLE1BQVo7QUFDRDtBQUVEOzs7OztzQkFJVVAsSyxFQUFPO0FBQ2Y7QUFDQSxXQUFLTyxNQUFMLEdBQWNILFVBQVUsQ0FBQ0osS0FBRCxDQUF4QixDQUZlLENBSWY7O0FBQ0EsV0FBS2YsS0FBTCxDQUFXcUQsY0FBWCxDQUEwQnBCLFNBQTFCLENBQW9DWixLQUFwQyxHQUE0QyxLQUFLQyxNQUFqRDtBQUNEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JJSDs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUJ3QyxLOzs7OztBQUNuQixpQkFBWWxHLFlBQVosRUFBMEI7QUFBQTs7QUFBQTs7QUFDeEIsMEdBQU1BLFlBQU47QUFDQSxVQUFLbUcsaUJBQUwsR0FBeUIsRUFBekI7QUFDQSxVQUFLQyxlQUFMLEdBQXVCLEtBQXZCO0FBSHdCO0FBSXpCOzs7OztBQVNEOzs7O21DQUllO0FBQUE7O0FBQ2IsYUFBTyxJQUFJekYsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVXlGLE1BQVYsRUFBb0I7QUFDckMsbUNBQXFCO0FBQ25CO0FBQ0EsY0FBSTFHLFNBQVMsQ0FBQ0MsZUFBZCxFQUErQjtBQUM3QkQscUJBQVMsQ0FBQ1ksWUFBVixDQUF1QmIsWUFBdkIsQ0FBb0M7QUFDbEM0RyxtQkFBSyxFQUFFO0FBQ0xDLHdCQUFRLEVBQUUsQ0FDUjtBQUNFLHNDQUFvQjtBQUR0QixpQkFEUSxFQUlSO0FBQ0UseUNBQXVCO0FBRHpCLGlCQUpRLEVBT1I7QUFDRSx3Q0FBc0I7QUFEeEIsaUJBUFE7QUFETDtBQUQyQixhQUFwQyxFQWNHLFVBQUNDLE1BQUQsRUFBVztBQUNaLG9CQUFJLENBQUNDLEtBQUwsR0FBYUQsTUFBYjtBQUNBLG9CQUFJLENBQUNKLGVBQUwsR0FBdUIsSUFBdkI7QUFDQTVHLG9CQUFNLENBQUNnSCxNQUFQLEdBQWdCQSxNQUFoQixDQUhZLENBR1k7QUFDeEI7O0FBQ0Esb0JBQUksQ0FBQ0wsaUJBQUwsQ0FBdUI5RCxPQUF2QixDQUErQixVQUFDUCxJQUFELEVBQVM7QUFDdEMsc0JBQUksQ0FBQ0MsT0FBTCxDQUFhRCxJQUFiO0FBQ0QsZUFGRDs7QUFJQWxCLHFCQUFPLENBQUM0RixNQUFELENBQVA7QUFDRCxhQXhCRCxFQXdCRyxVQUFDRSxLQUFELEVBQVU7QUFDWEwsb0JBQU0sQ0FBQ0ssS0FBRCxDQUFOO0FBQ0QsYUExQkQsRUFENkIsQ0E0Qi9CO0FBQ0MsV0E3QkQsTUE2Qk87QUFDTC9HLHFCQUFTLENBQUNELFlBQVYsQ0FBdUI7QUFDckI0RyxtQkFBSyxFQUFFO0FBQ0xDLHdCQUFRLEVBQUUsQ0FDUjtBQUNFLHNDQUFvQjtBQUR0QixpQkFEUSxFQUlSO0FBQ0UseUNBQXVCO0FBRHpCLGlCQUpRLEVBT1I7QUFDRSx3Q0FBc0I7QUFEeEIsaUJBUFE7QUFETDtBQURjLGFBQXZCLEVBY0csVUFBQ0MsTUFBRCxFQUFXO0FBQ1osb0JBQUksQ0FBQ0MsS0FBTCxHQUFhRCxNQUFiO0FBQ0Esb0JBQUksQ0FBQ0osZUFBTCxHQUF1QixJQUF2QjtBQUNBNUcsb0JBQU0sQ0FBQ2dILE1BQVAsR0FBZ0JBLE1BQWhCLENBSFksQ0FHWTtBQUN4Qjs7QUFDQSxvQkFBSSxDQUFDTCxpQkFBTCxDQUF1QjlELE9BQXZCLENBQStCLFVBQUNQLElBQUQsRUFBUztBQUN0QyxzQkFBSSxDQUFDQyxPQUFMLENBQWFELElBQWI7QUFDRCxlQUZEOztBQUlBbEIscUJBQU8sQ0FBQzRGLE1BQUQsQ0FBUDtBQUNELGFBeEJELEVBd0JHLFVBQUNFLEtBQUQsRUFBVTtBQUNYTCxvQkFBTSxDQUFDSyxLQUFELENBQU47QUFDRCxhQTFCRDtBQTJCRDtBQUNGLFNBNURELE1BNERPO0FBQ0xMLGdCQUFNLENBQUNNLEtBQUssQ0FBQyw2RkFBRCxDQUFOLENBQU47QUFDRDtBQUNGLE9BaEVNLENBQVA7QUFpRUQ7QUFDRDs7Ozs7Ozs7NEJBS1E3RSxJLEVBQU07QUFDWjtBQUNBLFVBQUksT0FBTyxLQUFLQSxJQUFaLEtBQXFCLFdBQXpCLEVBQXNDO0FBQ3BDLGFBQUtxRSxpQkFBTCxDQUF1QlMsSUFBdkIsQ0FBNEI5RSxJQUE1Qjs7QUFDQSxlQUFPQSxJQUFQO0FBQ0Q7O0FBQ0QsVUFBSUEsSUFBSSxxQ0FBSixJQUFtQ0EsSUFBSSxtQ0FBM0MsRUFBdUU7QUFDckUsYUFBS0EsSUFBTCxDQUFVQyxPQUFWLENBQWtCRCxJQUFJLENBQUNBLElBQXZCO0FBQ0QsT0FGRCxNQUVPO0FBQ0wsYUFBS0EsSUFBTCxDQUFVQyxPQUFWLENBQWtCRCxJQUFsQjtBQUNEOztBQUNELGFBQU9BLElBQVA7QUFDRCxLLENBRUQ7QUFDQTs7OztzQ0FDa0I7QUFBQTs7QUFDaEIsYUFBTyxJQUFJbkIsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVXlGLE1BQVYsRUFBb0I7QUFDckMsWUFBSSxNQUFJLENBQUNELGVBQVQsRUFBMEI7QUFDeEJ6RyxtQkFBUyxDQUFDWSxZQUFWLENBQXVCQyxnQkFBdkIsR0FBMENDLElBQTFDLENBQStDLFVBQUNDLE9BQUQsRUFBWTtBQUN6REUsbUJBQU8sQ0FBQ0YsT0FBTyxDQUFDbUcsTUFBUixDQUFlLFVBQUMvRixNQUFELEVBQVc7QUFDaEMscUJBQU9BLE1BQU0sQ0FBQ0MsSUFBUCxJQUFlRCxNQUFNLENBQUNDLElBQVAsS0FBZ0IsWUFBdEM7QUFDRCxhQUZPLENBQUQsQ0FBUDtBQUdELFdBSkQsRUFJRytGLEtBSkgsQ0FJUyxVQUFDSixLQUFELEVBQVU7QUFDakJMLGtCQUFNLENBQUNLLEtBQUQsQ0FBTjtBQUNELFdBTkQ7QUFPRCxTQVJELE1BUU87QUFDTCxnQkFBSSxDQUFDaEgsWUFBTCxHQUFvQmUsSUFBcEIsQ0FBeUIsWUFBSztBQUM1QmQscUJBQVMsQ0FBQ1ksWUFBVixDQUF1QkMsZ0JBQXZCLEdBQTBDQyxJQUExQyxDQUErQyxVQUFDQyxPQUFELEVBQVk7QUFDekRFLHFCQUFPLENBQUNGLE9BQU8sQ0FBQ21HLE1BQVIsQ0FBZSxVQUFDL0YsTUFBRCxFQUFXO0FBQ2hDLHVCQUFPQSxNQUFNLENBQUNDLElBQVAsSUFBZUQsTUFBTSxDQUFDQyxJQUFQLEtBQWdCLFlBQXRDO0FBQ0QsZUFGTyxDQUFELENBQVA7QUFHRCxhQUpELEVBSUcrRixLQUpILENBSVMsVUFBQ0osS0FBRCxFQUFVO0FBQ2pCTCxvQkFBTSxDQUFDSyxLQUFELENBQU47QUFDRCxhQU5EO0FBT0QsV0FSRCxFQVFHSSxLQVJILENBUVMsVUFBQ0osS0FBRCxFQUFVO0FBQ2pCTCxrQkFBTSxDQUFDSyxLQUFELENBQU47QUFDRCxXQVZEO0FBV0Q7QUFDRixPQXRCTSxDQUFQO0FBdUJEOzs7d0JBM0hXO0FBQ1YsYUFBTyxLQUFLNUUsSUFBWjtBQUNELEs7c0JBQ1MwRSxNLEVBQVE7QUFDaEI7QUFDQSxXQUFLMUUsSUFBTCxHQUFZLEtBQUs5QixZQUFMLENBQWtCK0csdUJBQWxCLENBQTBDUCxNQUExQyxDQUFaO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEJIOzs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7Ozs7SUFJcUJRLE07Ozs7O0FBQ25CLGtCQUFZaEgsWUFBWixFQUEwQjtBQUFBOztBQUFBOztBQUN4Qiw0R0FBTUEsWUFBTjs7QUFFQSxRQUFJLE1BQUtBLFlBQVQsRUFBdUI7QUFDckIsWUFBSzhCLElBQUwsR0FBWTlCLFlBQVksQ0FBQ2lILFdBQXpCO0FBQ0Q7O0FBTHVCO0FBTXpCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDYkg7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7Ozs7SUFJcUJDLE07Ozs7O0FBQ25CO0FBQ0E7QUFDQTtBQUVBLGtCQUFZbEgsWUFBWixFQUEwQm1ILE1BQTFCLEVBQWtDO0FBQUE7O0FBQUE7O0FBQ2hDLDRHQUFNbkgsWUFBTjtBQUVBLFVBQUtvQyxLQUFMLEdBQWE7QUFDWE8sbUJBQWEsRUFBRTNDLFlBQVksQ0FBQzRDLFVBQWIsRUFESjtBQUMrQjtBQUMxQ0Msb0JBQWMsRUFBRTdDLFlBQVksQ0FBQzRDLFVBQWIsRUFGTDtBQUdYd0UsbUJBQWEsRUFBRXBILFlBQVksQ0FBQ3FILGVBQWIsRUFISjtBQUdvQztBQUMvQ3ZFLGlCQUFXLEVBQUU5QyxZQUFZLENBQUM0QyxVQUFiLEVBSkY7QUFJNkI7QUFDeEMwRSxtQkFBYSxFQUFFdEgsWUFBWSxDQUFDNEMsVUFBYixFQUxKLENBSytCOztBQUwvQixLQUFiLENBSGdDLENBV2hDOztBQUNBLFVBQUtSLEtBQUwsQ0FBV08sYUFBWCxDQUF5QlosT0FBekIsQ0FBaUMsTUFBS0ssS0FBTCxDQUFXZ0YsYUFBNUM7O0FBQ0EsVUFBS2hGLEtBQUwsQ0FBV08sYUFBWCxDQUF5QlosT0FBekIsQ0FBaUMsTUFBS0ssS0FBTCxDQUFXVSxXQUE1Qzs7QUFDQSxVQUFLVixLQUFMLENBQVdnRixhQUFYLENBQXlCckYsT0FBekIsQ0FBaUMsTUFBS0ssS0FBTCxDQUFXa0YsYUFBNUM7O0FBQ0EsVUFBS2xGLEtBQUwsQ0FBV2tGLGFBQVgsQ0FBeUJ2RixPQUF6QixDQUFpQyxNQUFLSyxLQUFMLENBQVdTLGNBQTVDOztBQUNBLFVBQUtULEtBQUwsQ0FBV1UsV0FBWCxDQUF1QmYsT0FBdkIsQ0FBK0IsTUFBS0ssS0FBTCxDQUFXUyxjQUExQyxFQWhCZ0MsQ0FrQmhDOzs7QUFDQSxVQUFLZixJQUFMLEdBQVksTUFBS00sS0FBTCxDQUFXTyxhQUF2QixDQW5CZ0MsQ0FxQmhDOztBQUNBLFVBQUtYLE1BQUwsR0FBYyxNQUFLSSxLQUFMLENBQVdTLGNBQXpCLENBdEJnQyxDQXdCaEM7O0FBQ0EsVUFBS0ssR0FBTCxHQUFXLEdBQVgsQ0F6QmdDLENBMkJoQzs7QUFDQSxVQUFLcUUsS0FBTCxHQUFhLENBQWI7QUE1QmdDO0FBNkJqQztBQUVEOzs7Ozs7Ozs7O0FBYUE7Ozs7d0JBSVU7QUFDUixhQUFPLEtBQUtsRSxJQUFaO0FBQ0Q7QUFFRDs7Ozs7c0JBSVFDLE8sRUFBUztBQUNmO0FBQ0EsV0FBS0QsSUFBTCxHQUFZRSxVQUFVLENBQUNELE9BQUQsQ0FBdEIsQ0FGZSxDQUlmOztBQUNBLFdBQUtsQixLQUFMLENBQVdVLFdBQVgsQ0FBdUJVLElBQXZCLENBQTRCQyxLQUE1QixHQUFvQyxLQUFLSixJQUF6QztBQUNEO0FBRUQ7Ozs7Ozs7d0JBSVk7QUFDVixhQUFPLEtBQUttRSxNQUFaO0FBQ0Q7QUFFRDs7Ozs7c0JBSVVELEssRUFBTztBQUNmO0FBQ0EsV0FBS0MsTUFBTCxHQUFjakUsVUFBVSxDQUFDZ0UsS0FBRCxDQUF4QixDQUZlLENBSWY7O0FBQ0EsV0FBS25GLEtBQUwsQ0FBV2tGLGFBQVgsQ0FBeUI5RCxJQUF6QixDQUE4QkMsS0FBOUIsR0FBc0MsS0FBSytELE1BQTNDO0FBQ0Q7QUFFRDs7Ozs7Ozt3QkFJYTtBQUNYLGFBQU8sS0FBS0MsT0FBWjtBQUNEO0FBRUQ7Ozs7O3NCQUlXTixNLEVBQVE7QUFBQTs7QUFDakIsV0FBS25ILFlBQUwsQ0FBa0IwSCxlQUFsQixDQUFrQ1AsTUFBbEMsRUFBMEMsVUFBQ0EsTUFBRCxFQUFXO0FBQ25EO0FBQ0EsY0FBSSxDQUFDTSxPQUFMLEdBQWVOLE1BQWYsQ0FGbUQsQ0FJbkQ7O0FBQ0EsY0FBSSxDQUFDL0UsS0FBTCxDQUFXZ0YsYUFBWCxDQUF5QkQsTUFBekIsR0FBa0MsTUFBSSxDQUFDTSxPQUF2QztBQUNELE9BTkQ7QUFPRDs7O3lDQXBFMkJFLEksRUFBTTtBQUNoQyxhQUFPQyxLQUFLLENBQUNELElBQUQsRUFBTztBQUNqQkUsY0FBTSxFQUFFO0FBRFMsT0FBUCxDQUFMLENBRUpwSCxJQUZJLENBRUMsVUFBQ3FILFFBQUQsRUFBYTtBQUNuQixlQUFPQSxRQUFRLENBQUNDLFdBQVQsRUFBUDtBQUNELE9BSk0sQ0FBUDtBQUtEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JESDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTs7OztJQUlxQkMsTzs7Ozs7QUFDbkI7QUFFQSxtQkFBWWhJLFlBQVosRUFBMEI7QUFBQTs7QUFBQTs7QUFDeEIsOEdBQU1BLFlBQU47QUFFQSxVQUFLb0MsS0FBTCxHQUFhO0FBQ1g0QixjQUFRLEVBQUVoRSxZQUFZLENBQUM0QyxVQUFiLEVBREM7QUFDMEI7QUFDckM2QyxvQkFBYyxFQUFFekYsWUFBWSxDQUFDMEYsZ0JBQWIsRUFGTCxDQUVzQzs7QUFGdEMsS0FBYixDQUh3QixDQVF4Qjs7QUFDQSxVQUFLdEQsS0FBTCxDQUFXcUQsY0FBWCxDQUEwQjFELE9BQTFCLENBQWtDLE1BQUtLLEtBQUwsQ0FBVzRCLFFBQVgsQ0FBb0JSLElBQXRELEVBVHdCLENBV3hCOzs7QUFDQSxVQUFLcEIsS0FBTCxDQUFXcUQsY0FBWCxDQUEwQnhFLElBQTFCLEdBQWlDLE1BQWpDOztBQUNBLFVBQUttQixLQUFMLENBQVdxRCxjQUFYLENBQTBCRSxLQUExQixDQUFnQyxDQUFoQyxFQWJ3QixDQWV4Qjs7O0FBQ0EsVUFBSzdELElBQUwsR0FBWSxNQUFLTSxLQUFMLENBQVc0QixRQUF2QixDQWhCd0IsQ0FrQnhCOztBQUNBLFVBQUtiLEtBQUwsR0FBYSxFQUFiO0FBbkJ3QjtBQW9CekI7QUFFRDs7Ozs7Ozs7d0JBSVk7QUFDVixhQUFPLEtBQUtPLE1BQVo7QUFDRDtBQUVEOzs7OztzQkFJVVAsSyxFQUFPO0FBQ2Y7QUFDQSxXQUFLTyxNQUFMLEdBQWNILFVBQVUsQ0FBQ0osS0FBRCxDQUF4QixDQUZlLENBSWY7O0FBQ0EsV0FBS2YsS0FBTCxDQUFXcUQsY0FBWCxDQUEwQnBCLFNBQTFCLENBQW9DWixLQUFwQyxHQUE0QyxLQUFLQyxNQUFqRDtBQUNEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pESDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTs7OztJQUlxQnVFLE07Ozs7O0FBQ25CLGtCQUFZakksWUFBWixFQUEwQjtBQUFBOztBQUFBOztBQUN4Qiw0R0FBTUEsWUFBTixHQUR3QixDQUd4Qjs7QUFDQSxVQUFLOEIsSUFBTCxHQUFZLE1BQUs5QixZQUFMLENBQWtCNEMsVUFBbEIsRUFBWixDQUp3QixDQU14Qjs7QUFDQSxVQUFLMkUsS0FBTCxHQUFhLENBQWIsQ0FQd0IsQ0FTeEI7O0FBQ0EsVUFBS1csSUFBTCxHQUFZLEtBQVo7QUFWd0I7QUFXekI7QUFFRDs7Ozs7Ozs7d0JBSVk7QUFDVixhQUFPLEtBQUtWLE1BQVo7QUFDRDtBQUVEOzs7OztzQkFJVVcsTSxFQUFRO0FBQ2hCO0FBQ0EsVUFBSUMsR0FBRyxHQUFHN0UsVUFBVSxDQUFDNEUsTUFBRCxDQUFwQjtBQUVBQyxTQUFHLEdBQUlBLEdBQUcsSUFBSSxDQUFQLEdBQVdBLEdBQVgsR0FBaUIsQ0FBeEIsQ0FKZ0IsQ0FNaEI7O0FBQ0EsV0FBS1osTUFBTCxHQUFjWSxHQUFkLENBUGdCLENBU2hCOztBQUNBLFdBQUt0RyxJQUFMLENBQVUwQixJQUFWLENBQWVDLEtBQWYsR0FBdUIyRSxHQUF2QixDQVZnQixDQVloQjs7QUFDQSxXQUFLQyxLQUFMLEdBQWNELEdBQUcsS0FBSyxDQUF0QjtBQUNEO0FBRUQ7Ozs7Ozs7d0JBSVc7QUFDVCxhQUFPLEtBQUtDLEtBQVo7QUFDRDtBQUVEOzs7OztzQkFJU0gsSSxFQUFNO0FBQ2I7QUFDQSxXQUFLRyxLQUFMLEdBQWEsQ0FBQyxDQUFDSCxJQUFmOztBQUVBLFVBQUksS0FBS0csS0FBVCxFQUFnQjtBQUNkO0FBQ0EsYUFBS0MsZ0JBQUwsR0FBd0IsS0FBS2YsS0FBN0IsQ0FGYyxDQUlkOztBQUNBLGFBQUtBLEtBQUwsR0FBYSxDQUFiO0FBQ0QsT0FORCxNQU1PO0FBQ0w7QUFDQSxhQUFLQSxLQUFMLEdBQWEsS0FBS2UsZ0JBQUwsSUFBeUIsS0FBS2QsTUFBM0M7QUFDRDtBQUNGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekVIOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBIiwiZmlsZSI6Im5vaXNlZnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcIm5vaXNlZnlcIiwgW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wibm9pc2VmeVwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJub2lzZWZ5XCJdID0gZmFjdG9yeSgpO1xufSkodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwidmFyIGc7XG5cbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXG5nID0gKGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcztcbn0pKCk7XG5cbnRyeSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxuXHRnID0gZyB8fCBuZXcgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO1xufSBjYXRjaCAoZSkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIikgZyA9IHdpbmRvdztcbn1cblxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3Ncbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cblxubW9kdWxlLmV4cG9ydHMgPSBnO1xuIiwibGV0IHdpbiA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93IDogZ2xvYmFsO1xuLyoqXG4gKiBDaGVjayBpZiB0aGUgY3VycmVudCBicm93c2VyIHN1cHBvcnRzIGdldFVzZXJNZWRpYS5cbiAvLyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8zNzY3MzAwMC90eXBlZXJyb3ItZ2V0dXNlcm1lZGlhLWNhbGxlZC1vbi1hbi1vYmplY3QtdGhhdC1kb2VzLW5vdC1pbXBsZW1lbnQtaW50ZXJmYWNlXG4gKi9cbmNvbnN0IGdldFVzZXJNZWRpYSA9IG5hdmlnYXRvci5nZXRVc2VyTWVkaWEgfHxcbm5hdmlnYXRvci5tb3pHZXRVc2VyTWVkaWEgfHxcbm5hdmlnYXRvci53ZWJraXRHZXRVc2VyTWVkaWEgfHxcbm5hdmlnYXRvci5tc0dldFVzZXJNZWRpYTtcbmNvbnN0IGhhc0dldFVzZXJNZWRpYSA9ICEhZ2V0VXNlck1lZGlhO1xuLyoqXG4gKiBDaGVjayBpZiB0aGUgY3VycmVudCBicm93c2VyIHN1cHBvcnRzIHRoZSB3ZWItYXVkaW8tYXBpIC5cbiAqL1xuY29uc3QgYXVkaW9Db250ZXh0ID0gd2luLkF1ZGlvQ29udGV4dCB8fFxuICB3aW4ud2Via2l0QXVkaW9Db250ZXh0IHx8XG4gIHdpbi5tb3pBdWRpb0NvbnRleHQgfHxcbiAgd2luLm1zQXVkaW9Db250ZXh0O1xuXG5jb25zdCBoYXNBdWRpb0NvbnRleHQgPSAhIWF1ZGlvQ29udGV4dDtcblxuY29uc3QgZGV2aWNlTGlzdCA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gbmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5lbnVtZXJhdGVEZXZpY2VzKCkudGhlbigoZGV2aWNlcyk9PiB7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShkZXZpY2VzLm1hcCgoZGV2aWNlKT0+IHtcbiAgICAgIGxldCBba2luZCwgdHlwZSwgZGlyZWN0aW9uXSA9IGRldmljZS5raW5kLm1hdGNoKC8oXFx3KykoaW5wdXR8b3V0cHV0KS9pKTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGtpbmQsXG4gICAgICAgIHR5cGUsXG4gICAgICAgIGRpcmVjdGlvbixcbiAgICAgICAgZGV2aWNlSWQ6IGRldmljZS5kZXZpY2VJZCxcbiAgICAgICAgZ3JvdXBJZDogZGV2aWNlLmdyb3VwSWQsXG4gICAgICAgIGxhYmVsOiBkZXZpY2UubGFiZWwsXG4gICAgICAgIGNhcGFiaWxpdGllczogZGV2aWNlLmdldENhcGFiaWxpdGllcyA/IGRldmljZS5nZXRDYXBhYmlsaXRpZXMoKSA6ICcnLFxuICAgICAgfTtcbiAgICB9KSk7XG4gIH0pO1xufTtcbmNvbnN0IGRldmljZUxpc3RIYW5kbGVyID0gZnVuY3Rpb24oY2FsbGJhY2spIHtcbiAgbmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5vbmRldmljZWNoYW5nZSA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgZGV2aWNlTGlzdCgpLnRoZW4oKGxpc3QpPT4ge1xuICAgICAgY2FsbGJhY2sobGlzdCwgZXZlbnQpO1xuICAgIH0pO1xuICB9O1xufTtcblxuZXhwb3J0IHtcbiAgaGFzR2V0VXNlck1lZGlhLFxuICBnZXRVc2VyTWVkaWEsXG4gIGhhc0F1ZGlvQ29udGV4dCxcbiAgZGV2aWNlTGlzdCxcbiAgZGV2aWNlTGlzdEhhbmRsZXIsXG59O1xuIiwiXG5pbXBvcnQgU2luZ2xlQXVkaW9Ob2RlIGZyb20gJy4vU2luZ2xlQXVkaW9Ob2RlJztcblxuLyoqXG4gKiBUaGUgbXVsdGktYXVkaW8tbm9kZSBjbGFzcy5cbiAqIFdoZW4gY3JlYXRpbmcgYW4gZWZmZWN0IGV4aXN0aW5nIG91dCBvZiBtdWx0aXBsZSBhdWRpby1ub2Rlcywgd2UgY2FuIHdyYXAgaXQgaW4gdGhpcyBjbGFzcy5cbiAqIFlvdSBjYW4gc2V0IHRoZSBpbnB1dCBub2RlIChlZmZlY3Qubm9kZSkgYW5kIHRoZSBvdXRwdXQgbm9kZSBvZiB0aGUgZWZmZWN0IChlZmZlY3Qub3V0cHV0KS5cbiAqIFRoZSBpbnB1dCBub2RlIGlzIHRoZSBmaXJzdCBhdWRpby1ub2RlIGluIHRoZSBlZmZlY3QsIHRoZSBwcmV2aW91cyBlZmZlY3Qgd2lsbCBiZSBjb25uZWN0ZWQgdG8gdGhpcyBub2RlLlxuICogVGhlIG91dHB1dCBub2RlIGlzIHRoZSBsYXN0IGF1ZGlvLW5vZGUgaW4gdGhlIGVmZmVjdCwgdGhlIG5leHQgZWZmZWN0IHdpbGwgYmUgY29ubmVjdGVkIHRvIHRoaXMgbm9kZS5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTXVsdGlBdWRpb05vZGUgZXh0ZW5kcyBTaW5nbGVBdWRpb05vZGUge1xuICAvLyBjb25zdHJ1Y3RvcihhdWRpb0NvbnRleHQpIHtcbiAgLy8gICBzdXBlcihhdWRpb0NvbnRleHQpO1xuICAvLyB9XG5cbiAgLyoqXG4gICAgICogR2V0dGVyIGZvciB0aGUgZWZmZWN0cyBvdXRwdXQgbm9kZS5cbiAgICAgKiBAcmV0dXJuIHtBdWRpb05vZGV9XG4gICAgICovXG4gIGdldCBvdXRwdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX291dHB1dE5vZGU7XG4gIH1cblxuICBzZXQgb3V0cHV0KG91dHB1dCkge1xuICAgIHRoaXMuX291dHB1dE5vZGUgPSBvdXRwdXQ7XG4gIH1cblxuICAvKipcbiAgICAgKiBDb25uZWN0IHRoZSBlZmZlY3QgdG8gb3RoZXIgZWZmZWN0cyBvciBuYXRpdmUgYXVkaW8tbm9kZXMuXG4gICAgICogQHBhcmFtICB7QXVkaW9Ob2RlfFNpbmdsZUF1ZGlvTm9kZXxNdWx0aUF1ZGlvTm9kZX0gbm9kZVxuICAgICAqIEByZXR1cm4ge0F1ZGlvTm9kZXxTaW5nbGVBdWRpb05vZGV8TXVsdGlBdWRpb05vZGV9XG4gICAgICovXG4gIGNvbm5lY3Qobm9kZSkge1xuICAgIGlmIChub2RlIGluc3RhbmNlb2YgU2luZ2xlQXVkaW9Ob2RlIHx8IG5vZGUgaW5zdGFuY2VvZiBNdWx0aUF1ZGlvTm9kZSkge1xuICAgICAgdGhpcy5ub2RlLmNvbm5lY3Qobm9kZS5ub2RlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5ub2RlLmNvbm5lY3Qobm9kZSk7XG4gICAgfVxuICAgIHJldHVybiBub2RlO1xuICB9XG5cbiAgLyoqXG4gICAgICogRGlzY29ubmVjdCB0aGUgZWZmZWN0LlxuICAgICAqIEByZXR1cm4ge0F1ZGlvTm9kZX1cbiAgICAgKi9cbiAgZGlzY29ubmVjdCgpIHtcbiAgICB0aGlzLm91dHB1dC5kaXNjb25uZWN0KCk7XG4gICAgcmV0dXJuIHRoaXMub3V0cHV0O1xuICB9XG5cbiAgLyoqXG4gICAgICogRGVzdHJveSBhbiBlZmZlY3QuXG4gICAgICogQHJldHVybiB7QXVkaW9Ob2RlfVxuICAgICAqL1xuICBkZXN0cm95KCkge1xuICAgIE9iamVjdC5rZXlzKHRoaXMubm9kZXMpLmZvckVhY2goKG5vZGUpPT4ge1xuICAgICAgaWYgKHRoaXMubm9kZXNbbm9kZV0uZGlzY29ubmVjdCAmJiB0eXBlb2YgdGhpcy5ub2Rlc1tub2RlXS5kaXNjb25uZWN0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHRoaXMubm9kZXNbbm9kZV0uZGlzY29ubmVjdCgpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRoaXMuZGlzY29ubmVjdCgpO1xuICB9XG59XG4iLCIvKipcbiAqIFRoZSBiYXNpYyBhdWRpbyBub2RlIGNsYXNzLlxuICogVGhpcyBpcyBkZSBza2VsZXRvbiBmb3IgYSBhdWRpbyAgZWZmZWN0LlxuICogV2hlbiB0aGUgZWZmZWN0IG9ubHkgY29udGFpbnMgMSBhdWRpb05vZGUgdGhpcyBjbGFzcyBjYW4gYmUgdXNlZC5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2luZ2xlQXVkaW9Ob2RlIHtcbiAgLy8gbm9kZXMgPSB7fTsgLy97W2tleTogc3RyaW5nXTogQXVkaW9Ob2RlfEdhaW5Ob2RlfERlbGF5Tm9kZXxXYXZlU2hhcGVyTm9kZXxCaXF1YWRGaWx0ZXJOb2RlfE9zY2lsbGF0b3JOb2RlfENvbnZvbHZlck5vZGV9ID0ge307XG5cbiAgY29uc3RydWN0b3IoYXVkaW9Db250ZXh0KSB7XG4gICAgLy8gU2V0IHRoZSBhdWRpby1jb250ZXh0LlxuICAgIHRoaXMuX2F1ZGlvQ29udGV4dCA9IGF1ZGlvQ29udGV4dDtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgZWZmZWN0cyBBdWRpb0NvbnRleHQgZ2V0dGVyLlxuICAgKiBAcmV0dXJuIHtBdWRpb0NvbnRleHR9IFRoZSBBdWRpb0NvbnRleHQgdXNlZCBieSB0aGUgZWZmZWN0LlxuICAgKi9cbiAgZ2V0IGF1ZGlvQ29udGV4dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYXVkaW9Db250ZXh0O1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBlZmZlY3RzIEF1ZGlvQ29udGV4dCBzZXR0ZXIuXG4gICAqIEBwYXJhbSAge0F1ZGlvQ29udGV4dH0gYXVkaW9Db250ZXh0XG4gICAqL1xuICBzZXQgYXVkaW9Db250ZXh0KGF1ZGlvQ29udGV4dCkge1xuICAgIHRoaXMuX2F1ZGlvQ29udGV4dCA9IGF1ZGlvQ29udGV4dDtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgZWZmZWN0J3MgYXVkaW8tbm9kZSBnZXR0ZXIuXG4gICAqIEByZXR1cm4ge0F1ZGlvTm9kZX0gVGhlIGF1ZGlvLW5vZGUgdXNlZCBmb3IgdGhlIGVmZmVjdC5cbiAgICovXG4gIGdldCBub2RlKCkge1xuICAgIHJldHVybiB0aGlzLl9ub2RlO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBlZmZlY3QncyBhdWRpby1ub2RlIHNldHRlci5cbiAgICogQHBhcmFtICB7QXVkaW9Ob2RlfSBub2RlXG4gICAqL1xuICBzZXQgbm9kZShub2RlKSB7XG4gICAgdGhpcy5fbm9kZSA9IG5vZGU7XG4gIH1cblxuICAvKipcbiAgICogQ29ubmVjdCB0aGUgZWZmZWN0IHRvIG90aGVyIGVmZmVjdHMgb3IgbmF0aXZlIGF1ZGlvLW5vZGVzLlxuICAgKiBAcGFyYW0gIHtBdWRpb05vZGV8U2luZ2xlQXVkaW9Ob2RlfSBub2RlXG4gICAqIEByZXR1cm4ge0F1ZGlvTm9kZXxTaW5nbGVBdWRpb05vZGV9XG4gICAqL1xuICBjb25uZWN0KG5vZGUpIHtcbiAgICBpZiAobm9kZSBpbnN0YW5jZW9mIFNpbmdsZUF1ZGlvTm9kZSkge1xuICAgICAgdGhpcy5ub2RlLmNvbm5lY3Qobm9kZS5ub2RlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5ub2RlLmNvbm5lY3Qobm9kZSk7XG4gICAgfVxuICAgIHJldHVybiBub2RlO1xuICB9XG5cbiAgLyoqXG4gICAqIGRpc2Nvbm5lY3QgdGhlIGVmZmVjdC5cbiAgICogQHJldHVybiB7QXVkaW9Ob2RlfVxuICAgKi9cbiAgZGlzY29ubmVjdCgpIHtcbiAgICB0aGlzLm5vZGUuZGlzY29ubmVjdCgpO1xuICAgIHJldHVybiB0aGlzLm5vZGU7XG4gIH1cblxuICAvKipcbiAgICogQWxpYXMgZm9yIHRoZSBkaXNjb25uZWN0IG1ldGhvZCwgdG8gb2ZmZXIgdGhlIHNhbWUgYXBpIGFzIGEgTXVsdGlBdWRpb05vZGUuXG4gICAqIEByZXR1cm4ge0F1ZGlvTm9kZX1cbiAgICovXG4gIGRlc3Ryb3koKSB7XG4gICAgcmV0dXJuIHRoaXMuZGlzY29ubmVjdCgpO1xuICB9XG59XG4iLCJpbXBvcnQgTXVsdGlBdWRpb05vZGUgZnJvbSAnLi4vTXVsdGlBdWRpb05vZGUnO1xuXG4vKipcbiAqIFRoZSBhdWRpby1lZmZlY3RzIGRlbGF5IGNsYXNzLlxuICogVGhpcyBjbGFzcyBsZXRzIHlvdSBhZGQgYSBkZWxheSBlZmZlY3QuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERlbGF5IGV4dGVuZHMgTXVsdGlBdWRpb05vZGUge1xuICAvLyBwcml2YXRlIF93ZXQ6IG51bWJlcjtcbiAgLy8gcHJpdmF0ZSBfc3BlZWQ6IG51bWJlcjtcbiAgLy8gcHJpdmF0ZSBfZHVyYXRpb246IG51bWJlcjtcblxuICBjb25zdHJ1Y3RvcihhdWRpb0NvbnRleHQpIHtcbiAgICBzdXBlcihhdWRpb0NvbnRleHQpO1xuXG4gICAgdGhpcy5ub2RlcyA9IHtcbiAgICAgIGlucHV0R2Fpbk5vZGU6IGF1ZGlvQ29udGV4dC5jcmVhdGVHYWluKCksIC8vIENyZWF0ZSB0aGUgaW5wdXQgYW5kIG91dHB1dCBub2RlcyBvZiB0aGUgZWZmZWN0XG4gICAgICBvdXRwdXRHYWluTm9kZTogYXVkaW9Db250ZXh0LmNyZWF0ZUdhaW4oKSxcbiAgICAgIHdldEdhaW5Ob2RlOiBhdWRpb0NvbnRleHQuY3JlYXRlR2FpbigpLCAvLyBDcmVhdGUgdGhlIGdhaW4tbm9kZSB3ZSdsbCB1c2UgdG8gY29udHJvbGwgdGhlIHdldG5lc3Mgb2YgdGhlIGRlbGF5XG4gICAgICBkdXJhdGlvbkdhaW5Ob2RlOiBhdWRpb0NvbnRleHQuY3JlYXRlR2FpbigpLCAvLyBDcmVhdGUgdGhlIGdhaW4gbm9kZSB3ZSdsbCB1c2UgdG8gY29udHJvbGwgdGhlIGR1cmF0aW9uIG9mIHRoZSBkZWxheVxuICAgICAgZGVsYXlOb2RlOiBhdWRpb0NvbnRleHQuY3JlYXRlRGVsYXkoKSwgLy8gQ3JlYXRlIHRoZSBkZWxheSBub2RlXG4gICAgfTtcblxuICAgIC8vIFdpcmUgaXQgYWxsIHVwXG4gICAgdGhpcy5ub2Rlcy5pbnB1dEdhaW5Ob2RlLmNvbm5lY3QodGhpcy5ub2Rlcy53ZXRHYWluTm9kZSk7XG4gICAgdGhpcy5ub2Rlcy5pbnB1dEdhaW5Ob2RlLmNvbm5lY3QodGhpcy5ub2Rlcy5kZWxheU5vZGUpO1xuICAgIHRoaXMubm9kZXMuZHVyYXRpb25HYWluTm9kZS5jb25uZWN0KHRoaXMubm9kZXMuZGVsYXlOb2RlKTtcbiAgICB0aGlzLm5vZGVzLmRlbGF5Tm9kZS5jb25uZWN0KHRoaXMubm9kZXMuZHVyYXRpb25HYWluTm9kZSk7XG4gICAgdGhpcy5ub2Rlcy5kZWxheU5vZGUuY29ubmVjdCh0aGlzLm5vZGVzLm91dHB1dEdhaW5Ob2RlKTtcbiAgICB0aGlzLm5vZGVzLndldEdhaW5Ob2RlLmNvbm5lY3QodGhpcy5ub2Rlcy5vdXRwdXRHYWluTm9kZSk7XG5cbiAgICAvLyBTZXQgdGhlIGlucHV0IGdhaW4tbm9kZSBhcyB0aGUgaW5wdXQtbm9kZS5cbiAgICB0aGlzLm5vZGUgPSB0aGlzLm5vZGVzLmlucHV0R2Fpbk5vZGU7XG4gICAgLy8gU2V0IHRoZSBvdXRwdXQgZ2Fpbi1ub2RlIGFzIHRoZSBvdXRwdXQtbm9kZS5cbiAgICB0aGlzLm91dHB1dCA9IHRoaXMubm9kZXMub3V0cHV0R2Fpbk5vZGU7XG5cbiAgICAvLyBTZXQgdGhlIGRlZmF1bHQgd2V0bmVzcyB0byAxXG4gICAgdGhpcy53ZXQgPSAxO1xuXG4gICAgLy8gU2V0IHRoZSBkZWZhdWx0IHNwZWVkIHRvIDEgc2Vjb25kXG4gICAgdGhpcy5zcGVlZCA9IDE7XG5cbiAgICAvLyBTZXQgdGhlIGRlZmF1bHQgZHVyYXRpb24gdG8gMC40XG4gICAgdGhpcy5kdXJhdGlvbiA9IDAuNDtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXR0ZXIgZm9yIHRoZSBlZmZlY3QncyB3ZXRuZXNzXG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICovXG4gIGdldCB3ZXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3dldDtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXR0ZXIgZm9yIHRoZSBlZmZlY3QncyB3ZXRuZXNzXG4gICAqIEBwYXJhbSAge251bWJlcnxzdHJpbmd9IHdldG5lc3NcbiAgICovXG4gIHNldCB3ZXQod2V0bmVzcykge1xuICAgIC8vIFNldCB0aGUgaW50ZXJuYWwgd2V0bmVzcyB2YWx1ZVxuICAgIHRoaXMuX3dldCA9IHBhcnNlRmxvYXQod2V0bmVzcyk7XG5cbiAgICAvLyBTZXQgdGhlIG5ldyB2YWx1ZSBmb3IgdGhlIHdldG5lc3MgY29udHJvbGwgZ2Fpbi1ub2RlXG4gICAgdGhpcy5ub2Rlcy53ZXRHYWluTm9kZS5nYWluLnZhbHVlID0gdGhpcy5fd2V0O1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHRlciBmb3IgdGhlIGVmZmVjdCdzIHNwZWVkXG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICovXG4gIGdldCBzcGVlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc3BlZWQ7XG4gIH1cblxuICAvKipcbiAgICogU2V0dGVyIGZvciB0aGUgZWZmZWN0J3Mgc3BlZWRcbiAgICogQHBhcmFtIHtudW1iZXJ8c3RyaW5nfSBzcGVlZFxuICAgKi9cbiAgc2V0IHNwZWVkKHNwZWVkKSB7XG4gICAgLy8gU2V0IHRoZSBpbnRlcm5hbCBzcGVlZCB2YWx1ZVxuICAgIHRoaXMuX3NwZWVkID0gcGFyc2VGbG9hdChzcGVlZCk7XG5cbiAgICAvLyBTZXQgdGhlIGRlbGF5VGltZSB2YWx1ZSBvZiB0aGUgZGVsYXktbm9kZVxuICAgIHRoaXMubm9kZXMuZGVsYXlOb2RlLmRlbGF5VGltZS52YWx1ZSA9IHRoaXMuX3NwZWVkO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHRlciBmb3IgdGhlIGVmZmVjdCdzIGR1cmF0aW9uXG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICovXG4gIGdldCBkdXJhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fZHVyYXRpb247XG4gIH1cblxuICAvKipcbiAgICogU2V0dGVyIGZvciB0aGUgZWZmZWN0J3MgZHVyYXRpb25cbiAgICogQHBhcmFtICB7bnVtYmVyfHN0cmluZ30gZHVyYXRpb25cbiAgICovXG4gIHNldCBkdXJhdGlvbihkdXJhdGlvbikge1xuICAgIC8vIFNldCB0aGUgaW50ZXJuYWwgZHVyYXRpb24gdmFsdWVcbiAgICB0aGlzLl9kdXJhdGlvbiA9IHBhcnNlRmxvYXQoZHVyYXRpb24pO1xuXG4gICAgLy8gU2V0IHRoZSBkdXJhdGlvbiBnYWluLW5vZGUgdmFsdWVcbiAgICB0aGlzLm5vZGVzLmR1cmF0aW9uR2Fpbk5vZGUuZ2Fpbi52YWx1ZSA9IHRoaXMuX2R1cmF0aW9uO1xuICB9XG59XG4iLCJpbXBvcnQgTXVsdGlBdWRpb05vZGUgZnJvbSAnLi4vTXVsdGlBdWRpb05vZGUnO1xuXG4vKipcbiAqIFRoZSBhdWRpby1lZmZlY3RzIGRpc3RvcnRpb24gY2xhc3MuXG4gKiBUaGlzIGNsYXNzIGxldHMgeW91IGFkZCBhIGRpc3RvcnRpb24gZWZmZWN0LlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEaXN0b3J0aW9uIGV4dGVuZHMgTXVsdGlBdWRpb05vZGUge1xuICAvLyBwcml2YXRlIF9pbnRlbnNpdHk6IG51bWJlcjtcbiAgLy8gcHJpdmF0ZSBfZ2FpbjogbnVtYmVyO1xuICAvLyBwcml2YXRlIF9sb3dQYXNzRmlsdGVyOiBib29sZWFuO1xuXG4gIGNvbnN0cnVjdG9yKGF1ZGlvQ29udGV4dCkge1xuICAgIHN1cGVyKGF1ZGlvQ29udGV4dCk7XG5cbiAgICB0aGlzLm5vZGVzID0ge1xuICAgICAgd2F2ZXNoYXBlcjogdGhpcy5hdWRpb0NvbnRleHQuY3JlYXRlV2F2ZVNoYXBlcigpLCAvLyBDcmVhdGUgdGhlIHdhdmVzaGFwZXItbm9kZSB3ZSdsbCB1c2UgdG8gY3JlYXRlIHRoZSBkaXN0b3J0aW9uIGVmZmVjdC5cbiAgICAgIGdhaW5Ob2RlOiB0aGlzLmF1ZGlvQ29udGV4dC5jcmVhdGVHYWluKCksIC8vIENyZWF0ZSB0aGUgZ2Fpbi1ub2RlcyB3ZSB1c2UgdG8gaW5jcmVhc2UgdGhlIGdhaW4uXG4gICAgICBnYWluTm9kZTI6IHRoaXMuYXVkaW9Db250ZXh0LmNyZWF0ZUdhaW4oKSxcbiAgICAgIGJpcXVhZEZpbHRlck5vZGU6IHRoaXMuYXVkaW9Db250ZXh0LmNyZWF0ZUJpcXVhZEZpbHRlcigpLCAvLyBDcmVhdGUgdGhlIGJpcXVhZC1maWx0ZXItbm9kZSB3ZSdsbCB1c2UgdG8gY3JlYXRlIGEgbG93cGFzcyBmaWx0ZXIuXG4gICAgfTtcblxuICAgIC8vIFNldCB0aGUgb3ZlcnNhbXBsZSB2YWx1ZSB0byA0eCBieSBkZWZhdWx0LlxuICAgIHRoaXMubm9kZXMud2F2ZXNoYXBlci5vdmVyc2FtcGxlID0gJzR4JztcblxuICAgIC8vIFNldCB0aGUgdHlwZSBvZiB0byBsb3dwYXNzIGJ5IGRlZmF1bHQuXG4gICAgdGhpcy5ub2Rlcy5iaXF1YWRGaWx0ZXJOb2RlLnR5cGUgPSAnbG93cGFzcyc7XG5cbiAgICAvLyBTZXQgdGhlIGZyZXF1ZW5jeSB2YWx1ZSB0byAyMDAwIGJ5IGRlZmF1bHQuXG4gICAgdGhpcy5ub2Rlcy5iaXF1YWRGaWx0ZXJOb2RlLmZyZXF1ZW5jeS52YWx1ZSA9IDIwMDA7XG5cbiAgICAvLyBDb25uZWN0IGFsbCBub2RlcyB0b2dldGhlclxuICAgIHRoaXMubm9kZXMud2F2ZXNoYXBlci5jb25uZWN0KHRoaXMubm9kZXMuZ2Fpbk5vZGUpO1xuICAgIHRoaXMubm9kZXMuZ2Fpbk5vZGUuY29ubmVjdCh0aGlzLm5vZGVzLmdhaW5Ob2RlMik7XG4gICAgdGhpcy5ub2Rlcy5nYWluTm9kZTIuY29ubmVjdCh0aGlzLm5vZGVzLmJpcXVhZEZpbHRlck5vZGUpO1xuXG4gICAgLy8gU2V0IHRoZSB3YXZlc2hhcGVyLW5vZGUgYXMgdGhlIGlucHV0LW5vZGUuXG4gICAgdGhpcy5ub2RlID0gdGhpcy5ub2Rlcy53YXZlc2hhcGVyO1xuICAgIC8vIFNldCB0aGUgYmlxdWFkLWZpbHRlci1ub2RlIGFzIHRoZSBvdXRwdXQtbm9kZS5cbiAgICB0aGlzLm91dHB1dCA9IHRoaXMubm9kZXMuYmlxdWFkRmlsdGVyTm9kZTtcblxuICAgIC8vIFRoZSBkZWZhdWx0IGludGVuc2l0eSBpcyAxMDAuXG4gICAgdGhpcy5pbnRlbnNpdHkgPSAxMDA7XG5cbiAgICAvLyBUaGUgZGVmYXVsdCBnYWluIGlzIDEuXG4gICAgdGhpcy5nYWluID0gNTA7XG5cbiAgICAvLyAvLyBUaGUgbG93cGFzcyBmaWx0ZXIgaXMgdHVybmVkIG9mZiBieSBkZWZhdWx0LlxuICAgIHRoaXMubG93UGFzc0ZpbHRlciA9IGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIENhbGN1bGF0ZSBhIGRpc3RvcnRpb24gY3VydmUuXG4gICAqXG4gICAqIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMjIzMTI4NDEvd2F2ZXNoYXBlci1ub2RlLWluLXdlYmF1ZGlvLWhvdy10by1lbXVsYXRlLWRpc3RvcnRpb25cbiAgICpcbiAgICogQHBhcmFtICB7bnVtYmVyfSBpbnRlbnMgVGhlIGludGVuc2l0eSBvZiB0aGUgY3VydmUgbW9kaWZpY2F0aW9uLlxuICAgKiBAcmV0dXJuIHtGbG9hdDMyQXJyYXl9XG4gICAqL1xuICBjYWxjdWxhdGVEaXN0b3J0aW9uQ3VydmUoaW50ZW5zKSB7XG4gICAgY29uc3QgaW50ZW5zaXR5ID0gcGFyc2VJbnQoaW50ZW5zKSB8fCAxMDA7XG4gICAgY29uc3QgYW1vdW50ID0gNDQxMDA7XG4gICAgY29uc3QgZGVnID0gTWF0aC5QSSAvIDE4MDtcbiAgICBjb25zdCBjdXJ2ZSA9IG5ldyBGbG9hdDMyQXJyYXkoYW1vdW50KTtcbiAgICBsZXQgaSA9IDA7XG4gICAgbGV0IHg7XG5cbiAgICBmb3IgKDsgaSA8IGFtb3VudDsgKytpKSB7XG4gICAgICB4ID0gaSAqIDIgLyBhbW91bnQgLSAxO1xuICAgICAgY3VydmVbaV0gPSAoMyArIGludGVuc2l0eSkgKiB4ICogMjAgKiBkZWcgLyAoTWF0aC5QSSArIGludGVuc2l0eSAqIE1hdGguYWJzKHgpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY3VydmU7XG4gIH1cblxuICAvKipcbiAgICogR2V0dGVyIGZvciB0aGUgZWZmZWN0J3MgaW50ZW5zaXR5LlxuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqL1xuICBnZXQgaW50ZW5zaXR5KCkge1xuICAgIHJldHVybiB0aGlzLl9pbnRlbnNpdHk7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtICB7bnVtYmVyfSBpbnRlbnNpdHlcbiAgICogU2V0dGVyIGZvciB0aGUgZWZmZWN0J3MgaW50ZW5zaXR5LlxuICAgKi9cbiAgc2V0IGludGVuc2l0eShpbnRlbnNpdHkpIHtcbiAgICAvLyBTZXQgdGhlIGludGVybmFsIGludGVuc2l0eSB2YWx1ZS5cbiAgICB0aGlzLl9pbnRlbnNpdHkgPSBwYXJzZUludChpbnRlbnNpdHkpO1xuXG4gICAgLy8gU2V0IHRoZSBuZXcgY3VydmUgb2YgdGhlIHdhdmVzaGFwZXItbm9kZVxuICAgIHRoaXMubm9kZXMud2F2ZXNoYXBlci5jdXJ2ZSA9IHRoaXMuY2FsY3VsYXRlRGlzdG9ydGlvbkN1cnZlKHRoaXMuX2ludGVuc2l0eSk7XG4gIH1cblxuICAvKipcbiAgICogR2V0dGVyIGZvciB0aGUgZWZmZWN0J3MgZ2Fpbi5cbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKi9cbiAgZ2V0IGdhaW4oKSB7XG4gICAgcmV0dXJuIHRoaXMuX2dhaW47XG4gIH1cblxuICAvKipcbiAgICogU2V0dGVyIGZvciB0aGUgZWZmZWN0J3MgZ2Fpbi5cbiAgICogQHBhcmFtICB7bnVtYmVyfSBnYWluXG4gICAqL1xuICBzZXQgZ2FpbihnYWluKSB7XG4gICAgLy8gU2V0IHRoZSBpbnRlcm5hbCBnYWluIHZhbHVlLlxuICAgIHRoaXMuX2dhaW4gPSBwYXJzZUZsb2F0KGdhaW4pO1xuXG4gICAgLy8gU2V0IHRoZSBnYWluLW5vZGUncyBnYWluIHZhbHVlLlxuICAgIHRoaXMubm9kZXMuZ2Fpbk5vZGUuZ2Fpbi52YWx1ZSA9IHRoaXMuX2dhaW47XG4gICAgdGhpcy5ub2Rlcy5nYWluTm9kZTIuZ2Fpbi52YWx1ZSA9IDEgLyB0aGlzLl9nYWluO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHRlciBmb3IgdGhlIGxvd3Bhc3MgZmlsdGVyLlxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cbiAgZ2V0IGxvd1Bhc3NGaWx0ZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2xvd1Bhc3NGaWx0ZXI7XG4gIH1cblxuICAvKipcbiAgICogU2V0dGVyIGZvciB0aGUgbG93cGFzcyBmaWx0ZXIuXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gbG93UGFzc0ZpbHRlclxuICAgKi9cbiAgc2V0IGxvd1Bhc3NGaWx0ZXIobG93UGFzc0ZpbHRlcikge1xuICAgIC8vIFNldCB0aGUgaW50ZXJuYWwgbG93cGFzcyBmaWx0ZXIgdmFsdWUuXG4gICAgdGhpcy5fbG93UGFzc0ZpbHRlciA9ICEhbG93UGFzc0ZpbHRlcjtcbiAgICAvLyBTZXQgdGhlIGJpcXVhZC1maWx0ZXItbm9kZSdzIGZyZXF1ZW5jeS5cbiAgICB0aGlzLm5vZGVzLmJpcXVhZEZpbHRlck5vZGUuZnJlcXVlbmN5LnZhbHVlID0gKHRoaXMuX2xvd1Bhc3NGaWx0ZXIgPyAyMDAwIDogMTAwMCk7XG4gIH1cbn1cbiIsImltcG9ydCBNdWx0aUF1ZGlvTm9kZSBmcm9tICcuLi9NdWx0aUF1ZGlvTm9kZSc7XG5cbi8qKlxuICogVGhlIGF1ZGlvLWVmZmVjdHMgZmxhbmdlciBjbGFzcy5cbiAqIFRoaXMgY2xhc3MgbGV0cyB5b3UgYWRkIGEgZmxhbmdlciBlZmZlY3QuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZsYW5nZXIgZXh0ZW5kcyBNdWx0aUF1ZGlvTm9kZSB7XG4gIC8vIHByaXZhdGUgX2RlbGF5OiBudW1iZXI7XG4gIC8vIHByaXZhdGUgX2RlcHRoOiBudW1iZXI7XG4gIC8vIHByaXZhdGUgX2ZlZWRiYWNrOiBudW1iZXI7XG4gIC8vIHByaXZhdGUgX3NwZWVkOiBudW1iZXI7XG5cbiAgY29uc3RydWN0b3IoYXVkaW9Db250ZXh0KSB7XG4gICAgc3VwZXIoYXVkaW9Db250ZXh0KTtcblxuICAgIHRoaXMubm9kZXMgPSB7XG4gICAgICBpbnB1dEdhaW5Ob2RlOiBhdWRpb0NvbnRleHQuY3JlYXRlR2FpbigpLCAvLyBDcmVhdGUgdGhlIGlucHV0IGdhaW4tbm9kZVxuICAgICAgd2V0R2Fpbk5vZGU6IGF1ZGlvQ29udGV4dC5jcmVhdGVHYWluKCksIC8vIENyZWF0ZSB0aGUgd2V0bmVzcyBjb250cm9sbCBnYWluLW5vZGVcbiAgICAgIGRlbGF5Tm9kZTogYXVkaW9Db250ZXh0LmNyZWF0ZURlbGF5KCksIC8vIENyZWF0ZSB0aGUgZGVsYXkgbm9kZVxuICAgICAgZ2Fpbk5vZGU6IGF1ZGlvQ29udGV4dC5jcmVhdGVHYWluKCksIC8vIENyZWF0ZSB0aGUgZ2FpbiBjb250cm9sbCBnYWluLW5vZGVcbiAgICAgIGZlZWRiYWNrR2Fpbk5vZGU6IGF1ZGlvQ29udGV4dC5jcmVhdGVHYWluKCksIC8vIENyZWF0ZSB0aGUgZmVlZGJhY2sgY29udHJvbGwgZ2Fpbi1ub2RlXG4gICAgICBvc2NpbGxhdG9yTm9kZTogYXVkaW9Db250ZXh0LmNyZWF0ZU9zY2lsbGF0b3IoKSwgLy8gQ3JlYXRlIHRoZSBvc2NpbGF0b3Igbm9kZVxuICAgIH07XG5cbiAgICAvLyBXaXJlIGl0IGFsbCB1cFxuICAgIHRoaXMubm9kZXMub3NjaWxsYXRvck5vZGUuY29ubmVjdCh0aGlzLm5vZGVzLmdhaW5Ob2RlKTtcbiAgICB0aGlzLm5vZGVzLmdhaW5Ob2RlLmNvbm5lY3QodGhpcy5ub2Rlcy5kZWxheU5vZGUuZGVsYXlUaW1lKTtcbiAgICB0aGlzLm5vZGVzLmlucHV0R2Fpbk5vZGUuY29ubmVjdCh0aGlzLm5vZGVzLndldEdhaW5Ob2RlKTtcbiAgICB0aGlzLm5vZGVzLmlucHV0R2Fpbk5vZGUuY29ubmVjdCh0aGlzLm5vZGVzLmRlbGF5Tm9kZSk7XG4gICAgdGhpcy5ub2Rlcy5kZWxheU5vZGUuY29ubmVjdCh0aGlzLm5vZGVzLndldEdhaW5Ob2RlKTtcbiAgICB0aGlzLm5vZGVzLmRlbGF5Tm9kZS5jb25uZWN0KHRoaXMubm9kZXMuZmVlZGJhY2tHYWluTm9kZSk7XG4gICAgdGhpcy5ub2Rlcy5mZWVkYmFja0dhaW5Ob2RlLmNvbm5lY3QodGhpcy5ub2Rlcy5pbnB1dEdhaW5Ob2RlKTtcblxuICAgIC8vIFNldHVwIHRoZSBvc2NpbGxhdG9yXG4gICAgdGhpcy5ub2Rlcy5vc2NpbGxhdG9yTm9kZS50eXBlID0gJ3NpbmUnO1xuICAgIHRoaXMubm9kZXMub3NjaWxsYXRvck5vZGUuc3RhcnQoMCk7XG5cbiAgICAvLyBTZXQgdGhlIGlucHV0IGdhaW4tbm9kZSBhcyB0aGUgaW5wdXQtbm9kZS5cbiAgICB0aGlzLm5vZGUgPSB0aGlzLm5vZGVzLmlucHV0R2Fpbk5vZGU7XG5cbiAgICAvLyBTZXQgdGhlIG91dHB1dCBnYWluLW5vZGUgYXMgdGhlIG91dHB1dC1ub2RlLlxuICAgIHRoaXMub3V0cHV0ID0gdGhpcy5ub2Rlcy53ZXRHYWluTm9kZTtcblxuICAgIC8vIFNldCB0aGUgZGVmYXVsdCBkZWxheSBvZiAwLjAwNSBzZWNvbmRzXG4gICAgdGhpcy5kZWxheSA9IDAuMDA1O1xuXG4gICAgLy8gU2V0IHRoZSBkZWZhdWx0IGRlcHRoIHRvIDAuMDAyO1xuICAgIHRoaXMuZGVwdGggPSAwLjAwMjtcblxuICAgIC8vIFNldCB0aGUgZGVmYXVsdCBmZWVkYmFjayB0byAwLjVcbiAgICB0aGlzLmZlZWRiYWNrID0gMC41O1xuXG4gICAgLy8gU2V0IHRoZSBkZWZhdWx0IHNwZWVkIHRvIDAuMjVIelxuICAgIHRoaXMuc3BlZWQgPSAwLjI1O1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHRlciBmb3IgdGhlIGVmZmVjdCdzIGRlbGF5XG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICovXG4gIGdldCBkZWxheSgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGVsYXk7XG4gIH1cblxuICAvKipcbiAgICogU2V0dGVyIGZvciB0aGUgZWZmZWN0J3MgZGVsYXlcbiAgICogQHBhcmFtICB7bnVtYmVyfSBkZWxheVxuICAgKi9cbiAgc2V0IGRlbGF5KGRlbGF5KSB7XG4gICAgLy8gU2V0IHRoZSBpbnRlcm5hbCBkZWxheSB2YWx1ZVxuICAgIHRoaXMuX2RlbGF5ID0gcGFyc2VGbG9hdChkZWxheSk7XG5cbiAgICAvLyBTZXQgdGhlIG5ldyB2YWx1ZSBmb3IgdGhlIGRlbGF5LW5vZGVcbiAgICB0aGlzLm5vZGVzLmRlbGF5Tm9kZS5kZWxheVRpbWUudmFsdWUgPSB0aGlzLl9kZWxheTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXR0ZXIgZm9yIHRoZSBlZmZlY3QncyBkZXB0aFxuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqL1xuICBnZXQgZGVwdGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RlcHRoO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHRlciBmb3IgdGhlIGVmZmVjdCdzIGRlcHRoXG4gICAqIEBwYXJhbSAge251bWJlcn0gZGVwdGhcbiAgICovXG4gIHNldCBkZXB0aChkZXB0aCkge1xuICAgIC8vIFNldCB0aGUgaW50ZXJuYWwgZGVwdGggdmFsdWVcbiAgICB0aGlzLl9kZXB0aCA9IHBhcnNlRmxvYXQoZGVwdGgpO1xuXG4gICAgLy8gU2V0IHRoZSBnYWluIHZhbHVlIG9mIHRoZSBnYWluLW5vZGVcbiAgICB0aGlzLm5vZGVzLmdhaW5Ob2RlLmdhaW4udmFsdWUgPSB0aGlzLl9kZXB0aDtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXR0ZXIgZm9yIHRoZSBlZmZlY3QncyBmZWVkYmFja1xuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqL1xuICBnZXQgZmVlZGJhY2soKSB7XG4gICAgcmV0dXJuIHRoaXMuX2ZlZWRiYWNrO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHRlciBmb3IgdGhlIGVmZmVjdCdzIGZlZWRiYWNrXG4gICAqIEBwYXJhbSAge251bWJlcn0gZmVlZGJhY2tcbiAgICovXG4gIHNldCBmZWVkYmFjayhmZWVkYmFjaykge1xuICAgIC8vIFNldCB0aGUgaW50ZXJuYWwgZmVlZGJhY2sgdmFsdWVcbiAgICB0aGlzLl9mZWVkYmFjayA9IHBhcnNlRmxvYXQoZmVlZGJhY2spO1xuXG4gICAgLy8gU2V0IHRoZSBmZWVkYmFjayBnYWluLW5vZGUgdmFsdWVcbiAgICB0aGlzLm5vZGVzLmZlZWRiYWNrR2Fpbk5vZGUuZ2Fpbi52YWx1ZSA9IHRoaXMuX2ZlZWRiYWNrO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHRlciBmb3IgdGhlIGVmZmVjdCdzIHNwZWVkXG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICovXG4gIGdldCBzcGVlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc3BlZWQ7XG4gIH1cblxuICAvKipcbiAgICogU2V0dGVyIGZvciB0aGUgZWZmZWN0J3Mgc3BlZWRcbiAgICogQHBhcmFtICB7bnVtYmVyfSBzcGVlZFxuICAgKi9cbiAgc2V0IHNwZWVkKHNwZWVkKSB7XG4gICAgLy8gU2V0IHRoZSBpbnRlcm5hbCBzcGVlZCB2YWx1ZVxuICAgIHRoaXMuX3NwZWVkID0gcGFyc2VGbG9hdChzcGVlZCk7XG5cbiAgICAvLyBTZXQgdGhlIHNwZWVkIGdhaW4tbm9kZSB2YWx1ZVxuICAgIHRoaXMubm9kZXMub3NjaWxsYXRvck5vZGUuZnJlcXVlbmN5LnZhbHVlID0gdGhpcy5fc3BlZWQ7XG4gIH1cbn1cbiIsIlxuaW1wb3J0IFNpbmdsZUF1ZGlvTm9kZSBmcm9tICcuLi9TaW5nbGVBdWRpb05vZGUnO1xuaW1wb3J0IE11bHRpQXVkaW9Ob2RlIGZyb20gJy4uL011bHRpQXVkaW9Ob2RlJztcbmltcG9ydCB7aGFzR2V0VXNlck1lZGlhfSBmcm9tICcuLi8uLi9VdGlsJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5wdXQgZXh0ZW5kcyBTaW5nbGVBdWRpb05vZGUge1xuICBjb25zdHJ1Y3RvcihhdWRpb0NvbnRleHQpIHtcbiAgICBzdXBlcihhdWRpb0NvbnRleHQpO1xuICAgIHRoaXMuX2RlZmVycmVkQ29ubmVjdHMgPSBbXTtcbiAgICB0aGlzLl9oYXNQZXJtaXNzaW9ucyA9IGZhbHNlO1xuICB9XG5cbiAgZ2V0IGlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLm5vZGU7XG4gIH1cbiAgc2V0IGlucHV0KHN0cmVhbSkge1xuICAgIC8vIENyZWF0ZSBhIG1lZGlhLXN0cmVhbSBzb3VyY2UuXG4gICAgdGhpcy5ub2RlID0gdGhpcy5hdWRpb0NvbnRleHQuY3JlYXRlTWVkaWFTdHJlYW1Tb3VyY2Uoc3RyZWFtKTtcbiAgfVxuICAvKipcbiAgICAgKiBHZXQgeW91ciBtaWNyb3Bob25lIHNvdW5kIGFzIGlucHV0LlxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8QXVkaW9Ob2RlPn0gUmVzb2x2ZXMgd2hlbiB5b3UgYWNjZXB0IHRvIHVzZSB0aGUgbWljcm9waG9uZS5cbiAgICAgKi9cbiAgZ2V0VXNlck1lZGlhKCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KT0+IHtcbiAgICAgIGlmIChoYXNHZXRVc2VyTWVkaWEpIHtcbiAgICAgICAgLy8gRmlyZWZveFxuICAgICAgICBpZiAobmF2aWdhdG9yLm1vekdldFVzZXJNZWRpYSkge1xuICAgICAgICAgIG5hdmlnYXRvci5tZWRpYURldmljZXMuZ2V0VXNlck1lZGlhKHtcbiAgICAgICAgICAgIGF1ZGlvOiB7XG4gICAgICAgICAgICAgIG9wdGlvbmFsOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgJ2VjaG9DYW5jZWxsYXRpb24nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICdtb3pOb2lzZVN1cHByZXNzaW9uJzogZmFsc2UsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAnbW96QXV0b0dhaW5Db250cm9sJzogZmFsc2UsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSwgKHN0cmVhbSk9PiB7XG4gICAgICAgICAgICB0aGlzLmlucHV0ID0gc3RyZWFtO1xuICAgICAgICAgICAgdGhpcy5faGFzUGVybWlzc2lvbnMgPSB0cnVlO1xuICAgICAgICAgICAgd2luZG93LnN0cmVhbSA9IHN0cmVhbTsgLy8gbWFrZSBzdHJlYW0gYXZhaWxhYmxlIHRvIGNvbnNvbGVcbiAgICAgICAgICAgIC8vIENvbm5lY3QgdGhlIGRlZmZlcmVkIGNvbm5lY3RzXG4gICAgICAgICAgICB0aGlzLl9kZWZlcnJlZENvbm5lY3RzLmZvckVhY2goKG5vZGUpPT4ge1xuICAgICAgICAgICAgICB0aGlzLmNvbm5lY3Qobm9kZSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcmVzb2x2ZShzdHJlYW0pO1xuICAgICAgICAgIH0sIChlcnJvcik9PiB7XG4gICAgICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgICAgIH0pO1xuICAgICAgICAvLyBDaHJvbWVcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBuYXZpZ2F0b3IuZ2V0VXNlck1lZGlhKHtcbiAgICAgICAgICAgIGF1ZGlvOiB7XG4gICAgICAgICAgICAgIG9wdGlvbmFsOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgJ2VjaG9DYW5jZWxsYXRpb24nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICdtb3pOb2lzZVN1cHByZXNzaW9uJzogZmFsc2UsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAnbW96QXV0b0dhaW5Db250cm9sJzogZmFsc2UsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSwgKHN0cmVhbSk9PiB7XG4gICAgICAgICAgICB0aGlzLmlucHV0ID0gc3RyZWFtO1xuICAgICAgICAgICAgdGhpcy5faGFzUGVybWlzc2lvbnMgPSB0cnVlO1xuICAgICAgICAgICAgd2luZG93LnN0cmVhbSA9IHN0cmVhbTsgLy8gbWFrZSBzdHJlYW0gYXZhaWxhYmxlIHRvIGNvbnNvbGVcbiAgICAgICAgICAgIC8vIENvbm5lY3QgdGhlIGRlZmZlcmVkIGNvbm5lY3RzXG4gICAgICAgICAgICB0aGlzLl9kZWZlcnJlZENvbm5lY3RzLmZvckVhY2goKG5vZGUpPT4ge1xuICAgICAgICAgICAgICB0aGlzLmNvbm5lY3Qobm9kZSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcmVzb2x2ZShzdHJlYW0pO1xuICAgICAgICAgIH0sIChlcnJvcik9PiB7XG4gICAgICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZWplY3QoRXJyb3IoJ1lvdXIgYnJvd3NlciBkb2VzIG5vdCBzdXBwb3J0IHRoZSB1c2Ugb2YgdXNlci1tZWRpYSwgcGxlYXNlIHVwZ3JhZGUgb3IgdXNlIGFub3RoZXIgYnJvd3NlciEnKSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgLyoqXG4gICAgICogQ29ubmVjdCB0aGUgZWZmZWN0IHRvIG90aGVyIGVmZmVjdHMgb3IgbmF0aXZlIGF1ZGlvLW5vZGVzLlxuICAgICAqIEBwYXJhbSAge0F1ZGlvTm9kZXxTaW5nbGVBdWRpb05vZGV8TXVsdGlBdWRpb05vZGV9IG5vZGVcbiAgICAgKiBAcmV0dXJuIHtBdWRpb05vZGV8U2luZ2xlQXVkaW9Ob2RlfE11bHRpQXVkaW9Ob2RlfVxuICAgICAqL1xuICBjb25uZWN0KG5vZGUpIHtcbiAgICAvLyBJZiB0aGVyZSBpcyBubyBpbnB1dCBub2RlIHlldCwgY29ubmVjdCB3aGVuIHRoZXJlIGlzIGEgbm9kZVxuICAgIGlmICh0eXBlb2YgdGhpcy5ub2RlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhpcy5fZGVmZXJyZWRDb25uZWN0cy5wdXNoKG5vZGUpO1xuICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfVxuICAgIGlmIChub2RlIGluc3RhbmNlb2YgU2luZ2xlQXVkaW9Ob2RlIHx8IG5vZGUgaW5zdGFuY2VvZiBNdWx0aUF1ZGlvTm9kZSkge1xuICAgICAgdGhpcy5ub2RlLmNvbm5lY3Qobm9kZS5ub2RlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5ub2RlLmNvbm5lY3Qobm9kZSk7XG4gICAgfVxuICAgIHJldHVybiBub2RlO1xuICB9XG5cbiAgLy8gR2V0IGEgbGlzdCBvZiBhdWRpbyBpbi1hbmQtb3V0cHV0IGRldmljZXMgZGV2aWNlcy5cbiAgLy8gQHJldHVybiBBIGxpc3Qgb2YgdGhlIGF2YWlsYWJsZSBhdWRpbyBpbi1hbmQtb3V0cHV0IGRldmljZXMuXG4gIGdldEF1ZGlvRGV2aWNlcygpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCk9PiB7XG4gICAgICBpZiAodGhpcy5faGFzUGVybWlzc2lvbnMpIHtcbiAgICAgICAgbmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5lbnVtZXJhdGVEZXZpY2VzKCkudGhlbigoZGV2aWNlcyk9PiB7XG4gICAgICAgICAgcmVzb2x2ZShkZXZpY2VzLmZpbHRlcigoZGV2aWNlKT0+IHtcbiAgICAgICAgICAgIHJldHVybiBkZXZpY2Uua2luZCAmJiBkZXZpY2Uua2luZCA9PT0gJ2F1ZGlvaW5wdXQnO1xuICAgICAgICAgIH0pKTtcbiAgICAgICAgfSkuY2F0Y2goKGVycm9yKT0+IHtcbiAgICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZ2V0VXNlck1lZGlhKCkudGhlbigoKT0+IHtcbiAgICAgICAgICBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzLmVudW1lcmF0ZURldmljZXMoKS50aGVuKChkZXZpY2VzKT0+IHtcbiAgICAgICAgICAgIHJlc29sdmUoZGV2aWNlcy5maWx0ZXIoKGRldmljZSk9PiB7XG4gICAgICAgICAgICAgIHJldHVybiBkZXZpY2Uua2luZCAmJiBkZXZpY2Uua2luZCA9PT0gJ2F1ZGlvaW5wdXQnO1xuICAgICAgICAgICAgfSkpO1xuICAgICAgICAgIH0pLmNhdGNoKChlcnJvcik9PiB7XG4gICAgICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9KS5jYXRjaCgoZXJyb3IpPT4ge1xuICAgICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG4iLCJpbXBvcnQgU2luZ2xlQXVkaW9Ob2RlIGZyb20gJy4uL1NpbmdsZUF1ZGlvTm9kZSc7XG5cbi8qKlxuICogVGhlIGF1ZGlvLWVmZmVjdHMgb3V0cHV0IGNsYXNzLlxuICogVGhpcyBjbGFzcyBjb25uZWN0cyB0byB5b3VyIGRldmljZSdzIGF1ZGlvIG91dHB1dC5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3V0cHV0IGV4dGVuZHMgU2luZ2xlQXVkaW9Ob2RlIHtcbiAgY29uc3RydWN0b3IoYXVkaW9Db250ZXh0KSB7XG4gICAgc3VwZXIoYXVkaW9Db250ZXh0KTtcblxuICAgIGlmICh0aGlzLmF1ZGlvQ29udGV4dCkge1xuICAgICAgdGhpcy5ub2RlID0gYXVkaW9Db250ZXh0LmRlc3RpbmF0aW9uO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IE11bHRpQXVkaW9Ob2RlIGZyb20gJy4uL011bHRpQXVkaW9Ob2RlJztcblxuLyoqXG4gKiBUaGUgYXVkaW8tZWZmZWN0cyByZXZlcmIgY2xhc3MuXG4gKiBUaGlzIGNsYXNzIGxldHMgeW91IGFkZCBhIHJldmVyYiBlZmZlY3QuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJldmVyYiBleHRlbmRzIE11bHRpQXVkaW9Ob2RlIHtcbiAgLy8gX3dldDtcbiAgLy8gX2xldmVsO1xuICAvLyBfYnVmZmVyO1xuXG4gIGNvbnN0cnVjdG9yKGF1ZGlvQ29udGV4dCwgYnVmZmVyKSB7XG4gICAgc3VwZXIoYXVkaW9Db250ZXh0KTtcblxuICAgIHRoaXMubm9kZXMgPSB7XG4gICAgICBpbnB1dEdhaW5Ob2RlOiBhdWRpb0NvbnRleHQuY3JlYXRlR2FpbigpLCAvLyBDcmVhdGUgdGhlIGlucHV0IGFuZCBvdXRwdXQgZ2Fpbi1ub2RlXG4gICAgICBvdXRwdXRHYWluTm9kZTogYXVkaW9Db250ZXh0LmNyZWF0ZUdhaW4oKSxcbiAgICAgIGNvbnZvbHZlck5vZGU6IGF1ZGlvQ29udGV4dC5jcmVhdGVDb252b2x2ZXIoKSwgLy8gQ3JlYXRlIHRoZSBjb252b2x2ZXIgbm9kZSB0byBjcmVhdGUgdGhlIHJldmVyYiBlZmZlY3RcbiAgICAgIHdldEdhaW5Ob2RlOiBhdWRpb0NvbnRleHQuY3JlYXRlR2FpbigpLCAvLyBDcmVhdGUgdGhlIHdldG5lc3MgY29udHJvbGwgZ2Fpbi1ub2RlXG4gICAgICBsZXZlbEdhaW5Ob2RlOiBhdWRpb0NvbnRleHQuY3JlYXRlR2FpbigpLCAvLyBDcmVhdGUgdGhlIGxldmVsIGNvbnRyb2xsIGdhaW4tbm9kZVxuICAgIH07XG5cbiAgICAvLyBXaXJlIGl0IGFsbCB1cFxuICAgIHRoaXMubm9kZXMuaW5wdXRHYWluTm9kZS5jb25uZWN0KHRoaXMubm9kZXMuY29udm9sdmVyTm9kZSk7XG4gICAgdGhpcy5ub2Rlcy5pbnB1dEdhaW5Ob2RlLmNvbm5lY3QodGhpcy5ub2Rlcy53ZXRHYWluTm9kZSk7XG4gICAgdGhpcy5ub2Rlcy5jb252b2x2ZXJOb2RlLmNvbm5lY3QodGhpcy5ub2Rlcy5sZXZlbEdhaW5Ob2RlKTtcbiAgICB0aGlzLm5vZGVzLmxldmVsR2Fpbk5vZGUuY29ubmVjdCh0aGlzLm5vZGVzLm91dHB1dEdhaW5Ob2RlKTtcbiAgICB0aGlzLm5vZGVzLndldEdhaW5Ob2RlLmNvbm5lY3QodGhpcy5ub2Rlcy5vdXRwdXRHYWluTm9kZSk7XG5cbiAgICAvLyBTZXQgdGhlIGlucHV0IGdhaW4tbm9kZSBhcyB0aGUgaW5wdXQtbm9kZS5cbiAgICB0aGlzLm5vZGUgPSB0aGlzLm5vZGVzLmlucHV0R2Fpbk5vZGU7XG5cbiAgICAvLyBTZXQgdGhlIG91dHB1dCBnYWluLW5vZGUgYXMgdGhlIG91dHB1dC1ub2RlLlxuICAgIHRoaXMub3V0cHV0ID0gdGhpcy5ub2Rlcy5vdXRwdXRHYWluTm9kZTtcblxuICAgIC8vIFNldCB0aGUgZGVmYXVsdCB3ZXRuZXNzIHRvIDAuNVxuICAgIHRoaXMud2V0ID0gMC41O1xuXG4gICAgLy8gU2V0IHRoZSBkZWZhdWx0IGxldmVsIHRvIDFcbiAgICB0aGlzLmxldmVsID0gMTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIHN0YW5kYXJkIGlucHV0IHJlc3BvbnNlZmlsZS5cbiAgICogQHBhcmFtIHtBbnl9IGZpbGVcbiAgICogQHJldHVybiB7UHJvbWlzZTxBdWRpb0J1ZmZlcj59XG4gICAqL1xuICBzdGF0aWMgZ2V0SW5wdXRSZXNwb25zZUZpbGUoZmlsZSkge1xuICAgIHJldHVybiBmZXRjaChmaWxlLCB7XG4gICAgICBtZXRob2Q6ICdnZXQnLFxuICAgIH0pLnRoZW4oKHJlc3BvbnNlKT0+IHtcbiAgICAgIHJldHVybiByZXNwb25zZS5hcnJheUJ1ZmZlcigpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHRlciBmb3IgdGhlIGVmZmVjdCdzIHdldG5lc3NcbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKi9cbiAgZ2V0IHdldCgpIHtcbiAgICByZXR1cm4gdGhpcy5fd2V0O1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHRlciBmb3IgdGhlIGVmZmVjdCdzIHdldG5lc3NcbiAgICogQHBhcmFtICB7bnVtYmVyfSB3ZXRuZXNzXG4gICAqL1xuICBzZXQgd2V0KHdldG5lc3MpIHtcbiAgICAvLyBTZXQgdGhlIGludGVybmFsIHdldG5lc3MgdmFsdWVcbiAgICB0aGlzLl93ZXQgPSBwYXJzZUZsb2F0KHdldG5lc3MpO1xuXG4gICAgLy8gU2V0IHRoZSBuZXcgdmFsdWUgZm9yIHRoZSB3ZXRuZXNzIGNvbnRyb2xsIGdhaW4tbm9kZVxuICAgIHRoaXMubm9kZXMud2V0R2Fpbk5vZGUuZ2Fpbi52YWx1ZSA9IHRoaXMuX3dldDtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXR0ZXIgZm9yIHRoZSBlZmZlY3QncyBsZXZlbFxuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqL1xuICBnZXQgbGV2ZWwoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2xldmVsO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHRlciBmb3IgdGhlIGVmZmVjdCdzIGxldmVsXG4gICAqIEBwYXJhbSAge251bWJlcn0gbGV2ZWxcbiAgICovXG4gIHNldCBsZXZlbChsZXZlbCkge1xuICAgIC8vIFNldCB0aGUgaW50ZXJuYWwgbGV2ZWwgdmFsdWVcbiAgICB0aGlzLl9sZXZlbCA9IHBhcnNlRmxvYXQobGV2ZWwpO1xuXG4gICAgLy8gU2V0IHRoZSBkZWxheVRpbWUgdmFsdWUgb2YgdGhlIGRlbGF5LW5vZGVcbiAgICB0aGlzLm5vZGVzLmxldmVsR2Fpbk5vZGUuZ2Fpbi52YWx1ZSA9IHRoaXMuX2xldmVsO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHRlciBmb3IgdGhlIGVmZmVjdCdzIGNvbnZvbHZlciBidWZmZXJcbiAgICogQHJldHVybiB7QnVmZmVyfVxuICAgKi9cbiAgZ2V0IGJ1ZmZlcigpIHtcbiAgICByZXR1cm4gdGhpcy5fYnVmZmVyO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHRlciBmb3IgdGhlIGVmZmVjdCdzIGNvbnZvbHZlciBidWZmZXJcbiAgICogQHBhcmFtICB7U3RyZWFtfSBidWZmZXJcbiAgICovXG4gIHNldCBidWZmZXIoYnVmZmVyKSB7XG4gICAgdGhpcy5hdWRpb0NvbnRleHQuZGVjb2RlQXVkaW9EYXRhKGJ1ZmZlciwgKGJ1ZmZlcik9PiB7XG4gICAgICAvLyBTZXQgdGhlIGludGVybmFsIGJ1ZmZlciB2YWx1ZVxuICAgICAgdGhpcy5fYnVmZmVyID0gYnVmZmVyO1xuXG4gICAgICAvLyBTZXQgdGhlIGJ1ZmZlciBnYWluLW5vZGUgdmFsdWVcbiAgICAgIHRoaXMubm9kZXMuY29udm9sdmVyTm9kZS5idWZmZXIgPSB0aGlzLl9idWZmZXI7XG4gICAgfSk7XG4gIH1cbn1cbiIsImltcG9ydCBTaW5nbGVBdWRpb05vZGUgZnJvbSAnLi4vU2luZ2xlQXVkaW9Ob2RlJztcblxuLyoqXG4gKiBUaGUgYXVkaW8tZWZmZWN0cyB0cmVtb2xvIGNsYXNzLlxuICogVGhpcyBjbGFzcyBsZXRzIHlvdSBhZGQgYSB0cmVtb2xvIGVmZmVjdC5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVHJlbW9sbyBleHRlbmRzIFNpbmdsZUF1ZGlvTm9kZSB7XG4gIC8vIHByaXZhdGUgX3NwZWVkOiBudW1iZXI7XG5cbiAgY29uc3RydWN0b3IoYXVkaW9Db250ZXh0KSB7XG4gICAgc3VwZXIoYXVkaW9Db250ZXh0KTtcblxuICAgIHRoaXMubm9kZXMgPSB7XG4gICAgICBnYWluTm9kZTogYXVkaW9Db250ZXh0LmNyZWF0ZUdhaW4oKSwgLy8gQ3JlYXRlIHRoZSBnYWluLW5vZGVcbiAgICAgIG9zY2lsbGF0b3JOb2RlOiBhdWRpb0NvbnRleHQuY3JlYXRlT3NjaWxsYXRvcigpLCAvLyBDcmVhdGUgdGhlIG9zY2lsYXRvciBub2RlXG4gICAgfTtcblxuICAgIC8vIFdpcmUgaXQgYWxsIHVwXG4gICAgdGhpcy5ub2Rlcy5vc2NpbGxhdG9yTm9kZS5jb25uZWN0KHRoaXMubm9kZXMuZ2Fpbk5vZGUuZ2Fpbik7XG5cbiAgICAvLyBTZXR1cCB0aGUgb3NjaWxsYXRvclxuICAgIHRoaXMubm9kZXMub3NjaWxsYXRvck5vZGUudHlwZSA9ICdzaW5lJztcbiAgICB0aGlzLm5vZGVzLm9zY2lsbGF0b3JOb2RlLnN0YXJ0KDApO1xuXG4gICAgLy8gU2V0IHRoZSBnYWluLW5vZGUgYXMgdGhlIG1haW4gbm9kZS5cbiAgICB0aGlzLm5vZGUgPSB0aGlzLm5vZGVzLmdhaW5Ob2RlO1xuXG4gICAgLy8gU2V0IHRoZSBkZWZhdWx0IHNwZWVkIHRvIDIwSHpcbiAgICB0aGlzLnNwZWVkID0gMjA7XG4gIH1cblxuICAvKipcbiAgICogR2V0dGVyIGZvciB0aGUgZWZmZWN0J3Mgc3BlZWRcbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKi9cbiAgZ2V0IHNwZWVkKCkge1xuICAgIHJldHVybiB0aGlzLl9zcGVlZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXR0ZXIgZm9yIHRoZSBlZmZlY3QncyBzcGVlZFxuICAgKiBAcGFyYW0gIHtudW1iZXJ9IHNwZWVkXG4gICAqL1xuICBzZXQgc3BlZWQoc3BlZWQpIHtcbiAgICAvLyBTZXQgdGhlIGludGVybmFsIHNwZWVkIHZhbHVlXG4gICAgdGhpcy5fc3BlZWQgPSBwYXJzZUZsb2F0KHNwZWVkKTtcblxuICAgIC8vIFNldCB0aGUgbmV3IHZhbHVlIGZvciB0aGUgb3NjaWxsYXRvciBmcmVxdWVuY3lcbiAgICB0aGlzLm5vZGVzLm9zY2lsbGF0b3JOb2RlLmZyZXF1ZW5jeS52YWx1ZSA9IHRoaXMuX3NwZWVkO1xuICB9XG59XG4iLCJpbXBvcnQgU2luZ2xlQXVkaW9Ob2RlIGZyb20gJy4uL1NpbmdsZUF1ZGlvTm9kZSc7XG5cbi8qKlxuICogVGhlIGF1ZGlvLWVmZmVjdHMgdm9sdW1lIGNsYXNzLlxuICogVGhpcyBjbGFzcyBsZXRzIHlvdSBjaGFuZ2UgdGhlIHZvbHVtZSBvZiB0aGUgYXVkaW8gc2lnbmFsLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWb2x1bWUgZXh0ZW5kcyBTaW5nbGVBdWRpb05vZGUge1xuICBjb25zdHJ1Y3RvcihhdWRpb0NvbnRleHQpIHtcbiAgICBzdXBlcihhdWRpb0NvbnRleHQpO1xuXG4gICAgLy8gQ3JlYXRlIHRoZSBnYWluLW5vZGUgd2hpY2ggd2UnbGwgdXNlIHRvIGNoYW5nZSB0aGUgdm9sdW1lLlxuICAgIHRoaXMubm9kZSA9IHRoaXMuYXVkaW9Db250ZXh0LmNyZWF0ZUdhaW4oKTtcblxuICAgIC8vIFRoZSBpbml0aWFsIHZvbHVtZSBsZXZlbCBpcyAxMDAlLlxuICAgIHRoaXMubGV2ZWwgPSAxO1xuXG4gICAgLy8gVGhlIGVmZmVjdCBpcyBub3QgbXV0ZWQgYnkgZGVmYXVsdC5cbiAgICB0aGlzLm11dGUgPSBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgICAqIEdldHRlciBmb3IgdGhlIGVmZmVjdHMgdm9sdW1lLlxuICAgICAqIEByZXR1cm4ge0Zsb2F0fVxuICAgICAqL1xuICBnZXQgbGV2ZWwoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2xldmVsO1xuICB9XG5cbiAgLyoqXG4gICAgICogU2V0dGVyIGZvciB0aGUgZWZmZWN0cyB2b2x1bWUuXG4gICAgICogQHBhcmFtICB7RmxvYXR9IHZvbHVtZSBUaGUgdm9sdW1lLCB0aXBpY2FsIGJldHdlZW4gMCBhbmQgMS5cbiAgICAgKi9cbiAgc2V0IGxldmVsKHZvbHVtZSkge1xuICAgIC8vIFBhcnNlIHRoZSB2b2x1bWUsIGl0IGNhbiBub3QgYmUgbG93ZXIgdGhhbiAwLlxuICAgIGxldCB2b2wgPSBwYXJzZUZsb2F0KHZvbHVtZSk7XG5cbiAgICB2b2wgPSAodm9sID49IDAgPyB2b2wgOiAwKTtcblxuICAgIC8vIFNldCB0aGUgaW50ZXJuYWwgdm9sdW1lIHZhbHVlLlxuICAgIHRoaXMuX2xldmVsID0gdm9sO1xuXG4gICAgLy8gU2V0IHRoZSBnYWluTm9kZSdzIGdhaW4gdmFsdWUuXG4gICAgdGhpcy5ub2RlLmdhaW4udmFsdWUgPSB2b2w7XG5cbiAgICAvLyBTZXQgdGhlIGludGVybmFsIG11dGUgdmFsdWUuXG4gICAgdGhpcy5fbXV0ZSA9ICh2b2wgPT09IDApO1xuICB9XG5cbiAgLyoqXG4gICAgICogR2V0dGVyIGZvciB0aGUgZWZmY3RzIG11dGUgZnVuY3Rpb25hbGl0eS5cbiAgICAgKiBAcmV0dXJuIHtbdHlwZV19IFtkZXNjcmlwdGlvbl1cbiAgICAgKi9cbiAgZ2V0IG11dGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX211dGU7XG4gIH1cblxuICAvKipcbiAgICAgKiBTZXR0ZXIgZm9yIHRoZSBlZmZlY3RzIG11dGUgZnVuY3Rpb25hbGl0eS5cbiAgICAgKiBAcGFyYW0gIHtCb29sZWFufSBtdXRlIFdoZXRoZXIgdGhlIGVmZmVjdCBpcyBtdXRlZC5cbiAgICAgKi9cbiAgc2V0IG11dGUobXV0ZSkge1xuICAgIC8vIFNldCB0aGUgaW50ZXJuYWwgbXV0ZSB2YWx1ZS5cbiAgICB0aGlzLl9tdXRlID0gISFtdXRlO1xuXG4gICAgaWYgKHRoaXMuX211dGUpIHtcbiAgICAgIC8vIEtlZXAgdHJhY2sgb2YgdGhlIHZvbHVtZSBiZWZvcmUgbXV0aW5nXG4gICAgICB0aGlzLl9sZXZlbEJlZm9yZU11dGUgPSB0aGlzLmxldmVsO1xuXG4gICAgICAvLyBTZXQgdGhlIHZvbHVtZSB0byAwXG4gICAgICB0aGlzLmxldmVsID0gMDtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gU2V0IHRoZSB2b2x1bWUgdG8gdGhlIHByZXZpb3VzIHZvbHVtZS5cbiAgICAgIHRoaXMubGV2ZWwgPSB0aGlzLl9sZXZlbEJlZm9yZU11dGUgfHwgdGhpcy5fbGV2ZWw7XG4gICAgfVxuICB9XG59XG4iLCJcbmltcG9ydCBEZWxheSBmcm9tICcuL2F1ZGlvLW5vZGVzL2VmZmVjdHMvRGVsYXknO1xuaW1wb3J0IERpc3RvcnRpb24gZnJvbSAnLi9hdWRpby1ub2Rlcy9lZmZlY3RzL0Rpc3RvcnRpb24nO1xuaW1wb3J0IEZsYW5nZXIgZnJvbSAnLi9hdWRpby1ub2Rlcy9lZmZlY3RzL0ZsYW5nZXInO1xuaW1wb3J0IElucHV0IGZyb20gJy4vYXVkaW8tbm9kZXMvZWZmZWN0cy9JbnB1dCc7XG5pbXBvcnQgT3V0cHV0IGZyb20gJy4vYXVkaW8tbm9kZXMvZWZmZWN0cy9PdXRwdXQnO1xuaW1wb3J0IFJldmVyYiBmcm9tICcuL2F1ZGlvLW5vZGVzL2VmZmVjdHMvUmV2ZXJiJztcbmltcG9ydCBUcmVtb2xvIGZyb20gJy4vYXVkaW8tbm9kZXMvZWZmZWN0cy9UcmVtb2xvJztcbmltcG9ydCBWb2x1bWUgZnJvbSAnLi9hdWRpby1ub2Rlcy9lZmZlY3RzL1ZvbHVtZSc7XG5pbXBvcnQge2hhc0F1ZGlvQ29udGV4dCwgaGFzR2V0VXNlck1lZGlhLCBkZXZpY2VMaXN0LCBkZXZpY2VMaXN0SGFuZGxlcn0gZnJvbSAnLi9VdGlsJztcblxuZXhwb3J0IHtcbiAgRGVsYXksXG4gIERpc3RvcnRpb24sXG4gIEZsYW5nZXIsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIFJldmVyYixcbiAgVHJlbW9sbyxcbiAgVm9sdW1lLFxuICBoYXNBdWRpb0NvbnRleHQsXG4gIGhhc0dldFVzZXJNZWRpYSxcbiAgZGV2aWNlTGlzdCxcbiAgZGV2aWNlTGlzdEhhbmRsZXIsXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==