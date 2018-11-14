import { Pirate } from "./Pirate";
import { Ship } from "./Ship";

const crew1: Pirate[] = [
  new Pirate('Jack'),
  new Pirate('Jones'),
  new Pirate('Phil'),
  new Pirate('Kathrine')
]

const crew2: Pirate[] = [
  new Pirate('Tonny'),
  new Pirate('Josh'),
  new Pirate('Paul'),
  new Pirate('Elizabeth'),
  new Pirate('Donald'),
  new Pirate('Mickey')
]
//    THIS IS ONLY FOR THE SINGLE PIRATE BATTLES  
let howManyChugsToDrink: number = 9;
for (let i: number = 1; i <= howManyChugsToDrink; i++) {
  crew1[1].drinkSomeRum();
}
crew1[1].howsItGoingMate();
crew1[1].brawl(crew1[3]);
crew1[1].brawl(crew1[2]);
crew1[2].brawl(crew1[0]);
