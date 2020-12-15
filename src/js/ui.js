const selectCategories = document.querySelector('#category'),
  selectDifficulty = document.querySelector('#difficulty'),
  containerCta = document.querySelector('.container-cta'),
  glowSign = document.querySelector('.glow-sign'),
  countdownDiv = document.querySelector('.countdown'),
  quizContainer = document.querySelector('.container-quiz'),
  question = document.querySelector('.quiz__question'),
  answersList = document.querySelector('.quiz__list');

//Populate dropdown with categories from API
export function populateDropdown(data) {
  console.log(selectCategories);
  data.trivia_categories.forEach((category) => {
    const option = document.createElement('option');
    option.value = category.id;
    option.textContent = category.name;
    selectCategories.appendChild(option);
  });
}

export const getCategoryAndDifficulty = {
  id: selectCategories.value,
  diff: selectDifficulty.value,
};

export function playGameUi() {
  containerCta.style.display = 'none';
  glowSign.style.display = 'none';
  quizContainer.style.display = 'flex';
}

export function showQuestion(data, currentQuestion) {
  question.textContent = data.results[currentQuestion].question;
}

export function showAnswers(data, currentQuestion) {
  console.log(data.results[currentQuestion].incorrect_answers);
  const answer = document.createElement('li');
  answer.classList.add('quiz__list-item');
  answersList.appendChild(answer);
  answer.textContent = data.results[currentQuestion].correct_answer;
  data.results[currentQuestion].incorrect_answers.forEach((incorrAnswer) => {
    const incorrectAnswer = document.createElement('li');
    incorrectAnswer.classList.add('quiz__list-item');
    answersList.appendChild(incorrectAnswer);
    incorrectAnswer.textContent = incorrAnswer;
  });
}

export function shuffleAnswers() {
  for (let i = answersList.children.length; i >= 0; i--) {
    answersList.appendChild(answersList.children[(Math.random() * i) | 0]);
  }
}

export function checkIfCorrectAnswer(data, currentQuestion) {
  document.querySelectorAll('li').forEach((li) => {
    li.addEventListener('click', (e) => {
      console.log(e.target);
      console.log(data.results[currentQuestion].correct_answer);

      if (
        e.target.textContent === data.results[currentQuestion].correct_answer
      ) {
        e.target.classList.add('correct-answer');
        e.target.parentElement.classList.add('disabled');
        document.querySelector('.quiz__nextBtn').classList.remove('disabled');
      }
      if (countdownDiv.textContent === '0') {
        showCorrectAnswer(data, currentQuestion);
      } else {
        e.target.classList.add('incorrect-answer');
        e.target.parentElement.classList.add('disabled');
        showCorrectAnswer(data, currentQuestion);
        document.querySelector('.quiz__nextBtn').classList.remove('disabled');
      }
    });
  });
}

function showCorrectAnswer(data, currentQuestion) {
  document.querySelectorAll('li').forEach((li) => {
    if (li.textContent === data.results[currentQuestion].correct_answer) {
      li.classList.add('correct-answer');
    }
  });
}

export function removeAnswers() {
  document.querySelectorAll('li').forEach((li) => {
    li.remove();
  });
  answersList.classList.remove('disabled');
}

export function countdown(data, currentQuestion) {
  let counter = 10;
  setInterval(function () {
    counter--;

    if (counter >= 0) {
      countdownDiv.textContent = counter;
    }
    if (counter === 0) {
      showCorrectAnswer(data, currentQuestion);
      document.querySelector('.quiz__nextBtn').classList.remove('disabled');
    }
  }, 1000);
}
