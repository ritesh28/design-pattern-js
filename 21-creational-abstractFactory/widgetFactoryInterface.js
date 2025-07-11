export class WidgetFactoryInterface {
  constructor() {
    if (this.constructor === WidgetFactoryInterface)
      throw new Error("Cant instantiate an Interface class");
  }

  createButton() {
    throw new Error("createButton() is not implemented");
  }

  createTextBox() {
    throw new Error("createTextBox() is not implemented");
  }
}
