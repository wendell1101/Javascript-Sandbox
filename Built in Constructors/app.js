// Strings
const name1 = 'jeff';
const name2 = new String('jeff');

name2.foo = 'bar';


// if(name2 === 'jeff'){
//     console.log('yes');
// }else{
//     console.log('no');
// }

// Number
const num1 = 5;
const num2 = new Number(5);

// Boolean
const bool1 = true;
const bool2 = new Boolean(true);

// Function
const getSum1 = function(x,y){
    return x + y;
};
const getSum2 = new Function('x', 'y', 'return 1+1');

// Object
const john = {name: 'john'};
const john2 = new Object({name:'john'});
console.log(john2);

// Array
const arr1 = [1,2,3,4];
const arr2 = new Array(1,2,3,4);

// Regular Expressions
const re1 = /\w+/;
const re2 = new RegExp('\\w+');

console.log(re1);
console.log(re2);