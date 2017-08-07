function initPortfolio() {
  // Remove the "profile-info" section from all portfolio items and store
  // them in an array for later display.
  const items = document.querySelectorAll('.portfolio-item');
  /*eslint-disable*/
  const itemInfoNodes = Array.from(items).map((item, i) => {
    // Give each item an index so we can find the details later.
    item.dataset.portfolioIndex = i;
    // Set the item to use the "clickable" class
    item.classList.add('portfolio-clickable');
    // Remove the info section and pass it to the mapping.
    const infoNode = item.querySelector('.portfolio-info');
    return infoNode.parentNode.removeChild(infoNode);
  });

}

module.exports = initPortfolio;
