import { Pirate } from "./Pirate";
import { Ship } from "./Ship";
import { BattleApp } from "./BattleApp";

let bigship = new Ship();
let smallship = new Ship();
let giantship = new Ship();
bigship.fillship(bigship.initCrew());
smallship.fillship(smallship.initCrew());
giantship.fillship(giantship.initCrew());

function generateThisManyDrinkRum() {
  return Math.floor(Math.random() * 8) + 1;
}
//      smallship captain init drunk lvl
for (let i: number = 0; i < generateThisManyDrinkRum(); i++) {
  smallship.captain.drinkSomeRum();
}

//      giantship captain init drunk lvl
for (let i: number = 0; i < generateThisManyDrinkRum(); i++) {
  giantship.captain.drinkSomeRum();
}
//      bigship captain init drunk lvl
for (let i: number = 0; i < generateThisManyDrinkRum(); i++) {
  bigship.captain.drinkSomeRum();
}

let battle1 = new BattleApp();
battle1.simulateOneBattle(bigship, smallship);
battle1.simulateOneBattle(smallship, giantship);