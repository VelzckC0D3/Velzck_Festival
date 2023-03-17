// SWITCH ACTION BUTTON //

const aboutLink = document.querySelector('.aboutButton');
const homeLink = document.querySelector('.homeButton');
const heroPage = document.querySelector('#homePage');
const aboutPage = document.querySelector('#aboutPage');
const homeSectionButton = document.querySelectorAll('.homeSection');
const aboutSectionButton = document.querySelector('.aboutSection');

aboutLink.addEventListener('click', () => {
  heroPage.classList.add('switch');
  aboutPage.classList.remove('switch');
});

homeLink.addEventListener('click', () => {
  heroPage.classList.remove('switch');
  aboutPage.classList.add('switch');
});

homeSectionButton.forEach((i) => {
  i.addEventListener('click', () => {
    heroPage.classList.remove('switch');
    aboutPage.classList.add('switch');
  });
});

aboutSectionButton.addEventListener('click', () => {
  heroPage.classList.add('switch');
  aboutPage.classList.remove('switch');
});
// SWITCH ACTION BUTTON //

// LOGO TAKES YOU TO HOME PAGE //

const logo = document.querySelector('#menuLogo');
logo.addEventListener('click', () => {
  heroPage.classList.remove('switch');
  aboutPage.classList.add('switch');
});

// LOGO TAKES YOU TO HOME PAGE //
