// Create a method that decrypts duplicated-chars.txt

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

function decryptText(fromFile: string) {
  const myFile: string = readFromFile(fromFile);
  if (myFile !== null) {
    let decryptedText: string = '';
    let myFileInArray: string[][] = myFile.split('\r\n').map(e => e.split(''));
    for (let oneRow of myFileInArray) {
      for (let i: number = 0; i < oneRow.length; i++) {
        if (oneRow[i] === oneRow[i + 1]) {
          oneRow.splice(i, 1);
        }
      }
      decryptedText += oneRow.join('') + '\r\n';
    }
    return decryptedText;
  } else {
    return `couldnt find this file: ${fromFile}`;
  }
}

console.log(decryptText('duplicatedchars.txt'));