// document.getElementById

document.getElementById('task-title');

// Get things from the element
const taskTitle = document.getElementById('task-title');
console.log(taskTitle.id);
console.log(taskTitle.className);

// Change Styling
taskTitle.style.background = "#333"
taskTitle.style.color = '#fff';
taskTitle.style.padding = "5px";
// taskTitle.style.display = "none";

// Change content
taskTitle.textContent = 'Task List';
taskTitle.innerText = 'Task List - edited';
taskTitle.innerHTML = `<span>Task List</span`

// document.querySelector()

console.log(document.querySelector('#task-title'));
console.log(document.querySelector('.card-title'));
console.log(document.querySelector('h5'));

document.querySelector('li:last-child').style.color="red";
document.querySelector('li:nth-child(3)').style.color="yellow";
document.querySelector('li:nth-child(4)').textContent="hello world";
document.querySelector('li:nth-child(odd)').style.background="#ccc";
document.querySelector('li:nth-child(even)').style.background="#f4f4f4";