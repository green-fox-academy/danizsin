import { Carrier } from "./Carrier";
import { F16 } from "./F16";
import { F35 } from "./F35";

let myCarrier = new Carrier(5000, 10);
let enemyCarrier = new Carrier(5000, 5);

for (let i: number = 0; i < 10; i++) {
  myCarrier.addAircraft(new F16());
  enemyCarrier.addAircraft(new F16());
}
for (let j: number = 0; j < 6; j++) {
  myCarrier.addAircraft(new F35());
  enemyCarrier.addAircraft(new F35());
}

myCarrier.fill();
enemyCarrier.fill();

// myCarrier.getStatus();
myCarrier.fight(enemyCarrier);