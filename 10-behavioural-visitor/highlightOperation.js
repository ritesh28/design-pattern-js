import { AnchorNode } from "./anchorNode.js";
import { HeadingNode } from "./headingNode.js";
import { OperationInterface } from "./OperationInterface.js";

export class HighlightOperation extends OperationInterface {
  apply(htmlNode) {
    if (htmlNode.constructor === HeadingNode) {
      console.log("highlight-heading");
      return;
    }
    if (htmlNode.constructor === AnchorNode) {
      console.log("highlight-anchor");
      return;
    }
  }
}
