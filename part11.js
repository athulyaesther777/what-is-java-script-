// 1. Proxy and Reflect
const targetObject = {
    name: "Alice",
    age: 30
};

// Creating a proxy to intercept operations on targetObject
const proxy = new Proxy(targetObject, {
    get(target, prop) {
        console.log(`Getting property ${prop}`);
        return Reflect.get(target, prop); // Reflect helps with default behavior
    },
    set(target, prop, value) {
        console.log(`Setting property ${prop} to ${value}`);
        return Reflect.set(target, prop, value);
    }
});

// Interacting with the proxy
console.log(proxy.name); // Logs: Getting property name, Output: Alice
proxy.age = 31; // Logs: Setting property age to 31

// 2. Decorators (Experimental in JavaScript, common in frameworks like TypeScript)
function readonly(target, key, descriptor) {
    descriptor.writable = false;
    return descriptor;
}

class Car {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }

    @readonly
    info() {
        return `${this.make} ${this.model}`;
    }
}

const car = new Car("Tesla", "Model S");
console.log(car.info()); // Output: Tesla Model S
// car.info = function() { return "Modified"; }; // Error: Cannot assign to read-only property

// 3. WeakMap and WeakSet
let obj1 = { name: "Object 1" };
let obj2 = { name: "Object 2" };

const weakMap = new WeakMap();
weakMap.set(obj1, "Data associated with obj1");

// WeakMap allows garbage collection of objects when no other references exist
obj1 = null; // Now the object previously referenced by obj1 is eligible for garbage collection

const weakSet = new WeakSet();
weakSet.add(obj2);

// WeakSet also allows garbage collection
obj2 = null; // The object previously referenced by obj2 is now eligible for garbage collection

// 4. Event Delegation
document.addEventListener("click", function(event) {
    if (event.target && event.target.matches("button.delete")) {
        console.log("Delete button clicked!", event.target);
    }
});

// Dynamic creation of buttons
const newButton = document.createElement("button");
newButton.className = "delete";
newButton.innerText = "Delete";
document.body.appendChild(newButton);

// Clicking the button will trigger the event listener due to event delegation

// 5. Currying
function multiply(a) {
    return function(b) {
        return function(c) {
            return a * b * c;
        };
    };
}

const result = multiply(2)(3)(4);
console.log(result); // Output: 24

// 6. Debouncing and Throttling
function debounce(func, delay) {
    let debounceTimer;
    return function() {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => func.apply(this, arguments), delay);
    };
}

function throttle(func, limit) {
    let lastFunc;
    let lastRan;
    return function() {
        const context = this;
        const args = arguments;
        if (!lastRan) {
            func.apply(context, args);
            lastRan = Date.now();
        } else {
            clearTimeout(lastFunc);
            lastFunc = setTimeout(function() {
                if ((Date.now() - lastRan) >= limit) {
                    func.apply(context, args);
                    lastRan = Date.now();
                }
            }, limit - (Date.now() - lastRan));
        }
    };
}

// Usage example for debouncing: search input
const searchInput = document.getElementById("search");
searchInput.addEventListener("keyup", debounce(function() {
    console.log("Search query:", this.value);
}, 500));

// Usage example for throttling: window resize
window.addEventListener("resize", throttle(function() {
    console.log("Window resized");
}, 1000));

// 7. Module Pattern (Classic JavaScript)
const CounterModule = (function() {
    let count = 0;

    function increment() {
        count++;
    }

    function getCount() {
        return count;
    }

    return {
        increment,
        getCount
    };
})();

CounterModule.increment();
console.log(CounterModule.getCount()); // Output: 1

// 8. Service Workers (Introduction to PWA concepts)
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js')
    .then(function(registration) {
        console.log('ServiceWorker registration successful with scope: ', registration.scope);
    })
    .catch(function(error) {
        console.log('ServiceWorker registration failed: ', error);
    });
}

// In service-worker.js
self.addEventListener('install', function(event) {
    console.log('Service Worker installing.');
});

self.addEventListener('activate', function(event) {
    console.log('Service Worker activating.');
});

self.addEventListener('fetch', function(event) {
    console.log('Fetching:', event.request.url);
});
