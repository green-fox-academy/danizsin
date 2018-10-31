'use strict';
var guessNum = Math.floor(Math.random() * 100 + 1);
// console.log(guessNum);

var counter = 4;
console.log('Guess my number(1-100)! You have 5 guesses!');
var stdin = process.openStdin();
stdin.addListener('data', function (d) {
  if (d == guessNum) {
    console.log('You are right! Congrats!');
    process.exit();
  } else if (counter > 0) {
      if (d > guessNum) {
      console.log(`Fail! Too high! You have ${counter} more guesses!`);
      --counter;
      }
      if (d < guessNum) {
      console.log(`Fail! Too low! You have ${counter} more guesses!`);
      --counter;
      }
  } else {
    console.log('No more lives! Sorry!');
    process.exit();
  }
});