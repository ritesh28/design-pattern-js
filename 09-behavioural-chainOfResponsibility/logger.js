import { handlerInterface } from "./handlerInterface.js";

export class Logger extends handlerInterface {
  constructor(nextHandler) {
    super(nextHandler);
  }

  doHandle(request) {
    console.log("Log");
    return true;
  }
}
