// Person constructor

function Person(name='unknown', dob) {
    this.name = name;
    // this.age = age;
    this.birthday = new Date(dob);
    this.calculateAge = function (){
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
}


// const wendell = new Person('wendell',21);
// const john = new Person('john', 30);

// console.log(wendell);
// console.log(john);

const wendell = new Person('wendell','01-11-1999');

console.log(wendell.calculateAge());
