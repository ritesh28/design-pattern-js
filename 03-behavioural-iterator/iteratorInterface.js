export default class IteratorInterface {
  constructor() {
    if (this.constructor === IteratorInterface)
      throw new Error("Cant instantiate an Interface class");
  }

  hasNext() {
    throw new Error("hasNext() is not implemented");
  }

  current() {
    throw new Error("current() is not implemented");
  }

  next() {
    throw new Error("next() is not implemented");
  }
}
