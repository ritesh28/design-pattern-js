import { WidgetFactoryInterface } from "./widgetFactoryInterface.js";

export class AntWidgetFactory extends WidgetFactoryInterface {
  createButton() {
    console.log("button is created using ant design");
  }

  createTextBox() {
    console.log("text box is created using ant design");
  }
}
