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

function printTask() {
  for (const task of tasks) {
    const nameTask = task.name;
    list.innerHTML += 
      `<li class="js-task js-checkbox">
          <input type="checkbox" id="${nameTask}">
          <p class="js-text">${nameTask}</p>
        </li>`;
  }
}
printTask (); 

function handleClick(event) {
  event.preventDefault();
  const newObject = { name: inputNewTask.value, completed: false };
  console.log(newObject);
  tasks.push(newObject);

  list.innerHTML = ''; 
  printTask (); 
}

//MIRAR MAÑANA JUNTO CON ID 
function handleCheck (event) {
  const lineThrough = event.target.id;
  lineThrough.classList.add('taskComplete'); 
}



const checkbox = document.querySelector('.js-checkbox'); 


buttonAdd.addEventListener('click', handleClick);
checkbox.addEventListener('click', handleCheck); 




/* Al hacer click en la lista ---> evento
1. Tachar el texto 
  Añadir la clase taskComplete
2. Cambiar el estado de completed a true
  newObject.completed: true; 
*/

//const text = document.querySelectorAll('.js-text'); 


