// Create a method that decrypts encoded-lines.txt
export { };
const fs = require('fs');

function readFromFile(fileName: string): string {
  try {
    return fs.readFileSync(fileName, 'utf-8');
  }
  catch (e) {
    return null;
  }
}

function decryptEncodedLines(fileName: string): string {
  const myFile: string = readFromFile(fileName);
  if (myFile !== null) {
    let myCharsInArray: string[][] = myFile.split('\r\n').map(e => e.split(''));
    let decodedText: string = '';
    for (let oneRow of myCharsInArray) {
      let decodedLine: string = '';
      for (let i: number = 0; i < oneRow.length; i++) {
        if (oneRow[i] === ' ' || oneRow[i] === '\r\n') {
          decodedLine += oneRow[i];
        } else {
          let charCode: number = oneRow[i].charCodeAt(0);
          let prevCharCode: number = charCode - 1;
          let prevChar: string = String.fromCharCode(prevCharCode);
          decodedLine += prevChar;
        }
      }
      decodedText += decodedLine + '\r\n';
    }
    return decodedText;
  } else {
    return `couldnt find this file: ${fileName}`;
  }
}

console.log(decryptEncodedLines('encodedlines.txt'));
