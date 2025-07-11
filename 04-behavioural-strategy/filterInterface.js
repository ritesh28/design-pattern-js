export default class FilterInterface {
  constructor() {
    if (this.constructor === FilterInterface)
      throw new Error("Cant instantiate an Interface class");
  }

  apply(fileName) {
    throw new Error("apply() is not implemented");
  }
}
