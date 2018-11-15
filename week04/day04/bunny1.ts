// We have a number of bunnies and each bunny has two big floppy ears.
// We want to compute the total number of ears across all the bunnies recursively (without loops or multiplication).

function totalBunnyEars(bunnies: number): number {
  if (bunnies === 0) {
    return 0;
  }
  return 2 + totalBunnyEars(bunnies - 1)
}

console.log(totalBunnyEars(640));