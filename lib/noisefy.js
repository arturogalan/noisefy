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
exports.hasAudioContext = exports.hasGetUserMedia = void 0;
var win = typeof window !== 'undefined' ? window : global;
/**
 * Check if the current browser supports getUserMedia.
 */

var getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;
var hasGetUserMedia = !!getUserMedia;
/**
 * Check if the current browser supports the web-audio-api .
 */

exports.hasGetUserMedia = hasGetUserMedia;
var audioContext = win.AudioContext || win.webkitAudioContext || win.mozAudioContext || win.msAudioContext;
var hasAudioContext = !!audioContext;
exports.hasAudioContext = hasAudioContext;
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
          navigator.getUserMedia({
            audio: true
          }, function (stream) {
            _this2.input = stream;
            _this2._hasPermissions = true; // Connect the deffered connects

            _this2._deferredConnects.forEach(function (node) {
              _this2.connect(node);
            });

            resolve(stream);
          }, function (error) {
            reject(error);
          });
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

      this.node.connect(node);
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
    key: "getInputResponseFile",
    value: function getInputResponseFile(file) {
      return fetch(file, {
        method: 'get'
      }).then(function (response) {
        return response.arrayBuffer();
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
      var _this2 = this;

      this.audioContext.decodeAudioData(buffer, function (buffer) {
        // Set the internal buffer value
        _this2._buffer = buffer; // Set the buffer gain-node value

        _this2.nodes.convolverNode.buffer = _this2._buffer;
      });
    }
  }]);

  return Reverb;
}(_MultiAudioNode2.default);

