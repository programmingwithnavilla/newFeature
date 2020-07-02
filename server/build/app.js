"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");
// Import Controllers
const UsersController_1 = require("./Controllers/UsersController");
class App {
    constructor() {
        this.express = new express();
        this.middleware();
        this.routes();
    }
    middleware() {
        this.express.use(cors());
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false }));
    }
    routes() {
        let router = express.Router();
        this.express.use("/", router);
        this.express.use("/user", UsersController_1.default);
    }
}
exports.App = App;
exports.default = new App().express;
