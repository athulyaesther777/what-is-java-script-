// 1. Declaring variables
let name = "John"; // 'let' allows you to declare variables that can be reassigned
const age = 30; // 'const' declares variables that cannot be reassigned

// 2. Functions
// This is a function that takes two numbers and returns their sum
function add(a, b) {
    return a + b;
}

// Calling the function
let result = add(5, 3); // result is 8

// 3. Conditionals
if (age > 18) {
    console.log("Adult"); // This will print "Adult" because age is 30
} else {
    console.log("Not an adult");
}

// 4. Loops
// This is a 'for' loop that runs 5 times
for (let i = 0; i < 5; i++) {
    console.log("Iteration number: " + i); // Prints iteration number from 0 to 4
}

// 5. Arrays
let fruits = ["Apple", "Banana", "Cherry"]; // An array of strings

// Accessing array elements
console.log(fruits[0]); // Prints "Apple"

// Adding a new element to the array
fruits.push("Date");

// 6. Objects
let person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    // A method within the object
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
};

// Accessing object properties and methods
console.log(person.firstName); // Prints "John"
console.log(person.fullName()); // Prints "John Doe"

// 7. Arrow Functions
// Arrow function that takes two numbers and returns their product
let multiply = (x, y) => x * y;

// Calling the arrow function
let product = multiply(4, 5); // product is 20

// 8. Events (This part is for when you have an HTML document)
// Assuming you have a button with id "myButton" in your HTML
document.getElementById("myButton").addEventListener("click", function() {
    alert("Button clicked!");
});

// 9. Promises
// A promise that resolves after 2 seconds
let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise resolved!");
    }, 2000);
});

// Handling the promise
promise.then((message) => {
    console.log(message); // Prints "Promise resolved!" after 2 seconds
});

// 10. Async/Await
// An asynchronous function to handle promises more cleanly
async function asyncFunction() {
    let message = await promise;
    console.log(message); // Prints "Promise resolved!" after 2 seconds
}

asyncFunction();
