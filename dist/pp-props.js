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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _props_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../props.json */ \"./props.json\");\n\n\n(() => {\n  if (!_props_json__WEBPACK_IMPORTED_MODULE_0__.length > 0) {\n    throw \"Data load failed\";\n  } //step 1 - see if the div with id pp-props exists\n\n\n  var myEle = document.getElementById(\"pp-props\");\n  const style = document.createElement(\"style\");\n  style.innerHTML = `\n    .pp-list {\n        list-style-type: square;\n      }\n      #pp-recommended {\n        margin-top: 10px;\n        overflow: auto;\n      }\n      #pp-logo {\n        overflow: auto;\n        margin: 0px !important;\n      }\n      .main-log-pp {\n        float: left;\n      }\n      .pp-wallet {\n        float: right;\n      }\n  \n      #content {\n        margin-top: 10px;\n      }\n      .pp-account-connected {\n        padding: 5px 0px 0px 15px;\n        float: left;\n      }\n      #container-content {\n        margin-left: 7%;\n        float: left;\n      }\n      #connected-statistics {\n        margin-bottom: 5%;\n      }\n      .connected-content {\n        overflow: auto;\n        margin-top: 5px;\n      }\n      .clear {\n        clear: both;\n      }\n      .get-started-button {\n        color: white;\n        background-color: #222D65;\n        text-align: center;\n        text-decoration: none;\n        border-radius: 4px;\n        padding: 10px 35px;\n        margin-top: 10px;\n        display: inline-block;\n        margin-left: 20px;\n      }\n      @media only screen and (max-width: 600px) {\n        .pp-wallet {\n            display: none\n        }\n      }\n      @media only screen and (min-width: 600px and max-width: 992px) {\n        .pp-container {\n            max-width: 50% !important;\n          }\n      }\n      @media only screen and (min-width: 992px) {\n        .pp-container {\n            max-width: 70% !important;\n          }\n      } \n    \n    `;\n  document.head.appendChild(style);\n\n  if (myEle) {\n    // clear the div content and load our value props\n    myEle.innerHTML = \"\"; // find the type of the\n\n    let type = myEle.getAttribute(\"data-pp-type\");\n    let isConnected = myEle.getAttribute(\"data-pp-connected\") === \"false\" ? false : true;\n    let onboardURL = myEle.getAttribute(\"data-pp-onboardlink\");\n    let emailVerified = myEle.getAttribute(\"data-pp-email-verified\") === \"false\" ? false : true;\n    let template = constructDom(type, isConnected, onboardURL, emailVerified);\n    setTimeout(() => {\n      myEle.innerHTML = template;\n      loadScript();\n\n      if (onboardURL.length > 0 && !isConnected) {\n        var link = document.getElementById(\"onboardURL\");\n        link.setAttribute(\"href\", onboardURL + \"&displayMode=minibrowser\");\n      } else {\n        var ele = document.getElementById(\"onboardURL\");\n        ele.remove();\n      }\n\n      if (isConnected) {\n        myEle.removeAttribute('data-pp-onboardlink');\n      }\n    }, 1000); // let inject the script for mini browser\"\n  } else {\n    // throw error in dom\n    throw \"Selector pp-props not found\";\n  }\n\n  function constructDom(type, isConnected, onboardURL, emailVerified) {\n    let propValue = _props_json__WEBPACK_IMPORTED_MODULE_0__.filter(i => i.selector === type)[0];\n    let benefitsArray = propValue.benefits;\n    let statistics = propValue.statistics;\n    let li = \"\";\n    benefitsArray.forEach((msg, i) => {\n      li += `<li>${msg}</li>`;\n    });\n    let emailVerifiedTemplate = emailVerified ? `<div class=\"connected-content\">\n                    <div class=\"main-log-pp\">\n                    <img src=\"./public/img/pp-connected.png\" />\n                    </div>\n                    <div class=\"pp-account-connected\">\n                    Email Verified\n                    </div>\n                    <div class=\"clear\"></div>\n                </div>` : ``;\n    let template = `\n                    <div class=\"pp-container\">\n                    <div id=\"pp-recommended\">\n                    <img src=\"./public/img/pp-recom.png\" height=\"15\" />\n                    </div>\n                    ${isConnected ? ` <div id=\"connected\">\n                    <div id='pp-logo'>\n                        <div class=\"main-log-pp\">\n                        <img src=\"./public/img/pp-main-logo.png\" />\n                        </div>\n                        <div id=\"container-content\">\n                        <div id='connected-statistics'>${statistics}</div>\n                        <div class=\"connected-content\">\n                            <div class=\"main-log-pp\">\n                            <img src=\"./public/img/pp-connected.png\" />\n                            </div>\n                            <div class=\"pp-account-connected\">\n                            Your PayPal account is connected\n                            </div>\n                            <div class=\"clear\"></div>\n                        </div>\n                            ${emailVerifiedTemplate}\n                        </div>\n                        <div class=\"pp-wallet\">\n                        <img src=\"./public/img/logo-pp.png\" style=\"height:70px\" />\n                        </div>\n                        <div class=\"clear\"></div>\n                    </div>\n                    </div>` : `\n                    <div id=\"not-connected\">\n                    <div id='pp-logo'>\n                        <div class=\"main-log-pp\">\n                        <img src=\"./public/img/pp-main-logo.png\" />\n                        </div>\n                        <div class=\"pp-wallet\">\n                        <img src=\"./public/img/logo-pp.png\" style=\"height:70px\" />\n                        </div>\n                        <div class=\"clear\"></div>\n                    </div>\n                    <div id=\"content\">\n                        <div id='statistics'>${statistics}</div>\n                        <ul class='pp-list'>\n                        ${li}\n                        </ul>\n                \n                        <div dir=\"ltr\" style=\"text-align: left;\" trbidi=\"on\">\n                        <script>\n                            (function (d, s, id) {\n                            var js, ref = d.getElementsByTagName(s)[0];\n                            if (!d.getElementById(id)) {\n                                js = d.createElement(s);\n                                js.id = id;\n                                js.async = true;\n                                js.src = \"https://www.paypal.com/webapps/merchantboarding/js/lib/lightbox/partner.js\";\n                                ref.parentNode.insertBefore(js, ref);\n                            }\n                            }(document, \"script\", \"paypal-js\"));\n                \n                        </script>\n                        <a data-paypal-button=\"true\" href=\"\" class=\"get-started-button\"\n                            target=\"PPFrame\" id=\"onboardURL\">Get started</a>\n                        </div>\n                    </div>\n                    </div> `}\n                </div > `;\n    return template;\n  } //util functions\n\n\n  function loadScript() {\n    (function (d, s, id) {\n      var js,\n          ref = d.getElementsByTagName(s)[0];\n\n      if (!d.getElementById(id)) {\n        js = d.createElement(s);\n        js.id = id;\n        js.async = true;\n        js.src = \"https://www.paypal.com/webapps/merchantboarding/js/lib/lightbox/partner.js\";\n        ref.parentNode.insertBefore(js, ref);\n      }\n    })(document, \"script\", \"paypal-js\");\n  }\n})();\n\n//# sourceURL=webpack://$/./src/index.js?");

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