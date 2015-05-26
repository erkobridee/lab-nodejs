import { Point } from './classes/Point';
import { ColorPoint } from './classes/ColorPoint';

//---

let point = new Point( 1, 1 );

console.log( 'point : ', point.toString() );
console.log( 'point instanceof Point : ', point instanceof Point );

//---

let colorPoint = new ColorPoint(2, 2, 'blue');

console.log( 'colorPoint : ', colorPoint.toString() );
console.log( 'colorPoint instanceof ColorPoint: ', colorPoint instanceof ColorPoint );
console.log( 'colorPoint instanceof Point: ', colorPoint instanceof Point );

