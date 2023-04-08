const initials = document.getElementById('initials');
const saveScoreBtn = document.getElementById('saveScoreBtn');
const finalScore = document.getElementById('finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');
finalScore.innerText = mostRecentScore;

initials.addEventListener('keyup', () => {
  // console.log(initials.value); logs what is typed in the form
  saveScoreBtn.disabled = ! initials.value;
})

saveHighScore = (e) => {
  e.preventDefault();
  // console.log('clicked save') -> testing save button event
};