import { test } from 'tape';

function countLetters(countInThis: string) {
  let dictionary: any = {};
  countInThis.split('').forEach(e => {
    if (e != ' ') {
      dictionary[e] ? dictionary[e]++ : dictionary[e] = 1;
    }
  });
  return dictionary;
}

test('count the occurences of letters in a string', t => {
  t.equal(countLetters('almafa'), { a: 3, l: 1, m: 1, f: 1 });
  t.end();
});

test('count the occurences of letters in a string', t => {
  t.equal(countLetters('szoborcsoport a Tanyan'), { s: 2, z: 1, o: 1, b: 4, r: 2, c: 1, p: 1, t: 1, a: 3, T: 1, n: 2, y: 1 });
  t.end();
});
