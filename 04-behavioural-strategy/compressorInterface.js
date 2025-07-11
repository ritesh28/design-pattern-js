export default class CompressorInterface {
  constructor() {
    if (this.constructor === CompressorInterface)
      throw new Error("Cant instantiate an Interface class");
  }

  compress(fileName) {
    throw new Error("compress() is not implemented");
  }
}
