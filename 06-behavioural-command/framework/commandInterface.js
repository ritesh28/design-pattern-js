export class CommandInterface {
  constructor() {
    if (this.constructor === CommandInterface)
      throw new Error("Cant instantiate an Interface class");
  }

  execute() {
    throw new Error("execute() is not implemented");
  }
}
