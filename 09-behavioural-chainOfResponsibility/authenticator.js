import { handlerInterface } from "./handlerInterface.js";

export class Authenticator extends handlerInterface {
  constructor(nextHandler) {
    super(nextHandler);
  }

  doHandle(request) {
    const isValid =
      request.getUsername() === "admin" && request.getPassword() === "1234";
    console.log("Authentication");
    return isValid;
  }
}
