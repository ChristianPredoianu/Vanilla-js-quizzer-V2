const selectCategories = document.querySelector('#category'),
  selectDifficulty = document.querySelector('#difficulty'),
  containerCta = document.querySelector('.container-cta'),
  glowSign = document.querySelector('.glow-sign'),
  quizContainer = document.querySelector('.container-quiz'),
  quizCurrentQuestion = document.querySelector('.quiz__current-question'),
  quizCategory = document.querySelector('.quiz__category'),
  loader = document.querySelector('.quiz__loader'),
  question = document.querySelector('.quiz__question'),
  count = document.querySelector('.countdown__count'),
  answersList = document.querySelector('.quiz__list');

let points = 0;
let userHasAnswered = false;

//Populate dropdown with categories from API
export function populateDropdown(data) {
  data.trivia_categories.forEach((category) => {
    const option = document.createElement('option');
    option.value = category.id;
    option.textContent = category.name;
    selectCategories.appendChild(option);
  });
}

//Get categories and difficulty from option values
export function getCategoryAndDifficulty() {
  return {
    id: selectCategories.value,
    diff: selectDifficulty.value,
  };
}

//Init game UI
export function initGameUi() {
  quizContainer.style.display = 'flex';
  containerCta.style.display = 'none';
  glowSign.style.display = 'none';
  count.style.display = 'flex';
  document.querySelector('.quiz').style.display = 'flex';
  document.querySelector('.quiz__nextBtn').style.display = 'none';
}

//Show the current question
export function showQuestion(data, currentQuestion) {
  loader.style.display = 'none';
  document.querySelector('.quiz__nextBtn').style.display = 'block';
  quizCurrentQuestion.style.display = 'block';
  quizCurrentQuestion.textContent = `Question ${currentQuestion + 1} / 10`;
  quizCategory.textContent =
    selectCategories.options[selectCategories.selectedIndex].text;
  question.textContent = atob(data.results[currentQuestion].question);
}

//Show the current answers for the curent question
export function showAnswers(data, currentQuestion) {
  const answer = document.createElement('li');
  answer.classList.add('quiz__list-item');
  answersList.appendChild(answer);
  answer.textContent = atob(data.results[currentQuestion].correct_answer);
  data.results[currentQuestion].incorrect_answers.forEach((incorrAnswer) => {
    const incorrectAnswer = document.createElement('li');
    incorrectAnswer.classList.add('quiz__list-item');
    answersList.appendChild(incorrectAnswer);
    incorrectAnswer.textContent = atob(incorrAnswer);
  });
}

//Shuffle the position of the lis
export function shuffleAnswers() {
  for (let i = answersList.children.length; i >= 0; i--) {
    answersList.appendChild(answersList.children[(Math.random() * i) | 0]);
  }
}

//Check if the user answered correct or wrong. atob() to decode base64 encoding from opentrivia api
export function checkIfCorrectAnswer(data, currentQuestion) {
  document.querySelectorAll('li').forEach((li) => {
    li.addEventListener('click', (e) => {
      if (
        e.target.textContent ===
        atob(data.results[currentQuestion].correct_answer)
      ) {
        e.target.classList.add('correct-answer');
        e.target.parentElement.classList.add('disabled');
        document.querySelector('.quiz__nextBtn').classList.remove('disabled');
        points++;
        userHasAnswered = true;
      } else {
        e.target.classList.add('incorrect-answer');
        e.target.parentElement.classList.add('disabled');
        showCorrectAnswer(data, currentQuestion);
        document.querySelector('.quiz__nextBtn').classList.remove('disabled');
        userHasAnswered = true;
      }
    });
  });
}

//Show user the correct answer
function showCorrectAnswer(data, currentQuestion) {
  document.querySelectorAll('li').forEach((li) => {
    if (li.textContent === atob(data.results[currentQuestion].correct_answer)) {
      li.classList.add('correct-answer');
    }
  });
}

//Remove the question and answers
export function removeQuestion() {
  loader.style.display = 'block';
  quizCurrentQuestion.style.display = 'none';
  question.textContent = '';
  document.querySelectorAll('li').forEach((li) => {
    li.remove();
  });
  answersList.classList.remove('disabled');
  document.querySelector('.quiz__nextBtn').style.display = 'none';
}

//Countdown - 15s for user to answer - If time runs out show correct answer to user
export function countdown(data, currentQuestion) {
  userHasAnswered = false;
  clearInterval(timer);
  let counter = 15;
  count.textContent = counter;
  count.style.color = '#02ff17';
  const timer = setInterval(() => {
    counter--;

    if (counter >= 0) {
      count.textContent = counter;
      if (userHasAnswered) {
        clearInterval(timer);
      }
    }

    if (counter <= 5) {
      count.style.color = '#ff0202';
    }

    if (counter === 0) {
      showCorrectAnswer(data, currentQuestion);
      document.querySelectorAll('li').forEach((li) => {
        li.classList.add('disabled');
      });
      document.querySelector('.quiz__nextBtn').classList.remove('disabled');
      clearInterval(timer);
      userHasAnswered = true;
    }
  }, 1000);
}

//Game over
export function gameOver() {
  document.querySelector('.quiz').style.display = 'none';
  count.style.display = 'none';
  document.querySelector('.quiz__nextBtn').style.display = 'none';
  document.querySelector('.quiz').style.display = 'none';
  document.querySelector('.game-over').style.display = 'flex';
}

//Show the user it's score
export function showPlayersScore() {
  document.querySelector(
    '.game-over__score'
  ).textContent = `The game is over! Your score is: ${points} / 10`;
}

//Reset the UI
export function resetUi() {
  document.querySelector('.game-over').style.display = 'none';
  quizContainer.style.display = 'none';
  containerCta.style.display = 'block';
  glowSign.style.display = 'flex';
  count.textContent = '';
  quizCurrentQuestion.textContent = '';
  quizCategory.textContent = '';
  points = 0;
}
