export class ConfigManager {
  static _instance = new ConfigManager();
  static getInstance() {
    return ConfigManager._instance;
  }

  constructor() {
    if (ConfigManager._instance)
      throw new Error(
        "constructor is private and already a single instance is created"
      );
    this._keyValuePair = {};
  }

  setKeyValuePair(key, value) {
    this._keyValuePair[key] = value;
  }

  getKeyValuePair(key) {
    return this._keyValuePair[key];
  }
}
