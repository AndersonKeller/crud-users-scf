import { Request, Response } from "express";
import { getUsersService } from "../service/user/getUsers.service";
import {
  iCreateUser,
  iReturnUser,
  iUpdateUser,
  iUser,
} from "../interfaces/user.interfaces";
import { createUserService } from "../service/user/createUser.service";
import { removeUserService } from "../service/user/removeUser.service";
import { updateUserService } from "../service/user/updateUser.service";
import { getUserAccessService } from "../service/user/getUserAccess.service";
export function getUsersController(req: Request, res: Response): Response {
  const users: iReturnUser[] = getUsersService();
  return res.status(200).json(users);
}
export function createUserController(req: Request, res: Response): Response {
  const userData: iCreateUser = req.body;
  const user: iUser = createUserService(userData);
  return res.status(201).json(user);
}
export function removeUserController(req: Request, res: Response): Response {
  const userId: number = parseInt(req.params.id);
  const response: string = removeUserService(userId);
  return res.status(200).json({ message: response });
}
export function updateUserController(req: Request, res: Response): Response {
  const userId: number = parseInt(req.params.id);
  const userAuthId: number = req.user.id;
  const userData: iUpdateUser = req.body;
  const userAuthAdmin: boolean = req.user.admin;
  const user: iReturnUser = updateUserService(
    userId,
    userData,
    userAuthId,
    userAuthAdmin
  );
  return res.status(200).json(user);
}
export function getUserAccessController(req: Request, res: Response): Response {
  const userId: number = parseInt(req.params.id);
  const acess: string = getUserAccessService(userId);
  return res.status(200).json({ message: acess });
}
