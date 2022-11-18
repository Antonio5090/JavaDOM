import {addTask} from './Components/addTask.js';
( () => {

const btn = document.querySelector('[data-form-btn]');
btn.addEventListener('click', addTask);

})()