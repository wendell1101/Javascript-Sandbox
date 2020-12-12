// Object.prototype
// Person.prototype

// Person constructor
function Person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = new Date(dob);
    // this.calculateAge = function (){
    //     const diff = Date.now() - this.birthday.getTime();
    //     const ageDate = new Date(diff);
    //     return Math.abs(ageDate.getUTCFullYear() - 1970);
    // }
}

// Calculate age 
Person.prototype.calculateAge = function (){
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}
// get fullname
Person.prototype.getFullName = function getFullName() {
    return `${this.firstName} ${this.lastName}`;
}

// Get Married
Person.prototype.getMarried = function getMarried(newLastName){
    this.lastName = newLastName;
}

const john = new Person('john', 'doe', '08-12-90');
const mary = new Person('mary', 'johnson', '09-21-99');

console.log(john);
console.log(john.calculateAge());
console.log(john.getFullName());
console.log(mary.getFullName());
mary.getMarried('Smith');
console.log(mary.getFullName());

console.log(mary.hasOwnProperty('firstName'));
console.log(mary.hasOwnProperty('getFullName'));