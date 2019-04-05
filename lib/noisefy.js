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
exports.default = void 0;
var win = typeof window !== 'undefined' ? window : global;
/**
 * Check if the current browser supports getUserMedia.
 */

var getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;
/**
 * Check if the current browser supports the web-audio-api .
 */

var audioContext = win.AudioContext || win.webkitAudioContext || win.mozAudioContext || win.msAudioContext;
var _default = {
  hasGetUserMedia: function hasGetUserMedia() {
    return !!getUserMedia;
  },
  hasAudioContext: function hasAudioContext() {
    return !!audioContext;
  }
};
exports.default = _default;
module.exports = exports["default"];
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

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
      this.node.connect(node);
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

var _SingleAudioNode2 = __webpack_require__(/*! ../SingleAudioNode */ "./src/audio-nodes/SingleAudioNode.js");

var _Util = __webpack_require__(/*! ../../Util */ "./src/Util.js");

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
}(_SingleAudioNode2.SingleAudioNode);

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

var _SingleAudioNode2 = __webpack_require__(/*! ../SingleAudioNode */ "./src/audio-nodes/SingleAudioNode.js");

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
}(_SingleAudioNode2.SingleAudioNode);

exports.default = Output;
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

var _SingleAudioNode2 = __webpack_require__(/*! ../SingleAudioNode */ "./src/audio-nodes/SingleAudioNode.js");

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
}(_SingleAudioNode2.SingleAudioNode);

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
    return _Input.Input;
  }
});
Object.defineProperty(exports, "Output", {
  enumerable: true,
  get: function get() {
    return _Output.Output;
  }
});
Object.defineProperty(exports, "Volume", {
  enumerable: true,
  get: function get() {
    return _Volume.Volume;
  }
});
Object.defineProperty(exports, "hasAudioContext", {
  enumerable: true,
  get: function get() {
    return _Util.hasAudioContext;
  }
});

var _Input = __webpack_require__(/*! ./audio-nodes/effects/Input */ "./src/audio-nodes/effects/Input.js");

var _Output = __webpack_require__(/*! ./audio-nodes/effects/Output */ "./src/audio-nodes/effects/Output.js");

var _Volume = __webpack_require__(/*! ./audio-nodes/effects/Volume */ "./src/audio-nodes/effects/Volume.js");

