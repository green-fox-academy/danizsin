'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

ctx.fillStyle = 'black';
ctx.fillRect(0, 0, 600, 600);

function drawSquareGrid(x: number, y: number, size: number, thickness: number, repeat: number) {
  ctx.strokeStyle = 'white';
  ctx.lineWidth = thickness;
  ctx.strokeRect(x + size / 4, y + size / 4, size / 2, size / 2);

  if (repeat > 1) {
    drawSquareGrid(x, y, size / 2, thickness * 0.5, repeat - 1);
    drawSquareGrid(x + size / 2, y, size / 2, thickness * 0.5, repeat - 1);
    drawSquareGrid(x, y + size / 2, size / 2, thickness * 0.5, repeat - 1);
    drawSquareGrid(x + size / 2, y + size / 2, size / 2, thickness * 0.5, repeat - 1);
  } else {
    return;
  }
}

drawSquareGrid(0, 0, 600, 16, 5);