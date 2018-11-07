
'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw four different size and color rectangles.
// Avoid code duplication.

function fourSize(x,y,z) {
  ctx.fillRect(x, y, z, z);
  ctx.fillStyle = `rgb(${i*25+100},${i*35},${i*55})`;
}

for (let i: number = 0; i < 4; i++) {
  fourSize((25*i)+(i*50+100),i*30+100,i*10+20);
}