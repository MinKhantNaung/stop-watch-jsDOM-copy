// stopWatch
const stopWatchTag = document.querySelectorAll(".stopWatch")[0];

// buttons
const startButtonTag = document.querySelectorAll(".startButton")[0];
const pauseButtonTag = document.querySelectorAll(".pauseButton")[0];
const continueButtonTag = document.querySelectorAll(".continueButton")[0];
const restartButtonTag = document.querySelectorAll(".restartButton")[0];

let seconds = 0,
  minutes = 0,
  hours = 0;

const startTime = () => {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
  }
  if (minutes === 60) {
    minutes = 0;
    hours++;
  }

  const secondsText = seconds < 10 ? "0" + seconds : seconds;
  const minutesText = minutes < 10 ? "0" + minutes : minutes;
  const hoursText = hours < 10 ? "0" + hours : hours;

  stopWatchTag.textContent = hoursText + ":" + minutesText + ":" + secondsText;
};

let intervalId;
startButtonTag.addEventListener("click", () => {
  intervalId = setInterval(startTime, 1000);
});

pauseButtonTag.addEventListener("click", () => {
  clearInterval(intervalId);
});

continueButtonTag.addEventListener("click", () => {
  clearInterval(intervalId);
  intervalId = setInterval(startTime, 1000);
});

restartButtonTag.addEventListener("click", () => {
  clearInterval(intervalId);
  (seconds = 0), (minutes = 0), (hours = 0);
  intervalId = setInterval(startTime, 1000);
});
