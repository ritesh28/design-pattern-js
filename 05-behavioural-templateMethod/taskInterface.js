import { AuditTrail } from "./auditTrail.js";

export class TaskInterface {
  constructor() {
    if (this.constructor === TaskInterface)
      throw new Error("Cant instantiate an Interface class");
    this.auditTrail = new AuditTrail();
  }

  execute() {
    // common method
    this.auditTrail.record();
    // specific task method
    this._doExecute();
  }

  _doExecute() {
    throw new Error("doExecute() is not implemented");
  }
}
