import React from 'react';
import { renderHook, waitFor, act } from '@testing-library/react-native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthProvider, useAuth } from '../AuthProvider';
import { supabase } from '@/lib/supabase';


const wrapper = ({ children }: { children: React.ReactNode }) => (
  <QueryClientProvider client={new QueryClient()}>
    <AuthProvider>{children}</AuthProvider>
  </QueryClientProvider>
);

describe('AuthProvider', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    (AsyncStorage.getItem as jest.Mock).mockResolvedValue(null);
    (supabase.auth.getSession as jest.Mock).mockResolvedValue({
      data: { session: null },
    });
  });

  describe('Authentication State', () => {
    it('should initialize with loading state', () => {
      const { result } = renderHook(() => useAuth(), { wrapper });
      expect(result.current.isLoading).toBe(true);
    });

    it('should set isAuthenticated to false when no session', async () => {
      const { result } = renderHook(() => useAuth(), { wrapper });

      await waitFor(() => {
        expect(result.current.isLoading).toBe(false);
      });

      expect(result.current.isAuthenticated).toBe(false);
      expect(result.current.session).toBeNull();
      expect(result.current.user).toBeNull();
    });

    it('should set isAuthenticated to true when session exists', async () => {
      const mockUser = {
        id: 'user-123',
        email: 'test@example.com',
      };

      (supabase.auth.getSession as jest.Mock).mockResolvedValue({
        data: { session: { user: mockUser } },
      });

      (supabase.from as jest.Mock).mockReturnValue({
        select: jest.fn().mockReturnValue({
          eq: jest.fn().mockReturnValue({
            single: jest.fn().mockResolvedValue({
              data: {
                id: 'user-123',
                name: 'Test User',
                avatar: 'https://example.com/avatar.png',
                rank: 1,
                points: 100,
                streak: 5,
                questions_answered: 50,
                accuracy: 85,
                study_hours: 10,
                badges: ['badge1'],
                joined_at: '2024-01-01',
              },
              error: null,
            }),
          }),
        }),
      });

      const { result } = renderHook(() => useAuth(), { wrapper });

      await waitFor(() => {
        expect(result.current.isLoading).toBe(false);
      });

      expect(result.current.isAuthenticated).toBe(true);
      expect(result.current.user?.id).toBe('user-123');
      expect(result.current.profile?.name).toBe('Test User');
    });
  });

  describe('Sign Up', () => {
    it('should successfully sign up a new user', async () => {
      const mockUser = {
        id: 'new-user-123',
        email: 'newuser@example.com',
      };

      (supabase.auth.signUp as jest.Mock).mockResolvedValue({
        data: { user: mockUser, session: null },
        error: null,
      });

      (supabase.from as jest.Mock).mockReturnValue({
        insert: jest.fn().mockResolvedValue({ error: null }),
      });

      const { result } = renderHook(() => useAuth(), { wrapper });

      await waitFor(() => {
        expect(result.current.isLoading).toBe(false);
      });

      const response = await result.current.signUp(
        'newuser@example.com',
        'password123',
        'New User'
      );

      expect(response.error).toBeNull();
      expect(response.session).toBeNull();
      expect(supabase.auth.signUp).toHaveBeenCalledWith({
        email: 'newuser@example.com',
        password: 'password123',
        options: {
          data: {
            name: 'New User',
          },
        },
      });
    });

    it('should handle sign up errors', async () => {
      const mockError = { message: 'Email already exists' };

      (supabase.auth.signUp as jest.Mock).mockResolvedValue({
        data: { user: null },
        error: mockError,
      });

      const { result } = renderHook(() => useAuth(), { wrapper });

      await waitFor(() => {
        expect(result.current.isLoading).toBe(false);
      });

      const response = await result.current.signUp(
        'existing@example.com',
        'password123',
        'User'
      );

      expect(response.error).toEqual(mockError);
      expect(response.session).toBeNull();
    });
  });

  describe('Sign In', () => {
    it('should successfully sign in a user', async () => {
      (supabase.auth.signInWithPassword as jest.Mock).mockResolvedValue({
        error: null,
      });

      const { result } = renderHook(() => useAuth(), { wrapper });

      await waitFor(() => {
        expect(result.current.isLoading).toBe(false);
      });

      const response = await result.current.signIn(
        'user@example.com',
        'password123'
      );

      expect(response.error).toBeNull();
      expect(supabase.auth.signInWithPassword).toHaveBeenCalledWith({
        email: 'user@example.com',
        password: 'password123',
      });
    });

    it('should handle sign in errors', async () => {
      const mockError = { message: 'Invalid credentials' };

      (supabase.auth.signInWithPassword as jest.Mock).mockResolvedValue({
        error: mockError,
      });

      const { result } = renderHook(() => useAuth(), { wrapper });

      await waitFor(() => {
        expect(result.current.isLoading).toBe(false);
      });

      const response = await result.current.signIn(
        'user@example.com',
        'wrongpassword'
      );

      expect(response.error).toEqual(mockError);
    });
  });

  describe('Sign Out', () => {
    it('should successfully sign out a user', async () => {
      (supabase.auth.signOut as jest.Mock).mockResolvedValue({ error: null });

      const { result } = renderHook(() => useAuth(), { wrapper });

      await waitFor(() => {
        expect(result.current.isLoading).toBe(false);
      });

      await result.current.signOut();

      expect(supabase.auth.signOut).toHaveBeenCalledWith({ scope: 'global' });
      expect(result.current.profile).toBeNull();
      expect(result.current.session).toBeNull();
      expect(result.current.user).toBeNull();
    });
  });

  describe('Onboarding', () => {
    it('should check onboarding status on init', async () => {
      (AsyncStorage.getItem as jest.Mock).mockImplementation((key) => {
        if (key === '@medvba_onboarding_complete') {
          return Promise.resolve('true');
        }
        return Promise.resolve(null);
      });

      const { result } = renderHook(() => useAuth(), { wrapper });

      await waitFor(() => {
        expect(result.current.isLoading).toBe(false);
      });

      expect(result.current.hasCompletedOnboarding).toBe(true);
    });

    it('should complete onboarding', async () => {
      (AsyncStorage.setItem as jest.Mock).mockResolvedValue(undefined);

      const { result } = renderHook(() => useAuth(), { wrapper });

      await waitFor(() => {
        expect(result.current.isLoading).toBe(false);
      });

      await act(async () => {
        await result.current.completeOnboarding();
      });

      expect(AsyncStorage.setItem).toHaveBeenCalledWith(
        '@medvba_onboarding_complete',
        'true'
      );
      expect(result.current.hasCompletedOnboarding).toBe(true);
    });

    it('should reset onboarding', async () => {
      (AsyncStorage.setItem as jest.Mock).mockResolvedValue(undefined);
      (AsyncStorage.removeItem as jest.Mock).mockResolvedValue(undefined);

      const { result } = renderHook(() => useAuth(), { wrapper });

      await waitFor(() => {
        expect(result.current.isLoading).toBe(false);
      });

      await act(async () => {
        await result.current.completeOnboarding();
      });
      expect(result.current.hasCompletedOnboarding).toBe(true);

      await act(async () => {
        await result.current.resetOnboarding();
      });

      expect(AsyncStorage.removeItem).toHaveBeenCalledWith('@medvba_onboarding_complete');
      expect(result.current.hasCompletedOnboarding).toBe(false);
    });
  });

  describe('Password Reset', () => {
    it('should send password reset email', async () => {
      (supabase.auth.resetPasswordForEmail as jest.Mock).mockResolvedValue({
        error: null,
      });

      const { result } = renderHook(() => useAuth(), { wrapper });

      await waitFor(() => {
        expect(result.current.isLoading).toBe(false);
      });

      const response = await result.current.resetPassword('user@example.com');

      expect(response.error).toBeNull();
      expect(supabase.auth.resetPasswordForEmail).toHaveBeenCalledWith(
        'user@example.com',
        expect.objectContaining({
          redirectTo: expect.any(String),
        })
      );
    });
  });
});
