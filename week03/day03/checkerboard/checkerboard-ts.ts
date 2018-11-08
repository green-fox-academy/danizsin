
'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Fill the canvas with a checkerboard pattern.


function drawChecker(x: number, y: number, z: number) {
  ctx.fillRect(x, y, z, z);
}

function makeTable(k: number) {
  for (let j: number = 0; j < canvas.height / k; j++) {
    for (let i: number = 0; i < canvas.width / k; i++) {
      if ((i + j) % 2 === 0) {
        drawChecker(i * k, j * k, k);
      }
    }
  }
}

let clickbutton: any = document.getElementById('clickme');
let inputval: any = document.getElementById('num');
const regex: any = /^[0-9]+$/;

clickbutton.addEventListener('click', function () {
  if (inputval.value.trim().length > 0 && regex.test(inputval.value.trim())) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    makeTable(canvas.width / inputval.value);
    inputval.value = '';
    inputval.focus();
  } else {
    inputval.value = '';
    inputval.focus();
    alert('Type a number, don\'t leave it empty!');
  }
});
