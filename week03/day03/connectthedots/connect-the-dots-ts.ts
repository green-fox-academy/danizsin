
'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that takes 1 parameter:
// A list of [x, y] points
// and connects them with green lines.
// Connect these to get a box: [[10, 10], [290,  10], [290, 290], [10, 290]]
// Connect these: [[50, 100], [70, 70], [80, 90], [90, 90], [100, 70],
// [120, 100], [85, 130], [50, 100]]

let sqrDots: any[] = [[10, 10], [290, 10], [290, 290], [10, 290]];
let shapeDots: any[] = [[50, 100], [70, 70], [80, 90], [90, 90], [100, 70], [120, 100], [85, 130], [50, 100]];

function connectDots(para: any[]) {
  para.forEach((e, i, a) => {
    if (i < para.length - 1) {
      ctx.beginPath();
      ctx.strokeStyle = "magenta";
      ctx.moveTo(a[i][0], a[i][1]);
      ctx.lineTo(a[i + 1][0], a[i + 1][1]);
      ctx.stroke();
    } else if (i === para.length - 1) {
      ctx.beginPath();
      ctx.strokeStyle = "magenta";
      ctx.moveTo(a[i][0], a[i][1]);
      ctx.lineTo(a[0][0], a[0][1]);
      ctx.stroke();
    }
  });
}

connectDots(sqrDots);
connectDots(shapeDots);