// Define a generator function with the 'function*' syntax
function* numberGenerator() {
    yield 1; // Pause and yield value 1
    yield 2; // Pause and yield value 2
    yield 3; // Pause and yield value 3
}

// Create an iterator from the generator function
const iterator = numberGenerator();

console.log(iterator.next().value); // Output: 1 (resume and get next value)
console.log(iterator.next().value); // Output: 2 (resume and get next value)
console.log(iterator.next().value); // Output: 3 (resume and get next value)
console.log(iterator.next().done);  // Output: true (no more values, iteration is complete)

