import CompressorInterface from "./compressorInterface.js";

export class PngCompressor extends CompressorInterface {
  compress(fileName) {
    console.log("Compressing usign PNG");
  }
}
