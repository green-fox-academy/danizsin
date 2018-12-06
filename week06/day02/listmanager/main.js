const body = document.querySelector('body');
for (let i = 0; i < 3; i++) {
  body.appendChild(document.createElement('ul'));
}

const myUls = document.querySelectorAll('ul');
const todos = ['bread', 'milk', 'cheese', 'joghurt'];
const myButtons = ['up', '>', 'X', 'down'];
const todoList = document.querySelector('ul');
const navButtons = document.querySelectorAll('ul')[1];
const doneList = document.querySelectorAll('ul')[2];

const fillToDos = () => {
  todos.forEach(e => {
    let newListElem = document.createElement('li');
    newListElem.innerText = e;
    todoList.appendChild(newListElem);
  });
}

fillToDos();

myButtons.forEach(e => {
  let newListElem = document.createElement('li');
  newListElem.innerText = e;
  navButtons.appendChild(newListElem);
});

const upBtn = navButtons.childNodes[0];
const rightBtn = navButtons.childNodes[1];
const xBtn = navButtons.childNodes[2];
const downBtn = navButtons.childNodes[3];

let selected = 0;
let currentToDo = todoList.childNodes[selected];
currentToDo.style.backgroundColor = 'cyan';
let counter = 0;

const currentSelectedColoring = () => {
  currentToDo = todoList.childNodes[selected];
  currentToDo.style.backgroundColor = 'cyan';
}

const upFunc = () => {
  if (selected - 1 >= 0 && todoList.childNodes.length > 1) {
    --selected;
    currentSelectedColoring();
    todoList.childNodes[selected + 1].style.backgroundColor = 'white';
  }
}
const rightFunc = () => {
  if (todoList.childNodes.length - 1 >= 0) {
    if (todoList.childNodes.length - 1 > 0) {
      doneList.appendChild(todoList.childNodes[selected]);
      doneList.childNodes[counter].style.backgroundColor = 'white';
      ++counter;
      selected = 0;
      currentSelectedColoring();
    } else {
      doneList.appendChild(todoList.childNodes[selected]);
      doneList.childNodes[counter].style.backgroundColor = 'white';
    }
  }
}
const xFunc = () => {
  while (doneList.firstChild) {
    doneList.removeChild(doneList.firstChild);
  }
  while (todoList.firstChild) {
    todoList.removeChild(todoList.firstChild);
  }
  fillToDos();
  selected = 0;
  counter = 0;
  currentSelectedColoring();
}
const downFunc = () => {
  if (selected + 1 < todoList.childNodes.length && todoList.childNodes.length > 1) {
    ++selected;
    currentSelectedColoring();
    todoList.childNodes[selected - 1].style.backgroundColor = 'white';
  }
}


upBtn.onclick = () => {
  upFunc();
}

rightBtn.onclick = () => {
  rightFunc();
}

xBtn.onclick = () => {
  xFunc();
}

downBtn.onclick = () => {
  downFunc();
}

const onKeyDown = (event) => {
  switch (event.keyCode) {
    case 37:  // LEFT
      xFunc();
      break;
    case 38:  // UP
      upFunc();
      break;
    case 39:  // RIGHT
      rightFunc();
      break;
    case 40:  //DOWN
      downFunc();
      break;
  }
}

document.body.addEventListener('keydown', onKeyDown);