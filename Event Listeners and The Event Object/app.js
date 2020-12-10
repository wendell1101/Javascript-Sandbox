const clearTask = document.querySelector('.clear-tasks ');
const ul = document.querySelector('.collection');

// clearTask.addEventListener('click', function(e){
//     e.preventDefault();
//     console.log('hello world');

// });

clearTask.addEventListener('click', clear);

function clear(e){
    e.preventDefault();
    // console.log('clear');
    let val;
    val = e;
    
    // Event target element
    val = e.target;
    val = e.target.id;
    val = e.target.className;
    val = e.target.classList;
    // val = e.target.innerText = 'Hello';

    // Event type
    val = e.type;

    // Time stamp
    val = e.timeStamp;

    // Coords event relative to the window
    val = e.clientY;
    val = e.clientX;

    // Coords relative to the element
    val = e.offsetY;
    val = e.offsetX;

    console.log(val);
}
