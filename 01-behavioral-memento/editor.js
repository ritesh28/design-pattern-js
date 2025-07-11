import EditorState from "./editorState.js";

export default class Editor {
  constructor() {
    this.content = "";
  }

  getContent() {
    return this.content;
  }

  setContent(content) {
    this.content = content;
  }

  createState() {
    return new EditorState(this.content);
  }

  restoreState(state) {
    this.content = state.getContent();
  }
}
