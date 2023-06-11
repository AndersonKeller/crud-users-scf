import { Request, Response, NextFunction } from "express";
import { fakeData } from "../database/fakeData";
import { AppError } from "../../errors";
import { iUser } from "../interfaces/user.interfaces";
export function ensureExistsUserMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  const data: iUser[] = fakeData;
  const userId: number = parseInt(req.params.id);
  const user: iUser | undefined = data.find(
    (user: iUser) => user.id === userId
  );
  if (!user) {
    throw new AppError(`user whit id - ${userId} not found`);
  }
  next();
}
