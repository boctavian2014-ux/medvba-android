import { useEffect, useState, useCallback } from 'react';
import { Session, User, AuthError } from '@supabase/supabase-js';
import AsyncStorage from '@react-native-async-storage/async-storage';
import createContextHook from '@nkzw/create-context-hook';
import { supabase } from '@/lib/supabase';
import { trpcClient } from '@/lib/trpc';

const ONBOARDING_COMPLETE_KEY = '@medix_onboarding_complete';

export interface UserProfile {
  id: string;
  name: string;
  avatar: string;
  rank: number;
  points: number;
  streak: number;
  questionsAnswered: number;
  accuracy: number;
  studyHours: number;
  badges: string[];
  joinedAt: string;
}

interface AuthState {
  session: Session | null;
  user: User | null;
  profile: UserProfile | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  hasCompletedOnboarding: boolean;
}

interface AuthActions {
  signUp: (email: string, password: string, name: string) => Promise<{ error: AuthError | null }>;
  signIn: (email: string, password: string) => Promise<{ error: AuthError | null }>;
  signOut: () => Promise<void>;
  resetPassword: (email: string) => Promise<{ error: AuthError | null }>;
  completeOnboarding: () => Promise<void>;
  refreshProfile: () => Promise<void>;
}

type AuthContextValue = AuthState & AuthActions;

export const [AuthProvider, useAuth] = createContextHook<AuthContextValue>(() => {
  const [session, setSession] = useState<Session | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasCompletedOnboarding, setHasCompletedOnboarding] = useState(false);

  const fetchProfile = useCallback(async (userId: string) => {
    try {
      console.log('[Auth] Fetching profile for user:', userId);
      const result = await trpcClient.users.me.query({ userId });
      if (result) {
        const userProfile: UserProfile = {
          id: result.id,
          name: result.name,
          avatar: result.avatar,
          rank: result.rank,
          points: result.points,
          streak: result.streak,
          questionsAnswered: result.questionsAnswered,
          accuracy: Number(result.accuracy),
          studyHours: Number(result.studyHours),
          badges: result.badges,
          joinedAt: result.joinedDate || new Date().toISOString(),
        };
        setProfile(userProfile);
        console.log('[Auth] Profile fetched successfully:', userProfile.name);
      }
    } catch (error: any) {
      const errorMessage = error?.message || String(error);
      const isNetworkError = 
        errorMessage.includes('ENOTFOUND') || 
        errorMessage.includes('network') ||
        errorMessage.includes('getaddrinfo') ||
        errorMessage.includes('fetch failed') ||
        errorMessage.includes('NetworkError');
      
      if (isNetworkError) {
        console.log('[Auth] Database unavailable - using offline profile');
      } else {
        console.warn('[Auth] Error fetching profile:', errorMessage);
      }
      
      setProfile({
        id: userId,
        name: 'Student',
        avatar: `https://api.dicebear.com/7.x/avataaars/png?seed=${userId}`,
        rank: 0,
        points: 0,
        streak: 0,
        questionsAnswered: 0,
        accuracy: 0,
        studyHours: 0,
        badges: [],
        joinedAt: new Date().toISOString(),
      });
    }
  }, []);

  const checkOnboardingStatus = useCallback(async () => {
    try {
      const completed = await AsyncStorage.getItem(ONBOARDING_COMPLETE_KEY);
      setHasCompletedOnboarding(completed === 'true');
      console.log('[Auth] Onboarding status:', completed === 'true');
    } catch (error) {
      console.error('[Auth] Error checking onboarding status:', error);
    }
  }, []);

  useEffect(() => {
    let mounted = true;

    const initializeAuth = async () => {
      try {
        console.log('[Auth] Initializing auth...');
        
        await checkOnboardingStatus();

        const { data: { session: currentSession } } = await supabase.auth.getSession();
        
        if (mounted) {
          setSession(currentSession);
          setUser(currentSession?.user ?? null);
          
          if (currentSession?.user) {
            await fetchProfile(currentSession.user.id);
          }
          
          setIsLoading(false);
          console.log('[Auth] Auth initialized, session:', !!currentSession);
        }
      } catch (error) {
        console.error('[Auth] Error initializing auth:', error);
        if (mounted) {
          setIsLoading(false);
        }
      }
    };

    initializeAuth();

    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, newSession) => {
      console.log('[Auth] Auth state changed:', event);
      
      if (mounted) {
        setSession(newSession);
        setUser(newSession?.user ?? null);
        
        if (newSession?.user) {
          await fetchProfile(newSession.user.id);
        } else {
          setProfile(null);
        }
      }
    });

    return () => {
      mounted = false;
      subscription.unsubscribe();
    };
  }, [fetchProfile, checkOnboardingStatus]);

  const signUp = useCallback(async (email: string, password: string, name: string) => {
    try {
      console.log('[Auth] Signing up user:', email);
      
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            name,
          },
        },
      });

      if (error) {
        console.error('[Auth] Sign up error:', error);
        return { error };
      }

      if (data.user) {
        try {
          console.log('[Auth] Creating user profile...');
          await trpcClient.users.create.mutate({
            id: data.user.id,
            name,
            avatar: `https://api.dicebear.com/7.x/avataaars/png?seed=${data.user.id}`,
          });
          console.log('[Auth] User profile created successfully');
        } catch (profileError) {
          console.error('[Auth] Error creating profile:', profileError);
        }
      }

      return { error: null };
    } catch (error) {
      console.error('[Auth] Unexpected sign up error:', error);
      return { error: error as AuthError };
    }
  }, []);

  const signIn = useCallback(async (email: string, password: string) => {
    try {
      console.log('[Auth] Signing in user:', email);
      
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        console.error('[Auth] Sign in error:', error);
      }

      return { error };
    } catch (error) {
      console.error('[Auth] Unexpected sign in error:', error);
      return { error: error as AuthError };
    }
  }, []);

  const signOut = useCallback(async () => {
    try {
      console.log('[Auth] Signing out...');
      await supabase.auth.signOut();
      setProfile(null);
      console.log('[Auth] Signed out successfully');
    } catch (error) {
      console.error('[Auth] Sign out error:', error);
    }
  }, []);

  const resetPassword = useCallback(async (email: string) => {
    try {
      console.log('[Auth] Sending password reset to:', email);
      
      const { error } = await supabase.auth.resetPasswordForEmail(email);
      
      if (error) {
        console.error('[Auth] Password reset error:', error);
      }
      
      return { error };
    } catch (error) {
      console.error('[Auth] Unexpected password reset error:', error);
      return { error: error as AuthError };
    }
  }, []);

  const completeOnboarding = useCallback(async () => {
    try {
      await AsyncStorage.setItem(ONBOARDING_COMPLETE_KEY, 'true');
      setHasCompletedOnboarding(true);
      console.log('[Auth] Onboarding completed');
    } catch (error) {
      console.error('[Auth] Error completing onboarding:', error);
    }
  }, []);

  const refreshProfile = useCallback(async () => {
    if (user) {
      await fetchProfile(user.id);
    }
  }, [user, fetchProfile]);

  return {
    session,
    user,
    profile,
    isLoading,
    isAuthenticated: !!session,
    hasCompletedOnboarding,
    signUp,
    signIn,
    signOut,
    resetPassword,
    completeOnboarding,
    refreshProfile,
  };
});
