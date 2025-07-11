import { WidgetFactoryInterface } from "./widgetFactoryInterface.js";

export class MaterialWidgetFactory extends WidgetFactoryInterface {
  createButton() {
    console.log("button is created using material design");
  }

  createTextBox() {
    console.log("text box is created using material design");
  }
}
