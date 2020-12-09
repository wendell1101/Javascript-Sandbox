// TYPE CONVERSION

let val;

// Number to String
val = String(8);
val = String(5+7);

// Bool to String
val = String(true);

// Date to String
val = String(new Date());

// Array to String
val = String([1,2,3]);

// toString()
val = (5).toString();
val = (true).toString();

// String to Number
val = String(11);

// Bool to number
val = Number(true);
val = Number(false);
val = Number(null);
val = Number('hello world'); //NaN
val = Number([1,2,3,4,5]); //NaN

// parseInt()
val = parseInt('100');
// parseFloat()
val = parseFloat('100.30');



// output
// console.log(val);
// console.log(typeof val);
// // console.log(val.length);
// console.log(val.toFixed(2));

// TYPE COERCION

const val1 = String(5);
const val2 = 6;
const sum = val1 + val2;

console.log(sum);
console.log(typeof sum);