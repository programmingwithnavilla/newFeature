"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class UsersController {
    constructor() {
        this.router = new express_1.Router();
        this.init();
    }
    init() {
        this.router.get("/", this.getAll);
    }
    getAll(req, res, next) {
        res.send({
            firstName: "Navid",
            lastName: "Barsalari",
        });
    }
}
exports.UsersController = UsersController;
exports.default = new UsersController().router;
