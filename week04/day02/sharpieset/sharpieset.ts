'use strict';
import { Sharpie } from "./sharpietask";


class SharpieSet {
  sharpies: Sharpie[] = [];

  countUsable() {
    let counter: number = 0;
    this.sharpies.forEach(e => {
      if (e.inkAmount > 0) {
        counter++;
      }
    });
    return counter;
  }

  removeThrash() {
    let onlyUsable: Sharpie[] = [];
    this.sharpies.forEach(e => {
      if (e.inkAmount > 0) {
        onlyUsable.push(e);
      }
    });
    return onlyUsable;
  }
  addSharpie(newSharpie: Sharpie) {
    this.sharpies.push(newSharpie);
  }
}
let sharpieSet1 = new SharpieSet();
sharpieSet1.addSharpie(new Sharpie('blue', 200));
sharpieSet1.addSharpie(new Sharpie('red', 200));
sharpieSet1.addSharpie(new Sharpie('black', 200));
sharpieSet1.addSharpie(new Sharpie('yellow', 200, 0));
console.log(sharpieSet1.countUsable());
console.log(sharpieSet1.removeThrash());
