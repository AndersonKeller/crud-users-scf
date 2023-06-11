import { ensureDataIsValidMiddleware } from "./../middlewares/ensureDataIsValid.middleware";
import { Router } from "express";
import {
  createUserController,
  getUsersController,
  removeUserController,
} from "../controllers/users.controller";
import { createUserSchema } from "../schemas/user.schemas";
import { ensureExistsUserMiddleware } from "../middlewares/ensureExistsUser.middleware";
export const usersRouter: Router = Router();

usersRouter.get("", getUsersController);
usersRouter.post(
  "",
  ensureDataIsValidMiddleware(createUserSchema),
  createUserController
);
usersRouter.delete("/:id", ensureExistsUserMiddleware, removeUserController);
