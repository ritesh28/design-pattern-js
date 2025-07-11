import { EBookInterface } from "./eBookInterface.js";
import { RealEBook } from "./realEBook.js";

export class EBookProxy extends EBookInterface {
  constructor(fileName) {
    super();
    this._fileName = fileName;
    this._eBook = null;
  }

  show() {
    if (this._eBook === null) this._eBook = new RealEBook(this._fileName);
    this._eBook.show();
  }

  getFileName() {
    return this._fileName;
  }
}
