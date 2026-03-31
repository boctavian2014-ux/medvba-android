import { z } from "zod";
import { TRPCError } from "@trpc/server";
import { createTRPCRouter, protectedProcedure } from "./create-context";
import { generateText, SYSTEM_PROMPT } from "../../lib/ai-provider";

const messageSchema = z.object({
  role: z.enum(["user", "assistant"]),
  content: z.string(),
});

function isAiMissingConfigError(message: string): boolean {
  const m = message.toLowerCase();
  return (
    m.includes("api key not configured") ||
    m.includes("openai api key") ||
    m.includes("base url not configured") ||
    m.includes("rork api base url")
  );
}

export const tutorRouter = createTRPCRouter({
  chat: protectedProcedure
    .input(z.object({ messages: z.array(messageSchema) }))
    .mutation(async ({ input }) => {
      const fullMessages = [
        { role: "system" as const, content: SYSTEM_PROMPT },
        {
          role: "assistant" as const,
          content:
            "I understand. I am ready to help medical students with accurate, detailed explanations.",
        },
        ...input.messages.map((m) => ({
          role: m.role as "user" | "assistant",
          content: m.content,
        })),
      ];

      try {
        const response = await generateText({ messages: fullMessages });
        return { response };
      } catch (err) {
        const message = err instanceof Error ? err.message : String(err);

        if (isAiMissingConfigError(message)) {
          throw new TRPCError({
            code: "PRECONDITION_FAILED",
            message:
              "AI tutor is not configured on the server. On Railway, set AI_API_KEY or OPENAI_API_KEY (see docs/RAILWAY_ENV_VARIABLES.md).",
          });
        }

        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message,
        });
      }
    }),
});
