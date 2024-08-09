// Exporting a function from a module (export.js)
export function greet(name) {
    return `Hello, ${name}!`; // Function returns a greeting string
}

// Importing and using the function in another file (import.js)
import { greet } from './export.js'; // Import the greet function from export.js

console.log(greet('Alice')); // Call the imported function with 'Alice' and log the result
