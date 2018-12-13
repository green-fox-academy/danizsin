const form = document.forms.myform;
const animal = form.favanim;
const facts = form.facts;
const signupbtn = document.querySelector('.signup');
const lovecatsbtn = document.querySelector('.lovecats');
const buttons = document.querySelectorAll('button');
const lilfish = document.querySelector('i');
const doggy = document.querySelector('i#doggy');

const removeActiveClass = (btn) => {
  btn.classList.remove('activebtn');
  btn.classList.add('disabledbtn');
  btn.innerHTML = 'DISABLED';
}

const addActiveClass = (btn) => {
  btn.classList.remove('disabledbtn');
  btn.classList.add('activebtn');
  if (btn === signupbtn) {
    btn.innerHTML = 'SIGN UP';
  } else {
    btn.innerHTML = 'I LOVE CATS';
  }
}

removeActiveClass(signupbtn);
removeActiveClass(lovecatsbtn);

const barkDog = () => {
  const audio = document.querySelector('audio');
  audio.play();
}


form.addEventListener('change', () => {
  if (animal.value === 'dog' || animal.value === 'cat' || (animal.value === 'fish' && facts.value === 'nope')) {
    signupbtn.removeAttribute('disabled');
    addActiveClass(signupbtn);
    if (animal.value === 'dog') {
      doggy.classList.add('animateme');
      barkDog();
    }
  } else if (animal.value === 'fish') {
    if (facts.value != 'nope') {
      signupbtn.disabled = 'true';
      removeActiveClass(signupbtn);
    }
    lilfish.classList.add('animateme');
  } else {
    signupbtn.disabled = 'true';
    removeActiveClass(signupbtn);
  }

  if (facts.value === 'yes') {
    lovecatsbtn.removeAttribute('disabled');
    addActiveClass(lovecatsbtn);
  } else {
    lovecatsbtn.disabled = 'true';
    removeActiveClass(lovecatsbtn);
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