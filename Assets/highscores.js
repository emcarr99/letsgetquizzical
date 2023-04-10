const highScoreList = document.getElementById('highScoreList');
const highScore = JSON.parse(localStorage.getItem('highScore')) || [];
// console.log(highScore);

highScoreList.innerHTML = highScore
  .map((score) => {
    // map takes an array of items and makes each of those items something else
    return `<li class="high-score">${score.name} - ${score.score}</li>`;
  })
  .join("");