import { Message } from "./message.js";
import { NotificationServer } from "./notificationServer.js";

export class NotificationService {
  send(msgContent, targetAddress) {
    const server = new NotificationServer();
    const conn = server.connect("ip");
    const authToken = server.authentication("appId", "key");
    const message = new Message(msgContent);
    server.send(authToken, message, targetAddress);
    conn.disconnect();
  }
}
