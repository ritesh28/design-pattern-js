import { AnchorNode } from "./anchorNode.js";
import { HeadingNode } from "./headingNode.js";
import { OperationInterface } from "./OperationInterface.js";

export class PlainTextOperation extends OperationInterface {
  apply(htmlNode) {
    if (htmlNode.constructor === HeadingNode) {
      console.log("text-heading");
      return;
    }
    if (htmlNode.constructor === AnchorNode) {
      console.log("text-anchor");
      return;
    }
  }
}
