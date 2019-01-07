'use strict';
import { selectQuestions } from './manage.js';

const form = document.forms.questionform;
const newQuestion = form.question;
const answr1 = form.answer1;
const answr2 = form.answer2;
const answr3 = form.answer3;
const answr4 = form.answer4;
const radio = form.answerradio;
const texts = document.querySelectorAll('input[type=text]');

const submitQuestion = (event) => {
  const submitObj = {
    question: newQuestion.value,
    answer1: answr1.value,
    answer2: answr2.value,
    answer3: answr3.value,
    answer4: answr4.value,
    iscorrect: radio.value
  }
  event.preventDefault();
  fetch('/questions', {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(submitObj)
  })
    .then(resp => resp.json())
    .then(data => {
      if (data.answer == 'success') {
        selectQuestions();
        texts.forEach(e => e.value = '');
        radio.forEach(e => e.checked = false);
      }
    })
    .catch(err => console.log(err));
}

form.addEventListener('submit', submitQuestion);