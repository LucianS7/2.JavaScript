export let orderHistory = JSON.parse(localStorage.getItem('order-history')) || [];


export function placeNewOrder(orderedProducts, totalOrderPrice, deliveryDate) {
  const orderDate = new Date().toLocaleDateString("en-US", {
                                month: "long",
                                day: "numeric"
                              });

  orderHistory.push( {
    orderId: `${Math.random()}-${Date.now()}`,
    orderedProducts: orderedProducts,
    orderDate: orderDate,
    orderPrice: totalOrderPrice,
    orderDeliveryDate: deliveryDate
  });
  saveToStorage();
  window.location = 'orders.html'
}


export function saveToStorage() {
  localStorage.setItem('order-history', JSON.stringify(orderHistory));
}


export function removeFromStorage () {
  localStorage.removeItem('order-history')
}
