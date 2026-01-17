import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { Stack, router } from 'expo-router';
import { Crown, Check } from 'lucide-react-native';
import { useTheme } from '@/providers/ThemeProvider';
import { useSubscription } from '@/providers/SubscriptionProvider';
import { PREMIUM_FEATURE_KEYS } from '@/constants/subscription';
import GlassCard from '@/components/GlassCard';
import PremiumBadge from '@/components/PremiumBadge';
import { useLanguage } from '@/providers/LanguageProvider';

type PlanType = 'monthly' | 'yearly';

export default function PaywallScreen() {
  const { colors, colorScheme } = useTheme();
  const { offerings, purchasePackage, restorePurchases, isLoading: subLoading } = useSubscription();
  const { t } = useLanguage();
  const [selectedPlan, setSelectedPlan] = useState<PlanType>('yearly');
  const [purchasing, setPurchasing] = useState(false);

  useEffect(() => {
    if (offerings?.availablePackages.length) {
      console.log('[Paywall] Available packages:', offerings.availablePackages.map(p => p.identifier));
    }
  }, [offerings]);

  const handleUpgrade = async () => {
    if (!offerings) {
      Alert.alert(t('paywall.errorTitle'), t('paywall.errorLoadingOptions'));
      return;
    }

    setPurchasing(true);
    try {
      const packageId = selectedPlan === 'yearly' ? '$rc_annual' : '$rc_monthly';
      console.log('[Paywall] Purchasing package:', packageId);
      
      const success = await purchasePackage(packageId);
      
      if (success) {
        Alert.alert(
          t('paywall.successTitle'),
          t('paywall.successMessage'),
          [{ text: t('paywall.ok'), onPress: () => router.back() }]
        );
      }
    } catch (error) {
      console.error('[Paywall] Purchase error:', error);
      Alert.alert(t('paywall.errorTitle'), t('paywall.errorPayment'));
    } finally {
      setPurchasing(false);
    }
  };

  const handleRestore = async () => {
    setPurchasing(true);
    try {
      console.log('[Paywall] Restoring purchases...');
      const success = await restorePurchases();
      
      if (success) {
        Alert.alert(
          t('paywall.restoreSuccessTitle'),
          t('paywall.restoreSuccessMessage'),
          [{ text: t('paywall.ok'), onPress: () => router.back() }]
        );
      } else {
        Alert.alert(t('paywall.infoTitle'), t('paywall.noPurchasesFound'));
      }
    } catch (error) {
      console.error('[Paywall] Restore error:', error);
      Alert.alert(t('paywall.errorTitle'), t('paywall.errorRestore'));
    } finally {
      setPurchasing(false);
    }
  };

  const handleContinueFree = () => {
    console.log('[Paywall] User chose free plan');
    router.back();
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Stack.Screen
        options={{
          headerShown: true,
          title: t('paywall.title'),
          headerStyle: { backgroundColor: colors.background },
          headerTintColor: colors.text,
          headerShadowVisible: false,
        }}
      />

      <LinearGradient
        colors={
          colorScheme === 'dark'
            ? ['#0A1628', '#0F2139', '#1A2F4D']
            : ['#F0F9FF', '#E0F2FE', '#BAE6FD']
        }
        style={styles.gradientBg}
      />

      <SafeAreaView style={styles.safeArea} edges={['bottom']}>
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.header}>
            <View style={styles.badgeContainer}>
              <PremiumBadge size="large" />
            </View>
            <Text style={[styles.title, { color: colors.text }]}>
              {t('paywall.mainTitle')}
            </Text>
            <Text style={[styles.subtitle, { color: colors.textSecondary }]}>
              {t('paywall.subtitle')}
            </Text>
          </View>

          <View style={styles.featuresContainer}>
            {PREMIUM_FEATURE_KEYS.map((featureKey, index) => (
              <View key={index} style={styles.featureRow}>
                <View style={[styles.checkIcon, { backgroundColor: colors.success + '20' }]}>
                  <Check size={16} color={colors.success} strokeWidth={3} />
                </View>
                <Text style={[styles.featureText, { color: colors.text }]}>
                  {t(featureKey)}
                </Text>
              </View>
            ))}
          </View>

          {subLoading || !offerings ? (
            <View style={styles.loadingContainer}>
              <ActivityIndicator size="large" color={colors.primary} />
              <Text style={[styles.loadingText, { color: colors.textSecondary }]}>
                {t('paywall.loading')}
              </Text>
            </View>
          ) : (
            <View style={styles.plansContainer}>
              <Text style={[styles.plansTitle, { color: colors.text }]}>
                {t('paywall.choosePlan')}
              </Text>

            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => setSelectedPlan('yearly')}
            >
              <GlassCard
                style={[
                  styles.planCard,
                  selectedPlan === 'yearly' && styles.selectedPlan,
                  selectedPlan === 'yearly' && { borderColor: colors.primary, borderWidth: 2 },
                ]}
              >
                <View style={styles.planHeader}>
                  <View style={styles.planTitleRow}>
                    <Text style={[styles.planTitle, { color: colors.text }]}>{t('paywall.yearly')}</Text>
                    {selectedPlan === 'yearly' && (
                      <View style={[styles.selectedBadge, { backgroundColor: colors.primary }]}>
                        <Text style={styles.selectedBadgeText}>{t('paywall.recommended')}</Text>
                      </View>
                    )}
                  </View>
                  <View style={[styles.savingsBadge, { backgroundColor: colors.success + '20' }]}>
                    <Text style={[styles.savingsText, { color: colors.success }]}>
                      {t('paywall.save37')}
                    </Text>
                  </View>
                </View>

                <View style={styles.priceRow}>
                  <Text style={[styles.price, { color: colors.text }]}>
                    {offerings?.availablePackages.find(p => p.identifier === '$rc_annual')?.product.priceString || '149.99 RON'}
                  </Text>
                  <Text style={[styles.period, { color: colors.textSecondary }]}>
                    {t('paywall.perYear')}
                  </Text>
                </View>

                <Text style={[styles.planDescription, { color: colors.textMuted }]}>
                  {t('paywall.billedAnnually')}
                </Text>
              </GlassCard>
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => setSelectedPlan('monthly')}
            >
              <GlassCard
                style={[
                  styles.planCard,
                  selectedPlan === 'monthly' && styles.selectedPlan,
                  selectedPlan === 'monthly' && { borderColor: colors.primary, borderWidth: 2 },
                ]}
              >
                <View style={styles.planHeader}>
                  <Text style={[styles.planTitle, { color: colors.text }]}>{t('paywall.monthly')}</Text>
                </View>

                <View style={styles.priceRow}>
                  <Text style={[styles.price, { color: colors.text }]}>
                    {offerings?.availablePackages.find(p => p.identifier === '$rc_monthly')?.product.priceString || '19.99 RON'}
                  </Text>
                  <Text style={[styles.period, { color: colors.textSecondary }]}>
                    {t('paywall.perMonth')}
                  </Text>
                </View>

                <Text style={[styles.planDescription, { color: colors.textMuted }]}>
                  {t('paywall.billedMonthly')}
                </Text>
              </GlassCard>
            </TouchableOpacity>
            </View>
          )}

          <TouchableOpacity
            style={[styles.upgradeButton, { backgroundColor: colors.primary }]}
            activeOpacity={0.8}
            onPress={handleUpgrade}
            disabled={purchasing || subLoading}
          >
            <LinearGradient
              colors={[colors.primary, colors.primaryDark]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.upgradeButtonGradient}
            >
              {purchasing ? (
                <ActivityIndicator size="small" color="#FFF" />
              ) : (
                <>
                  <Crown size={20} color="#FFF" strokeWidth={2.5} />
                  <Text style={styles.upgradeButtonText}>
                    {t('paywall.upgradeButton')}
                  </Text>
                </>
              )}
            </LinearGradient>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.restoreButton}
            activeOpacity={0.6}
            onPress={handleRestore}
            disabled={purchasing}
          >
            <Text style={[styles.restoreButtonText, { color: colors.primary }]}>
              {t('paywall.restoreButton')}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.freeButton}
            activeOpacity={0.6}
            onPress={handleContinueFree}
          >
            <Text style={[styles.freeButtonText, { color: colors.textSecondary }]}>
              {t('paywall.continueFree')}
            </Text>
          </TouchableOpacity>

          <Text style={[styles.disclaimer, { color: colors.textMuted }]}>
            {t('paywall.disclaimer')}
          </Text>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradientBg: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  safeArea: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  header: {
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 30,
  },
  badgeContainer: {
    marginBottom: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: '800' as const,
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    lineHeight: 22,
    paddingHorizontal: 20,
  },
  featuresContainer: {
    marginBottom: 32,
  },
  featureRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 14,
  },
  checkIcon: {
    width: 28,
    height: 28,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  featureText: {
    fontSize: 15,
    flex: 1,
    lineHeight: 20,
  },
  plansContainer: {
    marginBottom: 24,
  },
  plansTitle: {
    fontSize: 20,
    fontWeight: '700' as const,
    marginBottom: 16,
    textAlign: 'center',
  },
  planCard: {
    padding: 20,
    marginBottom: 12,
  },
  selectedPlan: {
    transform: [{ scale: 1.02 }],
  },
  planHeader: {
    marginBottom: 12,
  },
  planTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 8,
  },
  planTitle: {
    fontSize: 18,
    fontWeight: '700' as const,
  },
  selectedBadge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  selectedBadgeText: {
    color: '#FFF',
    fontSize: 11,
    fontWeight: '700' as const,
  },
  savingsBadge: {
    alignSelf: 'flex-start',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
  },
  savingsText: {
    fontSize: 13,
    fontWeight: '600' as const,
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'baseline',
    marginBottom: 8,
  },
  price: {
    fontSize: 32,
    fontWeight: '800' as const,
  },
  period: {
    fontSize: 16,
    marginLeft: 4,
  },
  planDescription: {
    fontSize: 13,
  },
  upgradeButton: {
    borderRadius: 16,
    overflow: 'hidden',
    marginBottom: 12,
  },
  upgradeButtonGradient: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 18,
    gap: 10,
  },
  upgradeButtonText: {
    color: '#FFF',
    fontSize: 17,
    fontWeight: '700' as const,
  },
  loadingContainer: {
    paddingVertical: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loadingText: {
    marginTop: 12,
    fontSize: 14,
  },
  restoreButton: {
    paddingVertical: 14,
    alignItems: 'center',
    marginBottom: 8,
  },
  restoreButtonText: {
    fontSize: 14,
    fontWeight: '600' as const,
  },
  freeButton: {
    paddingVertical: 14,
    alignItems: 'center',
    marginBottom: 16,
  },
  freeButtonText: {
    fontSize: 15,
    fontWeight: '600' as const,
  },
  disclaimer: {
    fontSize: 12,
    textAlign: 'center',
    lineHeight: 16,
    paddingHorizontal: 20,
  },
});
