function executeXTimes(x, theFunction) {
  if (x <= 0) {
    return; // No need to execute the function if x is less than or equal to 0
  }

  (function execute() {
    theFunction();
    if (--x > 0) {
      execute();
    }
  })();
}

// Example usage:
function sayHello() {
  console.log("Hello!");
}

executeXTimes(5, sayHello); // This will execute sayHello 5 times
