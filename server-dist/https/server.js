"use strict";
exports.__esModule = true;
var express = require("express");
var app = express();
function start() {
    app.listen(20004, function () {
        console.log('[http] Server started!');
    });
}
exports["default"] = start;
;
