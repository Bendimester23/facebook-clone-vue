"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
exports["default"] = (function (db) {
    var connect = function () {
        console.log('[DB] Connecting...');
        mongoose_1["default"]
            .connect(db, { useNewUrlParser: true })
            .then(function () {
            return console.info("[DB] Successfully connected!");
        })["catch"](function (error) {
            console.error('[DB] Error connecting to database: ', error);
            return process.exit(1);
        });
    };
    connect();
    mongoose_1["default"].connection.on('disconnected', connect);
});
