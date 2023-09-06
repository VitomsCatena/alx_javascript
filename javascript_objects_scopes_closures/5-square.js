#!/usr/bin/node

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
}

class Square extends Rectangle {
  constructor(size) {
    //constructor of the parent class (Rectangle) using super()
    super(size, size);
  }
}

module.exports = Square;

// Example usage:
if (require.main === module) {
  const square = new Square(4);
  console.log(`Square Width: ${square.width}`);
  console.log(`Square Height: ${square.height}`);
}
