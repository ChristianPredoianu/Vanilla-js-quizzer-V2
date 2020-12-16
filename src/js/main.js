import './../scss/main.scss';
import 'regenerator-runtime/runtime';
import { getCategories, getQuestions } from './openTrivia';
import {
  populateDropdown,
  showAnswers,
  getCategoryAndDifficulty,
  initGameUi,
  countdown,
  showQuestion,
  shuffleAnswers,
  checkIfCorrectAnswer,
  removeQuestion,
  gameOver,
  showPlayersScore,
} from './ui';

let currentQuestion = 0;

function initGame() {
  getCategories().then((data) => {
    populateDropdown(data);
  });
  document.querySelector('.btn').addEventListener('click', () => {
    const selectedOptions = getCategoryAndDifficulty();

    initGameUi();
    getQuestions(selectedOptions).then((data) => {
      console.log(data);
      playGame(data, currentQuestion);
      nextQuestion(data);
    });
  });
}

function nextQuestion(data) {
  document.querySelector('.quiz__nextBtn').addEventListener('click', () => {
    document.querySelector('.quiz__nextBtn').classList.add('disabled');
    if (data.results.length - 1 !== currentQuestion) {
      currentQuestion++;
      removeQuestion();
      playGame(data, currentQuestion);
    } else {
      gameOver();
      showPlayersScore();
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
initGame();
