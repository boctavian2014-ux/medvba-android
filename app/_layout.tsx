import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Stack, useRouter, useSegments } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import React, { useEffect } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { View, ActivityIndicator, StyleSheet, Text } from "react-native";
import Constants from "expo-constants";

import { QuizProgressProvider } from "@/providers/QuizProgressProvider";
import { LanguageProvider } from "@/providers/LanguageProvider";
import { AuthProvider, useAuth } from "@/providers/AuthProvider";
import { SubscriptionProvider } from "@/providers/SubscriptionProvider";
import { ThemeProvider, useTheme } from "@/providers/ThemeProvider";
import { monitoring } from "@/lib/monitoring";
import { trpc, trpcClient } from "@/lib/trpc";
import { ErrorBoundary } from "@/components/ErrorBoundary";

let splashScreenAvailable = true;
try {
  SplashScreen.preventAutoHideAsync();
} catch {
  splashScreenAvailable = false;
}
monitoring.init();

if (!__DEV__) {
  // Silence noisy production logs while keeping warnings/errors.
  console.log = () => {};

  const sanitizeValue = (value: unknown): unknown => {
    if (typeof value === "string") {
      return value
        .replace(
          /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/gi,
          "[redacted-email]"
        )
        .replace(/(eyJ[a-zA-Z0-9_-]+?\.[a-zA-Z0-9_-]+?\.[a-zA-Z0-9_-]+?)/g, "[redacted-jwt]")
        .replace(/(sb_publishable_[a-zA-Z0-9._-]+)/g, "[redacted-supabase-key]");
    }
    if (value && typeof value === "object") {
      try {
        const serialized = JSON.stringify(value);
        if (serialized) {
          return sanitizeValue(serialized);
        }
      } catch {
        return "[redacted-object]";
      }
    }
    return value;
  };

  const originalConsoleError = console.error;
  const originalConsoleWarn = console.warn;
  const originalConsoleInfo = console.info;
  const originalConsoleDebug = console.debug;
  console.error = (...args: unknown[]) => {
    originalConsoleError(...args.map(sanitizeValue));
  };
  console.warn = (...args: unknown[]) => {
    originalConsoleWarn(...args.map(sanitizeValue));
  };
  console.info = (...args: unknown[]) => {
    originalConsoleInfo(...args.map(sanitizeValue));
  };
  console.debug = (...args: unknown[]) => {
    originalConsoleDebug(...args.map(sanitizeValue));
  };
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60000,
      gcTime: 300000,
      retry: 1,
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
    },
    mutations: {
      retry: 1,
    },
  },
});

function useProtectedRoute(splashAvailable: boolean) {
  const { isAuthenticated, isLoading, hasCompletedOnboarding } = useAuth();
  const segments = useSegments();
  const router = useRouter();
  const [splashHidden, setSplashHidden] = React.useState(false);

  useEffect(() => {
    if (isLoading) return;

    const inAuthGroup = segments[0] === '(auth)';
    const isOnboarding = inAuthGroup && segments[1] === 'onboarding';

    if (!hasCompletedOnboarding && !isOnboarding) {
      console.log('[Auth] Redirecting to onboarding');
      router.replace('/(auth)/onboarding');
    } else if (!isAuthenticated && !inAuthGroup) {
      console.log('[Auth] Redirecting to login');
      router.replace('/(auth)/login');
    } else if (isAuthenticated && inAuthGroup) {
      console.log('[Auth] Redirecting to tabs');
      router.replace('/(tabs)');
    }

    if (!splashHidden && splashAvailable) {
      setSplashHidden(true);
      setTimeout(async () => {
        try {
          await SplashScreen.hideAsync();
        } catch {
          // Ignore - splash screen not available or already hidden
        }
      }, 100);
    }
  }, [isAuthenticated, isLoading, hasCompletedOnboarding, segments, router, splashHidden, splashAvailable]);

  return isLoading;
}

function RootLayoutNav({ splashAvailable }: { splashAvailable: boolean }) {
  const isLoading = useProtectedRoute(splashAvailable);
  const { colors, colorScheme } = useTheme();
  const extraConfig = Constants.expoConfig?.extra ?? (Constants as any)?.manifest?.extra ?? {};
  const supabaseUrl =
    process.env.EXPO_PUBLIC_SUPABASE_URL ||
    extraConfig.EXPO_PUBLIC_SUPABASE_URL ||
    extraConfig.supabaseUrl;
  const supabaseAnonKey =
    process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY ||
    extraConfig.EXPO_PUBLIC_SUPABASE_ANON_KEY ||
    extraConfig.supabaseAnonKey;
  const hasSupabaseConfig = Boolean(supabaseUrl && supabaseAnonKey);
  const envSource = Constants.executionEnvironment ? ` (${Constants.executionEnvironment})` : "";

  if (isLoading) {
    return (
      <View style={[styles.loadingContainer, { backgroundColor: colors.background }]}>
        <ActivityIndicator size="large" color={colors.primary} />
      </View>
    );
  }

  return (
    <>
      <StatusBar style={colorScheme === 'dark' ? 'light' : 'dark'} />
      {!hasSupabaseConfig && (
        <View style={[styles.envBanner, { backgroundColor: colors.error }]}>
          <Text style={styles.envBannerText}>
            Missing Supabase config{envSource}. Set EXPO_PUBLIC_SUPABASE_URL and EXPO_PUBLIC_SUPABASE_ANON_KEY.
          </Text>
        </View>
      )}
      <Stack
        key={colorScheme}
        screenOptions={{ 
          headerShown: false,
          contentStyle: { backgroundColor: colors.background }
        }}
      >
      <Stack.Screen name="(auth)" options={{ headerShown: false }} />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen 
        name="quiz-session" 
        options={{ 
          headerShown: false,
          presentation: 'fullScreenModal',
          animation: 'slide_from_bottom'
        }} 
      />
      <Stack.Screen 
        name="settings" 
        options={{ 
          presentation: 'modal',
          animation: 'slide_from_bottom'
        }} 
      />
      <Stack.Screen name="legal" options={{ headerShown: false }} />
      <Stack.Screen 
        name="delete-account" 
        options={{ 
          presentation: 'modal',
          animation: 'slide_from_bottom'
        }} 
      />
      <Stack.Screen 
        name="paywall" 
        options={{ 
          presentation: 'modal',
          animation: 'slide_from_bottom'
        }} 
      />
    </Stack>
    </>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  envBanner: {
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  envBannerText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
  },
});

export default function RootLayout() {
  return (
    <ErrorBoundary>
      <trpc.Provider client={trpcClient} queryClient={queryClient}>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider>
            <AuthProvider>
              <LanguageProvider>
                <SubscriptionProvider>
                  <QuizProgressProvider>
                    <GestureHandlerRootView style={{ flex: 1 }}>
                      <RootLayoutNav splashAvailable={splashScreenAvailable} />
                    </GestureHandlerRootView>
                  </QuizProgressProvider>
                </SubscriptionProvider>
              </LanguageProvider>
            </AuthProvider>
          </ThemeProvider>
        </QueryClientProvider>
      </trpc.Provider>
    </ErrorBoundary>
  );
}
