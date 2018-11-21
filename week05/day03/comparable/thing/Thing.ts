import { Comparable } from "./Comparable";
import { Printable } from "../../printallfields/printAllFields";

class Thing implements Comparable, Printable {
  private _completed: boolean;
  private _name: string;

  constructor(_name: string) {
    this._name = _name;
    this._completed = false;
  }

  public complete() {
    this._completed = true;
  }

  getName() {
    return this._name;
  }
  getCompleted() {
    return this._completed;
  }

  compareTo(other: Thing): number {
    if (this.getCompleted() && other.getCompleted() === false) {
      return -1;
    }
    if (this.getCompleted() === false && other.getCompleted()) {
      return 1;
    }
    return 0;
  }

  printAllFields() {
    return Object.keys(this).join(', ');
  }
}
let newArray: Thing[] = [];
let thing1 = new Thing('kefe');
let thing2 = new Thing('sátor');
let thing3 = new Thing('létra');
let thing4 = new Thing('labda');
thing1.complete();
newArray.push(thing1);
newArray.push(thing2);
newArray.push(thing3);
thing4.complete();
newArray.push(thing4);

newArray.sort(function (a: Thing, b: Thing): number {
  return a.compareTo(b);
});
console.log(newArray);

console.log('------------------\r\n');
console.log(thing1.printAllFields());




