#!/usr/bin/node

class Rectangle {
  constructor(w, h) {
    if (w <= 0 || h <= 0 || !Number.isInteger(w) || !Number.isInteger(h)) {
      return {}; // Return an empty object for invalid inputs
    }

    this.width = w;
    this.height = h;
  }

  print() {
    if (this.width > 0 && this.height > 0) {
      for (let i = 0; i < this.height; i++) {
        console.log('X'.repeat(this.width));
      }
    }
  }

  rotate() {
    const temp = this.width;
    this.width = this.height;
    this.height = temp;
  }

  double() {
    this.width *= 2;
    this.height *= 2;
  }
}

module.exports = Rectangle;

if (require.main === module) {
  const r1 = new Rectangle(5, 3);
  console.log('Original Rectangle:');
  r1.print();
  r1.rotate();
  console.log('After Rotation:');
  r1.print();
  r1.double();
  console.log('After Doubling:');
  r1.print();
}
