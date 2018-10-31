export { };
'use strict';

// Create a program that draws a chess table like this
//
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % %
//  % % % %
//

let sign: string = '#';
let space: string = ' ';
let cols: number = 8;

for (let i: number = 0; i < cols; i++) {
	let currString: string = '';
	if (i % 2 === 0) {
		for (let j: number = 0; j < cols; j++) {
			if (j % 2 === 0) {
				currString = currString + sign;
			} else {
				currString = currString + space;
			}
		}
	} else {
		for (let l: number = 0; l < cols; l++) {
			if (l % 2 === 0) {
				currString = currString + space;
			} else {
				currString = currString + sign;
			}
		}
	}
	console.log(currString);
}