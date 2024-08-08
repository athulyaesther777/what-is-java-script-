// 1. Variables
let name = "John"; // Declares a variable 'name' and assigns it the string "John"
const age = 25;    // Declares a constant 'age' with the value 25
var city = "Dublin"; // Declares a variable 'city' using the old 'var' keyword

// 2. Function
function greet(name) {
    // Returns a greeting string that includes the provided 'name'
    return "Hello, " + name;
}
console.log(greet("Alice")); // Calls the greet function with "Alice" and logs the result

// 3. Control Structures - If-Else Statement
let number = 10;
if (number > 5) {
    console.log("Greater than 5"); // Executes if 'number' is greater than 5
} else {
    console.log("5 or less"); // Executes if 'number' is 5 or less
}

// 4. Loop - For Loop
for (let i = 0; i < 5; i++) {
    console.log(i); // Logs numbers 0 to 4
}

// 5. Loop - While Loop
let i = 0;
while (i < 5) {
    console.log(i); // Logs numbers 0 to 4
    i++; // Increments 'i' by 1 each time the loop runs
}

// 6. DOM Manipulation
// Assuming there is an element with the id "myElement" in the HTML
document.getElementById("myElement").innerHTML = "New Content"; // Changes the content of the element

// 7. Events
// Assuming there is a button with the id "myButton" in the HTML
document.getElementById("myButton").addEventListener("click", function() {
    alert("Button clicked!"); // Displays an alert when the button is clicked
});

// 8. Objects
let car = {
    make: "Toyota", // 'make' property with the value "Toyota"
    model: "Corolla", // 'model' property with the value "Corolla"
    year: 2020 // 'year' property with the value 2020
};
console.log(car.model); // Logs "Corolla", the value of the 'model' property

// 9. Arrays
let colors = ["red", "green", "blue"]; // Creates an array with three color values
console.log(colors[1]); // Logs "green", the second element in the array

// 10. ES6 Features - Arrow Functions
const add = (a, b) => a + b; // Arrow function that adds two numbers
console.log(add(2, 3)); // Logs the result of adding 2 and 3, which is 5

// 11. ES6 Features - Template Literals
console.log(`Hello, ${name}! You are ${age} years old.`); // Logs a string with embedded variables

// 12. ES6 Features - Destructuring
const person = { name: "Alice", age: 30 };
const { name: personName, age: personAge } = person; // Destructures 'person' object into variables
console.log(personName); // Logs "Alice"
console.log(personAge);  // Logs 30

// 13. Working with APIs - Fetch Example
fetch("https://api.example.com/data")
    .then(response => response.json()) // Converts the response to JSON
    .then(data => console.log(data)) // Logs the data from the API

// 14. Asynchronous JavaScript - Async/Await Example
async function fetchData() {
    let response = await fetch("https://api.example.com/data"); // Waits for the fetch to complete
    let data = await response.json(); // Waits for the response to be converted to JSON
    console.log(data); // Logs the data from the API
}
fetchData(); // Calls the async function to fetch and log data
