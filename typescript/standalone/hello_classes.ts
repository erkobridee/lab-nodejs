/*
  typescript compile command:
  
    tsc hello_classes --target es5
  
  run command:
  
    node hello_classes
*/

class Point {
  private _x : Number;
  private _y : Number;
  
  constructor(x : Number, y : Number) {
    this._x = x;
    this._y = y;
  }
  
  set x(value : Number) {
    this._x = value;  
  }
  
  get x() : Number {
    return this._x;
  }
  
  set y(value : Number) {
    this._y = value;
  }
  
  get y() : Number {
    return this._y;
  }
  
  toString() : String {
    return '( ' + this._x + ', ' + this._y + ' )';
  }
}

let point = new Point(1, 1);

console.log( 'point : ', point.toString() );
console.log( '[getter] point.x :', point.x );

point.x = 2;
point.y = 2;

console.log( 'point : ', point.toString() );

//-------------------------------------------------------

class ColorPoint extends Point {
  private _color : String;
  
  constructor( x : Number, y : Number, color : String ) {
    super( x, y );
    this.color = color; // use color setter
  }
  
  get color() : String {
    return this._color;
  }
  
  set color( value : String ) {
    this._color = value;
  }
  
  toString() : String {
    return super.toString() + ' in ' + this.color; // use color getter
  }
}

let colorPoint = new ColorPoint( 3, 3, 'orange' );

console.log( 'colorPoint : ', colorPoint.toString() );
console.log( '[getter] colorPoint.color : ', colorPoint.color );

colorPoint.color = 'white';
colorPoint.x = 4;
colorPoint.y = 5;

console.log( 'colorPoint : ', colorPoint.toString() );

//---

console.log( 'colorPoint instanceof ColorPoint: ', colorPoint instanceof ColorPoint );
console.log( 'colorPoint instanceof Point: ', colorPoint instanceof Point );