export class EBookInterface {
  constructor() {
    if (this.constructor === EBookInterface)
      throw new Error("Cant instantiate an Interface class");
  }

  show() {
    throw new Error("show() is not implemented");
  }

  getFileName() {
    throw new Error("getFileName() is not implemented");
  }
}
