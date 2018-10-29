export {}
'use strict';

let lineCount: number = 4;

// Write a program that draws a
// pyramid like this:
//
//    *
//   ***
//  *****
// *******
//
// The pyramid should have as many lines as lineCount is
let baseLine:number= lineCount*2-1;
for(let i:number=1 ; i<=baseLine ; i+=2)
{
    let currentLine:string="";
    for ( let k:number=0; k<=(baseLine-i)/2; k++){
        currentLine=currentLine+" ";
    }

    for( let s:number=0; s<i; s++){
        currentLine=currentLine+"*";
    }
    for ( let l:number=0; l<=(baseLine-i)/2; l++){
        currentLine=currentLine+" ";
    }
    console.log(currentLine); 
}