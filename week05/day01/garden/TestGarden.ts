import { Tree } from "./Tree";
import { Flower } from "./Flower";
import { Garden } from "./Garden";

let yellowFlower = new Flower('yellow');
let blueFlower = new Flower('blue');
let purpleTree = new Tree('purple');
let orangeTree = new Tree('orange');
let myGarden = new Garden();
myGarden.addPlant(yellowFlower);
myGarden.addPlant(blueFlower);
myGarden.addPlant(orangeTree);
myGarden.addPlant(purpleTree);


myGarden.getCrew().forEach(e => {
  console.log(e.getState());
});

myGarden.waterGarden(40);

myGarden.getCrew().forEach(e => {
  console.log(e.getState());
});

myGarden.waterGarden(70);

myGarden.getCrew().forEach(e => {
  console.log(e.getState());
});