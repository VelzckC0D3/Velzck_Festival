// LANGUAGE WRAPPER //

const wrapper = document.querySelector("#languageWrapper");

wrapper.addEventListener("click", () => {
  wrapper.classList.toggle("viewMenu");
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

// MENU BUTTONS ACTION
