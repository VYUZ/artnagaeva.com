// import { sum } from "./modules/sum.js";
// console.log(sum(2, 10));
///////////////////////////////

/* Проверка поддержки webp, добавление класса webp или no-webp для HTML */
// function isWebp() {
//   //Проверка поддержки webp
//   function testWebP(callback) {
//     // console.log("supported");
//     let webP = new Image();
//     webP.onload = webP.onerror = function () {
//       callback(webP.height == 2);
//     };
//     webP.src =
//       "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
//   }
//   //Добавление класса _webp или _no-webp для HTML
//   testWebP(function (support) {
//     let className = support === true ? "webp" : "no-webp";
//     document.documentElement.classList.add(className);
//   });
// }
// isWebp();
///////////////////////////////
//Header active
// (function () {
//   const header = document.querySelector(".header");
//   window.onscroll = () => {
//     if (window.pageYOffset > 120) {
//       header.classList.add("header-js-active");
//     } else {
//       header.classList.remove("header-js-active");
//     }
//   };
// })();

///////////////////////////////
//Burger handler
// (function () {
//   const burgerItem = document.querySelector(".burger");
//   const menu = document.querySelector(".header__nav");
//   const menuCloseItem = document.querySelector(".header__nav-close");
//   const menuLinks = document.querySelectorAll(".header__nav-link");
//   burgerItem.addEventListener("click", () => {
//     menu.classList.add("header__nav_active");
//   });
//   menuCloseItem.addEventListener("click", () => {
//     menu.classList.remove("header__nav_active");
//   });

//   if (window.innerWidth < 768) {
//     for (let i = 0; i < menuLinks.length; i += 1) {
//       menuLinks[i].addEventListener("click", () => {
//         menu.classList.remove("header__nav_active");
//       });
//     }
//   }
// })();
// Scroll to anchors
// (function () {
//   const smoothScroll = function (targetEl, duration) {
//     const headerElHeight = document.querySelector(".header").clientHeight;
//     let target = document.querySelector(targetEl);
//     let targetPosition = target.getBoundingClientRect().top - headerElHeight;
//     let startPosition = window.pageYOffset;
//     let startTime = null;

//     const ease = function (t, b, c, d) {
//       t /= d / 2;
//       if (t < 1) return (c / 2) * t * t + b;
//       t--;
//       return (-c / 2) * (t * (t - 2) - 1) + b;
//     };

//     const animation = function (currentTime) {
//       if (startTime === null) startTime = currentTime;
//       const timeElapsed = currentTime - startTime;
//       const run = ease(timeElapsed, startPosition, targetPosition, duration);
//       window.scrollTo(0, run);
//       if (timeElapsed < duration) requestAnimationFrame(animation);
//     };
//     requestAnimationFrame(animation);
//   };

//   const scrollTo = function () {
//     const links = document.querySelectorAll(".js-scroll");
//     links.forEach((each) => {
//       each.addEventListener("click", function () {
//         const currentTarget = this.getAttribute("href");
//         smoothScroll(currentTarget, 100);
//       });
//     });
//   };
//   scrollTo();
// })();
//////////////////////////////
//top-slider initialization
// document.addEventListener("DOMContentLoaded", () => {
//   // инициализация слайдера
//   new ItcSimpleSlider(".itcss", {
//     loop: true,
//     autoplay: true,
//     interval: 4000,
//     swipe: true,
//     indicators: true,
//   });
// });
//////////////////////////////
//fulpage initialization
// new fullpage("#fullpage", {
//   //options here
//   autoScrolling: true,
//   scrollHorizontally: false,
// });

//gsap slider v2 initialization
// export * from "gsap";

// import * from "../files/gsap.min";
// console.log(sum("gsap loaded"));
// import * from "../files/ScrollTrigger.min";
// console.log(sum("ScrollTrigger loaded"));
// import * from "../files/Draggable.min";
// console.log(sum("Draggable loaded"));

