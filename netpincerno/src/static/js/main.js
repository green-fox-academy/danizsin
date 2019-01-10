'use strict';

const setupLoginModal = () => {
  const docbody = document.body;
  fetch('static/html/modal.html')
    .then(resp => resp.text())
    .then(data => {
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
      formContainer.innerHTML = data;

      modalHeader.appendChild(loginTitle);
      modalHeader.appendChild(regTitle);
      modalContainer.appendChild(modalHeader);
      modalContainer.appendChild(formContainer);
      modal.appendChild(modalContainer);
      docbody.appendChild(modal);
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