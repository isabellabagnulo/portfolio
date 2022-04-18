/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu */ \"./src/js/menu.js\");\n\r\n// import { gsap } from \"gsap\"\r\n// import { Draggable } from \"gsap/Draggable\"\r\n\r\n// gsap.registerPlugin(Draggable)\r\n\r\ndocument.addEventListener(\"DOMContentLoaded\", (0,_menu__WEBPACK_IMPORTED_MODULE_0__.burgermenu)())\r\n\r\nconst cat = document.querySelector(\"#btn-cat\")\r\n\r\n// Draggable.create(cat, {\r\n//   type: \"y\",\r\n//   edgeResistance: 0.15,\r\n//   bounds: \".intro--wrapper\",\r\n//   trigger: cat,\r\n//   onDragEnd: (e) => {\r\n//     let yPos = e.pageY\r\n//     let xPos = e.pageX\r\n//     console.log(\"xpos:\" + xPos + \", ypos:\" + yPos)\r\n//     // if (yPos < 60) {\r\n//     //   window.location.href = \"works.html\"\r\n//     // } else if (yPos > 600) {\r\n//     //   window.location.href = \"about.html\"\r\n//     // }\r\n//   },\r\n// })\r\n\n\n//# sourceURL=webpack://portfolio/./src/js/main.js?");

/***/ }),

/***/ "./src/js/menu.js":
/*!************************!*\
  !*** ./src/js/menu.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"burgermenu\": () => (/* binding */ burgermenu)\n/* harmony export */ });\nfunction burgermenu() {\r\n  const burger = document.querySelector(\".burger\")\r\n  const nav = document.querySelector(\"nav\")\r\n  const menu = document.querySelector(\".nav\")\r\n  const navItem = document.querySelector(\".nav__list-item\")\r\n\r\n  burger.addEventListener(\"click\", (e) => {\r\n    e.preventDefault()\r\n    nav.classList.toggle(\"open\")\r\n  })\r\n\r\n  burger.addEventListener(\"click\", toggleMenu)\r\n  function toggleMenu() {\r\n    if (menu.classList.contains(\"expanded\")) {\r\n      menu.classList.remove(\"expanded\")\r\n    } else {\r\n      menu.classList.add(\"expanded\")\r\n    }\r\n  }\r\n  burger.addEventListener(\"click\", () => {\r\n    document.getElementById(\"link\").play()\r\n  })\r\n  navItem.addEventListener(\"mouseover\", () => {\r\n    document.getElementById(\"hover-audio\").play()\r\n  })\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://portfolio/./src/js/menu.js?");

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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/main.js");
/******/ 	
/******/ })()
;