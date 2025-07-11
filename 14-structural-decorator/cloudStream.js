import { StreamInterface } from "./streamInterface.js";

export class CloudStream extends StreamInterface {
  write(data) {
    console.log(`Storing ${data}`);
  }
}
