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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _props_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../props.json */ \"./props.json\");\n\n\n(() => {\n  if (!_props_json__WEBPACK_IMPORTED_MODULE_0__.length > 0) {\n    throw \"Data load failed\";\n  } //step 1 - see if the div with id pp-props exists\n\n\n  var myEle = document.getElementById(\"pp-props\");\n  const style = document.createElement('style');\n  style.innerHTML = `\n      .pp-list {\n        list-style-type: square;\n      }\n    `;\n  document.head.appendChild(style);\n\n  if (myEle) {\n    // clear the div content and load our value props\n    myEle.innerHTML = \"\"; // find the type of the\n\n    let type = myEle.getAttribute(\"data-pp-type\");\n    let template = constructDom(type);\n    setTimeout(() => {\n      myEle.innerHTML = template;\n    }, 1000);\n  } else {\n    // throw error in dom \n    throw \"Selector pp-props not found\";\n  }\n\n  function constructDom(type) {\n    let propValue = _props_json__WEBPACK_IMPORTED_MODULE_0__.filter(i => i.selector === type)[0];\n    let benefitsArray = propValue.benefits;\n    let statistics = propValue.statistics;\n    let li = \"\";\n    benefitsArray.forEach((msg, i) => {\n      li += `<li>` + msg + `</li>`;\n    });\n    let template = `<div id='pp-logo'><img src=\"https://www.paypalobjects.com/webstatic/mktg/Logo/pp-logo-150px.png\"/></div>\n                         <div><p><b>An instant global business.</b></p><p>One integration for all your online payment needs.</p></div>   \n                        <div><p>Benefits</p><ul class='pp-list'>` + li + `</ul><div id='statistics'>` + statistics + `</div></div>`;\n    return template;\n  }\n})();\n\n//# sourceURL=webpack://$/./src/index.js?");

/***/ }),

/***/ "./props.json":
/*!********************!*\
  !*** ./props.json ***!
  \********************/
/***/ ((module) => {

eval("module.exports = JSON.parse('[{\"selector\":\"psp\",\"benefits\":[\"Enable a seamless buying experience for your customers that drives conversion and loyalty.\",\"Accept PayPal payments with simplified onboarding, adaptable integration and easy account setup.\",\"Access to 400M+ PayPal customers around the globe*, with local currency support for better payment management\",\"Peace of mind for you and your customers with buyer and seller protection on eligible sales.\"],\"statistics\":\"*PayPal Second Quarter 2021 Results\"},{\"selector\":\"cart\",\"benefits\":[\"Simple, effective invoice payment and management.\",\"Help you address local business needs – and expand internationally to 400M+ PayPal customers in more than 200 markets. *\",\"Peace of mind for you and your customers with advanced fraud protection, dispute resolution, and tracking API.\",\"Growth insights from our dual-sided worldwide network of sellers and shoppers that gets smarter with every transaction.\"],\"statistics\":\"*PayPal Second Quarter 2021 Results\"}]');\n\n//# sourceURL=webpack://$/./props.json?");

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