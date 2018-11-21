import { Comparable } from "./Comparable";
import { Printable } from "../../printallfields/printAllFields";

class Domino implements Comparable, Printable {
  values: number[];
  constructor(valueA: number, valueB: number) {
    this.values = [valueA, valueB];
  }
  compareTo(other: Domino): number {
    return this.values[0] - other.values[0];
  }

  printAllFields() {
    return Object.keys(this);
  }
}

export { Domino };