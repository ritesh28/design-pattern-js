import { AdvancedRemoteControl } from "./advancedRemoteControl.js";
import { RemoteControl } from "./remoteControl.js";
import { SonyTV } from "./sonyTV.js";

const remoteControl = new RemoteControl(new SonyTV());
remoteControl.turnOn();
remoteControl.turnOff();

const advancedRemoteControl = new AdvancedRemoteControl(new SonyTV());
advancedRemoteControl.turnOn();
advancedRemoteControl.setChannel(5);
advancedRemoteControl.turnOff();