// typical import
// import gsap from "gsap";
// // console.log(sum("gsap loaded"));
// // // get other plugins:
// import ScrollTrigger from "gsap/ScrollTrigger";
// import Draggable from "gsap/Draggable";

// import gsap from "https://cdn.skypack.dev/gsap";
// import ScrollTrigger from "https://cdn.skypack.dev/gsap/ScrollTrigger";
// import Draggable from "https://cdn.skypack.dev/gsap/Draggable";

// don't forget to register plugins
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(Draggable);

gsap.set(".box", {
  yPercent: -50,
});

const STAGGER = 0.1;
const DURATION = 1;
const OFFSET = 0;
const BOXES = gsap.utils.toArray(".box");

const LOOP = gsap.timeline({
  paused: true,
  repeat: -1,
  ease: "none",
});

const SHIFTS = [...BOXES, ...BOXES, ...BOXES];

SHIFTS.forEach((BOX, index) => {
  const BOX_TL = gsap
    .timeline()
    .set(BOX, {
      xPercent: 250,
      rotateY: -50,
      opacity: 0,
      scale: 0.5,
    })
    // Opacity && Scale
    .to(
      BOX,
      {
        opacity: 1,
        scale: 1,
        duration: 0.1,
      },
      0
    )
    .to(
      BOX,
      {
        opacity: 0,
        scale: 0.5,
        duration: 0.1,
      },
      0.9
    )
    // Panning
    .fromTo(
      BOX,
      {
        xPercent: 250,
      },
      {
        xPercent: -350,
        duration: 1,
        immediateRender: false,
        ease: "power1.inOut",
      },
      0
    )
    // Rotations
    .fromTo(
      BOX,
      {
        rotateY: -50,
      },
      {
        rotateY: 50,
        immediateRender: false,
        duration: 1,
        ease: "power4.inOut",
      },
      0
    )
    // Scale && Z
    .to(
      BOX,
      {
        z: 100,
        scale: 1.25,
        duration: 0.1,
        repeat: 1,
        yoyo: true,
      },
      0.4
    )
    .fromTo(
      BOX,
      {
        zIndex: 1,
      },
      {
        zIndex: BOXES.length,
        repeat: 1,
        yoyo: true,
        ease: "none",
        duration: 0.5,
        immediateRender: false,
      },
      0
    );
  LOOP.add(BOX_TL, index * STAGGER);
});

const CYCLE_DURATION = STAGGER * BOXES.length;
const START_TIME = CYCLE_DURATION + DURATION * 0.5 + OFFSET;

const LOOP_HEAD = gsap.fromTo(
  LOOP,
  {
    totalTime: START_TIME,
  },
  {
    totalTime: `+=${CYCLE_DURATION}`,
    duration: 1,
    ease: "none",
    repeat: -1,
    paused: true,
  }
);

const PLAYHEAD = {
  position: 0,
};

const POSITION_WRAP = gsap.utils.wrap(0, LOOP_HEAD.duration());

const SCRUB = gsap.to(PLAYHEAD, {
  position: 0,
  onUpdate: () => {
    LOOP_HEAD.totalTime(POSITION_WRAP(PLAYHEAD.position));
  },
  paused: true,
  duration: 0.25,
  ease: "power3",
});

let iteration = 0;
const TRIGGER = ScrollTrigger.create({
  start: 0,
  end: "+=2000",
  horizontal: false,
  pin: ".boxes",
  onUpdate: (self) => {
    const SCROLL = self.scroll();
    if (SCROLL > self.end - 1) {
      // Go forwards in time
      WRAP(1, 1);
    } else if (SCROLL < 1 && self.direction < 0) {
      // Go backwards in time
      WRAP(-1, self.end - 1);
    } else {
      const NEW_POS = (iteration + self.progress) * LOOP_HEAD.duration();
      SCRUB.vars.position = NEW_POS;
      SCRUB.invalidate().restart();
    }
  },
});

const WRAP = (iterationDelta, scrollTo) => {
  iteration += iterationDelta;
  TRIGGER.scroll(scrollTo);
  TRIGGER.update();
};

