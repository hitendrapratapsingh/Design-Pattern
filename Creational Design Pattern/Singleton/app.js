const Logger = require('./logger');

const logger1 = new Logger();
const logger2 = new Logger();

logger1.log("First log message");
logger2.log("Second log message");

console.log("Are both loggers same?", logger1 === logger2);
logger1.printLogCount();
