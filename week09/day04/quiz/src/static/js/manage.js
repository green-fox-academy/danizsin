'use strict';
const questionContainer = document.querySelector('.questioncont');

export const selectQuestions = () => {
  while (questionContainer.firstChild) {
    questionContainer.removeChild(questionContainer.firstChild);
  }
  fetch('/listquestions')
    .then(resp => resp.json())
    .then(data => {
      data.forEach(question => {
        const oneQuestion = document.createElement('div');
        oneQuestion.className = 'onequestion';
        const questionText = document.createElement('p');
        questionText.className = 'questiontext';
        questionText.innerText = question.question;
        const questionDelete = document.createElement('p');
        questionDelete.className = 'questiondelete';
        questionDelete.innerText = 'delete';
        questionDelete.setAttribute('data-qid', question.id);

        oneQuestion.appendChild(questionText);
        oneQuestion.appendChild(questionDelete);
        questionContainer.appendChild(oneQuestion);
      });
    })
    .catch(err => console.log(err));
}

const deleteQuestion = (event) => {
  const btn = event.target;
  if (btn.className == 'questiondelete') {
    fetch(`/questions/${btn.getAttribute('data-qid')}`, {
      method: 'DELETE',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(resp => resp.json())
      .then((data) => {
        if (data.answer == 'success') {
          selectQuestions();
        } else {
          console.log(data.answer);
        }
      })
      .catch(err => console.log(err));
  }
}

questionContainer.addEventListener('click', deleteQuestion);

selectQuestions();