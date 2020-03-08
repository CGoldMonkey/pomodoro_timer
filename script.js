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
let seconds = minutesToSeconds(sessionDisplay.textContent);
setTimer();

let timerCountdown;

pauseButton.disabled = true;

settingButtons.forEach(button => {
  button.addEventListener('click', (e) => {
    let display = e.target.parentNode.querySelector('.display');
    let currentNumber = parseInt(display.textContent);

    if (e.target.textContent === '+') {
      currentNumber++;
    } else if (currentNumber === 1){
      currentNumber = 1;
    } else {
      currentNumber--;
    }
    display.textContent = currentNumber;
    seconds = minutesToSeconds(sessionDisplay.textContent);
    setTimer();
  })
})

playButton.addEventListener('click', (e) => {
  playButton.disabled = true;
  pauseButton.disabled = false;
  settingButtons.forEach(button => {
    button.disabled = true;
  })
  countdownTimer();
})

pauseButton.addEventListener('click', (e) => {
  pauseButton.disabled = true;
  playButton.disabled = false;
  clearTimeout(timerCountdown);
  seconds++;
})

resetButton.addEventListener('click', (e) => {
  resetInitialSettings();
  
  sessionDisplay.textContent = 25;
  breakDisplay.textContent = 5;

  seconds = minutesToSeconds(sessionDisplay.textContent);
  setTimer()
})

stopButton.addEventListener('click', (e) => {
  resetInitialSettings();
  
  seconds = minutesToSeconds(sessionDisplay.textContent);
  setTimer()
})

function resetInitialSettings() {
  playButton.disabled = false;
  pauseButton.disabled = true;
  enableSettingsButtons();

  clearTimeout(timerCountdown);

  session = true;
  timerBanner.textContent = "Session";
}

function enableSettingsButtons() {
  settingButtons.forEach(button => {
    button.disabled = false;
  })
}

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
  setTimer();
  seconds--;
  timerCountdown = setTimeout(countdownTimer, 1000);
}

function padZero(time) {
  time = time.toString();
  let formattedTime = (time.length < 2) ? "0"+time : time;
  return formattedTime;
}

function minutesToSeconds(minutes){
  return minutes*60;
}

function setTimer() {
  let minutes = Math.floor(seconds/60);
  let remainingSeconds = seconds % 60;

  let timeString = padZero(minutes)+":"+padZero(remainingSeconds);

  timerDisplay.textContent = timeString
}