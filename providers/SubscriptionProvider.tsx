import { useState, useEffect, useCallback, useMemo } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import createContextHook from '@nkzw/create-context-hook';

const FREE_QUIZ_LIMIT = 2;
const FREE_AI_LIMIT = 1;
const PAYWALL_ENABLED = false;

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
  freeAiQuestionsToday: number;
  isLoading: boolean;
  offerings: Offerings;
}

export const [SubscriptionProvider, useSubscription] = createContextHook(() => {
  const [state, setState] = useState<SubscriptionState>({
    isPremium: false,
    freeQuizzesToday: 0,
    freeAiQuestionsToday: 0,
    isLoading: true,
    offerings: null,
  });

  const todayKey = getTodayKey();

  const loadDailyUsage = useCallback(async () => {
    try {
      console.log('[Subscription] Loading daily usage for', todayKey);
      
      const [quizCount, aiCount] = await Promise.all([
        AsyncStorage.getItem(`free_quiz_count_${todayKey}`),
        AsyncStorage.getItem(`free_ai_questions_${todayKey}`),
      ]);

      setState({
        isPremium: false,
        freeQuizzesToday: quizCount ? parseInt(quizCount, 10) : 0,
        freeAiQuestionsToday: aiCount ? parseInt(aiCount, 10) : 0,
        isLoading: false,
        offerings: null,
      });

      console.log('[Subscription] Loaded usage - Quizzes:', quizCount || 0, 'AI:', aiCount || 0, 'Premium: false');
    } catch (error) {
      console.error('[Subscription] Error loading daily usage:', error);
      setState(prev => ({ ...prev, isLoading: false }));
    }
  }, [todayKey]);

  useEffect(() => {
    loadDailyUsage();
  }, [loadDailyUsage]);

  const canStartQuiz = useCallback((): boolean => {
    if (!PAYWALL_ENABLED) return true;
    if (state.isPremium) return true;
    return state.freeQuizzesToday < FREE_QUIZ_LIMIT;
  }, [state.isPremium, state.freeQuizzesToday]);

  const canAskAiQuestion = useCallback((): boolean => {
    if (!PAYWALL_ENABLED) return true;
    if (state.isPremium) return true;
    return state.freeAiQuestionsToday < FREE_AI_LIMIT;
  }, [state.isPremium, state.freeAiQuestionsToday]);

  const incrementQuizCount = useCallback(async (): Promise<boolean> => {
    if (!PAYWALL_ENABLED) {
      console.log('[Subscription] Paywall disabled - skipping quiz limit');
      return true;
    }
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
      setState(prev => ({ ...prev, freeAiQuestionsToday: newCount }));
      console.log('[Subscription] AI question count incremented to', newCount);
      return true;
    } catch (error) {
      console.error('[Subscription] Error incrementing AI question count:', error);
      return false;
    }
  }, [state.isPremium, state.freeAiQuestionsToday, todayKey]);

  const getRemainingQuizzes = useCallback((): number => {
    if (!PAYWALL_ENABLED) return Infinity;
    if (state.isPremium) return Infinity;
    return Math.max(0, FREE_QUIZ_LIMIT - state.freeQuizzesToday);
  }, [state.isPremium, state.freeQuizzesToday]);

  const getRemainingAiQuestions = useCallback((): number => {
    if (!PAYWALL_ENABLED) return Infinity;
    if (state.isPremium) return Infinity;
    return Math.max(0, FREE_AI_LIMIT - state.freeAiQuestionsToday);
  }, [state.isPremium, state.freeAiQuestionsToday]);

  const purchasePackage = useCallback(async (): Promise<boolean> => {
    console.log('[Subscription] Purchases are temporarily disabled.');
    return false;
  }, []);

  const restorePurchases = useCallback(async (): Promise<boolean> => {
    console.log('[Subscription] Restore purchases is temporarily disabled.');
    return false;
  }, []);

  const effectivePremium = PAYWALL_ENABLED ? state.isPremium : true;

  return useMemo(() => ({
    isPremium: effectivePremium,
    isPaywallEnabled: PAYWALL_ENABLED,
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
    effectivePremium,
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
