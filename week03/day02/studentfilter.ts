'use strict';
export { };
const students: any[] = [
  { name: 'Mark', age: 9.5, candies: 2 },
  { name: 'Paul', age: 12, candies: 5 },
  { name: 'Clark', age: 7, candies: 3 },
  { name: 'Pierce', age: 12, candies: 7 },
  { name: 'Sean', age: 10, candies: 1 }
];

// create a function that takes a list of students and logs:
// - Who has got more candies than 4 candies

// create a function that takes a list of students and logs: 
//  - how many candies they have on average

function morethanFour(par: any[]) {
  let names: string[] = [];
  par.forEach(e => {
    if (e.candies > 4) {
      names.push(e.name)
    }
  });
  console.log(names);
}
morethanFour(students);


function avCandy(par: any[]) {
  let avg: number = 0;
  par.forEach(e => {
    avg += e.candies;
  });
  return avg / par.length;
}
console.log(avCandy(students));