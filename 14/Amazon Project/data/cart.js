export let cart = JSON.parse(localStorage.getItem('cart')) || 
[
  {
    productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
    quantity: 2,
  },
  {
    productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
    quantity: 1,
  }
];

function saveToStorage() {
  localStorage.setItem('cart', JSON.stringify(cart));
}

export function addToCart (productId) {
  const productQuantity = Number(document.querySelector(`.js-quantity-selector-${productId}`).value);

  let matchingItem;

  cart.forEach ((cartItem) => {
    if (productId === cartItem.productId) {
      matchingItem = cartItem;
    }
  });

  if (matchingItem) {
    matchingItem.quantity += productQuantity;
  } else {
    cart.push({
      productId: productId,
      quantity: productQuantity,
    });
  };

  saveToStorage();
}

export function removeFromCart(productId) {
  cart = cart.filter(cartProduct => productId !== cartProduct.productId);

  const container = document.querySelector(`.js-cart-item-container-${productId}`);
  container.remove();
  
  document.querySelector('.js-return-to-home-link-cart-quantity')
    .innerHTML = `${calculateCartQuantity()} items`;

  saveToStorage();
}

export function calculateCartQuantity() {
  let cartQuantity = 0;

  cart.forEach((product) => {
    cartQuantity += product.quantity;
  });
  
  return cartQuantity;
}

export function updateLinkHandler(productId) {
  document.querySelector(`.js-cart-item-container-${productId}`)
    .classList.add('is-editing-quantity');
}

export function updateSaveLinkHandler(productId, newQuantity) {
  document.querySelector(`.js-cart-item-container-${productId}`)
    .classList.remove('is-editing-quantity');

  cart.forEach((product) => {
    if (product.productId === productId) {
      product.quantity = newQuantity;
    }
  });

  document.querySelector('.js-non-valid-quantity-notification').innerHTML = ''

  document.querySelector(`.js-quantity-label-${productId}`)
    .innerHTML = newQuantity;

  document.querySelector('.js-return-to-home-link-cart-quantity')
    .innerHTML = `${calculateCartQuantity()} items`;

  document.querySelector('.js-payment-summary-items').innerHTML = `Items (${calculateCartQuantity()}):`

  saveToStorage()
}

