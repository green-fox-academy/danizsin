import { Pirate } from "./Pirate";

export class Ship {

  static idCounter: number = 0;
  id: number;
  crew: Pirate[][] = [];
  captain: Pirate;
  constructor() {
    Ship.idCounter += 1;
    this.id = Ship.idCounter;
  }

  fillship(addCrew: Pirate[]) {
    const gonnaBeCaptain: number = Math.floor(Math.random() * addCrew.length);
    let heIsTheCaptain: Pirate = addCrew.splice(gonnaBeCaptain, 1)[0];
    this.captain = heIsTheCaptain;
    this.crew.push(addCrew);
    this.crew.forEach(e => {
      e.forEach(elem => {
        console.log(`${elem.name} is ready for duty!!!\r\n`);
      });
    });
    console.log(`${this.captain.name} is the captain of the ship!!!`);
  }
}
