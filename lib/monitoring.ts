import * as Sentry from '@sentry/react-native';
import { log } from '@/lib/log';

// Use React Native's built-in production flag — reliable in all build types
const isProduction = !__DEV__;

export function initializeMonitoring() {
  if (!isProduction) {
    log.debug('[Monitoring] Sentry disabled in development');
    return;
  }

  const dsn = process.env.EXPO_PUBLIC_SENTRY_DSN;
  if (!dsn) {
    log.warn('[Monitoring] EXPO_PUBLIC_SENTRY_DSN not set — Sentry disabled');
    return;
  }

  Sentry.init({
    dsn,
    debug: false,
    tracesSampleRate: 0.2,
    environment: 'production',
  });

  log.info('[Monitoring] Sentry initialized');
}

export function logError(error: Error, context?: Record<string, any>) {
  log.error('[Monitoring] Error: ' + error.message, context);

  if (isProduction) {
    Sentry.captureException(error, {
      extra: context,
    });
  }
}

export function logEvent(eventName: string, properties?: Record<string, any>) {
  log.debug('[Monitoring] Event: ' + eventName, properties);

  if (isProduction) {
    Sentry.addBreadcrumb({
      message: eventName,
      data: properties,
      level: 'info',
    });
  }
}

export function setUserContext(userId: string, email?: string, name?: string) {
  log.debug('[Monitoring] Setting user context');

  if (isProduction) {
    Sentry.setUser({
      id: userId,
      email,
      username: name,
    });
  }
}

export function clearUserContext() {
  log.debug('[Monitoring] Clearing user context');

  if (isProduction) {
    Sentry.setUser(null);
  }
}

export const monitoring = {
  init: initializeMonitoring,
  logError,
  logEvent,
  setUser: setUserContext,
  clearUser: clearUserContext,
};
