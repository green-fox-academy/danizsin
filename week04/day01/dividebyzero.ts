// Create a function that takes a number
// divides ten with it,
// and prints the result.
// It should print 'fail' if the parameter is 0

export { };

function divideTenWithIt(num: number): number {
  if (num === 0) {
    throw 'fail';
  }
  return 10 / num;
}
try {
  console.log(divideTenWithIt(0));
}
catch (e) {
  console.log(e);
}