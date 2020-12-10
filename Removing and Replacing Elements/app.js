// REPLACE ELEMENT

// create and element
const newHeading = document.createElement('h2');
// add id
newHeading.id = 'task-title';
newHeading.textContent = 'Task List'

const oldHeading = document.getElementById('task-title');
const cardAction = document.querySelector('.card-action');

// Replace 
cardAction.replaceChild(newHeading, oldHeading);

// Remove element
const lis = document.querySelectorAll('.collection-item');
const list = document.querySelector('.collection')

// Remove list item
lis[0].remove();

// Remove child element
list.removeChild(lis[2]);

// CLASSES & ATTRIBUTES
const firstLi = document.querySelector('li:first-child');
const link = firstLi.children[0];

let val; 
// Classes
val = link.className;
val = link.classList;
val = link.classList[0];
// add and remove classes
val = link.classList.add('test');
val = link.classList.remove('test');
val = link;

// Attributes
val = link.getAttribute('href');
val = link.setAttribute('href', 'http://google.com');
link.setAttribute('title', 'google');
val = link.hasAttribute('title'); 

val = link;
link.removeAttribute('title');

console.log(val);
