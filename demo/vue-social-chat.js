(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(global = global || self, factory(global.VueSocialChat = {}));
}(this, (function (exports) { 'use strict';

	var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	function unwrapExports (x) {
		return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
	}

	function createCommonjsModule(fn, basedir, module) {
		return module = {
		  path: basedir,
		  exports: {},
		  require: function (path, base) {
	      return commonjsRequire(path, (base === undefined || base === null) ? module.path : base);
	    }
		}, fn(module, module.exports), module.exports;
	}

	function commonjsRequire () {
		throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
	}

	var dist = createCommonjsModule(function (module, exports) {
	(function webpackUniversalModuleDefinition(root, factory) {
		{ module.exports = factory(); }
	})(commonjsGlobal, function() {
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
	/******/ 	// identity function for calling harmony imports with the correct context
	/******/ 	__webpack_require__.i = function(value) { return value; };
	/******/
	/******/ 	// define getter function for harmony exports
	/******/ 	__webpack_require__.d = function(exports, name, getter) {
	/******/ 		if(!__webpack_require__.o(exports, name)) {
	/******/ 			Object.defineProperty(exports, name, {
	/******/ 				configurable: false,
	/******/ 				enumerable: true,
	/******/ 				get: getter
	/******/ 			});
	/******/ 		}
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
	/******/ 	// Load entry module and return exports
	/******/ 	return __webpack_require__(__webpack_require__.s = 6);
	/******/ })
	/************************************************************************/
	/******/ ([
	/* 0 */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {
	/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return toArray; });
	/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return arrayFind; });
	var toArray = function toArray(a) {
	  var ret = Array(a.length);
	  for (var i = 0; i < a.length; ++i) {
	    ret[i] = a[i];
	  }
	  return ret;
	};

	var arrayFind = function arrayFind(array, search) {
	  return array.filter(function (a) {
	    return a === search;
	  })[0];
	};

	/***/ }),
	/* 1 */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {
	Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
	/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOCUS_GROUP", function() { return FOCUS_GROUP; });
	/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOCUS_DISABLED", function() { return FOCUS_DISABLED; });
	/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOCUS_ALLOW", function() { return FOCUS_ALLOW; });
	/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOCUS_AUTO", function() { return FOCUS_AUTO; });
	var FOCUS_GROUP = 'data-focus-lock';
	var FOCUS_DISABLED = 'data-focus-lock-disabled';
	var FOCUS_ALLOW = 'data-no-focus-lock';
	var FOCUS_AUTO = 'data-autofocus-inside';

	/***/ }),
	/* 2 */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(1);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__array__ = __webpack_require__(0);



	var filterNested = function filterNested(nodes) {
	  var l = nodes.length;
	  var i = void 0;
	  var j = void 0;
	  for (i = 0; i < l; i += 1) {
	    for (j = 0; j < l; j += 1) {
	      if (i !== j) {
	        if (nodes[i].contains(nodes[j])) {
	          return filterNested(nodes.filter(function (x) {
	            return x !== nodes[j];
	          }));
	        }
	      }
	    }
	  }
	  return nodes;
	};

	var getTopParent = function getTopParent(node) {
	  return node.parentNode ? getTopParent(node.parentNode) : node;
	};

	var getAllAffectedNodes = function getAllAffectedNodes(node) {
	  var group = node.getAttribute(__WEBPACK_IMPORTED_MODULE_0__constants__["FOCUS_GROUP"]);
	  if (group) {
	    return filterNested(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__array__["a" /* toArray */])(getTopParent(node).querySelectorAll('[' + __WEBPACK_IMPORTED_MODULE_0__constants__["FOCUS_GROUP"] + '="' + group + '"]:not([' + __WEBPACK_IMPORTED_MODULE_0__constants__["FOCUS_DISABLED"] + '="disabled"])')));
	  }
	  return [node];
	};

	/* harmony default export */ __webpack_exports__["a"] = (getAllAffectedNodes);

	/***/ }),
	/* 3 */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {
	/* unused harmony export newFocus */
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_DOMutils__ = __webpack_require__(12);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_firstFocus__ = __webpack_require__(13);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_all_affected__ = __webpack_require__(2);




	var findAutoFocused = function findAutoFocused(autoFocusables) {
	  return function (node) {
	    return !!node.autofocus || node.dataset && !!node.dataset.autofocus || autoFocusables.indexOf(node) >= 0;
	  };
	};

	var newFocus = function newFocus(innerNodes, outerNodes, activeElement, lastNode, autoFocused) {
	  var cnt = innerNodes.length;
	  var firstFocus = innerNodes[0];
	  var lastFocus = innerNodes[cnt - 1];

	  // focus is inside
	  if (innerNodes.indexOf(activeElement) >= 0) {
	    return undefined;
	  }

	  var activeIndex = outerNodes.indexOf(activeElement);
	  var lastIndex = outerNodes.indexOf(lastNode || activeIndex);
	  var lastNodeInside = innerNodes.indexOf(lastNode);
	  var indexDiff = activeIndex - lastIndex;
	  var firstNodeIndex = outerNodes.indexOf(firstFocus);
	  var lastNodeIndex = outerNodes.indexOf(lastFocus);

	  // new focus
	  if (activeIndex === -1 || lastNodeInside === -1) {
	    return innerNodes.indexOf(autoFocused.length ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_firstFocus__["a" /* default */])(autoFocused) : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_firstFocus__["a" /* default */])(innerNodes));
	  }
	  // old focus
	  if (!indexDiff && lastNodeInside >= 0) {
	    return lastNodeInside;
	  }
	  // jump out
	  if (indexDiff && Math.abs(indexDiff) > 1) {
	    return lastNodeInside;
	  }
	  // focus above lock
	  if (activeIndex <= firstNodeIndex) {
	    return cnt - 1;
	  }
	  // focus below lock
	  if (activeIndex > lastNodeIndex) {
	    return 0;
	  }
	  // index is inside tab order, but outside Lock
	  if (indexDiff) {
	    if (Math.abs(indexDiff) > 1) {
	      return lastNodeInside;
	    }
	    return (cnt + lastNodeInside + indexDiff) % cnt;
	  }
	  // do nothing
	  return undefined;
	};

	var getTopCommonParent = function getTopCommonParent(activeElement, entry, entries) {
	  var topCommon = entry;
	  entries.forEach(function (subEntry) {
	    var common = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils_DOMutils__["a" /* getCommonParent */])(activeElement, subEntry);
	    if (common) {
	      if (common.contains(topCommon)) {
	        topCommon = common;
	      } else {
	        topCommon = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils_DOMutils__["a" /* getCommonParent */])(common, topCommon);
	      }
	    }
	  });
	  return topCommon;
	};

	var allParentAutofocusables = function allParentAutofocusables(entries) {
	  return entries.reduce(function (acc, node) {
	    return acc.concat(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils_DOMutils__["b" /* parentAutofocusables */])(node));
	  }, []);
	};

	var notAGuard = function notAGuard(node) {
	  return !(node.dataset && node.dataset.focusGuard);
	};

	var getFocusMerge = function getFocusMerge(topNode, lastNode) {
	  var activeElement = document && document.activeElement;
	  var entries = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils_all_affected__["a" /* default */])(topNode).filter(notAGuard);

	  var commonParent = getTopCommonParent(activeElement || topNode, topNode, entries);

	  var innerElements = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils_DOMutils__["c" /* getTabbableNodes */])(entries).filter(function (_ref) {
	    var node = _ref.node;
	    return notAGuard(node);
	  });

	  if (!innerElements[0]) {
	    innerElements = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils_DOMutils__["d" /* getAllTabbableNodes */])(entries).filter(function (_ref2) {
	      var node = _ref2.node;
	      return notAGuard(node);
	    });
	    if (!innerElements[0]) {
	      return undefined;
	    }
	  }

	  var innerNodes = innerElements.map(function (_ref3) {
	    var node = _ref3.node;
	    return node;
	  });

	  var outerNodes = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils_DOMutils__["c" /* getTabbableNodes */])([commonParent]).map(function (_ref4) {
	    var node = _ref4.node;
	    return node;
	  });

	  var newId = newFocus(innerNodes, outerNodes, activeElement, lastNode, innerNodes.filter(findAutoFocused(allParentAutofocusables(entries))));

	  if (newId === undefined) {
	    return newId;
	  }
	  return innerElements[newId];
	};

	/* harmony default export */ __webpack_exports__["a"] = (getFocusMerge);

	/***/ }),
	/* 4 */
	/***/ (function(module, exports, __webpack_require__) {

	var Component = __webpack_require__(17)(
	  /* script */
	  __webpack_require__(5),
	  /* template */
	  __webpack_require__(18),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	);
	Component.options.__file = "/Users/akorzunov/dev/Z/mellis/github/focus/vue-focus-lock/src/Lock.vue";
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.");}
	if (Component.options.functional) {console.error("[vue-loader] Lock.vue: functional components are not supported with templates, they should use render functions.");}

	module.exports = Component.exports;


	/***/ }),
	/* 5 */
	/***/ (function(module, exports, __webpack_require__) {


	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _focusLock = __webpack_require__(9);

	var _focusLock2 = _interopRequireDefault(_focusLock);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; } //
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	function deferAction(action) {
	  var setImmediate = window.setImmediate;
	  if (typeof setImmediate !== 'undefined') {
	    setImmediate(action);
	  } else {
	    setTimeout(action, 1);
	  }
	}

	var lastActiveTrap = 0;
	var lastActiveFocus = null;

	var focusWasOutsideWindow = false;

	var focusOnBody = function focusOnBody() {
	  return document && document.activeElement === document.body;
	};

	var isFreeFocus = function isFreeFocus() {
	  return focusOnBody() || (0, _focusLock.focusIsHidden)();
	};

	var activateTrap = function activateTrap() {
	  var result = false;
	  if (lastActiveTrap) {
	    var _lastActiveTrap = lastActiveTrap,
	        observed = _lastActiveTrap.observed,
	        onActivation = _lastActiveTrap.onActivation;

	    if (focusWasOutsideWindow || !isFreeFocus() || !lastActiveFocus) {
	      if (observed && !(0, _focusLock.focusInside)(observed)) {
	        onActivation();
	        result = (0, _focusLock2.default)(observed, lastActiveFocus);
	      }
	      focusWasOutsideWindow = false;
	      lastActiveFocus = document && document.activeElement;
	    }
	  }
	  return result;
	};

	var reducePropsToState = function reducePropsToState(propsList) {
	  return propsList.filter(function (_ref) {
	    var disabled = _ref.disabled;
	    return !disabled;
	  }).slice(-1)[0];
	};

	var handleStateChangeOnClient = function handleStateChangeOnClient(trap) {
	  if (lastActiveTrap !== trap) {
	    lastActiveTrap = null;
	  }
	  lastActiveTrap = trap;
	  if (trap) {
	    activateTrap();
	    deferAction(activateTrap);
	  }
	};

	var instances = [];

	var emitChange = function emitChange() {
	  handleStateChangeOnClient(reducePropsToState(instances));
	};

	var onTrap = function onTrap(event) {
	  if (activateTrap() && event) {
	    // prevent scroll jump
	    event.stopPropagation();
	    event.preventDefault();
	  }
	};

	var onBlur = function onBlur() {
	  deferAction(activateTrap);
	};

	var onWindowBlur = function onWindowBlur() {
	  focusWasOutsideWindow = true;
	};

	var attachHandler = function attachHandler() {
	  document.addEventListener('focusin', onTrap, true);
	  document.addEventListener('focusout', onBlur);
	  window.addEventListener('blur', onWindowBlur);
	};

	var detachHandler = function detachHandler() {
	  document.removeEventListener('focusin', onTrap, true);
	  document.removeEventListener('focusout', onBlur);
	  window.removeEventListener('blur', onWindowBlur);
	};

	exports.default = {
	  name: 'Lock',
	  props: {
	    returnFocus: {
	      type: Boolean
	    },
	    disabled: {
	      type: Boolean
	    },
	    noFocusGuards: {
	      type: [Boolean, String],
	      default: false
	    },
	    group: {
	      type: String
	    }
	  },
	  data: function data() {
	    return {
	      data: {},
	      hidden: "" //    "width: 1px;height: 0px;padding: 0;overflow: hidden;position: fixed;top: 0;left: 0;"
	    };
	  },

	  computed: {
	    groupAttr: function groupAttr() {
	      return _defineProperty({}, _focusLock.constants.FOCUS_GROUP, this.group);
	    },
	    hasLeadingGuards: function hasLeadingGuards() {
	      return this.noFocusGuards !== true;
	    },
	    hasTailingGuards: function hasTailingGuards() {
	      return this.hasLeadingGuards && this.noFocusGuards !== 'tail';
	    }
	  },
	  watch: {
	    disabled: function disabled() {
	      this.data.disabled = this.disabled;
	      emitChange();
	    }
	  },

	  methods: {
	    onBlur: function onBlur() {
	      deferAction(emitChange);
	    }
	  },

	  mounted: function mounted() {
	    var _this = this;

	    this.data.vue = this;
	    this.data.observed = this.$el.querySelector("[data-lock]");

	    this.data.disabled = this.disabled;
	    this.data.onActivation = function () {
	      _this.originalFocusedElement = _this.originalFocusedElement || document && document.activeElement;
	    };

	    if (!instances.length) {
	      attachHandler();
	    }
	    instances.push(this.data);
	    emitChange();
	  },
	  destroyed: function destroyed() {
	    var _this2 = this;

	    instances = instances.filter(function (_ref3) {
	      var vue = _ref3.vue;
	      return vue !== _this2;
	    });
	    if (!instances.length) {
	      detachHandler();
	    }
	    if (this.returnFocus && this.originalFocusedElement && this.originalFocusedElement.focus) {
	      this.originalFocusedElement.focus();
	    }
	    emitChange();
	  }
	};

	/***/ }),
	/* 6 */
	/***/ (function(module, exports, __webpack_require__) {


	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Lock = __webpack_require__(4);

	var _Lock2 = _interopRequireDefault(_Lock);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Lock2.default;

	/***/ }),
	/* 7 */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_all_affected__ = __webpack_require__(2);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_array__ = __webpack_require__(0);



	var focusInFrame = function focusInFrame(frame) {
	  return frame === document.activeElement;
	};

	var focusInsideIframe = function focusInsideIframe(topNode) {
	  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils_all_affected__["a" /* default */])(topNode).reduce(function (result, node) {
	    return result || !!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_array__["b" /* arrayFind */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_array__["a" /* toArray */])(node.querySelectorAll('iframe')), focusInFrame);
	  }, false);
	};

	var focusInside = function focusInside(topNode) {
	  var activeElement = document && document.activeElement;

	  if (!activeElement || activeElement.dataset && activeElement.dataset.focusGuard) {
	    return false;
	  }
	  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils_all_affected__["a" /* default */])(topNode).reduce(function (result, node) {
	    return result || node.contains(activeElement) || focusInsideIframe(topNode);
	  }, false);
	};

	/* harmony default export */ __webpack_exports__["a"] = (focusInside);

	/***/ }),
	/* 8 */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_array__ = __webpack_require__(0);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants__ = __webpack_require__(1);



	var focusIsHidden = function focusIsHidden() {
	  return document && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils_array__["a" /* toArray */])(document.querySelectorAll('[' + __WEBPACK_IMPORTED_MODULE_1__constants__["FOCUS_ALLOW"] + ']')).some(function (node) {
	    return node.contains(document.activeElement);
	  });
	};

	/* harmony default export */ __webpack_exports__["a"] = (focusIsHidden);

	/***/ }),
	/* 9 */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {
	Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tabHook__ = __webpack_require__(11);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__focusMerge__ = __webpack_require__(3);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__focusInside__ = __webpack_require__(7);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__focusIsHidden__ = __webpack_require__(8);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__setFocus__ = __webpack_require__(10);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__constants__ = __webpack_require__(1);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils_all_affected__ = __webpack_require__(2);
	/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "tabHook", function() { return __WEBPACK_IMPORTED_MODULE_0__tabHook__["a"]; });
	/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "focusInside", function() { return __WEBPACK_IMPORTED_MODULE_2__focusInside__["a"]; });
	/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "focusIsHidden", function() { return __WEBPACK_IMPORTED_MODULE_3__focusIsHidden__["a"]; });
	/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "focusMerge", function() { return __WEBPACK_IMPORTED_MODULE_1__focusMerge__["a"]; });
	/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "constants", function() { return __WEBPACK_IMPORTED_MODULE_5__constants__; });
	/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "getAllAffectedNodes", function() { return __WEBPACK_IMPORTED_MODULE_6__utils_all_affected__["a"]; });










	/* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_4__setFocus__["a" /* default */]);

	/***/ }),
	/* 10 */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {
	/* unused harmony export focusOn */
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__focusMerge__ = __webpack_require__(3);


	var focusOn = function focusOn(target) {
	  target.focus();
	  if (target.contentWindow) {
	    target.contentWindow.focus();
	  }
	};

	var guardCount = 0;
	var lockDisabled = false;

	/* harmony default export */ __webpack_exports__["a"] = (function (topNode, lastNode) {
	  var focusable = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__focusMerge__["a" /* default */])(topNode, lastNode);

	  if (lockDisabled) {
	    return;
	  }

	  if (focusable) {
	    if (guardCount > 2) {
	      if (process.env.NODE_ENV !== 'production') {
	        // eslint-disable-next-line no-console
	        console.error('FocusLock: focus-fighting detected. Only one focus management system could be active. ' + 'See https://github.com/theKashey/focus-lock/#focus-fighting');
	        lockDisabled = true;
	        setTimeout(function () {
	          lockDisabled = false;
	        }, 1);
	      }
	      return;
	    }
	    guardCount++;
	    focusOn(focusable.node);
	    guardCount--;
	  }
	});

	/***/ }),
	/* 11 */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {
	/* harmony default export */ __webpack_exports__["a"] = ({
	  attach: function attach(node, enabled) {},
	  detach: function detach() {}
	});

	/***/ }),
	/* 12 */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {
	/* unused harmony export isVisible */
	/* unused harmony export notHiddenInput */
	/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getCommonParent; });
	/* unused harmony export filterFocusable */
	/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getTabbableNodes; });
	/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getAllTabbableNodes; });
	/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return parentAutofocusables; });
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tabOrder__ = __webpack_require__(14);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tabUtils__ = __webpack_require__(15);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__array__ = __webpack_require__(0);




	var isElementHidden = function isElementHidden(computedStyle) {
	  if (!computedStyle || !computedStyle.getPropertyValue) {
	    return false;
	  }
	  return computedStyle.getPropertyValue('display') === 'none' || computedStyle.getPropertyValue('visibility') === 'hidden';
	};

	var isVisible = function isVisible(node) {
	  return !node || node === document || !isElementHidden(window.getComputedStyle(node, null)) && isVisible(node.parentNode);
	};

	var notHiddenInput = function notHiddenInput(node) {
	  return !((node.tagName === 'INPUT' || node.tagName === 'BUTTON') && (node.type === 'hidden' || node.disabled));
	};

	var getParents = function getParents(node) {
	  var parents = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

	  parents.push(node);
	  if (node.parentNode) {
	    getParents(node.parentNode, parents);
	  }
	  return parents;
	};

	var getCommonParent = function getCommonParent(nodea, nodeb) {
	  var parentsA = getParents(nodea);
	  var parentsB = getParents(nodeb);

	  for (var i = 0; i < parentsA.length; i += 1) {
	    var currentParent = parentsA[i];
	    if (parentsB.indexOf(currentParent) >= 0) {
	      return currentParent;
	    }
	  }
	  return false;
	};

	var filterFocusable = function filterFocusable(nodes) {
	  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__array__["a" /* toArray */])(nodes).filter(function (node) {
	    return isVisible(node);
	  }).filter(function (node) {
	    return notHiddenInput(node);
	  });
	};

	var getTabbableNodes = function getTabbableNodes(topNodes) {
	  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__tabOrder__["a" /* orderByTabIndex */])(filterFocusable(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__tabUtils__["a" /* getFocusables */])(topNodes)), true);
	};

	var getAllTabbableNodes = function getAllTabbableNodes(topNodes) {
	  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__tabOrder__["a" /* orderByTabIndex */])(filterFocusable(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__tabUtils__["a" /* getFocusables */])(topNodes)), false);
	};

	var parentAutofocusables = function parentAutofocusables(topNode) {
	  return filterFocusable(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__tabUtils__["b" /* getParentAutofocusables */])(topNode));
	};

	/***/ }),
	/* 13 */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {
	var isRadio = function isRadio(node) {
	  return node.tagName === 'INPUT' && node.type === 'radio';
	};

	var findSelectedRadio = function findSelectedRadio(node, nodes) {
	  return nodes.filter(isRadio).filter(function (el) {
	    return el.name === node.name;
	  }).filter(function (el) {
	    return el.checked;
	  })[0] || node;
	};

	var pickFirstFocus = function pickFirstFocus(nodes) {
	  if (nodes[0] && nodes.length > 1) {
	    if (isRadio(nodes[0]) && nodes[0].name) {
	      return findSelectedRadio(nodes[0], nodes);
	    }
	  }
	  return nodes[0];
	};

	/* harmony default export */ __webpack_exports__["a"] = (pickFirstFocus);

	/***/ }),
	/* 14 */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {
	/* unused harmony export tabSort */
	/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return orderByTabIndex; });
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__array__ = __webpack_require__(0);


	var tabSort = function tabSort(a, b) {
	  var tabDiff = a.tabIndex - b.tabIndex;
	  var indexDiff = a.index - b.index;

	  if (tabDiff) {
	    if (!a.tabIndex) { return 1; }
	    if (!b.tabIndex) { return -1; }
	  }

	  return tabDiff || indexDiff;
	};

	var orderByTabIndex = function orderByTabIndex(nodes, filterNegative) {
	  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__array__["a" /* toArray */])(nodes).map(function (node, index) {
	    return {
	      node: node,
	      index: index,
	      tabIndex: node.tabIndex
	    };
	  }).filter(function (data) {
	    return !filterNegative || data.tabIndex >= 0;
	  }).sort(tabSort);
	};

	/***/ }),
	/* 15 */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {
	/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getFocusables; });
	/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getParentAutofocusables; });
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tabbables__ = __webpack_require__(16);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__array__ = __webpack_require__(0);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__(1);




	var getFocusables = function getFocusables(parents) {
	  return parents.reduce(function (acc, parent) {
	    return acc.concat(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__array__["a" /* toArray */])(parent.querySelectorAll(__WEBPACK_IMPORTED_MODULE_0__tabbables__["a" /* default */].join(','))));
	  }, []);
	};

	var getParentAutofocusables = function getParentAutofocusables(parent) {
	  var parentFocus = parent.querySelectorAll('[' + __WEBPACK_IMPORTED_MODULE_2__constants__["FOCUS_AUTO"] + ']');
	  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__array__["a" /* toArray */])(parentFocus).map(function (node) {
	    return getFocusables([node]);
	  }).reduce(function (acc, nodes) {
	    return acc.concat(nodes);
	  }, []);
	};

	/***/ }),
	/* 16 */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {
	/* harmony default export */ __webpack_exports__["a"] = (['button:enabled:not([readonly])', 'select:enabled:not([readonly])', 'textarea:enabled:not([readonly])', 'input:enabled:not([readonly])', 'a[href]', 'area[href]', 'iframe', 'object', 'embed', '[tabindex]', '[contenteditable]', '[autofocus]']);

	/***/ }),
	/* 17 */
	/***/ (function(module, exports) {

	// this module is a runtime utility for cleaner component module output and will
	// be included in the final webpack user bundle

	module.exports = function normalizeComponent (
	  rawScriptExports,
	  compiledTemplate,
	  scopeId,
	  cssModules
	) {
	  var esModule;
	  var scriptExports = rawScriptExports = rawScriptExports || {};

	  // ES6 modules interop
	  var type = typeof rawScriptExports.default;
	  if (type === 'object' || type === 'function') {
	    esModule = rawScriptExports;
	    scriptExports = rawScriptExports.default;
	  }

	  // Vue.extend constructor export interop
	  var options = typeof scriptExports === 'function'
	    ? scriptExports.options
	    : scriptExports;

	  // render functions
	  if (compiledTemplate) {
	    options.render = compiledTemplate.render;
	    options.staticRenderFns = compiledTemplate.staticRenderFns;
	  }

	  // scopedId
	  if (scopeId) {
	    options._scopeId = scopeId;
	  }

	  // inject cssModules
	  if (cssModules) {
	    var computed = Object.create(options.computed || null);
	    Object.keys(cssModules).forEach(function (key) {
	      var module = cssModules[key];
	      computed[key] = function () { return module };
	    });
	    options.computed = computed;
	  }

	  return {
	    esModule: esModule,
	    exports: scriptExports,
	    options: options
	  }
	};


	/***/ }),
	/* 18 */
	/***/ (function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', [(_vm.hasLeadingGuards) ? _c('div', {
	    style: (_vm.hidden),
	    attrs: {
	      "tabIndex": _vm.disabled ? -1 : 0
	    }
	  }) : _vm._e(), _vm._v(" "), (_vm.hasLeadingGuards) ? _c('div', {
	    style: (_vm.hidden),
	    attrs: {
	      "tabIndex": _vm.disabled ? -1 : 1
	    }
	  }) : _vm._e(), _vm._v(" "), _c('div', _vm._b({
	    attrs: {
	      "data-lock": ""
	    },
	    on: {
	      "focusout": _vm.onBlur
	    }
	  }, 'div', _vm.groupAttr, false), [_vm._t("default")], 2), _vm._v(" "), (_vm.hasTailingGuards) ? _c('div', {
	    style: (_vm.hidden),
	    attrs: {
	      "tabIndex": _vm.disabled ? -1 : 0
	    }
	  }) : _vm._e()])
	},staticRenderFns: []};
	module.exports.render._withStripped = true;

	/***/ })
	/******/ ]);
	});
	});

	var FocusLock = /*@__PURE__*/unwrapExports(dist);

	//

	var script = {
	  name: 'VuePopupChat',

	  components: {
	    FocusLock: FocusLock
	  },

	  props: {
	    icon: {
	      type: Boolean,
	      default: true
	    },
	    team: {
	      type: Array,
	      default: function () { return ([]); }
	    }
	  },

	  data: function () { return ({
	    show: false
	  }); },

	  computed: {
	    ariaLabelButton: function ariaLabelButton () {
	      return ((this.show ? 'Close' : 'Open') + " social support widget")
	    }
	  },

	  methods: {
	    togglePopup: function togglePopup () {
	      this.show = !this.show;
	    }
	  }
	};

	function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
	    if (typeof shadowMode !== 'boolean') {
	        createInjectorSSR = createInjector;
	        createInjector = shadowMode;
	        shadowMode = false;
	    }
	    // Vue.extend constructor export interop.
	    var options = typeof script === 'function' ? script.options : script;
	    // render functions
	    if (template && template.render) {
	        options.render = template.render;
	        options.staticRenderFns = template.staticRenderFns;
	        options._compiled = true;
	        // functional template
	        if (isFunctionalTemplate) {
	            options.functional = true;
	        }
	    }
	    // scopedId
	    if (scopeId) {
	        options._scopeId = scopeId;
	    }
	    var hook;
	    if (moduleIdentifier) {
	        // server build
	        hook = function (context) {
	            // 2.3 injection
	            context =
	                context || // cached call
	                    (this.$vnode && this.$vnode.ssrContext) || // stateful
	                    (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
	            // 2.2 with runInNewContext: true
	            if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
	                context = __VUE_SSR_CONTEXT__;
	            }
	            // inject component styles
	            if (style) {
	                style.call(this, createInjectorSSR(context));
	            }
	            // register component module identifier for async chunk inference
	            if (context && context._registeredComponents) {
	                context._registeredComponents.add(moduleIdentifier);
	            }
	        };
	        // used by ssr in case component is cached and beforeCreate
	        // never gets called
	        options._ssrRegister = hook;
	    }
	    else if (style) {
	        hook = shadowMode
	            ? function (context) {
	                style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
	            }
	            : function (context) {
	                style.call(this, createInjector(context));
	            };
	    }
	    if (hook) {
	        if (options.functional) {
	            // register for functional component in vue file
	            var originalRender = options.render;
	            options.render = function renderWithStyleInjection(h, context) {
	                hook.call(context);
	                return originalRender(h, context);
	            };
	        }
	        else {
	            // inject component registration as beforeCreate hook
	            var existing = options.beforeCreate;
	            options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
	        }
	    }
	    return script;
	}

	var isOldIE = typeof navigator !== 'undefined' &&
	    /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
	function createInjector(context) {
	    return function (id, style) { return addStyle(id, style); };
	}
	var HEAD;
	var styles = {};
	function addStyle(id, css) {
	    var group = isOldIE ? css.media || 'default' : id;
	    var style = styles[group] || (styles[group] = { ids: new Set(), styles: [] });
	    if (!style.ids.has(id)) {
	        style.ids.add(id);
	        var code = css.source;
	        if (css.map) {
	            // https://developer.chrome.com/devtools/docs/javascript-debugging
	            // this makes source maps inside style tags work properly in Chrome
	            code += '\n/*# sourceURL=' + css.map.sources[0] + ' */';
	            // http://stackoverflow.com/a/26603875
	            code +=
	                '\n/*# sourceMappingURL=data:application/json;base64,' +
	                    btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) +
	                    ' */';
	        }
	        if (!style.element) {
	            style.element = document.createElement('style');
	            style.element.type = 'text/css';
	            if (css.media)
	                { style.element.setAttribute('media', css.media); }
	            if (HEAD === undefined) {
	                HEAD = document.head || document.getElementsByTagName('head')[0];
	            }
	            HEAD.appendChild(style.element);
	        }
	        if ('styleSheet' in style.element) {
	            style.styles.push(code);
	            style.element.styleSheet.cssText = style.styles
	                .filter(Boolean)
	                .join('\n');
	        }
	        else {
	            var index = style.ids.size - 1;
	            var textNode = document.createTextNode(code);
	            var nodes = style.element.childNodes;
	            if (nodes[index])
	                { style.element.removeChild(nodes[index]); }
	            if (nodes.length)
	                { style.element.insertBefore(textNode, nodes[index]); }
	            else
	                { style.element.appendChild(textNode); }
	        }
	    }
	}

	/* script */
	var __vue_script__ = script;

	/* template */
	var __vue_render__ = function() {
	  var _vm = this;
	  var _h = _vm.$createElement;
	  var _c = _vm._self._c || _h;
	  return _c("FocusLock", { attrs: { disabled: !_vm.show } }, [
	    _c("div", { staticClass: "vsc-popup" }, [
	      _c(
	        "div",
	        {
	          staticClass: "vsc-popup-box",
	          class: {
	            "vsc-popup-box--show": _vm.show
	          },
	          attrs: { id: "vsc-popup-box" }
	        },
	        [
	          _c(
	            "div",
	            {
	              directives: [
	                {
	                  name: "show",
	                  rawName: "v-show",
	                  value: _vm.$slots.header,
	                  expression: "$slots.header"
	                }
	              ],
	              staticClass: "vsc-popup-header"
	            },
	            [_vm._t("header")],
	            2
	          ),
	          _vm._v(" "),
	          _c(
	            "div",
	            { staticClass: "vsc-popup-body" },
	            [
	              _vm._t("body", [
	                _c(
	                  "ul",
	                  { staticClass: "vsc-popup-body__list" },
	                  _vm._l(_vm.team, function(support, index) {
	                    return _c(
	                      "li",
	                      {
	                        key: "vsc-item-" + index,
	                        staticClass: "vsc-popup-body__list-item"
	                      },
	                      [
	                        _c(
	                          "a",
	                          {
	                            staticClass: "vsc-popup-body__link",
	                            attrs: {
	                              href: support.href,
	                              rel: "noopener",
	                              target: "_blank",
	                              "aria-label":
	                                "Contact " +
	                                support.name +
	                                ", opens in a new window"
	                            }
	                          },
	                          [
	                            _c(
	                              "div",
	                              { staticClass: "vsc-popup-body__link-avatar" },
	                              [
	                                _c("img", {
	                                  attrs: {
	                                    src: support.avatar.src,
	                                    alt: support.avatar.alt
	                                  }
	                                })
	                              ]
	                            ),
	                            _vm._v(" "),
	                            _c(
	                              "div",
	                              { staticClass: "vsc-popup-body__link-info" },
	                              [
	                                _c("span", {
	                                  staticClass:
	                                    "vsc-popup-body__link-info__label",
	                                  domProps: {
	                                    textContent: _vm._s(support.label)
	                                  }
	                                }),
	                                _vm._v(" "),
	                                _c("span", {
	                                  staticClass:
	                                    "vsc-popup-body__link-info__name",
	                                  domProps: {
	                                    textContent: _vm._s(support.name)
	                                  }
	                                })
	                              ]
	                            )
	                          ]
	                        )
	                      ]
	                    )
	                  }),
	                  0
	                )
	              ])
	            ],
	            2
	          ),
	          _vm._v(" "),
	          _c(
	            "div",
	            {
	              directives: [
	                {
	                  name: "show",
	                  rawName: "v-show",
	                  value: _vm.$slots.footer,
	                  expression: "$slots.footer"
	                }
	              ],
	              staticClass: "vsc-popup-footer"
	            },
	            [_vm._t("footer")],
	            2
	          )
	        ]
	      ),
	      _vm._v(" "),
	      _c("div", [
	        _c(
	          "button",
	          {
	            staticClass: "vsc-popup-button vsc-popup-button--default",
	            class: {
	              "vsc-popup-button--no-icon": !_vm.icon
	            },
	            attrs: {
	              "aria-haspopup": "true",
	              "aria-controls": "vsc-popup-box",
	              "aria-expanded": "false",
	              "aria-label": _vm.ariaLabelButton
	            },
	            on: { click: _vm.togglePopup }
	          },
	          [
	            _c(
	              "span",
	              {
	                directives: [
	                  {
	                    name: "show",
	                    rawName: "v-show",
	                    value: !_vm.show,
	                    expression: "!show"
	                  }
	                ]
	              },
	              [
	                _vm._t("icon", [
	                  _c(
	                    "svg",
	                    {
	                      attrs: {
	                        xmlns: "http://www.w3.org/2000/svg",
	                        width: "28",
	                        height: "28",
	                        fill: "currentColor",
	                        viewBox: "0 0 511.3 511.3"
	                      }
	                    },
	                    [
	                      _c("defs"),
	                      _vm._v(" "),
	                      _c("path", {
	                        attrs: {
	                          d:
	                            "M362.3 165.3H149a21 21 0 100 42h213.3a21 21 0 100-42zM309 250.7H149a21 21 0 100 42h160a21 21 0 100-42z"
	                        }
	                      }),
	                      _vm._v(" "),
	                      _c("path", {
	                        attrs: {
	                          d:
	                            "M488.6 61.3a21 21 0 00-12.2-12C397 19.4 115.3 19 35 49.4a21 21 0 00-12.1 12C21.8 63.7 0 120.8 0 229s21.9 165.3 22.8 167.6a21 21 0 0012.1 12c1.8.7 44 16.3 151.8 21.2l55 49.5a21 21 0 0028 0l55-49.5c107.7-4.9 150-20.5 151.7-21.2a21 21 0 0012.2-12c.9-2.3 22.7-59.4 22.7-167.6S489.5 63.7 488.6 61.3zM452.4 372c-17.2 4.4-59.8 13.1-137 16.2a21 21 0 00-13.2 5.4l-46.5 41.8-46.5-41.8a21 21 0 00-13.3-5.4C118.7 385 76.2 376.4 59 372c-22.6-78-22.5-208.4 0-286 90.7-23.2 303-23.2 393.5 0 22.6 77.7 22.6 208 0 286z"
	                        }
	                      })
	                    ]
	                  )
	                ])
	              ],
	              2
	            ),
	            _vm._v(" "),
	            _c(
	              "svg",
	              {
	                directives: [
	                  {
	                    name: "show",
	                    rawName: "v-show",
	                    value: _vm.show,
	                    expression: "show"
	                  }
	                ],
	                attrs: {
	                  xmlns: "http://www.w3.org/2000/svg",
	                  width: "30",
	                  height: "30",
	                  fill: "none",
	                  stroke: "currentColor",
	                  "stroke-linecap": "round",
	                  "stroke-linejoin": "round",
	                  "stroke-width": "2",
	                  viewBox: "0 0 24 24"
	                }
	              },
	              [
	                _c("defs"),
	                _vm._v(" "),
	                _c("path", { attrs: { d: "M18 6L6 18M6 6l12 12" } })
	              ]
	            )
	          ]
	        )
	      ])
	    ])
	  ])
	};
	var __vue_staticRenderFns__ = [];
	__vue_render__._withStripped = true;

	  /* style */
	  var __vue_inject_styles__ = function (inject) {
	    if (!inject) { return }
	    inject("data-v-42c3e2c8_0", { source: ":root {\r\n  --vsc-bg-header: #fcfcfc;\r\n  --vsc-text-color-header: inherit;\r\n  --vsc-bg-button: #333;\r\n  --vsc-bg-hover-button: #555;\r\n  --vsc-text-color-button: white;\r\n  --vsc-outline-color: #41b883;\r\n  --vsc-border-default: 1px solid #f3f3f3;\n}", map: undefined, media: undefined })
	,inject("data-v-42c3e2c8_1", { source: ".vsc-popup * {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n}\n.vsc-popup {\n  position: fixed;\n  right: 20px;\n  bottom: 20px;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: flex-end;\n  max-width: 380px;\n  -webkit-font-smoothing: antialiased;\n}\n.vsc-popup-box {\n  transition: transform 0.3s ease-in-out, opacity 0.2s, visibility 0.2s;\n  transform-origin: bottom right;\n  transform: scale3d(0, 0, 0);\n  opacity: 0;\n  visibility: hidden;\n  border-radius: 10px;\n  margin-bottom: 10px;\n  box-shadow: 0 5px 25px -5px rgba(45,62,79,0.15);\n  background-color: #fbfbfb;\n  border: var(--vsc-border-default);\n  overflow: hidden;\n}\n.vsc-popup-box--show {\n  transform: scale3d(1, 1, 1);\n  visibility: visible;\n  opacity: 1;\n}\n.vsc-popup-header {\n  text-align: left;\n  padding: 22px 30px;\n  border-bottom: var(--vsc-border-default);\n}\n.vsc-popup-body {\n  padding: 16px;\n  background-color: #fff;\n}\n.vsc-popup-body__list {\n  list-style: none;\n  display: flex;\n  flex-wrap: wrap;\n}\n.vsc-popup-body__list-item {\n  width: 100%;\n}\n.vsc-popup-body__link {\n  display: flex;\n  padding: 20px;\n  text-decoration: none;\n  border-radius: 10px;\n  color: #333;\n  letter-spacing: 0.2px;\n}\n.vsc-popup-body__link:hover,\n.vsc-popup-body__link:focus {\n  background-color: #fbfbfb;\n}\n.vsc-popup-body__link-avatar {\n  width: 62px;\n  height: 62px;\n  overflow: hidden;\n}\n.vsc-popup-body__link-avatar > img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  border-radius: 50%;\n}\n.vsc-popup-body__link-info {\n  padding-top: 12px;\n  padding-left: 12px;\n}\n.vsc-popup-body__link-info > span {\n  display: block;\n  text-align: left;\n}\n.vsc-popup-body__link-info__label {\n  font-size: 12px;\n}\n.vsc-popup-body__link-info__name {\n  font-weight: bold;\n  margin-top: 2px;\n}\n.vsc-popup-footer {\n  padding: 16px;\n  border-top: var(--vsc-border-default);\n}\n.vsc-popup-button {\n  outline: none;\n  appearance: none;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  background-color: transparent;\n  color: inherit;\n  border: none;\n  cursor: pointer;\n  border-radius: 50%;\n  width: 60px;\n  height: 60px;\n  display: inline-block;\n  box-shadow: 0 3px 10px rgba(0,0,0,0.3);\n  font-family: inherit;\n  transition: background-color 0.3s;\n}\n.vsc-popup-button--default {\n  background-color: var(--vsc-bg-button);\n  color: var(--vsc-text-color-button);\n}\n.vsc-popup-button--no-icon {\n  border-radius: 30px;\n  height: auto;\n  width: auto;\n  padding: 14px 20px;\n}\n.vsc-popup-button:hover {\n  background-color: var(--vsc-bg-hover-button);\n}\n.vsc-popup-button:focus {\n  box-shadow: 0 0 0 3px var(--vsc-outline-color);\n}\n.vsc-popup-header,\n.vsc-popup-footer {\n  background-color: var(--vsc-bg-header);\n  color: var(--vsc-text-color-header);\n}\n@media (prefers-reduced-motion) {\n.vsc-popup * {\n    transition: none;\n}\n}\n", map: {"version":3,"sources":["D:\\Work\\Projetos\\Open-source\\Github\\In Progress\\vue-social-chat\\src\\PopupChat.vue","PopupChat.vue"],"names":[],"mappings":"AAoJA;EACA,sBAAA;EACA,UAAA;EACA,SAAA;ACnJA;ADqJA;EACA,eAAA;EACA,WAAA;EACA,YAAA;EACA,aAAA;EACA,eAAA;EACA,yBAAA;EACA,gBAAA;EACA,mCAAA;ACnJA;ADqJA;EACA,qEAAA;EACA,8BAAA;EACA,2BAAA;EACA,UAAA;EACA,kBAAA;EACA,mBAAA;EACA,mBAAA;EACA,+CAAA;EACA,yBAAA;EACA,iCAAA;EACA,gBAAA;ACnJA;ADqJA;EACA,2BAAA;EACA,mBAAA;EACA,UAAA;ACnJA;ADqJA;EACA,gBAAA;EACA,kBAAA;EACA,wCAAA;ACnJA;ADqJA;EACA,aAAA;EACA,sBAAA;ACnJA;ADqJA;EACA,gBAAA;EACA,aAAA;EACA,eAAA;ACnJA;ADqJA;EACA,WAAA;ACnJA;ADqJA;EACA,aAAA;EACA,aAAA;EACA,qBAAA;EACA,mBAAA;EACA,WAAA;EACA,qBAAA;ACnJA;ADqJA;;EACA,yBAAA;AClJA;ADoJA;EACA,WAAA;EACA,YAAA;EACA,gBAAA;AClJA;ADoJA;EACA,WAAA;EACA,YAAA;EACA,iBAAA;EACA,kBAAA;AClJA;ADoJA;EACA,iBAAA;EACA,kBAAA;AClJA;ADoJA;EACA,cAAA;EACA,gBAAA;AClJA;ADoJA;EACA,eAAA;AClJA;ADoJA;EACA,iBAAA;EACA,eAAA;AClJA;ADoJA;EACA,aAAA;EACA,qCAAA;AClJA;ADoJA;EACA,aAAA;EACA,gBAAA;EACA,wBAAA;EACA,qBAAA;EACA,6BAAA;EACA,cAAA;EACA,YAAA;EACA,eAAA;EACA,kBAAA;EACA,WAAA;EACA,YAAA;EACA,qBAAA;EACA,sCAAA;EACA,oBAAA;EACA,iCAAA;AClJA;ADoJA;EACA,sCAAA;EACA,mCAAA;AClJA;ADoJA;EACA,mBAAA;EACA,YAAA;EACA,WAAA;EACA,kBAAA;AClJA;ADoJA;EACA,4CAAA;AClJA;ADoJA;EACA,8CAAA;AClJA;ADoJA;;EACA,sCAAA;EACA,mCAAA;ACjJA;ADmJA;AACA;IACA,gBAAA;ACjJE;AACF","file":"PopupChat.vue","sourcesContent":["<template>\r\n  <FocusLock :disabled=\"!show\">\r\n    <div class=\"vsc-popup\">\r\n      <div\r\n        id=\"vsc-popup-box\"\r\n        class=\"vsc-popup-box\"\r\n        :class=\"{\r\n          'vsc-popup-box--show': show\r\n        }\"\r\n      >\r\n        <div\r\n          v-show=\"$slots.header\"\r\n          class=\"vsc-popup-header\"\r\n        >\r\n          <slot name=\"header\" />\r\n        </div>\r\n        <div class=\"vsc-popup-body\">\r\n          <slot name=\"body\">\r\n            <ul class=\"vsc-popup-body__list\">\r\n              <li\r\n                v-for=\"(support, index) in team\"\r\n                :key=\"`vsc-item-${index}`\"\r\n                class=\"vsc-popup-body__list-item\"\r\n              >\r\n                <a\r\n                  :href=\"support.href\"\r\n                  rel=\"noopener\"\r\n                  target=\"_blank\"\r\n                  class=\"vsc-popup-body__link\"\r\n                  :aria-label=\"`Contact ${support.name}, opens in a new window`\"\r\n                >\r\n                  <div class=\"vsc-popup-body__link-avatar\">\r\n                    <img\r\n                      :src=\"support.avatar.src\"\r\n                      :alt=\"support.avatar.alt\"\r\n                    >\r\n                  </div>\r\n                  <div class=\"vsc-popup-body__link-info\">\r\n                    <span\r\n                      class=\"vsc-popup-body__link-info__label\"\r\n                      v-text=\"support.label\"\r\n                    />\r\n                    <span\r\n                      class=\"vsc-popup-body__link-info__name\"\r\n                      v-text=\"support.name\"\r\n                    />\r\n                  </div>\r\n                </a>\r\n              </li>\r\n            </ul>\r\n          </slot>\r\n        </div>\r\n        <div\r\n          v-show=\"$slots.footer\"\r\n          class=\"vsc-popup-footer\"\r\n        >\r\n          <slot name=\"footer\" />\r\n        </div>\r\n      </div>\r\n      <div>\r\n        <button\r\n          class=\"vsc-popup-button vsc-popup-button--default\"\r\n          :class=\"{\r\n            'vsc-popup-button--no-icon': !icon\r\n          }\"\r\n          aria-haspopup=\"true\"\r\n          aria-controls=\"vsc-popup-box\"\r\n          aria-expanded=\"false\"\r\n          :aria-label=\"ariaLabelButton\"\r\n          @click=\"togglePopup\"\r\n        >\r\n          <span v-show=\"!show\">\r\n            <slot name=\"icon\">\r\n              <svg\r\n                xmlns=\"http://www.w3.org/2000/svg\"\r\n                width=\"28\"\r\n                height=\"28\"\r\n                fill=\"currentColor\"\r\n                viewBox=\"0 0 511.3 511.3\"\r\n              >\r\n                <defs />\r\n                <path d=\"M362.3 165.3H149a21 21 0 100 42h213.3a21 21 0 100-42zM309 250.7H149a21 21 0 100 42h160a21 21 0 100-42z\" />\r\n                <path d=\"M488.6 61.3a21 21 0 00-12.2-12C397 19.4 115.3 19 35 49.4a21 21 0 00-12.1 12C21.8 63.7 0 120.8 0 229s21.9 165.3 22.8 167.6a21 21 0 0012.1 12c1.8.7 44 16.3 151.8 21.2l55 49.5a21 21 0 0028 0l55-49.5c107.7-4.9 150-20.5 151.7-21.2a21 21 0 0012.2-12c.9-2.3 22.7-59.4 22.7-167.6S489.5 63.7 488.6 61.3zM452.4 372c-17.2 4.4-59.8 13.1-137 16.2a21 21 0 00-13.2 5.4l-46.5 41.8-46.5-41.8a21 21 0 00-13.3-5.4C118.7 385 76.2 376.4 59 372c-22.6-78-22.5-208.4 0-286 90.7-23.2 303-23.2 393.5 0 22.6 77.7 22.6 208 0 286z\" />\r\n              </svg>\r\n            </slot>\r\n          </span>\r\n          <svg\r\n            v-show=\"show\"\r\n            xmlns=\"http://www.w3.org/2000/svg\"\r\n            width=\"30\"\r\n            height=\"30\"\r\n            fill=\"none\"\r\n            stroke=\"currentColor\"\r\n            stroke-linecap=\"round\"\r\n            stroke-linejoin=\"round\"\r\n            stroke-width=\"2\"\r\n            viewBox=\"0 0 24 24\"\r\n          >\r\n            <defs />\r\n            <path d=\"M18 6L6 18M6 6l12 12\" />\r\n          </svg>\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </FocusLock>\r\n</template>\r\n\r\n<script>\r\nimport FocusLock from 'vue-focus-lock'\r\n\r\nexport default {\r\n  name: 'VuePopupChat',\r\n\r\n  components: {\r\n    FocusLock\r\n  },\r\n\r\n  props: {\r\n    icon: {\r\n      type: Boolean,\r\n      default: true\r\n    },\r\n    team: {\r\n      type: Array,\r\n      default: () => ([])\r\n    }\r\n  },\r\n\r\n  data: () => ({\r\n    show: false\r\n  }),\r\n\r\n  computed: {\r\n    ariaLabelButton () {\r\n      return `${this.show ? 'Close' : 'Open'} social support widget`\r\n    }\r\n  },\r\n\r\n  methods: {\r\n    togglePopup () {\r\n      this.show = !this.show\r\n    }\r\n  }\r\n}\r\n</script>\r\n\r\n<style src=\"./styles/variables.css\"></style>\r\n<style lang=\"stylus\">\r\n.vsc-popup *\r\n  box-sizing: border-box\r\n  padding: 0\r\n  margin: 0\r\n\r\n.vsc-popup\r\n  position: fixed\r\n  right: 20px\r\n  bottom: 20px\r\n  display: flex\r\n  flex-wrap: wrap\r\n  justify-content: flex-end\r\n  max-width: 380px\r\n  -webkit-font-smoothing: antialiased\r\n\r\n  &-box\r\n    transition: transform .3s ease-in-out, opacity .2s, visibility .2s\r\n    transform-origin: bottom right\r\n    transform: scale3d(0,0,0)\r\n    opacity: 0\r\n    visibility: hidden\r\n    border-radius: 10px\r\n    margin-bottom: 10px\r\n    box-shadow: 0 5px 25px -5px rgba(45,62,79,0.15)\r\n    background-color: #fbfbfb\r\n    border: var(--vsc-border-default)\r\n    overflow: hidden\r\n\r\n    &--show\r\n      transform: scale3d(1,1,1)\r\n      visibility: visible\r\n      opacity: 1\r\n\r\n  &-header\r\n    text-align: left\r\n    padding: 22px 30px\r\n    border-bottom: var(--vsc-border-default)\r\n\r\n  &-body\r\n    padding: 16px\r\n    background-color: white\r\n\r\n    &__list\r\n      list-style: none\r\n      display: flex\r\n      flex-wrap: wrap\r\n\r\n      &-item\r\n        width: 100%\r\n\r\n    &__link\r\n      display: flex\r\n      padding: 20px\r\n      text-decoration: none\r\n      border-radius: 10px\r\n      color: #333\r\n      letter-spacing: .2px\r\n\r\n      &:hover, &:focus\r\n        background-color: #fbfbfb\r\n\r\n      &-avatar\r\n        width: 62px\r\n        height: 62px\r\n        overflow: hidden\r\n\r\n        > img\r\n          width: 100%\r\n          height: 100%\r\n          object-fit: cover\r\n          border-radius: 50%\r\n\r\n      &-info\r\n        padding-top: 12px\r\n        padding-left: 12px\r\n\r\n        > span\r\n          display: block\r\n          text-align: left\r\n\r\n        &__label\r\n          font-size: 12px\r\n\r\n        &__name\r\n          font-weight: bold\r\n          margin-top: 2px\r\n\r\n  &-footer\r\n    padding: 16px\r\n    border-top: var(--vsc-border-default)\r\n\r\n  &-button\r\n    outline: none\r\n    appearance: none\r\n    -webkit-appearance: none\r\n    -moz-appearance: none\r\n    background-color: transparent\r\n    color: inherit\r\n    border: none\r\n    cursor: pointer\r\n    border-radius: 50%\r\n    width: 60px\r\n    height: 60px\r\n    display: inline-block\r\n    box-shadow: 0 3px 10px rgba(0,0,0,0.3)\r\n    font-family: inherit\r\n    transition: background-color .3s\r\n\r\n    &--default\r\n      background-color: var(--vsc-bg-button)\r\n      color: var(--vsc-text-color-button)\r\n\r\n    &--no-icon\r\n      border-radius: 30px\r\n      height: auto\r\n      width: auto\r\n      padding: 14px 20px\r\n\r\n    &:hover\r\n      background-color: var(--vsc-bg-hover-button)\r\n\r\n    &:focus\r\n      box-shadow: 0 0 0 3px var(--vsc-outline-color)\r\n\r\n.vsc-popup-header, .vsc-popup-footer\r\n  background-color: var(--vsc-bg-header)\r\n  color: var(--vsc-text-color-header)\r\n\r\n@media (prefers-reduced-motion) {\r\n  .vsc-popup * {\r\n    transition: none;\r\n  }\r\n}\r\n</style>\r\n",".vsc-popup * {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n}\n.vsc-popup {\n  position: fixed;\n  right: 20px;\n  bottom: 20px;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: flex-end;\n  max-width: 380px;\n  -webkit-font-smoothing: antialiased;\n}\n.vsc-popup-box {\n  transition: transform 0.3s ease-in-out, opacity 0.2s, visibility 0.2s;\n  transform-origin: bottom right;\n  transform: scale3d(0, 0, 0);\n  opacity: 0;\n  visibility: hidden;\n  border-radius: 10px;\n  margin-bottom: 10px;\n  box-shadow: 0 5px 25px -5px rgba(45,62,79,0.15);\n  background-color: #fbfbfb;\n  border: var(--vsc-border-default);\n  overflow: hidden;\n}\n.vsc-popup-box--show {\n  transform: scale3d(1, 1, 1);\n  visibility: visible;\n  opacity: 1;\n}\n.vsc-popup-header {\n  text-align: left;\n  padding: 22px 30px;\n  border-bottom: var(--vsc-border-default);\n}\n.vsc-popup-body {\n  padding: 16px;\n  background-color: #fff;\n}\n.vsc-popup-body__list {\n  list-style: none;\n  display: flex;\n  flex-wrap: wrap;\n}\n.vsc-popup-body__list-item {\n  width: 100%;\n}\n.vsc-popup-body__link {\n  display: flex;\n  padding: 20px;\n  text-decoration: none;\n  border-radius: 10px;\n  color: #333;\n  letter-spacing: 0.2px;\n}\n.vsc-popup-body__link:hover,\n.vsc-popup-body__link:focus {\n  background-color: #fbfbfb;\n}\n.vsc-popup-body__link-avatar {\n  width: 62px;\n  height: 62px;\n  overflow: hidden;\n}\n.vsc-popup-body__link-avatar > img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  border-radius: 50%;\n}\n.vsc-popup-body__link-info {\n  padding-top: 12px;\n  padding-left: 12px;\n}\n.vsc-popup-body__link-info > span {\n  display: block;\n  text-align: left;\n}\n.vsc-popup-body__link-info__label {\n  font-size: 12px;\n}\n.vsc-popup-body__link-info__name {\n  font-weight: bold;\n  margin-top: 2px;\n}\n.vsc-popup-footer {\n  padding: 16px;\n  border-top: var(--vsc-border-default);\n}\n.vsc-popup-button {\n  outline: none;\n  appearance: none;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  background-color: transparent;\n  color: inherit;\n  border: none;\n  cursor: pointer;\n  border-radius: 50%;\n  width: 60px;\n  height: 60px;\n  display: inline-block;\n  box-shadow: 0 3px 10px rgba(0,0,0,0.3);\n  font-family: inherit;\n  transition: background-color 0.3s;\n}\n.vsc-popup-button--default {\n  background-color: var(--vsc-bg-button);\n  color: var(--vsc-text-color-button);\n}\n.vsc-popup-button--no-icon {\n  border-radius: 30px;\n  height: auto;\n  width: auto;\n  padding: 14px 20px;\n}\n.vsc-popup-button:hover {\n  background-color: var(--vsc-bg-hover-button);\n}\n.vsc-popup-button:focus {\n  box-shadow: 0 0 0 3px var(--vsc-outline-color);\n}\n.vsc-popup-header,\n.vsc-popup-footer {\n  background-color: var(--vsc-bg-header);\n  color: var(--vsc-text-color-header);\n}\n@media (prefers-reduced-motion) {\n  .vsc-popup * {\n    transition: none;\n  }\n}\n"]}, media: undefined });

	  };
	  /* scoped */
	  var __vue_scope_id__ = undefined;
	  /* module identifier */
	  var __vue_module_identifier__ = undefined;
	  /* functional template */
	  var __vue_is_functional_template__ = false;
	  /* style inject SSR */
	  
	  /* style inject shadow dom */
	  

	  
	  var __vue_component__ = /*#__PURE__*/normalizeComponent(
	    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
	    __vue_inject_styles__,
	    __vue_script__,
	    __vue_scope_id__,
	    __vue_is_functional_template__,
	    __vue_module_identifier__,
	    false,
	    createInjector,
	    undefined,
	    undefined
	  );

	function install (Vue) {
	  if (install.installed) { return }
	  install.installed = true;
	  Vue.component('PopupChat', __vue_component__);
	}

	// auto install
	if (typeof window !== 'undefined' && typeof window.Vue !== 'undefined') {
	  window.Vue.use(install);
	}

	exports.default = install;

	Object.defineProperty(exports, '__esModule', { value: true });

})));
