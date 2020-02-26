const settingButtons = document.querySelectorAll('.settings button')

settingButtons.forEach(button => {
  button.addEventListener('click', (e) => {
    let display = e.target.parentNode.querySelector('.display');
    let currentNumber = parseInt(display.textContent);

    if (e.target.textContent === '+') {
      currentNumber++;
    } else {
      currentNumber--;      
    }
    display.textContent = currentNumber;
  })
})
