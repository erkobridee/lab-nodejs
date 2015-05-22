interface Point {
  x: Number,
  y: Number
};

class Monster1 {
  name: String;
  position: Point;

  constructor(name, position) {
    this.name = name;
    this.position = position;
  }
}

class Monster2 {
  constructor(public name: String, public position: Point) {
  }
}

//---

var monster1 = new Monster1('Monster Name 01', { x: 1, y: 2 });
var monster2 = new Monster2('Monster Name 02', { x: 2, y: 6 });

console.log(monster1, monster2);