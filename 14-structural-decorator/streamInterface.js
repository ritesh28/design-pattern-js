export class StreamInterface {
  constructor() {
    if (this.constructor === StreamInterface)
      throw new Error("Cant instantiate an Interface class");
  }

  write(data) {
    throw new Error("write() is not implemented");
  }
}
