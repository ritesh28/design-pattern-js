import { ExternalFilterCaramel } from "./externalFilterCaramel.js";
import { FilterInterface } from "./filterInterface.js";

export class CaramelFilterAdapter extends FilterInterface {
  constructor() {
    super();
    this.caramelFilter = new ExternalFilterCaramel();
  }
  apply(image) {
    this.caramelFilter.init();
    this.caramelFilter.render();
  }
}
