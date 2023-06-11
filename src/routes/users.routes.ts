import { ensureDataIsValidMiddleware } from "./../middlewares/ensureDataIsValid.middleware";
import { Router } from "express";
import {
  createUserController,
  getUserAccessController,
  getUsersController,
  removeUserController,
  updateUserController,
} from "../controllers/users.controller";
import { createUserSchema, updateUserSchema } from "../schemas/user.schemas";
import { ensureExistsUserMiddleware } from "../middlewares/ensureExistsUser.middleware";
export const usersRouter: Router = Router();

usersRouter.get("", getUsersController);
usersRouter.post(
  "",
  ensureDataIsValidMiddleware(createUserSchema),
  createUserController
);
usersRouter.delete("/:id", ensureExistsUserMiddleware, removeUserController);
usersRouter.patch(
  "/:id",
  ensureExistsUserMiddleware,
  ensureDataIsValidMiddleware(updateUserSchema),
  updateUserController
);
usersRouter.get(
  "/access/:id",
  ensureExistsUserMiddleware,
  getUserAccessController
);
