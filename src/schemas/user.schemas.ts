import { z } from "zod";

export const createUserSchema = z.object({
  name: z.string(),
  job: z.string(),
});
export const returnUserSchema = createUserSchema.extend({
  id: z.number(),
});
