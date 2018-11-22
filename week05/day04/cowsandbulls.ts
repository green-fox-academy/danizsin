import { test } from 'tape';

class CowsNBulls {
  private numberToGuess: number;
  private state: string;
  private guesses: number;
  constructor(numToGuess: number) {
    this.numberToGuess = numToGuess;
    this.state = 'playing';
    this.guesses = 0;
  }

  guess(tryOutThisNum: number) {
    let numberToBeGuessed: number[] = this.numberToGuess.toString().split('').map(Number);
    let tryOutGuess: number[] = tryOutThisNum.toString().split('').map(Number);
    let guessResult: string = '';

    tryOutGuess.forEach((elem, index) => {
      let cows: number = 0;
      let bulls: number = 0;
      numberToBeGuessed.forEach((e, i) => {
        if (elem === e && index === i) {
          cows++;
        } else if (elem === e && index != i) {
          bulls++;
        }
      });
      if (cows) {
        guessResult += `  cow  `;
      } else if (!cows && bulls) {
        guessResult += `  bull  `;
      } else {
        guessResult += `  fail  `;
      }
    });


    this.guesses += 1;

    if (guessResult === '  cow    cow    cow    cow  ') {
      this.state = 'finished';
      return `Correct! You guessed right! Used ${this.getNumberOfGuesses()} guesses! The game ${this.getState()}!`;
    } else {
      return guessResult;
    }
  }

  getState() {
    return this.state;
  }

  getNumberOfGuesses() {
    return this.guesses;
  }

  getNumberToGuess() {
    return this.numberToGuess;
  }

}

let game = new CowsNBulls(Math.floor(Math.random()*9000)+1000);
console.log(`\t\t\t\t\t\t\t\tCOWS N BULLS\r\n\r\n\t\t\t\t\t\t\t\tTHE GAME STARTED!\r\n\t\t\t\t\t\t\t\tENTER A 4 DIGIT NUMBER!\r\n\t\t\t\t\t\t\t\tCOW : YOUR NUMBER IS AT THE RIGHT PLACE\r\n\t\t\t\t\t\t\t\tBULL : YOUR NUMBER IS SOMEWHERE ELSE\r\n\t\t\t\t\t\t\t\tFAIL : YOUR NUMBER DOESNT EXIST`);

let stdin: any = process.openStdin();
stdin.addListener('data', function (event) {
  let inputNum = event.toString().trim();
  if (inputNum.split('').length === 4) {
    if (+inputNum === game.getNumberToGuess()) {
      console.log(game.guess(inputNum));
      process.exit();
    } else {
      console.log(game.guess(inputNum));
    }
  } else console.log(`Enter a 4 digit number!`);
});