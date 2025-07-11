import { CircleComponent } from "./circleComponent.js";
import { ContextMenu } from "./contextMenu.js";

const circle = new CircleComponent(5);
circle.render();

const contextMenu = new ContextMenu();

const cloneCircle = contextMenu.duplicate(circle);
cloneCircle.render();
