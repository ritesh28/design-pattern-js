import FilterInterface from "./filterInterface.js";

export class BwFitler extends FilterInterface {
  apply(fileName) {
    console.log("Applying B&W filter");
  }
}
