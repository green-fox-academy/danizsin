
// Write a function that takes a filename as string,
// then returns the number of lines the file contains.
// It should return zero if it can't open the file, and
// should not raise any error.

export { };
const fs = require('fs');

function readFile(fileName: string): string {
  try {
    return fs.readFileSync(fileName, 'utf-8');
  }
  catch (e) {
    return null;
  }
}

function countEachline(fileName: string): number {
  let counter: number = 0;
  const myFile: string = readFile(fileName);
  if (myFile !== null) {
    counter += myFile.split('\r\n').length;
    return counter;
  } else return counter;
}

console.log(countEachline('myfile.txt'));
