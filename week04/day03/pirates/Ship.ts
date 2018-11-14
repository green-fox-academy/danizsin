import { Pirate } from "./Pirate";

export class Ship {

  static shipIdCounter: number = 0;
  shipId: number;
  crew: Pirate[][] = [];
  captain: Pirate;

  constructor() {
    Ship.shipIdCounter += 1;
    this.shipId = Ship.shipIdCounter;
  }

  //        PREPARES CREW TO BE INITIALIZED TO THE FILLSHIP METHOD
  initCrew(): Pirate[] {
    const randNumForCrewMembers: number = Math.floor(Math.random() * 25)+2;
    let initCrewArray: Pirate[] = [];
    for (let i: number = 0; i < randNumForCrewMembers; i++) {
      initCrewArray.push(new Pirate());
    }
    return initCrewArray;
  }

  //        FILLS THE SHIP WITH CREW
  fillship(addCrew: Pirate[]): void {
    let gonnaBeCaptain: number = Math.floor(Math.random() * addCrew.length);
    let heIsTheCaptain: Pirate = addCrew.splice(gonnaBeCaptain, 1)[0];
    this.captain = heIsTheCaptain;
    this.crew.push(addCrew);
  }

  //      RETURNS CAPTAINS DRUNK LEVEL
  captainsDrunkLevel(): number {
    return this.captain.isDrunk;
  }

  //      RETURNS CAPTAINS STATE
  isCaptainDead(): boolean {
    return this.captain.isDead;
  }

  //      RETURNS NUMBER OF ALIVE PIRATES ON BOARD
  numberOfAlivePirates(): number {
    let countAlives: number = 0;
    this.crew.forEach(e => {
      e.forEach(elem => {
        if (elem.isDead === false) {
          countAlives += 1;
        }
      });
    });
    return countAlives;
  }

  //      CREATES A BATTLE BETWEEN TWO SHIPS
  battle(againstThisShip: Ship): boolean {
    const ownBattleScore: number = this.numberOfAlivePirates() - this.captainsDrunkLevel();
    const enemyBattleScore: number = againstThisShip.numberOfAlivePirates() - againstThisShip.captainsDrunkLevel();
    const randNumOfRums: number = Math.floor(Math.random() * 3);
    const randNumOfDeaths: number = Math.floor(Math.random() * 5)+3;
    if (ownBattleScore > enemyBattleScore) {
      this.crew[0].forEach(elem => {
        for (let i: number = 0; i < randNumOfRums; i++) {
          elem.drinkSomeRum();
        }
      });
      for (let j: number = 0; j < randNumOfRums; j++) {
        this.captain.drinkSomeRum();
      }
      if (againstThisShip.numberOfAlivePirates() > randNumOfDeaths) {
        againstThisShip.crew[0].forEach(e => {
          for (let g: number = 0; g < randNumOfDeaths; g++) {
            e.die();
          }
        });
      } else if(againstThisShip.numberOfAlivePirates() <= randNumOfDeaths){
        againstThisShip.crew[0].forEach(e => {
          for (let g: number = 0; g < againstThisShip.numberOfAlivePirates(); g++) {
            e.die();
          }
        });
      }
    } else {
      againstThisShip.crew[0].forEach(elem => {
        for (let i: number = 0; i < randNumOfRums; i++) {
          elem.drinkSomeRum();
        }
      });
      for (let j: number = 0; j < randNumOfRums; j++) {
        againstThisShip.captain.drinkSomeRum();
      }
      if (this.numberOfAlivePirates() > randNumOfDeaths) {
        this.crew[0].forEach(e => {
          for (let g: number = 0; g < randNumOfDeaths; g++) {
            e.die();
          }
        });
      } else if (this.numberOfAlivePirates() <= randNumOfDeaths) {
        this.crew[0].forEach(e => {
          for (let g: number = 0; g < this.numberOfAlivePirates(); g++) {
            e.die();
          }
        });
      }
    }
    return ownBattleScore > enemyBattleScore;
  }
}