// Add a modal component to the portfolio div
function addModal() {
  // Create and insert mockup
  const markup = `
  <div id="portfolio-modal" class="portfolio-modal">
    <div id="portfolio-modal-content" class="portfolio-modal-content">
      <button id="remove-modal"><i class="fa fa-times"></i></button>
    </div>
  </div>
  `;
  const portfolio = document.getElementById('portfolio');
  portfolio.insertAdjacentHTML('afterbegin', markup);

  // Set the button to hide the modal upon being clicked.
  const button = document.getElementById('remove-modal');
  button.addEventListener('click', hideModal);
}

function showModal() {
  const modal = document.getElementById('portfolio-modal');
  modal && modal.classList.add('portfolio-modal-active');
}

function hideModal() {
  const modal = document.getElementById('portfolio-modal');
  modal && modal.classList.remove('portfolio-modal-active');
}

// Add a passed-in info node to the modal.
// Also remove any other info nodes that might be in
// the modal aready.
function appendModalInfo(node) {
  const modal = document.getElementById('portfolio-modal-content');
  const prevNode = modal.querySelector('.portfolio-info');
  if (prevNode) {
    modal.removeChild(prevNode);
  }
  modal.appendChild(node);
}

module.exports = {
  addModal,
  hideModal,
  showModal,
  appendModalInfo,
};
