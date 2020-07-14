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
        this.router.get("/id:id", this.getById);
    }
    getAll(req, res, next) {
        res.send({
            firstName: "Navid",
            lastName: "Barsalari",
        });
    }
    getById(req, res, next) {
        if (!req.params.id)
            return res.status(404).json({ message: 'Not Found' });
        res.send('Hello i am users controller');
    }
}
exports.UsersController = UsersController;
exports.default = new UsersController().router;
