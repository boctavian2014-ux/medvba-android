import React, { useEffect, useState, useMemo } from 'react';
import { View, Text, StyleSheet, Platform, ActivityIndicator } from 'react-native';
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
  const [status, setStatus] = useState<'loading' | 'presented' | 'fallback'>('loading');

  useEffect(() => {
    if (!isPaywallEnabled) {
      router.replace('/(tabs)/index');
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
        if (mounted) {
          setStatus('presented');
          router.back();
        }
      } catch (error) {
        console.error('[Paywall] Error:', error);
        if (mounted) {
          setStatus('fallback');
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

  // Memoize to prevent update loop - new object ref each render was causing Stack to re-update
  const headerOptions = useMemo(
    () => ({
      title: t('paywall.title'),
      headerStyle: { backgroundColor: colors.background },
      headerTintColor: colors.text,
    }),
    [colors.background, colors.text, t('paywall.title')]
  );

  if (status === 'fallback') {
    return (
      <View style={[styles.container, { backgroundColor: colors.background }]}>
        <Stack.Screen options={headerOptions} />
        <SafeAreaView style={styles.content} edges={['bottom']}>
          <Text style={[styles.webMessage, { color: colors.text }]}>
            {IS_EXPO_GO
              ? (t('paywall.expoGoMessage') || 'Subscriptions require a development build. Build with EAS to test purchases.')
              : (t('paywall.webMessage') || 'Subscriptions are available in the iOS and Android app. Download the app to upgrade to Pro.')}
          </Text>
          <Text style={[styles.webSubtext, { color: colors.textSecondary }]}>
            {t('paywall.webSubtext') || 'Your subscription will sync across all your devices.'}
          </Text>
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
});
