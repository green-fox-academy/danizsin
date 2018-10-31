'use strict';

function anagram(a: string, b: string): boolean {
  let y = a.split('').sort().join('');
  let z = b.split('').sort().join('');
  if (y === z) {
    return true;
  } else return false;
}

console.log(anagram('small', 'malsl'));
console.log(anagram('Prototype', 'prttyoope'));