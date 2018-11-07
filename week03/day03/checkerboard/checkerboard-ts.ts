
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

clickbutton.addEventListener('click', function () {
  if (inputval.value.trim().length > 0) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    makeTable(+inputval.value);
    inputval.value = '';
    inputval.focus();
  } else alert('Type a number, don\'t leave it empty!');
});




// function tralala(x) {
//   for (let j: number = 0; j < canvas.height / x; j++) {
//     for (let i: number = 0; i < canvas.width / x; i++) {
//       if (j % 2 === 0) {
//         if (i % 2 === 0) {

//         } else {
//           ctx.fillStyle = 'white';
//           ctx.fillRect(i * x, j * x, x, x);
//         }
//       } else {
//         if (i % 2 === 0) {
//           ctx.fillStyle = 'white';
//           ctx.fillRect(i * x, j * x, x, x);
//         } else {
//           ctx.fillStyle = 'black';
//           ctx.fillRect(i * x, j * x, x, x);
//         }
//       }
//     }
//   }
// }
// document.getElementById('clickme').addEventListener('click', function () {
//   tralala(document.getElementById('num').value);
//   document.getElementById('num').value = '';
//   document.getElementById('num').focus();

// });
