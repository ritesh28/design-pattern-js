import CompressorInterface from "./compressorInterface.js";

export class JpegCompressor extends CompressorInterface {
  compress(fileName) {
    console.log("Compressing usign JPEG");
  }
}
