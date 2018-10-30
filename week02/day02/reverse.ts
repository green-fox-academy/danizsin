
// -  Create a variable named `numList`
//    with the following content: `[3, 4, 5, 6, 7]`
// -  Reverse the order of the elements in `numList`
// 	   -  do it with the built in method
//	   -  do it with creating a new temp array and a loop
// -  Print the elements of the reversed `numList`

let numList: number[] = [3, 4, 5, 6, 7];
let newArray:number[] = [];
console.log(numList.reverse());

function reverseArray(arr:number[]) {
    
    for (let i = arr.length - 1; i >= 0; i--) {
        newArray.unshift(arr[i]);
    }
    return newArray;
}
reverseArray(numList);
console.log(newArray);