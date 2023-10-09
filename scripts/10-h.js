function calculateTotal(){
  const inputElement = document.querySelector('.js-cost-input');
  let cost = Number(inputElement.value);
  console.log(cost);

  if (cost < 0) {
    document.querySelector('.js-total-cost').innerHTML = 'Error: cost cannot be less than $0';
    document.querySelector('.js-total-cost').classList.add('total-cost-under-zero');
    return;
  }

  if (cost < 40) {
    cost = cost + 10;
  }

  document.querySelector('.js-total-cost').innerHTML = `$${cost}`;
}

function handleCostKeydown (event) {
  if (event.key === 'Enter') {
    calculateTotal();
  }
}