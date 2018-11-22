'use strict';

export function add(a: number, b: number): number {
  return a + b;
}

export function maxOfThree(a: number, b: number, c: number): number {
  if (a > b && a > c) {
    return a;
  } else if (b > a && b > c) {
    return b;
  }
  return c;
}

export function median(pool: number[]): number {
  if (pool.length % 2 === 1) {
    return pool[Math.floor((pool.length - 1) / 2)];
  } else {
    return (pool[Math.floor((pool.length - 1) / 2)] + pool[Math.floor((pool.length) / 2)]) / 2;
  }
}

export function isVowel(character: string): boolean {
  return ['a', 'A', 'u', 'U', 'o', 'O', 'e', 'E', 'i', 'I'].some(vowel => vowel === character);
}

export function translate(hungarian: string): string {
  let teve = hungarian;
  let length = teve.length;

  for (let i = 0; i < length; i++) {
    let c = teve[i];
    if (isVowel(c)) {
      teve = teve.split(c).join(`${c}v${c}`);
      i += 2;
      length += 2;
    }
  }
  return teve;
}