import BrushTool from "./brushTool.js";
import Canvas from "./canvas.js";
import SelectionTool from "./selectionTool.js";

const canvas = new Canvas();

canvas.setCurrentTool(new SelectionTool());
canvas.mouseDown();
canvas.mouseUp();

canvas.setCurrentTool(new BrushTool());
canvas.mouseDown();
canvas.mouseUp();
