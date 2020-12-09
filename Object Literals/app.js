const person = {
    firstName : 'Wendell',
    lastName : 'Suazo',
    age : 21,
    email : 'wendell@gmail.com',
    hobbies: ['music', 'programming'],
    address : {
        city : 'calamba',
        province : 'laguna',
    },
    getBirthYear: function (){
        return 2020 - this.age;
    }
}

let val;
val = person;
//Get specific value
val = person.firstName;
val = person['firstName'];
val = person.age;
val = person.hobbies;
val = person.hobbies[1];
val = person.address.province;
val = person.getBirthYear();


console.log(val);

const people = [
    {name: 'John', age: 21},
    {name: 'Jane', age:23},
    {name: 'Nancy', age:40},
]

for(let i=0; i<people.length; i++){
    console.log(people[i].name);
}