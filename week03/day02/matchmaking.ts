
'use strict';
// Write a function that joins two array by matching one girl with one boy in a new array
// Exepected output: ["Eve", "Joe", "Ashley", "Fred"...]

let girls: string[] = ['Eve', 'Ashley', 'Claire', 'Kat', 'Jane'];
let boys: string[] = ['Joe', 'Fred', 'Tom', 'Todd', 'Neef', 'Jeff'];
function makingMatches(par1: string[], par2: string[]): string[] {
  let both: string[] = [];
  if (par1.length < par2.length) {
    for (let i: number = 0; i < par1.length; i++) {
      both.push(par1[i]);
      both.push(par2[i]);
    }
    return both;
  } else {
    for (let i: number = 0; i < par2.length; i++) {
      both.push(par1[i]);
      both.push(par2[i]);
    }
    return both;
  }
}

console.log(makingMatches(boys, girls));

export = makingMatches;