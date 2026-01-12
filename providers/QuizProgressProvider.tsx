import { useState, useEffect, useCallback, useMemo } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import createContextHook from '@nkzw/create-context-hook';
import type { Question } from '@/mocks/questions';

const DAILY_PROGRESS_KEY = 'quiz_daily_progress';
const SESSION_STATE_KEY = 'quiz_session_state';
const ALL_TIME_STATS_KEY = 'quiz_all_time_stats';

interface DailyProgress {
  date: string;
  questionsAnswered: number;
  correctAnswers: number;
  goal: number;
  answeredQuestionIds: string[];
}

interface SessionState {
  category: string;
  mode: string;
  questions: Question[];
  currentIndex: number;
  score: number;
  answeredInSession: string[];
  startedAt: string;
}

interface AllTimeStats {
  totalQuestionsAnswered: number;
  totalCorrectAnswers: number;
  totalStudyTimeSeconds: number;
}

function getDefaultAllTimeStats(): AllTimeStats {
  return {
    totalQuestionsAnswered: 0,
    totalCorrectAnswers: 0,
    totalStudyTimeSeconds: 0,
  };
}

interface QuizProgressContextValue {
  dailyProgress: DailyProgress;
  sessionState: SessionState | null;
  allTimeStats: AllTimeStats;
  isLoading: boolean;
  updateDailyProgress: (correct: boolean, questionId: string) => Promise<void>;
  saveSessionState: (state: SessionState) => Promise<void>;
  clearSessionState: () => Promise<void>;
  loadSessionState: () => Promise<SessionState | null>;
  hasActiveSession: boolean;
  resetDailyProgress: () => Promise<void>;
  addStudyTime: (seconds: number) => Promise<void>;
  accuracy: number;
  formattedQuestionsCount: string;
  formattedStudyTime: string;
}

function getTodayDateString(): string {
  return new Date().toISOString().split('T')[0];
}

function getDefaultDailyProgress(): DailyProgress {
  return {
    date: getTodayDateString(),
    questionsAnswered: 0,
    correctAnswers: 0,
    goal: 50,
    answeredQuestionIds: [],
  };
}

