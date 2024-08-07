function celsiusToFahrenheit(celsius) {
  // Formula to convert Celsius to Fahrenheit
  let fahrenheit = (celsius * 9/5) + 32;
  return fahrenheit;
}

// Get Celsius temperature from user
let celsiusTemp = parseFloat(prompt("Enter temperature in Celsius:"));

// Convert Celsius to Fahrenheit
let fahrenheitTemp = celsiusToFahrenheit(celsiusTemp);

// Display the result
console.log(celsiusTemp + " degrees Celsius is equal to " + fahrenheitTemp + " degrees Fahrenheit.");
