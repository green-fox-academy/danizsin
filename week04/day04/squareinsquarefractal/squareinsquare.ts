'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

ctx.fillStyle = 'blue';
ctx.fillRect(0, 0, 600, 600);

function drawSquareFractal(x: number, y: number, sizeOfCanvas: number, timesOfRepetition: number) {
  ctx.strokeStyle = 'white';
  ctx.lineWidth = 2;
  ctx.strokeRect(x, y + sizeOfCanvas / 3, sizeOfCanvas, sizeOfCanvas / 3);
  ctx.strokeRect(x + sizeOfCanvas / 3, y, sizeOfCanvas / 3, sizeOfCanvas);

  if (timesOfRepetition > 1) {
    drawSquareFractal(x, y + sizeOfCanvas / 3, sizeOfCanvas / 3, timesOfRepetition - 1);
    drawSquareFractal(x + sizeOfCanvas / 3, y, sizeOfCanvas / 3, timesOfRepetition - 1);
    drawSquareFractal(x + sizeOfCanvas / 3, y + sizeOfCanvas * (2 / 3), sizeOfCanvas / 3, timesOfRepetition - 1);
    drawSquareFractal(x + sizeOfCanvas * (2 / 3), y + sizeOfCanvas / 3, sizeOfCanvas / 3, timesOfRepetition - 1);
  }
}

drawSquareFractal(0, 0, 600, 4);