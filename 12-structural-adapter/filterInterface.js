export class FilterInterface {
  constructor() {
    if (this.constructor === FilterInterface)
      throw new Error("Cant instantiate an Interface class");
  }

  apply(image) {
    throw new Error("apply() is not implemented");
  }
}
