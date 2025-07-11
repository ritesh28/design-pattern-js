export class Subject {
  constructor() {
    this.observerList = [];
  }

  addObserver(observer) {
    this.observerList.push(observer);
  }

  removeObserver(observer) {
    this.observerList = this.observerList.filter((ob) => ob !== observer);
  }

  notifyObserver() {
    this.observerList.forEach((ob) => ob.update());
  }
}
