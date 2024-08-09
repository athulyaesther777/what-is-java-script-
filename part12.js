// 1. Reactive Programming with RxJS

// Import necessary functions from RxJS
import { fromEvent } from 'rxjs';
import { map, throttleTime } from 'rxjs/operators';

// Create an observable that listens to 'mousemove' events on the document
const mouseMove$ = fromEvent(document, 'mousemove');

// Apply operators to the observable: 
// - throttleTime(1000): Limits the rate of events to one per second
// - map(event => {...}): Transforms the event object to only include mouse coordinates
const throttledMouseMove$ = mouseMove$.pipe(
    throttleTime(1000),
    map(event => ({
        x: event.clientX, // Get the x-coordinate of the mouse
        y: event.clientY  // Get the y-coordinate of the mouse
    }))
);

// Subscribe to the observable to start listening and reacting to the throttled mouse movements
throttledMouseMove$.subscribe(coords => {
    console.log(`Mouse coordinates: x = ${coords.x}, y = ${coords.y}`);
});

// 2. Web Components

// Define a custom HTML element by extending the HTMLElement class
class MyCustomElement extends HTMLElement {
    constructor() {
        super(); // Call the parent constructor

        // Attach a shadow DOM to the element (isolates styles and structure from the main DOM)
        const shadow = this.attachShadow({ mode: 'open' });

        // Create a new span element to hold text
        const wrapper = document.createElement('span');
        wrapper.textContent = 'Hello, Web Components!'; // Set the text content

        // Append the span element to the shadow DOM
        shadow.appendChild(wrapper);
    }
}

// Define the new custom element with a tag name
customElements.define('my-custom-element', MyCustomElement);

// Usage: <my-custom-element></my-custom-element> in HTML to display the component

// 3. TypeScript Integration

// Define a TypeScript interface for a User object
interface User {
    name: string;    // User's name
    age: number;     // User's age
    isActive: boolean; // Whether the user is active
}

// Function that accepts a User object as an argument
function greetUser(user: User): void {
    console.log(`Hello, ${user.name}!`); // Logs a greeting message
}

// Create a User object that conforms to the User interface
const user: User = { name: "Alice", age: 25, isActive: true };

// Call the function with the User object
greetUser(user); // Output: Hello, Alice!

// 4. WebAssembly

// Example in C code that could be compiled to WebAssembly
// int add(int a, int b) {
//     return a + b;
// }
// This C function adds two integers and returns the result

// In JavaScript, we would load and use the compiled WebAssembly module:

// Fetch the WebAssembly module (assuming 'add.wasm' is the compiled WebAssembly binary)
fetch('add.wasm').then(response =>
    response.arrayBuffer() // Convert the response to an ArrayBuffer
).then(bytes =>
    WebAssembly.instantiate(bytes) // Instantiate the WebAssembly module
).then(results => {
    const add = results.instance.exports.add; // Get the exported 'add' function from the module
    console.log(add(10, 20)); // Call the 'add' function with arguments, Output: 30
});

// 5. Machine Learning with TensorFlow.js

// Import TensorFlow.js library
import * as tf from '@tensorflow/tfjs';

// Create a simple sequential model (a linear stack of layers)
const model = tf.sequential();

// Add a dense (fully connected) layer with 1 unit and an input shape of [1]
model.add(tf.layers.dense({ units: 1, inputShape: [1] }));

// Compile the model with mean squared error loss and stochastic gradient descent optimizer
model.compile({ loss: 'meanSquaredError', optimizer: 'sgd' });

// Generate some synthetic data for training
const xs = tf.tensor2d([1, 2, 3, 4], [4, 1]); // Input data (features)
const ys = tf.tensor2d([1, 3, 5, 7], [4, 1]); // Target data (labels)

// Train the model on the data for 100 epochs (iterations)
model.fit(xs, ys, { epochs: 100 }).then(() => {
    // Use the trained model to make a prediction on new data
    const output = model.predict(tf.tensor2d([5], [1, 1])); 
    output.print(); // Print the prediction, Output: ~9
});

// 6. GraphQL with Apollo

// Import necessary functions from Apollo Client
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

// Create an Apollo Client instance with the GraphQL API endpoint and cache settings
const client = new ApolloClient({
    uri: 'https://example.com/graphql', // The GraphQL server URI
    cache: new InMemoryCache()          // Use an in-memory cache for query results
});

// Define a GraphQL query to fetch user data
client.query({
    query: gql`
        query GetUser {
            user(id: 1) {       // Fetch user with ID 1
                id              // Include user's ID in the response
                name            // Include user's name
                email           // Include user's email
            }
        }
    `
}).then(result => console.log(result)); // Log the result of the query

// 7. Server-Side Rendering (SSR) with Next.js

// Import React
import React from 'react';

// Define a functional React component that displays data
const Home = ({ data }) => (
    <div>
        <h1>Welcome to Next.js!</h1>
        <p>Data fetched from server: {data}</p> 
    </div>
);

// This function runs on the server-side at build time to fetch data
export async function getServerSideProps() {
    const res = await fetch('https://api.example.com/data'); // Fetch data from an API
    const data = await res.json(); // Parse the JSON response

    // Pass the fetched data to the component as props
    return { props: { data } };
}

// Export the component as the default export
export default Home;

// 8. Static Site Generation (SSG) with Gatsby

// Import React and GraphQL
import React from 'react';

// Define a functional React component that displays data
export default function Home({ data }) {
    return (
        <div>
            <h1>Welcome to Gatsby!</h1>
            <p>Data: {data.site.siteMetadata.title}</p> 
        </div>
    );
}

// Define a GraphQL query to fetch data at build time
export const query = graphql`
    query {
        site {
            siteMetadata {
                title   // Fetch the title from site metadata
            }
        }
    }
`;
