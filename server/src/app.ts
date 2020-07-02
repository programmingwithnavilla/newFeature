import * as cors from "cors";
import * as express from "express";
import * as bodyParser from "body-parser";

// Import Controllers
import UsersController from "./Controllers/UsersController";

export class App {
  //Refs to express instance
  public express: express.Application;

  constructor() {
    this.express = new express();
    this.middleware();
    this.routes();
  }

  private middleware(): void {
    this.express.use(cors());
    this.express.use(bodyParser.json());
    this.express.use(bodyParser.urlencoded({ extended: false }));
  }

  private routes(): void {
    let router = express.Router();
    this.express.use("/", router);
    this.express.use("/user", UsersController);
  }
}

export default new App().express;
