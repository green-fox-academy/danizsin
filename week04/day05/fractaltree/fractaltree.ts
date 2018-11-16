'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
var grd = ctx.createLinearGradient(0, 0, 0, 460);
grd.addColorStop(0, 'rgba(27, 49, 95, 0.918)');   //dark blue
grd.addColorStop(1, 'rgb(117, 237, 253)');        //light blue
ctx.fillStyle = grd;
ctx.fillRect(0, 0, 800, 460);                     //SKY
ctx.fillStyle = 'rgba(44, 97, 41, 0.815)';
ctx.fillRect(0, 460, 800, 800);                   // GREEN GROUND

function drawSun() {
  ctx.fillStyle = 'rgba(247, 216, 40, 0.918)';    //YELLOW SUN
  ctx.shadowBlur = 50;
  ctx.shadowColor = "rgba(247, 150, 40, 0.918)";
  ctx.arc(800, 0, 80, Math.PI / 2, Math.PI);
  ctx.lineTo(800, 0);
  ctx.fill();
}

function drawTree(x: number, y: number, branchLength: number, angle: number, branchThickness: number): any {
  ctx.lineWidth = branchThickness;
  ctx.strokeStyle = '#70270afd';
  ctx.fillStyle = `rgba(187, ${Math.floor(Math.random() * 121) + 50}, 24, 0.815)`;
  ctx.shadowBlur = 15;
  ctx.shadowColor = "rgba(0,0,0,0.8)";

  ctx.beginPath();
  ctx.save();

  ctx.translate(x, y);
  ctx.rotate(angle * Math.PI / 180);
  ctx.moveTo(0, 0);
  if (angle > 0) {
    ctx.bezierCurveTo(10, -branchLength / 2, 10, -branchLength / 2, 0, -branchLength);
  } else {
    ctx.bezierCurveTo(-10, -branchLength / 2, -10, -branchLength / 2, 0, -branchLength);
  }
  ctx.stroke();

  if (branchLength < 8) {
    ctx.beginPath();
    ctx.arc(0, -branchLength, 15, 0, Math.PI / 2);
    ctx.fill();
    ctx.restore();
    return;
  }
  drawTree(0, -branchLength, branchLength * 0.8, angle + 10, branchThickness * 0.8);
  drawTree(0, -branchLength, branchLength * 0.8, angle - 10, branchThickness * 0.8);

  ctx.restore();

}

function drawGrass(x: number, y: number, repeat: number): any {
  ctx.shadowBlur = 15;
  ctx.shadowColor = "rgba(0,0,0,0.8)";
  ctx.strokeStyle = 'darkgreen';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x, y - 15);
  ctx.stroke();

  if (repeat > 1) {
    drawGrass(Math.floor(Math.random() * 880) + 10, Math.floor(Math.random() * 230) + 470, repeat - 1);
  } else {
    return;
  }
}

drawSun();
drawGrass(0, 660, 3000);
drawTree(350, 600, 120, 0, 10);

//        DOESNT WORK PROPERLY
// function drawSunRays(x: number, y: number, repeat: number): any {
//   ctx.shadowBlur = 20;
//   ctx.shadowColor = "rgba(0,0,0,0.5)";
//   ctx.strokeStyle = 'rgba(247, 216, 40, 0.918)';
//   ctx.lineWidth = 2;
//   ctx.beginPath();
//   ctx.moveTo(x, y);
//   ctx.lineTo(900, 0);
//   ctx.stroke();

//   if (repeat > 1) {
//     drawSunRays(x, y - Math.floor(Math.random() * 10), repeat - 1);
//     drawSunRays(x + Math.floor(Math.random() * 10), y, repeat - 1);
//   } else {
//     return;
//   }
// }

// drawSunRays(800, 100, 10);
