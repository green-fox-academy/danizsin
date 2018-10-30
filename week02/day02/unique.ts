
//  Create a function that takes a list of numbers as a parameter
//  Returns a list of numbers where every number in the list occurs only once

function unique(arr: number[]) {
    let uniq: number[] = [];
    arr.forEach(e => {
        if (uniq.includes(e)===false) {
            uniq.push(e);
        }
    })
    return uniq;
}

//  Example
console.log(unique([1, 11, 34, 11, 52, 61, 1, 34]))
//  should print: `[1, 11, 34, 52, 61]`