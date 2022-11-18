import checkComplete from './checkComplete.js';
import deleteIcon from './deleteIcon.js';

export const addTask = (evento) => {
    const list = document.querySelector('[data-list]');
    const task = createTask(evento);
    list.appendChild(task);
}

const createTask = (evento) => {
    evento.preventDefault(); 
    //Guardando los datos en el storage de manera que la podamos trabajar con JSON
    const taskList = JSON.parse(localStorage.getItem('tasks')) || [];
    
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
    taskList.push(taskObj)

    localStorage.setItem('tasks', JSON.stringify(taskList));

    return task;

}
