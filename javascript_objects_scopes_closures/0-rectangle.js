#!/usr/bin/node

class Rectangle {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }

  calcArea() {
    return this.width * this.height;
  }

  calcPerimeter() {
    return 2 * (this.width + this.height);
  }
}
