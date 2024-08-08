// 1. Prototypes and Prototypal Inheritance
function Animal(name, sound) {
    this.name = name;
    this.sound = sound;
}

// Adding a method to Animal's prototype
Animal.prototype.makeSound = function() {
    console.log(`${this.name} says ${this.sound}`);
};

// Creating an instance of Animal
const dog = new Animal("Dog", "Woof");
dog.makeSound(); // Output: Dog says Woof

// 2. Asynchronous Iterators and Generators
// A generator function that yields values
function* numberGenerator() {
    yield 1;
    yield 2;
    yield 3;
}

// Iterating over a generator
const gen = numberGenerator();
console.log(gen.next().value); // Output: 1
console.log(gen.next().value); // Output: 2
console.log(gen.next().value); // Output: 3

// Asynchronous generator function that simulates fetching data
async function* asyncNumberGenerator() {
    for (let i = 1; i <= 3; i++) {
        yield await new Promise(resolve => setTimeout(() => resolve(i), 1000));
    }
}

// Iterating over an asynchronous generator
(async () => {
    for await (let num of asyncNumberGenerator()) {
        console.log(num); // Output: 1, then 2, then 3 (with a delay)
    }
})();

// 3. Immutability with Object.freeze
const person = {
    name: "Alice",
    age: 30
};

// Freezing the object to prevent modifications
Object.freeze(person);

// Attempting to modify a frozen object (will not work)
person.age = 35;
console.log(person.age); // Output: 30

// 4. Deep Cloning Objects
const nestedObject = {
    name: "John",
    details: {
        age: 25,
        address: {
            city: "Dublin",
            country: "Ireland"
        }
    }
};

// Deep cloning using structuredClone (for modern browsers)
const clonedObject = structuredClone(nestedObject);

// Modifying the cloned object without affecting the original
clonedObject.details.age = 30;
clonedObject.details.address.city = "Cork";

console.log(nestedObject.details.age); // Output: 25 (original remains unchanged)
console.log(nestedObject.details.address.city); // Output: Dublin (original remains unchanged)
console.log(clonedObject.details.age); // Output: 30
console.log(clonedObject.details.address.city); // Output: Cork

// 5. Map and Set Collections
// Creating a Map
let map = new Map();
map.set("name", "Alice");
map.set("age", 30);

console.log(map.get("name")); // Output: Alice
console.log(map.has("age"));  // Output: true

// Creating a Set
let set = new Set();
set.add(1);
set.add(2);
set.add(3);
set.add(3); // Duplicate values are ignored

console.log(set.has(3)); // Output: true
console.log(set.size);   // Output: 3

// 6. Promises with All, Race, and AllSettled
// Creating a few promises
const promise1 = new Promise((resolve) => setTimeout(() => resolve("First!"), 1000));
const promise2 = new Promise((resolve) => setTimeout(() => resolve("Second!"), 2000));
const promise3 = new Promise((resolve, reject) => setTimeout(() => reject("Third failed!"), 1500));

// Using Promise.all to wait for all promises to resolve
Promise.all([promise1, promise2])
    .then(results => console.log(results)) // Output: ["First!", "Second!"]
    .catch(error => console.error(error));

// Using Promise.race to get the first promise that resolves or rejects
Promise.race([promise1, promise2, promise3])
    .then(result => console.log(result)) // Output: "First!" (since it resolves first)
    .catch(error => console.error(error));

// Using Promise.allSettled to get the outcome of all promises
Promise.allSettled([promise1, promise2, promise3])
    .then(results => console.log(results));
// Output:
// [
//   { status: 'fulfilled', value: 'First!' },
//   { status: 'rejected', reason: 'Third failed!' },
//   { status: 'fulfilled', value: 'Second!' }
// ]

// 7. Custom Errors and Error Handling
class CustomError extends Error {
    constructor(message) {
        super(message);
        this.name = "CustomError";
    }
}

try {
    throw new CustomError("This is a custom error message");
} catch (error) {
    console.error(error.name);    // Output: CustomError
    console.error(error.message); // Output: This is a custom error message
}

// 8. Destructuring and Rest/Spread Operators
const user = {
    username: "john_doe",
    email: "john@example.com",
    age: 25,
    address: {
        city: "Dublin",
        country: "Ireland"
    }
};

// Destructuring with nested objects
const { username, email, address: { city, country } } = user;
console.log(username, city); // Output: john_doe Dublin

// Using rest operator to get remaining properties
const { age, ...rest } = user;
console.log(rest); // Output: { username: 'john_doe', email: 'john@example.com', address: { city: 'Dublin', country: 'Ireland' } }

// Using spread operator to combine objects
const updatedUser = { ...user, age: 26 };
console.log(updatedUser); // Output: original user object with age updated to 26