exports.default = Reverb;
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
Object.defineProperty(exports, "Volume", {
  enumerable: true,
  get: function get() {
    return _Volume.default;
  }
});
Object.defineProperty(exports, "Reverb", {
  enumerable: true,
  get: function get() {
    return _Reverb.default;
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

var _Input = _interopRequireDefault(__webpack_require__(/*! ./audio-nodes/effects/Input */ "./src/audio-nodes/effects/Input.js"));

var _Output = _interopRequireDefault(__webpack_require__(/*! ./audio-nodes/effects/Output */ "./src/audio-nodes/effects/Output.js"));

var _Volume = _interopRequireDefault(__webpack_require__(/*! ./audio-nodes/effects/Volume */ "./src/audio-nodes/effects/Volume.js"));

var _Reverb = _interopRequireDefault(__webpack_require__(/*! ./audio-nodes/effects/Reverb */ "./src/audio-nodes/effects/Reverb.js"));

var _Util = __webpack_require__(/*! ./Util */ "./src/Util.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ub2lzZWZ5L3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9ub2lzZWZ5L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL25vaXNlZnkvKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIiwid2VicGFjazovL25vaXNlZnkvLi9zcmMvVXRpbC5qcyIsIndlYnBhY2s6Ly9ub2lzZWZ5Ly4vc3JjL2F1ZGlvLW5vZGVzL011bHRpQXVkaW9Ob2RlLmpzIiwid2VicGFjazovL25vaXNlZnkvLi9zcmMvYXVkaW8tbm9kZXMvU2luZ2xlQXVkaW9Ob2RlLmpzIiwid2VicGFjazovL25vaXNlZnkvLi9zcmMvYXVkaW8tbm9kZXMvZWZmZWN0cy9JbnB1dC5qcyIsIndlYnBhY2s6Ly9ub2lzZWZ5Ly4vc3JjL2F1ZGlvLW5vZGVzL2VmZmVjdHMvT3V0cHV0LmpzIiwid2VicGFjazovL25vaXNlZnkvLi9zcmMvYXVkaW8tbm9kZXMvZWZmZWN0cy9SZXZlcmIuanMiLCJ3ZWJwYWNrOi8vbm9pc2VmeS8uL3NyYy9hdWRpby1ub2Rlcy9lZmZlY3RzL1ZvbHVtZS5qcyIsIndlYnBhY2s6Ly9ub2lzZWZ5Ly4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbIndpbiIsIndpbmRvdyIsImdsb2JhbCIsImdldFVzZXJNZWRpYSIsIm5hdmlnYXRvciIsIndlYmtpdEdldFVzZXJNZWRpYSIsIm1vekdldFVzZXJNZWRpYSIsIm1zR2V0VXNlck1lZGlhIiwiaGFzR2V0VXNlck1lZGlhIiwiYXVkaW9Db250ZXh0IiwiQXVkaW9Db250ZXh0Iiwid2Via2l0QXVkaW9Db250ZXh0IiwibW96QXVkaW9Db250ZXh0IiwibXNBdWRpb0NvbnRleHQiLCJoYXNBdWRpb0NvbnRleHQiLCJNdWx0aUF1ZGlvTm9kZSIsIm5vZGUiLCJjb25uZWN0Iiwib3V0cHV0IiwiZGlzY29ubmVjdCIsIk9iamVjdCIsImtleXMiLCJub2RlcyIsImZvckVhY2giLCJfb3V0cHV0Tm9kZSIsIlNpbmdsZUF1ZGlvTm9kZSIsIl9hdWRpb0NvbnRleHQiLCJfbm9kZSIsIklucHV0IiwiX2RlZmVycmVkQ29ubmVjdHMiLCJfaGFzUGVybWlzc2lvbnMiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImF1ZGlvIiwic3RyZWFtIiwiaW5wdXQiLCJlcnJvciIsIkVycm9yIiwicHVzaCIsIm1lZGlhRGV2aWNlcyIsImVudW1lcmF0ZURldmljZXMiLCJ0aGVuIiwiZGV2aWNlcyIsImZpbHRlciIsImRldmljZSIsImtpbmQiLCJjYXRjaCIsImNyZWF0ZU1lZGlhU3RyZWFtU291cmNlIiwiT3V0cHV0IiwiZGVzdGluYXRpb24iLCJSZXZlcmIiLCJidWZmZXIiLCJpbnB1dEdhaW5Ob2RlIiwiY3JlYXRlR2FpbiIsIm91dHB1dEdhaW5Ob2RlIiwiY29udm9sdmVyTm9kZSIsImNyZWF0ZUNvbnZvbHZlciIsIndldEdhaW5Ob2RlIiwibGV2ZWxHYWluTm9kZSIsIndldCIsImxldmVsIiwiZmlsZSIsImZldGNoIiwibWV0aG9kIiwicmVzcG9uc2UiLCJhcnJheUJ1ZmZlciIsIl93ZXQiLCJ3ZXRuZXNzIiwicGFyc2VGbG9hdCIsImdhaW4iLCJ2YWx1ZSIsIl9sZXZlbCIsIl9idWZmZXIiLCJkZWNvZGVBdWRpb0RhdGEiLCJWb2x1bWUiLCJtdXRlIiwidm9sdW1lIiwidm9sIiwiX211dGUiLCJfbGV2ZWxCZWZvcmVNdXRlIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVB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QUNBLGFBQUtDLGdCQUFMLEdBQXdCLEtBQUtuQixLQUE3QixDQUZjLENBSWQ7O0FBQ0EsYUFBS0EsS0FBTCxHQUFhLENBQWI7QUFDRCxPQU5ELE1BTU87QUFDTDtBQUNBLGFBQUtBLEtBQUwsR0FBYSxLQUFLbUIsZ0JBQUwsSUFBeUIsS0FBS1IsTUFBM0M7QUFDRDtBQUNGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekVIOztBQUNBOztBQUNBOztBQUNBOztBQUNBIiwiZmlsZSI6Im5vaXNlZnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcIm5vaXNlZnlcIiwgW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wibm9pc2VmeVwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJub2lzZWZ5XCJdID0gZmFjdG9yeSgpO1xufSkodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwidmFyIGc7XG5cbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXG5nID0gKGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcztcbn0pKCk7XG5cbnRyeSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxuXHRnID0gZyB8fCBuZXcgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO1xufSBjYXRjaCAoZSkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIikgZyA9IHdpbmRvdztcbn1cblxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3Ncbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cblxubW9kdWxlLmV4cG9ydHMgPSBnO1xuIiwibGV0IHdpbiA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93IDogZ2xvYmFsO1xuLyoqXG4gKiBDaGVjayBpZiB0aGUgY3VycmVudCBicm93c2VyIHN1cHBvcnRzIGdldFVzZXJNZWRpYS5cbiAqL1xuY29uc3QgZ2V0VXNlck1lZGlhID0gbmF2aWdhdG9yLmdldFVzZXJNZWRpYSB8fFxuICBuYXZpZ2F0b3Iud2Via2l0R2V0VXNlck1lZGlhIHx8XG4gIG5hdmlnYXRvci5tb3pHZXRVc2VyTWVkaWEgfHxcbiAgbmF2aWdhdG9yLm1zR2V0VXNlck1lZGlhO1xuXG5jb25zdCBoYXNHZXRVc2VyTWVkaWEgPSAhIWdldFVzZXJNZWRpYTtcbi8qKlxuICogQ2hlY2sgaWYgdGhlIGN1cnJlbnQgYnJvd3NlciBzdXBwb3J0cyB0aGUgd2ViLWF1ZGlvLWFwaSAuXG4gKi9cblxuY29uc3QgYXVkaW9Db250ZXh0ID0gd2luLkF1ZGlvQ29udGV4dCB8fFxuICB3aW4ud2Via2l0QXVkaW9Db250ZXh0IHx8XG4gIHdpbi5tb3pBdWRpb0NvbnRleHQgfHxcbiAgd2luLm1zQXVkaW9Db250ZXh0O1xuXG5jb25zdCBoYXNBdWRpb0NvbnRleHQgPSAhIWF1ZGlvQ29udGV4dDtcblxuZXhwb3J0IHtcbiAgaGFzR2V0VXNlck1lZGlhLFxuICBoYXNBdWRpb0NvbnRleHQsXG59O1xuIiwiXG5pbXBvcnQgU2luZ2xlQXVkaW9Ob2RlIGZyb20gJy4vU2luZ2xlQXVkaW9Ob2RlJztcblxuLyoqXG4gKiBUaGUgbXVsdGktYXVkaW8tbm9kZSBjbGFzcy5cbiAqIFdoZW4gY3JlYXRpbmcgYW4gZWZmZWN0IGV4aXN0aW5nIG91dCBvZiBtdWx0aXBsZSBhdWRpby1ub2Rlcywgd2UgY2FuIHdyYXAgaXQgaW4gdGhpcyBjbGFzcy5cbiAqIFlvdSBjYW4gc2V0IHRoZSBpbnB1dCBub2RlIChlZmZlY3Qubm9kZSkgYW5kIHRoZSBvdXRwdXQgbm9kZSBvZiB0aGUgZWZmZWN0IChlZmZlY3Qub3V0cHV0KS5cbiAqIFRoZSBpbnB1dCBub2RlIGlzIHRoZSBmaXJzdCBhdWRpby1ub2RlIGluIHRoZSBlZmZlY3QsIHRoZSBwcmV2aW91cyBlZmZlY3Qgd2lsbCBiZSBjb25uZWN0ZWQgdG8gdGhpcyBub2RlLlxuICogVGhlIG91dHB1dCBub2RlIGlzIHRoZSBsYXN0IGF1ZGlvLW5vZGUgaW4gdGhlIGVmZmVjdCwgdGhlIG5leHQgZWZmZWN0IHdpbGwgYmUgY29ubmVjdGVkIHRvIHRoaXMgbm9kZS5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTXVsdGlBdWRpb05vZGUgZXh0ZW5kcyBTaW5nbGVBdWRpb05vZGUge1xuICAvLyBjb25zdHJ1Y3RvcihhdWRpb0NvbnRleHQpIHtcbiAgLy8gICBzdXBlcihhdWRpb0NvbnRleHQpO1xuICAvLyB9XG5cbiAgLyoqXG4gICAgICogR2V0dGVyIGZvciB0aGUgZWZmZWN0cyBvdXRwdXQgbm9kZS5cbiAgICAgKiBAcmV0dXJuIHtBdWRpb05vZGV9XG4gICAgICovXG4gIGdldCBvdXRwdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX291dHB1dE5vZGU7XG4gIH1cblxuICBzZXQgb3V0cHV0KG91dHB1dCkge1xuICAgIHRoaXMuX291dHB1dE5vZGUgPSBvdXRwdXQ7XG4gIH1cblxuICAvKipcbiAgICAgKiBDb25uZWN0IHRoZSBlZmZlY3QgdG8gb3RoZXIgZWZmZWN0cyBvciBuYXRpdmUgYXVkaW8tbm9kZXMuXG4gICAgICogQHBhcmFtICB7QXVkaW9Ob2RlfFNpbmdsZUF1ZGlvTm9kZXxNdWx0aUF1ZGlvTm9kZX0gbm9kZVxuICAgICAqIEByZXR1cm4ge0F1ZGlvTm9kZXxTaW5nbGVBdWRpb05vZGV8TXVsdGlBdWRpb05vZGV9XG4gICAgICovXG4gIGNvbm5lY3Qobm9kZSkge1xuICAgIGlmIChub2RlIGluc3RhbmNlb2YgU2luZ2xlQXVkaW9Ob2RlIHx8IG5vZGUgaW5zdGFuY2VvZiBNdWx0aUF1ZGlvTm9kZSkge1xuICAgICAgdGhpcy5ub2RlLmNvbm5lY3Qobm9kZS5ub2RlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5ub2RlLmNvbm5lY3Qobm9kZSk7XG4gICAgfVxuICAgIHJldHVybiBub2RlO1xuICB9XG5cbiAgLyoqXG4gICAgICogRGlzY29ubmVjdCB0aGUgZWZmZWN0LlxuICAgICAqIEByZXR1cm4ge0F1ZGlvTm9kZX1cbiAgICAgKi9cbiAgZGlzY29ubmVjdCgpIHtcbiAgICB0aGlzLm91dHB1dC5kaXNjb25uZWN0KCk7XG4gICAgcmV0dXJuIHRoaXMub3V0cHV0O1xuICB9XG5cbiAgLyoqXG4gICAgICogRGVzdHJveSBhbiBlZmZlY3QuXG4gICAgICogQHJldHVybiB7QXVkaW9Ob2RlfVxuICAgICAqL1xuICBkZXN0cm95KCkge1xuICAgIE9iamVjdC5rZXlzKHRoaXMubm9kZXMpLmZvckVhY2goKG5vZGUpPT4ge1xuICAgICAgaWYgKHRoaXMubm9kZXNbbm9kZV0uZGlzY29ubmVjdCAmJiB0eXBlb2YgdGhpcy5ub2Rlc1tub2RlXS5kaXNjb25uZWN0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHRoaXMubm9kZXNbbm9kZV0uZGlzY29ubmVjdCgpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRoaXMuZGlzY29ubmVjdCgpO1xuICB9XG59XG4iLCIvKipcbiAqIFRoZSBiYXNpYyBhdWRpbyBub2RlIGNsYXNzLlxuICogVGhpcyBpcyBkZSBza2VsZXRvbiBmb3IgYSBhdWRpbyAgZWZmZWN0LlxuICogV2hlbiB0aGUgZWZmZWN0IG9ubHkgY29udGFpbnMgMSBhdWRpb05vZGUgdGhpcyBjbGFzcyBjYW4gYmUgdXNlZC5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2luZ2xlQXVkaW9Ob2RlIHtcbiAgLy8gbm9kZXMgPSB7fTsgLy97W2tleTogc3RyaW5nXTogQXVkaW9Ob2RlfEdhaW5Ob2RlfERlbGF5Tm9kZXxXYXZlU2hhcGVyTm9kZXxCaXF1YWRGaWx0ZXJOb2RlfE9zY2lsbGF0b3JOb2RlfENvbnZvbHZlck5vZGV9ID0ge307XG5cbiAgY29uc3RydWN0b3IoYXVkaW9Db250ZXh0KSB7XG4gICAgLy8gU2V0IHRoZSBhdWRpby1jb250ZXh0LlxuICAgIHRoaXMuX2F1ZGlvQ29udGV4dCA9IGF1ZGlvQ29udGV4dDtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgZWZmZWN0cyBBdWRpb0NvbnRleHQgZ2V0dGVyLlxuICAgKiBAcmV0dXJuIHtBdWRpb0NvbnRleHR9IFRoZSBBdWRpb0NvbnRleHQgdXNlZCBieSB0aGUgZWZmZWN0LlxuICAgKi9cbiAgZ2V0IGF1ZGlvQ29udGV4dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYXVkaW9Db250ZXh0O1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBlZmZlY3RzIEF1ZGlvQ29udGV4dCBzZXR0ZXIuXG4gICAqIEBwYXJhbSAge0F1ZGlvQ29udGV4dH0gYXVkaW9Db250ZXh0XG4gICAqL1xuICBzZXQgYXVkaW9Db250ZXh0KGF1ZGlvQ29udGV4dCkge1xuICAgIHRoaXMuX2F1ZGlvQ29udGV4dCA9IGF1ZGlvQ29udGV4dDtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgZWZmZWN0J3MgYXVkaW8tbm9kZSBnZXR0ZXIuXG4gICAqIEByZXR1cm4ge0F1ZGlvTm9kZX0gVGhlIGF1ZGlvLW5vZGUgdXNlZCBmb3IgdGhlIGVmZmVjdC5cbiAgICovXG4gIGdldCBub2RlKCkge1xuICAgIHJldHVybiB0aGlzLl9ub2RlO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBlZmZlY3QncyBhdWRpby1ub2RlIHNldHRlci5cbiAgICogQHBhcmFtICB7QXVkaW9Ob2RlfSBub2RlXG4gICAqL1xuICBzZXQgbm9kZShub2RlKSB7XG4gICAgdGhpcy5fbm9kZSA9IG5vZGU7XG4gIH1cblxuICAvKipcbiAgICogQ29ubmVjdCB0aGUgZWZmZWN0IHRvIG90aGVyIGVmZmVjdHMgb3IgbmF0aXZlIGF1ZGlvLW5vZGVzLlxuICAgKiBAcGFyYW0gIHtBdWRpb05vZGV8U2luZ2xlQXVkaW9Ob2RlfSBub2RlXG4gICAqIEByZXR1cm4ge0F1ZGlvTm9kZXxTaW5nbGVBdWRpb05vZGV9XG4gICAqL1xuICBjb25uZWN0KG5vZGUpIHtcbiAgICBpZiAobm9kZSBpbnN0YW5jZW9mIFNpbmdsZUF1ZGlvTm9kZSkge1xuICAgICAgdGhpcy5ub2RlLmNvbm5lY3Qobm9kZS5ub2RlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5ub2RlLmNvbm5lY3Qobm9kZSk7XG4gICAgfVxuICAgIHJldHVybiBub2RlO1xuICB9XG5cbiAgLyoqXG4gICAqIGRpc2Nvbm5lY3QgdGhlIGVmZmVjdC5cbiAgICogQHJldHVybiB7QXVkaW9Ob2RlfVxuICAgKi9cbiAgZGlzY29ubmVjdCgpIHtcbiAgICB0aGlzLm5vZGUuZGlzY29ubmVjdCgpO1xuICAgIHJldHVybiB0aGlzLm5vZGU7XG4gIH1cblxuICAvKipcbiAgICogQWxpYXMgZm9yIHRoZSBkaXNjb25uZWN0IG1ldGhvZCwgdG8gb2ZmZXIgdGhlIHNhbWUgYXBpIGFzIGEgTXVsdGlBdWRpb05vZGUuXG4gICAqIEByZXR1cm4ge0F1ZGlvTm9kZX1cbiAgICovXG4gIGRlc3Ryb3koKSB7XG4gICAgcmV0dXJuIHRoaXMuZGlzY29ubmVjdCgpO1xuICB9XG59XG4iLCJcbmltcG9ydCBTaW5nbGVBdWRpb05vZGUgZnJvbSAnLi4vU2luZ2xlQXVkaW9Ob2RlJztcbmltcG9ydCBNdWx0aUF1ZGlvTm9kZSBmcm9tICcuLi9NdWx0aUF1ZGlvTm9kZSc7XG5pbXBvcnQge2hhc0dldFVzZXJNZWRpYX0gZnJvbSAnLi4vLi4vVXRpbCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIElucHV0IGV4dGVuZHMgU2luZ2xlQXVkaW9Ob2RlIHtcbiAgY29uc3RydWN0b3IoYXVkaW9Db250ZXh0KSB7XG4gICAgc3VwZXIoYXVkaW9Db250ZXh0KTtcbiAgICB0aGlzLl9kZWZlcnJlZENvbm5lY3RzID0gW107XG4gICAgdGhpcy5faGFzUGVybWlzc2lvbnMgPSBmYWxzZTtcbiAgfVxuXG4gIGdldCBpbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5ub2RlO1xuICB9XG4gIHNldCBpbnB1dChzdHJlYW0pIHtcbiAgICAvLyBDcmVhdGUgYSBtZWRpYS1zdHJlYW0gc291cmNlLlxuICAgIHRoaXMubm9kZSA9IHRoaXMuYXVkaW9Db250ZXh0LmNyZWF0ZU1lZGlhU3RyZWFtU291cmNlKHN0cmVhbSk7XG4gIH1cbiAgLyoqXG4gICAgICogR2V0IHlvdXIgbWljcm9waG9uZSBzb3VuZCBhcyBpbnB1dC5cbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPEF1ZGlvTm9kZT59IFJlc29sdmVzIHdoZW4geW91IGFjY2VwdCB0byB1c2UgdGhlIG1pY3JvcGhvbmUuXG4gICAgICovXG4gIGdldFVzZXJNZWRpYSgpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCk9PiB7XG4gICAgICBpZiAoaGFzR2V0VXNlck1lZGlhKSB7XG4gICAgICAgIG5hdmlnYXRvci5nZXRVc2VyTWVkaWEoe1xuICAgICAgICAgIGF1ZGlvOiB0cnVlLFxuICAgICAgICB9LCAoc3RyZWFtKT0+IHtcbiAgICAgICAgICB0aGlzLmlucHV0ID0gc3RyZWFtO1xuICAgICAgICAgIHRoaXMuX2hhc1Blcm1pc3Npb25zID0gdHJ1ZTtcblxuICAgICAgICAgIC8vIENvbm5lY3QgdGhlIGRlZmZlcmVkIGNvbm5lY3RzXG4gICAgICAgICAgdGhpcy5fZGVmZXJyZWRDb25uZWN0cy5mb3JFYWNoKChub2RlKT0+IHtcbiAgICAgICAgICAgIHRoaXMuY29ubmVjdChub2RlKTtcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIHJlc29sdmUoc3RyZWFtKTtcbiAgICAgICAgfSwgKGVycm9yKT0+IHtcbiAgICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlamVjdChFcnJvcignWW91ciBicm93c2VyIGRvZXMgbm90IHN1cHBvcnQgdGhlIHVzZSBvZiB1c2VyLW1lZGlhLCBwbGVhc2UgdXBncmFkZSBvciB1c2UgYW5vdGhlciBicm93c2VyIScpKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICAvKipcbiAgICAgKiBDb25uZWN0IHRoZSBlZmZlY3QgdG8gb3RoZXIgZWZmZWN0cyBvciBuYXRpdmUgYXVkaW8tbm9kZXMuXG4gICAgICogQHBhcmFtICB7QXVkaW9Ob2RlfFNpbmdsZUF1ZGlvTm9kZXxNdWx0aUF1ZGlvTm9kZX0gbm9kZVxuICAgICAqIEByZXR1cm4ge0F1ZGlvTm9kZXxTaW5nbGVBdWRpb05vZGV8TXVsdGlBdWRpb05vZGV9XG4gICAgICovXG4gIGNvbm5lY3Qobm9kZSkge1xuICAgIC8vIElmIHRoZXJlIGlzIG5vIGlucHV0IG5vZGUgeWV0LCBjb25uZWN0IHdoZW4gdGhlcmUgaXMgYSBub2RlXG4gICAgaWYgKHR5cGVvZiB0aGlzLm5vZGUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aGlzLl9kZWZlcnJlZENvbm5lY3RzLnB1c2gobm9kZSk7XG5cbiAgICAgIHJldHVybiBub2RlO1xuICAgIH1cblxuICAgIGlmIChub2RlIGluc3RhbmNlb2YgU2luZ2xlQXVkaW9Ob2RlIHx8IG5vZGUgaW5zdGFuY2VvZiBNdWx0aUF1ZGlvTm9kZSkge1xuICAgICAgdGhpcy5ub2RlLmNvbm5lY3Qobm9kZS5ub2RlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5ub2RlLmNvbm5lY3Qobm9kZSk7XG4gICAgfVxuXG4gICAgdGhpcy5ub2RlLmNvbm5lY3Qobm9kZSk7XG5cbiAgICByZXR1cm4gbm9kZTtcbiAgfVxuXG4gIC8vIEdldCBhIGxpc3Qgb2YgYXVkaW8gaW4tYW5kLW91dHB1dCBkZXZpY2VzIGRldmljZXMuXG4gIC8vIEByZXR1cm4gQSBsaXN0IG9mIHRoZSBhdmFpbGFibGUgYXVkaW8gaW4tYW5kLW91dHB1dCBkZXZpY2VzLlxuICBnZXRBdWRpb0RldmljZXMoKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpPT4ge1xuICAgICAgaWYgKHRoaXMuX2hhc1Blcm1pc3Npb25zKSB7XG4gICAgICAgIG5hdmlnYXRvci5tZWRpYURldmljZXMuZW51bWVyYXRlRGV2aWNlcygpLnRoZW4oKGRldmljZXMpPT4ge1xuICAgICAgICAgIHJlc29sdmUoZGV2aWNlcy5maWx0ZXIoKGRldmljZSk9PiB7XG4gICAgICAgICAgICByZXR1cm4gZGV2aWNlLmtpbmQgJiYgZGV2aWNlLmtpbmQgPT09ICdhdWRpb2lucHV0JztcbiAgICAgICAgICB9KSk7XG4gICAgICAgIH0pLmNhdGNoKChlcnJvcik9PiB7XG4gICAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmdldFVzZXJNZWRpYSgpLnRoZW4oKCk9PiB7XG4gICAgICAgICAgbmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5lbnVtZXJhdGVEZXZpY2VzKCkudGhlbigoZGV2aWNlcyk9PiB7XG4gICAgICAgICAgICByZXNvbHZlKGRldmljZXMuZmlsdGVyKChkZXZpY2UpPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gZGV2aWNlLmtpbmQgJiYgZGV2aWNlLmtpbmQgPT09ICdhdWRpb2lucHV0JztcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICB9KS5jYXRjaCgoZXJyb3IpPT4ge1xuICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSkuY2F0Y2goKGVycm9yKT0+IHtcbiAgICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuIiwiaW1wb3J0IFNpbmdsZUF1ZGlvTm9kZSBmcm9tICcuLi9TaW5nbGVBdWRpb05vZGUnO1xuXG4vKipcbiAqIFRoZSBhdWRpby1lZmZlY3RzIG91dHB1dCBjbGFzcy5cbiAqIFRoaXMgY2xhc3MgY29ubmVjdHMgdG8geW91ciBkZXZpY2UncyBhdWRpbyBvdXRwdXQuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE91dHB1dCBleHRlbmRzIFNpbmdsZUF1ZGlvTm9kZSB7XG4gIGNvbnN0cnVjdG9yKGF1ZGlvQ29udGV4dCkge1xuICAgIHN1cGVyKGF1ZGlvQ29udGV4dCk7XG5cbiAgICBpZiAodGhpcy5hdWRpb0NvbnRleHQpIHtcbiAgICAgIHRoaXMubm9kZSA9IGF1ZGlvQ29udGV4dC5kZXN0aW5hdGlvbjtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCBNdWx0aUF1ZGlvTm9kZSBmcm9tICcuLi9NdWx0aUF1ZGlvTm9kZSc7XG5cbi8qKlxuICogVGhlIGF1ZGlvLWVmZmVjdHMgcmV2ZXJiIGNsYXNzLlxuICogVGhpcyBjbGFzcyBsZXRzIHlvdSBhZGQgYSByZXZlcmIgZWZmZWN0LlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZXZlcmIgZXh0ZW5kcyBNdWx0aUF1ZGlvTm9kZSB7XG4gIC8vIF93ZXQ7XG4gIC8vIF9sZXZlbDtcbiAgLy8gX2J1ZmZlcjtcblxuICBjb25zdHJ1Y3RvcihhdWRpb0NvbnRleHQsIGJ1ZmZlcikge1xuICAgIHN1cGVyKGF1ZGlvQ29udGV4dCk7XG5cbiAgICB0aGlzLm5vZGVzID0ge1xuICAgICAgaW5wdXRHYWluTm9kZTogYXVkaW9Db250ZXh0LmNyZWF0ZUdhaW4oKSwgLy8gQ3JlYXRlIHRoZSBpbnB1dCBhbmQgb3V0cHV0IGdhaW4tbm9kZVxuICAgICAgb3V0cHV0R2Fpbk5vZGU6IGF1ZGlvQ29udGV4dC5jcmVhdGVHYWluKCksXG4gICAgICBjb252b2x2ZXJOb2RlOiBhdWRpb0NvbnRleHQuY3JlYXRlQ29udm9sdmVyKCksIC8vIENyZWF0ZSB0aGUgY29udm9sdmVyIG5vZGUgdG8gY3JlYXRlIHRoZSByZXZlcmIgZWZmZWN0XG4gICAgICB3ZXRHYWluTm9kZTogYXVkaW9Db250ZXh0LmNyZWF0ZUdhaW4oKSwgLy8gQ3JlYXRlIHRoZSB3ZXRuZXNzIGNvbnRyb2xsIGdhaW4tbm9kZVxuICAgICAgbGV2ZWxHYWluTm9kZTogYXVkaW9Db250ZXh0LmNyZWF0ZUdhaW4oKSwgLy8gQ3JlYXRlIHRoZSBsZXZlbCBjb250cm9sbCBnYWluLW5vZGVcbiAgICB9O1xuXG4gICAgLy8gV2lyZSBpdCBhbGwgdXBcbiAgICB0aGlzLm5vZGVzLmlucHV0R2Fpbk5vZGUuY29ubmVjdCh0aGlzLm5vZGVzLmNvbnZvbHZlck5vZGUpO1xuICAgIHRoaXMubm9kZXMuaW5wdXRHYWluTm9kZS5jb25uZWN0KHRoaXMubm9kZXMud2V0R2Fpbk5vZGUpO1xuICAgIHRoaXMubm9kZXMuY29udm9sdmVyTm9kZS5jb25uZWN0KHRoaXMubm9kZXMubGV2ZWxHYWluTm9kZSk7XG4gICAgdGhpcy5ub2Rlcy5sZXZlbEdhaW5Ob2RlLmNvbm5lY3QodGhpcy5ub2Rlcy5vdXRwdXRHYWluTm9kZSk7XG4gICAgdGhpcy5ub2Rlcy53ZXRHYWluTm9kZS5jb25uZWN0KHRoaXMubm9kZXMub3V0cHV0R2Fpbk5vZGUpO1xuXG4gICAgLy8gU2V0IHRoZSBpbnB1dCBnYWluLW5vZGUgYXMgdGhlIGlucHV0LW5vZGUuXG4gICAgdGhpcy5ub2RlID0gdGhpcy5ub2Rlcy5pbnB1dEdhaW5Ob2RlO1xuXG4gICAgLy8gU2V0IHRoZSBvdXRwdXQgZ2Fpbi1ub2RlIGFzIHRoZSBvdXRwdXQtbm9kZS5cbiAgICB0aGlzLm91dHB1dCA9IHRoaXMubm9kZXMub3V0cHV0R2Fpbk5vZGU7XG5cbiAgICAvLyBTZXQgdGhlIGRlZmF1bHQgd2V0bmVzcyB0byAwLjVcbiAgICB0aGlzLndldCA9IDAuNTtcblxuICAgIC8vIFNldCB0aGUgZGVmYXVsdCBsZXZlbCB0byAxXG4gICAgdGhpcy5sZXZlbCA9IDE7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBzdGFuZGFyZCBpbnB1dCByZXNwb25zZWZpbGUuXG4gICAqIEBwYXJhbSB7QW55fSBmaWxlXG4gICAqIEByZXR1cm4ge1Byb21pc2U8QXVkaW9CdWZmZXI+fVxuICAgKi9cbiAgZ2V0SW5wdXRSZXNwb25zZUZpbGUoZmlsZSkge1xuICAgIHJldHVybiBmZXRjaChmaWxlLCB7XG4gICAgICBtZXRob2Q6ICdnZXQnLFxuICAgIH0pLnRoZW4oKHJlc3BvbnNlKT0+IHtcbiAgICAgIHJldHVybiByZXNwb25zZS5hcnJheUJ1ZmZlcigpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHRlciBmb3IgdGhlIGVmZmVjdCdzIHdldG5lc3NcbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKi9cbiAgZ2V0IHdldCgpIHtcbiAgICByZXR1cm4gdGhpcy5fd2V0O1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHRlciBmb3IgdGhlIGVmZmVjdCdzIHdldG5lc3NcbiAgICogQHBhcmFtICB7bnVtYmVyfSB3ZXRuZXNzXG4gICAqL1xuICBzZXQgd2V0KHdldG5lc3MpIHtcbiAgICAvLyBTZXQgdGhlIGludGVybmFsIHdldG5lc3MgdmFsdWVcbiAgICB0aGlzLl93ZXQgPSBwYXJzZUZsb2F0KHdldG5lc3MpO1xuXG4gICAgLy8gU2V0IHRoZSBuZXcgdmFsdWUgZm9yIHRoZSB3ZXRuZXNzIGNvbnRyb2xsIGdhaW4tbm9kZVxuICAgIHRoaXMubm9kZXMud2V0R2Fpbk5vZGUuZ2Fpbi52YWx1ZSA9IHRoaXMuX3dldDtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXR0ZXIgZm9yIHRoZSBlZmZlY3QncyBsZXZlbFxuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqL1xuICBnZXQgbGV2ZWwoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2xldmVsO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHRlciBmb3IgdGhlIGVmZmVjdCdzIGxldmVsXG4gICAqIEBwYXJhbSAge251bWJlcn0gbGV2ZWxcbiAgICovXG4gIHNldCBsZXZlbChsZXZlbCkge1xuICAgIC8vIFNldCB0aGUgaW50ZXJuYWwgbGV2ZWwgdmFsdWVcbiAgICB0aGlzLl9sZXZlbCA9IHBhcnNlRmxvYXQobGV2ZWwpO1xuXG4gICAgLy8gU2V0IHRoZSBkZWxheVRpbWUgdmFsdWUgb2YgdGhlIGRlbGF5LW5vZGVcbiAgICB0aGlzLm5vZGVzLmxldmVsR2Fpbk5vZGUuZ2Fpbi52YWx1ZSA9IHRoaXMuX2xldmVsO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHRlciBmb3IgdGhlIGVmZmVjdCdzIGNvbnZvbHZlciBidWZmZXJcbiAgICogQHJldHVybiB7QnVmZmVyfVxuICAgKi9cbiAgZ2V0IGJ1ZmZlcigpIHtcbiAgICByZXR1cm4gdGhpcy5fYnVmZmVyO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHRlciBmb3IgdGhlIGVmZmVjdCdzIGNvbnZvbHZlciBidWZmZXJcbiAgICogQHBhcmFtICB7U3RyZWFtfSBidWZmZXJcbiAgICovXG4gIHNldCBidWZmZXIoYnVmZmVyKSB7XG4gICAgdGhpcy5hdWRpb0NvbnRleHQuZGVjb2RlQXVkaW9EYXRhKGJ1ZmZlciwgKGJ1ZmZlcik9PiB7XG4gICAgICAvLyBTZXQgdGhlIGludGVybmFsIGJ1ZmZlciB2YWx1ZVxuICAgICAgdGhpcy5fYnVmZmVyID0gYnVmZmVyO1xuXG4gICAgICAvLyBTZXQgdGhlIGJ1ZmZlciBnYWluLW5vZGUgdmFsdWVcbiAgICAgIHRoaXMubm9kZXMuY29udm9sdmVyTm9kZS5idWZmZXIgPSB0aGlzLl9idWZmZXI7XG4gICAgfSk7XG4gIH1cbn1cbiIsImltcG9ydCBTaW5nbGVBdWRpb05vZGUgZnJvbSAnLi4vU2luZ2xlQXVkaW9Ob2RlJztcblxuLyoqXG4gKiBUaGUgYXVkaW8tZWZmZWN0cyB2b2x1bWUgY2xhc3MuXG4gKiBUaGlzIGNsYXNzIGxldHMgeW91IGNoYW5nZSB0aGUgdm9sdW1lIG9mIHRoZSBhdWRpbyBzaWduYWwuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZvbHVtZSBleHRlbmRzIFNpbmdsZUF1ZGlvTm9kZSB7XG4gIGNvbnN0cnVjdG9yKGF1ZGlvQ29udGV4dCkge1xuICAgIHN1cGVyKGF1ZGlvQ29udGV4dCk7XG5cbiAgICAvLyBDcmVhdGUgdGhlIGdhaW4tbm9kZSB3aGljaCB3ZSdsbCB1c2UgdG8gY2hhbmdlIHRoZSB2b2x1bWUuXG4gICAgdGhpcy5ub2RlID0gdGhpcy5hdWRpb0NvbnRleHQuY3JlYXRlR2FpbigpO1xuXG4gICAgLy8gVGhlIGluaXRpYWwgdm9sdW1lIGxldmVsIGlzIDEwMCUuXG4gICAgdGhpcy5sZXZlbCA9IDE7XG5cbiAgICAvLyBUaGUgZWZmZWN0IGlzIG5vdCBtdXRlZCBieSBkZWZhdWx0LlxuICAgIHRoaXMubXV0ZSA9IGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAgICogR2V0dGVyIGZvciB0aGUgZWZmZWN0cyB2b2x1bWUuXG4gICAgICogQHJldHVybiB7RmxvYXR9XG4gICAgICovXG4gIGdldCBsZXZlbCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbGV2ZWw7XG4gIH1cblxuICAvKipcbiAgICAgKiBTZXR0ZXIgZm9yIHRoZSBlZmZlY3RzIHZvbHVtZS5cbiAgICAgKiBAcGFyYW0gIHtGbG9hdH0gdm9sdW1lIFRoZSB2b2x1bWUsIHRpcGljYWwgYmV0d2VlbiAwIGFuZCAxLlxuICAgICAqL1xuICBzZXQgbGV2ZWwodm9sdW1lKSB7XG4gICAgLy8gUGFyc2UgdGhlIHZvbHVtZSwgaXQgY2FuIG5vdCBiZSBsb3dlciB0aGFuIDAuXG4gICAgbGV0IHZvbCA9IHBhcnNlRmxvYXQodm9sdW1lKTtcblxuICAgIHZvbCA9ICh2b2wgPj0gMCA/IHZvbCA6IDApO1xuXG4gICAgLy8gU2V0IHRoZSBpbnRlcm5hbCB2b2x1bWUgdmFsdWUuXG4gICAgdGhpcy5fbGV2ZWwgPSB2b2w7XG5cbiAgICAvLyBTZXQgdGhlIGdhaW5Ob2RlJ3MgZ2FpbiB2YWx1ZS5cbiAgICB0aGlzLm5vZGUuZ2Fpbi52YWx1ZSA9IHZvbDtcblxuICAgIC8vIFNldCB0aGUgaW50ZXJuYWwgbXV0ZSB2YWx1ZS5cbiAgICB0aGlzLl9tdXRlID0gKHZvbCA9PT0gMCk7XG4gIH1cblxuICAvKipcbiAgICAgKiBHZXR0ZXIgZm9yIHRoZSBlZmZjdHMgbXV0ZSBmdW5jdGlvbmFsaXR5LlxuICAgICAqIEByZXR1cm4ge1t0eXBlXX0gW2Rlc2NyaXB0aW9uXVxuICAgICAqL1xuICBnZXQgbXV0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fbXV0ZTtcbiAgfVxuXG4gIC8qKlxuICAgICAqIFNldHRlciBmb3IgdGhlIGVmZmVjdHMgbXV0ZSBmdW5jdGlvbmFsaXR5LlxuICAgICAqIEBwYXJhbSAge0Jvb2xlYW59IG11dGUgV2hldGhlciB0aGUgZWZmZWN0IGlzIG11dGVkLlxuICAgICAqL1xuICBzZXQgbXV0ZShtdXRlKSB7XG4gICAgLy8gU2V0IHRoZSBpbnRlcm5hbCBtdXRlIHZhbHVlLlxuICAgIHRoaXMuX211dGUgPSAhIW11dGU7XG5cbiAgICBpZiAodGhpcy5fbXV0ZSkge1xuICAgICAgLy8gS2VlcCB0cmFjayBvZiB0aGUgdm9sdW1lIGJlZm9yZSBtdXRpbmdcbiAgICAgIHRoaXMuX2xldmVsQmVmb3JlTXV0ZSA9IHRoaXMubGV2ZWw7XG5cbiAgICAgIC8vIFNldCB0aGUgdm9sdW1lIHRvIDBcbiAgICAgIHRoaXMubGV2ZWwgPSAwO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBTZXQgdGhlIHZvbHVtZSB0byB0aGUgcHJldmlvdXMgdm9sdW1lLlxuICAgICAgdGhpcy5sZXZlbCA9IHRoaXMuX2xldmVsQmVmb3JlTXV0ZSB8fCB0aGlzLl9sZXZlbDtcbiAgICB9XG4gIH1cbn1cbiIsIlxuaW1wb3J0IElucHV0IGZyb20gJy4vYXVkaW8tbm9kZXMvZWZmZWN0cy9JbnB1dCc7XG5pbXBvcnQgT3V0cHV0IGZyb20gJy4vYXVkaW8tbm9kZXMvZWZmZWN0cy9PdXRwdXQnO1xuaW1wb3J0IFZvbHVtZSBmcm9tICcuL2F1ZGlvLW5vZGVzL2VmZmVjdHMvVm9sdW1lJztcbmltcG9ydCBSZXZlcmIgZnJvbSAnLi9hdWRpby1ub2Rlcy9lZmZlY3RzL1JldmVyYic7XG5pbXBvcnQge2hhc0F1ZGlvQ29udGV4dCwgaGFzR2V0VXNlck1lZGlhfSBmcm9tICcuL1V0aWwnO1xuXG5leHBvcnQge1xuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBWb2x1bWUsXG4gIFJldmVyYixcbiAgaGFzQXVkaW9Db250ZXh0LFxuICBoYXNHZXRVc2VyTWVkaWEsXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==