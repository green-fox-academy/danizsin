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

//CLICKING ON THE SUBMIT BUTTON START A NEW AJAX PUT REQUEST IF THE INPUT VALUES ARE FILLED IN
submitbtn.addEventListener('click', (event) => {
  //PREVENTING THE FORM FROM BEING SUBMITTED AND RELOADING THE PAGE
  event.preventDefault();
  if (modTitle.value == '' && modUrl.value == '') {
    postIdCont.innerText = 'Please fill out both fields!';
    alertEmptyInput();
  } else if (modTitle.value == '' && modUrl.value != '') {
    postIdCont.innerText = 'Please input a new title!';
    alertEmptyInput();
  } else if (modTitle.value != '' && modUrl.value == '') {
    postIdCont.innerText = 'Please input a new URL!';
    alertEmptyInput();
  } else {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
      if (xhr.status === 200 && xhr.readyState === XMLHttpRequest.DONE) {
        const data = JSON.parse(xhr.responseText);
        //IF THE JSON THAT COMES BACK CONTAINS A KEY VALUE PAIR OF "ANSWER":"SUCCESS" THEN RELOCATE THE PAGE TO THE ROOT HTML OTHERWISE GIVE AN ERROR MESSAGE
        if (data.answer == 'success') {
          window.location.replace('/');
        } else {
          postIdCont.innerText = 'Error modifying your post, please try again!';
          alertEmptyInput();
        }
      }
    }
    xhr.open('PUT', '/modifypost');
    xhr.setRequestHeader('Content-type', 'application/json');
    //SENDING THE VALUE OF THE 2 INPUTS
    xhr.send(JSON.stringify({
      posttitle: modTitle.value,
      posturl: modUrl.value,
      postid: param.get('post')
    }));
  }
});