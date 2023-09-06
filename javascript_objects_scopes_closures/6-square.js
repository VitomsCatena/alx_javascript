#!/usr/bin/node
const Rectangle = require('./5-square.js');

class Square extends Rectangle {
  constructor(size) {
    // Call the constructor of the parent class (Rectangle) using super()
    super(size, size);
  }

  charPrint(c) {
    if (c === undefined) {
      c = 'X'; // Use 'X' as the default character
    }

    if (this.width > 0) {
      for (let i = 0; i < this.height; i++) {
        console.log(c.repeat(this.width));
      }
    }
  }
}

module.exports = Square;

