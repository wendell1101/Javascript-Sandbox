// set local storage item
// localStorage.setItem('name', 'Wendell');
// localStorage.setItem('age', 21);

// set session storage item
// sessionStorage.setItem('name', 'Julia');

// remove local storage
// localStorage.removeItem('name');

// get local storage item
// const name = localStorage.getItem('name');
// const age = localStorage.getItem('age');
// console.log(name, age);

// // clear local storage
// localStorage.clear();

const form = document.querySelector('#task-form');
const input = document.querySelector('#task');
form.addEventListener('submit', addItem);

function addItem(e){
    e.preventDefault();
    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    }else{
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.push(task.value);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    alert('Task save!');
}
const tasks = JSON.parse(localStorage.getItem('tasks'));

tasks.forEach(function(task){
    console.log(task);
});

