// Create a new WebSocket connection to the specified server URL
const socket = new WebSocket('wss://example.com/socket');

// Event listener for when the WebSocket connection is successfully opened
socket.addEventListener('open', event => {
    console.log('Connected to the WebSocket server');
    // Send a message to the server after the connection is open
    socket.send('Hello Server!');
});

// Event listener for when a message is received from the server via the WebSocket
socket.addEventListener('message', event => {
    console.log('Message from server:', event.data); // Log the received message data
});

// Event listener for when the WebSocket connection is closed
socket.addEventListener('close', event => {
    console.log('Disconnected from the WebSocket server');
});

// Event listener for handling WebSocket errors
socket.addEventListener('error', event => {
    console.error('WebSocket error:', event); // Log the error details
});
