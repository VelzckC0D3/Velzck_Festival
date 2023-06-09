// LANGUAGE WRAPPER //

const wrapper = document.querySelector('#languageWrapper');
wrapper.addEventListener('click', () => {
  wrapper.classList.toggle('viewMenu');
});

document.addEventListener('click', (e) => {
  if (e.target.closest('#languageWrapper')) return;
  wrapper.classList.remove('viewMenu');
});

// LANGUAGE WRAPPER //

// MENU BUTTONS ACTION

const body = document.querySelector('body');
const menu = document.querySelector('#menuBar');
const menuButtons = document.querySelectorAll('.menuAction');
const hamburguer = document.querySelector('#menuBtn');

menuButtons.forEach((index) => {
  index.addEventListener('click', () => {
    if (window.innerWidth < 680) {
      menu.classList.toggle('menuOn');
      body.classList.toggle('block');
    }
    if (
      hamburguer.innerHTML
      === '<img src="style/icons/hamb-bars.svg" alt="menu icon">'
    ) {
      hamburguer.innerHTML = '<img src="style/icons/x-solid.svg" alt="menu icon">';
    } else if (
      hamburguer.innerHTML
      === '<img src="style/icons/x-solid.svg" alt="menu icon">'
    ) {
      hamburguer.innerHTML = '<img src="style/icons/hamb-bars.svg" alt="menu icon">';
    }
  });
});

// MENU BUTTONS ACTION //

// ESCAPE ClOSES EVERYTHING //

document.addEventListener('keydown', (e) => {
  if (e.code === 'Escape') {
    wrapper.classList.remove('viewMenu');
    menu.classList.remove('menuOn');
    body.classList.remove('block');
  }
});

// ESCAPE ClOSES EVERYTHING //

// FIXED DESKTOP MENU //

window.addEventListener('scroll', () => {
  const header = document.querySelector('#menuCont');
  const accessibility = document.querySelector('#accessibility');
  header.classList.toggle('fixed', window.scrollY > 0);
  accessibility.classList.toggle('z-index', window.scrollY > 0);
  wrapper.classList.remove('viewMenu');
});

// FIXED DESKTOP MENU //

// DISABLE MOBILE MENU ON CERTAIN RESOLUTION //

function removeClassesOnResize() {
  if (window.innerWidth > 680) {
    menu.classList.remove('menuOn');
    body.classList.remove('block');
    hamburguer.innerHTML = '<img src="style/icons/hamb-bars.svg" alt="menu icon">';
    wrapper.classList.remove('viewMenu');
  }
}

window.addEventListener('resize', removeClassesOnResize);

// DISABLE MOBILE MENU ON CERTAIN RESOLUTION //

// MORE SPEAKERS BUTTON ACTION //

const moreButton = document.querySelector('.more');
const more = document.querySelector('.moreSpeakers');
const speakersCont = document.querySelector('#speakersTitle');
moreButton.addEventListener('click', () => {
  more.classList.toggle('showMore');
  if (
    moreButton.innerHTML
    === 'more<img class="arrow" src="style/icons/arrow-down.svg" alt="arrow down">'
  ) {
    moreButton.innerHTML = 'less<img class="arrow" src="style/icons/arrow-up.svg" alt="arrow up icon">';
  } else if (
    moreButton.innerHTML
    === 'less<img class="arrow" src="style/icons/arrow-up.svg" alt="arrow up icon">'
  ) {
    moreButton.innerHTML = 'more<img class="arrow" src="style/icons/arrow-down.svg" alt="arrow down">';
    speakersCont.scrollIntoView({ behavior: 'smooth' });
  }
});

// MORE SPEAKERS BUTTON ACTION //
