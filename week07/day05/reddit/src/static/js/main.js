'use strict';

const mainCont = document.querySelector('main');
const submitpost = document.querySelector('.submitnewpostbtn');
const redditicon = document.querySelector('.mainicon');

const createHttpRequest = (method, url, callback) => {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = () => {
    if (xhr.status === 200 && xhr.readyState === XMLHttpRequest.DONE) {
      callback(JSON.parse(xhr.responseText));
    }
  }
  xhr.open(method, url);
  xhr.send();
}

const listPosts = (data) => {
  let counter = 0;
  const loader = setInterval(() => {
    createPosts(data[counter]);
    counter++;
    if (counter == data.length) {
      clearInterval(loader);
    }
  }, 200);

}

const upVotePost = (upvote) => {
  const voteHXR = new XMLHttpRequest();
  voteHXR.onreadystatechange = () => {
    if (voteHXR.status === 200 && voteHXR.readyState === XMLHttpRequest.DONE) {
      const data = JSON.parse(voteHXR.responseText);
      const parent = upvote.parentNode;
      if (data.answer === "success") {
        if (!upvote.classList.contains('votedarrow')) {
          upvote.classList.add('votedarrow');
        }
        if (parent.lastElementChild.classList.contains('votedarrow')) {
          parent.lastElementChild.classList.remove('votedarrow');
        }
        parent.children[1].innerText = data.score;
      };
    }
  }
  voteHXR.open('PUT', '/upvote');
  voteHXR.setRequestHeader('Content-type', 'application/json');
  voteHXR.send(JSON.stringify({
    postid: upvote.getAttribute('data-postid')
  }));
}

const downVotePost = (downvote) => {
  const voteHXR = new XMLHttpRequest();
  voteHXR.onreadystatechange = () => {
    if (voteHXR.status === 200 && voteHXR.readyState === XMLHttpRequest.DONE) {
      const data = JSON.parse(voteHXR.responseText);
      const parent = downvote.parentNode;
      if (data.answer === "success") {
        if (!downvote.classList.contains('votedarrow')) {
          downvote.classList.add('votedarrow');
        }
        if (parent.firstElementChild.classList.contains('votedarrow')) {
          parent.firstElementChild.classList.remove('votedarrow');
        }
        parent.children[1].innerText = data.score;
      };
    }
  }
  voteHXR.open('PUT', '/downvote');
  voteHXR.setRequestHeader('Content-type', 'application/json');
  voteHXR.send(JSON.stringify({
    postid: downvote.getAttribute('data-postid')
  }));
}

const voteButtonsSetup = (event) => {
  if (event.target.classList.contains('upvotebtn')) {
    upVotePost(event.target);
  } else if (event.target.classList.contains('downvotebtn')) {
    downVotePost(event.target);
  }
}

const removePost = (event) => {
  console.log(`post gonna be deleted: ${event.target.getAttribute('data-pstid')}`);
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = () => {
    if (xhr.status === 200 && xhr.readyState === XMLHttpRequest.DONE) {
      const data = JSON.parse(xhr.responseText);
      if (data.answer == 'success') {
        mainCont.removeChild(event.target.parentNode);
      }
    }
  }
  xhr.open('DELETE', '/deletepost');
  xhr.setRequestHeader('Content-type', 'application/json');
  xhr.send(JSON.stringify({
    postid: event.target.getAttribute('data-pstid')
  }));
}

const confirmRemoval = (event) => {
  if (event.target.classList.contains('rmvpost')) {
    const article = event.target.parentNode.parentNode.parentNode;
    const articleContent = article.innerHTML;
    while (article.firstChild) {
      article.removeChild(article.firstChild);
    }
    const delQuestion = document.createElement('div');
    delQuestion.innerText = `Are you sure you want to delete post No.${event.target.getAttribute('data-postid')}?`;
    delQuestion.classList.add('delquestion');
    const yesbtn = document.createElement('div');
    yesbtn.classList.add('confirmyes');
    yesbtn.innerText = 'yes';
    yesbtn.setAttribute('data-pstid', event.target.getAttribute('data-postid'));
    yesbtn.addEventListener('click', removePost);
    const nobtn = document.createElement('div');
    nobtn.classList.add('confirmno');
    nobtn.innerText = 'no';
    nobtn.addEventListener('click', () => {
      while (article.firstChild) {
        article.removeChild(article.firstChild);
      }
      article.innerHTML = articleContent;
    });
    article.appendChild(delQuestion);
    article.appendChild(yesbtn);
    article.appendChild(nobtn);
  }
}

