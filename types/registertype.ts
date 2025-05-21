import { z } from "zod"
export const registerType = z.object({
    email: z.string().email(),
    password: z.string().min(6, "Password should be 6-9 character of length").max(9, "Password should be 6-9 character of length"),
    name: z.string()
})

export type RegisterType = z.infer<typeof registerType>