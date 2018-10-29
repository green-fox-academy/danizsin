export{}
'use strict';



// Write a program that draws a
// diamond like this:
//
//    *
//   ***
//  *****
// *******
//  *****
//   ***
//    *
//
// The diamond should have as many lines as lineCount is
let lineCount: number = 7;
for(let i:number=1; i<=lineCount; i+=2){

    let currString:string=""; 

    for(let k:number=1; k<=(lineCount-i)/2; k++){
        currString=currString+" ";
    }

    for (let j:number= 1; j <= i; j++){
        currString=currString+"*";
    }

    for(let n:number=1; n<=(lineCount-i)/2; n++){
        currString=currString+" ";
    }
    console.log(currString);
}
for(let i:number=lineCount-2; i>=1; i-=2){

    let currString:string=""; 

    for(let k:number=1; k<=(lineCount-i)/2; k++){
        currString=currString+" ";
    }

    for (let j:number= 1; j <= i; j++){
        currString=currString+"*";
    }

    for(let n:number=1; n<=(lineCount-i)/2; n++){
        currString=currString+" ";
    }
    console.log(currString);
}