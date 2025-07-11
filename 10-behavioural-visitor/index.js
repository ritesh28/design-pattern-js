import { AnchorNode } from "./anchorNode.js";
import { HeadingNode } from "./headingNode.js";
import { HighlightOperation } from "./highlightOperation.js";
import { HtmlDocument } from "./HtmlDocument.js";
import { PlainTextOperation } from "./plainTextOperation.js";

const document = new HtmlDocument();
document.add(new HeadingNode());
document.add(new AnchorNode());

document.execute(new HighlightOperation());
document.execute(new PlainTextOperation());
