import { Router } from "express";
import { getUserController } from "../controllers/user.controller";
import { ensureExistsUserMiddleware } from "../middlewares/ensureExistsUser.middleware";
export const userRouter: Router = Router();

userRouter.get("/:id", ensureExistsUserMiddleware, getUserController);
