import { StreamInterface } from "./streamInterface.js";

export class CompressedCloudStream extends StreamInterface {
  constructor(stream) {
    super();
    this.stream = stream;
  }

  write(data) {
    const compressedData = this._compress(data);
    this.stream.write(compressedData);
  }

  _compress(data) {
    return `###Compress-${data}-Compress###`;
  }
}
