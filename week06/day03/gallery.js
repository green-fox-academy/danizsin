'use strict';
window.onload = () => {
  const pictures = [
    { 'source': 'images/landscape0.jpg', 'title': 'Riverside', 'desc': 'i have to write soemthing here to fill the space left by the cosmic air' },
    { 'source': 'images/landscape1.jpg', 'title': 'something1', 'desc': 'nyihaha' },
    { 'source': 'images/landscape2.jpg', 'title': 'something2', 'desc': 'lol' },
    { 'source': 'images/landscape3.jpg', 'title': 'something3', 'desc': 'haha' },
    { 'source': 'images/landscape4.jpg', 'title': 'something4', 'desc': 'hihi' },
    { 'source': 'images/landscape5.jpg', 'title': 'something5', 'desc': 'muhaha' },
    { 'source': 'images/landscape6.jpg', 'title': 'something5', 'desc': 'muhaha' }
  ];

  const mainDisplay = document.querySelector('.maindisplay');
  const myFooter = document.querySelector('footer');
  const leftArrow = document.querySelector('.left');
  const rightArrow = document.querySelector('.right');
  const article = document.querySelector('article');
  const header = document.querySelector('h1');
  const paragraph = document.querySelector('p');
  let counter = 0;

  const createImages = () => {
    pictures.forEach((e, i) => {
      let image = document.createElement('img');
      image.src = e.source;
      image.classList.add('thumbnail');
      image.setAttribute('data-imgid', i);
      myFooter.appendChild(image);
      if (i === counter) {
        image.classList.add('active');
      }
    });
  }

  const loadMainImage = () => {
    let image = document.createElement('img');
    image.src = pictures[counter].source;
    mainDisplay.appendChild(image);
  }

  const toggleActiveClass = () => {
    thumbnails.forEach(e => {
      if (e.getAttribute('data-imgid') != counter) {
        e.classList.remove('active');
      } else {
        e.classList.add('active');
      }
    });
  }

  const swipeRight = () => {
    if (counter + 1 < pictures.length) {
      mainDisplay.removeChild(mainDisplay.lastElementChild);
      ++counter;
      loadMainImage();

    } else {
      mainDisplay.removeChild(mainDisplay.lastElementChild);
      counter = 0;
      loadMainImage();
    }
    toggleActiveClass();
  }

  const swipeLeft = () => {
    if (counter - 1 >= 0) {
      mainDisplay.removeChild(mainDisplay.lastElementChild);
      --counter;
      loadMainImage();
    } else {
      mainDisplay.removeChild(mainDisplay.lastElementChild);
      counter = pictures.length - 1;
      loadMainImage();
    }
    toggleActiveClass();
  }

  const clickThumbnail = (element) => {
    let imageId = element.getAttribute('data-imgid');
    mainDisplay.removeChild(mainDisplay.lastElementChild);
    counter = +imageId;

    loadMainImage();
    toggleActiveClass();
  }

  rightArrow.onclick = () => {
    swipeRight();
  }

  leftArrow.onclick = () => {
    swipeLeft();
  }

  createImages();
  loadMainImage();

  const thumbnails = document.querySelectorAll('.thumbnail');
  thumbnails.forEach(e => {
    e.addEventListener('click', function (event) {
      clickThumbnail(event.target);
    });
  });

  const keyDown = (event) => {
    switch (event.keyCode) {
      case 37:  // LEFT
        swipeLeft();
        break;
      case 39:  // RIGHT
        swipeRight();
        break;
    }
  }

  document.body.addEventListener('keydown', keyDown);
}