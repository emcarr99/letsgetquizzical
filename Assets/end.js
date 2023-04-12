const initials = document.getElementById("initials");
const saveScoreBtn = document.getElementById("saveScoreBtn");
const finalScore = document.getElementById("finalScore");
const mostRecentScore = localStorage.getItem("mostRecentScore");
finalScore.innerText = mostRecentScore;

const highScore = JSON.parse(localStorage.getItem("highScore")) || [];
// console.log(JSON.parse(localStorage.getItem('highScores')));
// logs the array that is taken from local storage
console.log(highScore);
const MAX_HIGH_SCORES = 5;

finalScore.innerText = mostRecentScore

initials.addEventListener("keyup", () => {
  // console.log(initials.value); logs what is typed in the form
  saveScoreBtn.disabled = !initials.value;
});

saveHighScore = (e) => {
  e.preventDefault();
  // console.log('clicked save') -> testing save button event

  const score = {
    score: mostRecentScore,
    name: initials.value,
  };
  highScore.push(score);

  // used to create a sorted array
  highScore.sort((a, b) => b.score - a.score);
  // at index 5 cut off everything following it
  highScore.splice(5);

  localStorage.setItem('highScore', JSON.stringify(highScore));
  window.location.assign('/index.html');
}; 
// has GET item instead of SET ite

console.log(highScore);
