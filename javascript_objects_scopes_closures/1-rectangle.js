#!/usr/bin/node

class Rectangle {
  constructor(w, h, color) {
    this.width = w;
    this.height = h;
    this.color = color;
  }

  calcArea() {
    return this.width * this.height;
  }
}
