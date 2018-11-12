// Create a method that decrypts reversed-lines.txt

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

function reverseLinesOfText(fileName: string): string {
  const myFile: string = readFromFile(fileName);
  if (myFile !== null) {
    let myFileInArray: string[] = myFile.split('\r\n');
    let reversedText: string = myFileInArray.map(e => e.split('').reverse().join('')).join('\r\n');
    return reversedText;
  } else {
    return `couldnt find this file: ${fileName}`;
  }
}

console.log(reverseLinesOfText('reversedlines.txt'));
