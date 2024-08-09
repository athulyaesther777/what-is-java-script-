// AWS Lambda function handler in Node.js
exports.handler = async (event) => {
    // Extract the 'name' query string parameter from the event object
    const { name } = event.queryStringParameters;

    // Create a response object with a greeting message
    const response = {
        statusCode: 200, // HTTP status code for success
        body: JSON.stringify({ message: `Hello, ${name}!` }) // JSON string with the greeting
    };

    // Return the response object, which is sent back to the client
    return response;
};

// Example of invoking the AWS Lambda function using AWS SDK

// Import AWS SDK for Node.js
const AWS = require('aws-sdk');

// Create a new instance of the Lambda service
const lambda = new AWS.Lambda();

// Define parameters for the Lambda function invocation
const params = {
    FunctionName: 'myLambdaFunction', // Name of the Lambda function to invoke
    InvocationType: 'RequestResponse', // Synchronous invocation
    Payload: JSON.stringify({ queryStringParameters: { name: 'Alice' } }) // Pass the 'name' parameter
};

// Invoke the Lambda function
lambda.invoke(params, (error, data) => {
    if (error) {
        // Handle any errors that occurred during invocation
        console.error('Error invoking Lambda function:', error);
    } else {
        // Log the response from the Lambda function
        console.log('Lambda function response:', JSON.parse(data.Payload));
    }
});
