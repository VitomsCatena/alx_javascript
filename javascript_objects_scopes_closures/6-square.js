#!/usr/bin/node
class Square extends Rectangle {
  constructor(size) {
    //constructor of the parent class (Rectangle) using super()
    super(size, size);
  }

  charPrint(c) {
    if (c === undefined) {
      c = 'X'; // Use 'X' as the default character
    }

    if (this.width > 0) {
      for (let i = 0; i < this.height; i++) {
        console.log(c.repeat(this.width));
      }
    }
  }
}

module.exports = Square;

//code example:

if (require.main === module) {
  const square1 = new Square(4);
  console.log('Square 1:');
  square1.charPrint();

  const square2 = new Square(3);
  console.log('Square 2:');
  square2.charPrint('A');
}
