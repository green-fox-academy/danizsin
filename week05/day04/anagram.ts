import { test } from 'tape';

function anagram(a: string, b: string): boolean {
  let y = a.split('').sort().join('');
  let z = b.split('').sort().join('');
  if (y === z) {
    return true;
  } else return false;
}

test('test if strings are anagrams', t => {
  t.equal(anagram('apple', 'snake'), false);
  t.end();
});

test('test if strings are anagrams', t => {
  t.equal(anagram('small', 'mslal'), true);
  t.end();
});