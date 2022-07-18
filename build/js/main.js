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
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_sum_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/sum.js */ \"./src/js/modules/sum.js\");\n\nconsole.log((0,_modules_sum_js__WEBPACK_IMPORTED_MODULE_0__.sum)(2, 10));\n\n/* Проверка поддержки webp, добавление класса webp или no-webp для HTML */\n\nfunction isWebp() {\n  //Проверка поддержки webp\n  function testWebP(callback) {\n    // console.log(\"supported\");\n    let webP = new Image();\n    webP.onload = webP.onerror = function () {\n      callback(webP.height == 2);\n    };\n    webP.src =\n      \"data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA\";\n  }\n\n  //Добавление класса _webp или _no-webp для HTML\n  testWebP(function (support) {\n    let className = support === true ? \"webp\" : \"no-webp\";\n    document.documentElement.classList.add(className);\n  });\n}\nisWebp();\n\n//Header active\n(function () {\n  const header = document.querySelector(\".header\");\n  window.onscroll = () => {\n    if (window.pageYOffset > 120) {\n      header.classList.add(\"header-js-active\");\n    } else {\n      header.classList.remove(\"header-js-active\");\n    }\n  };\n})();\n//Burger handler\n// (function () {\n//   const burgerItem = document.querySelector(\".burger\");\n//   const menu = document.querySelector(\".header__nav\");\n//   const menuCloseItem = document.querySelector(\".header__nav-close\");\n//   const menuLinks = document.querySelectorAll(\".header__nav-link\");\n//   burgerItem.addEventListener(\"click\", () => {\n//     menu.classList.add(\"header__nav_active\");\n//   });\n//   menuCloseItem.addEventListener(\"click\", () => {\n//     menu.classList.remove(\"header__nav_active\");\n//   });\n\n//   if (window.innerWidth < 768) {\n//     for (let i = 0; i < menuLinks.length; i += 1) {\n//       menuLinks[i].addEventListener(\"click\", () => {\n//         menu.classList.remove(\"header__nav_active\");\n//       });\n//     }\n//   }\n// })();\n// Scroll to anchors\n(function () {\n  const smoothScroll = function (targetEl, duration) {\n    const headerElHeight = document.querySelector(\".header\").clientHeight;\n    let target = document.querySelector(targetEl);\n    let targetPosition = target.getBoundingClientRect().top - headerElHeight;\n    let startPosition = window.pageYOffset;\n    let startTime = null;\n\n    const ease = function (t, b, c, d) {\n      t /= d / 2;\n      if (t < 1) return (c / 2) * t * t + b;\n      t--;\n      return (-c / 2) * (t * (t - 2) - 1) + b;\n    };\n\n    const animation = function (currentTime) {\n      if (startTime === null) startTime = currentTime;\n      const timeElapsed = currentTime - startTime;\n      const run = ease(timeElapsed, startPosition, targetPosition, duration);\n      window.scrollTo(0, run);\n      if (timeElapsed < duration) requestAnimationFrame(animation);\n    };\n    requestAnimationFrame(animation);\n  };\n\n  const scrollTo = function () {\n    const links = document.querySelectorAll(\".js-scroll\");\n    links.forEach((each) => {\n      each.addEventListener(\"click\", function () {\n        const currentTarget = this.getAttribute(\"href\");\n        smoothScroll(currentTarget, 1000);\n      });\n    });\n  };\n  scrollTo();\n})();\n//top-slider\ndocument.addEventListener('DOMContentLoaded', () => {\n  // инициализация слайдера\n  new ItcSimpleSlider('.itcss', {\n    loop: true,\n    autoplay: false,\n    interval: 5000,\n    swipe: true,\n  });\n});\n\n\n//# sourceURL=webpack://artnagaeva.com/./src/js/main.js?");

/***/ }),

/***/ "./src/js/modules/sum.js":
/*!*******************************!*\
  !*** ./src/js/modules/sum.js ***!
  \*******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"sum\": () => (/* binding */ sum)\n/* harmony export */ });\nconst sum = (a, b) => a + b;\r\n\r\n\n\n//# sourceURL=webpack://artnagaeva.com/./src/js/modules/sum.js?");

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