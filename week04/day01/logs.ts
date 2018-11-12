// Read all data from 'log.txt'.
// Each line represents a log message from a web server
// Write a function that returns an array with the unique IP adresses.
// Write a function that returns the GET / POST request ratio.

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

function uniqueAddresses(fileName: string):any {
  const myFile: string = readFromFile(fileName);
  if (myFile !== null) {
    let uniqueIPs: number[] = [];
    const myFileInArray: any[] = myFile.split('\r\n');
    myFileInArray.forEach(e => {
      e.split(' ').forEach((elem, ind, arr) => {
        if (!uniqueIPs.includes(arr[8])) {
          uniqueIPs.push(arr[8]);
        }
      });
    });
    return uniqueIPs;
  } else return `couldnt find this file: ${fileName}`;

}

console.log(uniqueAddresses('log.txt'));