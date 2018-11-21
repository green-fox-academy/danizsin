import { Animal } from "./Animal";

export class Bird extends Animal {
  constructor(name: string) {
    super(name);
  }

  breed() {
    return 'laying eggs.';
  }
}