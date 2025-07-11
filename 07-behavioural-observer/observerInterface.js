export class ObserverInterface {
  constructor() {
    if (this.constructor === ObserverInterface)
      throw new Error("Cant instantiate an Interface class");
  }

  update() {
    throw new Error("execute() is not implemented");
  }
}
