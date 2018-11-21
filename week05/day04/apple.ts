import { test } from 'tape';

class Apple {
  getApple() {
    return 'apple';
  }
}

let apple = new Apple();

function testFunc(stringToCheck: string) {
  return stringToCheck === 'apple';
}

test('test if string is apple', t => {
  const actual = testFunc(apple.getApple());
  const expected = true;

  t.equal(actual, expected);
  t.end();
});

