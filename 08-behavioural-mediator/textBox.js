import { UiControlInterface } from "./uiControlInterface.js";

export class TextBox extends UiControlInterface {
  constructor(mediator) {
    super(mediator);
    this._content = "";
  }

  getContent() {
    return this._content;
  }

  setContent(content) {
    this._content = content;
    this.mediator.changed(this);
  }
}
