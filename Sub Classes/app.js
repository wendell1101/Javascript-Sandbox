class Person {
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    greeting(){
        return `Hello there ${this.firstName} ${this.lastName}`;
    }
}

class Customer extends Person{
    constructor(firstName, lastName, phone, membership){
        super(firstName, lastName);
        this.phone = phone;
        this.membership = membership;
    }

    static getMembershipCost(){
        return 500;
    }   
}
const customer1 = new Customer('wendell','suazo', 092932849, 'standard');

console.log(customer1.greeting());
console.log(Customer.getMembershipCost());