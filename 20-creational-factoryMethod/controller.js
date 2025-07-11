import { MatchaViewEngine } from "./matchaViewEngine.js";

export class Controller {
  render(template, data) {
    const engine = this.createViewEngine();
    const html = engine.render(template, data);
    console.log(html);
  }

  createViewEngine() {
    return new MatchaViewEngine();
  }
}
