// Function that returns another function (creating a closure)
function createCounter() {
    let count = 0; // Initialize count variable
    return function() {
        count++; // Increment the count variable
        return count; // Return the updated count
    };
}

// Create a counter instance
const counter = createCounter();

console.log(counter()); // Output: 1 (increment and return count)
console.log(counter()); // Output: 2 (increment and return count)
