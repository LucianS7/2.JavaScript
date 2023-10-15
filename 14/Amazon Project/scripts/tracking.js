import { orderHistory } from "../data/orderHistory.js";
import { products } from "../data/products.js";


renderProductTracking ();


function getUrlParameters(name) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name)
}


function renderProductTracking() {
  let productTrackingHTML = '';
  let matchingOrder;
  let matchingProduct;
  const productId = getUrlParameters('productId');
  const orderId = getUrlParameters('orderId');

  products.forEach((product) => {
    if (product.id === productId) {
      matchingProduct = product;
    }
  })

  orderHistory.forEach((order) => {
    if (order.orderId === orderId) {
      matchingOrder = order;
      order.orderedProducts.forEach((orderedProduct) => {
        if (orderedProduct.productId === productId) {
          matchingProduct.deliveryDate = orderedProduct.deliveryDate;
          matchingProduct.quantity = orderedProduct.quantity;
        }
      })
    }
  })

  productTrackingHTML = `
  <div class="order-tracking">
    <a class="back-to-orders-link link-primary" href="orders.html">
      View all orders
    </a>

    <div class="delivery-date">
      Arriving on ${matchingProduct.deliveryDate}
    </div>

    <div class="product-info">
      ${matchingProduct.name}
    </div>

    <div class="product-info">
      Quantity: ${matchingProduct.quantity}
    </div>

    <img class="product-image" src=${matchingProduct.image}>

    <div class="progress-labels-container">
      <div class="progress-label">
        Preparing
      </div>
      <div class="progress-label current-status">
        Shipped
      </div>
      <div class="progress-label">
        Delivered
      </div>
    </div>

    <div class="progress-bar-container">
      <div class="progress-bar"></div>
    </div>
  </div>
  `
  document.querySelector('.js-main').innerHTML = productTrackingHTML;
}

