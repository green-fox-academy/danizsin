import { test } from 'tape';

function fibonacci(nthElem: number): number {
  if (nthElem < 2) {
    return nthElem;
  } else {
    return fibonacci(nthElem - 1) + fibonacci(nthElem - 2);
  }
}

test('check fibonacci number sum', t => {
  t.equal(fibonacci(10), 120);
  t.end();
});

test('check fibonacci number sum', t => {
  t.equal(fibonacci(3), 2);
  t.end();
});

test('check fibonacci number sum', t => {
  t.equal(fibonacci('apple'), undefined);
  t.end();
});