export class Presentation {
  constructor() {
    this._slides = [];
  }
  addSlide(slide) {
    this._slides.push(slide);
  }

  export(presentationBuilder) {
    this._slides.forEach((slide) => {
      presentationBuilder.addSlide(slide);
    });
  }
}
