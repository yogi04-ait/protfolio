const btnElem = document.querySelector('.button');

document.querySelector('.ham-brg').addEventListener('click', function(){
    const currentDisplay = window.getComputedStyle(btnElem).getPropertyValue('display');
    btnElem.style.display = currentDisplay === 'none' ? 'flex' : 'none';
})



// Function to be executed when screen width is equal or above 760 pixels
function executeOnScreenWidth760OrAbove() {
    btnElem.style.display = 'block';
    // Example: Change the background color of the body
  }

function executeOnScreenWidth760below(){
    btnElem.style.display = 'flex';
    btnElem.style.display = 'none';

}
  
  // Check screen width when the page loads
  window.addEventListener('load', function () {
    const screenWidth = window.innerWidth;
  
    // Check if the screen width is equal to or above 760 pixels
    if (screenWidth >= 760) {
      executeOnScreenWidth760OrAbove();
    }

    if(screenWidth < 760){
        executeOnScreenWidth760below();
    }
  });
  
  // Check screen width whenever the window is resized
  window.addEventListener('resize', function () {
    const screenWidth = window.innerWidth;
  
    // Check if the screen width is equal to or above 760 pixels
    if (screenWidth >= 760) {
      executeOnScreenWidth760OrAbove();
    }
    if(screenWidth < 760){
        executeOnScreenWidth760below();
    }
  });
  



  
