// Example to demonstrate the event loop

console.log('Start');

// Queue a microtask using Promise.resolve().then()
Promise.resolve().then(() => {
    console.log('Microtask 1');
});

// Queue a regular task with setTimeout()
setTimeout(() => {
    console.log('Timeout 1');
}, 0);

console.log('End');

// Expected Output:
// 1. 'Start' is logged
// 2. 'End' is logged
// 3. 'Microtask 1' (since microtasks are processed before the event loop continues)
// 4. 'Timeout 1' (executed in the next event loop iteration)
