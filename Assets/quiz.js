console.log("hello world from game");
// testing connection
const question = document.getElementById("question");
// changing to an array
const choices = Array.from(document.getElementsByClassName("choice-text"));
console.log(choices);
// shows up as an HTML collection in console
const progressCounterText = document.getElementById("progressText");
const scoreText = document.getElementById("score");
const progressBarFull = document.getElementById("progressBarFull");
const countdown = document.getElementById("timerCount");
let timer = 0;
let timerCount = 120;
let interval = setInterval(startTime, 1000);
let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionsCounter = 0;
let availableQuestions = [];
// array of all the questions
let questions = [];
// cleaner to pull from json than to have a giant array of questions
fetch("questions.json")
  .then((res) => {
    return res.json();
  })
  .then((loadedQuestions) => {
    questions = loadedQuestions;
    startGame();
  })
  // will show if file name is mistyped
  // if something returns a promise, it's recommended to also do catch
  .catch((err) => {
    console.error(err);
  });
// create constants
const CORRECT_BONUS = 1;
const MAX_QUESTIONS = 10;

startGame = () => {
  timerCount = 120;
  questionsCounter = 0;
  score = 0;
  availableQuestions = [...questions];
  // using spread to copy in the questions array
  console.log(availableQuestions);
  // logged availableQuestions as the questions array -> once startGame is called
  startTime();
  getNewQuestion();
};
// timer function -> clear interval to stop timer from counting into the negatives
function startTime() {
  timer++;
  countdown.innerHTML = convertSeconds(timerCount - timer);

  if (timer == timerCount) {
    clearInterval(interval);

    pleaseWork();
  }
}
// redirects player if timer ends before the questions do
function pleaseWork() {
  return window.location.assign("https://emcarr99.github.io/letsgetquizzical/end.html");
}

getNewQuestion = () => {
  if (availableQuestions.length === 0 || timerCount === 0) {
    localStorage.setItem("mostRecentScore", score);
    // go to end page
    return window.location.assign("/end.html");
  }
  questionsCounter++;
  progressText.innerText = "Question " + questionsCounter + "/" + MAX_QUESTIONS;
  // update progress
  progressBarFull.style.width = `${(questionsCounter / MAX_QUESTIONS) * 100}%`;

  const questionIndex = Math.floor(Math.random() * availableQuestions.length);
  currentQuestion = availableQuestions[questionIndex];
  question.innerText = currentQuestion.question;

  choices.forEach((choice) => {
    const number = choice.dataset["number"];
    choice.innerText = currentQuestion["choice" + number];
  });

  availableQuestions.splice(questionIndex, 1);

  acceptingAnswers = true;
};

choices.forEach((choice) => {
  choice.addEventListener("click", (e) => {
    // console.log(e.target); <- checked that it was bringing up the answer clicked on
    if (!acceptingAnswers) return;

    acceptingAnswers = false;
    const selectChoice = e.target;
    const selectAnswer = selectChoice.dataset["number"];

    // had to change to let so that it would allow it to change between right and wrong
    let classToApply = "incorrect";
    if (selectAnswer == currentQuestion.answer) {
      classToApply = "correct";
    }
    // console.log(classToApply); <- used to catch the syntax error of above & to test if it was logging 'correct'/'true' || 'incorrect'/'false'
    if (classToApply == "correct") {
      incrementScore(CORRECT_BONUS);
    }
    //  penalizes player if they get the question wrong by 5 seconds
    if (classToApply == "incorrect") {
      timerCount -= 5;
    }

    selectChoice.parentElement.classList.add(classToApply);
    // .add is how to add classes in javascript
    setTimeout(() => {
      selectChoice.parentElement.classList.remove(classToApply);
    // .remove to remove class in javascript
    getNewQuestion();
    }, 1000);

    console.log(selectAnswer == currentQuestion.answer);
    // checks if the selected answer was the 'right' one
  });
});

incrementScore = (num) => {
  score += num;
  scoreText.innerText = score;
};

// helps w visual of timer
function convertSeconds(s) {
  var min = Math.floor(s / 60);
  var sec = s % 60;
  return min + ":" + sec;
}
