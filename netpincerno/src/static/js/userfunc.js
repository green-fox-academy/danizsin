'use strict';

const validateUserLogin = (event) => {
  const { loginname, loginpwd, remembercheck } = document.forms[0].elements;
  let rememberMe = 0;
  if (remembercheck.checked) {
    rememberMe = 1;
  }

  const sendObj = {
    loginName: loginname.value,
    loginPwd: loginpwd.value,
    isChecked: rememberMe
  }

  fetch('/login', {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(sendObj)
  })
    .then(resp => resp.json())
    .then(data => {
      if (data.answer == 'success') {
        fetchForms();
        addRegFormValidationEventListener();
      } else {
        const errorDiv = document.querySelector('.errordiv');
        errorDiv.innerText = data.answer;
      }
    })
    .catch(err => console.log(err));
}

const registrateUser = () => {
  const regForm = document.querySelector('.regform');
  const { fullname, username, email, password } = regForm.elements;
  const textBefore = document.querySelector('.firstreglabel');
  fetch('/register', {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      fullname: fullname.value.trim(),
      username: username.value.trim(),
      email: email.value.trim(),
      password: password.value.trim()
    })
  })
    .then(resp => resp.json())
    .then(data => {
      const successText = document.createElement('h3');
      successText.classList.add('modalelem');
      if (data.answer == 'success') {
        successText.innerText = 'Thanks for your registration! Welcome to the club!';
        regForm.reset();
        fullname.classList.remove('valid');
        username.classList.remove('valid');
        email.classList.remove('valid');
        password.classList.remove('valid');
      } else {
        successText.innerText = data.answer;
        successText.classList.add('warnmess');
      }
      if (!document.querySelector('.warnmess')) {
        regForm.insertBefore(successText, textBefore);
        setTimeout(() => {
          regForm.removeChild(successText);
        }, 3000);
      }
    })
    .catch(err => console.log(err));
}

const destroyUserSession = () => {
  fetch('/logout')
    .then(resp => resp.json())
    .then(data => {
      if (data.answer == 'success') {
        fetchForms();
      }
    })
    .catch(err => console.log(err));
}

const validateField = (event) => {
  const trgt = event.target;
  let testRegex;
  if (trgt.value.trim() != "") {
    if (trgt.classList.contains('fullname')) {
      testRegex = /^[a-záéíűúőóüöA-ZÁÍÉŰÚŐÓÜÖ -]*$/;
    } else if (trgt.classList.contains('username')) {
      testRegex = /^[a-zA-Z0-9]{1,45}$/;
    } else if (trgt.classList.contains('email')) {
      testRegex = /^[a-zA-Z0-9.!#$%&'*+=?^_`{|}~-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-]+$/;
    } else if (trgt.classList.contains('password')) {
      testRegex = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])[a-zA-Z0-9]{8,}$/;
    }
    if (testRegex.test(trgt.value.trim())) {
      validInput(trgt);
    } else {
      notValidInput(trgt);
    }
  } else {
    notValidInput(trgt);
  }
}

const notValidInput = (target) => {
  target.classList.remove('notvalid');
  target.classList.remove('valid');
  target.classList.add('notvalid');
}

const validInput = (target) => {
  target.classList.remove('notvalid');
  target.classList.remove('valid');
  target.classList.add('valid');
}

addRegFormValidationEventListener();