const SNAP = gsap.utils.snap(1 / BOXES.length);

const progressToScroll = (progress) =>
  gsap.utils.clamp(1, TRIGGER.end - 1, gsap.utils.wrap(0, 1, progress) * TRIGGER.end);

const scrollToPosition = (position) => {
  const SNAP_POS = SNAP(position);
  const PROGRESS = (SNAP_POS - LOOP_HEAD.duration() * iteration) / LOOP_HEAD.duration();
  const SCROLL = progressToScroll(PROGRESS);
  if (PROGRESS >= 1 || PROGRESS < 0) return WRAP(Math.floor(PROGRESS), SCROLL);
  TRIGGER.scroll(SCROLL);
};

ScrollTrigger.addEventListener("scrollEnd", () => scrollToPosition(SCRUB.vars.position));

const NEXT = () => scrollToPosition(SCRUB.vars.position - 1 / BOXES.length);
const PREV = () => scrollToPosition(SCRUB.vars.position + 1 / BOXES.length);

document.addEventListener("keydown", (event) => {
  if (event.code === "ArrowLeft" || event.code === "KeyA") NEXT();
  if (event.code === "ArrowRight" || event.code === "KeyD") PREV();
});

document.querySelector(".boxes").addEventListener("click", (e) => {
  const BOX = e.target.closest(".box");
  if (BOX) {
    let TARGET = BOXES.indexOf(BOX);
    let CURRENT = gsap.utils.wrap(0, BOXES.length, Math.floor(BOXES.length * SCRUB.vars.position));
    let BUMP = TARGET - CURRENT;
    if (TARGET > CURRENT && TARGET - CURRENT > BOXES.length * 0.5) {
      BUMP = (BOXES.length - BUMP) * -1;
    }
    if (CURRENT > TARGET && CURRENT - TARGET > BOXES.length * 0.5) {
      BUMP = BOXES.length + BUMP;
    }
    scrollToPosition(SCRUB.vars.position + BUMP * (1 / BOXES.length));
  }
});

window.BOXES = BOXES;

document.querySelector(".next").addEventListener("click", NEXT);
document.querySelector(".prev").addEventListener("click", PREV);

// Dragging
// let startX = 0
// let startOffset = 0

// const onPointerMove = e => {
//   e.preventDefault()
//   SCRUB.vars.position = startOffset + (startX - e.pageX) * 0.001
//   SCRUB.invalidate().restart() // same thing as we do in the ScrollTrigger's onUpdate
// }

// const onPointerUp = e => {
//   document.removeEventListener('pointermove', onPointerMove)
//   document.removeEventListener('pointerup', onPointerUp)
//   document.removeEventListener('pointercancel', onPointerUp)
//   scrollToPosition(SCRUB.vars.position)
// }

// // when the user presses on anything except buttons, start a drag...
// document.addEventListener('pointerdown', e => {
//   if (e.target.tagName.toLowerCase() !== 'button') {
//     document.addEventListener('pointermove', onPointerMove)
//     document.addEventListener('pointerup', onPointerUp)
//     document.addEventListener('pointercancel', onPointerUp)
//     startX = e.pageX
//     startOffset = SCRUB.vars.position
//   }
// })

gsap.set(".box", { display: "block" });

gsap.set("button", {
  z: 200,
});

Draggable.create(".drag-proxy", {
  type: "x",
  trigger: ".box",
  onPress() {
    this.startOffset = SCRUB.vars.position;
  },
  onDrag() {
    SCRUB.vars.position = this.startOffset + (this.startX - this.x) * 0.001;
    SCRUB.invalidate().restart(); // same thing as we do in the ScrollTrigger's onUpdate
  },
  onDragEnd() {
    scrollToPosition(SCRUB.vars.position);
  },
});

//////////////////////////////
//////////////////////////////
//gsap slider v1 initialization
// console.clear();

// const { gsap, imagesLoaded } = window;

