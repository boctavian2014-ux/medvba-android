const isDevelopment = __DEV__;

// Lazy load Sentry only when needed to avoid circular dependencies
let sentry: any = null;
const getSentry = () => {
  if (!sentry) {
    try {
      sentry = require('@sentry/react-native').Sentry;
    } catch {
      // Sentry not configured
    }
  }
  return sentry;
};

export const log = {
  info: (message: string, ...args: unknown[]) => {
    if (isDevelopment) {
      console.log(`[INFO] ${message}`, ...args);
    }
  },
  
  warn: (message: string, ...args: unknown[]) => {
    if (isDevelopment) {
      console.warn(`[WARN] ${message}`, ...args);
    }
  },
  
  error: (message: string, ...args: unknown[]) => {
    console.error(`[ERROR] ${message}`, ...args);
    // In production, also send to Sentry if available
    const sentryInstance = getSentry();
    if (sentryInstance && !isDevelopment) {
      sentryInstance.captureException(new Error(message), {
        extra: { args },
      });
    }
  },
  
  debug: (message: string, ...args: unknown[]) => {
    if (isDevelopment) {
      console.log(`[DEBUG] ${message}`, ...args);
    }
  },
};
