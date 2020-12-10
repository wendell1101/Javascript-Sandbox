const form = document.querySelector('form');
const taskInput = document.querySelector('#task');
const heading = document.querySelector('h5');
const select = document.querySelector('select');

// clear input value
taskInput.value = '';

// Key down
// taskInput.addEventListener('keydown', runEvent);
// // Key up
// taskInput.addEventListener('keyup', runEvent);
// //keypress
// taskInput.addEventListener('keypress', runEvent);

// Focus
// taskInput.addEventListener('focus', runEvent);
// // blur
// taskInput.addEventListener('blur', runEvent);

// Cut
// taskInput.addEventListener('cut', runEvent)

// Paste
// taskInput.addEventListener('paste', runEvent)
// Undo
// taskInput.addEventListener('undo', runEvent)

// submit
// form.addEventListener('submit', runEvent);

// Input
taskInput.addEventListener('input', runEvent)

// change
// select.addEventListener('change', runEvent);

function runEvent(e){
    // e.preventDefault();
    console.log(`Event type: ${e.type}`);
    // e.target.style.border = "1px solid red";
;
    // // get input value
    // // console.log(taskInput.value);
    console.log(e.target.value);
    // heading.textContent = e.target.value;

}
// console.log(form);