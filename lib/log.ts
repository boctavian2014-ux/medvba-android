const DEBUG = __DEV__ || process.env.EXPO_PUBLIC_DEBUG_LOGS === 'true';

export function log(...args: any[]) {
  if (DEBUG) {
    console.log(...args);
  }
}

export function logError(...args: any[]) {
  if (DEBUG) {
    console.error(...args);
  }
}
