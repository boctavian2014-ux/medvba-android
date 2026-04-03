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
import { log } from '@/lib/log';
import { trpc } from '@/lib/trpc';
import { TRPCClientError } from '@trpc/client';

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

type IncrementAiQuestionResult = {
  allowed: boolean;
  reason: 'allowed' | 'limit_reached' | 'network_error' | 'server_validation_error';
};

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

function isRevenueCatConfigurationError(error: unknown): boolean {
  const message = String((error as any)?.message ?? error ?? '');
  const code = String((error as any)?.code ?? '');
  return (
    code.includes('ConfigurationError') ||
    message.includes('ConfigurationError') ||
    message.includes('There\'s a problem with your configuration') ||
    message.includes('could be fetched from the Play Store')
  );
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
  const didLogRevenueCatConfigErrorRef = useRef(false);

  const todayKey = getTodayKey();

  const loadDailyUsage = useCallback(async () => {
    try {
      log.debug('[Subscription] Loading daily usage for', todayKey);

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

      log.debug('[Subscription] Loaded usage - Quizzes: ' + (quizCount || 0) + ' AI: ' + (aiCount || 0));
    } catch (error) {
      log.error('[Subscription] Error loading daily usage:', error);
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
        if (!user?.id) {
          try {
            await Purchases.logOut();
          } catch {
            /* already anonymous or SDK not ready */
          }
        } else {
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
        if (isRevenueCatConfigurationError(error)) {
          // Common on new installs until Play products / RevenueCat offerings are fully wired.
          if (!didLogRevenueCatConfigErrorRef.current) {
            didLogRevenueCatConfigErrorRef.current = true;
            log.warn(
              '[Subscription] RevenueCat configuration incomplete. Purchases disabled until Play products/offerings are ready.',
            );
          }
        } else {
          log.error('[Subscription] RevenueCat init error:', error);
        }
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
      log.debug('[Subscription] Paywall disabled - skipping quiz limit');
      return true;
    }
    if (state.isPremium) {
      log.debug('[Subscription] Premium user - no quiz limit');
      return true;
    }

    if (state.freeQuizzesToday >= FREE_DAILY_QUIZ_LIMIT) {
      log.debug('[Subscription] Quiz limit reached');
      return false;
    }

    const newCount = state.freeQuizzesToday + 1;
    try {
      await AsyncStorage.setItem(`free_quiz_count_${todayKey}`, String(newCount));
      setState((prev) => ({ ...prev, freeQuizzesToday: newCount }));
      log.debug('[Subscription] Quiz count incremented to', newCount);
      return true;
    } catch (error) {
      log.error('[Subscription] Error incrementing quiz count:', error);
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
      log.debug('[Subscription] Questions answered count incremented to', newCount);
      return newCount <= FREE_DAILY_QUIZ_LIMIT;
    } catch (error) {
      log.error('[Subscription] Error incrementing questions answered count:', error);
      return true;
    }
  }, [PAYWALL_ENABLED, state.isPremium, state.freeQuestionsAnsweredToday, todayKey]);

  const validateAiQuestionMutation = trpc.subscription.validateAiQuestion.useMutation();

  const incrementAiQuestionCount = useCallback(async (): Promise<IncrementAiQuestionResult> => {
    if (!PAYWALL_ENABLED) {
      log.debug('[Subscription] Paywall disabled - skipping AI limit');
      return { allowed: true, reason: 'allowed' };
    }
    if (state.isPremium) {
      log.debug('[Subscription] Premium user - no AI limit');
      return { allowed: true, reason: 'allowed' };
    }

    // First check client-side limit
    if (state.freeAiQuestionsToday >= FREE_AI_LIMIT) {
      log.debug('[Subscription] Client-side AI question limit reached');
      return { allowed: false, reason: 'limit_reached' };
    }

    try {
      // Server-side validation - this is the secure check
      await validateAiQuestionMutation.mutateAsync({ increment: true });
      
      // Update local state to match server
      const newCount = state.freeAiQuestionsToday + 1;
      await AsyncStorage.setItem(`free_ai_questions_${todayKey}`, String(newCount));
      setState((prev) => ({ ...prev, freeAiQuestionsToday: newCount }));
      
      log.debug('[Subscription] AI question count incremented (server validated) to', newCount);
      return { allowed: true, reason: 'allowed' };
    } catch (error) {
      // If server rejects due to limit, update local state
      if (error instanceof TRPCClientError) {
        const isLimitError = error.message?.includes('limit reached') || 
                            error.message?.includes('AI question limit');
        if (isLimitError) {
          log.debug('[Subscription] Server rejected: AI question limit reached');
          // Update local state to reflect server-side limit
          await AsyncStorage.setItem(`free_ai_questions_${todayKey}`, String(FREE_AI_LIMIT));
          setState((prev) => ({ ...prev, freeAiQuestionsToday: FREE_AI_LIMIT }));
          return { allowed: false, reason: 'limit_reached' };
        }
      }

      const message = String((error as any)?.message ?? error ?? '').toLowerCase();
      const isNetworkError =
        message.includes('fetch') ||
        message.includes('network') ||
        message.includes('connection') ||
        message.includes('timed out');

      const isProcedureMissing =
        error instanceof TRPCClientError &&
        (error.data?.code === 'NOT_FOUND' || message.includes('no procedure found'));

      // If backend validation is temporarily unavailable, don't silently block sending.
      if (isNetworkError) {
        log.warn('[Subscription] Network issue during AI limit validation; allowing send.');
        return { allowed: true, reason: 'network_error' };
      }

      if (isProcedureMissing) {
        log.warn(
          '[Subscription] API is missing subscription.validateAiQuestion (redeploy backend with latest tRPC router). Allowing send until then.'
        );
        return { allowed: true, reason: 'server_validation_error' };
      }

      log.error('[Subscription] Server validation error during AI limit check; allowing send:', error);
      return { allowed: true, reason: 'server_validation_error' };
    }
  }, [PAYWALL_ENABLED, state.isPremium, state.freeAiQuestionsToday, todayKey, validateAiQuestionMutation]);

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

  const syncAiQuestionCountFromServer = useCallback(async (): Promise<void> => {
    if (!PAYWALL_ENABLED || state.isPremium) return;

    try {
      const result = await validateAiQuestionMutation.mutateAsync({ increment: false });
      const serverCount = FREE_AI_LIMIT - result.remaining;
      
      // Update local state to match server
      await AsyncStorage.setItem(`free_ai_questions_${todayKey}`, String(serverCount));
      setState((prev) => ({ ...prev, freeAiQuestionsToday: serverCount }));
      log.debug('[Subscription] Synced AI count from server:', serverCount);
    } catch (error) {
      // Silently fail - we'll use local state as fallback
      log.debug('[Subscription] Could not sync AI count from server');
    }
  }, [PAYWALL_ENABLED, state.isPremium, todayKey, validateAiQuestionMutation]);

  const syncPremiumToSupabase = useCallback(
    (type: 'yearly' | 'monthly') => {
      if (user?.id) {
        updateSubscriptionMutation.mutateAsync({ userId: user.id, status: 'premium', type }).catch((err) => {
          log.warn('[Subscription] Supabase sync failed:', err);
        });
      }
    },
    [user?.id, updateSubscriptionMutation]
  );

  const purchasePackage = useCallback(
    async (packageId: string): Promise<boolean> => {
      if (!PAYWALL_ENABLED || !REVENUECAT_API_KEY) {
        log.debug('[Subscription] Purchases disabled (paywall or API key missing).');
        return false;
      }

      const offering = currentOfferingRef.current;
      if (!offering?.availablePackages?.length) {
        log.warn('[Subscription] No offerings available for purchase.');
        return false;
      }

      const pkg = offering.availablePackages.find((p: any) => p.identifier === packageId);
      if (!pkg) {
        log.warn('[Subscription] Package not found:', packageId);
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
          log.error('[Subscription] Purchase error:', error);
        }
        return false;
      }
    },
    [PAYWALL_ENABLED, REVENUECAT_API_KEY, syncPremiumToSupabase]
  );

  const restorePurchases = useCallback(async (): Promise<boolean> => {
    if (!PAYWALL_ENABLED || !REVENUECAT_API_KEY) {
      log.debug('[Subscription] Restore disabled (paywall or API key missing).');
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
      log.error('[Subscription] Restore error:', error);
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
      syncAiQuestionCountFromServer,
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
      syncAiQuestionCountFromServer,
    ]
  );
});
