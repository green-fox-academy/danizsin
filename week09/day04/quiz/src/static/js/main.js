'use strict';
const gameBoard = document.querySelector('.gameboard');
let counter = 0;
const score = document.querySelector('.score');

const answerClicked = (event) => {
  const btn = event.target;
  if (btn.classList.contains('answerbutton')) {
    gameBoard.removeEventListener('click', answerClicked);
    if (btn.getAttribute('data-iscorrect') == 1) {
      btn.style.backgroundColor = '#27AE60';
      ++counter;
      score.innerHTML = counter;
    } else {
      btn.style.backgroundColor = 'rgb(240, 80, 80)';
    }
    setTimeout(fetchQuestion, 1500);
  }
}

const renderQuestion = (data) => {
  while (gameBoard.firstChild) {
    gameBoard.removeChild(gameBoard.firstChild);
  }
  const question = document.createElement('p');
  question.innerText = data.question;
  question.className = 'quizquestion';
  gameBoard.appendChild(question);

  data.answers.forEach(answr => {
    const answerButton = document.createElement('p');
    answerButton.className = 'answerbutton';
    answerButton.setAttribute('data-iscorrect', answr.is_correct);
    answerButton.innerText = answr.answer;
    gameBoard.appendChild(answerButton);
  });

  gameBoard.addEventListener('click', answerClicked);
}

const fetchQuestion = () => {
  fetch('/game')
    .then(resp => resp.json())
    .then(data => {
      renderQuestion(data);
    })
    .catch(err => console.log(err));
}

gameBoard.addEventListener('click', answerClicked);

fetchQuestion();