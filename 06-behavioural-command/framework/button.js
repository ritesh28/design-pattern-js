export class Button {
  constructor(command) {
    this.command = command;
    this.label = "random button";
  }

  click() {
    this.command.execute();
  }
}
