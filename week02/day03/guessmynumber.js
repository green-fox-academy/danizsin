'use strict';
let guessNum = Math.floor(Math.random() * 100 + 1);
let counter = 4;
console.log('Guess my number(1-100)! You have 5 guesses!');
let stdin = process.openStdin();
stdin.addListener('data', function (d) {
  if (d === guessNum) {
    console.log('You are right! Congrats!');
    process.exit();
  } else if (counter > 0) {
    if (d > guessNum) {
      --counter;
      console.log(`Fail! Too high! You have ${counter} more guesses!`);
    }
    if (d < guessNum) {
      --counter;
      console.log(`Fail! Too low! You have ${counter} more guesses!`);
    }
  } else {
    console.log('No more lives! Sorry!');
    process.exit();
  }
});