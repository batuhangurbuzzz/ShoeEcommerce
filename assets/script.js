const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('menu');
const bars = document.querySelector('.fa-bars');

hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('mobile-list-active');
    bars.classList.toggle('fa-xmark');
    console.log('Butona tıklandı');
});