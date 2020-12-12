// Person constructor

function Person(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
}

// Greeting
Person.prototype.greeting = function greeting(){
    return `Hello there ${this.firstName} ${this.lastName}`;
}

const person1 = new Person('john', 'doe');


console.log(person1.greeting());

// Customer Constructor
function Customer (firstName, lastName, phone, membership) {
    Person.call(this, firstName, lastName);
    this.phone = phone;
    this.membership = membership;
}

// Inherit the Person prototype methods

Customer.prototype = Object.create(Person.prototype);

// Make customer.prototype.return Customer()
Customer.prototype.constructor = Customer;

const customer1 = new Customer('wendfell', 'suazo', 9109032842, 'standard');
console.log(customer1);

// Cutomer greeting
Customer.prototype.greeting = function greeting(){
    return `Yow ${this.firstName} ${this.lastName}!`;
}

console.log(customer1.greeting());