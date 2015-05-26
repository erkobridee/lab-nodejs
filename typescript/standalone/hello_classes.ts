/*
  typescript compile command:
  
    tsc hello_classes --target es5
  
  run command:
  
    node hello_classes
*/

class Point {
  private _x: number;
  private _y: number;
  
  constructor(x: number, y: number) {
    this._x = x;
    this._y = y;
  }
  
  set x(value : number) {
    this._x = value;  
  }
  
  get x() : number {
    return this._x;
  }
  
  set y(value : number) {
    this._y = value;
  }
  
  get y() : number {
    return this._y;
  }
  
  toString() : string {
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
  private _color : string;
  
  constructor( x : number, y : number, color : string ) {
    super( x, y );
    this.color = color; // use color setter
  }
  
  get color() : string {
    return this._color;
  }
  
  set color( value : string ) {
    this._color = value;
  }
  
  toString() : string {
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