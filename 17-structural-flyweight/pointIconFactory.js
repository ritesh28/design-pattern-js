import { PointIcon } from "./pointIcon.js";
import { POINT_ICON_IMG } from "./pointIconConst.js";

export class PointIconFactory {
  constructor() {
    this.pointIcons = {};
  }

  getPointIcon(type) {
    if (!Object.keys(this.pointIcons).includes(type)) {
      const img = Object.keys(POINT_ICON_IMG).includes(type)
        ? POINT_ICON_IMG[type]
        : POINT_ICON_IMG.DEFAULT;
      this.pointIcons[type] = new PointIcon(type, img, this);
    }
    return this.pointIcons[type];
  }
}
