import Editor from "./editor.js";
import History from "./history.js";

const editor = new Editor();
const history = new History();

editor.setContent("a");
history.push(editor.createState());

editor.setContent("b");
history.push(editor.createState());

editor.setContent("c");
editor.restoreState(history.pop());

console.log(editor.getContent());
