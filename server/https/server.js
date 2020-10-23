"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var morgan_1 = __importDefault(require("morgan"));
var body_parser_1 = __importDefault(require("body-parser"));
var app = express_1["default"]();
app.use(body_parser_1["default"].json());
app.use(morgan_1["default"]("dev"));
app.use(function (req, res, next) {
    console.log('Ip: ' + req.connection.remoteAddress);
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, auth-token, Access-Control-Allow-Origin");
    next();
});
//Routes
var auth_1 = __importDefault(require("./routes/auth"));
var posts_1 = __importDefault(require("./routes/posts"));
app.use('/api/auth', auth_1["default"]);
app.use('/api/posts', posts_1["default"]);
app.get('/', function (req, res) {
    res.send("API working.");
});
function start() {
    app.listen(process.env.PORT || 20004, function () {
        console.log('[http] Server started!');
    });
}
exports["default"] = start;
;
