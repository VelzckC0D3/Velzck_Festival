const cont = window;

cont.addEventListener('scroll', () => {
    const scrollPosition = window.pageYOffset;
    console.log(`position is: ${scrollPosition}px`);
});
