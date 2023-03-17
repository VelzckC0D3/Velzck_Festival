// LANGUAGE WRAPPER //

const wrapper = document.querySelector("#languageWrapper");
wrapper.addEventListener("click", () => {
  wrapper.classList.toggle("viewMenu");
});

document.addEventListener("click", function (e) {
  if (e.target.closest("#languageWrapper")) return;
  wrapper.classList.remove("viewMenu");
});

// LANGUAGE WRAPPER //

// MENU BUTTONS ACTION

const body = document.querySelector("body");
const menu = document.querySelector("#menuBar");
const menuButtons = document.querySelectorAll(".menuAction");

menuButtons.forEach((index) => {
  index.addEventListener("click", () => {
    if (window.innerWidth < 680) {
      menu.classList.toggle("menuOn");
      body.classList.toggle("block");
    }
  });
});

// MENU BUTTONS ACTION //

// ESCAPE ClOSES EVERYTHING //

document.addEventListener("keydown", (e) => {
  if (e.code === "Escape") {
    wrapper.classList.remove("viewMenu");
    menu.classList.remove("menuOn");
    body.classList.remove("block");
  }
});

// ESCAPE ClOSES EVERYTHING //

// FIXED DESKTOP MENU //

window.addEventListener("scroll", function () {
  const header = document.querySelector("#menuCont");
  const accessibility = document.querySelector("#accessibility");
  header.classList.toggle("fixed", window.scrollY > 0);
  accessibility.classList.toggle("z-index", window.scrollY > 0);
});

// FIXED DESKTOP MENU //

// MORE SPEAKERS BUTTON ACTION //

const moreButton = document.querySelector(".more");
const more = document.querySelector(".moreSpeakers");
moreButton.addEventListener("click", () => {
  more.classList.toggle("showMore");
  if (
    moreButton.innerHTML ===
    'more<img class="arrow" src="style/icons/arrow-down.svg" alt="">'
  ) {
    moreButton.innerHTML = `less<img class="arrow" src="style/icons/arrow-up.svg" alt="">`;
  } else if (
    moreButton.innerHTML ===
    'less<img class="arrow" src="style/icons/arrow-up.svg" alt="">'
  ) {
    moreButton.innerHTML = `more<img class="arrow" src="style/icons/arrow-down.svg" alt="">`;
  }
});

// MORE SPEAKERS BUTTON ACTION //
