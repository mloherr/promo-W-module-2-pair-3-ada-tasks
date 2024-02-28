'use stritct';

const list = document.querySelector('.js-list');
const buttonAdd = document.querySelector('.js-buttonAdd');
const inputNewTask = document.querySelector('.js-newTask');
const GITHUB_USER = 'BiancaMesa';
const SERVER_URL = `https://dev.adalab.es/api/todo/${GITHUB_USER}`;

let tasks = [];

fetch(SERVER_URL)
  .then((response) => response.json())
  .then((data) => {
    tasks = data.results;
    printTask(tasks);
  });

function printTask(tasks) {
  for (const task of tasks) {
    const nameTask = task.name;
    list.innerHTML += `<li>
          <input type="checkbox" id="">
          <p class="js-text">${nameTask}</p>
        </li>`;
  }
}

//Completa el código;
//Guarda la respuesta obtenida enla variable para el listado de tareas: `tasks`

// function handleClick(event) {
//   event.preventDefault();
//   const newObject = { name: inputNewTask.value, completed: false };
//   console.log(newObject);
//   tasks.push(newObject);

//   list.innerHTML = '';
//   printTask();
// }

// //MIRAR MAÑANA JUNTO CON ID
// function handleCheck(event) {
//   const lineThrough = event.target.id;
//   lineThrough.classList.add('taskComplete');
// }

// const checkbox = document.querySelector('.js-checkbox');

// buttonAdd.addEventListener('click', handleClick);
// checkbox.addEventListener('click', handleCheck);

/* Al hacer click en la lista ---> evento
1. Tachar el texto 
  Añadir la clase taskComplete
2. Cambiar el estado de completed a true
  newObject.completed: true; 
*/

//const text = document.querySelectorAll('.js-text');
