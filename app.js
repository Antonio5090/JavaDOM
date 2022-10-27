import checkComplete from './Components/checkComplete.js';
import deleteIcon from './Components/deleteIcon.js';
( () => {

const btn = document.querySelector('[data-form-btn]');

const createTask = (evento) => {
    evento.preventDefault(); 

    const input = document.querySelector('[data-form-input]')
    const value = input.value;
    input.value = "";
    const list = document.querySelector('[data-list]');

    const task = document.createElement('li');
    task.classList.add('card');

    const taskContent = document.createElement('div');
    const titleTask = document.createElement('span')
    titleTask.classList.add('task');
    titleTask.innerText = value;
    
    /* task.innerHTML += content; */
    
    list.appendChild(task);
    task.appendChild(taskContent);
    task.appendChild(deleteIcon());
    taskContent.appendChild(checkComplete());
    taskContent.appendChild(titleTask);
}

btn.addEventListener('click', createTask);

})()