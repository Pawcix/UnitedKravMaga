document.addEventListener('DOMContentLoaded', function () {
    const mobileMenuToggle = document.getElementById('mobile-menu');
    const navList = document.getElementById('nav-list');

    mobileMenuToggle.addEventListener('click', function () {
        mobileMenuToggle.querySelector('.burger-icon').classList.toggle('active');
        navList.classList.toggle('show');
    });
});