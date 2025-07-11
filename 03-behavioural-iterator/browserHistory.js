import { ListIterator } from "./listIterator.js";

export class BrowsrHistory {
  constructor() {
    this.list = [];
  }

  push(url) {
    return this.list.push(url);
  }

  pop() {
    return this.list.pop();
  }

  createIterator() {
    return new ListIterator(this.list);
  }
}
