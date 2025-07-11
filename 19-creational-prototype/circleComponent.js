import { ComponentInterface } from "./componentInterface.js";

export class CircleComponent extends ComponentInterface {
  constructor(radius) {
    super();
    this._radius = radius;
  }

  render() {
    console.log(`Rendering Circle Component having Radius ${this._radius}`);
  }

  clone() {
    const newCircle = new CircleComponent(this._radius);
    console.log("Cloning Circle Component");
    return newCircle;
  }
}
