// Write a function that copies a file to an other
// It should take the filenames as parameters
// It should return a boolean that shows if the copy was successful

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

function copyContent(fromFile: string, toFile: string): void {
  const myFile: string = readFromFile(fromFile);
  if (myFile !== null) {
    fs.appendFileSync(toFile, myFile);
  }
}

copyContent('myfile.txt', 'newfile.txt');