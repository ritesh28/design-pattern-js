export class handlerInterface {
  constructor(nextHandler) {
    if (this.constructor === handlerInterface)
      throw new Error("Cant instantiate an Interface class");
    this.nextHandler = nextHandler;
  }

  handle(request) {
    if (!this.doHandle(request)) return;
    if (!this.nextHandler) return;
    this.nextHandler.handle(request);
  }

  doHandle(request) {
    throw new Error("handle() is not implemented");
  }
}
