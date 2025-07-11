import ToolInterface from "./tool.js";

export default class BrushTool extends ToolInterface {
  mouseDown() {
    console.log("BrushTool mouseDown");
  }

  mouseUp() {
    console.log("BrushTool mouseUp");
  }
}
