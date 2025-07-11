export class OperationInterface {
  constructor() {
    if (this.constructor === OperationInterface)
      throw new Error("Cant instantiate an Interface class");
  }

  apply(htmlNode) {
    throw new Error("apply() is not implemented");
  }
}
