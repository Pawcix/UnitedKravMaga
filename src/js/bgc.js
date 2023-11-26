const nav = document.querySelector('.navbar');

const tlo = () => {
    if (window.scrollY > 106 && window.screen.width < 991) {
        nav.classList.add("bgc");
    } else {
        nav.classList.remove("bgc");
    }
};

window.addEventListener('scroll', tlo);