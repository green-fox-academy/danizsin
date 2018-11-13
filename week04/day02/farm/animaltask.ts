'use strict';

class Animal {
  hunger: number;
  thirst: number;

  constructor(hung: number = 50, thirs: number = 50) {
    this.hunger = hung;
    this.thirst = thirs;
  }

  eat() {
    return this.hunger + 1;
  }

  drink() {
    return this.thirst + 1;
  }

  play() {
    return `${this.eat()}, ${this.drink()}`;
  }
}

export { Animal };