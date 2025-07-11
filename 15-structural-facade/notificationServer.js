import { AuthToken } from "./authToken.js";
import { Connection } from "./connection.js";

export class NotificationServer {
  // connect (address) -> Connection
  // authentication(appId, key) -> AuthToken
  // send(authToken, message, targetAddress) -> void
  // conn.disconnect()

  connect(address) {
    return new Connection();
  }

  authentication(appId, key) {
    return new AuthToken();
  }

  send(authToken, message, targetAddress) {
    console.log("Message Sent");
  }
}
