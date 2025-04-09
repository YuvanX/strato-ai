import { z } from "zod"
export const promptType = z.object({
    prompt: z.string().min(10, "Prompt is too short").max(500, "Prompt is too long")
})

export type Prompt = z.infer<typeof promptType>