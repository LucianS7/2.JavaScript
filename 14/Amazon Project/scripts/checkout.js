import {cart, removeFromCart, calculateCartQuantity, updateSaveLinkHandler, updateLinkHandler} from '../data/cart.js';
import {products} from '../data/products.js';
import {formatCurrency} from './utils/money.js';
import {placeNewOrder} from '../data/orderHistory.js';



renderCheckoutCart();


function renderCheckoutCart () {
  let cartSummaryHTML = '';
  
  cart.forEach((cartItem) => {
    const productId = cartItem.productId;
  
    let matchingProduct;
  
    products.forEach((product) => {
      if (product.id === productId) {
        matchingProduct = product;
      }
    });
  
    cartSummaryHTML +=
    `
    <div class="cart-item-container js-cart-item-container-${matchingProduct.id}">
      <div class="delivery-date">
        Delivery date: Tuesday, June 21
      </div>
  
      <div class="cart-item-details-grid">
        <img class="product-image"
          src=${matchingProduct.image}>
  
        <div class="cart-item-details">
          <div class="product-name">
            ${matchingProduct.name}
          </div>
          <div class="product-price">
            $${formatCurrency(matchingProduct.priceCents)}
          </div>
          <div class="product-quantity">
            <span>
              Quantity: <span class="quantity-label js-quantity-label-${matchingProduct.id}">${cartItem.quantity}</span>
            </span>
            <span class="update-quantity-link link-primary js-update-quantity-link" data-product-id="${matchingProduct.id}">
              Update
            </span>
            <input class="quantity-input js-quantity-input-${matchingProduct.id}">
            <span class="save-quantity-link link-primary js-save-quantity-link" data-product-id="${matchingProduct.id}">Save</span>
            <span class="delete-quantity-link link-primary js-delete-link" data-product-id="${matchingProduct.id}">
              Delete
            </span>
            <div class="non-valid-quantity-notification js-non-valid-quantity-notification"></div>
          </div>
        </div>
  
        <div class="delivery-options">
          <div class="delivery-options-title">
            Choose a delivery option:
          </div>
          <div class="delivery-option">
            <input type="radio" checked
              class="delivery-option-input"
              name="delivery-option-${matchingProduct.id}">
            <div>
              <div class="delivery-option-date">
                Tuesday, October 24
              </div>
              <div class="delivery-option-price">
                FREE Shipping
              </div>
            </div>
          </div>
          <div class="delivery-option">
            <input type="radio"
              class="delivery-option-input"
              name="delivery-option-${matchingProduct.id}">
            <div>
              <div class="delivery-option-date">
                Wednesday, October 18
              </div>
              <div class="delivery-option-price">
                $4.99 - Shipping
              </div>
            </div>
          </div>
          <div class="delivery-option">
            <input type="radio"
              class="delivery-option-input"
              name="delivery-option-${matchingProduct.id}">
            <div>
              <div class="delivery-option-date">
                Monday, October 16
              </div>
              <div class="delivery-option-price">
                $9.99 - Shipping
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    `
  });
  
  document.querySelector('.js-order-summary').innerHTML = cartSummaryHTML;

  document.querySelector('.js-return-to-home-link-cart-quantity')
  .innerHTML = `${calculateCartQuantity()} items`;

  updatePaymentSummary();
}
  

