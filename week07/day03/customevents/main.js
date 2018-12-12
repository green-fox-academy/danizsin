'use strict';

const myDiv = document.querySelector('div');
const rightclick = new Event('right-side-click');
const leftclick = new Event('left-side-click');

myDiv.addEventListener('click', (event) => {
  if (event.pageX > 0 && event.pageX <= 200) {
    myDiv.dispatchEvent(leftclick);
  } else if (event.pageX > 200 && event.pageX <= 400) {
    myDiv.dispatchEvent(rightclick);
  }
});

myDiv.addEventListener('left-side-click', (ev) => {
  ev.target.style.backgroundColor = 'yellow';
});

myDiv.addEventListener('right-side-click', (ev) => {
  ev.target.style.backgroundColor = 'blue';
});