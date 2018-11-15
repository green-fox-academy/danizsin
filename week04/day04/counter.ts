// Write a recursive function that takes one parameter: n and counts down from n.
'use strict';

function countDown(n: number): void {
  console.log(n);
  if (n > 0) {
    countDown(n - 1);
  }
}

countDown(10);