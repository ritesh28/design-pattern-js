export class Point {
  constructor(x, y, pointIconObj) {
    this.x = x;
    this.y = y;
    this.icon = pointIconObj;
  }

  draw() {
    console.log(`${this.icon.type} at (${this.x}, ${this.y})`);
  }
}
