import {products} from '../data/products.js';
import {orderHistory} from '../data/orderHistory.js';

renderOrderHistory();


function renderOrderHistory() {
  let orderHistoryHTML = ''

  orderHistory.forEach((order) => {
    let currentOrderCartProductsHTML = ''

    order.orderedProducts.forEach((orderedProduct) => {
      let matchingProduct;

      products.forEach ((product) => {
        if (product.id === orderedProduct.productId) {
          matchingProduct = product;
          matchingProduct.quantity = orderedProduct.quantity;
          matchingProduct.deliveryDate = orderedProduct.deliveryDate;
        }
      })

      const currentOrderCurrentCartProductHTML = `
      <div class="product-image-container">
        <img src=${matchingProduct.image}>
      </div>

      <div class="product-details">
        <div class="product-name">
          ${matchingProduct.name}
        </div>
        <div class="product-delivery-date">
          Arriving on: ${matchingProduct.deliveryDate}
        </div>
        <div class="product-quantity">
          Quantity: ${matchingProduct.quantity}
        </div>
        <button class="buy-again-button button-primary">
          <img class="buy-again-icon" src="images/icons/buy-again.png">
          <span class="buy-again-message">Buy it again</span>
        </button>
      </div>

      <div class="product-actions">
        <!-- <a href="tracking.html"> -->
          <button class="track-package-button js-track-package-button button-secondary" data-product-id="${matchingProduct.id}">
            Track package
          </button>
        <!-- </a> -->
      </div>
      ` 
      currentOrderCartProductsHTML += currentOrderCurrentCartProductHTML;
    });

    const curentOrderHTML = `
    <div class="order-container js-order-container">
              
      <div class="order-header">
        <div class="order-header-left-section">
          <div class="order-date">
            <div class="order-header-label">Order Placed:</div>
            <div class="order-date">${order.orderDate}</div>
          </div>
          <div class="order-total">
            <div class="order-header-label">Total:</div>
            <div>${order.orderPrice}</div>
          </div>
        </div>

        <div class="order-header-right-section">
          <div class="order-header-label">Order ID:</div>
          <div class="js-order-id">${order.orderId}</div>
        </div>
      </div>

      <div class="order-details-grid">
        ${currentOrderCartProductsHTML}
      </div>
    </div>
    `
    orderHistoryHTML += curentOrderHTML;
  });

  document.querySelector('.js-order-grid').innerHTML = orderHistoryHTML;
}


function trackButtonHandler(clickedButton) {
  const productId = clickedButton.dataset.productId;
  const orderId = clickedButton.closest('.js-order-container')
    .querySelector('.js-order-id').textContent.trim();

  window.location.href = `tracking.html?productId=${productId}&orderId=${orderId}`
}

document.querySelectorAll('.js-track-package-button')
  .forEach((button) => {
    button.addEventListener ('click', () => {
      trackButtonHandler(button);
    })
  });