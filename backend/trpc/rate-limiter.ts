import { TRPCError } from "@trpc/server";

interface RateLimitEntry {
  count: number;
  resetAt: number;
}

const rateLimitStore = new Map<string, RateLimitEntry>();

const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 minute
const MAX_REQUESTS_PER_WINDOW = 20; // 20 requests per minute

function cleanExpiredEntries(): void {
  const now = Date.now();
  for (const [key, entry] of rateLimitStore.entries()) {
    if (entry.resetAt <= now) {
      rateLimitStore.delete(key);
    }
  }
}

(setInterval(cleanExpiredEntries, RATE_LIMIT_WINDOW_MS) as unknown as NodeJS.Timeout).unref();

export interface RateLimitConfig {
  windowMs?: number;
  maxRequests?: number;
}

export function createRateLimiter(config: RateLimitConfig = {}) {
  const windowMs = config.windowMs ?? RATE_LIMIT_WINDOW_MS;
  const maxRequests = config.maxRequests ?? MAX_REQUESTS_PER_WINDOW;

  return function rateLimit(identifier: string): void {
    const now = Date.now();
    const key = identifier;

    let entry = rateLimitStore.get(key);

    if (!entry || entry.resetAt <= now) {
      entry = {
        count: 1,
        resetAt: now + windowMs,
      };
      rateLimitStore.set(key, entry);
      return;
    }

    entry.count++;

    if (entry.count > maxRequests) {
      const retryAfterMs = entry.resetAt - now;
      const retryAfterSec = Math.ceil(retryAfterMs / 1000);

      throw new TRPCError({
        code: "TOO_MANY_REQUESTS",
        message: `Rate limit exceeded. Please wait ${retryAfterSec} seconds before making more requests.`,
      });
    }
  };
}

export function getRateLimitInfo(identifier: string): { remaining: number; resetIn: number } | null {
  const entry = rateLimitStore.get(identifier);
  if (!entry) {
    return { remaining: MAX_REQUESTS_PER_WINDOW, resetIn: 0 };
  }

  const now = Date.now();
  if (entry.resetAt <= now) {
    return { remaining: MAX_REQUESTS_PER_WINDOW, resetIn: 0 };
  }

  return {
    remaining: Math.max(0, MAX_REQUESTS_PER_WINDOW - entry.count),
    resetIn: Math.ceil((entry.resetAt - now) / 1000),
  };
}

export const tutorRateLimiter = createRateLimiter({
  windowMs: 60 * 1000,
  maxRequests: 20,
});
