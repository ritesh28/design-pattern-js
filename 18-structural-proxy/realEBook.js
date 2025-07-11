import { EBookInterface } from "./eBookInterface.js";

export class RealEBook extends EBookInterface {
  constructor(fileName) {
    super();
    this._fileName = fileName;
    this._load();
  }

  _load() {
    console.log(`Loading the eBook - ${this._fileName}`);
  }

  show() {
    console.log(`Showing the eBook - ${this._fileName}`);
  }

  getFileName() {
    return this._fileName;
  }
}
