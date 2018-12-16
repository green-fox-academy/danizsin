const section = document.querySelector('section');
const postIdCont = document.querySelector('section > p');
const form = document.querySelector('form');
const modTitle = form.modifytitle;
const modUrl = form.modifyurl;
const submitbtn = form.modifybutton;
const url = new URL(document.location);
const param = url.searchParams;
const postIdString = `You are modifying post No.${param.get('post')}`;
postIdCont.innerText = postIdString;
modTitle.value = param.get('title');
modUrl.value = param.get('posturl');

window.onload = () => {
  section.classList.add('scaletoone');
}

const alertEmptyInput = () => {
  postIdCont.classList.add('modpostidcont');
  const alert = setTimeout(() => {
    postIdCont.classList.remove('modpostidcont');
    postIdCont.innerText = postIdString;
  }, 4000);
}

submitbtn.addEventListener('click', (event) => {
  if (modTitle.value == '' && modUrl.value == '') {
    event.preventDefault();
    postIdCont.innerText = 'Please fill out both fields!';
    alertEmptyInput();
  } else if (modTitle.value == '' && modUrl.value != '') {
    event.preventDefault();
    postIdCont.innerText = 'Please input a new title!';
    alertEmptyInput();
  } else if (modTitle.value != '' && modUrl.value == '') {
    event.preventDefault();
    postIdCont.innerText = 'Please input a new URL!';
    alertEmptyInput();
  }
});