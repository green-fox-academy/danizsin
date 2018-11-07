'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a square drawing function that takes 2 parameters:
// The square size, and the fill color,
// and draws a square of that size and color to the center of the canvas.
// Create a loop that fills the canvas with rainbow colored squares.
let colors: string[] = ['violet', 'indigo', 'blue', 'green', 'yellow', 'orange', 'red'];

function rainBow(x, y) {
  ctx.fillStyle = y;
  ctx.fillRect(canvas.width / 2 - x / 2, canvas.height / 2 - x / 2, x, x);
}

for (let i: number = 7; i > 0; i--) {
  rainBow((canvas.width / colors.length) * i, colors[i - 1]);
}