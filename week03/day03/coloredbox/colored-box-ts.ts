'use strict';
const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

ctx.beginPath();
ctx.moveTo(50, 50);
ctx.strokeStyle = 'black';
ctx.lineTo(50, 150);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = 'blue';
ctx.moveTo(50, 150);
ctx.lineTo(150, 150);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = 'green';
ctx.moveTo(150, 150);
ctx.lineTo(150, 50);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = 'red';
ctx.moveTo(150, 50);
ctx.lineTo(50, 50);
ctx.stroke();


// draw a box that has different colored lines on each edge.