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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_sum_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/sum.js */ \"./src/js/modules/sum.js\");\n\nconsole.log((0,_modules_sum_js__WEBPACK_IMPORTED_MODULE_0__.sum)(2, 10));\n\n/* Проверка поддержки webp, добавление класса webp или no-webp для HTML */\n\nfunction isWebp() {\n  //Проверка поддержки webp\n  function testWebP(callback) {\n    // console.log(\"supported\");\n    let webP = new Image();\n    webP.onload = webP.onerror = function () {\n      callback(webP.height == 2);\n    };\n    webP.src =\n      \"data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA\";\n  }\n\n  //Добавление класса _webp или _no-webp для HTML\n  testWebP(function (support) {\n    let className = support === true ? \"webp\" : \"no-webp\";\n    document.documentElement.classList.add(className);\n  });\n}\nisWebp();\n\n//Header active\n(function () {\n  const header = document.querySelector(\".header\");\n  window.onscroll = () => {\n    if (window.pageYOffset > 120) {\n      header.classList.add(\"header-js-active\");\n    } else {\n      header.classList.remove(\"header-js-active\");\n    }\n  };\n})();\n//Burger handler\n// (function () {\n//   const burgerItem = document.querySelector(\".burger\");\n//   const menu = document.querySelector(\".header__nav\");\n//   const menuCloseItem = document.querySelector(\".header__nav-close\");\n//   const menuLinks = document.querySelectorAll(\".header__nav-link\");\n//   burgerItem.addEventListener(\"click\", () => {\n//     menu.classList.add(\"header__nav_active\");\n//   });\n//   menuCloseItem.addEventListener(\"click\", () => {\n//     menu.classList.remove(\"header__nav_active\");\n//   });\n\n//   if (window.innerWidth < 768) {\n//     for (let i = 0; i < menuLinks.length; i += 1) {\n//       menuLinks[i].addEventListener(\"click\", () => {\n//         menu.classList.remove(\"header__nav_active\");\n//       });\n//     }\n//   }\n// })();\n// Scroll to anchors\n// (function () {\n//   const smoothScroll = function (targetEl, duration) {\n//     const headerElHeight = document.querySelector(\".header\").clientHeight;\n//     let target = document.querySelector(targetEl);\n//     let targetPosition = target.getBoundingClientRect().top - headerElHeight;\n//     let startPosition = window.pageYOffset;\n//     let startTime = null;\n\n//     const ease = function (t, b, c, d) {\n//       t /= d / 2;\n//       if (t < 1) return (c / 2) * t * t + b;\n//       t--;\n//       return (-c / 2) * (t * (t - 2) - 1) + b;\n//     };\n\n//     const animation = function (currentTime) {\n//       if (startTime === null) startTime = currentTime;\n//       const timeElapsed = currentTime - startTime;\n//       const run = ease(timeElapsed, startPosition, targetPosition, duration);\n//       window.scrollTo(0, run);\n//       if (timeElapsed < duration) requestAnimationFrame(animation);\n//     };\n//     requestAnimationFrame(animation);\n//   };\n\n//   const scrollTo = function () {\n//     const links = document.querySelectorAll(\".js-scroll\");\n//     links.forEach((each) => {\n//       each.addEventListener(\"click\", function () {\n//         const currentTarget = this.getAttribute(\"href\");\n//         smoothScroll(currentTarget, 100);\n//       });\n//     });\n//   };\n//   scrollTo();\n// })();\n\n//top-slider\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  // инициализация слайдера\n  new ItcSimpleSlider(\".itcss\", {\n    loop: true,\n    autoplay: true,\n    interval: 4000,\n    swipe: true,\n    indicators: true,\n  });\n});\n\n//gsap slider\nconsole.clear();\n\nconst { gsap, imagesLoaded } = window;\n\nconst buttons = {\n  prev: document.querySelector(\".btn--left\"),\n  next: document.querySelector(\".btn--right\"),\n};\nconst cardsContainerEl = document.querySelector(\".cards__wrapper\");\nconst appBgContainerEl = document.querySelector(\".app__bg\");\n\nconst cardInfosContainerEl = document.querySelector(\".info__wrapper\");\n\nbuttons.next.addEventListener(\"click\", () => swapCards(\"right\"));\n\nbuttons.prev.addEventListener(\"click\", () => swapCards(\"left\"));\n\nfunction swapCards(direction) {\n  const currentCardEl = cardsContainerEl.querySelector(\".current--card\");\n  const previousCardEl = cardsContainerEl.querySelector(\".previous--card\");\n  const nextCardEl = cardsContainerEl.querySelector(\".next--card\");\n\n  const currentBgImageEl = appBgContainerEl.querySelector(\".current--image\");\n  const previousBgImageEl = appBgContainerEl.querySelector(\".previous--image\");\n  const nextBgImageEl = appBgContainerEl.querySelector(\".next--image\");\n\n  changeInfo(direction);\n  swapCardsClass();\n\n  removeCardEvents(currentCardEl);\n\n  function swapCardsClass() {\n    currentCardEl.classList.remove(\"current--card\");\n    previousCardEl.classList.remove(\"previous--card\");\n    nextCardEl.classList.remove(\"next--card\");\n\n    currentBgImageEl.classList.remove(\"current--image\");\n    previousBgImageEl.classList.remove(\"previous--image\");\n    nextBgImageEl.classList.remove(\"next--image\");\n\n    currentCardEl.style.zIndex = \"50\";\n    currentBgImageEl.style.zIndex = \"-2\";\n\n    if (direction === \"right\") {\n      previousCardEl.style.zIndex = \"20\";\n      nextCardEl.style.zIndex = \"30\";\n\n      nextBgImageEl.style.zIndex = \"-1\";\n\n      currentCardEl.classList.add(\"previous--card\");\n      previousCardEl.classList.add(\"next--card\");\n      nextCardEl.classList.add(\"current--card\");\n\n      currentBgImageEl.classList.add(\"previous--image\");\n      previousBgImageEl.classList.add(\"next--image\");\n      nextBgImageEl.classList.add(\"current--image\");\n    } else if (direction === \"left\") {\n      previousCardEl.style.zIndex = \"30\";\n      nextCardEl.style.zIndex = \"20\";\n\n      previousBgImageEl.style.zIndex = \"-1\";\n\n      currentCardEl.classList.add(\"next--card\");\n      previousCardEl.classList.add(\"current--card\");\n      nextCardEl.classList.add(\"previous--card\");\n\n      currentBgImageEl.classList.add(\"next--image\");\n      previousBgImageEl.classList.add(\"current--image\");\n      nextBgImageEl.classList.add(\"previous--image\");\n    }\n  }\n}\n\nfunction changeInfo(direction) {\n  let currentInfoEl = cardInfosContainerEl.querySelector(\".current--info\");\n  let previousInfoEl = cardInfosContainerEl.querySelector(\".previous--info\");\n  let nextInfoEl = cardInfosContainerEl.querySelector(\".next--info\");\n\n  gsap\n    .timeline()\n    .to([buttons.prev, buttons.next], {\n      duration: 0.2,\n      opacity: 0.5,\n      pointerEvents: \"none\",\n    })\n    .to(\n      currentInfoEl.querySelectorAll(\".text\"),\n      {\n        duration: 0.4,\n        stagger: 0.1,\n        translateY: \"-120px\",\n        opacity: 0,\n      },\n      \"-=\"\n    )\n    .call(() => {\n      swapInfosClass(direction);\n    })\n    .call(() => initCardEvents())\n    .fromTo(\n      direction === \"right\" ? nextInfoEl.querySelectorAll(\".text\") : previousInfoEl.querySelectorAll(\".text\"),\n      {\n        opacity: 0,\n        translateY: \"40px\",\n      },\n      {\n        duration: 0.4,\n        stagger: 0.1,\n        translateY: \"0px\",\n        opacity: 1,\n      }\n    )\n    .to([buttons.prev, buttons.next], {\n      duration: 0.2,\n      opacity: 1,\n      pointerEvents: \"all\",\n    });\n\n  function swapInfosClass() {\n    currentInfoEl.classList.remove(\"current--info\");\n    previousInfoEl.classList.remove(\"previous--info\");\n    nextInfoEl.classList.remove(\"next--info\");\n\n    if (direction === \"right\") {\n      currentInfoEl.classList.add(\"previous--info\");\n      nextInfoEl.classList.add(\"current--info\");\n      previousInfoEl.classList.add(\"next--info\");\n    } else if (direction === \"left\") {\n      currentInfoEl.classList.add(\"next--info\");\n      nextInfoEl.classList.add(\"previous--info\");\n      previousInfoEl.classList.add(\"current--info\");\n    }\n  }\n}\n\nfunction updateCard(e) {\n  const card = e.currentTarget;\n  const box = card.getBoundingClientRect();\n  const centerPosition = {\n    x: box.left + box.width / 2,\n    y: box.top + box.height / 2,\n  };\n  let angle = Math.atan2(e.pageX - centerPosition.x, 0) * (35 / Math.PI);\n  gsap.set(card, {\n    \"--current-card-rotation-offset\": `${angle}deg`,\n  });\n  const currentInfoEl = cardInfosContainerEl.querySelector(\".current--info\");\n  gsap.set(currentInfoEl, {\n    rotateY: `${angle}deg`,\n  });\n}\n\nfunction resetCardTransforms(e) {\n  const card = e.currentTarget;\n  const currentInfoEl = cardInfosContainerEl.querySelector(\".current--info\");\n  gsap.set(card, {\n    \"--current-card-rotation-offset\": 0,\n  });\n  gsap.set(currentInfoEl, {\n    rotateY: 0,\n  });\n}\n\nfunction initCardEvents() {\n  const currentCardEl = cardsContainerEl.querySelector(\".current--card\");\n  currentCardEl.addEventListener(\"pointermove\", updateCard);\n  currentCardEl.addEventListener(\"pointerout\", (e) => {\n    resetCardTransforms(e);\n  });\n}\n\ninitCardEvents();\n\nfunction removeCardEvents(card) {\n  card.removeEventListener(\"pointermove\", updateCard);\n}\n\nfunction init() {\n  let tl = gsap.timeline();\n\n  tl.to(cardsContainerEl.children, {\n    delay: 0.15,\n    duration: 0.5,\n    stagger: {\n      ease: \"power4.inOut\",\n      from: \"right\",\n      amount: 0.1,\n    },\n    \"--card-translateY-offset\": \"0%\",\n  })\n    .to(cardInfosContainerEl.querySelector(\".current--info\").querySelectorAll(\".text\"), {\n      delay: 0.5,\n      duration: 0.4,\n      stagger: 0.1,\n      opacity: 1,\n      translateY: 0,\n    })\n    .to(\n      [buttons.prev, buttons.next],\n      {\n        duration: 0.4,\n        opacity: 1,\n        pointerEvents: \"all\",\n      },\n      \"-=0.4\"\n    );\n}\n\nconst waitForImages = () => {\n  const images = [...document.querySelectorAll(\"img\")];\n  const totalImages = images.length;\n  let loadedImages = 0;\n  const loaderEl = document.querySelector(\".loader span\");\n\n  gsap.set(cardsContainerEl.children, {\n    \"--card-translateY-offset\": \"100vh\",\n  });\n  gsap.set(cardInfosContainerEl.querySelector(\".current--info\").querySelectorAll(\".text\"), {\n    translateY: \"40px\",\n    opacity: 0,\n  });\n  gsap.set([buttons.prev, buttons.next], {\n    pointerEvents: \"none\",\n    opacity: \"0\",\n  });\n\n  images.forEach((image) => {\n    imagesLoaded(image, (instance) => {\n      if (instance.isComplete) {\n        loadedImages++;\n        let loadProgress = loadedImages / totalImages;\n\n        gsap.to(loaderEl, {\n          duration: 1,\n          scaleX: loadProgress,\n          backgroundColor: `hsl(${loadProgress * 120}, 100%, 50%`,\n        });\n\n        if (totalImages == loadedImages) {\n          gsap\n            .timeline()\n            .to(\".loading__wrapper\", {\n              duration: 0.8,\n              opacity: 0,\n              pointerEvents: \"none\",\n            })\n            .call(() => init());\n        }\n      }\n    });\n  });\n};\n\nwaitForImages();\n///////////////////////////////////////////////\n\n\n//# sourceURL=webpack://artnagaeva.com/./src/js/main.js?");

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