const createPosts = (post) => {
  const article = document.createElement('article');

  const rateCont = document.createElement('div');
  rateCont.classList.add('ratecont');

  // POST UP- AND DOWNVOTE
  const upArrow = document.createElement('i');
  upArrow.classList.add('fas');
  upArrow.classList.add('fa-angle-double-up');
  upArrow.classList.add('upvotebtn');
  upArrow.setAttribute('title', 'upvote post');
  upArrow.setAttribute('data-postid', post.id);
  if (post.voted == '1') {
    upArrow.classList.add('votedarrow');
  }

  const downArrow = document.createElement('i');
  downArrow.classList.add('fas');
  downArrow.classList.add('fa-angle-double-down');
  downArrow.classList.add('downvotebtn');
  downArrow.setAttribute('title', 'downvote post');
  downArrow.setAttribute('data-postid', post.id);
  if (post.voted == '-1') {
    downArrow.classList.add('votedarrow');
  }

  const rateAmount = document.createElement('p');
  rateAmount.innerText = post.score;

  rateCont.appendChild(upArrow);
  rateCont.appendChild(rateAmount);
  rateCont.appendChild(downArrow);

  // BEGINING OF POST INFO CONSTAINER
  const postdataCont = document.createElement('div');
  postdataCont.classList.add('postdatacont');

  // POST TITLE
  const title = document.createElement('a');
  title.classList.add('titlecont');
  title.innerText = post.title;
  title.setAttribute('href', post.url);
  title.setAttribute('target', '_blank');

  // POST SUBMIT DATE AND USER NAME
  const whenAndWho = document.createElement('p');
  whenAndWho.classList.add('dateandperson');

  const dateofsubmit = document.createElement('span');
  const userofsubmit = document.createElement('span');
  userofsubmit.classList.add('userofsubmit');

  const datefrom = post.timestamp;
  const datenow = Math.floor(Date.now() / 1000);

  const secs = 1;
  const secsToMins = secs * 60;
  const secsToHours = secsToMins * 60;
  const secsToDays = secsToHours * 24;
  const secsToWeeks = secsToDays * 7;
  const secsToMonths = secsToWeeks * 4.2;
  const secsToYears = secsToMonths * 12;

  const postedAgoSecs = Math.floor((datenow - datefrom) / secs);
  const postedAgoMins = Math.floor((datenow - datefrom) / secsToMins);
  const postedAgoHours = Math.floor((datenow - datefrom) / secsToHours);
  const postedAgoDays = Math.floor((datenow - datefrom) / secsToDays);
  const postedAgoWeeks = Math.floor((datenow - datefrom) / secsToWeeks);
  const postedAgoMonths = Math.floor((datenow - datefrom) / secsToMonths);
  const postedAgoYears = Math.floor((datenow - datefrom) / secsToYears);
  //CONVERTING TIMESTAMP NUMBER INTO A READABLE DATE(EN-US MEANS ONLY THAT NUMBERS ARE SEPARATED WITH SLASHES LIKE: 11/12/2018)
  const submitdate = new Date(datefrom * 1000).toLocaleDateString('en-US');

  //PRINTING OUT THE DATE OF SUBMITTING AND THE AMOUNT OF TIME PASSED SINCE SUBMITTING
  if (postedAgoYears >= 1) {
    dateofsubmit.innerHTML = `submitted on ${submitdate}, <strong>${postedAgoYears}</strong> years ago by`;
  } else if (postedAgoMonths >= 1) {
    dateofsubmit.innerHTML = `submitted on ${submitdate}, <strong>${postedAgoMonths}</strong> months ago by`;
  } else if (postedAgoWeeks >= 1) {
    dateofsubmit.innerHTML = `submitted on ${submitdate}, <strong>${postedAgoWeeks}</strong> weeks ago by`;
  } else if (postedAgoDays >= 1) {
    dateofsubmit.innerHTML = `submitted on ${submitdate}, <strong>${postedAgoDays}</strong> days ago by`;
  } else if (postedAgoHours >= 1) {
    dateofsubmit.innerHTML = `submitted on ${submitdate}, <strong>${postedAgoHours}</strong> hours ago by`;
  } else if (postedAgoMins >= 1) {
    dateofsubmit.innerHTML = `submitted on ${submitdate}, <strong>${postedAgoMins}</strong> minutes ago by`;
  } else {
    dateofsubmit.innerHTML = `submitted on ${submitdate}, <strong>${postedAgoSecs}</strong> seconds ago by`;
  }

  userofsubmit.innerText = `${post.user}`;

  whenAndWho.appendChild(dateofsubmit);
  whenAndWho.appendChild(userofsubmit);

  // ACTIONS TO BE MADE ON POSTS
  const actions = document.createElement('p');
  actions.classList.add('actions');

  const comments = document.createElement('span');
  comments.classList.add('commentsspan');
  comments.innerText = `${post.commentnum} comments`;
  const modifypost = document.createElement('a');
  modifypost.innerText = 'modify';
  modifypost.setAttribute('href', `./static/modifypost.html?post=${post.id}&title=${post.title}&posturl=${post.url}`);
  const removepost = document.createElement('span');
  removepost.innerText = 'remove';
  removepost.setAttribute('data-postid', post.id);
  removepost.classList.add('rmvpost');

  actions.appendChild(comments);
  actions.appendChild(modifypost);
  actions.appendChild(removepost);

  postdataCont.appendChild(title);
  postdataCont.appendChild(whenAndWho);
  postdataCont.appendChild(actions);

  article.appendChild(rateCont);
  article.appendChild(postdataCont);

  mainCont.appendChild(article);
}

submitpost.addEventListener('click', () => {
  document.location.replace('./static/submitnewpost.html');
});

mainCont.addEventListener('click', confirmRemoval);

//EVENT LISTENER TO VOTING BUTTONS
mainCont.addEventListener('click', voteButtonsSetup);

createHttpRequest('GET', '/posts', listPosts);