import React, { useEffect, useState, useMemo } from 'react';
import { View, Text, StyleSheet, Platform, ActivityIndicator, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Constants from 'expo-constants';
import { Stack, router } from 'expo-router';
import { useThemeSafe } from '@/providers/ThemeProvider';
import { useSubscription } from '@/providers/SubscriptionProvider';
import { presentPaywall, PAYWALL_RESULT } from '@/lib/revenuecat';
import { useLanguage } from '@/providers/LanguageProvider';

const IS_NATIVE = Platform.OS === 'ios' || Platform.OS === 'android';
// Expo Go = storeClient; real builds = standalone
const IS_EXPO_GO = Constants.executionEnvironment === 'storeClient';

/**
 * Paywall screen: Presents RevenueCat Paywall in dev/production builds.
 * In Expo Go or web: Shows fallback message (RevenueCat paywall requires a development build).
 */
export default function PaywallScreen() {
  const { colors } = useThemeSafe();
  const { isPaywallEnabled } = useSubscription();
  const { t } = useLanguage();
  const [status, setStatus] = useState<
    'loading' | 'fallback' | 'error' | 'cancelled' | 'purchased' | 'restored'
  >('loading');

  // Memoize to prevent update loop - new object ref each render was causing Stack to re-update
  const headerOptions = useMemo(
    () => ({
      title: t('paywall.title'),
      headerStyle: { backgroundColor: colors.background },
      headerTintColor: colors.text,
    }),
    [colors.background, colors.text, t('paywall.title')]
  );

  useEffect(() => {
    if (!isPaywallEnabled) {
      router.replace('/(tabs)/index' as any);
      return;
    }

    // Web or Expo Go: RevenueCat paywall doesn't work (needs browser DOM or native modules)
    if (!IS_NATIVE || IS_EXPO_GO) {
      setStatus('fallback');
      return;
    }

    let mounted = true;

    const showPaywall = async () => {
      try {
        const result = await presentPaywall();
        if (!mounted) return;

        if (result === PAYWALL_RESULT.PURCHASED) {
          setStatus('purchased');
          router.back();
          return;
        }
        if (result === PAYWALL_RESULT.RESTORED) {
          setStatus('restored');
          router.back();
          return;
        }
        if (result === PAYWALL_RESULT.CANCELLED) {
          setStatus('cancelled');
          router.back();
          return;
        }

        // ERROR / NOT_PRESENTED should show a message instead of silently closing.
        setStatus(result === PAYWALL_RESULT.NOT_PRESENTED ? 'fallback' : 'error');
      } catch (error) {
        console.error('[Paywall] Error:', error);
        if (mounted) {
          setStatus('error');
        }
      }
    };

    showPaywall();
    return () => {
      mounted = false;
    };
  }, [isPaywallEnabled]);

  if (!isPaywallEnabled) {
    return null;
  }

  if (status === 'fallback' || status === 'error') {
    return (
      <View style={[styles.container, { backgroundColor: colors.background }]}>
        <Stack.Screen options={headerOptions} />
        <SafeAreaView style={styles.content} edges={['bottom']}>
          <Text style={[styles.webMessage, { color: colors.text }]}>
            {status === 'error'
              ? (t('paywall.errorMessage') || 'Subscriptions are temporarily unavailable. Please try again later.')
              : IS_EXPO_GO
              ? (t('paywall.expoGoMessage') || 'Subscriptions require a development build. Build with EAS to test purchases.')
              : (t('paywall.webMessage') || 'Subscriptions are available in the iOS and Android app. Download the app to upgrade to Pro.')}
          </Text>
          <Text style={[styles.webSubtext, { color: colors.textSecondary }]}>
            {t('paywall.webSubtext') || 'Your subscription will sync across all your devices.'}
          </Text>
          <TouchableOpacity
            style={[styles.goBackButton, { backgroundColor: colors.primary }]}
            onPress={() => router.back()}
            accessibilityRole="button"
            accessibilityLabel={t('paywall.goBack') || 'Go back'}
          >
            <Text style={[styles.goBackButtonText, { color: colors.background }]}>
              {t('paywall.goBack') || 'Go Back'}
            </Text>
          </TouchableOpacity>
        </SafeAreaView>
      </View>
    );
  }

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Stack.Screen options={headerOptions} />
      <SafeAreaView style={styles.content} edges={['bottom']}>
        <ActivityIndicator size="large" color={colors.primary} />
        <Text style={[styles.loadingText, { color: colors.textSecondary }]}>
          {t('paywall.loading')}
        </Text>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  loadingText: {
    marginTop: 16,
    fontSize: 15,
  },
  webMessage: {
    fontSize: 17,
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 12,
  },
  webSubtext: {
    fontSize: 14,
    textAlign: 'center',
    lineHeight: 20,
  },
  goBackButton: {
    marginTop: 28,
    paddingHorizontal: 32,
    paddingVertical: 14,
    borderRadius: 12,
  },
  goBackButtonText: {
    fontSize: 16,
    fontWeight: '600' as const,
  },
});
