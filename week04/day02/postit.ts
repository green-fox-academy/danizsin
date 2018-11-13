'use strict';
export { };

class PostIt {
  backgroundColor: string;
  text: string;
  textColor: string;
  constructor(bc: string, txt: string, txtC: string) {
    this.backgroundColor = bc;
    this.text = txt;
    this.textColor = txtC;
  }
}

let newPostIt1 = new PostIt('orange', 'Idea1', 'blue');
let newPostIt2 = new PostIt('pink', 'Awesome', 'black');
let newPostIt3 = new PostIt('yellow', 'Superb', 'green');

console.log(newPostIt1);
console.log(newPostIt2);
console.log(newPostIt3);
