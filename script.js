const sessionButtons = document.querySelectorAll('#session button');
const sessionDisplay = document.querySelector('#session span')
const breakButtons = document.querySelectorAll('#break button');
const breakDisplay = document.querySelector('#break span')

const settingButtons = document.querySelectorAll('.settings button')

sessionDisplay.textContent = '25';
breakDisplay.textContent = '5';


sessionButtons.forEach(button => {
  button.addEventListener('click', (e) => {
    console.log(e)
    console.log(e.target)
    console.log(e.target.parentNode.id)
    if (e.target.parentNode.id === 'session') {
      console.log('Parent Here')
    }
    let currentNumber = parseInt(sessionDisplay.textContent);
    if (e.target.textContent === '+') {
      currentNumber++
      sessionDisplay.textContent = currentNumber;
    } else {
      currentNumber--
      sessionDisplay.textContent = currentNumber;
    }
  })
})
//all the function needs is the display and button to be passed to it
//, the
breakButtons.forEach(button => {
  button.addEventListener('click', (e) => {
    let currentNumber = parseInt(breakDisplay.textContent);
    if (e.target.textContent === '+') {
      currentNumber++;
      breakDisplay.textContent = currentNumber;
    } else {
      currentNumber--;
      breakDisplay.textContent = currentNumber;
    }
  })
})