export let orderHistory = JSON.parse(localStorage.getItem('order-history')) || [];

/* orderHistory object examople
let order = {
  orderId: "12584632186-12589642321",
  orderDate: "June, 10",
  orderedProducts: [
    {
    productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
    quantity: 2,
    deliveryDate: "Friday, June 21"
    }
  ],
  orderPrice: "$34.87",
}
*/


export function placeNewOrder(order) {
  orderHistory.push(order);
  saveToStorage();
  window.location.href = 'orders.html'
}


export function saveToStorage() {
  localStorage.setItem('order-history', JSON.stringify(orderHistory));
}


function removeFromStorage () {
  localStorage.removeItem('order-history')
}
