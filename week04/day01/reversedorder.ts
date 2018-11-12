// Create a method that decrypts reversed-order.txt

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

function reverseOrderOfText(fileName: string): string {
  const myFile: string = readFromFile(fileName);
  if (myFile !== null) {
    let reversedText: string = myFile.split('\r\n').reverse().join('\r\n');
    return reversedText;
  } else {
    return `couldnt find this file: ${fileName}`;
  }
}

console.log(reverseOrderOfText('reversedorder.txt'));