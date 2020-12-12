const personPrototypes = {
    greeting : function(){
        return `Hello there ${this.firstName} ${this.lastName}`;
    },
    getMarried : function (newLastName){
        return this.lastName = newLastName;
    }
}

const mary = Object.create(personPrototypes);

mary.firstName = 'mary';
mary.lastName = 'williams';
mary.age = 30;
mary.getMarried();
mary.getMarried('doe');
console.log(mary.greeting());

const brad = Object.create(personPrototypes, {
    firstName: {value: 'wendell'},
    lastName: {value: 'suazo'},
    age:{value: 21},
});

console.log(brad.greeting());
