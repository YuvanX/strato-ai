import { z } from "zod"

export const credentialsType = z.object({
    email: z.string().email(),
    password: z.string().min(6),
    name: z.string().min(5)
})

export type CredentialsType = z.infer<typeof credentialsType>

