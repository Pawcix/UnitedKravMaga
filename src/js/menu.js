const nav = document.querySelector('.navbar');
const mobileMenu = document.getElementById('mobile-menu');
const navList = document.getElementById('nav-list');

const mobileMenuClick = () => {
    mobileMenu.querySelector('.burger-icon').classList.toggle('active');
    navList.classList.toggle('show');

    if (navList.classList.contains('show')) {
        nav.classList.remove('bgc');
    }
}

mobileMenu.addEventListener('click', mobileMenuClick);
