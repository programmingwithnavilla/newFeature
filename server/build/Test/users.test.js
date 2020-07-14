"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const interceptor_js_1 = require("../util/interceptor.js");
// import Users from "../Controllers/UsersController";
const UsersController_1 = require("../Controllers/UsersController");
describe("Check method \'usersController\' ", () => {
    test('should 200 and return correct value', () => __awaiter(void 0, void 0, void 0, function* () {
        let req = interceptor_js_1.mockRequest();
        req.params.id = 1;
        const res = interceptor_js_1.mockResponse();
        yield UsersController_1.default(req, res);
        expect(res.send).toHaveBeenCalledTimes(1);
        expect(res.send.mock.calls.length).toBe(1);
        expect(res.send).toHaveBeenCalledWith('Hello i am todo controller');
    }));
    test('should 404 and return correct value', () => __awaiter(void 0, void 0, void 0, function* () {
        let req = interceptor_js_1.mockRequest();
        req.params.id = null;
        const res = interceptor_js_1.mockResponse();
        yield UsersController_1.default(req, res);
        expect(res.status).toHaveBeenCalledWith(404);
        expect(res.json).toHaveBeenCalledWith({ message: 'Not Found' });
    }));
});
