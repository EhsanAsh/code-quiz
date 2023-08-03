// Used(https://www.w3schools.com/js/js_let.asp) as a reference.
// Used(https://www.w3schools.com/js/js_const.asp) as a reference.
// Defining variables
let scoreContainer = document.querySelector("#scoreContainer");
let allScores = document.querySelector("#allScores");
let timerContainer = document.querySelector("#timerContainer");
let timer = document.querySelector(".timer");
let initialMsg = document.querySelector("h1");
let startContainer = document.querySelector(".startContainer");
let startButton = document.getElementById("start");
let timerInterval;
let timeLeft = 80;
let qaContainer = document.querySelector("#qaContainer");
let questionContainer = document.querySelector(".questionContainer");
let questionTxt = document.querySelector("#questionTxt");
let answerContainer = document.querySelector(".answerContainer");
let answerBtn = document.querySelectorAll(".answerBtn");
let answerBtn1 = document.querySelector("#answerBtn1");
let answerBtn2 = document.querySelector("#answerBtn2");
let answerBtn3 = document.querySelector("#answerBtn3");
let answerBtn4 = document.querySelector("#answerBtn4");
let feedbackContainer = document.querySelector(".feedbackContainer");
let feedback = document.querySelector("#feedback");
let currentQuestionIndex = 0; // adding a variable to track current question index
let gameIsOver = false; // adding a variable to track if the game is over
let scoreCounter = 0;
let scoreInputContainer = document.querySelector("#scoreInputContainer");
let scoreTxt = document.querySelector("#scoreTxt");
let scoreSpan = document.querySelector("#scoreSpan");
let initialsContainer = document.querySelector(".initialsContainer");
let initialsInput = document.querySelector("#initialsInput");
let submitContainer = document.querySelector(".submitContainer");
let submitBtn = document.querySelector("#submitBtn");
let highscoresContainer = document.querySelector("#highscoresContainer");
let highscoresTxt = document.querySelector("#highscoresTxt");
let highscoresListContainer = document.querySelector(".highscoresListContainer");
let highscoresList = document.querySelector("#highscoresList");
let highscores = []; // adding a variable to store highscores
let resetBtnsContainer = document.querySelector(".resetBtnsContainer");
let goBackBtn = document.querySelector("#goBackBtn");
let clearBtn = document.querySelector("#clearBtn");

// Hiding elements that are not needed at some point
timerContainer.style.display = "none";
qaContainer.style.display = "none";
scoreInputContainer.style.display = "none";
highscoresContainer.style.display = "none";

//Creating a data structure to store all the questions and answers.
// Used(https://www.w3schools.com/js/js_array_const.asp) as a reference.
const questions = [

  {
    question: "1. What is the correct syntax for referring to an external script called 'xxx.js'?",
    answers: [
      { text: "<script href='xxx.js'>", correct: false },
      { text: "<script name='xxx.js'>", correct: false },
      { text: "<script src='xxx.js'>", correct: true },
      { text: "<script file='xxx.js'>", correct: false },
    ]
  },

  {
    question: "2. How do you write 'Hello World' in an alert box?",
    answers: [
      { text: "alertBox('Hello World');", correct: false },
      { text: "msg('Hello World');", correct: false },
      { text: "msgBox('Hello World');", correct: false },
      { text: "alert('Hello World');", correct: true },
    ]
  },

  {
    question: "3. How do you create a function in JavaScript?",
    answers: [
      { text: "function = myFunction()", correct: false },
      { text: "function:myFunction()", correct: false },
      { text: "function myFunction()", correct: true },
      { text: "function-myFunction()", correct: false },
    ]
  },

  {
    question: "4. How do you call a function named 'myFunction'?",
    answers: [
      { text: "call myFunction()", correct: false },
      { text: "myFunction()", correct: true },
      { text: "call function myFunction()", correct: false },
      { text: "function myFunction()", correct: false },
    ]
  },

  {
    question: "5. How to write an IF statement in JavaScript?",
    answers: [
      { text: "if i = 5 then", correct: false },
      { text: "if i == 5 then", correct: false },
      { text: "if i = 5", correct: false },
      { text: "if (i == 5)", correct: true },
    ]
  },

  {
    question: "6. Which one is the exact syntax of a FOR loop in JavaScript?",
    answers: [
      { text: "for (i = 0; i <= 5) {}", correct: false },
      { text: "for (i <= 5; i++) then:", correct: false },
      { text: "for i = 1 to 5:", correct: false },
      { text: "for (i = 0; i <= 5; i++) {}", correct: true },
    ]
  },

  {
    question: "7. How does a WHILE loop start?",
    answers: [
      { text: "while (i <= 10; i++)", correct: false },
      { text: "while (i <= 10)", correct: true },
      { text: "while i = 1 to 10", correct: false },
      { text: "while i = 1 to 10:", correct: false },
    ]
  },

  {
    question: "8. Which one is the correct Logical Operater?",
    answers: [
      { text: "&&, ||, !", correct: true },
      { text: "and, or, not", correct: false },
      { text: "!", correct: false },
      { text: "&", correct: false },
    ]
  }

];

