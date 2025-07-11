import { Movie } from "./movie.js";
import { PresentationBuilderInterface } from "./presentationBuilderInterface.js";

export class MovieBuilder extends PresentationBuilderInterface {
  constructor() {
    super();
    this._movie = new Movie();
  }

  addSlide(slide) {
    this._movie.addFrame(slide.getText(), 3);
  }

  getMovie() {
    return this._movie;
  }
}
