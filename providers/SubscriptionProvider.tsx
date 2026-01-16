import { useState, useEffect, useCallback, useMemo } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import createContextHook from '@nkzw/create-context-hook';
import Purchases, { CustomerInfo, PurchasesOffering } from 'react-native-purchases';
import { Platform } from 'react-native';

const FREE_QUIZ_LIMIT = 2;
const FREE_AI_LIMIT = 1;

function getTodayKey(): string {
  const today = new Date();
  return `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;
}

interface SubscriptionState {
  isPremium: boolean;
  freeQuizzesToday: number;
  freeAiQuestionsToday: number;
  isLoading: boolean;
  offerings: PurchasesOffering | null;
}

export const [SubscriptionProvider, useSubscription] = createContextHook(() => {
  const [state, setState] = useState<SubscriptionState>({
    isPremium: false,
    freeQuizzesToday: 0,
    freeAiQuestionsToday: 0,
    isLoading: true,
    offerings: null,
  });

  useEffect(() => {
    const initRevenueCat = async () => {
      try {
        const apiKey = process.env.EXPO_PUBLIC_REVENUECAT_TEST_API_KEY;
        if (!apiKey) {
          console.error('[RevenueCat] API key not found');
          return;
        }

        if (Platform.OS !== 'web') {
          console.log('[RevenueCat] Configuring SDK...');
          Purchases.configure({ apiKey });
          console.log('[RevenueCat] SDK configured successfully');
        } else {
          console.log('[RevenueCat] Skipping on web');
        }
      } catch (error) {
        console.error('[RevenueCat] Initialization error:', error);
      }
    };

    initRevenueCat();
  }, []);

  const todayKey = getTodayKey();

  const loadDailyUsage = useCallback(async () => {
    try {
      console.log('[Subscription] Loading daily usage for', todayKey);
      
      const [quizCount, aiCount] = await Promise.all([
        AsyncStorage.getItem(`free_quiz_count_${todayKey}`),
        AsyncStorage.getItem(`free_ai_questions_${todayKey}`),
      ]);

      let isPremium = false;
      let offerings: PurchasesOffering | null = null;

      if (Platform.OS !== 'web') {
        try {
          console.log('[RevenueCat] Fetching customer info...');
          const customerInfo: CustomerInfo = await Purchases.getCustomerInfo();
          isPremium = typeof customerInfo.entitlements.active['premium'] !== 'undefined';
          console.log('[RevenueCat] Premium status:', isPremium);

          console.log('[RevenueCat] Fetching offerings...');
          const fetchedOfferings = await Purchases.getOfferings();
          offerings = fetchedOfferings.current;
          console.log('[RevenueCat] Offerings loaded:', offerings?.identifier);
        } catch (error) {
          console.error('[RevenueCat] Error fetching info:', error);
        }
      }

      setState({
        isPremium,
        freeQuizzesToday: quizCount ? parseInt(quizCount, 10) : 0,
        freeAiQuestionsToday: aiCount ? parseInt(aiCount, 10) : 0,
        isLoading: false,
        offerings,
      });

      console.log('[Subscription] Loaded usage - Quizzes:', quizCount || 0, 'AI:', aiCount || 0, 'Premium:', isPremium);
    } catch (error) {
      console.error('[Subscription] Error loading daily usage:', error);
      setState(prev => ({ ...prev, isLoading: false }));
    }
  }, [todayKey]);

  useEffect(() => {
    loadDailyUsage();
  }, [loadDailyUsage]);

  const canStartQuiz = useCallback((): boolean => {
    if (state.isPremium) return true;
    return state.freeQuizzesToday < FREE_QUIZ_LIMIT;
  }, [state.isPremium, state.freeQuizzesToday]);

  const canAskAiQuestion = useCallback((): boolean => {
    if (state.isPremium) return true;
    return state.freeAiQuestionsToday < FREE_AI_LIMIT;
  }, [state.isPremium, state.freeAiQuestionsToday]);

  const incrementQuizCount = useCallback(async (): Promise<boolean> => {
    if (state.isPremium) {
      console.log('[Subscription] Premium user - no quiz limit');
      return true;
    }

    if (state.freeQuizzesToday >= FREE_QUIZ_LIMIT) {
      console.log('[Subscription] Quiz limit reached');
      return false;
    }

    const newCount = state.freeQuizzesToday + 1;
    try {
      await AsyncStorage.setItem(`free_quiz_count_${todayKey}`, String(newCount));
      setState(prev => ({ ...prev, freeQuizzesToday: newCount }));
      console.log('[Subscription] Quiz count incremented to', newCount);
      return true;
    } catch (error) {
      console.error('[Subscription] Error incrementing quiz count:', error);
      return false;
    }
  }, [state.isPremium, state.freeQuizzesToday, todayKey]);

  const incrementAiQuestionCount = useCallback(async (): Promise<boolean> => {
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
      setState(prev => ({ ...prev, freeAiQuestionsToday: newCount }));
      console.log('[Subscription] AI question count incremented to', newCount);
      return true;
    } catch (error) {
      console.error('[Subscription] Error incrementing AI question count:', error);
      return false;
    }
  }, [state.isPremium, state.freeAiQuestionsToday, todayKey]);

  const getRemainingQuizzes = useCallback((): number => {
    if (state.isPremium) return Infinity;
    return Math.max(0, FREE_QUIZ_LIMIT - state.freeQuizzesToday);
  }, [state.isPremium, state.freeQuizzesToday]);

  const getRemainingAiQuestions = useCallback((): number => {
    if (state.isPremium) return Infinity;
    return Math.max(0, FREE_AI_LIMIT - state.freeAiQuestionsToday);
  }, [state.isPremium, state.freeAiQuestionsToday]);

  const purchasePackage = useCallback(async (packageId: string): Promise<boolean> => {
    if (Platform.OS === 'web') {
      console.log('[RevenueCat] Purchases not supported on web');
      return false;
    }

    try {
      console.log('[RevenueCat] Starting purchase for package:', packageId);
      
      if (!state.offerings) {
        console.error('[RevenueCat] No offerings available');
        return false;
      }

      const packageToPurchase = state.offerings.availablePackages.find(
        pkg => pkg.identifier === packageId
      );

      if (!packageToPurchase) {
        console.error('[RevenueCat] Package not found:', packageId);
        return false;
      }

      const { customerInfo } = await Purchases.purchasePackage(packageToPurchase);
      const isPremium = typeof customerInfo.entitlements.active['premium'] !== 'undefined';
      
      setState(prev => ({ ...prev, isPremium }));
      console.log('[RevenueCat] Purchase successful, premium status:', isPremium);
      
      return isPremium;
    } catch (error: any) {
      if (error.userCancelled) {
        console.log('[RevenueCat] User cancelled purchase');
      } else {
        console.error('[RevenueCat] Purchase error:', error);
      }
      return false;
    }
  }, [state.offerings]);

  const restorePurchases = useCallback(async (): Promise<boolean> => {
    if (Platform.OS === 'web') {
      console.log('[RevenueCat] Restore not supported on web');
      return false;
    }

    try {
      console.log('[RevenueCat] Restoring purchases...');
      const customerInfo = await Purchases.restorePurchases();
      const isPremium = typeof customerInfo.entitlements.active['premium'] !== 'undefined';
      
      setState(prev => ({ ...prev, isPremium }));
      console.log('[RevenueCat] Restore successful, premium status:', isPremium);
      
      return isPremium;
    } catch (error) {
      console.error('[RevenueCat] Restore error:', error);
      return false;
    }
  }, []);

  return useMemo(() => ({
    isPremium: state.isPremium,
    isLoading: state.isLoading,
    freeQuizzesToday: state.freeQuizzesToday,
    freeAiQuestionsToday: state.freeAiQuestionsToday,
    offerings: state.offerings,
    canStartQuiz,
    canAskAiQuestion,
    incrementQuizCount,
    incrementAiQuestionCount,
    getRemainingQuizzes,
    getRemainingAiQuestions,
    purchasePackage,
    restorePurchases,
    FREE_QUIZ_LIMIT,
    FREE_AI_LIMIT,
  }), [
    state.isPremium,
    state.isLoading,
    state.freeQuizzesToday,
    state.freeAiQuestionsToday,
    state.offerings,
    canStartQuiz,
    canAskAiQuestion,
    incrementQuizCount,
    incrementAiQuestionCount,
    getRemainingQuizzes,
    getRemainingAiQuestions,
    purchasePackage,
    restorePurchases,
  ]);
});
