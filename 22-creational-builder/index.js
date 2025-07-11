import { MovieBuilder } from "./movieBuilder.js";
import { PdfDocumentBuilder } from "./pdfDocumentBuilder.js";
import { Presentation } from "./presentation.js";
import { Slide } from "./slide.js";

const presentation = new Presentation();
presentation.addSlide(new Slide("slide 1"));
presentation.addSlide(new Slide("slide 2"));
presentation.addSlide(new Slide("slide 3"));
presentation.addSlide(new Slide("slide 4"));

const pdfDocumentBuilder = new PdfDocumentBuilder();
presentation.export(pdfDocumentBuilder);
const pdfDocument = pdfDocumentBuilder.getPdfDocument();

const movieBuilder = new MovieBuilder();
presentation.export(movieBuilder);
const movie = movieBuilder.getMovie();
