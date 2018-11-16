'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

ctx.fillStyle = 'white';
ctx.fillRect(0, 0, 600, 600);

function drawCircles(x: number, y: number, size: number, repeat: number) {
  ctx.strokeStyle = 'black';
  ctx.beginPath();
  ctx.arc(x, y, size / 2, 0, Math.PI * 2);
  ctx.stroke();

  if (repeat > 1) {
    drawCircles(x - size / 4.5, y + size / 9, size / 2, repeat - 1);
    drawCircles(x + size / 4.5, y + size / 9, size / 2, repeat - 1);
    drawCircles(x, y - size / 4, size / 2, repeat - 1);     // GOOD
  } else {
    return;
  }
}

drawCircles(300, 300, 600, 5);