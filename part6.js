// Defining a class named 'Person'
class Person {
    constructor(name, age) {
        this.name = name; // Setting up the 'name' property
        this.age = age;   // Setting up the 'age' property
    }

    // Method to display a greeting
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

// Creating an instance of the 'Person' class
const person1 = new Person("Alice", 30);
person1.greet(); // Output: Hello, my name is Alice and I am 30 years old.
