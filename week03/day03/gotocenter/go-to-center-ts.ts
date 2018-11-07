
'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a line drawing function that takes 2 parameters:
// The x and y coordinates of the line's starting point
// and draws a line from that point to the center of the canvas
// Draw 3 lines with that function. Use loop for that.

function drawLines(x, y) {
  ctx.beginPath();
  ctx.strokeStyle = 'magenta';
  ctx.moveTo(x, y);
  ctx.lineTo(canvas.width / 2, canvas.height / 2);
  ctx.stroke();
}

for (let i: number = 1; i <= 3; i++) {
  drawLines(i + 100, i * 100);
}