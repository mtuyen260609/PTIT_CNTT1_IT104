abstract class Animal {
    protected name: string;
    constructor(name: string) {
        this.name = name;
    }
    abstract makeNoise(): void;

    printName(): void {
        console.log(`Tên: ${this.name}`);
    }
}

class Cat extends Animal {
    makeNoise(): void {
        console.log("meo meo");
    }
}

class Dog extends Animal {
    makeNoise(): void {
        console.log("gâu gâu");
    }
}

const myCat = new Cat("Mèo Mun");
const myDog = new Dog("Chó Vàng");

myCat.printName();
myCat.makeNoise();

myDog.printName();
myDog.makeNoise();
