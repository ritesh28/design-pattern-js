export class HtmlDocument {
  constructor() {
    this.htmlNodes = [];
  }

  add(htmlNode) {
    this.htmlNodes.push(htmlNode);
  }

  execute(operation) {
    this.htmlNodes.forEach((node) => node.execute(operation));
  }
}
