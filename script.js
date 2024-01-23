const menubar = document.querySelector('.ham-brg');

menubar.addEventListener('click', function () {

  const buttonElement = document.querySelector('.button');
  // Check the current display property
  const currentDisplay = window.getComputedStyle(buttonElement).getPropertyValue('display');

  // Toggle the display property
  buttonElement.style.display = currentDisplay === 'none' ? 'flex' : 'none';

});
