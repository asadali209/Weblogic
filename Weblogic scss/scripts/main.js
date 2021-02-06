// Navbar
const menuBtn = document.getElementById('menu-toggle');
const menuBtnExit = document.getElementById('menu-exit');
const nav = document.querySelector('.navbar');

menuBtn.addEventListener('click', () => {
  nav.classList.add('menu-btn');
});
menuBtnExit.addEventListener('click', () => {
  nav.classList.remove('menu-btn');
});
