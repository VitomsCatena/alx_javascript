#!/usr/bin/env node
console.log("Start of the execution queue");

// Use a loop to log numbers 1 to 100
for (let i = 1; i <= 100; i++) {
  console.log(i);
}

console.log("End of the loop printing");

// Schedule the final code block to be executed with a delay of 0 milliseconds
setTimeout(function () {
  console.log("Final code block to be executed");
}, 0);
