export let cart = JSON.parse(localStorage.getItem('cart')) || 
[
  {
    productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
    name: "Black and Gray Athletic Cotton Socks - 6 Pairs",
    quantity: 2 
  },
  {
    productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
    name: "Intermediate Size Basketball",
    quantity: 1
  }
];

function saveToStorage() {
  localStorage.setItem('cart', JSON.stringify(cart));
}

export function addToCart (productId, productName) {
  let matchingItem;

  cart.forEach ((cartItem) => {
    if (productId === cartItem.productId) {
      matchingItem = cartItem;
    }
  });

  if (matchingItem) {
    matchingItem.quantity += 1;
  } else {
    cart.push({
      productId: productId,
      productName: productName,
      quantity: 1
    });
  };

  saveToStorage();
}

export function removeFromCart(productId) {
  cart = cart.filter(cartProduct => productId !== cartProduct.productId);

  saveToStorage();
}