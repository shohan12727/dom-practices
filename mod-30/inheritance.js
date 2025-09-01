class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a sound`);
    }
}

class Dog extends Animal {
    constructor(name, age, behavior) {
        super(name);
        this.age = age,
            this.behavior = behavior
    }
}

const Dog1 = new Dog('Diggy', 3, 'clam')
Dog1.speak()
// console.log(Dog1);
