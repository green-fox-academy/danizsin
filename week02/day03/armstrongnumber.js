'use strict';
let baseNum = [];
let summ = 0;
console.log('Give me a number to detect whether it is an Armstrong number or not!');

let stdin = process.openStdin();
stdin.addListener('data', function (d) {
  armstrong(d);
});

function armstrong(para) {
  let refNum = para;
  baseNum = para.toString().trim().split('');
  baseNum.forEach((e, i, a) => {
    a[i] **= baseNum.length;
    summ += a[i];
  });
  if (summ == refNum) {
    console.log(`${refNum} is an Armstrong number!`);
    process.exit();
  } else {
    console.log(`${refNum} is not an Armstrong number!`);
    process.exit();
 }
}
