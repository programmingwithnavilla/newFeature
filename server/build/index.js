"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http = require("http");
const app_1 = require("./app");
const port = 8000;
const server = http.createServer(app_1.default, (req, res) => {
    res.writeHead(200);
    res.end(`The server is available on port ${port}`);
});
server.listen(port);
console.log(`Server is running on port ${port} ...`);
