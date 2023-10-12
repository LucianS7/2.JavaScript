export const cart = [];

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
}