'use stritct';

const list = document.querySelector('.js-list');
const buttonAdd = document.querySelector('.js-buttonAdd');
const inputNewTask = document.querySelector('.js-newTask');
const GITHUB_USER = 'BiancaMesa';
const SERVER_URL = `https://dev.adalab.es/api/todo/${GITHUB_USER}`;
const buttonSearch = document.querySelector('.js-buttonSearch');
const inputSearchTask = document.querySelector('.js-searchTask');

let tasks = [];

// La aplicación tiene un formulario para realizar búsquedas de tareas. En este ejercicio vamos a crear una función para filtrar utilizando el método de arrays filter. Para ello:
// Crea un evento asociado al botón de buscar de la interfaz gráfica.
// Crea la función manejadora del evento anterior.
// Dentro de esta función:
// Obtén el valor del input de filtrar.
// Filtra las tareas que coinciden con el valor introducido por el usuario.
// Vuelve a pintar las tareas, esta vez utilizando el listado filtrado.
// Aquí puedes usar la función de la clase anterior cuando pintaste el listado de tareas.

function handleSearch(event) {
  const searchValue = inputSearchTask.value;
  const searchFilter = searchValue.filter();
}
buttonSearch.addEventListener('click', handleSearch);

function printTask(tasks) {
  for (const task of tasks) {
    const nameTask = task.name;
    if (task.completed) {
      const li = document.createElement('li');
      li.setAttribute('class', 'crossOut');
      list.appendChild(li);
      const input = document.createElement('input');
      li.appendChild(input);
      input.setAttribute('type', 'checkbox');
      input.setAttribute('id', nameTask);
      input.setAttribute('checked', 'checked');
      const paragraph = document.createElement('p');
      const textParagraph = document.createTextNode(nameTask);
      li.appendChild(paragraph);
      paragraph.appendChild(textParagraph);
    } else {
      const li = document.createElement('li');
      list.appendChild(li);
      const input = document.createElement('input');
      li.appendChild(input);
      input.setAttribute('type', 'checkbox');
      input.setAttribute('id', nameTask);
      const paragraph = document.createElement('p');
      const textParagraph = document.createTextNode(nameTask);
      li.appendChild(paragraph);
      paragraph.appendChild(textParagraph);
    }
  }
}

function getTasks() {
  fetch(SERVER_URL)
    .then((response) => response.json())
    .then((data) => {
      tasks = data.results;
      localStorage.setItem('tasks', JSON.stringify(tasks));
      console.log('1');
      printTask(tasks);
    });

  // .catch((error) => {
  //   console.log(error);
  // });
}

const tasksLocalStorage = JSON.parse(localStorage.getItem('tasks'));
if (tasksLocalStorage !== null) {
  printTask(tasksLocalStorage);
} else {
  getTasks();
}

function handleClick(event) {
  event.preventDefault();

  const newTask = { name: inputNewTask.value, completed: false };
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
  });

  //Actualizamos el array y le cambiamos el valor de completed a true porque se ha seleccionado
  tasks[taskIndex].completed = event.target.checked; //(le da el valor real, true or false, que tenga ese input)
  console.log(tasks);

  printTask(tasks);
};

list.addEventListener('click', handleClickCheckbox);
