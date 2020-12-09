// document.getElements.className;

// const items = document.getElementsByClassName('collection-item');

// console.log(items);
// console.log(items[0]);
// items[0].style.color = 'red';
// items[3].textContent = 'Hello world';

const listItems = document.querySelector('ul').getElementsByClassName('collection-item');
// console.log(listItems);

// document.getElementsByTagName
let lis = document.getElementsByTagName('li');

// console.log(lis);
// console.log(lis[0]);
// lis[0].style.color = 'red';
// lis[3].textContent = 'Hello world';

// convert HTML collection into arral
// lis = Array.from(lis);
// lis.reverse()

// lis.foreach(function(li){
//     console.log(li);
// });
// console.log(lis);

// document.querySelectorAll
const items = document.querySelectorAll('.collection-item');

items.forEach(function(item, index){
    item.textContent = `${index}: Hello`;
})

const liOdd = document.querySelectorAll('.collection-item:nth-child(odd)');
const liEven = document.querySelectorAll('.collection-item:nth-child(even)');

liOdd.forEach(function(li, index){
    li.style.background = '#ccc';
})
liEven.forEach(function(li, index){
    li.style.background = '#f4f4f4';
})
console.log(liOdd);
