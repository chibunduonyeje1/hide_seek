const hamburger = document.getElementById('hamburger-menu');
const closeMenubar = document.getElementById('mobile-menu-close');
const menuBar = document.getElementById('mobile-menu-bar');

hamburger.addEventListener('click', () => {
  menuBar.style.display = 'block';
});

closeMenubar.addEventListener('click', () => {
  menuBar.style.display = 'none';
});

menuBar.addEventListener('focusout', () => {
  menuBar.style.display = 'none';
});

const mediaQuery = window.matchMedia('(min-width: 768px)');
mediaQuery.addEventListener('change', (change) => {
  if (change.matches) {
    menuBar.style.display = 'none';
  }
});