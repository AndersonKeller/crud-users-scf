import { ensureDataIsValidMiddleware } from "./../middlewares/ensureDataIsValid.middleware";
import { Router } from "express";
import {
  createUserController,
  getUsersController,
} from "../controllers/users.controller";
import { createUserSchema } from "../schemas/user.schemas";
export const usersRouter: Router = Router();

usersRouter.get("", getUsersController);
usersRouter.post(
  "",
  ensureDataIsValidMiddleware(createUserSchema),
  createUserController
);
