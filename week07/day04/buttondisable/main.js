const form = document.forms.myform;
const animal = form.favanim;
const facts = form.facts;
const signupbtn = document.querySelector('.signup');
const lovecatsbtn = document.querySelector('.lovecats');
const buttons = document.querySelectorAll('button');
// signupbtn.disabled = 'true';
// lovecatsbtn.disabled = 'true';

form.addEventListener('change', () => {
  if (animal.value === 'dog' || animal.value === 'cat' || (animal.value === 'fish' && facts.value === 'nope')) {
    signupbtn.removeAttribute('disabled');
  } else {
    signupbtn.disabled = 'true';
  }

  if (facts.value === 'yes') {
    lovecatsbtn.removeAttribute('disabled');
  } else {
    lovecatsbtn.disabled = 'true';
  }
});

buttons.forEach(e => {
  e.addEventListener('click', (event) => {
    event.preventDefault();
    if (facts.value === 'nope' && animal.value === 'fish') {
      alert('Sigh, we still added you to the cat facts');
    } else {
      alert('thank you, you successfully signed up for cat facts');
    }
  });
});