import { TaskInterface } from "./taskInterface.js";

export class GenerateReportTask extends TaskInterface {
  _doExecute() {
    console.log("execution for Generate Report Task");
  }
}
