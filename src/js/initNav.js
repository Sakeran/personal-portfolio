function initNav() {
  const nav = document.querySelector('#nav');
  const toggleButton = document.querySelector('#toggle-menu');

  // Remove 'fallback' classes meant for browsers with no JS.
  nav.classList.remove('nav-fallback');
  toggleButton.classList.remove('toggle-menu-fallback');

  // Initialize menu toggle button
  let menuShowing = false;

  const toggleMenu = () => {
    nav.classList.toggle('nav-open');
    menuShowing = !menuShowing;
  };

  // Toggle menu upon button click.
  toggleButton.addEventListener('click', (e) => {
    toggleMenu();
    e.stopPropagation();
  });

  // Un-toggle the menu if already open, upon a click anywhere not on the menu.
  document.body.addEventListener('click', (e) => {
    if (menuShowing) {
      if (!nav.contains(e.target)) {
        toggleMenu();
      }
    }
  });

}

module.exports = initNav;
