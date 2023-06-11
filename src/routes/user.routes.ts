import { Router } from "express";
import { getUserController } from "../controllers/user.controller";
import { ensureExistsUserMiddleware } from "../middlewares/ensureExistsUser.middleware";
export const userRouter: Router = Router();
//pega um user pelo id, valida se o id existe
userRouter.get("/:id", ensureExistsUserMiddleware, getUserController);
