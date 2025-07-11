export class mediatorInterface {
  constructor() {
    if (this.constructor === mediatorInterface)
      throw new Error("Cant instantiate an Interface class");
  }

  changed(uiControl) {
    throw new Error("changed() is not implemented");
  }
}
