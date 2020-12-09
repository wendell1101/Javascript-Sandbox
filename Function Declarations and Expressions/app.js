// FUNCTION DECLARATIONS

function greet(firstName = 'john', lastName = 'doe'){
    return 'hello ' + firstName + ' ' + lastName;
}

// console.log(greet());

// FUNCTION EXPRESSIONS

const square = function (num=5) {
    return num*num;
};
// console.log(square(8));

// IMMEDIATLEY INVOKABLE FUNCTION EXPRESSIONS = IFFES

// (function (){
//     console.log('IIFE Ran..');
// })();

// (function (name){
//     console.log('hello '+ name);
// })('wendell');

// PROPERTY METHODS

const todo = {
    add: function(){
        return 'Add todo...';
    },
    edit: function(id){
        return `Edit todo ${id}`;
    }
}

todo.delete = function(id){
    return `delete todo ${id}`;
}
console.log(todo.add());
console.log(todo.edit(21));
console.log(todo.delete(2));