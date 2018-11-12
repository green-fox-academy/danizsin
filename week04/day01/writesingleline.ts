import { fileURLToPath } from "url";

// Open a file called 'my-file.txt'
// Write your name in it as a single line
// If the program is unable to write the file,
// then it should print an error message like: 'Unable to write file: my-file.txt'

export { };
const fs = require('fs');

function readFromFile(fileName: string): string {
  try {
    return fs.readFileSync(fileName, 'utf-8');
  } catch (e) {
    console.log(`unable to write file: ${fileName}`);
    return null;
  }
}

function writeMyName(name: string, file: string): void {
  const myFile: string = readFromFile(file);
  if (myFile !== null) {
    fs.appendFileSync(file, name);
  }
}

writeMyName('Zsin Dani', 'myfile.txt');
