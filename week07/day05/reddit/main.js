'use strict';

const mainCont = document.querySelector('main');
const submitpost = document.querySelector('.submitnewpostbtn');
const redditicon = document.querySelector('.mainicon');
const data = [
  { "id": 1, "title": "some actually really nice content to fill up space left by the cosmic air by me salalala", "commentnum": "2", "timestamp": 1544477937, "score": 2103, "user": "Jancsika" },
  { "id": 2, "title": "some actually really nice content to fill up space left by the cosmic air", "commentnum": "10", "timestamp": 1165445665, "score": 6344, "user": "Karcsika" },
  { "id": 3, "title": "some actually really nice content to fill up space left by the cosmic air nihaha", "commentnum": "1598", "timestamp": 1456544565, "score": 42343, "user": "Jampika" },
  { "id": 4, "title": "some actually really nice content to fill up space left by the cosmic air mihahaha", "commentnum": "15885", "timestamp": 1256542565, "score": 321, "user": "Tibike" },
  { "id": 5, "title": "some actually really nice content to fill up space left by the cosmic air", "commentnum": "18", "timestamp": 1365445965, "score": 7321, "user": "Pistike" },
  { "id": 6, "title": "some actually really nice content to fill up space left by the cosmic air", "commentnum": "138", "timestamp": 1544778750, "score": 9532, "user": "Sanyika" },
  { "id": 7, "title": "some actually really nice content to fill up space left by the cosmic air lalala", "commentnum": "177", "timestamp": 1447765821, "score": 23, "user": "Esztike" }
];

window.onload = () => {
  createPosts();
}

submitpost.addEventListener('click', () => {
  document.location.replace('submitnewpost.html');
});

redditicon.addEventListener('click', () => {
  document.location.replace('index.html');
});


const createPosts = () => {
  data.forEach(post => {
    const article = document.createElement('article');
    const rateCont = document.createElement('div');
    rateCont.classList.add('ratecont');

    // POST UP AND DOWNVOTE
    const upArrow = document.createElement('i');
    upArrow.classList.add('fas');
    upArrow.classList.add('fa-angle-double-up');

    const downArrow = document.createElement('i');
    downArrow.classList.add('fas');
    downArrow.classList.add('fa-angle-double-down');

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
    const datefrom = new Date(post.timestamp * 1000);
    dateofsubmit.innerText = `submitted on ${datefrom} by`;
    userofsubmit.innerText = `${post.user}`;
    whenAndWho.appendChild(dateofsubmit);
    whenAndWho.appendChild(userofsubmit);

    // ACTIONS TO BE MADE ON POSTS
    const actions = document.createElement('p');
    actions.classList.add('actions');

    const comments = document.createElement('span');
    comments.classList.add('commentsspan')
    comments.innerText = `${post.commentnum} comments`;
    const modifypost = document.createElement('span');
    modifypost.innerText = 'modify';
    const removepost = document.createElement('span');
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
  });
}