#!/usr/bin/node

class Rectangle {
  constructor(w, h) {
    if (w <= 0 || h <= 0 || !Number.isInteger(w) || !Number.isInteger(h)) {
      return {}; // Return an empty object for invalid inputs
    }
    
    this.width = w;
    this.height = h;
  }
}

module.exports = Rectangle;

if (require.main === module) {
  const r1 = new Rectangle(2, 3);
  console.log(r1);
  console.log(r1.width);
  console.log(r1.height);

  const r2 = new Rectangle(2, -3);
  console.log(r2);
  console.log(r2.width);
  console.log(r2.height);

  const r3 = new Rectangle(2);
  console.log(r3);
  console.log(r3.width);
  console.log(r3.height);

  const r4 = new Rectangle(0, 5);
  console.log(r4);
}
