"use strict";
exports.__esModule = true;
var date = function () {
    return new Date().toISOString();
};
var info = function (name, message, object) {
    if (object) {
        console.info("[" + date() + "] [INFO] [" + name + "] " + message, object);
    }
    else {
        console.info("[" + date() + "] [INFO] [" + name + "] " + message);
    }
};
var warn = function (name, message, object) {
    if (object) {
        console.warn("[" + date() + "] [WARN] [" + name + "] " + message, object);
    }
    else {
        console.warn("[" + date() + "] [WARN] [" + name + "] " + message);
    }
};
var error = function (name, message, object) {
    if (object) {
        console.error("[" + date() + "] [ERROR] [" + name + "] " + message, object);
    }
    else {
        console.error("[" + date() + "] [ERROR] [" + name + "] " + message);
    }
};
var debug = function (name, message, object) {
    if (object) {
        console.debug("[" + date() + "] [DEBUG] [" + name + "] " + message, object);
    }
    else {
        console.debug("[" + date() + "] [DEBUG] [" + name + "] " + message);
    }
};
exports["default"] = {
    info: info,
    warn: warn,
    error: error,
    debug: debug
};
