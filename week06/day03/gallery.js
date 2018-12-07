'use strict';
window.onload = () => {
  const pictures = [
    { 'source': 'images/landscape0.jpg', 'title': 'Riverside', 'desc': 'I have to write soemthing here to fill the space left by the cosmic air' },
    { 'source': 'images/landscape1.jpg', 'title': 'River delta', 'desc': 'The river delta created some very nice effects on the sky but for sure it is a paradoxon sorry for that in advance and please no complaint' },
    { 'source': 'images/landscape2.jpg', 'title': 'Sunset at the lake', 'desc': 'The sun was shining so bright that no-one could see anything on the sky ' },
    { 'source': 'images/landscape3.jpg', 'title': 'Mirror image', 'desc': 'The most fascinating mirror image I have ever seen in my life, but unfortunately and sadly probably the last one as well, I\'m so mad. ' },
    { 'source': 'images/landscape4.jpg', 'title': 'Milky way', 'desc': 'Always wanted to being able to see the Milky Way on the sky and now I have finally achieved my goal and fulfilled my childish dream. thanks for reading this meaningful sentence.' },
    { 'source': 'images/landscape5.jpg', 'title': 'Mount Fuji', 'desc': 'I can really not write anything interesting here now, please suggest some deep and very interesting quotesfor this image, i would be really thankful' },
    { 'source': 'images/landscape6.jpg', 'title': 'Flood over savannah', 'desc': 'Insert some very deep intellectual content here to surpass time without any corresponding quality quotes of mine' }
  ];

  const mainDisplay = document.querySelector('.maindisplay');
  const myFooter = document.querySelector('footer');
  const leftArrow = document.querySelector('.left');
  const rightArrow = document.querySelector('.right');
  const header = document.querySelector('h1');
  const paragraph = document.querySelector('p');
  let counter = 0;

  const createThumbnailImages = () => {
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
    header.innerText = pictures[counter].title;
    paragraph.innerText = pictures[counter].desc;
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

  createThumbnailImages();
  loadMainImage();

  const thumbnails = document.querySelectorAll('.thumbnail');
  thumbnails.forEach(e => {
    e.addEventListener('click', function (event) {
      clickThumbnail(event.target);
    });
  });

  const keyDown = (event) => {
    switch (event.keyCode) {
      case 37:
        swipeLeft();
        break;
      case 39:
        swipeRight();
        break;
    }
  }

  document.body.addEventListener('keydown', keyDown);
}