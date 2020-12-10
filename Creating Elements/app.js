// Create and element

const li = document.createElement('li');

// Add a class
li.className = 'collection-item';

// Add an id
li.id = 'new-item';

// Add attribute
li.setAttribute('title', 'new-item');

// Create text node and append
li.appendChild(document.createTextNode('hello world'));

// Create new link element
const link = document.createElement('a');
// Add classname
link.className = 'delete-item secondary-content';

// Add icon to link
link.innerHTML = `<i class="fa fa-remove"></i>`;



// Append link to li
li.appendChild(link);

// Append li as child to ul
document.querySelector('ul').appendChild(li);




console.log(li);
console.log(link);
