'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/purple-steps/r3.png]

function purpleSqu(x: number, y: number) {
  ctx.fillStyle = '#b145f3';
  ctx.fillRect(x, y, 12, 12);
  ctx.strokeStyle = 'black';
  ctx.strokeRect(x, y, 12, 12);
}

for (let i: number = 1; i < 20; i++) {
  purpleSqu(12 * i, 12 * i);
}