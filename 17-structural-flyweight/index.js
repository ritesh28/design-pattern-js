import { PointIcon } from "./pointIcon.js";
import { PointService } from "./pointService.js";

const service = new PointService();
service.getPoints().forEach((point) => point.draw());
