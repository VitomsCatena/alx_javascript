function addMeMaybe(number, theFunction) {
  number++; // Increment the number
  theFunction(number); // Call the function with the incremented number
}

// Export the function so it can be used outside of this module (CommonJS style)
module.exports.addMeMaybe = addMeMaybe;
