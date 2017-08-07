const {
  addModal,
  showModal,
  appendModalInfo,
} = require('./modalFunctions');

function initializeItem(item, index) {
  // Give each item an index so we can find the details later.
  item.dataset.portfolioIndex = index;
  // Set the item to use the "clickable" class
  item.classList.add('portfolio-clickable');
}

// Removes the info section from the item and pushes it onto the array
// for later retrieval.
function storeInfoNode(array, item) {
  const infoNode = item.querySelector('.portfolio-info');
  if (!infoNode) { return; }

  // Pass in a clone of the item's image tag.
  const imgDiv = document.createElement('div');
  imgDiv.classList.add('.portfolio-img');
  imgDiv.appendChild(item.querySelector('img').cloneNode());

  const text = infoNode.querySelector('.portfolio-text');
  infoNode.insertBefore(imgDiv, text);

  // Push the node onto the array.
  array.push(infoNode.parentNode.removeChild(infoNode));
}

function initPortfolio() {
  // Remove the "profile-info" section from all portfolio items and store
  // them in an array for later display.
  const items = Array.from(document.querySelectorAll('.portfolio-item'));
  const itemInfoNodes = [];
  items.forEach((item, i) => {
    initializeItem(item, i);
    storeInfoNode(itemInfoNodes, item);
    // Add a listener to show the modal upon a click.
    item.addEventListener('click', () => {
      appendModalInfo(itemInfoNodes[i]);
      showModal();
    });
  });

  addModal();
}

module.exports = initPortfolio;
