// Main script (running in the main thread)

// Check if the browser supports Web Workers
if (window.Worker) {
    // Create a new Web Worker from the specified script file
    const worker = new Worker('worker.js');

    // Send a message to the Web Worker
    worker.postMessage('Hello, Worker!');

    // Event listener for messages received from the Web Worker
    worker.onmessage = event => {
        console.log('Message from Worker:', event.data); // Log the message from the Worker
    };

    // Terminate the Web Worker when it's no longer needed
    worker.terminate();
}

// Worker script (worker.js, running in the background thread)

// Event listener for messages received from the main thread
self.onmessage = event => {
    console.log('Message from main thread:', event.data); // Log the received message

    // Perform some computation (example: summing up numbers)
    let result = 0;
    for (let i = 0; i < 1e6; i++) {
        result += i; // Accumulate the sum
    }

    // Send the result back to the main thread
    self.postMessage(result);
};
