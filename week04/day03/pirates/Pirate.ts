export class Pirate {

  static idCounter: number = 0;
  id: number;
  name: string;
  isDrunk: number = 0;
  replyIfDrunk: string = 'Pour me anudder!'
  replyIfKo: string = 'Arghh, I\'ma Pirate. How d\'ya d\'ink its goin?';
  isDead: boolean = false;

  constructor(name: string = 'piratename') {
    Pirate.idCounter++;
    this.id = Pirate.idCounter;
    this.name = name + this.id;
  }

  drinkSomeRum(): void {
    if (this.isDead) {
      // console.log(`${this.name} passed away, cant drink anymore`);
    } else if (this.isDrunk < 14) {
      this.isDrunk += 1;
    } else if (this.isDrunk >= 14) {
      this.die();
      // console.log(`${this.name} passed away, cant drink anymore`);
    }
  }

  howsItGoingMate(): void {
    if (this.isDrunk < 5) {
      console.log(this.replyIfDrunk);
    } else {
      console.log(this.replyIfKo);
      this.isDrunk = 0;

    }
  }

  die(): void {
    this.isDead = true;
  }

  brawl(fightAgainst: Pirate): void {
    if (this.isDead === false && fightAgainst.isDead === false) {
      const whoWins = Math.floor(Math.random() * 100);
      console.log(whoWins);

      if (whoWins < 34) {
        this.die();
        console.log(`${this.name} died in the battle!`);
      } else if (whoWins > 33 && whoWins < 67) {
        fightAgainst.die();
        console.log(`${fightAgainst.name} died in the battle!`);
      } else {
        this.die();
        fightAgainst.die();
        console.log(`${this.name} and ${fightAgainst.name} both died in the battle!`);
      }

    } else {
      if (this.isDead) {
        console.log(`Sorry, ${this.name} is dead!`);
      } else if (fightAgainst.isDead) {
        console.log(`Sorry, ${fightAgainst.name} is dead!`);
      }

    }
  }
}