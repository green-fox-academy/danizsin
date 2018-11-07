
'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Fill the canvas with a checkerboard pattern.

function drawChecker(x) {
  for (let j: number = 0; j < canvas.height / x; j++) {
    for (let i: number = 0; i < canvas.width / x; i++) {
      if (j % 2 === 0) {
        if (i % 2 === 0) {
          ctx.fillStyle = 'black';
          ctx.fillRect(i * x, j * x, x, x);
        } else {
          ctx.fillStyle = 'white';
          ctx.fillRect(i * x, j * x, x, x);
        }
      } else {
        if (i % 2 === 0) {
          ctx.fillStyle = 'white';
          ctx.fillRect(i * x, j * x, x, x);
        } else {
          ctx.fillStyle = 'black';
          ctx.fillRect(i * x, j * x, x, x);
        }
      }
    }
  }
}
drawChecker(50);