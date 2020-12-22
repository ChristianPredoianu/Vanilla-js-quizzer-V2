import './../scss/main.scss';
import 'regenerator-runtime/runtime';
import { getCategories, getQuestions } from './openTrivia';
import {
  populateDropdown,
  getCategoryAndDifficulty,
  showAnswers,
  initGameUi,
  countdown,
  showQuestion,
  shuffleAnswers,
  checkIfCorrectAnswer,
  removeQuestion,
  gameOver,
  showPlayersScore,
  resetUi,
} from './ui';

let currentQuestion = 0;
let gameIsPlaying = false;

function initGame() {
  getCategories().then((data) => {
    populateDropdown(data);
  });
  document.querySelector('.btn').addEventListener('click', () => {
    gameIsPlaying = true;
    const selectedOptions = getCategoryAndDifficulty();

    initGameUi();
    getQuestions(selectedOptions).then((data) => {
      console.log(data);
      playGame(data, currentQuestion);
      nextQuestion(data);
    });
  });
}

/* Next question -- Use function handler() on addEventListener instead of () => to have access to the this keyword 
so that we can run the eventListener once (remove the eventListener when the game is over) -- otherwise it will run 
twice or more when resetting the game depending on how many game resets
*/
function nextQuestion(data) {
  document
    .querySelector('.quiz__nextBtn')
    .addEventListener('click', function handler() {
      document.querySelector('.quiz__nextBtn').classList.add('disabled');
      if (data.results.length - 1 !== currentQuestion) {
        currentQuestion++;
        removeQuestion();
        playGame(data, currentQuestion);
        console.log('data-length' + data.results.length);
      } else {
        gameOver();
        showPlayersScore();
        this.removeEventListener('click', handler);
      }
    });
}

function playGame(data, currentQuestion) {
  countdown(data, currentQuestion);
  setTimeout(() => {
    showQuestion(data, currentQuestion);
    showAnswers(data, currentQuestion);
    shuffleAnswers();
    checkIfCorrectAnswer(data, currentQuestion);
  }, 1200);
}

function resetGame() {
  document.querySelector('.game-over__btn').addEventListener('click', () => {
    currentQuestion = 0;
    removeQuestion();
    resetUi();
  });
}

initGame();
resetGame();
