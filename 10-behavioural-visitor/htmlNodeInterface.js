export class htmlNodeInterface {
  constructor() {
    if (this.constructor === htmlNodeInterface)
      throw new Error("Cant instantiate an Interface class");
  }

  execute(operation) {
    throw new Error("execute() is not implemented");
  }
}
