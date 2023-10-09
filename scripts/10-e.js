function buttonClick(buttonName) {
  const button = document.querySelector('.js-button' && `.${buttonName}-button`)
  if (button.classList.contains('is-toggled')) {
    button.classList.remove('is-toggled');
  } else {
  button.classList.add('is-toggled');
  };
};