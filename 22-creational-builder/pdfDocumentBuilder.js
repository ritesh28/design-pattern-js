import { PdfDocument } from "./pdfDocument.js";
import { PresentationBuilderInterface } from "./presentationBuilderInterface.js";

export class PdfDocumentBuilder extends PresentationBuilderInterface {
  constructor() {
    super();
    this._document = new PdfDocument();
  }

  addSlide(slide) {
    this._document.addPage(slide.getText());
  }

  getPdfDocument() {
    return this._document;
  }
}
