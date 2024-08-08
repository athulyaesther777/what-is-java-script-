// Parent class 'Person'
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello, my name is ${this.name}.`);
    }
}

// Child class 'Student' extends 'Person'
class Student extends Person {
    constructor(name, age, grade) {
        super(name, age); // Calls the parent class's constructor
        this.grade = grade; // Adds a new property 'grade'
    }

    // Method specific to 'Student'
    study() {
        console.log(`${this.name} is studying for grade ${this.grade}.`);
    }
}

const student1 = new Student("Bob", 20, "A");
student1.greet(); // Inherited from 'Person': Hello, my name is Bob.
student1.study(); // Specific to 'Student': Bob is studying for grade A.
