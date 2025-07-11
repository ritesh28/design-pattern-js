import { PointIconFactory } from "./pointIconFactory.js";

export class PointIcon {
  constructor(type, img, caller) {
    if (!(caller && caller.constructor === PointIconFactory))
      throw new Error("Only PointIconFactory class can instantiate this class");
    this.type = type;
    this.img = img;
  }
}
