export default class ToolInterface {
  constructor() {
    if (this.constructor === ToolInterface)
      throw new Error("Cant instantiate an Interface class");
  }

  mouseDown() {
    throw new Error("mouseDown() is not implemented");
  }

  mouseUp() {
    throw new Error("mouseUp() is not implemented");
  }
}
