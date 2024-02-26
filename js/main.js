'use stritct';

const list = document.querySelector('.js-list');
const buttonAdd = document.querySelector('.js-buttonAdd');
const inputNewTask = document.querySelector('.js-newTask');

const tasks = [
  {
    name: 'Recoger setas en el campo',
    completed: true,
  },
  {
    name: 'Comprar pilas',
    completed: true,
  },
  {
    name: 'Poner una lavadora de blancos',
    completed: true,
  },
  {
    name: 'Aprender cómo se realizan las peticiones al servidor en JavaScript',
    completed: false,
  },
];

function handleClick(event) {
  event.preventDefault();
  const newObject = { name: inputNewTask.value };
  console.log(newObject);
  tasks.push(newObject);

  for (const task of tasks) {
    i++;
    const nameTask = newObject.name;
    list.innerHTML += `<li class="js-task taskComplete"><input id="${i}" type="checkbox" checked><p>${nameTask}</p></li>`;
  }

  list.innerHTML += `<li class="js-task"><input id="" type="checkbox" checked><p>${newObject.name}</p></li>`;
}

buttonAdd.addEventListener('click', handleClick);

let i = 0;
for (const task of tasks) {
  i++;
  const nameTask = task.name;
  list.innerHTML += `<li class="js-task taskComplete"><input id="${i}" type="checkbox" checked><p>${nameTask}</p></li>`;
}
