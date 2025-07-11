import { ComponentInterface } from "./componentInterface.js";

export class Group extends ComponentInterface {
  constructor() {
    super();
    this.components = [];
  }

  add(component) {
    this.components.push(component);
  }

  render() {
    this.components.forEach((component) => component.render());
  }
}
