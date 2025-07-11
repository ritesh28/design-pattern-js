export class DeviceInterface {
  constructor() {
    if (this.constructor === DeviceInterface)
      throw new Error("Cant instantiate an Interface class");
  }

  turnOn() {
    throw new Error("turnOn() is not implemented");
  }

  turnOff() {
    throw new Error("turnOff() is not implemented");
  }

  setChannel(channelNo) {
    throw new Error("setChannel() is not implemented");
  }
}
