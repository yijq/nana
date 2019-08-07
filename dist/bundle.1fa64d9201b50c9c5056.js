/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_demo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/demo */ "./src/components/demo.js");


const MySvg = new _components_demo__WEBPACK_IMPORTED_MODULE_0__["SvgDom"]();

MySvg.create("svg");

console.log("MySvg", MySvg);


/***/ }),

/***/ "./src/components/demo.js":
/*!********************************!*\
  !*** ./src/components/demo.js ***!
  \********************************/
/*! exports provided: SvgDom */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SvgDom", function() { return SvgDom; });

const SVG_NAMESPACE = "http://www.w3.org/2000/svg";
const doc = document;

const _create = (type) => doc.createElementNS(SVG_NAMESPACE, type);

const _remove = dom => dom.remove();

const _setAttr = (dom, key, value) =>  { 
  dom.setAttributeNS(null, key, value);
}

const _attr = (dom, attrObj) => {
  for(let key in attrObj) {
    _setAttr(dom, key, attrObj[key]);
  }
}

const _removeAttr = (dom, key) => {
  dom.removeAttributeNS(null, key);
}

const _appendChild = (dom, child) => {
  dom.appendChild(child.dom);
}

/**
 * SvgDom
 * @param {SVGAElement?} dom 
 */
const SvgDom = function(dom) {
  if(dom) {
    this.dom = dom;
  }
};

SvgDom.prototype.create = function(type) {
  this.dom = _create(type);

  return this;
};

SvgDom.prototype.remove = function() {
  _remove(this.dom);
};

SvgDom.prototype.attr = function(p1, p2) {
  if(typeof p1 === "object") {
    _attr(this.dom, p1);

    return this;
  }

  _attr(this.dom, {[p1] : p2});

  return this;
};

SvgDom.prototype.rmAttr = function(key) {
  _removeAttr(this.dom, key);
};

SvgDom.prototype.appendChild = function(SvgDom) {
  _appendChild(this.dom, SvgDom);
};

SvgDom.prototype.wrapper = function(dom) {
  return new SvgDom(dom);
};



/***/ })

/******/ });
//# sourceMappingURL=bundle.1fa64d9201b50c9c5056.js.map