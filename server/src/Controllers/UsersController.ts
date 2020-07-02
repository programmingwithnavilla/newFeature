import { Router, Response, Request, NextFunction } from "express";

export class UsersController {
  // Refs to express Router
  public router: Router;

  constructor() {
    this.router = new Router();
    this.init();
  }

  private init(): void {
    this.router.get("/", this.getAll);
  }

  private getAll(req: Request, res: Response, next: NextFunction): void {
    res.send({
      firstName: "Navid",
      lastName: "Barsalari",
    });
  }
}

export default new UsersController().router;
