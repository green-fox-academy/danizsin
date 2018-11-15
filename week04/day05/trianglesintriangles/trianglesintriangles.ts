'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
var grd = ctx.createLinearGradient(0, 0, 0, 460);
grd.addColorStop(0, 'rgba(27, 49, 95, 0.918)');
grd.addColorStop(1, 'rgb(117, 237, 253)');

ctx.fillStyle = 'rgba(27, 49, 95, 0.918)';
ctx.fillRect(0, 0, 600, 600);

function drawTrianglesinTrianglesFractal(x: number, y: number, size: number, timesRepeat: number) {
  //    OUTER TRIANGLE
  ctx.strokeStyle = 'white';
  ctx.beginPath();
  ctx.moveTo(x + size / 2, y + size);
  ctx.lineTo(x, y);
  ctx.stroke();

  ctx.strokeStyle = 'white';
  ctx.beginPath();
  ctx.moveTo(x + size / 2, y + size);
  ctx.lineTo(x + size, y);
  ctx.stroke();

  ctx.strokeStyle = 'white';
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x + size, y);
  ctx.stroke();

  //    INNER TRIANGLE
  ctx.strokeStyle = 'white';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(x + size / 2, y);
  ctx.lineTo(x + size / 4, y + size / 2);
  ctx.stroke();

  ctx.strokeStyle = 'white';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(x + size / 2, y);
  ctx.lineTo(x + size * 3 / 4, y + size / 2);
  ctx.stroke();

  ctx.strokeStyle = 'white';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(x + size * 3 / 4, y + size / 2);
  ctx.lineTo(x + size / 4, y + size / 2);
  ctx.stroke();

  if (timesRepeat > 1) {
    drawTrianglesinTrianglesFractal(x, y, size / 2, timesRepeat - 1);
    drawTrianglesinTrianglesFractal(x + size / 2, y, size / 2, timesRepeat - 1);
    drawTrianglesinTrianglesFractal(x + size / 4, y + size / 2, size / 2, timesRepeat - 1);
  }

}

drawTrianglesinTrianglesFractal(0, 0, 600, 6);