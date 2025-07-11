import { Button } from "./button.js";
import { ListBox } from "./listBox.js";
import { mediatorInterface } from "./mediatorInterface.js";
import { TextBox } from "./textBox.js";

export class DialogBoxMediator extends mediatorInterface {
  constructor() {
    super();
    this.listBox = new ListBox(this);
    this.textBox = new TextBox(this);
    this.button = new Button(this);
  }

  simulateUserInteraction() {
    // Scenario 1
    this.listBox.setSelection("Article 1");
    console.log("textBox content -> " + this.textBox.getContent());
    console.log("button is enabled -> " + this.button.getIsEnabled());

    // Scenario 2
    this.listBox.setSelection("Article 2");
    this.textBox.setContent("");
    console.log("textBox content -> " + this.textBox.getContent());
    console.log("button is enabled -> " + this.button.getIsEnabled());
  }

  changed(uiControl) {
    if (uiControl === this.listBox) {
      // article selected
      this.textBox.setContent(this.listBox.getSelection());
      this.button.setIsEnabled(true);
      return;
    }
    if (uiControl === this.textBox) {
      // title changed
      const content = this.textBox.getContent();
      const isEmpty = content.trim() === "";
      this.button.setIsEnabled(!isEmpty);
      return;
    }
    if (uiControl === this.button) {
      // saving
    }
  }
}
