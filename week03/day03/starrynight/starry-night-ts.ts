'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw the night sky:
//  - The background should be black
//  - The stars should be small squares
//  - The stars should have random positions on the canvas
//  - The stars should have random color (some shade of grey)

ctx.fillStyle = 'black';
ctx.fillRect(0, 0, canvas.width, canvas.height);

function drawStars(x: number, y: number) {
  ctx.beginPath();
  ctx.fillStyle = `rgba(255,255,255,${Math.random()})`;
  ctx.fillRect(x, y, 10, 10);
}

for (let i: number = 0; i < 200; i++) {
  drawStars(Math.floor(Math.random() * (canvas.width - 10)), Math.floor(Math.random() * (canvas.height - 10)));
}