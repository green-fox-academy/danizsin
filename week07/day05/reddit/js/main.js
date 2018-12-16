'use strict';

const mainCont = document.querySelector('main');
const submitpost = document.querySelector('.submitnewpostbtn');
const redditicon = document.querySelector('.mainicon');
const data = [
  {
    "id": 1, "title": "some actually really nice content to fill up space left by the cosmic air by me salalala",
    "commentnum": "2", "timestamp": 1544876445, "score": 2103, "user": "Jancsika", "url": "apple.com", "upvoted": false, "downvoted": false
  },
  {
    "id": 2, "title": "some actually really nice content to fill up space left by the cosmic air",
    "commentnum": "10", "timestamp": 1544872845, "score": 6344, "user": "Karcsika", "url": "android.com", "upvoted": false, "downvoted": false
  },
  {
    "id": 3, "title": "some actually really nice content to fill up space left by the cosmic air nihaha",
    "commentnum": "1598", "timestamp": 1544858445, "score": 42343, "user": "Jampika", "url": "gmail.com", "upvoted": false, "downvoted": false
  },
  {
    "id": 4, "title": "some actually really nice content to fill up space left by the cosmic air mihahaha",
    "commentnum": "435", "timestamp": 1544772045, "score": 321, "user": "Tibike", "url": "twitter.com", "upvoted": true, "downvoted": false
  },
  {
    "id": 5, "title": "some actually really nice content to fill up space left by the cosmic air",
    "commentnum": "18", "timestamp": 1544599245, "score": 7321, "user": "Pistike", "url": "oracle.com", "upvoted": false, "downvoted": false
  },
  {
    "id": 6, "title": "some actually really nice content to fill up space left by the cosmic air",
    "commentnum": "138", "timestamp": 1544167245, "score": 9532, "user": "Sanyika", "url": "instagram.com", "upvoted": false, "downvoted": false
  },
  {
    "id": 7, "title": "some actually really nice content to fill up space left by the cosmic air lalala",
    "commentnum": "5654", "timestamp": 1543216845, "score": 100546, "user": "Esztike", "url": "9gag.com", "upvoted": false, "downvoted": true
  },
  {
    "id": 8, "title": "some actually really nice content to fill up space left by the cosmic air lalala",
    "commentnum": "46", "timestamp": 1542180045, "score": 344, "user": "Paprika", "url": "giphy.com", "upvoted": false, "downvoted": false
  },
  {
    "id": 9, "title": "some actually really nice content to fill up space left by the cosmic air lalala",
    "commentnum": "34", "timestamp": 1536906045, "score": 98, "user": "Szilvike", "url": "facebook.com", "upvoted": true, "downvoted": false
  },
  {
    "id": 10, "title": "some actually really nice content to fill up space left by the cosmic air lalala",
    "commentnum": "4", "timestamp": 1505370045, "score": 3, "user": "Napocska", "url": "google.com", "upvoted": false, "downvoted": false
  },
  {
    "id": 11, "title": "some actually really nice content to fill up space left by the cosmic air lalala",
    "commentnum": "345", "timestamp": 1252909245, "score": 45654, "user": "Napsugaracska", "url": "yahoo.com", "upvoted": false, "downvoted": false
  }
];

window.onload = () => {
  data.sort((a, b) => { return b.score - a.score });
  let counter = 0;
  const loader = setInterval(() => {
    createPosts(data[counter]);
    counter++;
    if (counter == data.length) {
      clearInterval(loader);
    }
  }, 200);
}

submitpost.addEventListener('click', () => {
  document.location.replace('submitnewpost.html');
});

const createPosts = (post) => {

  const article = document.createElement('article');

  const rateCont = document.createElement('div');
  rateCont.classList.add('ratecont');

  // POST UP AND DOWNVOTE
  const upArrow = document.createElement('i');
  upArrow.classList.add('fas');
  upArrow.classList.add('fa-angle-double-up');
  upArrow.setAttribute('title', 'upvote post');
  upArrow.setAttribute('data-postid', post.id);
  if (post.upvoted) {
    upArrow.classList.add('votedarrow');
  }

  const downArrow = document.createElement('i');
  downArrow.classList.add('fas');
  downArrow.classList.add('fa-angle-double-down');
  downArrow.setAttribute('title', 'downvote post');
  downArrow.setAttribute('data-postid', post.id);
  if (post.downvoted) {
    downArrow.classList.add('votedarrow');
  }

  rateCont.addEventListener('click', (event) => {
    switch (event.target) {
      case upArrow:
        event.target.classList.add('votedarrow');
        if (rateCont.lastElementChild.classList.contains('votedarrow')) {
          rateCont.lastElementChild.classList.remove('votedarrow');
        }
        data[event.target.getAttribute('data-postid')].upvoted = true;
        data[event.target.getAttribute('data-postid')].downvoted = false;
        break;
      case downArrow:
        event.target.classList.add('votedarrow');
        if (rateCont.firstElementChild.classList.contains('votedarrow')) {
          rateCont.firstElementChild.classList.remove('votedarrow');
        }
        data[event.target.getAttribute('data-postid')].upvoted = false;
        data[event.target.getAttribute('data-postid')].downvoted = true;
        break;
    }
  });

  const rateAmount = document.createElement('p');
  rateAmount.innerText = post.score;

  rateCont.appendChild(upArrow);
  rateCont.appendChild(rateAmount);
  rateCont.appendChild(downArrow);

  // BEGINING OF POST INFO CONSTAINER
  const postdataCont = document.createElement('div');
  postdataCont.classList.add('postdatacont');

  // POST TITLE
  const title = document.createElement('p');
  title.classList.add('titlecont');
  title.innerText = post.title;

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
  const submitdate = new Date(datefrom * 1000).toLocaleDateString('en-US');

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
  modifypost.setAttribute('href', `modifypost.html?post=${post.id}&title=${post.title}&posturl=${post.url}`);
  const removepost = document.createElement('a');
  removepost.innerText = 'remove';
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