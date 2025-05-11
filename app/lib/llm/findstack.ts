import { anthropic } from "./anthropic"

export const findStack = async (prompt: string): Promise<string> => {
    const stack = await anthropic.messages.create({
        model: "claude-3-7-sonnet-latest",
        messages: [
            { role: "user", content: `${prompt} \n\n Just tell me in one word which stack it belongs "React" or "Next.js" based on the prompt provided`}
        ],
        max_tokens: 200
    })

    return stack.content[0]?.type
}