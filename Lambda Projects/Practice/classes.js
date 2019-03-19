class Animal {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(`${this.name} says, 'Hello' `);
    }
}

class Dog extends Animal {
    constructor(name) {
        super(name);
    }
    speak() {
        console.log(`${this.name} says "bark bark"`);
    }
}
