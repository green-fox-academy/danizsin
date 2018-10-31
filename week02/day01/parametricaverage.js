'use strict';
exports.__esModule = true;
// Write a program that asks for a number.
// It would ask this many times to enter an number,
// if all the numbers are entered, it should print the sum and average of these
// numbers like:
//
// Sum: 22, Average: 4.4
console.log("please enter a number");
var stdin = process.openStdin();
var initNum = 0;
var sum = 0;
var counter = 0;
stdin.addListener("data", function (d) {
    if (counter == 0) {
        initNum = +d.toString().trim();
        console.log("enter " + (initNum - counter) + " more numbers");
    }
    else if (counter < initNum) {
        sum += +d.toString().trim();
        console.log("enter " + (initNum - counter) + " more numbers");
    }
    else if (counter === initNum) {
        sum += +d.toString().trim();
        console.log("Sum: " + sum + ", Average: " + sum / initNum);
        process.exit();
    }
    ++counter;
});
