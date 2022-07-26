import { sum } from "./modules/sum.js";
console.log(sum(2, 10));

/* Проверка поддержки webp, добавление класса webp или no-webp для HTML */

function isWebp() {
  //Проверка поддержки webp
  function testWebP(callback) {
    // console.log("supported");
    let webP = new Image();
    webP.onload = webP.onerror = function () {
      callback(webP.height == 2);
    };
    webP.src =
      "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
  }

  //Добавление класса _webp или _no-webp для HTML
  testWebP(function (support) {
    let className = support === true ? "webp" : "no-webp";
    document.documentElement.classList.add(className);
  });
}
isWebp();

//Header active
(function () {
  const header = document.querySelector(".header");
  window.onscroll = () => {
    if (window.pageYOffset > 120) {
      header.classList.add("header-js-active");
    } else {
      header.classList.remove("header-js-active");
    }
  };
})();
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

//top-slider
document.addEventListener("DOMContentLoaded", () => {
  // инициализация слайдера
  new ItcSimpleSlider(".itcss", {
    loop: true,
    autoplay: true,
    interval: 4000,
    swipe: true,
    indicators: true,
  });
});

//gsap slider initialization
console.clear();

const { gsap, imagesLoaded } = window;

const buttons = {
  prev: document.querySelector(".btn--left"),
  next: document.querySelector(".btn--right"),
};
const cardsContainerEl = document.querySelector(".cards__wrapper");
const appBgContainerEl = document.querySelector(".app__bg");

const cardInfosContainerEl = document.querySelector(".info__wrapper");

buttons.next.addEventListener("click", () => swapCards("right"));

buttons.prev.addEventListener("click", () => swapCards("left"));

function swapCards(direction) {
  const currentCardEl = cardsContainerEl.querySelector(".current--card");
  const previousCardEl = cardsContainerEl.querySelector(".previous--card");
  const nextCardEl = cardsContainerEl.querySelector(".next--card");

  const currentBgImageEl = appBgContainerEl.querySelector(".current--image");
  const previousBgImageEl = appBgContainerEl.querySelector(".previous--image");
  const nextBgImageEl = appBgContainerEl.querySelector(".next--image");

  changeInfo(direction);
  swapCardsClass();

  removeCardEvents(currentCardEl);

  function swapCardsClass() {
    currentCardEl.classList.remove("current--card");
    previousCardEl.classList.remove("previous--card");
    nextCardEl.classList.remove("next--card");

    currentBgImageEl.classList.remove("current--image");
    previousBgImageEl.classList.remove("previous--image");
    nextBgImageEl.classList.remove("next--image");

    currentCardEl.style.zIndex = "50";
    currentBgImageEl.style.zIndex = "-2";

    if (direction === "right") {
      previousCardEl.style.zIndex = "20";
      nextCardEl.style.zIndex = "30";

      nextBgImageEl.style.zIndex = "-1";

      currentCardEl.classList.add("previous--card");
      previousCardEl.classList.add("next--card");
      nextCardEl.classList.add("current--card");

      currentBgImageEl.classList.add("previous--image");
      previousBgImageEl.classList.add("next--image");
      nextBgImageEl.classList.add("current--image");
    } else if (direction === "left") {
      previousCardEl.style.zIndex = "30";
      nextCardEl.style.zIndex = "20";

      previousBgImageEl.style.zIndex = "-1";

      currentCardEl.classList.add("next--card");
      previousCardEl.classList.add("current--card");
      nextCardEl.classList.add("previous--card");

      currentBgImageEl.classList.add("next--image");
      previousBgImageEl.classList.add("current--image");
      nextBgImageEl.classList.add("previous--image");
    }
  }
}

