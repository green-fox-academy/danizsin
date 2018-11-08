'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

const canvSize: number = canvas.width;
const lineSpacex: number = 8;

let quad: number = canvSize/2;

function drawEnvStar(num: number) {

  // RIGHT UPPER
  ctx.beginPath();
  ctx.strokeStyle = 'blue';
  ctx.moveTo(quad, 0 + num);
  ctx.lineTo(quad + num, quad);
  ctx.closePath();
  ctx.stroke();

  //RIGHT BOTTOM
  ctx.beginPath();
  ctx.strokeStyle = 'magenta';
  ctx.moveTo(canvSize/2, canvSize - num);
  ctx.lineTo(canvSize/2 + num, canvSize/2);
  ctx.closePath();
  ctx.stroke();

  //LEFT UPPER
  ctx.beginPath();
  ctx.strokeStyle = 'lightgreen';
  ctx.moveTo(canvSize/2, 0+num);
  ctx.lineTo(canvSize/2-num, canvSize/2);
  ctx.closePath();
  ctx.stroke();

  //LEFT BOTTOM
  ctx.beginPath();
  ctx.strokeStyle = 'red';
  ctx.moveTo(quad, canvSize - num);
  ctx.lineTo(quad - num, quad);
  ctx.closePath();
  ctx.stroke();
}

for (let i: number = 0; i < quad; i += lineSpacex) {
  drawEnvStar(i);
}