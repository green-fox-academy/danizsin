import { Thing } from "./thing";
import { Fleet } from "./fleet";

let fleet = new Fleet();
let listOfThings: Thing[] = [
  new Thing('Get milk'),
  new Thing('Remove the obstacles'),
  new Thing('Stand up'),
  new Thing('Eat lunch')
];

listOfThings.forEach((e, i, a)=> {
  fleet.add(e);
  if(i>=2){
    e.complete();
  }
});

fleet.print();

/* Crete a fleet of things to have this output:
1. [ ] Get milk
2. [ ] Remove the obstacles
3. [x] Stand up
4. [x] Eat lunch
// Hint: You have to create a `print()` method as well */