'use strict';
import { Animal } from "./animaltask";

class Farm {
  listofAnimals: Animal[] = [];
  slots: number = 4;

  breed(newAnimal: Animal): void {
    if (this.listofAnimals.length < this.slots) {
      this.listofAnimals.push(newAnimal);
    }
  }

  slaughter(): Animal[] {
    let minArray: number[] = [];
    let minVal: number = 0;
    this.listofAnimals.forEach(e => {
      minArray.push(e.hunger);
    });
    minVal = Math.min(...minArray);
    this.listofAnimals.map((e, i, a) => {
      if (e.hunger === minVal) {
        a.splice(i, 1);
      }
    });
    return this.listofAnimals;
  }
}

let farm1 = new Farm();
farm1.breed(new Animal(60, 25));
farm1.breed(new Animal(80, 40));
farm1.breed(new Animal(30, 45));
farm1.breed(new Animal(40, 65));
farm1.breed(new Animal(70, 35));
farm1.breed(new Animal(10, 5));
farm1.breed(new Animal(42, 55));

console.log(farm1.listofAnimals);
console.log(farm1.slaughter());

