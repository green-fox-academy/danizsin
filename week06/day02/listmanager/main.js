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
currentToDo.style.backgroundColor = 'red';
let counter = 0;

upBtn.onclick = () => {
  if (selected - 1 >= 0 && todoList.childNodes.length > 1) {
    --selected;
    currentToDo = todoList.childNodes[selected];
    currentToDo.style.backgroundColor = 'red';
    todoList.childNodes[selected + 1].style.backgroundColor = 'white';
  }
}

rightBtn.onclick = () => {
  if (todoList.childNodes.length - 1 >= 0) {
    if (todoList.childNodes.length - 1 > 0) {
      doneList.appendChild(todoList.childNodes[selected]);
      doneList.childNodes[counter].style.backgroundColor = 'white';
      ++counter;
      selected = 0;
      currentToDo = todoList.childNodes[selected];
      currentToDo.style.backgroundColor = 'red';
    } else {
      doneList.appendChild(todoList.childNodes[selected]);
      doneList.childNodes[counter].style.backgroundColor = 'white';
    }
  }
}

xBtn.onclick = () => {
  while (doneList.firstChild) {
    doneList.removeChild(doneList.firstChild);
  }
  while (todoList.firstChild) {
    todoList.removeChild(todoList.firstChild);
  }
  fillToDos();
  selected = 0;
  counter = 0;
  currentToDo = todoList.childNodes[selected];
  currentToDo.style.backgroundColor = 'red';
}

downBtn.onclick = () => {
  if (selected + 1 < todoList.childNodes.length && todoList.childNodes.length > 1) {
    ++selected;
    currentToDo = todoList.childNodes[selected];
    currentToDo.style.backgroundColor = 'red';
    todoList.childNodes[selected - 1].style.backgroundColor = 'white';
  }
}

