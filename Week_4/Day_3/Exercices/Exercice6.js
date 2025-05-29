// console.log([2] === [2]);
// console.log({} === {});

const object1 = { number: 5 }; //object1.name=5
const object2 = object1; // object2.name= 5 cause object2 is pointed to object 1.
const object3 = object2; // object3.name= 5  object3 will be pointed to object 1.
const object4 = { number: 5 };//object4.name= 5 , it has nothing to do with object 1.

object1.number = 4; // object1.name=4
//console.log(object2.number)//object2.name= 4 cause object2 is still pointed to object 1.
//console.log(object3.number)//object3.name= 4 cause object3 is still pointed to object 1.
//console.log(object4.number)//object4.name= 5 , it is not affected by any change in object 1.


class Animal {
    constructor(name, type, color) {
        this.name = name;
        this.type = type;
        this.color = color;

    }
}

class Mammal extends Animal {
    constructor(name, type, color) {
        super(name, type, color)
    }

    sound(animalSound) {
        console.log(`${animalSound} I am  a ${this.type}, named ${this.name} and I am ${this.color}`)

    }
}

let farmerCow = new Mammal("Lilly", "cow", "Brown & White")


console.log(farmerCow.sound("Mooo"))


