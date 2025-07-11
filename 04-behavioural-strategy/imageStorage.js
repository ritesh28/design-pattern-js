export class ImageStorage {
  constructor(compressor, filter) {
    this.compressor = compressor;
    this.filter = filter;
  }

  store(fileName) {
    this.compressor.compress(fileName);
    this.filter.apply(fileName);
  }
}
