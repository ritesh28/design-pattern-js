import { Subject } from "./subject.js";

export class DataSourceSubject extends Subject {
  constructor() {
    super();
    this._value = "";
  }

  setValue(value) {
    this._value = value;
    this.notifyObserver();
  }

  getValue() {
    return this._value;
  }
}
