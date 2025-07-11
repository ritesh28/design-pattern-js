import { ObserverInterface } from "./observerInterface.js";

export class Chart extends ObserverInterface {
  update() {
    console.log("update Chart");
  }
}
