#!/usr/bin/node

class Rectangle {
  constructor(w, h) {
    this.width = w;
    this.height = h;
  }
}

// Example usage:
const myRectangle = new Rectangle(5, 10);
console.log(`Width: ${myRectangle.width}, Height: ${myRectangle.height}`);
