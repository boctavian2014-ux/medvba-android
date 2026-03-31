import React, { useMemo } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { PaperProvider } from 'react-native-paper';
import { ThemeProvider, useTheme } from '@/providers/ThemeProvider';
import { AuthProvider } from '@/providers/AuthProvider';
import { LanguageProvider } from '@/providers/LanguageProvider';
import { SubscriptionProvider } from '@/providers/SubscriptionProvider';
import { QuizProgressProvider } from '@/providers/QuizProgressProvider';
import { getPaperTheme } from '@/theme/paperTheme';

function PaperShell({ children }: { children: React.ReactNode }) {
  const { colors, colorScheme } = useTheme();
  const paperTheme = useMemo(
    () => getPaperTheme(colors, colorScheme === 'dark'),
    [colors, colorScheme],
  );
  return <PaperProvider theme={paperTheme}>{children}</PaperProvider>;
}

/**
 * Mirrors app/_layout.tsx provider order for integration-style screen tests.
 */
export function AppTestProviders({ children }: { children: React.ReactNode }) {
  const queryClient = useMemo(
    () =>
      new QueryClient({
        defaultOptions: { queries: { retry: false } },
      }),
    [],
  );

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <PaperShell>
          <AuthProvider>
            <LanguageProvider>
              <SubscriptionProvider>
                <QuizProgressProvider>{children}</QuizProgressProvider>
              </SubscriptionProvider>
            </LanguageProvider>
          </AuthProvider>
        </PaperShell>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
