/* Проверка поддержки webp, добавление класса webp или no-webp для HTML */

function isWebp() {
  //   console.log("Привет2!");
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
(function () {
  const burgerItem = document.querySelector(".burger");
  const menu = document.querySelector(".header__nav");
  const menuCloseItem = document.querySelector(".header__nav-close");
  const menuLinks = document.querySelectorAll(".header__nav-link");
  burgerItem.addEventListener("click", () => {
    menu.classList.add("header__nav_active");
  });
  menuCloseItem.addEventListener("click", () => {
    menu.classList.remove("header__nav_active");
  });

  if (window.innerWidth < 768) {
    for (let i = 0; i < menuLinks.length; i += 1) {
      menuLinks[i].addEventListener("click", () => {
        menu.classList.remove("header__nav_active");
      });
    }
  }
})();
// Scroll to anchors
(function () {
  const smoothScroll = function (targetEl, duration) {
    const headerElHeight = document.querySelector(".header").clientHeight;
    let target = document.querySelector(targetEl);
    let targetPosition = target.getBoundingClientRect().top - headerElHeight;
    let startPosition = window.pageYOffset;
    let startTime = null;

    const ease = function (t, b, c, d) {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    };

    const animation = function (currentTime) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = ease(timeElapsed, startPosition, targetPosition, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    };
    requestAnimationFrame(animation);
  };

  const scrollTo = function () {
    const links = document.querySelectorAll(".js-scroll");
    links.forEach((each) => {
      each.addEventListener("click", function () {
        const currentTarget = this.getAttribute("href");
        smoothScroll(currentTarget, 1000);
      });
    });
  };
  scrollTo();
})();
