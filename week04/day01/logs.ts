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

function uniqueAddresses(fileName: string): any {
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

function getGetPostRatio(fileName: string): any {
  const myFile: string = readFromFile(fileName);
  if (myFile !== null) {
    const myFileInArray: any[] = myFile.split('\r\n');
    let sumPost: number = 0;
    let sumGet: number = 0;
    myFileInArray.forEach(e => {
      e.split(' ').forEach((elem, ind, arr) => {
        if (arr[11] === 'POST') {
          sumPost += 1;
        } else if (arr[11] === 'GET') {
          sumGet += 1;
        }
      });
    });
    return `GET/POST ratio: ${sumGet / sumPost}`;
  }
}

console.log(uniqueAddresses('log.txt'));
console.log(getGetPostRatio('log.txt'));
