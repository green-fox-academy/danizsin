'use strict';
import { Sharpie } from "./sharpie";


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
}