'use strict';

class Sharpie {
  color: string;
  width: number;
  inkAmount: number;

  constructor(clr: string, wdth: number, inkA: number = 100) {
    this.color = clr;
    this.width = wdth;
    this.inkAmount = inkA;
  }

  use() {
    return this.inkAmount - 1;
  }
}

let sharpie1 = new Sharpie('blue', 200);

console.log(sharpie1.use());

export { Sharpie };