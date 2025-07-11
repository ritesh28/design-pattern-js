export class UiControlInterface {
  constructor(mediator) {
    if (this.constructor === UiControlInterface)
      throw new Error("Cant instantiate an Interface class");
    this.mediator = mediator;
  }
}
