
// Write a function that takes a filename as string,
// then returns the number of lines the file contains.
// It should return zero if it can't open the file, and
// should not raise any error.

export { };
const fs = require('fs');


function countEachline(fileName: string): number {
  let counter: number = 0;
  try {
    const myFile: string = fs.readFileSync(fileName, 'utf-8');
    counter += myFile.split('\r\n').length;
    return counter;
  }
  catch (e) {
    return counter;
  }

}

console.log(countEachline('myfile.txt'));
// console.log(readFile('my-file.txt'));
