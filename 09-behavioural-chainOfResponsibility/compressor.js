import { handlerInterface } from "./handlerInterface.js";

export class Compressor extends handlerInterface {
  constructor(nextHandler) {
    super(nextHandler);
  }

  doHandle(request) {
    console.log("Compress");
    return true;
  }
}
