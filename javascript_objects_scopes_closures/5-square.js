#!/usr/bin/node

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
}
class Square extends Rectangle {
  constructor(size) {
    super(size, size); // Call the Rectangle constructor with the same size for width and height
  }
}

module.exports = Square;