var _Util = __webpack_require__(/*! ./Util */ "./src/Util.js");

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ub2lzZWZ5L3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9ub2lzZWZ5L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL25vaXNlZnkvKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIiwid2VicGFjazovL25vaXNlZnkvLi9zcmMvVXRpbC5qcyIsIndlYnBhY2s6Ly9ub2lzZWZ5Ly4vc3JjL2F1ZGlvLW5vZGVzL1NpbmdsZUF1ZGlvTm9kZS5qcyIsIndlYnBhY2s6Ly9ub2lzZWZ5Ly4vc3JjL2F1ZGlvLW5vZGVzL2VmZmVjdHMvSW5wdXQuanMiLCJ3ZWJwYWNrOi8vbm9pc2VmeS8uL3NyYy9hdWRpby1ub2Rlcy9lZmZlY3RzL091dHB1dC5qcyIsIndlYnBhY2s6Ly9ub2lzZWZ5Ly4vc3JjL2F1ZGlvLW5vZGVzL2VmZmVjdHMvVm9sdW1lLmpzIiwid2VicGFjazovL25vaXNlZnkvLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOlsid2luIiwid2luZG93IiwiZ2xvYmFsIiwiZ2V0VXNlck1lZGlhIiwibmF2aWdhdG9yIiwid2Via2l0R2V0VXNlck1lZGlhIiwibW96R2V0VXNlck1lZGlhIiwibXNHZXRVc2VyTWVkaWEiLCJhdWRpb0NvbnRleHQiLCJBdWRpb0NvbnRleHQiLCJ3ZWJraXRBdWRpb0NvbnRleHQiLCJtb3pBdWRpb0NvbnRleHQiLCJtc0F1ZGlvQ29udGV4dCIsImhhc0dldFVzZXJNZWRpYSIsImhhc0F1ZGlvQ29udGV4dCIsIlNpbmdsZUF1ZGlvTm9kZSIsIl9hdWRpb0NvbnRleHQiLCJub2RlIiwiY29ubmVjdCIsImRpc2Nvbm5lY3QiLCJfbm9kZSIsIklucHV0IiwiX2RlZmVycmVkQ29ubmVjdHMiLCJfaGFzUGVybWlzc2lvbnMiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImF1ZGlvIiwic3RyZWFtIiwiaW5wdXQiLCJmb3JFYWNoIiwiZXJyb3IiLCJFcnJvciIsInB1c2giLCJtZWRpYURldmljZXMiLCJlbnVtZXJhdGVEZXZpY2VzIiwidGhlbiIsImRldmljZXMiLCJmaWx0ZXIiLCJkZXZpY2UiLCJraW5kIiwiY2F0Y2giLCJjcmVhdGVNZWRpYVN0cmVhbVNvdXJjZSIsIk91dHB1dCIsImRlc3RpbmF0aW9uIiwiVm9sdW1lIiwiY3JlYXRlR2FpbiIsImxldmVsIiwibXV0ZSIsIl9sZXZlbCIsInZvbHVtZSIsInZvbCIsInBhcnNlRmxvYXQiLCJnYWluIiwidmFsdWUiLCJfbXV0ZSIsIl9sZXZlbEJlZm9yZU11dGUiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNsRkE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFD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QUFMLEdBQWNFLEdBQWQsQ0FQZ0IsQ0FTaEI7O0FBQ0EsV0FBS2xDLElBQUwsQ0FBVW9DLElBQVYsQ0FBZUMsS0FBZixHQUF1QkgsR0FBdkIsQ0FWZ0IsQ0FZaEI7O0FBQ0EsV0FBS0ksS0FBTCxHQUFjSixHQUFHLEtBQUssQ0FBdEI7QUFDRDtBQUVEOzs7Ozs7O3dCQUlXO0FBQ1QsYUFBTyxLQUFLSSxLQUFaO0FBQ0Q7QUFFRDs7Ozs7c0JBSVNQLEksRUFBTTtBQUNiO0FBQ0EsV0FBS08sS0FBTCxHQUFhLENBQUMsQ0FBQ1AsSUFBZjs7QUFFQSxVQUFJLEtBQUtPLEtBQVQsRUFBZ0I7QUFDZDtBQUNBLGFBQUtDLGdCQUFMLEdBQXdCLEtBQUtULEtBQTdCLENBRmMsQ0FJZDs7QUFDQSxhQUFLQSxLQUFMLEdBQWEsQ0FBYjtBQUNELE9BTkQsTUFNTztBQUNMO0FBQ0EsYUFBS0EsS0FBTCxHQUFhLEtBQUtTLGdCQUFMLElBQXlCLEtBQUtQLE1BQTNDO0FBQ0Q7QUFDRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pFSDs7QUFDQTs7QUFDQTs7QUFDQSwrRCIsImZpbGUiOiJub2lzZWZ5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJub2lzZWZ5XCIsIFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIm5vaXNlZnlcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wibm9pc2VmeVwiXSA9IGZhY3RvcnkoKTtcbn0pKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsInZhciBnO1xuXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxuZyA9IChmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXM7XG59KSgpO1xuXG50cnkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcblx0ZyA9IGcgfHwgbmV3IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcbn0gY2F0Y2ggKGUpIHtcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpIGcgPSB3aW5kb3c7XG59XG5cbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XG5cbm1vZHVsZS5leHBvcnRzID0gZztcbiIsImxldCB3aW4gPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdyA6IGdsb2JhbDtcbi8qKlxuICogQ2hlY2sgaWYgdGhlIGN1cnJlbnQgYnJvd3NlciBzdXBwb3J0cyBnZXRVc2VyTWVkaWEuXG4gKi9cbmNvbnN0IGdldFVzZXJNZWRpYSA9IG5hdmlnYXRvci5nZXRVc2VyTWVkaWEgfHxcbiAgbmF2aWdhdG9yLndlYmtpdEdldFVzZXJNZWRpYSB8fFxuICBuYXZpZ2F0b3IubW96R2V0VXNlck1lZGlhIHx8XG4gIG5hdmlnYXRvci5tc0dldFVzZXJNZWRpYTtcblxuLyoqXG4gKiBDaGVjayBpZiB0aGUgY3VycmVudCBicm93c2VyIHN1cHBvcnRzIHRoZSB3ZWItYXVkaW8tYXBpIC5cbiAqL1xuXG5jb25zdCBhdWRpb0NvbnRleHQgPSB3aW4uQXVkaW9Db250ZXh0IHx8XG4gIHdpbi53ZWJraXRBdWRpb0NvbnRleHQgfHxcbiAgd2luLm1vekF1ZGlvQ29udGV4dCB8fFxuICB3aW4ubXNBdWRpb0NvbnRleHQ7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgaGFzR2V0VXNlck1lZGlhOiAoKT0+ICEhZ2V0VXNlck1lZGlhLFxuICBoYXNBdWRpb0NvbnRleHQ6ICgpPT4gISFhdWRpb0NvbnRleHQsXG59O1xuIiwiLyoqXG4gKiBUaGUgYmFzaWMgYXVkaW8gbm9kZSBjbGFzcy5cbiAqIFRoaXMgaXMgZGUgc2tlbGV0b24gZm9yIGEgYXVkaW8gIGVmZmVjdC5cbiAqIFdoZW4gdGhlIGVmZmVjdCBvbmx5IGNvbnRhaW5zIDEgYXVkaW9Ob2RlIHRoaXMgY2xhc3MgY2FuIGJlIHVzZWQuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNpbmdsZUF1ZGlvTm9kZSB7XG4gIC8vIG5vZGVzID0ge307IC8ve1trZXk6IHN0cmluZ106IEF1ZGlvTm9kZXxHYWluTm9kZXxEZWxheU5vZGV8V2F2ZVNoYXBlck5vZGV8QmlxdWFkRmlsdGVyTm9kZXxPc2NpbGxhdG9yTm9kZXxDb252b2x2ZXJOb2RlfSA9IHt9O1xuXG4gIGNvbnN0cnVjdG9yKGF1ZGlvQ29udGV4dCkge1xuICAgIC8vIFNldCB0aGUgYXVkaW8tY29udGV4dC5cbiAgICB0aGlzLl9hdWRpb0NvbnRleHQgPSBhdWRpb0NvbnRleHQ7XG4gIH1cblxuICAvKipcbiAgICogVGhlIGVmZmVjdHMgQXVkaW9Db250ZXh0IGdldHRlci5cbiAgICogQHJldHVybiB7QXVkaW9Db250ZXh0fSBUaGUgQXVkaW9Db250ZXh0IHVzZWQgYnkgdGhlIGVmZmVjdC5cbiAgICovXG4gIGdldCBhdWRpb0NvbnRleHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2F1ZGlvQ29udGV4dDtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgZWZmZWN0cyBBdWRpb0NvbnRleHQgc2V0dGVyLlxuICAgKiBAcGFyYW0gIHtBdWRpb0NvbnRleHR9IGF1ZGlvQ29udGV4dFxuICAgKi9cbiAgc2V0IGF1ZGlvQ29udGV4dChhdWRpb0NvbnRleHQpIHtcbiAgICB0aGlzLl9hdWRpb0NvbnRleHQgPSBhdWRpb0NvbnRleHQ7XG4gIH1cblxuICAvKipcbiAgICogVGhlIGVmZmVjdCdzIGF1ZGlvLW5vZGUgZ2V0dGVyLlxuICAgKiBAcmV0dXJuIHtBdWRpb05vZGV9IFRoZSBhdWRpby1ub2RlIHVzZWQgZm9yIHRoZSBlZmZlY3QuXG4gICAqL1xuICBnZXQgbm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fbm9kZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgZWZmZWN0J3MgYXVkaW8tbm9kZSBzZXR0ZXIuXG4gICAqIEBwYXJhbSAge0F1ZGlvTm9kZX0gbm9kZVxuICAgKi9cbiAgc2V0IG5vZGUobm9kZSkge1xuICAgIHRoaXMuX25vZGUgPSBub2RlO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbm5lY3QgdGhlIGVmZmVjdCB0byBvdGhlciBlZmZlY3RzIG9yIG5hdGl2ZSBhdWRpby1ub2Rlcy5cbiAgICogQHBhcmFtICB7QXVkaW9Ob2RlfFNpbmdsZUF1ZGlvTm9kZX0gbm9kZVxuICAgKiBAcmV0dXJuIHtBdWRpb05vZGV8U2luZ2xlQXVkaW9Ob2RlfVxuICAgKi9cbiAgY29ubmVjdChub2RlKSB7XG4gICAgdGhpcy5ub2RlLmNvbm5lY3Qobm9kZSk7XG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cblxuICAvKipcbiAgICogZGlzY29ubmVjdCB0aGUgZWZmZWN0LlxuICAgKiBAcmV0dXJuIHtBdWRpb05vZGV9XG4gICAqL1xuICBkaXNjb25uZWN0KCkge1xuICAgIHRoaXMubm9kZS5kaXNjb25uZWN0KCk7XG4gICAgcmV0dXJuIHRoaXMubm9kZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBbGlhcyBmb3IgdGhlIGRpc2Nvbm5lY3QgbWV0aG9kLCB0byBvZmZlciB0aGUgc2FtZSBhcGkgYXMgYSBNdWx0aUF1ZGlvTm9kZS5cbiAgICogQHJldHVybiB7QXVkaW9Ob2RlfVxuICAgKi9cbiAgZGVzdHJveSgpIHtcbiAgICByZXR1cm4gdGhpcy5kaXNjb25uZWN0KCk7XG4gIH1cbn1cbiIsIlxuaW1wb3J0IHtTaW5nbGVBdWRpb05vZGV9IGZyb20gJy4uL1NpbmdsZUF1ZGlvTm9kZSc7XG5pbXBvcnQge2hhc0dldFVzZXJNZWRpYX0gZnJvbSAnLi4vLi4vVXRpbCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIElucHV0IGV4dGVuZHMgU2luZ2xlQXVkaW9Ob2RlIHtcbiAgY29uc3RydWN0b3IoYXVkaW9Db250ZXh0KSB7XG4gICAgc3VwZXIoYXVkaW9Db250ZXh0KTtcbiAgICB0aGlzLl9kZWZlcnJlZENvbm5lY3RzID0gW107XG4gICAgdGhpcy5faGFzUGVybWlzc2lvbnMgPSBmYWxzZTtcbiAgfVxuXG4gIGdldCBpbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5ub2RlO1xuICB9XG4gIHNldCBpbnB1dChzdHJlYW0pIHtcbiAgICAvLyBDcmVhdGUgYSBtZWRpYS1zdHJlYW0gc291cmNlLlxuICAgIHRoaXMubm9kZSA9IHRoaXMuYXVkaW9Db250ZXh0LmNyZWF0ZU1lZGlhU3RyZWFtU291cmNlKHN0cmVhbSk7XG4gIH1cbiAgLyoqXG4gICAgICogR2V0IHlvdXIgbWljcm9waG9uZSBzb3VuZCBhcyBpbnB1dC5cbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPEF1ZGlvTm9kZT59IFJlc29sdmVzIHdoZW4geW91IGFjY2VwdCB0byB1c2UgdGhlIG1pY3JvcGhvbmUuXG4gICAgICovXG4gIGdldFVzZXJNZWRpYSgpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCk9PiB7XG4gICAgICBpZiAoaGFzR2V0VXNlck1lZGlhKSB7XG4gICAgICAgIG5hdmlnYXRvci5nZXRVc2VyTWVkaWEoe1xuICAgICAgICAgIGF1ZGlvOiB0cnVlLFxuICAgICAgICB9LCAoc3RyZWFtKT0+IHtcbiAgICAgICAgICB0aGlzLmlucHV0ID0gc3RyZWFtO1xuICAgICAgICAgIHRoaXMuX2hhc1Blcm1pc3Npb25zID0gdHJ1ZTtcblxuICAgICAgICAgIC8vIENvbm5lY3QgdGhlIGRlZmZlcmVkIGNvbm5lY3RzXG4gICAgICAgICAgdGhpcy5fZGVmZXJyZWRDb25uZWN0cy5mb3JFYWNoKChub2RlKT0+IHtcbiAgICAgICAgICAgIHRoaXMuY29ubmVjdChub2RlKTtcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIHJlc29sdmUoc3RyZWFtKTtcbiAgICAgICAgfSwgKGVycm9yKT0+IHtcbiAgICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlamVjdChFcnJvcignWW91ciBicm93c2VyIGRvZXMgbm90IHN1cHBvcnQgdGhlIHVzZSBvZiB1c2VyLW1lZGlhLCBwbGVhc2UgdXBncmFkZSBvciB1c2UgYW5vdGhlciBicm93c2VyIScpKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICAvKipcbiAgICAgKiBDb25uZWN0IHRoZSBlZmZlY3QgdG8gb3RoZXIgZWZmZWN0cyBvciBuYXRpdmUgYXVkaW8tbm9kZXMuXG4gICAgICogQHBhcmFtICB7QXVkaW9Ob2RlfFNpbmdsZUF1ZGlvTm9kZXxNdWx0aUF1ZGlvTm9kZX0gbm9kZVxuICAgICAqIEByZXR1cm4ge0F1ZGlvTm9kZXxTaW5nbGVBdWRpb05vZGV8TXVsdGlBdWRpb05vZGV9XG4gICAgICovXG4gIGNvbm5lY3Qobm9kZSkge1xuICAgIC8vIElmIHRoZXJlIGlzIG5vIGlucHV0IG5vZGUgeWV0LCBjb25uZWN0IHdoZW4gdGhlcmUgaXMgYSBub2RlXG4gICAgaWYgKHR5cGVvZiB0aGlzLm5vZGUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aGlzLl9kZWZlcnJlZENvbm5lY3RzLnB1c2gobm9kZSk7XG5cbiAgICAgIHJldHVybiBub2RlO1xuICAgIH1cblxuICAgIHRoaXMubm9kZS5jb25uZWN0KG5vZGUpO1xuXG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cblxuICAvLyBHZXQgYSBsaXN0IG9mIGF1ZGlvIGluLWFuZC1vdXRwdXQgZGV2aWNlcyBkZXZpY2VzLlxuICAvLyBAcmV0dXJuIEEgbGlzdCBvZiB0aGUgYXZhaWxhYmxlIGF1ZGlvIGluLWFuZC1vdXRwdXQgZGV2aWNlcy5cbiAgZ2V0QXVkaW9EZXZpY2VzKCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KT0+IHtcbiAgICAgIGlmICh0aGlzLl9oYXNQZXJtaXNzaW9ucykge1xuICAgICAgICBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzLmVudW1lcmF0ZURldmljZXMoKS50aGVuKChkZXZpY2VzKT0+IHtcbiAgICAgICAgICByZXNvbHZlKGRldmljZXMuZmlsdGVyKChkZXZpY2UpPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGRldmljZS5raW5kICYmIGRldmljZS5raW5kID09PSAnYXVkaW9pbnB1dCc7XG4gICAgICAgICAgfSkpO1xuICAgICAgICB9KS5jYXRjaCgoZXJyb3IpPT4ge1xuICAgICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5nZXRVc2VyTWVkaWEoKS50aGVuKCgpPT4ge1xuICAgICAgICAgIG5hdmlnYXRvci5tZWRpYURldmljZXMuZW51bWVyYXRlRGV2aWNlcygpLnRoZW4oKGRldmljZXMpPT4ge1xuICAgICAgICAgICAgcmVzb2x2ZShkZXZpY2VzLmZpbHRlcigoZGV2aWNlKT0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIGRldmljZS5raW5kICYmIGRldmljZS5raW5kID09PSAnYXVkaW9pbnB1dCc7XG4gICAgICAgICAgICB9KSk7XG4gICAgICAgICAgfSkuY2F0Y2goKGVycm9yKT0+IHtcbiAgICAgICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pLmNhdGNoKChlcnJvcik9PiB7XG4gICAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cbiIsImltcG9ydCB7U2luZ2xlQXVkaW9Ob2RlfSBmcm9tICcuLi9TaW5nbGVBdWRpb05vZGUnO1xuXG4vKipcbiAqIFRoZSBhdWRpby1lZmZlY3RzIG91dHB1dCBjbGFzcy5cbiAqIFRoaXMgY2xhc3MgY29ubmVjdHMgdG8geW91ciBkZXZpY2UncyBhdWRpbyBvdXRwdXQuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE91dHB1dCBleHRlbmRzIFNpbmdsZUF1ZGlvTm9kZSB7XG4gIGNvbnN0cnVjdG9yKGF1ZGlvQ29udGV4dCkge1xuICAgIHN1cGVyKGF1ZGlvQ29udGV4dCk7XG5cbiAgICBpZiAodGhpcy5hdWRpb0NvbnRleHQpIHtcbiAgICAgIHRoaXMubm9kZSA9IGF1ZGlvQ29udGV4dC5kZXN0aW5hdGlvbjtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7U2luZ2xlQXVkaW9Ob2RlfSBmcm9tICcuLi9TaW5nbGVBdWRpb05vZGUnO1xuXG4vKipcbiAqIFRoZSBhdWRpby1lZmZlY3RzIHZvbHVtZSBjbGFzcy5cbiAqIFRoaXMgY2xhc3MgbGV0cyB5b3UgY2hhbmdlIHRoZSB2b2x1bWUgb2YgdGhlIGF1ZGlvIHNpZ25hbC5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVm9sdW1lIGV4dGVuZHMgU2luZ2xlQXVkaW9Ob2RlIHtcbiAgY29uc3RydWN0b3IoYXVkaW9Db250ZXh0KSB7XG4gICAgc3VwZXIoYXVkaW9Db250ZXh0KTtcblxuICAgIC8vIENyZWF0ZSB0aGUgZ2Fpbi1ub2RlIHdoaWNoIHdlJ2xsIHVzZSB0byBjaGFuZ2UgdGhlIHZvbHVtZS5cbiAgICB0aGlzLm5vZGUgPSB0aGlzLmF1ZGlvQ29udGV4dC5jcmVhdGVHYWluKCk7XG5cbiAgICAvLyBUaGUgaW5pdGlhbCB2b2x1bWUgbGV2ZWwgaXMgMTAwJS5cbiAgICB0aGlzLmxldmVsID0gMTtcblxuICAgIC8vIFRoZSBlZmZlY3QgaXMgbm90IG11dGVkIGJ5IGRlZmF1bHQuXG4gICAgdGhpcy5tdXRlID0gZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICAgKiBHZXR0ZXIgZm9yIHRoZSBlZmZlY3RzIHZvbHVtZS5cbiAgICAgKiBAcmV0dXJuIHtGbG9hdH1cbiAgICAgKi9cbiAgZ2V0IGxldmVsKCkge1xuICAgIHJldHVybiB0aGlzLl9sZXZlbDtcbiAgfVxuXG4gIC8qKlxuICAgICAqIFNldHRlciBmb3IgdGhlIGVmZmVjdHMgdm9sdW1lLlxuICAgICAqIEBwYXJhbSAge0Zsb2F0fSB2b2x1bWUgVGhlIHZvbHVtZSwgdGlwaWNhbCBiZXR3ZWVuIDAgYW5kIDEuXG4gICAgICovXG4gIHNldCBsZXZlbCh2b2x1bWUpIHtcbiAgICAvLyBQYXJzZSB0aGUgdm9sdW1lLCBpdCBjYW4gbm90IGJlIGxvd2VyIHRoYW4gMC5cbiAgICBsZXQgdm9sID0gcGFyc2VGbG9hdCh2b2x1bWUpO1xuXG4gICAgdm9sID0gKHZvbCA+PSAwID8gdm9sIDogMCk7XG5cbiAgICAvLyBTZXQgdGhlIGludGVybmFsIHZvbHVtZSB2YWx1ZS5cbiAgICB0aGlzLl9sZXZlbCA9IHZvbDtcblxuICAgIC8vIFNldCB0aGUgZ2Fpbk5vZGUncyBnYWluIHZhbHVlLlxuICAgIHRoaXMubm9kZS5nYWluLnZhbHVlID0gdm9sO1xuXG4gICAgLy8gU2V0IHRoZSBpbnRlcm5hbCBtdXRlIHZhbHVlLlxuICAgIHRoaXMuX211dGUgPSAodm9sID09PSAwKTtcbiAgfVxuXG4gIC8qKlxuICAgICAqIEdldHRlciBmb3IgdGhlIGVmZmN0cyBtdXRlIGZ1bmN0aW9uYWxpdHkuXG4gICAgICogQHJldHVybiB7W3R5cGVdfSBbZGVzY3JpcHRpb25dXG4gICAgICovXG4gIGdldCBtdXRlKCkge1xuICAgIHJldHVybiB0aGlzLl9tdXRlO1xuICB9XG5cbiAgLyoqXG4gICAgICogU2V0dGVyIGZvciB0aGUgZWZmZWN0cyBtdXRlIGZ1bmN0aW9uYWxpdHkuXG4gICAgICogQHBhcmFtICB7Qm9vbGVhbn0gbXV0ZSBXaGV0aGVyIHRoZSBlZmZlY3QgaXMgbXV0ZWQuXG4gICAgICovXG4gIHNldCBtdXRlKG11dGUpIHtcbiAgICAvLyBTZXQgdGhlIGludGVybmFsIG11dGUgdmFsdWUuXG4gICAgdGhpcy5fbXV0ZSA9ICEhbXV0ZTtcblxuICAgIGlmICh0aGlzLl9tdXRlKSB7XG4gICAgICAvLyBLZWVwIHRyYWNrIG9mIHRoZSB2b2x1bWUgYmVmb3JlIG11dGluZ1xuICAgICAgdGhpcy5fbGV2ZWxCZWZvcmVNdXRlID0gdGhpcy5sZXZlbDtcblxuICAgICAgLy8gU2V0IHRoZSB2b2x1bWUgdG8gMFxuICAgICAgdGhpcy5sZXZlbCA9IDA7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFNldCB0aGUgdm9sdW1lIHRvIHRoZSBwcmV2aW91cyB2b2x1bWUuXG4gICAgICB0aGlzLmxldmVsID0gdGhpcy5fbGV2ZWxCZWZvcmVNdXRlIHx8IHRoaXMuX2xldmVsO1xuICAgIH1cbiAgfVxufVxuIiwiXG5pbXBvcnQge0lucHV0fSBmcm9tICcuL2F1ZGlvLW5vZGVzL2VmZmVjdHMvSW5wdXQnO1xuaW1wb3J0IHtPdXRwdXR9IGZyb20gJy4vYXVkaW8tbm9kZXMvZWZmZWN0cy9PdXRwdXQnO1xuaW1wb3J0IHtWb2x1bWV9IGZyb20gJy4vYXVkaW8tbm9kZXMvZWZmZWN0cy9Wb2x1bWUnO1xuaW1wb3J0IHtoYXNBdWRpb0NvbnRleHR9IGZyb20gJy4vVXRpbCc7XG5cbmV4cG9ydCB7XG4gIElucHV0LFxuICBPdXRwdXQsXG4gIFZvbHVtZSxcbiAgaGFzQXVkaW9Db250ZXh0LFxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=