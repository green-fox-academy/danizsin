
'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/purple-steps-3d/r4.png]

function purpleSq(x: number, y: number, z: number) {
  ctx.fillStyle = '#b145f3';
  ctx.fillRect(x, y, z, z);
  ctx.strokeStyle = 'black';
  ctx.strokeRect(x, y, z, z);
}

let currPos: number[] = [12, 12];
for (let i: number = 1; i < 7; i++) {
  purpleSq(currPos[0], currPos[1], 12 * i);
  currPos[0] += 12 * i;
  currPos[1] += 12 * i;
}