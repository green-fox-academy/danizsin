
'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a square drawing function that takes 2 parameters:
// The x and y coordinates of the square's top left corner
// and draws a 50x50 square from that point.
// Draw 3 squares with that function.
// Avoid code duplication.

function threeSq(x: number, y: number) {
  ctx.fillRect(x, y, 50, 50);
  ctx.fillStyle = 'black';
}

for (let i: number = 3; i < 6; i++) {
  threeSq(50 * i, 50 * i);
}