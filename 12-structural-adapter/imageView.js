export class ImageView {
  constructor(image) {
    this.image = image;
  }

  applyFilter(filter) {
    filter.apply(this.image);
  }
}
