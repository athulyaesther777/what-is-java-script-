// Import the createStore function from Redux to create a store
import { createStore } from 'redux';

// Define the initial state of the application
const initialState = {
    count: 0 // Initialize the count property to 0
};

// Define a reducer function that specifies how the state changes based on actions
function counterReducer(state = initialState, action) {
    switch (action.type) {
        case 'INCREMENT':
            // If the action is 'INCREMENT', increase the count by 1
            return { count: state.count + 1 };
        case 'DECREMENT':
            // If the action is 'DECREMENT', decrease the count by 1
            return { count: state.count - 1 };
        default:
            // If the action type is unrecognized, return the current state
            return state;
    }
}

// Create a Redux store that holds the state of the app, passing in the reducer function
const store = createStore(counterReducer);

// Log the initial state to the console
console.log(store.getState()); // Output: { count: 0 }

// Dispatch an action to increment the count
store.dispatch({ type: 'INCREMENT' });
console.log(store.getState()); // Output: { count: 1 }

// Dispatch an action to decrement the count
store.dispatch({ type: 'DECREMENT' });
console.log(store.getState()); // Output: { count: 0 }
