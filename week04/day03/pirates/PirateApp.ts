import { Pirate } from "./Pirate";

let lilPirate = new Pirate('Jack');
let bigPirate = new Pirate('Jones');
let smallPirate = new Pirate('Phil');
let highPirate = new Pirate('Kathrine');

let howManyChugsToDrink: number = 9;
for (let i: number = 1; i <= howManyChugsToDrink; i++) {
  lilPirate.drinkSomeRum();
}
// lilPirate.howsItGoingMate();
lilPirate.brawl(bigPirate);
lilPirate.brawl(smallPirate);
highPirate.brawl(lilPirate);