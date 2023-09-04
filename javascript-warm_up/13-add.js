#!/usr/bin/node
const { add } = require('./13-add');
console.log(add(3, 5));
//function
function add(a, b) {
  return a + b;
}

module.exports = { add };
