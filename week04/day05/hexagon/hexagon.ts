'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');


function drawHexagon(x: number, y: number, size: number, repeat: number) {
  ctx.beginPath();
  ctx.moveTo(x + size * Math.cos(0), y + size * Math.sin(0));

  for (let side: number = 0; side < 7; side++) {
    ctx.lineTo(x + size * Math.cos(side * 2 * Math.PI / 6), y + size * Math.sin(side * 2 * Math.PI / 6));
  }
  ctx.stroke();

  if (repeat > 1) {
    drawHexagon(x - size / 1.5, y, size / 3, repeat - 1);
    drawHexagon(x + size / 1.5, y, size / 3, repeat - 1);
    drawHexagon(x - size / 3, y - size / 1.73, size / 3, repeat - 1);
    drawHexagon(x + size / 3, y - size / 1.73, size / 3, repeat - 1);
    drawHexagon(x - size / 3, y + size / 1.73, size / 3, repeat - 1);
    drawHexagon(x + size / 3, y + size / 1.73, size / 3, repeat - 1);
  } else {
    return;
  }
}


drawHexagon(300, 300, 300, 5);