function nonValidQuantityNotification() {
  document.querySelector('.js-non-valid-quantity-notification').innerHTML = 'Non valid quantity. Please re-enter quantity.'
}

  
function updatePaymentSummary() {
  let itemsPriceCents = 0;
  let deliveryCost = 0;
 
  // calcultate the price of cart products and the shipping cost
  cart.forEach((cartItem) => {
    const productId = cartItem.productId;
    const productQuantity = cartItem.quantity;
    
    // calculate price of cart products
    products.forEach((product) => {
      if (product.id === productId) {
        itemsPriceCents += product.priceCents * productQuantity;
      }
    })
    
    //calculate shipping cost 
    const selectedDeliveryOption = document.querySelector(`.delivery-option input[type="radio"]:checked[name="delivery-option-${productId}"]`);
    const deliveryCostString =  selectedDeliveryOption.closest('.delivery-option').querySelector('.delivery-option-price').textContent.trim()
    if (deliveryCostString.toLowerCase() !== 'free shipping') {
      const regexCost = /\d+\.\d{2}/;
      const deliveryCostForItem = parseFloat(deliveryCostString.match(regexCost)[0] * 100);
      if (deliveryCostForItem > deliveryCost) {
        deliveryCost = deliveryCostForItem;
      }
    } 
  })

  // set number of cart items in payment summary
  document.querySelector('.js-payment-summary-items').innerHTML = `Items (${calculateCartQuantity()}):`

  // set price of cart products in payment summary
  document.querySelector('.js-payment-summary-money').innerHTML = `$${formatCurrency (itemsPriceCents)}`;

  // set cost of shipping in payment summary
  document.querySelector('.js-payment-summary-shipping').innerHTML = `$${formatCurrency(deliveryCost)}`;
 
  // calculate and set total price in payment summary
  const subtotalOrderPrice = itemsPriceCents + deliveryCost;
  document.querySelector('.js-subtotal-row').textContent = `$${formatCurrency(subtotalOrderPrice)}`;

  // calculate and set estimated tax in payment summary
  const orderTax = subtotalOrderPrice * 0.1;
  document.querySelector('.js-tax-row').textContent = `$${formatCurrency(orderTax)}`;
  
  // calculate and set estimated total order price in payment summary
  const totalOrderPrice = subtotalOrderPrice + orderTax;
  document.querySelector('.js-total-row').textContent = `$${formatCurrency(totalOrderPrice)}`
}


function modifyItemDeliveryDate(selectorName) {
  const checkedSelector = document.querySelector(`input[type="radio"]:checked[name="${selectorName}"]`);
  const deliveryDate = checkedSelector.closest('.delivery-option').querySelector('.delivery-option-date').textContent;
  checkedSelector.closest('.cart-item-container').querySelector('.delivery-date').textContent = `Delivery date: ${deliveryDate}`;
}


function placeOrderButtonHandler() {
  if (cart) {
    const orderDate = new Date().toLocaleDateString("en-US", {
      month: "long",
      day: "numeric"
    });
    const orderId = `${parseInt(Math.random()*10**12)}-${(Date.now()/10).toFixed(0)}`;
    const totalOrderPrice = document.querySelector('.js-total-row').textContent.trim();
    let order = {
      orderId: orderId,
      orderDate: orderDate,
      orderedProducts: [],
      orderPrice: totalOrderPrice,
    }
    
    cart.forEach((cartProduct) => {
      const selectedDeliveryOption = document.querySelector(`input[type="radio"]:checked[name="delivery-option-${cartProduct.productId}"]`);
      const deliveryDate = selectedDeliveryOption.closest('.delivery-option').querySelector('.delivery-option-date').textContent.trim();
      console.log(deliveryDate)
      order.orderedProducts.push({
        productId: cartProduct.productId,
        quantity: cartProduct.quantity,
        deliveryDate: deliveryDate
      }) 
    })

    placeNewOrder(order);

    cart.forEach ((cartProduct) => {
      removeFromCart(cartProduct.productId);
    })
  }
}


document.querySelectorAll('.delivery-option input[type="radio"]')
  .forEach ((selector) => {
    const selectorName = selector.name;
    selector.addEventListener('change', () => {
      updatePaymentSummary();
      modifyItemDeliveryDate(selectorName);
    })
  });


document.querySelectorAll('.js-delete-link')
  .forEach((link) => {
    link.addEventListener('click', () => {
      const productId = link.dataset.productId;
      removeFromCart(productId);
      updatePaymentSummary();
    });
  });


document.querySelectorAll('.js-update-quantity-link')
  .forEach((link) => {
    link.addEventListener('click', () => {
      const productId = link.dataset.productId;
      updateLinkHandler(productId);
    });
  });

  
document.querySelectorAll('.js-save-quantity-link')
  .forEach((link) => {
    link.addEventListener('click', () => {
      const productId = link.dataset.productId;
      const newQuantity = Number(document.querySelector(`.js-quantity-input-${productId}`).value)
      if (0<= newQuantity && newQuantity < 1000) {
        updateSaveLinkHandler(productId, newQuantity);
        updatePaymentSummary();
      } else {
        nonValidQuantityNotification();
      }
    });
  });


document.querySelector('.js-place-order-button')
  .addEventListener('click', placeOrderButtonHandler);