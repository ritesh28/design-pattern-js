import ToolInterface from "./toolInterface.js";

export default class SelectionTool extends ToolInterface {
  mouseDown() {
    console.log("SelectionTool mouseDown");
  }

  mouseUp() {
    console.log("SelectionTool mouseUp");
  }
}
