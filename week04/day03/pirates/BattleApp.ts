import { Pirate } from "./Pirate";
import { Ship } from "./Ship";
import { log } from "util";

export class BattleApp {

  static battleIdCounter: number = 0;
  battleId: number;

  constructor() {
    BattleApp.battleIdCounter += 1;
    this.battleId = BattleApp.battleIdCounter;
  }

  simulateOneBattle(firstShip: Ship, secondShip: Ship) {
    // console.log(firstShip.numberOfAlivePirates());
    // console.log(secondShip.numberOfAlivePirates());
    while (secondShip.numberOfAlivePirates() > 0 && secondShip.isCaptainDead() === false && firstShip.numberOfAlivePirates() > 0 && firstShip.isCaptainDead() === false) {
      firstShip.battle(secondShip);
      console.log(firstShip.numberOfAlivePirates());
      console.log(secondShip.numberOfAlivePirates());
      if (secondShip.numberOfAlivePirates() === 0) {
        console.log(`First ship No.${firstShip.shipId} won the battle with ${firstShip.numberOfAlivePirates()} remaining pirates!`);
      } else if (firstShip.numberOfAlivePirates() === 0) {
        console.log(`Second ship No.${secondShip.shipId} won the battle with ${secondShip.numberOfAlivePirates()} remaining pirates!`);
      }
    }

  }
}