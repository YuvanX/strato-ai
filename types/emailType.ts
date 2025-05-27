import { z } from "zod"
export const emailType = z.string().email()