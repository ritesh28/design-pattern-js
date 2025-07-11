import { Point } from "./point.js";
import { PointIconFactory } from "./pointIconFactory.js";

export class PointService {
  constructor() {
    this.pointIconFactory = new PointIconFactory();
  }
  getPoints() {
    return [
      new Point(1, 2, this.pointIconFactory.getPointIcon("SCHOOL")),
      new Point(5, 5, this.pointIconFactory.getPointIcon("CAFE")),
    ];
  }
}
