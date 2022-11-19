import {addTask} from './Components/addTask.js';
import {displayTask} from './Components/readTask.js'

( () => {

const btn = document.querySelector('[data-form-btn]');
btn.addEventListener('click', addTask);

    displayTask();
})()