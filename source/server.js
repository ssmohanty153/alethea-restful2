"use strict";
exports.__esModule = true;
var express_1 = require("express");
var logging_1 = require("./config/logging");
var config_1 = require("./config/config");
var body_parser_1 = require("body-parser");
var http_1 = require("http");
// import bookRoutes from './routes/book';
var name = 'Server';
var router = express_1["default"]();
router.use(function (req, res, next) {
    logging_1["default"].info(name, "METHOD-[" + req.method + "],URL-[" + req.url + "],\n    IP-[" + req.socket.remoteAddress + "]");
    res.on('finish', function () {
        logging_1["default"].info(name, "METHOD-[" + req.method + "],URL-[" + req.url + "],\n        IP-[" + req.socket.remoteAddress + "],STATUS-[" + req.statusCode + "]");
    });
    next();
});
router.use(body_parser_1["default"].urlencoded({ extended: false }));
router.use(body_parser_1["default"].json);
router.use(function (req, res, next) {
    res.header('acces-origin', '*');
    res.header('access-header', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    if (req.method == 'OPTION') {
        res.header('Access-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }
    next();
});
// router.use('/books', bookRoutes);
/** Error handling */
router.use(function (req, res, next) {
    var error = new Error('Not found');
    res.status(404).json({
        message: error.message
    });
});
var httpServer = http_1["default"].createServer(router);
httpServer.listen(config_1["default"].server.port, function () { return logging_1["default"].info(name, "Server is running " + config_1["default"].server.hostname + ":" + config_1["default"].server.port); });
