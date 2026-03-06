import { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import { Platform } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Constants from 'expo-constants';
import createContextHook from '@nkzw/create-context-hook';
import Purchases from 'react-native-purchases';
import type { CustomerInfo } from 'react-native-purchases';
import { ENTITLEMENT_ID, FREE_DAILY_QUIZ_LIMIT } from '@/constants/subscription';
import { useAuth } from '@/providers/AuthProvider';
import { useUpdateSubscription } from '@/lib/supabase-hooks';

const FREE_AI_LIMIT = 1;

function getPaywallConfig() {
  const extra = Constants.expoConfig?.extra ?? (Constants as any)?.manifest?.extra ?? {};
  const paywallEnabled = String(extra.EXPO_PUBLIC_PAYWALL_ENABLED ?? 'false') === 'true';
  const apiKeyIos = extra.EXPO_PUBLIC_REVENUECAT_API_KEY_IOS as string | undefined;
  const apiKeyAndroid = extra.EXPO_PUBLIC_REVENUECAT_API_KEY_ANDROID as string | undefined;
  const apiKey = Platform.OS === 'ios' ? apiKeyIos : apiKeyAndroid;
  const isNative = Platform.OS === 'ios' || Platform.OS === 'android';
  // Allow paywall on web for testing (shows "Download app" message; no real purchases)
  return { paywallEnabled: paywallEnabled, apiKey: apiKey ?? '', isNative };
}

type OfferingPackage = {
  identifier: string;
  product: {
    priceString: string;
  };
};

type Offerings = {
  availablePackages: OfferingPackage[];
} | null;

function getTodayKey(): string {
  const today = new Date();
  return `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;
}

interface SubscriptionState {
  isPremium: boolean;
  freeQuizzesToday: number;
  freeQuestionsAnsweredToday: number;
  freeAiQuestionsToday: number;
  isLoading: boolean;
  offerings: Offerings;
}

function isPremiumFromCustomerInfo(info: CustomerInfo | null): boolean {
  if (!info?.entitlements?.active) return false;
  return Boolean(info.entitlements.active[ENTITLEMENT_ID]);
}

export const [SubscriptionProvider, useSubscription] = createContextHook(() => {
  const { paywallEnabled: PAYWALL_ENABLED, apiKey: REVENUECAT_API_KEY, isNative: IS_NATIVE } = useMemo(getPaywallConfig, []);
  const { user } = useAuth();
  const updateSubscriptionMutation = useUpdateSubscription();

  const [state, setState] = useState<SubscriptionState>({
    isPremium: false,
    freeQuizzesToday: 0,
    freeQuestionsAnsweredToday: 0,
    freeAiQuestionsToday: 0,
    isLoading: true,
    offerings: null,
  });

  const currentOfferingRef = useRef<any>(null);

  const todayKey = getTodayKey();

  const loadDailyUsage = useCallback(async () => {
    try {
      console.log('[Subscription] Loading daily usage for', todayKey);

      const [quizCount, questionsAnsweredCount, aiCount] = await Promise.all([
        AsyncStorage.getItem(`free_quiz_count_${todayKey}`),
        AsyncStorage.getItem(`free_questions_answered_${todayKey}`),
        AsyncStorage.getItem(`free_ai_questions_${todayKey}`),
      ]);

      setState((prev) => ({
        ...prev,
        freeQuizzesToday: quizCount ? parseInt(quizCount, 10) : 0,
        freeQuestionsAnsweredToday: questionsAnsweredCount ? parseInt(questionsAnsweredCount, 10) : 0,
        freeAiQuestionsToday: aiCount ? parseInt(aiCount, 10) : 0,
        ...(prev.isLoading && !PAYWALL_ENABLED ? { isLoading: false } : {}),
      }));

      console.log('[Subscription] Loaded usage - Quizzes:', quizCount || 0, 'Questions answered:', questionsAnsweredCount || 0, 'AI:', aiCount || 0);
    } catch (error) {
      console.error('[Subscription] Error loading daily usage:', error);
      setState((prev) => ({ ...prev, isLoading: false }));
    }
  }, [todayKey, PAYWALL_ENABLED]);

  useEffect(() => {
    loadDailyUsage();
  }, [loadDailyUsage]);

  useEffect(() => {
    if (!PAYWALL_ENABLED || !REVENUECAT_API_KEY) {
      setState((prev) => ({ ...prev, isLoading: false }));
      return;
    }

    // Skip RevenueCat SDK on web (no native IAP); paywall UI still shows fallback message
    if (!IS_NATIVE) {
      setState((prev) => ({ ...prev, isLoading: false }));
      return;
    }

    let listener: ((info: CustomerInfo) => void) | null = null;

    const initRevenueCat = async () => {
      try {
        Purchases.configure({ apiKey: REVENUECAT_API_KEY });
        if (user?.id) {
          const { customerInfo } = await Purchases.logIn(user.id);
          setState((prev) => ({ ...prev, isPremium: isPremiumFromCustomerInfo(customerInfo) }));
        }

        const offerings = await Purchases.getOfferings();
        const current = offerings.current;
        if (current?.availablePackages?.length) {
          currentOfferingRef.current = current;
          const mapped: Offerings = {
            availablePackages: current.availablePackages.map((pkg: any) => ({
              identifier: pkg.identifier,
              product: { priceString: pkg.product?.priceString ?? '' },
            })),
          };
          setState((prev) => ({ ...prev, offerings: mapped }));
        }

        const customerInfo = await Purchases.getCustomerInfo();
        setState((prev) => ({ ...prev, isPremium: isPremiumFromCustomerInfo(customerInfo), isLoading: false }));

        listener = (info: CustomerInfo) => {
          setState((prev) => ({ ...prev, isPremium: isPremiumFromCustomerInfo(info) }));
        };
        Purchases.addCustomerInfoUpdateListener(listener);
      } catch (error) {
        console.error('[Subscription] RevenueCat init error:', error);
        setState((prev) => ({ ...prev, isLoading: false }));
      }
    };

    initRevenueCat();

    return () => {
      if (listener) {
        Purchases.removeCustomerInfoUpdateListener(listener);
      }
    };
  }, [PAYWALL_ENABLED, REVENUECAT_API_KEY, IS_NATIVE, user?.id]);

  const canStartQuiz = useCallback((): boolean => {
    if (!PAYWALL_ENABLED) return true;
    if (state.isPremium) return true;
    return state.freeQuestionsAnsweredToday < FREE_DAILY_QUIZ_LIMIT;
  }, [PAYWALL_ENABLED, state.isPremium, state.freeQuestionsAnsweredToday]);

  const canAskAiQuestion = useCallback((): boolean => {
    if (!PAYWALL_ENABLED) return true;
    if (state.isPremium) return true;
    return state.freeAiQuestionsToday < FREE_AI_LIMIT;
  }, [PAYWALL_ENABLED, state.isPremium, state.freeAiQuestionsToday]);

  const incrementQuizCount = useCallback(async (): Promise<boolean> => {
    if (!PAYWALL_ENABLED) {
      console.log('[Subscription] Paywall disabled - skipping quiz limit');
      return true;
    }
    if (state.isPremium) {
      console.log('[Subscription] Premium user - no quiz limit');
      return true;
    }

    if (state.freeQuizzesToday >= FREE_DAILY_QUIZ_LIMIT) {
      console.log('[Subscription] Quiz limit reached');
      return false;
    }

    const newCount = state.freeQuizzesToday + 1;
    try {
      await AsyncStorage.setItem(`free_quiz_count_${todayKey}`, String(newCount));
      setState((prev) => ({ ...prev, freeQuizzesToday: newCount }));
      console.log('[Subscription] Quiz count incremented to', newCount);
      return true;
    } catch (error) {
      console.error('[Subscription] Error incrementing quiz count:', error);
      return false;
    }
  }, [PAYWALL_ENABLED, state.isPremium, state.freeQuizzesToday, todayKey]);

  const incrementQuestionAnsweredCount = useCallback(async (): Promise<boolean> => {
    if (!PAYWALL_ENABLED) {
      return true;
    }
    if (state.isPremium) {
      return true;
    }

    const newCount = state.freeQuestionsAnsweredToday + 1;
    try {
      await AsyncStorage.setItem(`free_questions_answered_${todayKey}`, String(newCount));
      setState((prev) => ({ ...prev, freeQuestionsAnsweredToday: newCount }));
      console.log('[Subscription] Questions answered count incremented to', newCount);
      return newCount <= FREE_DAILY_QUIZ_LIMIT;
    } catch (error) {
      console.error('[Subscription] Error incrementing questions answered count:', error);
      return true;
    }
  }, [PAYWALL_ENABLED, state.isPremium, state.freeQuestionsAnsweredToday, todayKey]);

  const incrementAiQuestionCount = useCallback(async (): Promise<boolean> => {
    if (!PAYWALL_ENABLED) {
      console.log('[Subscription] Paywall disabled - skipping AI limit');
      return true;
    }
    if (state.isPremium) {
      console.log('[Subscription] Premium user - no AI limit');
      return true;
    }

    if (state.freeAiQuestionsToday >= FREE_AI_LIMIT) {
      console.log('[Subscription] AI question limit reached');
      return false;
    }

    const newCount = state.freeAiQuestionsToday + 1;
    try {
      await AsyncStorage.setItem(`free_ai_questions_${todayKey}`, String(newCount));
      setState((prev) => ({ ...prev, freeAiQuestionsToday: newCount }));
      console.log('[Subscription] AI question count incremented to', newCount);
      return true;
    } catch (error) {
      console.error('[Subscription] Error incrementing AI question count:', error);
      return false;
    }
  }, [PAYWALL_ENABLED, state.isPremium, state.freeAiQuestionsToday, todayKey]);

  const getRemainingQuizzes = useCallback((): number => {
    if (!PAYWALL_ENABLED) return Infinity;
    if (state.isPremium) return Infinity;
    return Math.max(0, FREE_DAILY_QUIZ_LIMIT - state.freeQuestionsAnsweredToday);
  }, [PAYWALL_ENABLED, state.isPremium, state.freeQuestionsAnsweredToday]);

  const getRemainingAiQuestions = useCallback((): number => {
    if (!PAYWALL_ENABLED) return Infinity;
    if (state.isPremium) return Infinity;
    return Math.max(0, FREE_AI_LIMIT - state.freeAiQuestionsToday);
  }, [PAYWALL_ENABLED, state.isPremium, state.freeAiQuestionsToday]);

  const syncPremiumToSupabase = useCallback(
    (type: 'yearly' | 'monthly') => {
      if (user?.id) {
        updateSubscriptionMutation.mutateAsync({ userId: user.id, status: 'premium', type }).catch((err) => {
          console.warn('[Subscription] Supabase sync failed:', err);
        });
      }
    },
    [user?.id, updateSubscriptionMutation]
  );

  const purchasePackage = useCallback(
    async (packageId: string): Promise<boolean> => {
      if (!PAYWALL_ENABLED || !REVENUECAT_API_KEY) {
        console.log('[Subscription] Purchases disabled (paywall or API key missing).');
        return false;
      }

      const offering = currentOfferingRef.current;
      if (!offering?.availablePackages?.length) {
        console.warn('[Subscription] No offerings available for purchase.');
        return false;
      }

      const pkg = offering.availablePackages.find((p: any) => p.identifier === packageId);
      if (!pkg) {
        console.warn('[Subscription] Package not found:', packageId);
        return false;
      }

      try {
        const { customerInfo } = await Purchases.purchasePackage(pkg);
        const premium = isPremiumFromCustomerInfo(customerInfo);
        if (premium) {
          const isYearly = packageId === '$rc_annual' || packageId === 'yearly' || String(packageId).toLowerCase().includes('annual');
          syncPremiumToSupabase(isYearly ? 'yearly' : 'monthly');
        }
        return premium;
      } catch (error: any) {
        const isCancel = error?.userCancelled === true;
        if (!isCancel) {
          console.error('[Subscription] Purchase error:', error);
        }
        return false;
      }
    },
    [PAYWALL_ENABLED, REVENUECAT_API_KEY, syncPremiumToSupabase]
  );

  const restorePurchases = useCallback(async (): Promise<boolean> => {
    if (!PAYWALL_ENABLED || !REVENUECAT_API_KEY) {
      console.log('[Subscription] Restore disabled (paywall or API key missing).');
      return false;
    }

    try {
      const customerInfo = await Purchases.restorePurchases();
      const premium = isPremiumFromCustomerInfo(customerInfo);
      if (premium) {
        syncPremiumToSupabase('yearly');
      }
      return premium;
    } catch (error) {
      console.error('[Subscription] Restore error:', error);
      return false;
    }
  }, [PAYWALL_ENABLED, REVENUECAT_API_KEY, syncPremiumToSupabase]);

  const effectivePremium = PAYWALL_ENABLED ? state.isPremium : true;

  return useMemo(
    () => ({
      isPremium: effectivePremium,
      isPaywallEnabled: PAYWALL_ENABLED,
      isLoading: state.isLoading,
      freeQuizzesToday: state.freeQuizzesToday,
      freeQuestionsAnsweredToday: state.freeQuestionsAnsweredToday,
      freeAiQuestionsToday: state.freeAiQuestionsToday,
      offerings: state.offerings,
      canStartQuiz,
      canAskAiQuestion,
      incrementQuizCount,
      incrementQuestionAnsweredCount,
      incrementAiQuestionCount,
      getRemainingQuizzes,
      getRemainingAiQuestions,
      purchasePackage,
      restorePurchases,
      FREE_QUIZ_LIMIT: FREE_DAILY_QUIZ_LIMIT,
      FREE_AI_LIMIT,
    }),
    [
      effectivePremium,
      PAYWALL_ENABLED,
      state.isLoading,
      state.freeQuizzesToday,
      state.freeQuestionsAnsweredToday,
      state.freeAiQuestionsToday,
      state.offerings,
      canStartQuiz,
      canAskAiQuestion,
      incrementQuizCount,
      incrementQuestionAnsweredCount,
      incrementAiQuestionCount,
      getRemainingQuizzes,
      getRemainingAiQuestions,
      purchasePackage,
      restorePurchases,
    ]
  );
});
