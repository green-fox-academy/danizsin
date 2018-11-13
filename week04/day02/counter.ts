'use strict';
export { };

class Counter {
  integer: number;

  constructor(int: number = 0) {
    this.integer = int;
  }

  add(addThisNum: number = 1): void {
    this.integer += addThisNum;
  }

  get(): string {
    return this.integer.toString();
  }

  reset(): void {
    this.integer = 0;
  }
}

let counter1 = new Counter(20);
counter1.add(10);
console.log(counter1.get());
counter1.reset();
console.log(counter1.get());




