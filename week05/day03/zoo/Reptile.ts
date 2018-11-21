import { Animal } from "./Animal";

export class Reptile extends Animal {
  constructor(name: string) {
    super(name);
  }

  breed() {
    return 'laying eggs.';
  }
}