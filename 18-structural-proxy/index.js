import { EBookProxy } from "./eBookProxy.js";
import { Library } from "./library.js";

const library = new Library();

const fileNames = ["A", "B", "C"];

fileNames.forEach((f) => library.add(new EBookProxy(f)));

library.openEBook("B");
library.openEBook("A");
