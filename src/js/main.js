import './../scss/main.scss';
import 'regenerator-runtime/runtime';
import { getCategories, getQuestions } from './openTrivia';
import {
  populateDropdown,
  showAnswers,
  getCategoryAndDifficulty,
  playGameUi,
  showQuestion,
  shuffleAnswers,
  checkIfCorrectAnswer,
  removeAnswers,
} from './ui';

let currentQuestion = 0;

function initGame() {
  getCategories().then((data) => {
    populateDropdown(data);
  });
}

function playGame() {
  document.querySelector('.btn').addEventListener('click', () => {
    playGameUi();
    getQuestions(
      getCategoryAndDifficulty().id,
      getCategoryAndDifficulty().diff
    ).then((data) => {
      console.log(data);
      showQuestion(data, currentQuestion);
      showAnswers(data, currentQuestion);
      shuffleAnswers();
      checkIfCorrectAnswer(data, currentQuestion);
      nextQuestion(data);
    });
  });
}

function nextQuestion(data) {
  document.querySelector('.quiz__nextBtn').addEventListener('click', () => {
    if (data.results.length - 1 !== currentQuestion) {
      currentQuestion++;
      removeAnswers();
      showQuestion(data, currentQuestion);
      showAnswers(data, currentQuestion);
      shuffleAnswers();
      checkIfCorrectAnswer(data, currentQuestion);
    } else {
      console.log('game is over');
    }
  });
}

initGame();
playGame();
