class Person {
    constructor(firstName, lastName,dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthday = new Date(dob);
    }

    greeting () {
        return `Hello ${this.firstName} ${this.lastName}`; 
    }
    
    calculateAge(){
        const diff = Date.now() - this.birthday.getTime();
        const age = new Date(diff);
        return Math.abs(age.getUTCFullYear() - 1970);
    }
    getMarried(newLastName){
        this.lastName = newLastName;
    }

    static addNumbers(x,y){
        return x+y;
    }

}
const person1 = new Person('wendell', 'suazo', '01-11-99');
person1.getMarried('new lastname')
// console.log(person1.addNumbers(1,2));
console.log(Person.addNumbers(2,4));