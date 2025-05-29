class Person {
    constructor(name) {
        this.name = name;
    }
}

const member = new Person('John');
console.log(typeof member);


// the type would be object, cause we used new to make a person,  and this gives us  an object