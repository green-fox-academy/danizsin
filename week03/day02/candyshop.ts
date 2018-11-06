
'use strict';

let shopItems: any[] = ['Cupcake', 2, 'Brownie', false];

// Accidentally we added "2" and "false" to the array.
// Your task is to change from "2" to "Croissant" and change from "false" to "Ice cream"
// No, don't just remove the items :)
// Create a function called sweets() which takes the list as a parameter.
// Expected output: "Cupcake", "Croissant", "Brownie", "Ice cream"

function sweets(para: any[]): string[] {
  para.forEach((e, i, a) => {
    if (e === 2) {
      para[i] = 'Croissant';
    }
    if (e === false) {
      para[i] = 'Ice cream';
    }
  });
  return para;
}

console.log(sweets(shopItems));

export = sweets;