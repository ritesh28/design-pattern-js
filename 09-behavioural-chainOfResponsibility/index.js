import { Authenticator } from "./authenticator.js";
import { Compressor } from "./compressor.js";
import { HttpRequest } from "./httpRequest.js";
import { Logger } from "./logger.js";
import { WebServer } from "./webServer.js";

// authenticator -> logger -> compressor
const compressor = new Compressor(null);
const logger = new Logger(compressor);
const authenticator = new Authenticator(logger);

const server = new WebServer(authenticator);
server.handle(new HttpRequest("admin", "1234"));
