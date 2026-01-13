import { useState, useEffect, useCallback, useMemo } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import createContextHook from '@nkzw/create-context-hook';
import type { Question } from '@/mocks/questions';

const DAILY_PROGRESS_KEY = 'quiz_daily_progress';
const SESSION_STATE_KEY = 'quiz_session_state';
const ALL_TIME_STATS_KEY = 'quiz_all_time_stats';
const STREAK_KEY = 'quiz_streak_data';
const WEEKLY_HISTORY_KEY = 'quiz_weekly_history';
const LAST_SESSION_KEY = 'quiz_last_session_info';

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

interface StreakData {
  currentStreak: number;
  lastActiveDate: string;
  longestStreak: number;
}

interface DailyHistoryEntry {
  date: string;
  questionsAnswered: number;
  correctAnswers: number;
  studyTimeSeconds: number;
}

interface LastSessionInfo {
  category: string;
  mode: string;
  timestamp: string;
}

function getDefaultAllTimeStats(): AllTimeStats {
  return {
    totalQuestionsAnswered: 0,
    totalCorrectAnswers: 0,
    totalStudyTimeSeconds: 0,
  };
}

function getDefaultStreakData(): StreakData {
  return {
    currentStreak: 0,
    lastActiveDate: '',
    longestStreak: 0,
  };
}

interface QuizProgressContextValue {
  dailyProgress: DailyProgress;
  sessionState: SessionState | null;
  allTimeStats: AllTimeStats;
  streakData: StreakData;
  weeklyHistory: DailyHistoryEntry[];
  lastSessionInfo: LastSessionInfo | null;
  isLoading: boolean;
  updateDailyProgress: (correct: boolean, questionId: string) => Promise<void>;
  saveSessionState: (state: SessionState) => Promise<void>;
  clearSessionState: () => Promise<void>;
  loadSessionState: () => Promise<SessionState | null>;
  saveLastSessionInfo: (category: string, mode: string) => Promise<void>;
  hasActiveSession: boolean;
  resetDailyProgress: () => Promise<void>;
  addStudyTime: (seconds: number) => Promise<void>;
  accuracy: number;
  formattedQuestionsCount: string;
  formattedStudyTime: string;
  weeklyQuestionsTotal: number;
  weeklyStudyTimeSeconds: number;
  weeklyGoalProgress: number;
}

function getTodayDateString(): string {
  return new Date().toISOString().split('T')[0];
}

function getYesterdayDateString(): string {
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  return yesterday.toISOString().split('T')[0];
}

