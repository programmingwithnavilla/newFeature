import { Router, Response, Request, NextFunction } from "express";

export class UsersController {
  // Refs to express Router
  public router: Router;

  constructor() {
    this.router = new Router();
    this.init();
    // this is a test
  }

  private init(): void {
    this.router.get("/", this.getAll);
    this.router.get("/id:id", this.getById);
  }

  public getAll(req: Request, res: Response, next: NextFunction): void {
    res.send({
      firstName: "Navid",
      lastName: "Barsalari",
    });
  }

  public getById(req: Request, res: Response, next: NextFunction): void {
    if (!req.params.id) return res.status(404).json({ message: "Not Found" });
    res.send("Hello i am users controller");
  }
}

export default new UsersController().router;
