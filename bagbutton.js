function displayBagItems() {
  let containerElement = document.querySelector('.bag-items-container');
  if (!containerElement) {
    console.error('Error: .bag-items-container element not found in the DOM.');
    return;
  }

  containerElement.innerHTML = `
    <div class="bag-item-container">
      <div class="item-left-part">
        <img class="bag-item-img" src="../images/item1.jpg">
      </div>
      <div class="item-right-part">
        <div class="company">ADIDAS</div>
        <div class="item-name">Men Printed Polo Collar Indian Cricket ODI Jersey</div>
        <div class="price-container">
          <span class="current-price">Rs 999</span>
          <span class="original-price">Rs 999</span>
          <span class="discount-percentage">(0% OFF)</span>
        </div>
        <div class="return-period">
          <span class="return-period-days">14 days</span> return available
        </div>
        <div class="delivery-details">
          Delivery by
          <span class="delivery-details-days">10 Oct 2023</span>
        </div>
      </div>
      <div class="remove-from-cart">X</div>
    </div>
  `;
}