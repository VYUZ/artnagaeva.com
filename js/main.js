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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_sum_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/sum.js */ \"./src/js/modules/sum.js\");\n\r\nconsole.log((0,_modules_sum_js__WEBPACK_IMPORTED_MODULE_0__.sum)(2, 10));\r\n\r\n/* Проверка поддержки webp, добавление класса webp или no-webp для HTML */\r\n\r\nfunction isWebp() {\r\n  //Проверка поддержки webp\r\n  function testWebP(callback) {\r\n    // console.log(\"supported\");\r\n    let webP = new Image();\r\n    webP.onload = webP.onerror = function () {\r\n      callback(webP.height == 2);\r\n    };\r\n    webP.src =\r\n      \"data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA\";\r\n  }\r\n\r\n  //Добавление класса _webp или _no-webp для HTML\r\n  testWebP(function (support) {\r\n    let className = support === true ? \"webp\" : \"no-webp\";\r\n    document.documentElement.classList.add(className);\r\n  });\r\n}\r\nisWebp();\r\n\r\n//Header active\r\n(function () {\r\n  const header = document.querySelector(\".header\");\r\n  window.onscroll = () => {\r\n    if (window.pageYOffset > 120) {\r\n      header.classList.add(\"header-js-active\");\r\n    } else {\r\n      header.classList.remove(\"header-js-active\");\r\n    }\r\n  };\r\n})();\r\n//Burger handler\r\n// (function () {\r\n//   const burgerItem = document.querySelector(\".burger\");\r\n//   const menu = document.querySelector(\".header__nav\");\r\n//   const menuCloseItem = document.querySelector(\".header__nav-close\");\r\n//   const menuLinks = document.querySelectorAll(\".header__nav-link\");\r\n//   burgerItem.addEventListener(\"click\", () => {\r\n//     menu.classList.add(\"header__nav_active\");\r\n//   });\r\n//   menuCloseItem.addEventListener(\"click\", () => {\r\n//     menu.classList.remove(\"header__nav_active\");\r\n//   });\r\n\r\n//   if (window.innerWidth < 768) {\r\n//     for (let i = 0; i < menuLinks.length; i += 1) {\r\n//       menuLinks[i].addEventListener(\"click\", () => {\r\n//         menu.classList.remove(\"header__nav_active\");\r\n//       });\r\n//     }\r\n//   }\r\n// })();\r\n// Scroll to anchors\r\n// (function () {\r\n//   const smoothScroll = function (targetEl, duration) {\r\n//     const headerElHeight = document.querySelector(\".header\").clientHeight;\r\n//     let target = document.querySelector(targetEl);\r\n//     let targetPosition = target.getBoundingClientRect().top - headerElHeight;\r\n//     let startPosition = window.pageYOffset;\r\n//     let startTime = null;\r\n\r\n//     const ease = function (t, b, c, d) {\r\n//       t /= d / 2;\r\n//       if (t < 1) return (c / 2) * t * t + b;\r\n//       t--;\r\n//       return (-c / 2) * (t * (t - 2) - 1) + b;\r\n//     };\r\n\r\n//     const animation = function (currentTime) {\r\n//       if (startTime === null) startTime = currentTime;\r\n//       const timeElapsed = currentTime - startTime;\r\n//       const run = ease(timeElapsed, startPosition, targetPosition, duration);\r\n//       window.scrollTo(0, run);\r\n//       if (timeElapsed < duration) requestAnimationFrame(animation);\r\n//     };\r\n//     requestAnimationFrame(animation);\r\n//   };\r\n\r\n//   const scrollTo = function () {\r\n//     const links = document.querySelectorAll(\".js-scroll\");\r\n//     links.forEach((each) => {\r\n//       each.addEventListener(\"click\", function () {\r\n//         const currentTarget = this.getAttribute(\"href\");\r\n//         smoothScroll(currentTarget, 100);\r\n//       });\r\n//     });\r\n//   };\r\n//   scrollTo();\r\n// })();\r\n\r\n//top-slider\r\ndocument.addEventListener(\"DOMContentLoaded\", () => {\r\n  // инициализация слайдера\r\n  new ItcSimpleSlider(\".itcss\", {\r\n    loop: true,\r\n    autoplay: true,\r\n    interval: 4000,\r\n    swipe: true,\r\n    indicators: true,\r\n  });\r\n});\r\n\r\n//gsap slider initialization\r\nconsole.clear();\r\n\r\nconst { gsap, imagesLoaded } = window;\r\n\r\nconst buttons = {\r\n  prev: document.querySelector(\".btn--left\"),\r\n  next: document.querySelector(\".btn--right\"),\r\n};\r\nconst cardsContainerEl = document.querySelector(\".cards__wrapper\");\r\nconst appBgContainerEl = document.querySelector(\".app__bg\");\r\n\r\nconst cardInfosContainerEl = document.querySelector(\".info__wrapper\");\r\n\r\nbuttons.next.addEventListener(\"click\", () => swapCards(\"right\"));\r\n\r\nbuttons.prev.addEventListener(\"click\", () => swapCards(\"left\"));\r\n\r\nfunction swapCards(direction) {\r\n  const currentCardEl = cardsContainerEl.querySelector(\".current--card\");\r\n  const previousCardEl = cardsContainerEl.querySelector(\".previous--card\");\r\n  const nextCardEl = cardsContainerEl.querySelector(\".next--card\");\r\n\r\n  const currentBgImageEl = appBgContainerEl.querySelector(\".current--image\");\r\n  const previousBgImageEl = appBgContainerEl.querySelector(\".previous--image\");\r\n  const nextBgImageEl = appBgContainerEl.querySelector(\".next--image\");\r\n\r\n  changeInfo(direction);\r\n  swapCardsClass();\r\n\r\n  removeCardEvents(currentCardEl);\r\n\r\n  function swapCardsClass() {\r\n    currentCardEl.classList.remove(\"current--card\");\r\n    previousCardEl.classList.remove(\"previous--card\");\r\n    nextCardEl.classList.remove(\"next--card\");\r\n\r\n    currentBgImageEl.classList.remove(\"current--image\");\r\n    previousBgImageEl.classList.remove(\"previous--image\");\r\n    nextBgImageEl.classList.remove(\"next--image\");\r\n\r\n    currentCardEl.style.zIndex = \"50\";\r\n    currentBgImageEl.style.zIndex = \"-2\";\r\n\r\n    if (direction === \"right\") {\r\n      previousCardEl.style.zIndex = \"20\";\r\n      nextCardEl.style.zIndex = \"30\";\r\n\r\n      nextBgImageEl.style.zIndex = \"-1\";\r\n\r\n      currentCardEl.classList.add(\"previous--card\");\r\n      previousCardEl.classList.add(\"next--card\");\r\n      nextCardEl.classList.add(\"current--card\");\r\n\r\n      currentBgImageEl.classList.add(\"previous--image\");\r\n      previousBgImageEl.classList.add(\"next--image\");\r\n      nextBgImageEl.classList.add(\"current--image\");\r\n    } else if (direction === \"left\") {\r\n      previousCardEl.style.zIndex = \"30\";\r\n      nextCardEl.style.zIndex = \"20\";\r\n\r\n      previousBgImageEl.style.zIndex = \"-1\";\r\n\r\n      currentCardEl.classList.add(\"next--card\");\r\n      previousCardEl.classList.add(\"current--card\");\r\n      nextCardEl.classList.add(\"previous--card\");\r\n\r\n      currentBgImageEl.classList.add(\"next--image\");\r\n      previousBgImageEl.classList.add(\"current--image\");\r\n      nextBgImageEl.classList.add(\"previous--image\");\r\n    }\r\n  }\r\n}\r\n\r\nfunction changeInfo(direction) {\r\n  let currentInfoEl = cardInfosContainerEl.querySelector(\".current--info\");\r\n  let previousInfoEl = cardInfosContainerEl.querySelector(\".previous--info\");\r\n  let nextInfoEl = cardInfosContainerEl.querySelector(\".next--info\");\r\n\r\n  gsap\r\n    .timeline()\r\n    .to([buttons.prev, buttons.next], {\r\n      duration: 0.2,\r\n      opacity: 0.5,\r\n      pointerEvents: \"none\",\r\n    })\r\n    .to(\r\n      currentInfoEl.querySelectorAll(\".text\"),\r\n      {\r\n        duration: 0.4,\r\n        stagger: 0.1,\r\n        translateY: \"-120px\",\r\n        opacity: 0,\r\n      },\r\n      \"-=\"\r\n    )\r\n    .call(() => {\r\n      swapInfosClass(direction);\r\n    })\r\n    .call(() => initCardEvents())\r\n    .fromTo(\r\n      direction === \"right\" ? nextInfoEl.querySelectorAll(\".text\") : previousInfoEl.querySelectorAll(\".text\"),\r\n      {\r\n        opacity: 0,\r\n        translateY: \"40px\",\r\n      },\r\n      {\r\n        duration: 0.4,\r\n        stagger: 0.1,\r\n        translateY: \"0px\",\r\n        opacity: 1,\r\n      }\r\n    )\r\n    .to([buttons.prev, buttons.next], {\r\n      duration: 0.2,\r\n      opacity: 1,\r\n      pointerEvents: \"all\",\r\n    });\r\n\r\n  function swapInfosClass() {\r\n    currentInfoEl.classList.remove(\"current--info\");\r\n    previousInfoEl.classList.remove(\"previous--info\");\r\n    nextInfoEl.classList.remove(\"next--info\");\r\n\r\n    if (direction === \"right\") {\r\n      currentInfoEl.classList.add(\"previous--info\");\r\n      nextInfoEl.classList.add(\"current--info\");\r\n      previousInfoEl.classList.add(\"next--info\");\r\n    } else if (direction === \"left\") {\r\n      currentInfoEl.classList.add(\"next--info\");\r\n      nextInfoEl.classList.add(\"previous--info\");\r\n      previousInfoEl.classList.add(\"current--info\");\r\n    }\r\n  }\r\n}\r\n\r\nfunction updateCard(e) {\r\n  const card = e.currentTarget;\r\n  const box = card.getBoundingClientRect();\r\n  const centerPosition = {\r\n    x: box.left + box.width / 2,\r\n    y: box.top + box.height / 2,\r\n  };\r\n  let angle = Math.atan2(e.pageX - centerPosition.x, 0) * (35 / Math.PI);\r\n  gsap.set(card, {\r\n    \"--current-card-rotation-offset\": `${angle}deg`,\r\n  });\r\n  const currentInfoEl = cardInfosContainerEl.querySelector(\".current--info\");\r\n  gsap.set(currentInfoEl, {\r\n    rotateY: `${angle}deg`,\r\n  });\r\n}\r\n\r\nfunction resetCardTransforms(e) {\r\n  const card = e.currentTarget;\r\n  const currentInfoEl = cardInfosContainerEl.querySelector(\".current--info\");\r\n  gsap.set(card, {\r\n    \"--current-card-rotation-offset\": 0,\r\n  });\r\n  gsap.set(currentInfoEl, {\r\n    rotateY: 0,\r\n  });\r\n}\r\n\r\nfunction initCardEvents() {\r\n  const currentCardEl = cardsContainerEl.querySelector(\".current--card\");\r\n  currentCardEl.addEventListener(\"pointermove\", updateCard);\r\n  currentCardEl.addEventListener(\"pointerout\", (e) => {\r\n    resetCardTransforms(e);\r\n  });\r\n}\r\n\r\ninitCardEvents();\r\n\r\nfunction removeCardEvents(card) {\r\n  card.removeEventListener(\"pointermove\", updateCard);\r\n}\r\n\r\nfunction init() {\r\n  let tl = gsap.timeline();\r\n\r\n  tl.to(cardsContainerEl.children, {\r\n    delay: 0.15,\r\n    duration: 0.5,\r\n    stagger: {\r\n      ease: \"power4.inOut\",\r\n      from: \"right\",\r\n      amount: 0.1,\r\n    },\r\n    \"--card-translateY-offset\": \"0%\",\r\n  })\r\n    .to(cardInfosContainerEl.querySelector(\".current--info\").querySelectorAll(\".text\"), {\r\n      delay: 0.5,\r\n      duration: 0.4,\r\n      stagger: 0.1,\r\n      opacity: 1,\r\n      translateY: 0,\r\n    })\r\n    .to(\r\n      [buttons.prev, buttons.next],\r\n      {\r\n        duration: 0.4,\r\n        opacity: 1,\r\n        pointerEvents: \"all\",\r\n      },\r\n      \"-=0.4\"\r\n    );\r\n}\r\n\r\nconst waitForImages = () => {\r\n  const images = [...document.querySelectorAll(\"img\")];\r\n  const totalImages = images.length;\r\n  let loadedImages = 0;\r\n  const loaderEl = document.querySelector(\".loader span\");\r\n\r\n  gsap.set(cardsContainerEl.children, {\r\n    \"--card-translateY-offset\": \"100vh\",\r\n  });\r\n  gsap.set(cardInfosContainerEl.querySelector(\".current--info\").querySelectorAll(\".text\"), {\r\n    translateY: \"40px\",\r\n    opacity: 0,\r\n  });\r\n  gsap.set([buttons.prev, buttons.next], {\r\n    pointerEvents: \"none\",\r\n    opacity: \"0\",\r\n  });\r\n\r\n  images.forEach((image) => {\r\n    imagesLoaded(image, (instance) => {\r\n      if (instance.isComplete) {\r\n        loadedImages++;\r\n        let loadProgress = loadedImages / totalImages;\r\n\r\n        gsap.to(loaderEl, {\r\n          duration: 1,\r\n          scaleX: loadProgress,\r\n          // backgroundColor: `hsl(${loadProgress * 120}, 100%, 50%`,\r\n        });\r\n\r\n        if (totalImages == loadedImages) {\r\n          gsap\r\n            .timeline()\r\n            .to(\".loading__wrapper\", {\r\n              duration: 0.8,\r\n              opacity: 0,\r\n              pointerEvents: \"none\",\r\n            })\r\n            .call(() => init());\r\n        }\r\n      }\r\n    });\r\n  });\r\n};\r\n\r\nwaitForImages();\r\n///////////////////////////////////////////////\r\n\n\n//# sourceURL=webpack://artnagaeva.com/./src/js/main.js?");

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