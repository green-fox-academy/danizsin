import { Vehicle } from "./Vehicle";
import { Flyable } from "./Flyable";

export class Helicopter extends Vehicle implements Flyable {
  constructor(type: string) {
    super(type);
  }
  fly() {
    return 'Helicopter flies away';
  }
}