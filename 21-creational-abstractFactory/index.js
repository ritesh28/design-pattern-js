import { AntWidgetFactory } from "./antWidgetFactory.js";
import { ContactForm } from "./contactForm.js";
import { MaterialWidgetFactory } from "./materialWidgetFactory.js";

const contactForm = new ContactForm();

contactForm.render(new MaterialWidgetFactory());

contactForm.render(new AntWidgetFactory());
