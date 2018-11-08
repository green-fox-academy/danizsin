
'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

function drawCurve(num: number) {
  ctx.beginPath();
  ctx.strokeStyle = 'purple';
  ctx.moveTo(canvas.width, canvas.height - num);
  ctx.lineTo(canvas.width - num, 0);
  ctx.closePath();
  ctx.stroke();

  ctx.beginPath();
  ctx.strokeStyle = 'lightgreen';
  ctx.moveTo(canvas.width - num, canvas.height);
  ctx.lineTo(0, canvas.height - num);
  ctx.closePath();
  ctx.stroke();
}
let x: number = 30;

for (let i: number = x; i <= canvas.width-x; i += x) {
  drawCurve(i);
}