function changeInfo(direction) {
  let currentInfoEl = cardInfosContainerEl.querySelector(".current--info");
  let previousInfoEl = cardInfosContainerEl.querySelector(".previous--info");
  let nextInfoEl = cardInfosContainerEl.querySelector(".next--info");

  gsap
    .timeline()
    .to([buttons.prev, buttons.next], {
      duration: 0.2,
      opacity: 0.5,
      pointerEvents: "none",
    })
    .to(
      currentInfoEl.querySelectorAll(".text"),
      {
        duration: 0.4,
        stagger: 0.1,
        translateY: "-120px",
        opacity: 0,
      },
      "-="
    )
    .call(() => {
      swapInfosClass(direction);
    })
    .call(() => initCardEvents())
    .fromTo(
      direction === "right" ? nextInfoEl.querySelectorAll(".text") : previousInfoEl.querySelectorAll(".text"),
      {
        opacity: 0,
        translateY: "40px",
      },
      {
        duration: 0.4,
        stagger: 0.1,
        translateY: "0px",
        opacity: 1,
      }
    )
    .to([buttons.prev, buttons.next], {
      duration: 0.2,
      opacity: 1,
      pointerEvents: "all",
    });

  function swapInfosClass() {
    currentInfoEl.classList.remove("current--info");
    previousInfoEl.classList.remove("previous--info");
    nextInfoEl.classList.remove("next--info");

    if (direction === "right") {
      currentInfoEl.classList.add("previous--info");
      nextInfoEl.classList.add("current--info");
      previousInfoEl.classList.add("next--info");
    } else if (direction === "left") {
      currentInfoEl.classList.add("next--info");
      nextInfoEl.classList.add("previous--info");
      previousInfoEl.classList.add("current--info");
    }
  }
}

function updateCard(e) {
  const card = e.currentTarget;
  const box = card.getBoundingClientRect();
  const centerPosition = {
    x: box.left + box.width / 2,
    y: box.top + box.height / 2,
  };
  let angle = Math.atan2(e.pageX - centerPosition.x, 0) * (35 / Math.PI);
  gsap.set(card, {
    "--current-card-rotation-offset": `${angle}deg`,
  });
  const currentInfoEl = cardInfosContainerEl.querySelector(".current--info");
  gsap.set(currentInfoEl, {
    rotateY: `${angle}deg`,
  });
}

function resetCardTransforms(e) {
  const card = e.currentTarget;
  const currentInfoEl = cardInfosContainerEl.querySelector(".current--info");
  gsap.set(card, {
    "--current-card-rotation-offset": 0,
  });
  gsap.set(currentInfoEl, {
    rotateY: 0,
  });
}

function initCardEvents() {
  const currentCardEl = cardsContainerEl.querySelector(".current--card");
  currentCardEl.addEventListener("pointermove", updateCard);
  currentCardEl.addEventListener("pointerout", (e) => {
    resetCardTransforms(e);
  });
}

initCardEvents();

function removeCardEvents(card) {
  card.removeEventListener("pointermove", updateCard);
}

function init() {
  let tl = gsap.timeline();

  tl.to(cardsContainerEl.children, {
    delay: 0.15,
    duration: 0.5,
    stagger: {
      ease: "power4.inOut",
      from: "right",
      amount: 0.1,
    },
    "--card-translateY-offset": "0%",
  })
    .to(cardInfosContainerEl.querySelector(".current--info").querySelectorAll(".text"), {
      delay: 0.5,
      duration: 0.4,
      stagger: 0.1,
      opacity: 1,
      translateY: 0,
    })
    .to(
      [buttons.prev, buttons.next],
      {
        duration: 0.4,
        opacity: 1,
        pointerEvents: "all",
      },
      "-=0.4"
    );
}

const waitForImages = () => {
  const images = [...document.querySelectorAll("img")];
  const totalImages = images.length;
  let loadedImages = 0;
  const loaderEl = document.querySelector(".loader span");

  gsap.set(cardsContainerEl.children, {
    "--card-translateY-offset": "100vh",
  });
  gsap.set(cardInfosContainerEl.querySelector(".current--info").querySelectorAll(".text"), {
    translateY: "40px",
    opacity: 0,
  });
  gsap.set([buttons.prev, buttons.next], {
    pointerEvents: "none",
    opacity: "0",
  });

  images.forEach((image) => {
    imagesLoaded(image, (instance) => {
      if (instance.isComplete) {
        loadedImages++;
        let loadProgress = loadedImages / totalImages;

        gsap.to(loaderEl, {
          duration: 1,
          scaleX: loadProgress,
          backgroundColor: `hsl(${loadProgress * 120}, 100%, 50%`,
        });

        if (totalImages == loadedImages) {
          gsap
            .timeline()
            .to(".loading__wrapper", {
              duration: 0.8,
              opacity: 0,
              pointerEvents: "none",
            })
            .call(() => init());
        }
      }
    });
  });
};

waitForImages();
///////////////////////////////////////////////
