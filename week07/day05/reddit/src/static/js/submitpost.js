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

// MAKING THE PARAGRAPH ELEMENT PLAY AN ANIMATION OF GETTING RED AND MAROON
const alertEmptyInput = () => {
  submitInfoCont.classList.add('modpostidcont');
  const alert = setTimeout(() => {
    submitInfoCont.classList.remove('modpostidcont');
    submitInfoCont.innerText = 'You are posting to r/MercedesAMG-GT';
  }, 4000);
}

//CLICKING ON THE SUBMIT BUTTON START A NEW AJAX POST REQUEST IF THE INPUT VALUES ARE FILLED IN
submitbtn.addEventListener('click', (event) => {
  //PREVENTING THE FORM FROM BEING SUBMITTED AND RELOADING THE PAGE
  event.preventDefault();
  if (postTitle.value == '' && postURL.value == '') {
    submitInfoCont.innerText = 'Please fill out both fields!';
    alertEmptyInput();
  } else if (postTitle.value == '' && postURL.value != '') {
    submitInfoCont.innerText = 'Please input a title!';
    alertEmptyInput();
  } else if (postTitle.value != '' && postURL.value == '') {
    submitInfoCont.innerText = 'Please input a URL!';
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
          submitInfoCont.innerText = 'Error submitting your post, please try again!';
          alertEmptyInput();
        }
      }
    }
    xhr.open('POST', '/submitnewpost');
    xhr.setRequestHeader('Content-type', 'application/json');
    //SENDING THE VALUE OF THE 2 INPUTS
    xhr.send(JSON.stringify({
      posttitle: postTitle.value,
      posturl: postURL.value
    }));
  }
});