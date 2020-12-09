// Create some arrays
const numbers = [33,65,21,65,3,11,21];
const numbers2 = new Array(2,6,43,68);
const fruit = ['apple', 'banana', 'orange', 'pear'];
const mixed = ['22', 'hello', true, undefined, null, {a:1,b:1}, new Date()];

let val;
// Get array length
val = numbers.length;
// Check if is array
val = Array.isArray(numbers);
// Get single value
val = numbers[1];
// Insert into array
numbers[1] = 100;
// Find index of value
val = numbers.indexOf(21);

//MUTATING ARRAYS
// Add on to end of array
numbers.push(250);
// // Add in to front
numbers.unshift(120);
// // Take off from end
numbers.pop();
// // Take off from front
numbers.shift();
// // Splice values
numbers.splice(1,3);
// // Reverse the array
numbers.reverse();

// Concatenate arrays
val = numbers.concat(numbers2)

//Sort
val = fruit.sort();
val = numbers.sort();

// Use the "compare function"
// val = numbers.sort(function(x,y){
//     return x-y;
// });

// // Reverse sort
// val = numbers.sort(function(x,y){
//     return y-x;
// });

// Find
function under50(num){
    return num > 50;
}
val = numbers.find(under50)

console.log(numbers);
console.log(val);