/*
  Classes in ECMAScript 6 (final semantics) | 2ality
  http://www.2ality.com/2015/02/es6-classes-final.html
*/

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  toString() {
    return `( ${this.x}, ${this.y} )`;
  }
}

let point = new Point( 1, 1 );

console.log( 'point : ', point.toString() );
console.log( 'point instanceof Point : ', point instanceof Point );

//---

class ColorPoint extends Point {
  constructor(x, y, color) {
    super(x, y);
    this.color = color;
  }

  toString() {
    return `${super.toString()} in ${this.color}`;
  }
}

let colorPoint = new ColorPoint(2, 2, 'blue');

console.log( 'colorPoint : ', colorPoint.toString() );
console.log( 'colorPoint instanceof ColorPoint: ', colorPoint instanceof ColorPoint );
console.log( 'colorPoint instanceof Point: ', colorPoint instanceof Point );
