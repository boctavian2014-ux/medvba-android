import { z } from "zod";
import { createTRPCRouter, protectedProcedure } from "./create-context";
import { generateText, SYSTEM_PROMPT } from "../../lib/ai-provider";

const messageSchema = z.object({
  role: z.enum(["user", "assistant"]),
  content: z.string(),
});

export const tutorRouter = createTRPCRouter({
  chat: protectedProcedure
    .input(z.object({ messages: z.array(messageSchema) }))
    .mutation(async ({ input }) => {
      const fullMessages = [
        { role: "system" as const, content: SYSTEM_PROMPT },
        { role: "assistant" as const, content: "I understand. I am ready to help medical students with accurate, detailed explanations." },
        ...input.messages.map(m => ({ role: m.role as 'user' | 'assistant', content: m.content })),
      ];

      const response = await generateText({ messages: fullMessages });
      return { response };
    }),
});
