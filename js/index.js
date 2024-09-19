document.addEventListener('DOMContentLoaded', () => {
    const burgerMenu = document.getElementById('burger-menu');
    const navbarContainer = document.getElementById('navbar-container');

    burgerMenu.addEventListener('click', () => {
        navbarContainer.classList.toggle('active');
    });
});