import './../scss/main.scss';
import 'regenerator-runtime/runtime';
import { getCategories, getQuestions } from './openTrivia';
import * as ui from './ui';

let currentQuestion = 0;

//Init game
function initGame() {
  getCategories().then((data) => {
    ui.populateDropdown(data);
  });
}

//Start game
function startGame() {
  document.querySelector('.start-btn').addEventListener('click', () => {
    const selectedOptions = ui.getCategoryAndDifficulty();

    getQuestions(selectedOptions).then((data) => {
      //If no questions avaliable from API
      if (data.response_code === 1) {
        ui.showErrorMsg();
      } else {
        ui.initGameUi();
        playGame(data, currentQuestion);
        nextQuestion(data);
      }
    });
  });
}

//Play game
function playGame(data, currentQuestion) {
  setTimeout(() => {
    ui.countdown(data, currentQuestion);
  }, 1000);
  setTimeout(() => {
    ui.showQuestion(data, currentQuestion);
    ui.showAnswers(data, currentQuestion);
    ui.shuffleAnswers();
    ui.checkIfCorrectAnswer(data, currentQuestion);
  }, 2000);
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
        ui.removeQuestion();
        playGame(data, currentQuestion);
      } else {
        ui.gameOver();
        ui.showPlayersScore();
        this.removeEventListener('click', handler);
      }
    });
}

//Reset game
function resetGame() {
  document.querySelector('.game-over__btn').addEventListener('click', () => {
    currentQuestion = 0;
    ui.removeQuestion();
    ui.resetUi();
  });
}

initGame();
startGame();
resetGame();
