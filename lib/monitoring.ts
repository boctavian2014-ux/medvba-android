import * as Sentry from '@sentry/react-native';
import Constants from 'expo-constants';

const isProduction = Constants.expoConfig?.extra?.environment === 'production';

export function initializeMonitoring() {
  if (!isProduction) {
    console.log('[Monitoring] Sentry disabled in development');
    return;
  }

  Sentry.init({
    dsn: process.env.EXPO_PUBLIC_SENTRY_DSN,
    debug: false,
    tracesSampleRate: 1.0,
    environment: isProduction ? 'production' : 'development',
    beforeSend(event) {
      if (!isProduction) {
        console.log('[Monitoring] Event captured:', event);
        return null;
      }
      return event;
    },
  });

  console.log('[Monitoring] Sentry initialized');
}

export function logError(error: Error, context?: Record<string, any>) {
  console.error('[Monitoring] Error:', error.message, context);
  
  if (isProduction) {
    Sentry.captureException(error, {
      extra: context,
    });
  }
}

export function logEvent(eventName: string, properties?: Record<string, any>) {
  console.log('[Monitoring] Event:', eventName, properties);
  
  if (isProduction) {
    Sentry.addBreadcrumb({
      message: eventName,
      data: properties,
      level: 'info',
    });
  }
}

export function setUserContext(userId: string, email?: string, name?: string) {
  console.log('[Monitoring] Setting user context:', userId);
  
  if (isProduction) {
    Sentry.setUser({
      id: userId,
      email,
      username: name,
    });
  }
}

export function clearUserContext() {
  console.log('[Monitoring] Clearing user context');
  
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
