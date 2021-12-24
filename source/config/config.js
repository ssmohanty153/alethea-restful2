"use strict";
exports.__esModule = true;
var dotenv_1 = require("dotenv");
dotenv_1["default"].config();
var S_HOSTNAME = process.env.S_HOSTNAME || 'localhost';
var S_PORT = process.env.S_PORT || 3000;
var SERVER = {
    hostname: S_HOSTNAME,
    port: S_PORT
};
var config = {
    server: SERVER
};
exports["default"] = config;
