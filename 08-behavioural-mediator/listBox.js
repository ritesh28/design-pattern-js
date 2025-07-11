import { UiControlInterface } from "./uiControlInterface.js";

export class ListBox extends UiControlInterface {
  constructor(mediator) {
    super(mediator);
    this._selection = "";
  }

  getSelection() {
    return this._selection;
  }

  setSelection(selection) {
    this._selection = selection;
    this.mediator.changed(this);
  }
}
