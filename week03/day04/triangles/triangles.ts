'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

const canvSizee: number = canvas.width;
const triHeight: number = canvSizee - (canvSizee * ((Math.sqrt(3)) / 2));
const multiplyWith: number = ((canvSizee * ((Math.sqrt(3)) / 2)) / 400);  // number for multiplying input number to meet triangles height
const lineSpacee: number = 20;

function drawStraightLine(num: number) {
  ctx.beginPath();
  ctx.strokeStyle = 'rgb(0, 140, 255)';
  ctx.moveTo(0 + num / 2, canvSizee - num * multiplyWith);
  ctx.lineTo(canvSizee - num / 2, canvSizee - num * multiplyWith);
  ctx.stroke();

  ctx.beginPath();
  ctx.strokeStyle = 'rgb(0, 140, 255)';
  ctx.moveTo(canvSizee - num, canvSizee);
  ctx.lineTo((canvSizee / 2 - num / 2), triHeight + num * multiplyWith);
  ctx.stroke();

  ctx.beginPath();
  ctx.strokeStyle = 'rgb(0, 140, 255)';
  ctx.moveTo(0 + num, canvSizee);
  ctx.lineTo((canvSizee / 2 - num / 2) + num, triHeight + num * multiplyWith);
  ctx.stroke();
}

for (let i: number = 0; i <= canvSizee; i += lineSpacee) {
  drawStraightLine(i);
}