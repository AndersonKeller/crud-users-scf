import { createLoginController } from "../controllers/login.controller";
import { createLoginSchema } from "../schemas/login.schemas";
import { ensureDataIsValidMiddleware } from "./../middlewares/ensureDataIsValid.middleware";
import { Router } from "express";

export const loginRouter: Router = Router();

loginRouter.post(
  "",
  ensureDataIsValidMiddleware(createLoginSchema),
  createLoginController
);
