import { useState, useEffect, useCallback, useMemo } from 'react';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import createContextHook from '@nkzw/create-context-hook';
import type { Question } from '@/mocks/questions';
import { monitoring } from '@/lib/monitoring';
import { useAuth } from './AuthProvider';
import { 
  useUserProgress, 
  useUpsertUserProgress, 
  useWeeklyProgress, 
  useUpsertDailyProgress,
  useCheckAchievements,
  useGrantAchievement
} from '@/lib/supabase-hooks';

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
  const { user } = useAuth();
  const userId = user?.id;
  const [dailyProgress, setDailyProgress] = useState<DailyProgress>(getDefaultDailyProgress());
  const [sessionState, setSessionState] = useState<SessionState | null>(null);
  const [allTimeStats, setAllTimeStats] = useState<AllTimeStats>(getDefaultAllTimeStats());
  const [streakData, setStreakData] = useState<StreakData>(getDefaultStreakData());
  const [weeklyHistory, setWeeklyHistory] = useState<DailyHistoryEntry[]>([]);
  const [lastSessionInfo, setLastSessionInfo] = useState<LastSessionInfo | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const cloudProgressQuery = useUserProgress(userId);
  const cloudWeeklyQuery = useWeeklyProgress(
    userId,
    getLast7Days()[0],
    getTodayDateString()
  );
  const upsertUserProgressMutation = useUpsertUserProgress();
  const upsertDailyProgressMutation = useUpsertDailyProgress();
  const achievementCheckQuery = useCheckAchievements(userId);
  const grantAchievementMutation = useGrantAchievement();

  const upsertUserProgressAsync = upsertUserProgressMutation.mutateAsync;
  const upsertDailyProgressAsync = upsertDailyProgressMutation.mutateAsync;

  const accuracy = useMemo(() => {
    if (allTimeStats.totalQuestionsAnswered === 0) return 0;
    return (allTimeStats.totalCorrectAnswers / allTimeStats.totalQuestionsAnswered) * 100;
  }, [allTimeStats.totalQuestionsAnswered, allTimeStats.totalCorrectAnswers]);

  // Achievement grant errors are non-blocking; quiz_completed_10 is granted via grant_my_achievement.
  const checkAndGrantAchievements = useCallback(async () => {
    if (!userId) return;

    try {
      const checkResult = await achievementCheckQuery.refetch();
      const newAchievements = checkResult.data?.earned || [];

      if (newAchievements.length > 0) {
        console.log('[QuizProgress] Granting', newAchievements.length, 'new achievements');
        
        for (const achievementType of newAchievements) {
          try {
            const success = await grantAchievementMutation.mutateAsync(achievementType);

            if (!success) {
              Alert.alert(
                'Achievement not saved',
                'Could not save your achievement. It will not affect your progress.'
              );
              continue;
            }

            console.log('[QuizProgress] Granted achievement:', achievementType);
          } catch (error: any) {
            console.error('[QuizProgress] Error granting achievement:', achievementType, JSON.stringify({
              message: error?.message || String(error),
              code: error?.code,
              details: error?.details,
              hint: error?.hint,
              name: error?.name,
            }, null, 2));
            Alert.alert(
              'Achievement not saved',
              'Could not save your achievement. It will not affect your progress.'
            );
          }
        }
      }
    } catch (error: any) {
      console.error('[QuizProgress] Error checking achievements:', JSON.stringify({
        message: error?.message || String(error),
        code: error?.code,
        details: error?.details,
        hint: error?.hint,
        name: error?.name,
      }, null, 2));
    }
  }, [userId, achievementCheckQuery, grantAchievementMutation, allTimeStats, streakData, accuracy]);

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
    let isMounted = true;

    const loadProgress = async () => {
      try {
        console.log('[QuizProgress] Loading progress from cloud and local...');
        
        if (!isMounted) return;

        if (userId && cloudProgressQuery.data) {
          console.log('[QuizProgress] Loading from Supabase cloud');
          if (isMounted) {
            setAllTimeStats({
              totalQuestionsAnswered: cloudProgressQuery.data.totalQuestionsAnswered,
              totalCorrectAnswers: cloudProgressQuery.data.correctAnswers,
              totalStudyTimeSeconds: cloudProgressQuery.data.studyTimeSeconds,
            });
            setStreakData({
              currentStreak: cloudProgressQuery.data.currentStreak,
              longestStreak: cloudProgressQuery.data.longestStreak,
              lastActiveDate: cloudProgressQuery.data.lastActivityDate || '',
            });
          }
        } else {
          console.log('[QuizProgress] Loading from local AsyncStorage');
          const allTimeStored = await AsyncStorage.getItem(ALL_TIME_STATS_KEY);
          if (isMounted && allTimeStored) {
            const parsedAllTime = JSON.parse(allTimeStored) as AllTimeStats;
            console.log('[QuizProgress] Loaded all-time stats from local:', parsedAllTime);
            setAllTimeStats(parsedAllTime);
          }
          
          const streakStored = await AsyncStorage.getItem(STREAK_KEY);
          if (isMounted && streakStored) {
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
              console.log('[QuizProgress] Loaded streak from local:', parsedStreak.currentStreak, 'days');
              setStreakData(parsedStreak);
            }
          }
        }

        if (!isMounted) return;

        if (userId && cloudWeeklyQuery.data && cloudWeeklyQuery.data.length > 0) {
          console.log('[QuizProgress] Loading weekly history from Supabase');
          const weeklyData = cloudWeeklyQuery.data.map(day => ({
            date: day.date,
            questionsAnswered: day.questionsAnswered,
            correctAnswers: day.correctAnswers,
            studyTimeSeconds: day.studyTimeSeconds,
          }));
          if (isMounted) {
            setWeeklyHistory(weeklyData);
          }
        } else {
          const weeklyStored = await AsyncStorage.getItem(WEEKLY_HISTORY_KEY);
          if (isMounted && weeklyStored) {
            const parsedWeekly = JSON.parse(weeklyStored) as DailyHistoryEntry[];
            const last7Days = getLast7Days();
            const filtered = parsedWeekly.filter(entry => last7Days.includes(entry.date));
            console.log('[QuizProgress] Loaded weekly history from local:', filtered.length, 'days');
            setWeeklyHistory(filtered);
          }
        }

        if (!isMounted) return;

        const stored = await AsyncStorage.getItem(DAILY_PROGRESS_KEY);
        
        if (isMounted && stored) {
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

        if (!isMounted) return;

        const sessionStored = await AsyncStorage.getItem(SESSION_STATE_KEY);
        if (isMounted && sessionStored) {
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

        if (!isMounted) return;

        const lastSessionStored = await AsyncStorage.getItem(LAST_SESSION_KEY);
        if (isMounted && lastSessionStored) {
          const parsedLastSession = JSON.parse(lastSessionStored) as LastSessionInfo;
          console.log('[QuizProgress] Loaded last session:', parsedLastSession.category, parsedLastSession.mode);
          setLastSessionInfo(parsedLastSession);
        }
      } catch (error) {
        console.error('[QuizProgress] Error loading progress:', error);
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    loadProgress();

    return () => {
      isMounted = false;
    };
  }, [userId, cloudProgressQuery.data, cloudWeeklyQuery.data]);

  const updateDailyProgress = useCallback(async (correct: boolean, questionId: string) => {
    try {
      monitoring.logEvent('question_answered', { correct, questionId });
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

      if (userId) {
        const currentAllTime = allTimeStats;
        const currentStreak = streakData;
        const today = getTodayDateString();
        const todayEntry = weeklyHistory.find(e => e.date === today);
        
        const syncPromise = Promise.all([
          upsertUserProgressAsync({
            userId,
            totalQuestionsAnswered: currentAllTime.totalQuestionsAnswered + 1,
            correctAnswers: correct ? currentAllTime.totalCorrectAnswers + 1 : currentAllTime.totalCorrectAnswers,
            studyTimeSeconds: currentAllTime.totalStudyTimeSeconds,
            currentStreak: currentStreak.currentStreak,
            longestStreak: currentStreak.longestStreak,
            lastActivityDate: currentStreak.lastActiveDate || null,
          }),
          upsertDailyProgressAsync({
            userId,
            date: today,
            questionsAnswered: (todayEntry?.questionsAnswered || 0) + 1,
            correctAnswers: (todayEntry?.correctAnswers || 0) + (correct ? 1 : 0),
            studyTimeSeconds: todayEntry?.studyTimeSeconds || 0,
          }),
        ]);

        syncPromise.then(() => {
          console.log('[QuizProgress] Synced to Supabase successfully');
          checkAndGrantAchievements();
        }).catch(error => {
          console.error('[QuizProgress] Error syncing to Supabase:', error);
        });
      }
    } catch (error) {
      console.error('[QuizProgress] Error updating daily progress:', error);
      monitoring.logError(error as Error, { context: 'update_daily_progress' });
    }
  }, [updateStreak, updateWeeklyHistory, userId, allTimeStats, streakData, weeklyHistory, upsertUserProgressAsync, upsertDailyProgressAsync, checkAndGrantAchievements]);

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
      monitoring.logEvent('quiz_session_saved', { 
        category: state.category, 
        mode: state.mode,
        progress: state.currentIndex / state.questions.length 
      });
      console.log('[QuizProgress] Saving session state at index:', state.currentIndex);
      setSessionState(state);
      await AsyncStorage.setItem(SESSION_STATE_KEY, JSON.stringify(state));
      
      await saveLastSessionInfo(state.category, state.mode);
    } catch (error) {
      console.error('[QuizProgress] Error saving session state:', error);
      monitoring.logError(error as Error, { context: 'save_session_state' });
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

      if (userId) {
        const currentAllTime = allTimeStats;
        const currentStreak = streakData;
        const today = getTodayDateString();
        const todayEntry = weeklyHistory.find(e => e.date === today);
        
        const promises = [
          upsertUserProgressAsync({
            userId,
            totalQuestionsAnswered: currentAllTime.totalQuestionsAnswered,
            correctAnswers: currentAllTime.totalCorrectAnswers,
            studyTimeSeconds: currentAllTime.totalStudyTimeSeconds + seconds,
            currentStreak: currentStreak.currentStreak,
            longestStreak: currentStreak.longestStreak,
            lastActivityDate: currentStreak.lastActiveDate || null,
          })
        ];

        if (todayEntry) {
          promises.push(
            upsertDailyProgressAsync({
              userId,
              date: today,
              questionsAnswered: todayEntry.questionsAnswered,
              correctAnswers: todayEntry.correctAnswers,
              studyTimeSeconds: todayEntry.studyTimeSeconds + seconds,
            })
          );
        }

        Promise.all(promises).then(() => {
          console.log('[QuizProgress] Study time synced to Supabase');
          checkAndGrantAchievements();
        }).catch(error => {
          console.error('[QuizProgress] Error syncing study time to Supabase:', error);
        });
      }
    } catch (error) {
      console.error('[QuizProgress] Error adding study time:', error);
    }
  }, [updateWeeklyHistory, userId, allTimeStats, streakData, weeklyHistory, upsertUserProgressAsync, upsertDailyProgressAsync, checkAndGrantAchievements]);

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
