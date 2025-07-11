import { NotificationService } from "./notificationService.js";

const notificationService = new NotificationService();
notificationService.send("Hello World", "targetIP");
