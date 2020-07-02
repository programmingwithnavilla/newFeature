import * as http from "http";
import App from "./app";

const port = 8000;

const server = http.createServer(App, (req, res) => {
  res.writeHead(200);
  res.end(`The server is available on port ${port}`);
});

server.listen(port);
console.log(`Server is running on port ${port} ...`);