// Used(https://www.w3schools.com/jsref/met_win_settimeout.asp) as a reference.
const displayFeedback = function (text) {

  feedback.textContent = text;
  feedbackContainer.style.display = "block";

  setTimeout(function () {
    feedbackContainer.style.display = "none";
  }, 1000);

};

// Checking if the time is up
const timesUp = function () { 

  if (timeLeft === 0) {
    clearInterval(timerInterval);
    timer.textContent = "Time's up!";
    gameIsOver = true;
  };

};

// Used(https://www.w3schools.com/js/js_arrays.asp) as a reference.
const displayQuestion = function () {

  if (gameIsOver) return;
  qaContainer.style.display = "block";

  const currentQuestion = questions[currentQuestionIndex];
  questionTxt.textContent = currentQuestion.question;
  answerBtn1.textContent = currentQuestion.answers[0].text;
  answerBtn2.textContent = currentQuestion.answers[1].text;
  answerBtn3.textContent = currentQuestion.answers[2].text;
  answerBtn4.textContent = currentQuestion.answers[3].text;

};

//Displaying the final result of score and time
const displayScore = function () {

  scoreInputContainer.style.display = "block";
  scoreSpan.textContent = scoreCounter;
  timerContainer.style.display = "none";
  qaContainer.style.display = "none";

};

// catching & Displaying highscores
const displayHighscores = function () {

  highscores = JSON.parse(localStorage.getItem("highscores")) || [];

  scoreInputContainer.style.display = "none";
  highscoresContainer.style.display = "block";

  highscoresList.innerHTML = "";

  // iterating through the highscores array and creating a list item for each highscore and displaying it on the page
  for (let i = 0; i < highscores.length; i++) {
    let highscore = highscores[i];
    let li = document.createElement("li");
    li.textContent = `${highscore.initialsInput} - ${highscore.score}`;
    highscoresList.appendChild(li);
  };

};

// View Highscores button event listener
const displayHighscoresView = function (event) {

  event.preventDefault();
  event.stopPropagation();

  startContainer.style.display = "none";
  initialMsg.style.display = "none";
  timerContainer.style.display = "none";
  scoreInputContainer.style.display = "none";
  highscoresContainer.style.display = "block";

  displayHighscores();
  
};

// Here I'm trying to check if the answer is correct or not, and display the feedback accordingly.
// Used (https://www.udemy.com/course/the-web-developer-bootcamp/learn/lecture/22051308#overview) as a reference.
const checkAnswer = function (event) {

  event.preventDefault();
  event.stopPropagation();

  if (gameIsOver || !event.target.matches(".answerBtn")) return;
  
  const currentQuestion = questions[currentQuestionIndex];
  // getting the index of the chosen answer
  const chosenAnswerIndex = event.target.title.replace('answer', '') - 1; 
  const correctAnswer = currentQuestion.answers[chosenAnswerIndex].correct; 

  if (correctAnswer) {

    scoreCounter += 10;
    displayFeedback("Correct!");
  }
  else {
    if (timeLeft > 10) {
      timeLeft -= 10;
    } else {
      timeLeft = 0;
    };

    timesUp();
    displayFeedback("Wrong!");
  };

  currentQuestionIndex++; 

  if (currentQuestionIndex < questions.length && !gameIsOver) {

    displayQuestion(); 
  }
  else { 
    timesUp();
    gameIsOver = true;
    displayScore();

  };
  
};

// Start button event listener linked to the timer
// Used(https://www.w3schools.com/jsref/met_win_setinterval.asp) as a reference.
const fireBtn = function (event) {

  event.preventDefault();
  event.stopPropagation();

  timerContainer.style.display = "block";
  startContainer.style.display = "none";
  initialMsg.style.display = "none";

  const countDown = function () {
    timer.textContent = `Time remaining: ${timeLeft}`;
    timeLeft--;
    timesUp();
  };

  timerInterval = setInterval(countDown, 1000);
  gameIsOver = false;
  displayQuestion();

};

// Start button event listener
startButton.addEventListener("click", fireBtn);

// Answer button event listener
answerContainer.addEventListener("click", checkAnswer);

// View Highscores button event listener
allScores.addEventListener("click", displayHighscoresView);