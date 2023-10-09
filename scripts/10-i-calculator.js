let calculation = localStorage.getItem('calc') || '';
if (calculation) {
  document.querySelector('.js-calculation-line').innerHTML = `${calculation}`;
};

function updateCalculation(button) {
  document.querySelector('.js-calculation-line').innerHTML = `${calculation += button}`;

  localStorage.setItem('calc', calculation);
}