// const buttons = {
//   prev: document.querySelector(".btn--left"),
//   next: document.querySelector(".btn--right"),
// };
// const cardsContainerEl = document.querySelector(".cards__wrapper");
// const appBgContainerEl = document.querySelector(".app__bg");

// const cardInfosContainerEl = document.querySelector(".info__wrapper");

// buttons.next.addEventListener("click", () => swapCards("right"));

// buttons.prev.addEventListener("click", () => swapCards("left"));

// function swapCards(direction) {
//   const currentCardEl = cardsContainerEl.querySelector(".current--card");
//   const previousCardEl = cardsContainerEl.querySelector(".previous--card");
//   const nextCardEl = cardsContainerEl.querySelector(".next--card");

//   const currentBgImageEl = appBgContainerEl.querySelector(".current--image");
//   const previousBgImageEl = appBgContainerEl.querySelector(".previous--image");
//   const nextBgImageEl = appBgContainerEl.querySelector(".next--image");

//   changeInfo(direction);
//   swapCardsClass();

//   removeCardEvents(currentCardEl);

//   function swapCardsClass() {
//     currentCardEl.classList.remove("current--card");
//     previousCardEl.classList.remove("previous--card");
//     nextCardEl.classList.remove("next--card");

//     currentBgImageEl.classList.remove("current--image");
//     previousBgImageEl.classList.remove("previous--image");
//     nextBgImageEl.classList.remove("next--image");

//     currentCardEl.style.zIndex = "50";
//     currentBgImageEl.style.zIndex = "-2";

//     if (direction === "right") {
//       previousCardEl.style.zIndex = "20";
//       nextCardEl.style.zIndex = "30";

//       nextBgImageEl.style.zIndex = "-1";

//       currentCardEl.classList.add("previous--card");
//       previousCardEl.classList.add("next--card");
//       nextCardEl.classList.add("current--card");

//       currentBgImageEl.classList.add("previous--image");
//       previousBgImageEl.classList.add("next--image");
//       nextBgImageEl.classList.add("current--image");
//     } else if (direction === "left") {
//       previousCardEl.style.zIndex = "30";
//       nextCardEl.style.zIndex = "20";

//       previousBgImageEl.style.zIndex = "-1";

//       currentCardEl.classList.add("next--card");
//       previousCardEl.classList.add("current--card");
//       nextCardEl.classList.add("previous--card");

//       currentBgImageEl.classList.add("next--image");
//       previousBgImageEl.classList.add("current--image");
//       nextBgImageEl.classList.add("previous--image");
//     }
//   }
// }

// function changeInfo(direction) {
//   let currentInfoEl = cardInfosContainerEl.querySelector(".current--info");
//   let previousInfoEl = cardInfosContainerEl.querySelector(".previous--info");
//   let nextInfoEl = cardInfosContainerEl.querySelector(".next--info");

//   gsap
//     .timeline()
//     .to([buttons.prev, buttons.next], {
//       duration: 0.2,
//       opacity: 0.5,
//       pointerEvents: "none",
//     })
//     .to(
//       currentInfoEl.querySelectorAll(".text"),
//       {
//         duration: 0.4,
//         stagger: 0.1,
//         translateY: "-120px",
//         opacity: 0,
//       },
//       "-="
//     )
//     .call(() => {
//       swapInfosClass(direction);
//     })
//     .call(() => initCardEvents())
//     .fromTo(
//       direction === "right" ? nextInfoEl.querySelectorAll(".text") : previousInfoEl.querySelectorAll(".text"),
//       {
//         opacity: 0,
//         translateY: "40px",
//       },
//       {
//         duration: 0.4,
//         stagger: 0.1,
//         translateY: "0px",
//         opacity: 1,
//       }
//     )
//     .to([buttons.prev, buttons.next], {
//       duration: 0.2,
//       opacity: 1,
//       pointerEvents: "all",
//     });

//   function swapInfosClass() {
//     currentInfoEl.classList.remove("current--info");
//     previousInfoEl.classList.remove("previous--info");
//     nextInfoEl.classList.remove("next--info");

