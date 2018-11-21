import { test } from 'tape';

const numbers: number[] = [1, 3, 5, 7, 10, 40];
const oneElemArr: number[] = [42];
const emptyArray: number[] = []
const nullElem: number[] = [null];
const stringArr: string = 'test';

class Sum {
  sum(numArray: number[]): number {
    let sumOfElements: number = 0;
    numArray.forEach(e => {
      sumOfElements += e;
    });
    return sumOfElements;
  }
}
let summmer = new Sum();

test('test sum of numbers', t => {
  t.equal(summmer.sum(numbers), 66);
  t.end();
});

test('test sum of numbers', t => {
  t.equal(summmer.sum(oneElemArr), 42);
  t.end();
});

test('test sum of numbers', t => {
  t.equal(summmer.sum(emptyArray), 0);
  t.end();
});

test('test sum of numbers', t => {
  t.equal(summmer.sum(nullElem), 0);
  t.end();
});