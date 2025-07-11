import { UiControlInterface } from "./uiControlInterface.js";

export class Button extends UiControlInterface {
  constructor(mediator) {
    super(mediator);
    this._isEnabled = false;
  }

  getIsEnabled() {
    return this._isEnabled;
  }

  setIsEnabled(isEnabled) {
    this._isEnabled = isEnabled;
    this.mediator.changed(this);
  }
}
