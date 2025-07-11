export class Library {
  constructor() {
    this._eBooks = {};
  }

  add(eBook) {
    this._eBooks[eBook.getFileName()] = eBook;
  }

  openEBook(fileName) {
    this._eBooks[fileName].show();
  }
}
