const section = document.querySelector('section');
const submitInfoCont = document.querySelector('section > p');
const form = document.querySelector('form');
const postTitle = form.newposttitle;
const postURL = form.newposturl;
const submitbtn = form.submitbutton;
submitInfoCont.innerHTML = 'You are posting to r/MercedesAMG-GT';

window.onload = () => {
  section.classList.add('scaletoone');
}

const alertEmptyInput = () => {
  submitInfoCont.classList.add('modpostidcont');
  const alert = setTimeout(() => {
    submitInfoCont.classList.remove('modpostidcont');
    submitInfoCont.innerText = 'You are posting to r/MercedesAMG-GT';
  }, 4000);
}

submitbtn.addEventListener('click', (event) => {
  if (postTitle.value == '' && postURL.value == '') {
    event.preventDefault();
    submitInfoCont.innerText = 'Please fill out both fields!';
    alertEmptyInput();
  } else if (postTitle.value == '' && postURL.value != '') {
    event.preventDefault();
    submitInfoCont.innerText = 'Please input a title!';
    alertEmptyInput();
  } else if (postTitle.value != '' && postURL.value == '') {
    event.preventDefault();
    submitInfoCont.innerText = 'Please input a URL!';
    alertEmptyInput();
  }
});