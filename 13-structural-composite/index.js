import { Group } from "./group.js";
import { Shape } from "./shape.js";

const mainGroup = new Group();
mainGroup.add(new Shape());

const subGroup = new Group();
subGroup.add(new Shape());
subGroup.add(new Shape());
mainGroup.add(subGroup);

mainGroup.render();
