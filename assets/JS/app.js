
// Defining variables
let scoreContainer = document.querySelector("#scoreContainer");
let score = document.querySelector("#score");
let timerContainer = document.querySelector("#timerContainer");
let timer = document.querySelector(".timer");
let initialMsg = document.querySelector("h1");
let startContainer = document.querySelector(".startContainer");
let startButton = document.getElementById("start");
let timerInterval;
let timeLeft = 80;

// Start button event listener linked to timer
const fireBtn = function (event) {
  event.preventDefault();
  event.stopPropagation();
  startContainer.style.display = "none";
  timerContainer.style.display = "block";
  initialMsg.style.display = "none";
  const countDown = function () {
    timer.textContent = timeLeft;
    timeLeft--;
    if (timeLeft === 0) {
      clearInterval(timerInterval);
      timer.textContent = "Time's up!";
    }
  };
  timerInterval = setInterval(countDown, 1000);
};

startButton.addEventListener("click", fireBtn);