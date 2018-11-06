
'use strict';

const watchlist: string[] = [];

let securityAlcoholLoot: number = 0;

const queue: any[] = [
  { name: 'Amanda', alcohol: 10, guns: 1 },
  { name: 'Mark', alcohol: 0, guns: 0 },
  { name: 'Dolores', alcohol: 0, guns: 1 },
  { name: 'Wade', alcohol: 1, guns: 1 },
  { name: 'Anna', alcohol: 10, guns: 0 },
  { name: 'Rob', alcohol: 2, guns: 0 },
  { name: 'Joerg', alcohol: 20, guns: 0 }
];

let canGo: any[] = [];

function securityCheck(para: any[]) {
  para.forEach(e => {
    if (e.guns > 0) {
      watchlist.push(e.name);
    } else if (e.guns === 0 && e.alcohol > 0) {
      securityAlcoholLoot += e.alcohol;
      e.alcohol = 0;
      canGo.push(e);
    } else canGo.push(e);
  });
  console.log(`Security alcohol: ${securityAlcoholLoot}`);
  console.log(`Cant go in: ${watchlist}`);
  console.log(canGo);
}
securityCheck(queue);

// Queue of festivalgoers at entry
// no. of alcohol units
// no. of guns

// Create a securityCheck function that takes the queue as a parameter and returns a list of festivalgoers who can enter the festival

// If guns are found, remove them and put them on the watchlist (only the names)
// If alcohol is found confiscate it (set it to zero and add it to securityAlcholLoot) and let them enter the festival

export = securityCheck;