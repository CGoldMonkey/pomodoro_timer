const settingButtons = document.querySelectorAll('.settings button');
const playButton = document.querySelector('#play');
const pauseButton = document.querySelector('#pause');
const resetButton = document.querySelector('#reset');

const sessionDisplay = document.querySelector('#session .display');
const breakDisplay = document.querySelector('#break .display');
const timerDisplay = document.querySelector('#clock');

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
    
    timerDisplay.textContent = sessionDisplay.textContent;
  })
})

playButton.addEventListener('click', (e) => {
  
})
/*
class Timer
  #write your code here
  attr_accessor :seconds

  def initialize
    @seconds = 0
  end

  def time_string
    hours = @seconds/3600
    remaing_seconds = @seconds - (hours * 3600)
    minutes = remaing_seconds/60
    remaing_seconds = remaing_seconds - (minutes * 60)
    second = remaing_seconds%60

    string = "%02d:%02d:%02d"% [hours, minutes, second]
    return string
  end
end
*/