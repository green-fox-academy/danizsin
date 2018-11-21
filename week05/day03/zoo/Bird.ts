import { Animal } from "./Animal";
import { Flyable } from "../flyable/Flyable";

export class Bird extends Animal implements Flyable {
  constructor(name: string) {
    super(name);
  }

  breed() {
    return 'laying eggs.';
  }

  fly() {
    return 'the bird can fly'
  }
}