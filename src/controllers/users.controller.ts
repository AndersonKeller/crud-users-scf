import { Request, Response } from "express";
import { getUsersService } from "../service/user/getUsers.service";
import { iCreateUser, iUser } from "../interfaces/user.interfaces";
import { createUserService } from "../service/user/createUser.service";
export function getUsersController(req: Request, res: Response): Response {
  const users: iUser[] = getUsersService();
  return res.status(200).json(users);
}
export function createUserController(req: Request, res: Response): Response {
  const userData: iCreateUser = req.body;
  const user: iUser = createUserService(userData);
  return res.status(201).json(user);
}
