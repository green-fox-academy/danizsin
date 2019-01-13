'use strict';

const setupLoginModal = () => {
  const body = document.body;
  const modal = document.createElement('div');
  modal.classList.add('basemodal');

  const modalContainer = document.createElement('div');
  modalContainer.classList.add('modalcontainer');
  modalContainer.classList.add('modalelem');

  const modalHeader = document.createElement('nav');
  modalHeader.classList.add('modalheader');
  modalHeader.classList.add('modalelem');

  const loginTitle = document.createElement('p');
  loginTitle.classList.add('modaltitle');
  loginTitle.classList.add('modalelem');
  loginTitle.classList.add('logintitle');
  loginTitle.classList.add('activetitle');
  loginTitle.innerText = 'Sign in';
  const regTitle = document.createElement('p');
  regTitle.classList.add('modaltitle');
  regTitle.classList.add('modalelem');
  regTitle.classList.add('regtitle');
  regTitle.innerText = 'Register';

  const formContainer = document.createElement('div');
  formContainer.classList.add('formcontainer');
  formContainer.classList.add('modalelem');

  modalHeader.appendChild(loginTitle);
  modalHeader.appendChild(regTitle);
  modalContainer.appendChild(modalHeader);
  modalContainer.appendChild(formContainer);
  modal.appendChild(modalContainer);
  body.appendChild(modal);

  fetchForms();
}

const fetchForms = () => {
  let fullname;
  let username;

  isSessionEstablished()
    .then(data => {
      if (data.answer == 'success') {
        fullname = data.fullname;
        username = data.username;
        return fetch(`static/html/templates/loggedin.html`);
      } else {
        return fetch(`static/html/templates/bothforms.html`);
      }
    })
    .then(response => response.text())
    .then(formhtml => {
      const formContainer = document.querySelector('.formcontainer');
      formContainer.innerHTML = formhtml;
      if (formContainer.firstElementChild.classList.contains('loggedincont')) {
        formContainer.firstElementChild.innerHTML = `Welcome ${fullname}! You are logged in as ${username}`;
      }
    })
    .catch(err => console.log(err));
}


const showLoginModal = () => {
  const modal = document.querySelector('.basemodal');
  docbody.style.overflowY = 'hidden';
  docbody.style.height = '100vh';
  modal.classList.add('show');
}

const removeLoginModal = () => {
  const modal = document.querySelector('.basemodal');
  modal.classList.remove('show');
  docbody.style.overflowY = 'initial';
  docbody.style.height = 'auto';
}


setupLoginModal();