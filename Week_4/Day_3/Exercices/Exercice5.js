class Dog {
    constructor(name) {
        this.name = name;
    }
}

class Labrador extends Dog {
    constructor(name, size) {
        super(name);
        this.size = size;
    }
} // this is the correct answer cause the constructor will extend the dog Class by adding super()