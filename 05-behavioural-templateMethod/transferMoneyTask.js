import { TaskInterface } from "./taskInterface.js";

export class TransferMoneyTask extends TaskInterface {
  _doExecute() {
    console.log("execution for Transfer Money Task");
  }
}