function getLast7Days(): string[] {
  const dates: string[] = [];
  for (let i = 6; i >= 0; i--) {
    const date = new Date();
    date.setDate(date.getDate() - i);
    dates.push(date.toISOString().split('T')[0]);
  }
  return dates;
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
  const [streakData, setStreakData] = useState<StreakData>(getDefaultStreakData());
  const [weeklyHistory, setWeeklyHistory] = useState<DailyHistoryEntry[]>([]);
  const [lastSessionInfo, setLastSessionInfo] = useState<LastSessionInfo | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const updateStreak = useCallback(async () => {
    const today = getTodayDateString();
    const yesterday = getYesterdayDateString();

    setStreakData(prev => {
      let newStreak = prev.currentStreak;
      let newLongest = prev.longestStreak;

      if (prev.lastActiveDate === today) {
        return prev;
      } else if (prev.lastActiveDate === yesterday) {
        newStreak = prev.currentStreak + 1;
      } else if (prev.lastActiveDate === '') {
        newStreak = 1;
      } else {
        newStreak = 1;
      }

      if (newStreak > newLongest) {
        newLongest = newStreak;
      }

      const updated: StreakData = {
        currentStreak: newStreak,
        lastActiveDate: today,
        longestStreak: newLongest,
      };

      console.log('[QuizProgress] Updated streak:', updated.currentStreak, 'days');
      
      AsyncStorage.setItem(STREAK_KEY, JSON.stringify(updated)).catch(err => {
        console.error('[QuizProgress] Error saving streak:', err);
      });

      return updated;
    });
  }, []);

  const updateWeeklyHistory = useCallback(async (questionsAdded: number, correctAdded: number, studyTimeAdded: number = 0) => {
    const today = getTodayDateString();

    setWeeklyHistory(prev => {
      const existingIndex = prev.findIndex(entry => entry.date === today);
      let updated: DailyHistoryEntry[];

      if (existingIndex >= 0) {
        updated = prev.map((entry, idx) => {
          if (idx === existingIndex) {
            return {
              ...entry,
              questionsAnswered: entry.questionsAnswered + questionsAdded,
              correctAnswers: entry.correctAnswers + correctAdded,
              studyTimeSeconds: entry.studyTimeSeconds + studyTimeAdded,
            };
          }
          return entry;
        });
      } else {
        updated = [...prev, {
          date: today,
          questionsAnswered: questionsAdded,
          correctAnswers: correctAdded,
          studyTimeSeconds: studyTimeAdded,
        }];
      }

      const last7Days = getLast7Days();
      updated = updated.filter(entry => last7Days.includes(entry.date));

      console.log('[QuizProgress] Updated weekly history:', updated.length, 'days tracked');
      
      AsyncStorage.setItem(WEEKLY_HISTORY_KEY, JSON.stringify(updated)).catch(err => {
        console.error('[QuizProgress] Error saving weekly history:', err);
      });

      return updated;
    });
  }, []);

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

        const streakStored = await AsyncStorage.getItem(STREAK_KEY);
        if (streakStored) {
          const parsedStreak = JSON.parse(streakStored) as StreakData;
          const today = getTodayDateString();
          const yesterday = getYesterdayDateString();
          
          if (parsedStreak.lastActiveDate !== today && parsedStreak.lastActiveDate !== yesterday) {
            console.log('[QuizProgress] Streak broken, resetting to 0');
            const resetStreak: StreakData = {
              currentStreak: 0,
              lastActiveDate: parsedStreak.lastActiveDate,
              longestStreak: parsedStreak.longestStreak,
            };
            setStreakData(resetStreak);
            await AsyncStorage.setItem(STREAK_KEY, JSON.stringify(resetStreak));
          } else {
            console.log('[QuizProgress] Loaded streak:', parsedStreak.currentStreak, 'days');
            setStreakData(parsedStreak);
          }
        }

        const weeklyStored = await AsyncStorage.getItem(WEEKLY_HISTORY_KEY);
        if (weeklyStored) {
          const parsedWeekly = JSON.parse(weeklyStored) as DailyHistoryEntry[];
          const last7Days = getLast7Days();
          const filtered = parsedWeekly.filter(entry => last7Days.includes(entry.date));
          console.log('[QuizProgress] Loaded weekly history:', filtered.length, 'days');
          setWeeklyHistory(filtered);
        }

        const lastSessionStored = await AsyncStorage.getItem(LAST_SESSION_KEY);
        if (lastSessionStored) {
          const parsedLastSession = JSON.parse(lastSessionStored) as LastSessionInfo;
          console.log('[QuizProgress] Loaded last session:', parsedLastSession.category, parsedLastSession.mode);
          setLastSessionInfo(parsedLastSession);
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

      await updateStreak();
      await updateWeeklyHistory(1, correct ? 1 : 0, 0);
    } catch (error) {
      console.error('[QuizProgress] Error updating daily progress:', error);
    }
  }, [updateStreak, updateWeeklyHistory]);

  const saveLastSessionInfo = useCallback(async (category: string, mode: string) => {
    try {
      const info: LastSessionInfo = {
        category,
        mode,
        timestamp: new Date().toISOString(),
      };
      console.log('[QuizProgress] Saving last session info:', category, mode);
      setLastSessionInfo(info);
      await AsyncStorage.setItem(LAST_SESSION_KEY, JSON.stringify(info));
    } catch (error) {
      console.error('[QuizProgress] Error saving last session info:', error);
    }
  }, []);

  const saveSessionState = useCallback(async (state: SessionState) => {
    try {
      console.log('[QuizProgress] Saving session state at index:', state.currentIndex);
      setSessionState(state);
      await AsyncStorage.setItem(SESSION_STATE_KEY, JSON.stringify(state));
      
      await saveLastSessionInfo(state.category, state.mode);
    } catch (error) {
      console.error('[QuizProgress] Error saving session state:', error);
    }
  }, [saveLastSessionInfo]);

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

      await updateWeeklyHistory(0, 0, seconds);
    } catch (error) {
      console.error('[QuizProgress] Error adding study time:', error);
    }
  }, [updateWeeklyHistory]);

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

  const weeklyQuestionsTotal = useMemo(() => {
    return weeklyHistory.reduce((sum, entry) => sum + entry.questionsAnswered, 0);
  }, [weeklyHistory]);

  const weeklyStudyTimeSeconds = useMemo(() => {
    return weeklyHistory.reduce((sum, entry) => sum + entry.studyTimeSeconds, 0);
  }, [weeklyHistory]);

  const weeklyGoalProgress = useMemo(() => {
    const weeklyGoal = 350;
    return Math.min((weeklyQuestionsTotal / weeklyGoal) * 100, 100);
  }, [weeklyQuestionsTotal]);

  return {
    dailyProgress,
    sessionState,
    allTimeStats,
    streakData,
    weeklyHistory,
    lastSessionInfo,
    isLoading,
    updateDailyProgress,
    saveSessionState,
    clearSessionState,
    loadSessionState,
    saveLastSessionInfo,
    hasActiveSession,
    resetDailyProgress,
    addStudyTime,
    accuracy,
    formattedQuestionsCount,
    formattedStudyTime,
    weeklyQuestionsTotal,
    weeklyStudyTimeSeconds,
    weeklyGoalProgress,
  };
});

export type { DailyProgress, SessionState, AllTimeStats, StreakData, DailyHistoryEntry, LastSessionInfo };
