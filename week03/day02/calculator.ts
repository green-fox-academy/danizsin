'use strict';
// Create a simple calculator application which does read the parameters from the standard input
// and prints the result to the console.

// It should support the following operations, create function called "calculate()" :
// +, -, *, /, % and it should support two operands:

// The format of the expressions must be: {operation} {operand} {operand}.
// Examples: "+ 3 3" (the result will be 6) or "* 4 4" (the result will be 16)

// You should use the command line arguments to accept user input

// It should work like this:

// Start the program with "node calculator.js + 5 6"
// If number of arguments are not correct, print some nice errors
// Else print the result
// Say goodbye

const args = process.argv.splice(2); // Just a helper for you to get started

console.log('Input params are', args);

function calculator(args: any[]): any {
  let operation: string = args[0];
  let oper1: number = +args[1];
  let oper2: number = +args[2];

  if (operation === '+' && typeof (oper1) === 'number' && typeof (oper2) === 'number') {

    return oper1 + oper2;

  } else if (operation === '-' && typeof (oper1) === 'number' && typeof (oper2) === 'number') {

    return oper1 - oper2;

  } else if (operation === 'x' && typeof (oper1) === 'number' && typeof (oper2) === 'number') {

    return oper1 * oper2;

  } else if (operation === 'div' && typeof (oper1) === 'number' && typeof (oper2) === 'number') {

    return oper1 / oper2;

  } else if (operation === '%' && typeof (oper1) === 'number' && typeof (oper2) === 'number') {

    return oper1 % oper2;

  } else return '404 - operation not valid or first/second parameters not numbers';
}

console.log(calculator(args));
console.log('Good bye!!!');

export = calculator;