
// Write a function that takes a filename as a parameter
// The file contains an ended Tic-Tac-Toe match
// We have provided you some example files (draw.txt, win-x.txt, win-o.txt)
// Return "X", "O" or "Draw" based on the input file
export { };
const fs = require('fs');

function readFromFile(fileName: string): string {
  try {
    return fs.readFileSync(fileName, 'utf-8');
  }
  catch (e) {
    console.log(`couldnt find this file: ${fileName}`);
    return null;
  }
}

function ticTacResult(fileName: string): string {
  const myFile: string = readFromFile(fileName);
  if (myFile !== null) {
    let myFileInArray: string[] = myFile.split('\r\n');
    let charsInArray: string[][] = [];
    myFileInArray.map(e => {
      charsInArray.push(e.split(''));
    });
    for (let i: number = 0; i < charsInArray.length; i++) {
      for (let j: number = 0; j < charsInArray[i].length; j++) {
        if ((charsInArray[i][j] === charsInArray[i][j + 1] && charsInArray[i][j] === charsInArray[i][j + 2]) ||
        (charsInArray[i][j] === charsInArray[i + 1][j] && charsInArray[i][j] === charsInArray[i + 2][j]) ||
        (charsInArray[i][j] === charsInArray[i + 1][j + 1] && charsInArray[i][j] === charsInArray[i + 2][j + 2]) ||
        (charsInArray[i][j + 2] === charsInArray[i + 1][j + 1] && charsInArray[i][j + 2] === charsInArray[i + 2][j])) {
          return charsInArray[i][j];
        }
      }
      return 'Draw';
    }
  }
}

console.log(ticTacResult('win-o.txt'));
// Should print "O"

console.log(ticTacResult('win-x.txt'))
// Should print "X"

console.log(ticTacResult('draw.txt'))
// Should print "Draw"