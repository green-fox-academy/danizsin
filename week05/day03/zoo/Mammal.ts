import { Animal } from "./Animal";

export class Mammal extends Animal {
  constructor(name: string) {
    super(name);
  }

  breed() {
    return 'pushing miniature versions out.';
  }
}