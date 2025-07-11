import { FilterInterface } from "./filterInterface.js";

export class VividFilter extends FilterInterface {
  apply(image) {
    console.log("Applying vivid filter");
  }
}
