const firstName = 'John';
const lastName = 'Doe';
const age = 21;
const greeting = 'Hello my name is wendell';
const tags = 'webdev, appdev';

let val;

val = firstName + lastName;

// Concatenation
val = firstName + ' ' + lastName;

// Append
val = 'wendell ';
val += 'suazo';

val = 'Hello my name is ' + firstName + ' and I am ' + age;

// Escaping
val = 'That\'s awesome I can\'t wait'; 
val = "That's awesome I can't wait";


// Length
val = firstName.length;
// Concat
val = firstName.concat(' ', lastName);

// Change Case
val = firstName.toUpperCase();
val = firstName.toLowerCase();

val = firstName[2];

// indexOf()
val = firstName.indexOf('n');
val = firstName.lastIndexOf('D');

// charAt()
val = firstName.charAt('2');

// get last character
val = firstName.charAt(firstName.length -1)

// substring()
val = firstName.substring(0,3);

// slice()
val = firstName.slice(0,4);
val = firstName.slice(-3);

// split()
val = greeting.split(' ');
val = tags.split(',');

// replace()
val = greeting.replace('wendell', 'Julia');

// includes()
val = greeting.toLowerCase().includes('hello');

console.log(val);