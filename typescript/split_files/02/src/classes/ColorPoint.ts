import { Point } from "./Point";

export class ColorPoint extends Point {
  constructor(x: number, y: number, public color: string) {
    super(x, y);
  }

  toString() {
    return `${super.toString()} in ${this.color}`;
  }
}
