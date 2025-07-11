export default class History {
  constructor() {
    this.states = [];
  }

  push(state) {
    this.states.push(state);
  }

  pop() {
    return this.states.pop();
  }
}
