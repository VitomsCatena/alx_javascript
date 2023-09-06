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
}

module.exports = Rectangle;

//alx code:

if (require.main === module) {
  const r1 = new Rectangle(5, 3);
  r1.print();

  const r2 = new Rectangle(0, 5); // Should create an empty object
  console.log(r2);

  const r3 = new Rectangle(3, 2);
  r3.print();
}
