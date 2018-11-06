
'use strict';
// Accidentally I messed up this quote from Richard Feynman.
// Two words are out of place
// Your task is to fix it by swapping the right words with code

// Also, log the sentence to the console with spaces in between.
// Create a function called quoteSwap().

let words: string[] = ['What', 'I', 'do', 'create,', 'I', 'cannot', 'not', 'understand.'];

function quoteSwap(par: string[]): string {
  let i: number = par.indexOf('do');
  let j: number = par.indexOf('cannot');
  let temp: string = par[par.indexOf('do')];
  par.splice(i, 1, par[j]);
  par.splice(j, 1, temp);
  return par.join(' ');
}

console.log(quoteSwap(words));
// Expected output: "What I cannot create I do not understand."

export = quoteSwap;