class Logger {
  constructor() {
    if (Logger.instance) {
      return Logger.instance;
    }
    this.logs = [];
    Logger.instance = this;
  }

  log(message) {
    this.logs.push(message);
    console.log("LOG:", message);
  }

  printLogCount() {
    console.log(`${this.logs.length} Logs`);
  }
}

module.exports = Logger;
