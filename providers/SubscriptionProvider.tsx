import { useState, useEffect, useCallback, useMemo } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import createContextHook from '@nkzw/create-context-hook';

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
}

export const [SubscriptionProvider, useSubscription] = createContextHook(() => {
  const [state, setState] = useState<SubscriptionState>({
    isPremium: false,
    freeQuizzesToday: 0,
    freeAiQuestionsToday: 0,
    isLoading: true,
  });

  const todayKey = getTodayKey();

  const loadDailyUsage = useCallback(async () => {
    try {
      console.log('[Subscription] Loading daily usage for', todayKey);
      
      const [quizCount, aiCount, premiumStatus] = await Promise.all([
        AsyncStorage.getItem(`free_quiz_count_${todayKey}`),
        AsyncStorage.getItem(`free_ai_questions_${todayKey}`),
        AsyncStorage.getItem('is_premium'),
      ]);

      setState({
        isPremium: premiumStatus === 'true',
        freeQuizzesToday: quizCount ? parseInt(quizCount, 10) : 0,
        freeAiQuestionsToday: aiCount ? parseInt(aiCount, 10) : 0,
        isLoading: false,
      });

      console.log('[Subscription] Loaded usage - Quizzes:', quizCount || 0, 'AI:', aiCount || 0, 'Premium:', premiumStatus);
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

  const setPremiumStatus = useCallback(async (premium: boolean) => {
    try {
      await AsyncStorage.setItem('is_premium', String(premium));
      setState(prev => ({ ...prev, isPremium: premium }));
      console.log('[Subscription] Premium status set to', premium);
    } catch (error) {
      console.error('[Subscription] Error setting premium status:', error);
    }
  }, []);

  return useMemo(() => ({
    isPremium: state.isPremium,
    isLoading: state.isLoading,
    freeQuizzesToday: state.freeQuizzesToday,
    freeAiQuestionsToday: state.freeAiQuestionsToday,
    canStartQuiz,
    canAskAiQuestion,
    incrementQuizCount,
    incrementAiQuestionCount,
    getRemainingQuizzes,
    getRemainingAiQuestions,
    setPremiumStatus,
    FREE_QUIZ_LIMIT,
    FREE_AI_LIMIT,
  }), [
    state.isPremium,
    state.isLoading,
    state.freeQuizzesToday,
    state.freeAiQuestionsToday,
    canStartQuiz,
    canAskAiQuestion,
    incrementQuizCount,
    incrementAiQuestionCount,
    getRemainingQuizzes,
    getRemainingAiQuestions,
    setPremiumStatus,
  ]);
});
