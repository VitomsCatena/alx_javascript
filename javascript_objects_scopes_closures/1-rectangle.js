#!/usr/bin/node

class Rectangle {
  constructor(w, h) {
    if (w <= 0 || h <= 0) {
      // Handle the case where width or height is not positive
      return {};
    } else if (h === undefined) {
      // Handle the case where height is not provided
      this.width = w;
      this.height = undefined;
    } else {
      // Normal case, both width and height are provided
      this.width = w;
      this.height = h;
    }
  }
}

module.exports = Rectangle;

// usage:

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
}
