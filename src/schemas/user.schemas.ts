import { z } from "zod";

export const createUserSchema = z.object({
  name: z.string(),
  job: z.string(),
  email: z.string().email(),
  password: z.string().min(4, "password must be a 4 characters"),
  admin: z.boolean().optional().default(false),
});
export const userSchema = createUserSchema.extend({
  id: z.number(),
});
export const returnUserSchema = userSchema.omit({ password: true });
export const returnUsersSchema = returnUserSchema.array();
export const updateUserSchema = createUserSchema.partial();
