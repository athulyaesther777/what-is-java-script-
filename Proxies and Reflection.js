// Create a target object
const target = {
    message1: "hello",
    message2: "world"
};

// Create a proxy to intercept operations on the target object
const handler = {
    get: function(obj, prop) {
        // Intercept property access
        return prop in obj ? obj[prop] : 'Property does not exist'; // Return a custom message if property doesn't exist
    },
    set: function(obj, prop, value) {
        // Intercept property assignment
        console.log(`Setting ${prop} to ${value}`);
        obj[prop] = value; // Assign the value to the property
        return true; // Indicate success
    }
};

// Create a proxy object with the target and handler
const proxy = new Proxy(target, handler);

console.log(proxy.message1); // Output: "hello" (normal property access)
console.log(proxy.nonExistentProperty); // Output: "Property does not exist" (intercepted property access)
proxy.message1 = 'hi'; // Output: "Setting message1 to hi" (intercepted property assignment)
console.log(proxy.message1); // Output: "hi" (property value has been updated)
