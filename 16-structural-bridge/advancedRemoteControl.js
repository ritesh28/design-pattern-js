import { RemoteControl } from "./remoteControl.js";

export class AdvancedRemoteControl extends RemoteControl {
  constructor(device) {
    super(device);
  }

  setChannel(channelNo) {
    this.device.setChannel(channelNo);
  }
}
