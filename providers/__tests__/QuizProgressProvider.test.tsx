import React from 'react';
import { renderHook, waitFor, act } from '@testing-library/react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { QuizProgressProvider, useQuizProgress } from '../QuizProgressProvider';
import type { Question } from '@/mocks/questions';

const wrapper = ({ children }: { children: React.ReactNode }) => (
  <QuizProgressProvider>{children}</QuizProgressProvider>
);

const mockQuestion: Question = {
  id: 'q1',
  question: 'Test question?',
  options: ['A', 'B', 'C', 'D'],
  correctAnswer: 0,
  explanation: 'Test explanation',
  difficulty: 'medium',
  category: 'anatomy',
};

describe('QuizProgressProvider', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    (AsyncStorage.getItem as jest.Mock).mockResolvedValue(null);
    (AsyncStorage.setItem as jest.Mock).mockResolvedValue(undefined);
    (AsyncStorage.removeItem as jest.Mock).mockResolvedValue(undefined);
  });

  describe('Daily Progress', () => {
    it('should initialize with default daily progress', async () => {
      const { result } = renderHook(() => useQuizProgress(), { wrapper });

      await waitFor(() => {
        expect(result.current.isLoading).toBe(false);
      });

      expect(result.current.dailyProgress.questionsAnswered).toBe(0);
      expect(result.current.dailyProgress.correctAnswers).toBe(0);
      expect(result.current.dailyProgress.goal).toBe(50);
    });

    it('should update daily progress correctly', async () => {
      const { result } = renderHook(() => useQuizProgress(), { wrapper });

      await waitFor(() => {
        expect(result.current.isLoading).toBe(false);
      });

      await act(async () => {
        await result.current.updateDailyProgress(true, 'q1');
      });

      await waitFor(() => {
        expect(result.current.dailyProgress.questionsAnswered).toBe(1);
        expect(result.current.dailyProgress.correctAnswers).toBe(1);
      });
    });

    it('should not count same question twice', async () => {
      const { result } = renderHook(() => useQuizProgress(), { wrapper });

      await waitFor(() => {
        expect(result.current.isLoading).toBe(false);
      });

      await act(async () => {
        await result.current.updateDailyProgress(true, 'q1');
      });

      await waitFor(() => {
        expect(result.current.dailyProgress.questionsAnswered).toBe(1);
      });

      await act(async () => {
        await result.current.updateDailyProgress(false, 'q1');
      });

      await waitFor(() => {
        expect(result.current.dailyProgress.questionsAnswered).toBe(1);
      });
    });

    it('should track incorrect answers', async () => {
      const { result } = renderHook(() => useQuizProgress(), { wrapper });

      await waitFor(() => {
        expect(result.current.isLoading).toBe(false);
      });

      await act(async () => {
        await result.current.updateDailyProgress(false, 'q1');
      });

      await waitFor(() => {
        expect(result.current.dailyProgress.questionsAnswered).toBe(1);
        expect(result.current.dailyProgress.correctAnswers).toBe(0);
      });
    });
  });

  describe('All Time Stats', () => {
    it('should calculate accuracy correctly', async () => {
      const { result } = renderHook(() => useQuizProgress(), { wrapper });

      await waitFor(() => {
        expect(result.current.isLoading).toBe(false);
      });

      await act(async () => {
        await result.current.updateDailyProgress(true, 'q1');
        await result.current.updateDailyProgress(true, 'q2');
        await result.current.updateDailyProgress(false, 'q3');
        await result.current.updateDailyProgress(false, 'q4');
      });

      await waitFor(() => {
        expect(result.current.allTimeStats.totalQuestionsAnswered).toBe(4);
        expect(result.current.allTimeStats.totalCorrectAnswers).toBe(2);
        expect(result.current.accuracy).toBe(50);
      });
    });

    it('should format questions count correctly', async () => {
      const { result } = renderHook(() => useQuizProgress(), { wrapper });

      await waitFor(() => {
        expect(result.current.isLoading).toBe(false);
      });

      const storedStats = JSON.stringify({
        totalQuestionsAnswered: 1500,
        totalCorrectAnswers: 1200,
        totalStudyTimeSeconds: 3600,
      });

      (AsyncStorage.getItem as jest.Mock).mockImplementation((key) => {
        if (key === 'quiz_all_time_stats') {
          return Promise.resolve(storedStats);
        }
        return Promise.resolve(null);
      });

      const { result: result2 } = renderHook(() => useQuizProgress(), { wrapper });

      await waitFor(() => {
        expect(result2.current.isLoading).toBe(false);
      });

      await waitFor(() => {
        expect(result2.current.formattedQuestionsCount).toBe('1.5k');
      });
    });
  });

  describe('Session State', () => {
    it('should save session state', async () => {
      const { result } = renderHook(() => useQuizProgress(), { wrapper });

      await waitFor(() => {
        expect(result.current.isLoading).toBe(false);
      });

      const sessionState = {
        category: 'anatomy',
        mode: 'study',
        questions: [mockQuestion],
        currentIndex: 0,
        score: 0,
        answeredInSession: [],
        startedAt: new Date().toISOString(),
      };

      await act(async () => {
        await result.current.saveSessionState(sessionState);
      });

      expect(AsyncStorage.setItem).toHaveBeenCalledWith(
        'quiz_session_state',
        expect.any(String)
      );
    });

    it('should clear session state', async () => {
      const { result } = renderHook(() => useQuizProgress(), { wrapper });

      await waitFor(() => {
        expect(result.current.isLoading).toBe(false);
      });

      await act(async () => {
        await result.current.clearSessionState();
      });

      expect(AsyncStorage.removeItem).toHaveBeenCalledWith('quiz_session_state');
      expect(result.current.sessionState).toBeNull();
    });

    it('should detect active session', async () => {
      const sessionState = {
        category: 'anatomy',
        mode: 'study',
        questions: [mockQuestion, mockQuestion],
        currentIndex: 0,
        score: 0,
        answeredInSession: [],
        startedAt: new Date().toISOString(),
      };

      const storedSession = JSON.stringify(sessionState);

      (AsyncStorage.getItem as jest.Mock).mockImplementation((key) => {
        if (key === 'quiz_session_state') {
          return Promise.resolve(storedSession);
        }
        return Promise.resolve(null);
      });

      const { result } = renderHook(() => useQuizProgress(), { wrapper });

      await waitFor(() => {
        expect(result.current.isLoading).toBe(false);
      });

      await waitFor(() => {
        expect(result.current.hasActiveSession).toBe(true);
      });
    });
  });

  describe('Streak Tracking', () => {
    it('should update streak when answering questions', async () => {
      const { result } = renderHook(() => useQuizProgress(), { wrapper });

      await waitFor(() => {
        expect(result.current.isLoading).toBe(false);
      });

      await act(async () => {
        await result.current.updateDailyProgress(true, 'q1');
      });

      await waitFor(() => {
        expect(result.current.streakData.currentStreak).toBeGreaterThan(0);
      });
    });
  });

  describe('Study Time', () => {
    it('should add study time correctly', async () => {
      const { result } = renderHook(() => useQuizProgress(), { wrapper });

      await waitFor(() => {
        expect(result.current.isLoading).toBe(false);
      });

      await act(async () => {
        await result.current.addStudyTime(300);
      });

      await waitFor(() => {
        expect(result.current.allTimeStats.totalStudyTimeSeconds).toBe(300);
      });
    });

    it('should format study time correctly', async () => {
      const storedStats = JSON.stringify({
        totalQuestionsAnswered: 100,
        totalCorrectAnswers: 80,
        totalStudyTimeSeconds: 7200,
      });

      (AsyncStorage.getItem as jest.Mock).mockImplementation((key) => {
        if (key === 'quiz_all_time_stats') {
          return Promise.resolve(storedStats);
        }
        return Promise.resolve(null);
      });

      const { result } = renderHook(() => useQuizProgress(), { wrapper });

      await waitFor(() => {
        expect(result.current.isLoading).toBe(false);
      });

      await waitFor(() => {
        expect(result.current.formattedStudyTime).toBe('2h');
      });
    });
  });

  describe('Weekly Progress', () => {
    it('should calculate weekly goal progress', async () => {
      const weeklyHistory = [
        {
          date: new Date().toISOString().split('T')[0],
          questionsAnswered: 50,
          correctAnswers: 40,
          studyTimeSeconds: 1800,
        },
      ];

      (AsyncStorage.getItem as jest.Mock).mockImplementation((key) => {
        if (key === 'quiz_weekly_history') {
          return Promise.resolve(JSON.stringify(weeklyHistory));
        }
        return Promise.resolve(null);
      });

      const { result } = renderHook(() => useQuizProgress(), { wrapper });

      await waitFor(() => {
        expect(result.current.isLoading).toBe(false);
      });

      await waitFor(() => {
        expect(result.current.weeklyQuestionsTotal).toBe(50);
        expect(result.current.weeklyGoalProgress).toBeGreaterThan(0);
      });
    });
  });
});
