// Function that returns a Promise which resolves after a delay
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Async function that waits for the delay and then logs a message
async function asyncExample() {
    console.log('Start waiting...');
    await delay(2000); // Wait for 2 seconds (2000 milliseconds)
    console.log('Waited for 2 seconds!');
}

// Call the async function
asyncExample(); // Initiates the process