export const [QuizProgressProvider, useQuizProgress] = createContextHook<QuizProgressContextValue>(() => {
  const [dailyProgress, setDailyProgress] = useState<DailyProgress>(getDefaultDailyProgress());
  const [sessionState, setSessionState] = useState<SessionState | null>(null);
  const [allTimeStats, setAllTimeStats] = useState<AllTimeStats>(getDefaultAllTimeStats());
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadProgress = async () => {
      try {
        console.log('[QuizProgress] Loading daily progress...');
        const stored = await AsyncStorage.getItem(DAILY_PROGRESS_KEY);
        
        if (stored) {
          const parsed = JSON.parse(stored) as DailyProgress;
          const today = getTodayDateString();
          
          if (parsed.date === today) {
            console.log('[QuizProgress] Found today\'s progress:', parsed.questionsAnswered, 'questions');
            setDailyProgress(parsed);
          } else {
            console.log('[QuizProgress] Progress is from a different day, resetting');
            const newProgress = getDefaultDailyProgress();
            setDailyProgress(newProgress);
            await AsyncStorage.setItem(DAILY_PROGRESS_KEY, JSON.stringify(newProgress));
          }
        } else {
          console.log('[QuizProgress] No stored progress, using default');
        }

        const sessionStored = await AsyncStorage.getItem(SESSION_STATE_KEY);
        if (sessionStored) {
          const parsedSession = JSON.parse(sessionStored) as SessionState;
          const sessionDate = parsedSession.startedAt.split('T')[0];
          const today = getTodayDateString();
          
          if (sessionDate === today) {
            console.log('[QuizProgress] Found active session at index:', parsedSession.currentIndex);
            setSessionState(parsedSession);
          } else {
            console.log('[QuizProgress] Session is from a different day, clearing');
            await AsyncStorage.removeItem(SESSION_STATE_KEY);
          }
        }

        const allTimeStored = await AsyncStorage.getItem(ALL_TIME_STATS_KEY);
        if (allTimeStored) {
          const parsedAllTime = JSON.parse(allTimeStored) as AllTimeStats;
          console.log('[QuizProgress] Loaded all-time stats:', parsedAllTime);
          setAllTimeStats(parsedAllTime);
        } else {
          console.log('[QuizProgress] No all-time stats, using default');
        }
      } catch (error) {
        console.error('[QuizProgress] Error loading progress:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadProgress();
  }, []);

  const updateDailyProgress = useCallback(async (correct: boolean, questionId: string) => {
    try {
      setDailyProgress(prev => {
        if (prev.answeredQuestionIds.includes(questionId)) {
          console.log('[QuizProgress] Question already answered today:', questionId);
          return prev;
        }

        const updated: DailyProgress = {
          ...prev,
          date: getTodayDateString(),
          questionsAnswered: prev.questionsAnswered + 1,
          correctAnswers: correct ? prev.correctAnswers + 1 : prev.correctAnswers,
          answeredQuestionIds: [...prev.answeredQuestionIds, questionId],
        };

        console.log('[QuizProgress] Updated daily progress:', updated.questionsAnswered, '/', updated.goal);
        
        AsyncStorage.setItem(DAILY_PROGRESS_KEY, JSON.stringify(updated)).catch(err => {
          console.error('[QuizProgress] Error saving daily progress:', err);
        });

        return updated;
      });

      setAllTimeStats(prev => {
        const updated: AllTimeStats = {
          ...prev,
          totalQuestionsAnswered: prev.totalQuestionsAnswered + 1,
          totalCorrectAnswers: correct ? prev.totalCorrectAnswers + 1 : prev.totalCorrectAnswers,
        };

        console.log('[QuizProgress] Updated all-time stats:', updated.totalQuestionsAnswered, 'questions,', updated.totalCorrectAnswers, 'correct');
        
        AsyncStorage.setItem(ALL_TIME_STATS_KEY, JSON.stringify(updated)).catch(err => {
          console.error('[QuizProgress] Error saving all-time stats:', err);
        });

        return updated;
      });
    } catch (error) {
      console.error('[QuizProgress] Error updating daily progress:', error);
    }
  }, []);

  const saveSessionState = useCallback(async (state: SessionState) => {
    try {
      console.log('[QuizProgress] Saving session state at index:', state.currentIndex);
      setSessionState(state);
      await AsyncStorage.setItem(SESSION_STATE_KEY, JSON.stringify(state));
    } catch (error) {
      console.error('[QuizProgress] Error saving session state:', error);
    }
  }, []);

  const clearSessionState = useCallback(async () => {
    try {
      console.log('[QuizProgress] Clearing session state');
      setSessionState(null);
      await AsyncStorage.removeItem(SESSION_STATE_KEY);
    } catch (error) {
      console.error('[QuizProgress] Error clearing session state:', error);
    }
  }, []);

  const loadSessionState = useCallback(async (): Promise<SessionState | null> => {
    try {
      const stored = await AsyncStorage.getItem(SESSION_STATE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored) as SessionState;
        const sessionDate = parsed.startedAt.split('T')[0];
        const today = getTodayDateString();
        
        if (sessionDate === today) {
          return parsed;
        }
      }
      return null;
    } catch (error) {
      console.error('[QuizProgress] Error loading session state:', error);
      return null;
    }
  }, []);

  const resetDailyProgress = useCallback(async () => {
    try {
      const newProgress = getDefaultDailyProgress();
      setDailyProgress(newProgress);
      await AsyncStorage.setItem(DAILY_PROGRESS_KEY, JSON.stringify(newProgress));
      console.log('[QuizProgress] Daily progress reset');
    } catch (error) {
      console.error('[QuizProgress] Error resetting daily progress:', error);
    }
  }, []);

  const hasActiveSession = useMemo(() => {
    return sessionState !== null && sessionState.currentIndex < sessionState.questions.length;
  }, [sessionState]);

  const addStudyTime = useCallback(async (seconds: number) => {
    try {
      setAllTimeStats(prev => {
        const updated: AllTimeStats = {
          ...prev,
          totalStudyTimeSeconds: prev.totalStudyTimeSeconds + seconds,
        };

        console.log('[QuizProgress] Added', seconds, 'seconds. Total study time:', updated.totalStudyTimeSeconds, 'seconds');
        
        AsyncStorage.setItem(ALL_TIME_STATS_KEY, JSON.stringify(updated)).catch(err => {
          console.error('[QuizProgress] Error saving study time:', err);
        });

        return updated;
      });
    } catch (error) {
      console.error('[QuizProgress] Error adding study time:', error);
    }
  }, []);

  const accuracy = useMemo(() => {
    if (allTimeStats.totalQuestionsAnswered === 0) return 0;
    return (allTimeStats.totalCorrectAnswers / allTimeStats.totalQuestionsAnswered) * 100;
  }, [allTimeStats.totalQuestionsAnswered, allTimeStats.totalCorrectAnswers]);

  const formattedQuestionsCount = useMemo(() => {
    const count = allTimeStats.totalQuestionsAnswered;
    if (count >= 1000) {
      return `${(count / 1000).toFixed(1)}k`;
    }
    return String(count);
  }, [allTimeStats.totalQuestionsAnswered]);

  const formattedStudyTime = useMemo(() => {
    const hours = Math.floor(allTimeStats.totalStudyTimeSeconds / 3600);
    if (hours > 0) {
      return `${hours}h`;
    }
    const minutes = Math.floor(allTimeStats.totalStudyTimeSeconds / 60);
    return `${minutes}m`;
  }, [allTimeStats.totalStudyTimeSeconds]);

  return {
    dailyProgress,
    sessionState,
    allTimeStats,
    isLoading,
    updateDailyProgress,
    saveSessionState,
    clearSessionState,
    loadSessionState,
    hasActiveSession,
    resetDailyProgress,
    addStudyTime,
    accuracy,
    formattedQuestionsCount,
    formattedStudyTime,
  };
});

export type { DailyProgress, SessionState, AllTimeStats };
