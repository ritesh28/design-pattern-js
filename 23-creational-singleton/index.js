import { ConfigManager } from "./configManager.js";

const manager = ConfigManager.getInstance();
manager.setKeyValuePair("name", "ritesh");

const anotherManager = ConfigManager.getInstance();
const val = anotherManager.getKeyValuePair("name");
console.log(val);

// new ConfigManager(); // Error. Cant instantiate
