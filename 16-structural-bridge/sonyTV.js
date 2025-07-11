import { DeviceInterface } from "./deviceInterface.js";

export class SonyTV extends DeviceInterface {
  turnOn() {
    console.log("Sony Tv is Turned On");
  }

  turnOff() {
    console.log("Sony Tv is Turned Off");
  }

  setChannel(channelNo) {
    console.log("Sony Tv is Set to " + channelNo);
  }
}
