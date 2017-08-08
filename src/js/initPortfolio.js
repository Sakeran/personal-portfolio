const Masonry = require('masonry-layout');

// Moves the portfolio-info div to portfolio-overlay. This should allow
// the post's description and link to be viewable even without JS enabled.
function moveInfoToOverlay(item) {
  const infoNode = item.querySelector('.portfolio-info');
  if (!infoNode) { return; }
  const overlay = item.querySelector('.portfolio-overlay');
  if(!overlay) { return; }

  //Pass the node's children into the portfolio's overlay node.
  Array.from(infoNode.children).forEach(child => {
    overlay.appendChild(child);
  });
}

// Add touch events to portfolio-item. Since hover won't work on touchscreens,
// a tap should toggle the 'show-overlay' class.
function addTouchEvents(item) {
  let isToggled = false;

  // Body Listener - this gets added to the document when the overlay is
  // toggled on, and will toggle the overlay off if a touch is detected
  // elsewhere on the page.
  const bodyListener = (e) => {
    if (!item.contains(e.target)) {
      item.classList.remove('show-overlay');
      isToggled = false;
      document.body.removeEventListener('touchstart', bodyListener);
    }
  };

  // Main event listener.
  item.addEventListener('touchstart', (e) => {

    // If the overlay is toggled off, turn it on regardless of anything.
    if (!isToggled) {
      item.classList.add('show-overlay');
      isToggled = true;
      // Add an event listener to the body to turn the overlay off if
      // a touch event happens elsewhere.
      document.body.addEventListener('touchstart', bodyListener);
      return;
    }

    // Otherwise, toggle the overlay off if the immediate target is not a
    // link.
    if (e.target.nodeName !== 'A') {
      // We can accomplish this just by invoking the bodyListener.
      bodyListener(e);
    }

  });
}

function initPortfolio() {
  const items = Array.from(document.querySelectorAll('.portfolio-item'));
  items.forEach((item) => {
    // Set the item to use the "clickable" class - this makes the overlay CSS
    // work.
    item.classList.add('portfolio-clickable');
    // Move the profile-info section into portfolio-overlay, since JS is
    // enabled.
    moveInfoToOverlay(item);
    // Add touch events to handle overlay behavior on touchscreens.
    addTouchEvents(item);
  });

  // Initialize Masonry grid.
  const grid = document.querySelector('.portfolio-items');
  new Masonry(grid, {
    itemSelector: '.portfolio-item',
    fitWidth: true,
    gutter: 20
  });
}

module.exports = initPortfolio;
