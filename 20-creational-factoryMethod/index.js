import { Controller } from "./controller.js";
import { SharpController } from "./sharpController.js";

const matchaController = new Controller();
matchaController.render("template.html", ["p1", "p2", "p3"]);

const sharpController = new SharpController();
sharpController.render("template.html", ["p1", "p2", "p3"]);
