import { htmlNodeInterface } from "./htmlNodeInterface.js";

export class HeadingNode extends htmlNodeInterface {
  execute(operation) {
    operation.apply(this);
  }
}
