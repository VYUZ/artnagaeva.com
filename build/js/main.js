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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_sum_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/sum.js */ \"./src/js/modules/sum.js\");\n\r\nconsole.log((0,_modules_sum_js__WEBPACK_IMPORTED_MODULE_0__.sum)(2, 10));\r\n\r\n/* Проверка поддержки webp, добавление класса webp или no-webp для HTML */\r\n\r\nfunction isWebp() {\r\n  //Проверка поддержки webp\r\n  function testWebP(callback) {\r\n    // console.log(\"supported\");\r\n    let webP = new Image();\r\n    webP.onload = webP.onerror = function () {\r\n      callback(webP.height == 2);\r\n    };\r\n    webP.src =\r\n      \"data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA\";\r\n  }\r\n\r\n  //Добавление класса _webp или _no-webp для HTML\r\n  testWebP(function (support) {\r\n    let className = support === true ? \"webp\" : \"no-webp\";\r\n    document.documentElement.classList.add(className);\r\n  });\r\n}\r\nisWebp();\r\n\r\n//Header active\r\n(function () {\r\n  const header = document.querySelector(\".header\");\r\n  window.onscroll = () => {\r\n    if (window.pageYOffset > 120) {\r\n      header.classList.add(\"header-js-active\");\r\n    } else {\r\n      header.classList.remove(\"header-js-active\");\r\n    }\r\n  };\r\n})();\r\n//Burger handler\r\n// (function () {\r\n//   const burgerItem = document.querySelector(\".burger\");\r\n//   const menu = document.querySelector(\".header__nav\");\r\n//   const menuCloseItem = document.querySelector(\".header__nav-close\");\r\n//   const menuLinks = document.querySelectorAll(\".header__nav-link\");\r\n//   burgerItem.addEventListener(\"click\", () => {\r\n//     menu.classList.add(\"header__nav_active\");\r\n//   });\r\n//   menuCloseItem.addEventListener(\"click\", () => {\r\n//     menu.classList.remove(\"header__nav_active\");\r\n//   });\r\n\r\n//   if (window.innerWidth < 768) {\r\n//     for (let i = 0; i < menuLinks.length; i += 1) {\r\n//       menuLinks[i].addEventListener(\"click\", () => {\r\n//         menu.classList.remove(\"header__nav_active\");\r\n//       });\r\n//     }\r\n//   }\r\n// })();\r\n// Scroll to anchors\r\n(function () {\r\n  const smoothScroll = function (targetEl, duration) {\r\n    const headerElHeight = document.querySelector(\".header\").clientHeight;\r\n    let target = document.querySelector(targetEl);\r\n    let targetPosition = target.getBoundingClientRect().top - headerElHeight;\r\n    let startPosition = window.pageYOffset;\r\n    let startTime = null;\r\n\r\n    const ease = function (t, b, c, d) {\r\n      t /= d / 2;\r\n      if (t < 1) return (c / 2) * t * t + b;\r\n      t--;\r\n      return (-c / 2) * (t * (t - 2) - 1) + b;\r\n    };\r\n\r\n    const animation = function (currentTime) {\r\n      if (startTime === null) startTime = currentTime;\r\n      const timeElapsed = currentTime - startTime;\r\n      const run = ease(timeElapsed, startPosition, targetPosition, duration);\r\n      window.scrollTo(0, run);\r\n      if (timeElapsed < duration) requestAnimationFrame(animation);\r\n    };\r\n    requestAnimationFrame(animation);\r\n  };\r\n\r\n  const scrollTo = function () {\r\n    const links = document.querySelectorAll(\".js-scroll\");\r\n    links.forEach((each) => {\r\n      each.addEventListener(\"click\", function () {\r\n        const currentTarget = this.getAttribute(\"href\");\r\n        smoothScroll(currentTarget, 1000);\r\n      });\r\n    });\r\n  };\r\n  scrollTo();\r\n})();\r\n//top-slider\r\ndocument.addEventListener(\"DOMContentLoaded\", () => {\r\n  // инициализация слайдера\r\n  new ItcSimpleSlider(\".itcss\", {\r\n    loop: true,\r\n    autoplay: true,\r\n    interval: 4000,\r\n    swipe: true,\r\n    indicators: true,\r\n  });\r\n});\r\n\n\n//# sourceURL=webpack://artnagaeva.com/./src/js/main.js?");

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