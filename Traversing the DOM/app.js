let val;

const list = document.querySelector('ul.collection');
const listItem = document.querySelector('ul.collection li.collection-item:first-child');

val = listItem;
val = list;

// get childnodes
val = list.childNodes;

val = list.childNodes[0];
val = list.childNodes[0].nodeName;
val = list.childNodes[1].nodeType;

// 1 - Element
// 2 - Attribute (deprecated)
// 3 - Text node
// 8 - Comment
// 9 - Document itself
// 10 - Doctype

// Get children element nodes
val = list.children;
val = list.children[0];
val = list.children[1].textContent = 'Hello';

// Children of children
val = list.children[3].children[0].id="text-link";
val = list.children[3].children[0];

// First Child
val = list.firstChild;
val = list.firstElementChild;

// Last Child
val = list.lastChild;
val = list.lastElementChild;

// Count child elements
val = list.childElementCount;

// Get Parent node
val = listItem.parentNode;
val = listItem.parentElement;
val = listItem.parentElement.parentElement;

// Get next sibling
val = listItem.nextSibling;
val = listItem.nextElementSibling.nextElementSibling;

//Get previous sibling
val = listItem.previousSibling;
val = listItem.previousElementSibling;



console.log(val);