// 1. JavaScript Classes
class Person {
    constructor(name, age) {
        this.name = name; // 'name' property
        this.age = age;   // 'age' property
    }

    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

// 2. Inheritance in Classes
class Student extends Person {
    constructor(name, age, grade) {
        super(name, age); // Calls the parent class's constructor
        this.grade = grade; // 'grade' property specific to Student
    }

    study() {
        console.log(`${this.name} is studying for grade ${this.grade}.`);
    }
}

// Creating an instance of Student
const student1 = new Student("Alice", 20, "A");
student1.greet(); // Inherited from Person: Hello, my name is Alice and I am 20 years old.
student1.study(); // Specific to Student: Alice is studying for grade A.

// 3. Modules (Imagine this is split across files in a real-world scenario)
// person.js
export class PersonModule {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello, my name is ${this.name}.`);
    }
}

// main.js
import { PersonModule } from './person.js'; // Importing the PersonModule class

const person2 = new PersonModule("Bob", 28);
person2.greet(); // Output: Hello, my name is Bob.

// 4. Promises and Error Handling
const myPromise = new Promise((resolve, reject) => {
    let success = true; // Simulating an operation success

    if (success) {
        resolve("The operation was successful!");
    } else {
        reject("The operation failed.");
    }
});

myPromise
    .then(result => {
        console.log(result); // Output: The operation was successful!
    })
    .catch(error => {
        console.error(error); // Handles any errors
    });

// 5. Async/Await with Error Handling
async function fetchData() {
    try {
        let response = await fetch("https://api.example.com/data"); // Fetches data asynchronously
        if (!response.ok) {
            throw new Error("Network response was not ok"); // Throws an error if response fails
        }
        let data = await response.json(); // Parses the JSON data
        console.log(data); // Logs the data
    } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
    }
}

fetchData(); // Calls the async function to fetch and log data

// 6. Higher-Order Functions
let numbers = [1, 2, 3, 4, 5];

// 'map' applies a function to each element
let doubled = numbers.map(number => number * 2);
console.log(doubled); // Output: [2, 4, 6, 8, 10]

// 'filter' selects elements based on a condition
let evenNumbers = numbers.filter(number => number % 2 === 0);
console.log(evenNumbers); // Output: [2, 4]

// 'reduce' reduces the array to a single value
let sum = numbers.reduce((total, number) => total + number, 0);
console.log(sum); // Output: 15

// 7. Closures
function outerFunction() {
    let outerVariable = "I'm outside!";

    function innerFunction() {
        console.log(outerVariable); // Can access the outer variable
    }

    return innerFunction;
}

const closure = outerFunction(); // outerFunction returns innerFunction
closure(); // Output: I'm outside!

// 8. Event Loop and Asynchronous Behavior
console.log("Start");

setTimeout(() => {
    console.log("Timeout 1");
}, 0);

Promise.resolve().then(() => {
    console.log("Promise 1");
});

console.log("End");

// Output sequence:
// Start
// End
// Promise 1
// Timeout 1
