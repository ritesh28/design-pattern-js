export class ComponentInterface {
  constructor() {
    if (this.constructor === ComponentInterface)
      throw new Error("Cant instantiate an Interface class");
  }

  render() {
    throw new Error("render() is not implemented");
  }

  clone() {
    throw new Error("clone() is not implemented");
  }
}
