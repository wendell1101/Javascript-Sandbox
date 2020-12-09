const id = 100;

// Equal to
// if(id == 100){
//     console.log('correct');
// }else{
//     console.log('wrong');
// }
// // Not equal to
// if(id != 100){
//     console.log('wrong');
// }else{
//     console.log('correct');
// }

// // Equal to value and type
// if(id === 100){
//     console.log('correct');
// }else{
//     console.log('wrong');
// }
// // Not Equal to value and type
// if(id !== 100){
//     console.log('correct');
// }else{
//     console.log('wrong');
// }

// Test if undefined
// if(typeof id !== 'undefined'){
//     console.log(`the id is: ${id}`);
// }else{
//     console.log('no id');
// }

// Greater or Less than
// if(id >= 100){
//     console.log('correct');
// }else{
//     console.log('wrong');
// }

// If else

const color = 'red';

// if(color === 'red'){
//     console.log('Color is red');
// }else if(color === 'yellow'){
//     console.log('Color is yellow');
// }else if(color === 'blue'){
//     console.log('Color is blue');
// }else{
//     console.log('color is not red, yellow or blue');
// }

// LOGICAL OPERATORS

const name = 'wendell';
const age = 21;
// AND &&
if(age > 0 && age >=18){
    console.log('Legal age');
}else if(age <= 17){
    console.log('Minor age');
}
// OR ||
if(age > 16 || age < 65){
    console.log('can participate in the ride');
}else{
    console.log('can ride');
}

// TERNARY OPERATOR
console.log(age >= 18 ? 'you are in legal age' : 'you are still minor');

// WITHOUT BRACES
if(id==100) 
    console.log('correct');
else
    console.log('incorrect');