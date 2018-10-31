'use strict';

function palindrome(a: string): string {
  let b: string = a + a.split('').reverse().join('');
  return b;
}

console.log(palindrome('smallduck'));