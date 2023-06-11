import { Request, Response, NextFunction } from "express";
import { fakeData } from "../database/fakeData";
import { AppError } from "../../errors";
export function ensureExistsUserMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  const data = fakeData;
  const userId: number = parseInt(req.params.id);
  const user = data.find((user: any) => user.id === userId);
  if (!user) {
    throw new AppError(`user whit id - ${userId} not found`);
  }
  next();
}
