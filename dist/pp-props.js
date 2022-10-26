/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["$"] = factory();
	else
		root["$"] = factory();
})(self, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _props_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../props.json */ \"./props.json\");\n\n\n(() => {\n  if (!_props_json__WEBPACK_IMPORTED_MODULE_0__.length > 0) {\n    throw \"Data load failed\";\n  } //step 1 - see if the div with id pp-props exists\n\n\n  var myEle = document.getElementById(\"pp-props\");\n  const style = document.createElement('style');\n  style.innerHTML = `\n      .pp-list {\n        list-style-type: square;\n      }\n      #pp-logo {\n        margin-top: 10px;\n        overflow: auto;\n      }\n      .main-log-pp {\n        float: left;\n      }\n      .pp-wallet {\n        float: right;\n      }\n      #content {\n        margin-top: 20px;\n      }\n      .pp-account-connected {\n        padding: 5px 0px 0px 15px;\n        float: left;\n      }\n      @media only screen and (min-width: 992px) {\n        .pp-container {\n          max-width: 50% !important;\n        }\n      }\n    `;\n  document.head.appendChild(style);\n\n  if (myEle) {\n    // clear the div content and load our value props\n    myEle.innerHTML = \"\"; // find the type of the\n\n    let type = myEle.getAttribute(\"data-pp-type\");\n    let isConnected = myEle.getAttribute(\"data-pp-isConnected\");\n    let template = constructDom(type, isConnected);\n    setTimeout(() => {\n      myEle.innerHTML = template;\n    }, 1000);\n  } else {\n    // throw error in dom \n    throw \"Selector pp-props not found\";\n  }\n\n  function constructDom(type, isConnected) {\n    let propValue = _props_json__WEBPACK_IMPORTED_MODULE_0__.filter(i => i.selector === type)[0];\n    let benefitsArray = propValue.benefits;\n    let statistics = propValue.statistics;\n    console.log(\"isConnected\", isConnected, typeof isConnected);\n    let li = \"\";\n    benefitsArray.forEach((msg, i) => {\n      li += `<li>${msg}</li>`;\n    });\n    console.log(li);\n    let template = `\n        <div class=\"pp-container\">\n            <div id='pp-logo'>\n            <span class=\"main-log-pp\">\n                <img src=\"./public/img/pp-main-logo.png\" />\n            </span>\n            <span class=\"pp-wallet\">\n                <img src=\"./public/img/logo-pp.png\" style=\"height:70px\" />\n            </span>\n            <span style=\"clear:both\"></span>\n            </div>\n            <div id=\"content\">\n            ${isConnected == \"false\" ? `<div id=\"not-connected\">\n                    <div id='statistics' style=\"font-weight: bold;\">${statistics}</div>\n                    <ul class='pp-list'>\n                    ${li}\n                    </ul>\n                </div>` : `<div id='statistics' style=\"font-weight: bold;\">${statistics}</div>\n                <div id=\"connected\">\n                    <span class=\"main-log-pp\">\n                    <img src=\"./public/img/pp-connected.png\" />\n                    </span>\n                    <span class=\"pp-account-connected\">\n                    Your PayPal account is connected\n                    </span>\n                    <span style=\"clear:both\"></span>\n                </div>`} \n            </div>\n        </div>`;\n    return template;\n  }\n})();\n\n//# sourceURL=webpack://$/./src/index.js?");

/***/ }),

/***/ "./props.json":
/*!********************!*\
  !*** ./props.json ***!
  \********************/
/***/ ((module) => {

eval("module.exports = JSON.parse('[{\"selector\":\"branded\",\"benefits\":[\"Help drive conversion by offering customers a seamless checkout experience with no setup or monthly fees\",\"A single integrated payment system ensures you stay updated with the latest payment methods \",\"Accept major credit/debit cards and alternative local payment methods through the PayPal wallet\"],\"statistics\":\"PayPal Checkout\",\"learnMore\":\"https://www.paypal.com/sg/webapps/mpp/contact-sales\"},{\"selector\":\"full-stack\",\"benefits\":[\"Help drive conversion by offering customers a seamless checkout experience with no setup or monthly fees\",\"A single integrated payment system ensures you stay updated with the latest payment methods\",\"Securely accept all major credit/debit cards and alternative local payment methods with the strength of the PayPal network\"],\"statistics\":\"PayPal: The all-in-one checkout solution\",\"learnMore\":\"https://www.paypal.com/sg/webapps/mpp/contact-sales\"}]');\n\n//# sourceURL=webpack://$/./props.json?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});