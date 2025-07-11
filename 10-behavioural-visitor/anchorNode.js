import { htmlNodeInterface } from "./htmlNodeInterface.js";

export class AnchorNode extends htmlNodeInterface {
  execute(operation) {
    operation.apply(this);
  }
}