//     if (direction === "right") {
//       currentInfoEl.classList.add("previous--info");
//       nextInfoEl.classList.add("current--info");
//       previousInfoEl.classList.add("next--info");
//     } else if (direction === "left") {
//       currentInfoEl.classList.add("next--info");
//       nextInfoEl.classList.add("previous--info");
//       previousInfoEl.classList.add("current--info");
//     }
//   }
// }

// function updateCard(e) {
//   const card = e.currentTarget;
//   const box = card.getBoundingClientRect();
//   const centerPosition = {
//     x: box.left + box.width / 2,
//     y: box.top + box.height / 2,
//   };
//   let angle = Math.atan2(e.pageX - centerPosition.x, 0) * (35 / Math.PI);
//   gsap.set(card, {
//     "--current-card-rotation-offset": `${angle}deg`,
//   });
//   const currentInfoEl = cardInfosContainerEl.querySelector(".current--info");
//   gsap.set(currentInfoEl, {
//     rotateY: `${angle}deg`,
//   });
// }

// function resetCardTransforms(e) {
//   const card = e.currentTarget;
//   const currentInfoEl = cardInfosContainerEl.querySelector(".current--info");
//   gsap.set(card, {
//     "--current-card-rotation-offset": 0,
//   });
//   gsap.set(currentInfoEl, {
//     rotateY: 0,
//   });
// }

// function initCardEvents() {
//   const currentCardEl = cardsContainerEl.querySelector(".current--card");
//   currentCardEl.addEventListener("pointermove", updateCard);
//   currentCardEl.addEventListener("pointerout", (e) => {
//     resetCardTransforms(e);
//   });
// }

// initCardEvents();

// function removeCardEvents(card) {
//   card.removeEventListener("pointermove", updateCard);
// }

// function init() {
//   let tl = gsap.timeline();

//   tl.to(cardsContainerEl.children, {
//     delay: 0.15,
//     duration: 0.5,
//     stagger: {
//       ease: "power4.inOut",
//       from: "right",
//       amount: 0.1,
//     },
//     "--card-translateY-offset": "0%",
//   })
//     .to(cardInfosContainerEl.querySelector(".current--info").querySelectorAll(".text"), {
//       delay: 0.5,
//       duration: 0.4,
//       stagger: 0.1,
//       opacity: 1,
//       translateY: 0,
//     })
//     .to(
//       [buttons.prev, buttons.next],
//       {
//         duration: 0.4,
//         opacity: 1,
//         pointerEvents: "all",
//       },
//       "-=0.4"
//     );
// }

// const waitForImages = () => {
//   const images = [...document.querySelectorAll("img")];
//   const totalImages = images.length;
//   let loadedImages = 0;
//   const loaderEl = document.querySelector(".loader span");

//   gsap.set(cardsContainerEl.children, {
//     "--card-translateY-offset": "100vh",
//   });
//   gsap.set(cardInfosContainerEl.querySelector(".current--info").querySelectorAll(".text"), {
//     translateY: "40px",
//     opacity: 0,
//   });
//   gsap.set([buttons.prev, buttons.next], {
//     pointerEvents: "none",
//     opacity: "0",
//   });

//   images.forEach((image) => {
//     imagesLoaded(image, (instance) => {
//       if (instance.isComplete) {
//         loadedImages++;
//         let loadProgress = loadedImages / totalImages;

//         gsap.to(loaderEl, {
//           duration: 1,
//           scaleX: loadProgress,
//           // backgroundColor: `hsl(${loadProgress * 120}, 100%, 50%`,
//         });

//         if (totalImages == loadedImages) {
//           gsap
//             .timeline()
//             .to(".loading__wrapper", {
//               duration: 0.8,
//               opacity: 0,
//               pointerEvents: "none",
//             })
//             .call(() => init());
//         }
//       }
//     });
//   });
// };

// waitForImages();
///////////////////////////////////////////////
