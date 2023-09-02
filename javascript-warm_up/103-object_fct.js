#!/usr/bin/node

// Define the incr function
function incr(number) {
  return number + 1;
}

// Define the addMeMaybe function
function addMeMaybe(number, theFunction) {
  const incrementedNumber = incr(number); // Increment the number
  theFunction(incrementedNumber); // Call the function with the incremented number
}

// Export both functions so they can be used outside of this module (CommonJS style)
module.exports = {
  addMeMaybe: addMeMaybe,
  incr: incr
};
