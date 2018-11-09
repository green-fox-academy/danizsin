'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');


const startingX: number = 62;
const canvasHalf: number = canvas.width / 3;
const side: number = 25;

const sideSq: number = side ** 2;
const smallDiag: number = side * Math.sqrt(3);
const smallDiagpertwo: number = smallDiag / 2;
const offSet: number = sideSq - smallDiagpertwo ** 2;
const rootOffSet: number = Math.sqrt(offSet);
const sidePlusRootOffSet: number = side + rootOffSet;

for (let i: number = 0; i < 7; i++) {
  let h: number = 2;
  for (let j: number = 0; j < i + 4; j++) {
    if (i < 4) {
      connectTheHexagon(prepareHexArray(startingX + sidePlusRootOffSet * i, (canvasHalf - (smallDiag / 2) * i) + smallDiag * j));
    } else if (i === 4 && j < 6) {
      connectTheHexagon(prepareHexArray(startingX + sidePlusRootOffSet * i, (canvasHalf - (smallDiag / 2) * (i - h)) + smallDiag * (i - 4)));
    } else if (i === 5 && j < 5) {
      connectTheHexagon(prepareHexArray(startingX + sidePlusRootOffSet * i, (canvasHalf - (smallDiag / 2) * (i - h)) + smallDiag * (i - 4)));
    } else if (i === 6 && j < 4) {
      connectTheHexagon(prepareHexArray(startingX + sidePlusRootOffSet * i, (canvasHalf - (smallDiag / 2) * (i - h)) + smallDiag * (i - 4)));
    }
    h += 2;
  }
}

function connectTheHexagon(hexArr: any[]): void {
  hexArr.forEach((e, i, a) => {
    if (i < hexArr.length - 1) {
      ctx.beginPath();
      ctx.lineWidth = 3;
      ctx.strokeStyle = 'blue';
      ctx.moveTo(a[i][0], a[i][1]);
      ctx.lineTo(a[i + 1][0], a[i + 1][1]);
      ctx.stroke();
    } else if (i === hexArr.length - 1) {
      ctx.beginPath();
      ctx.lineWidth = 3;
      ctx.strokeStyle = 'blue';
      ctx.moveTo(a[i][0], a[i][1]);
      ctx.lineTo(a[0][0], a[0][1]);
      ctx.stroke();
    }
  });
}

function prepareHexArray(x: number, y: number): any[] {

  const hexagon: any[] = [[x, y], [x + side / 2, y - (side * Math.sqrt(3)) / 2], [x + (side + side / 2), y - (side * Math.sqrt(3)) / 2], [x + (side * 2), y], [x + (side + side / 2), y + (side * Math.sqrt(3)) / 2], [x + (side / 2), y + (side * Math.sqrt(3)) / 2]];
  return hexagon;
}
