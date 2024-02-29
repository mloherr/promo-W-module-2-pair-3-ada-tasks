'use stritct';

const list = document.querySelector('.js-list');
const buttonAdd = document.querySelector('.js-buttonAdd');
const inputNewTask = document.querySelector('.js-newTask');
const GITHUB_USER = 'BiancaMesa';
const SERVER_URL = `https://dev.adalab.es/api/todo/${GITHUB_USER}`;

let tasks = [];

function printTask(tasks) {
  for (const task of tasks) {

    const nameTask = task.name;

    if (task.completed) {
      list.innerHTML += `
          <li class="crossOut">
            <input type="checkbox" checked id="${nameTask}">
            <p>${nameTask}</p>
          </li>`;
    } else {
      list.innerHTML += `
      <li>
        <input type="checkbox" id="${nameTask}">
        <p>${nameTask}</p>
      </li>`;
    }
  }
}

function getTasks () {
  fetch(SERVER_URL)
    .then((response) => response.json())
    .then((data) => {
      tasks = data.results;
      localStorage.setItem('tasks', JSON.stringify(tasks));
      printTask(tasks);
    });

    // .catch((error) => {
    //   console.log(error);
    // });
}

const tasksLocalStorage = localStorage.getItem('tasks');


if (tasksLocalStorage !== null) {
  printTask(tasks); 

} else {
  getTasks(); 
}





function handleClick(event) {
  event.preventDefault();

  const newTask = { name: inputNewTask.value, completed: false };
  console.log(newTask);
  tasks.push(newTask);

  list.innerHTML = '';
  printTask(tasks);
}


buttonAdd.addEventListener('click', handleClick);


const handleClickCheckbox = (event) => {
  list.innerHTML = '';
  
  //Recogemos el valor del id del input seleccionado 
  const inputId = event.target.id; 
  
  //Buscamos la tarea a través del id del input, que es su nombre
  const taskIndex = tasks.findIndex((task) => {
      return task.name === inputId; 
  })

  //Actualizamos el array y le cambiamos el valor de completed a true porque se ha seleccionado
  tasks[taskIndex].completed = event.target.checked; //(le da el valor real, true or false, que tenga ese input)
  console.log(tasks); 

  printTask(tasks); 
}

list.addEventListener('click', handleClickCheckbox); 