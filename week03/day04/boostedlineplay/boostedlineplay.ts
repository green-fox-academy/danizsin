
'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

const divnum: number = 4;
let quadr: number = canvas.width / divnum;
let lineSpace: number = 30;    //  1 for filling the space
let y: number = lineSpace / divnum;

function drawNet(num: number, row: number, cols: number) {
  ctx.beginPath();
  ctx.strokeStyle = 'purple';
  ctx.moveTo(quadr + cols * quadr, (quadr - num) + quadr * row);
  ctx.lineTo((quadr - num) + cols * quadr, quadr * row);
  ctx.closePath();
  ctx.stroke();

  ctx.beginPath();
  ctx.strokeStyle = 'lightgreen';
  ctx.moveTo((quadr - num) + cols * quadr, quadr + row * quadr);
  ctx.lineTo(cols * quadr, (quadr - num) + quadr * row);
  ctx.closePath();
  ctx.stroke();
}
for (let j: number = 0; j < divnum; j++) {
  for (let k: number = 0; k < divnum; k++) {
    for (let i: number = y; i <= quadr - y; i += y) {
      drawNet(i, k, j);
    }
  }
}

// const divnum: number = 2;
// let quadr: number = canvas.width / divnum;
// let lineSpace: number = 20;
// let y: number = lineSpace / divnum;

// function drawNet(num: number, row:number, cols:number) {
//   ctx.beginPath();
//   ctx.strokeStyle = 'purple';
//   ctx.moveTo(quadr, quadr - num);
//   ctx.lineTo(quadr - num, 0);
//   ctx.closePath();
//   ctx.stroke();

//   ctx.beginPath();
//   ctx.strokeStyle = 'lightgreen';
//   ctx.moveTo(quadr - num, quadr);
//   ctx.lineTo(0, quadr - num);
//   ctx.closePath();
//   ctx.stroke();
// }
// for (let j: number = 0; j < divnum; j++) {
//   for (let k: number = 0; k < divnum; k++) {
//     for (let i: number = y; i <= quadr - y; i += y) {
//       drawNet(i, k, j);
//     }
//   }
// }