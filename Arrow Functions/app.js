// const sayHello = function(){
//     console.log('Hello');
// }

// sayHello();

// const sayHello = () =>{
//     console.log('Hi from arrow function');
// }
// sayHello();

// One Line function doen't need braces
// const sayHellow = () => console.log('hellow');

// sayHellow();

// One line returns
// const addNum = (x,y) => x+y;

// console.log(addNum(1,2));

// One line an object
// const sayHello = () => ({msg: 'Hello'});
// console.log(sayHello());

// Single parameter does not need parenthesis
// const sayHello = name => console.log('Hello ' + name);


// multiple parameters need parenthesis
// const sayHello = (firstName, lastName) => console.log(`hello ${firstName} ${lastName}`);


// const users = ['wendell','john' , 'julia'];

// arr1 = users.map(user=>{
//     return user;
// });
// console.log(arr1);


fetch('https://api.github.com/users')
.then(res => res.json())
.then(data => console.log(data))
.catch(err => console.log(err));