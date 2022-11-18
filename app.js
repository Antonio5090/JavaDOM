import checkComplete from './Components/checkComplete.js';
import deleteIcon from './Components/deleteIcon.js';
( () => {

const addTask = (evento) => {
    const list = document.querySelector('[data-list]');
    const task = createTask(evento);
    list.appendChild(task);
}

const btn = document.querySelector('[data-form-btn]');

const createTask = (evento) => {
    evento.preventDefault(); 

    const input = document.querySelector('[data-form-input]')
    const value = input.value;
    input.value = "";
    

    const task = document.createElement('li');
    task.classList.add('card');

    const taskContent = document.createElement('div');
    const titleTask = document.createElement('span')
    titleTask.classList.add('task');
    titleTask.innerText = value;
    
    //Date check list
    const calendar = document.querySelector('[data-form-date]');
    const date = calendar.value;
    const dateFormat = moment(date).format("DD/MM/YYYY");
    const dateElement = document.createElement("span");
    dateElement.innerHTML = dateFormat;
    
    /* task.innerHTML += content; */
    
    
    task.appendChild(taskContent);
    task.appendChild(dateElement);
    task.appendChild(deleteIcon());
    taskContent.appendChild(checkComplete());
    taskContent.appendChild(titleTask);

    //Guardado de datos
    const taskObj ={
        value,
        dateFormat
    }
    
    localStorage.setItem('tasks', JSON.stringify(taskObj));

    return task;

}

btn.addEventListener('click', addTask);

})()