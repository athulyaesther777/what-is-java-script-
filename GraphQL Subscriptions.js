// Import Apollo Client and WebSocketLink for handling GraphQL subscriptions
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { WebSocketLink } from '@apollo/client/link/ws';
import { gql } from '@apollo/client';

// Create a WebSocket link to connect to the GraphQL subscription endpoint
const wsLink = new WebSocketLink({
    uri: `wss://example.com/graphql`, // WebSocket endpoint for the GraphQL server
    options: {
        reconnect: true // Automatically reconnect if the WebSocket connection is lost
    }
});

// Create an Apollo Client instance, using the WebSocket link and an in-memory cache
const client = new ApolloClient({
    link: wsLink, // Use the WebSocket link for subscriptions
    cache: new InMemoryCache() // Cache the GraphQL queries in memory
});

// Define a GraphQL subscription to listen for new messages being added
const MESSAGES_SUBSCRIPTION = gql`
    subscription {
        messageAdded {
            id        // ID of the new message
            content   // Content of the new message
            user {    // User who sent the message
                name  // Name of the user
            }
        }
    }
`;

// Subscribe to the subscription, handling the real-time updates as messages are added
client.subscribe({
    query: MESSAGES_SUBSCRIPTION // Subscribe using the defined GraphQL subscription query
}).subscribe({
    next(response) {
        // Log the new message received from the subscription
        console.log('New message:', response.data.messageAdded);
    }
});
