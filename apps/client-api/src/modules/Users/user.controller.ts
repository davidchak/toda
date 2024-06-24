import { Router } from "express";

export class UserController {
  private _router!: Router;

  get router() {
    return this._router;
  }
}
