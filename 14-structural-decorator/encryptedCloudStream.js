import { StreamInterface } from "./streamInterface.js";

export class EncryptedCloudStream extends StreamInterface {
  constructor(stream) {
    super();
    this.stream = stream;
  }

  write(data) {
    const encryptedData = this._encrypt(data);
    this.stream.write(encryptedData);
  }

  _encrypt(data) {
    return `###Encrypted-${data}-Encrypted###`;
  }
}
