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
const Rectangle = require('./0-rectangle');

const r1 = new Rectangle();
console.log(r1);
console.log(r1.constructor);
