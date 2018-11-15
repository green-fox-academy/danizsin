// Write a recursive function that takes one parameter: n and adds numbers from 1 to n.

function numberAdder(n: number): number {
  if (n > 0) {
    return n + (numberAdder(n - 1));
  } else {
    return 0;
  }
}

console.log(numberAdder(15));
