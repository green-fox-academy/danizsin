
// -  Create (dynamically*) a two dimensional list
//    with the following matrix**. Use a loop!
//
//    0 0 0 1
//    0 0 1 0
//    0 1 0 0
//    1 0 0 0
//
// -  Print this two dimensional list to the console
//
// * size should depend on a variable
// ** Relax, a matrix is just like an array

let matrix = [];
let colsnrows: number = 10;
for (let i: number = 0; i < colsnrows; i++) {
    let currArr:number[]=[];
    for(let k:number=colsnrows-1; k>=0; k--){
        if(i==k){
            currArr.push(5);
        } else currArr.push(0);
    }
    matrix.push(currArr);
}
matrix.map(e => console.log(e));

