import { Request, Response } from "express";
import { getUsersService } from "../service/user/getUsers.service";
import { iCreateUser, iUpdateUser, iUser } from "../interfaces/user.interfaces";
import { createUserService } from "../service/user/createUser.service";
import { removeUserService } from "../service/user/removeUser.service";
import { updateUserService } from "../service/user/updateUser.service";
export function getUsersController(req: Request, res: Response): Response {
  const users: iUser[] = getUsersService();
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
  const userData: iUpdateUser = req.body;
  const user: iUser = updateUserService(userId, userData);
  return res.status(200).json(user);
}
