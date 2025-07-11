import IteratorInterface from "./iteratorInterface.js";

export class ListIterator extends IteratorInterface {
  constructor(historyList) {
    super();
    this.historyList = historyList;
    this.index = 0;
  }

  hasNext() {
    return this.index < this.historyList.length;
  }

  current() {
    return this.historyList[this.index];
  }

  next() {
    this.index++;
  }
}
