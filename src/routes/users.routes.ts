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
import { ensureIsAdminMiddleware } from "../middlewares/ensureIsAdmin.middleware";
import { ensureTokenvalidMiddleware } from "../middlewares/ensureTokenIsvalid.middleware";
export const usersRouter: Router = Router();
//pega todos os users
usersRouter.get("", getUsersController);
//cria um usuário, valida os campos enviados com o schema
usersRouter.post(
  "",
  ensureDataIsValidMiddleware(createUserSchema),
  createUserController
);
//remove um usuário, somente um admin pode remover um user
usersRouter.delete(
  "/:id",
  ensureTokenvalidMiddleware,
  ensureIsAdminMiddleware,
  ensureExistsUserMiddleware,
  removeUserController
);
//atualiza um user, somente é possível atualizar a si mesmo
//um admin pode atualizar os demais
usersRouter.patch(
  "/:id",
  ensureTokenvalidMiddleware,
  ensureExistsUserMiddleware,
  ensureDataIsValidMiddleware(updateUserSchema),
  updateUserController
);
//conta o numero de consultas que um usuário teve pelo seu id
usersRouter.get(
  "/access/:id",
  ensureExistsUserMiddleware,
  getUserAccessController
);
