// Numbers and Math object

const num1 = 100;
const num2 = 50;

let val;

// Basic Math with numbers
val = num1 + num2; // sum
val = num1 * num2; // product
val = num1 - num2; // difference
val = num1 / num2; // quotient
val = num1 % num2; // remainder

// Math object
val = Math.PI; // value of PI
val = Math.E;  // value of E
val = Math.round(2.8); // round number
val = Math.ceil(2.8); // round up
val = Math.floor(2.8) // round down
val = Math.sqrt(64); // get square root
val = Math.abs(-3); // get absolute number
val = Math.pow(8,2); // power
val = Math.min(3,32,-4,52); //get the minimum number
val = Math.max(3,32,-4,52); //get the maximum number
val = Math.random(); // random decimal number
val = Math.floor(Math.random() * 10 + 1); // get random number between 0 - 10


console.log(val);