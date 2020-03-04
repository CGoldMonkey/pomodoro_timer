const settingButtons = document.querySelectorAll('.settings button');
const playButton = document.querySelector('#play');
const pauseButton = document.querySelector('#pause');
const resetButton = document.querySelector('#reset');
const stopButton = document.querySelector('#stop')

const sessionDisplay = document.querySelector('#session .display');
const breakDisplay = document.querySelector('#break .display');
const timerDisplay = document.querySelector('#clock');

const timerBanner = document.querySelector('#timer h2');

let session = true;

let seconds;
let timeout;

setTimer(timeString(minutesToSeconds(sessionDisplay.textContent)))

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

    seconds = minutesToSeconds(sessionDisplay.textContent);

 //   let sessionMinutes = sessionDisplay.textContent;
    //timerDisplay.textContent = timeString(minutesToSeconds(sessionMinutes));

    setTimer(timeString(seconds));
//    console.log(sessionDisplay.textContent.length)
  })
})

playButton.addEventListener('click', (e) => {
  playButton.disabled = true;
  pauseButton.disabled = false;
  //seconds = minutesToSeconds(sessionDisplay.textContent);
  countdownTimer();
})

pauseButton.addEventListener('click', (e) => {
  pauseButton.disabled = true;
  playButton.disabled = false;
  clearTimeout(timeout);
  seconds++;
})

function switchTimer() {
  if (session) {
    session = false;
    timerBanner.textContent = "Break";
    seconds = minutesToSeconds(breakDisplay.textContent);
  } else {
    session = true;
    timerBanner.textContent = "Session";
    seconds = minutesToSeconds(sessionDisplay.textContent);
  }
}

function countdownTimer() {
  if (seconds < 0) {
    switchTimer();
  }
  setTimer(timeString(seconds));
  seconds--;
  timeout = setTimeout(countdownTimer, 1000);
}

function padZero(time) {
  time = time.toString();
  let formattedTime = (time.length < 2) ? "0"+time : time;
  return formattedTime;
}

function timeString(timeInSeconds) {
  let minutes = Math.floor(timeInSeconds/60);
  let remainingSeconds = timeInSeconds % 60;

  let string = padZero(minutes)+":"+padZero(remainingSeconds);
  return string;
}

function minutesToSeconds(minutes){
  return minutes*60;
}

function setTimer(newTime) {
  timerDisplay.textContent = newTime
}
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