import { useEffect, useState, useCallback, useRef } from 'react';
import { Session, User, AuthError } from '@supabase/supabase-js';
import AsyncStorage from '@react-native-async-storage/async-storage';
import createContextHook from '@nkzw/create-context-hook';
import { supabase } from '@/lib/supabase';
import { useUserProfile } from '@/lib/supabase-hooks';
import { AppState } from 'react-native';

import type { UserProfile } from '@/types/user';

const ONBOARDING_COMPLETE_KEY = '@medvba_onboarding_complete';

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
  const { data: userProfile } = useUserProfile(user?.id);
  const lastPresenceAtRef = useRef(0);
  const lastIsPublicRef = useRef<boolean | null>(null);

  const ensureUserExists = useCallback(async (userId: string, email: string | undefined, name: string | undefined, mounted: { current: boolean }) => {
    try {
      if (!mounted.current) return;
      console.log('[Auth] Checking if profile exists for user:', userId);
      const { data: existingProfile } = await supabase
        .from('profiles')
        .select('id')
        .eq('id', userId)
        .single();

      if (!mounted.current) return;
      if (!existingProfile) {
        console.log('[Auth] Profile not found, creating...');
        await supabase.from('profiles').insert({
          id: userId,
          name: name || 'Student',
          avatar: `https://api.dicebear.com/7.x/avataaars/png?seed=${userId}`,
        });
        if (mounted.current) {
          console.log('[Auth] Profile created');
        }
      }
    } catch (error) {
      if (!mounted.current) return;
      if (error instanceof Error && error.message.includes('signal is aborted')) {
        return;
      }
      console.error('[Auth] Error ensuring profile exists:', error);
    }
  }, []);

  const fetchProfile = useCallback(async (userId: string, email: string | undefined, mounted: { current: boolean }) => {
    await ensureUserExists(userId, email, undefined, mounted);

    try {
      if (!mounted.current) return;
      console.log('[Auth] Fetching profile for user:', userId);
      const { data: result, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', userId)
        .single();

      if (!mounted.current) return;
      if (error) throw error;

      if (result) {
        const { data: progressData } = await supabase
          .from('user_progress')
          .select('*')
          .eq('user_id', userId)
          .single();

        if (!mounted.current) return;

        const userProfile: UserProfile = {
          id: result.id,
          name: result.name || 'Student',
          avatar: result.avatar || `https://api.dicebear.com/7.x/avataaars/png?seed=${userId}`,
          rank: 0,
          points: progressData?.total_questions_answered || 0,
          streak: progressData?.current_streak || 0,
          questionsAnswered: progressData?.total_questions_answered || 0,
          accuracy: progressData?.correct_answers && progressData?.total_questions_answered 
            ? (progressData.correct_answers / progressData.total_questions_answered) * 100 
            : 0,
          studyHours: progressData?.study_time_seconds 
            ? Number((progressData.study_time_seconds / 3600).toFixed(1)) 
            : 0,
          badges: [],
          joinedAt: result.created_at || new Date().toISOString(),
          isPublic: result.is_public ?? true,
        };
        setProfile(userProfile);
        console.log('[Auth] Profile fetched successfully:', userProfile.name);
      }
    } catch (error) {
      if (!mounted.current) return;
      if (error instanceof Error && error.message.includes('signal is aborted')) {
        return;
      }
      console.log('[Auth] Using default profile for user:', userId);
      
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
        isPublic: true,
      });
    }
  }, [ensureUserExists]);

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
    const mountedRef = { current: true };
    const AUTH_INIT_TIMEOUT_MS = 15000; // 15s max wait so app never stays stuck on splash

    const initializeAuth = async () => {
      try {
        await checkOnboardingStatus();

        if (!mountedRef.current) return;

        const sessionPromise = supabase.auth.getSession();
        const timeoutPromise = new Promise<{ data: { session: null } }>((resolve) =>
          setTimeout(() => resolve({ data: { session: null } }), AUTH_INIT_TIMEOUT_MS)
        );
        const { data: { session: currentSession } } = await Promise.race([
          sessionPromise,
          timeoutPromise,
        ]);
        if (!mountedRef.current) return;
        
        setSession(currentSession);
        setUser(currentSession?.user ?? null);
        
        if (currentSession?.user) {
          await fetchProfile(currentSession.user.id, currentSession.user.email, mountedRef);
        }
        
        if (mountedRef.current) {
          setIsLoading(false);
          console.log('[Auth] Auth initialized, session:', !!currentSession);
        }
      } catch (error) {
        if (!mountedRef.current) return;
        if (error instanceof Error && error.message.includes('signal is aborted')) {
          return;
        }
        if (error instanceof Error && error.message === 'Auth init timeout') {
          if (mountedRef.current) setIsLoading(false);
          return;
        }
        console.error('[Auth] Error initializing auth:', error);
        if (mountedRef.current) {
          setIsLoading(false);
        }
      }
    };

    initializeAuth();

    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, newSession) => {
      console.log('[Auth] Auth state changed:', event);
      
      if (!mountedRef.current) return;
      
      setSession(newSession);
      setUser(newSession?.user ?? null);
      
      if (newSession?.user) {
        try {
          await fetchProfile(newSession.user.id, newSession.user.email, mountedRef);
        } catch (error) {
          if (!mountedRef.current) return;
          if (error instanceof Error && error.message.includes('signal is aborted')) {
            return;
          }
          console.error('[Auth] Error fetching profile on auth state change:', error);
        }
      } else {
        setProfile(null);
      }
    });

    return () => {
      mountedRef.current = false;
      subscription.unsubscribe();
    };
  }, [fetchProfile, checkOnboardingStatus]);

  const signUp = useCallback(async (email: string, password: string, name: string) => {
    try {
      console.log('[Auth] Signing up user:', email);
      
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            name,
          },
        },
      });

      if (error) {
        console.error('[Auth] Sign up error:', error.message);
        return { error };
      }

      console.log('[Auth] User created successfully');

      return { error: null };
    } catch (error) {
      console.error('[Auth] Unexpected sign up error:', error);
      return { error: error as AuthError };
    }
  }, []);

  const signIn = useCallback(async (email: string, password: string) => {
    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        console.error('[Auth] Sign in error:', error.message);
      }

      return { error };
    } catch (error) {
      console.error('[Auth] Unexpected sign in error:', error);
      return { error: error as AuthError };
    }
  }, []);

  const signOut = useCallback(async () => {
    try {
      await supabase.auth.signOut();
      setProfile(null);
      console.log('[Auth] Signed out');
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
      const mountedRef = { current: true };
      await fetchProfile(user.id, user.email, mountedRef);
    }
  }, [user, fetchProfile]);

  useEffect(() => {
    if (!user?.id) return;

    const shouldPublishPresence = userProfile?.is_public !== false;
    const PRESENCE_THROTTLE_MS = 5 * 60 * 1000; // 5 minutes

    const updatePresence = async (force = false) => {
      if (!shouldPublishPresence) return;

      const now = Date.now();
      if (!force && now - lastPresenceAtRef.current < PRESENCE_THROTTLE_MS) {
        return;
      }

      try {
        await supabase
          .from('user_presence')
          .upsert({
            user_id: user.id,
            last_seen: new Date().toISOString(),
          }, { onConflict: 'user_id' });
        lastPresenceAtRef.current = now;
        console.log('[Auth] Presence updated');
      } catch (error) {
        console.error('[Auth] Error updating presence:', error);
      }
    };

    const wasPublic = lastIsPublicRef.current;
    lastIsPublicRef.current = shouldPublishPresence;
    if (shouldPublishPresence && wasPublic === false) {
      updatePresence(true);
    } else if (shouldPublishPresence && wasPublic === null) {
      updatePresence(true);
    } else {
      updatePresence();
    }

    const presenceInterval = setInterval(updatePresence, PRESENCE_THROTTLE_MS);

    const subscription = AppState.addEventListener('change', (nextAppState) => {
      if (nextAppState === 'active') {
        updatePresence(true);
      }
    });

    return () => {
      clearInterval(presenceInterval);
      subscription.remove();
    };
  }, [user?.id, userProfile?.is_public]);

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
