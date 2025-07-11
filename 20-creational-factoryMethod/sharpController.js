import { Controller } from "./controller.js";
import { sharpViewEngine } from "./sharpViewEngine.js";

export class SharpController extends Controller {
  createViewEngine() {
    return new sharpViewEngine();
  }
}
