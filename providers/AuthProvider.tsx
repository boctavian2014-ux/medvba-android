import { useEffect, useState, useCallback, useRef } from 'react';
import { Session, User, AuthError } from '@supabase/supabase-js';
import AsyncStorage from '@react-native-async-storage/async-storage';
import createContextHook from '@nkzw/create-context-hook';
import { supabase } from '@/lib/supabase';
import { useUserProfile } from '@/lib/supabase-hooks';
import { AppState, Platform } from 'react-native';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';

import { appleAuth } from '@/lib/appleAuth';

let fbsdk: any = null;
if (Platform.OS !== 'web') {
  try {
    // @ts-ignore
    const fb = require('react-native-fbsdk-next');
    fbsdk = { LoginManager: fb.LoginManager, AccessToken: fb.AccessToken };
  } catch {}
}
import Constants from 'expo-constants';
import { log } from '@/lib/log';

import type { UserProfile } from '@/types/user';

const ONBOARDING_COMPLETE_KEY = '@medvba_onboarding_complete';

/** Return in `AuthError.message` when user closes OAuth; callers should not alert or treat as success. */
export const AUTH_SIGN_IN_CANCELLED = 'SIGN_IN_CANCELLED';

const extraConfig = Constants.expoConfig?.extra ?? {};
const googleIosClientId = process.env.EXPO_PUBLIC_GOOGLE_IOS_CLIENT_ID || extraConfig.EXPO_PUBLIC_GOOGLE_IOS_CLIENT_ID || '';
const googleAndroidClientId = process.env.EXPO_PUBLIC_GOOGLE_ANDROID_CLIENT_ID || extraConfig.EXPO_PUBLIC_GOOGLE_ANDROID_CLIENT_ID || '';
const googleWebClientId = process.env.EXPO_PUBLIC_GOOGLE_WEB_CLIENT_ID || extraConfig.EXPO_PUBLIC_GOOGLE_WEB_CLIENT_ID || googleIosClientId || '';
const facebookAppId = process.env.EXPO_PUBLIC_FACEBOOK_APP_ID || extraConfig.EXPO_PUBLIC_FACEBOOK_APP_ID || '';
const appleClientId = process.env.EXPO_PUBLIC_APPLE_CLIENT_ID || extraConfig.EXPO_PUBLIC_APPLE_CLIENT_ID || '';
const passwordResetRedirectUri = process.env.EXPO_PUBLIC_PASSWORD_RESET_REDIRECT_URI || extraConfig.EXPO_PUBLIC_PASSWORD_RESET_REDIRECT_URI || 'medvba://reset-password';

const isAbortError = (error: unknown): boolean => {
  if (error instanceof Error) {
    return error.message.includes('signal is aborted') || 
           error.message.includes('abort');
  }
  if (error && typeof error === 'object' && 'message' in error) {
    const msg = String((error as { message: unknown }).message);
    return msg.includes('signal is aborted') || msg.includes('abort');
  }
  return false;
};

interface AuthState {
  session: Session | null;
  user: User | null;
  profile: UserProfile | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  hasCompletedOnboarding: boolean;
}

interface AuthActions {
  signUp: (
    email: string,
    password: string,
    name: string
  ) => Promise<{ error: AuthError | null; session: Session | null }>;
  signIn: (email: string, password: string) => Promise<{ error: AuthError | null }>;
  signOut: () => Promise<void>;
  resetPassword: (email: string) => Promise<{ error: AuthError | null }>;
  completeOnboarding: () => Promise<void>;
  refreshProfile: () => Promise<void>;
  /** Merge fields from a profiles row (e.g. Supabase update response) so UI matches DB without waiting on a second fetch. */
  applyServerProfilePatch: (row: {
    profile_photo_url?: string | null;
    avatar?: string | null;
    name?: string | null;
  }) => void;
  signInWithGoogle: () => Promise<{ error: AuthError | null }>;
  signInWithFacebook: () => Promise<{ error: AuthError | null }>;
  signInWithApple: () => Promise<{ error: AuthError | null }>;
  // Social account linking
  linkGoogleAccount: () => Promise<{ error: AuthError | null }>;
  linkFacebookAccount: () => Promise<{ error: AuthError | null }>;
  linkAppleAccount: () => Promise<{ error: AuthError | null }>;
  unlinkGoogleAccount: () => Promise<{ error: AuthError | null }>;
  unlinkFacebookAccount: () => Promise<{ error: AuthError | null }>;
  unlinkAppleAccount: () => Promise<{ error: AuthError | null }>;
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

  const ensureUserExists = useCallback(async (userId: string, email: string | undefined, name: string | undefined, mounted?: { current: boolean }) => {
    try {
      if (mounted && !mounted.current) return;
      log.info('[Auth] Checking if profile exists for user:', userId);
      const { data: existingProfile } = await supabase
        .from('profiles')
        .select('id')
        .eq('id', userId)
        .single();

      if (mounted && !mounted.current) return;
      if (!existingProfile) {
        log.info('[Auth] Profile not found, creating...');
        await supabase.from('profiles').insert({
          id: userId,
          name: name || 'Student',
          avatar: `https://api.dicebear.com/7.x/avataaars/png?seed=${userId}`,
          profile_photo_url: `https://api.dicebear.com/7.x/avataaars/png?seed=${userId}`,
        });
        if (!mounted || mounted.current) {
          log.info('[Auth] Profile created');
        }
      }
    } catch (error) {
      if (isAbortError(error)) return;
      if (mounted && !mounted.current) return;
      log.error('[Auth] Error ensuring profile exists:', error);
    }
  }, []);

  const fetchProfile = useCallback(async (userId: string, email: string | undefined, mounted: { current: boolean }) => {
    await ensureUserExists(userId, email, undefined, mounted);

    try {
      if (!mounted.current) return;
      log.info('[Auth] Fetching profile for user:', userId);
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

        const displayAvatar =
          result.profile_photo_url || result.avatar || `https://api.dicebear.com/7.x/avataaars/png?seed=${userId}`;
        const userProfile: UserProfile = {
          id: result.id,
          name: result.name || 'Student',
          avatar: displayAvatar,
          profile_photo_url: result.profile_photo_url ?? undefined,
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
        log.info('[Auth] Profile fetched successfully:', userProfile.name);
      }
    } catch (error) {
      if (isAbortError(error)) return;
      if (!mounted.current) return;
      log.info('[Auth] Using default profile for user:', userId);
      
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
      log.info('[Auth] Onboarding status:', completed === 'true');
    } catch (error) {
      if (isAbortError(error)) return;
      log.error('[Auth] Error checking onboarding status:', error);
    }
  }, []);

  useEffect(() => {
    const mountedRef = { current: true };
    const AUTH_INIT_TIMEOUT_MS = 15000; // 15s max wait so app never stays stuck on splash
    let authInitTimeout: ReturnType<typeof setTimeout> | null = null;

    const initializeAuth = async () => {
      try {
        await checkOnboardingStatus();

        if (!mountedRef.current) return;

        const sessionPromise = supabase.auth.getSession();
        const timeoutPromise = new Promise<{ data: { session: null } }>((resolve) => {
          authInitTimeout = setTimeout(
            () => resolve({ data: { session: null } }),
            AUTH_INIT_TIMEOUT_MS
          );
        });
        const { data: { session: currentSession } } = await Promise.race([
          sessionPromise,
          timeoutPromise,
        ]);
        if (authInitTimeout) {
          clearTimeout(authInitTimeout);
          authInitTimeout = null;
        }
        if (!mountedRef.current) return;
        
        setSession(currentSession);
        setUser(currentSession?.user ?? null);
        
        if (currentSession?.user) {
          await fetchProfile(currentSession.user.id, currentSession.user.email, mountedRef);
        }
        
        if (mountedRef.current) {
          setIsLoading(false);
          log.info('[Auth] Auth initialized, session:', !!currentSession);
        }
      } catch (error) {
        if (isAbortError(error)) return;
        if (!mountedRef.current) return;
        if (error instanceof Error && error.message === 'Auth init timeout') {
          if (mountedRef.current) setIsLoading(false);
          return;
        }
        log.error('[Auth] Error initializing auth:', error);
        if (mountedRef.current) {
          setIsLoading(false);
        }
      }
    };

    initializeAuth();

    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, newSession) => {
      log.info('[Auth] Auth state changed:', event);
      
      if (!mountedRef.current) return;
      
      setSession(newSession);
      setUser(newSession?.user ?? null);
      
      if (newSession?.user) {
        try {
          await fetchProfile(newSession.user.id, newSession.user.email, mountedRef);
        } catch (error) {
          if (isAbortError(error)) return;
          if (!mountedRef.current) return;
          log.error('[Auth] Error fetching profile on auth state change:', error);
        }
      } else {
        setProfile(null);
      }
    });

    return () => {
      mountedRef.current = false;
      if (authInitTimeout) {
        clearTimeout(authInitTimeout);
        authInitTimeout = null;
      }
      subscription.unsubscribe();
    };
  }, [fetchProfile, checkOnboardingStatus]);

  const signUp = useCallback(async (email: string, password: string, name: string) => {
    try {
      log.info('[Auth] Signing up user:', email);
      
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
        log.error('[Auth] Sign up error:', error.message);
        log.error('[Auth] Sign up error code:', error.code);
        log.error('[Auth] Sign up error status:', error.status);
        return { error, session: null };
      }

      log.info('[Auth] User created in auth.users:', data?.user?.id);

      // Fallback: If user was created but trigger failed, create profile manually
      // This handles cases where the trigger fails due to RLS or other issues
      if (data?.user) {
        try {
          log.info('[Auth] Checking if profile was created by trigger...');
          const { data: existingProfile } = await supabase
            .from('profiles')
            .select('id')
            .eq('id', data.user.id)
            .single();

          if (!existingProfile) {
            log.info('[Auth] Profile not found, creating manually as fallback...');
            const { error: profileError } = await supabase
              .from('profiles')
              .insert({
                id: data.user.id,
                name: name || 'Student',
                avatar: `https://api.dicebear.com/7.x/avataaars/png?seed=${data.user.id}`,
                profile_photo_url: `https://api.dicebear.com/7.x/avataaars/png?seed=${data.user.id}`,
              });

            if (profileError) {
              // Log the error but don't fail signup - the profile will be created on next login
              log.error('[Auth] Fallback profile creation failed:', profileError.message);
              log.error('[Auth] Profile error code:', profileError.code);
              // Note: The error is logged but we return success since auth.user was created
              // The profile will be created on next auth state change
            } else {
              log.info('[Auth] Fallback profile created successfully');
            }
          } else {
            log.info('[Auth] Profile already exists from trigger');
          }
        } catch (profileCheckError) {
          // Log but don't fail - this is just a fallback
          log.error('[Auth] Error checking/creating profile:', profileCheckError);
        }
      }

      log.info('[Auth] Sign up completed successfully');
      return { error: null, session: data.session ?? null };
    } catch (error) {
      log.error('[Auth] Unexpected sign up error:', error);
      return { error: error as AuthError, session: null };
    }
  }, []);

  const signIn = useCallback(async (email: string, password: string) => {
    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        log.error('[Auth] Sign in error:', error.message);
      }

      return { error };
    } catch (error) {
      log.error('[Auth] Unexpected sign in error:', error);
      return { error: error as AuthError };
    }
  }, []);

  const signOut = useCallback(async () => {
    try {
      await supabase.auth.signOut();
      setProfile(null);
      log.info('[Auth] Signed out');
    } catch (error) {
      log.error('[Auth] Sign out error:', error);
    }
  }, []);

  const resetPassword = useCallback(async (email: string) => {
    try {
      log.info('[Auth] Sending password reset to:', email);
      
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: passwordResetRedirectUri,
      });
      
      if (error) {
        log.error('[Auth] Password reset error:', error);
      }
      
      return { error };
    } catch (error) {
      log.error('[Auth] Unexpected password reset error:', error);
      return { error: error as AuthError };
    }
  }, []);

  const completeOnboarding = useCallback(async () => {
    try {
      await AsyncStorage.setItem(ONBOARDING_COMPLETE_KEY, 'true');
      setHasCompletedOnboarding(true);
      log.info('[Auth] Onboarding completed');
    } catch (error) {
      log.error('[Auth] Error completing onboarding:', error);
    }
  }, []);

  const refreshProfile = useCallback(async () => {
    if (user) {
      const mountedRef = { current: true };
      await fetchProfile(user.id, user.email, mountedRef);
    }
  }, [user, fetchProfile]);

  const applyServerProfilePatch = useCallback(
    (row: { profile_photo_url?: string | null; avatar?: string | null; name?: string | null }) => {
      setProfile((prev) => {
        if (!prev) return prev;
        const hasPhotoKey = 'profile_photo_url' in row;
        const nextPhoto = hasPhotoKey
          ? row.profile_photo_url && row.profile_photo_url.length > 0
            ? row.profile_photo_url
            : undefined
          : prev.profile_photo_url;
        const displayAvatar = (nextPhoto || row.avatar || prev.avatar) as string;
        return {
          ...prev,
          ...(typeof row.name === 'string' && row.name.length > 0 ? { name: row.name } : {}),
          avatar: displayAvatar || prev.avatar,
          profile_photo_url: nextPhoto,
        };
      });
    },
    []
  );

    const signInWithGoogle = useCallback(async () => {
      // Google Sign-In is not supported on web (sponsor-only feature)
      if (Platform.OS === 'web') {
        return { error: { message: 'Google Sign-In is not available on web. Please use email login.' } as AuthError };
      }

      if (!googleWebClientId?.trim()) {
        return {
          error: {
            message:
              'Google Sign-In is not configured. Set EXPO_PUBLIC_GOOGLE_WEB_CLIENT_ID (and platform client IDs) in .env or EAS secrets.',
          } as AuthError,
        };
      }

      try {
        GoogleSignin.configure({
          webClientId: googleWebClientId,
          ...(Platform.OS === 'android' && googleAndroidClientId ? { androidClientId: googleAndroidClientId } : {}),
          ...(Platform.OS === 'ios' && googleIosClientId ? { iosClientId: googleIosClientId } : {}),
        });
        
        // Check if play services are available (Android)
        if (Platform.OS === 'android') {
          const hasPlayServices = await GoogleSignin.hasPlayServices();
          if (!hasPlayServices) {
            return { error: { message: 'Google Play Services not available' } as AuthError };
          }
        }
        
        const result = await GoogleSignin.signIn();
        
        // In v16+, the result has data property
        const userInfo = (result as any).data ?? result;
        const idToken = userInfo.idToken ?? (result as any).idToken;
        
        if (!idToken) {
          log.error('[Auth] Google Sign-In failed: no idToken returned');
          return { error: { message: 'Google Sign-In failed: no idToken returned. Check your Google OAuth client IDs.' } as AuthError };
        }
        
        const googleUser = userInfo.user ?? (result as any).user;
        
        const { data: { user: supabaseUser }, error } = await supabase.auth.signInWithIdToken({
          provider: 'google',
          token: idToken,
        });
        if (error) {
          log.error('[Auth] Supabase signInWithIdToken error:', error.message);
          return { error };
        }
        
        if (!supabaseUser) {
          return { error: { message: 'Google Sign-In succeeded but Supabase did not return a user.' } as AuthError };
        }
        
        // Ensure profile exists and update with Google ID
        await ensureUserExists(
          supabaseUser.id,
          supabaseUser.email ?? googleUser?.email,
          supabaseUser.user_metadata?.name ?? googleUser?.name ?? googleUser?.photo?.split('/').pop() ?? 'User'
        );
        
        // Update profile with Google ID
        await supabase
          .from('profiles')
          .update({ googleId: googleUser?.id })
          .eq('id', supabaseUser.id);
        
        return { error: null };
      } catch (error: any) {
        const code = error?.code;
        if (
          code === statusCodes.SIGN_IN_CANCELLED ||
          code === '12501' ||
          (typeof error?.message === 'string' && /cancel/i.test(error.message))
        ) {
          return { error: { message: AUTH_SIGN_IN_CANCELLED } as AuthError };
        }
        log.error('[Auth] Google Sign-In error:', error?.message || error);
        return { error: { message: error?.message || 'Google Sign-In failed' } as AuthError };
      }
    }, [ensureUserExists, googleWebClientId, googleAndroidClientId, googleIosClientId]);

    const signInWithFacebook = useCallback(async () => {
      try {
        if (!fbsdk) {
          return { error: { message: 'Facebook Sign-In is not available on this platform' } as AuthError };
        }
        const { LoginManager, AccessToken } = fbsdk;
        const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);
        if (result.isCancelled) {
          return { error: { message: AUTH_SIGN_IN_CANCELLED } as AuthError };
        }

        const data = await AccessToken.getCurrentAccessToken();
        const accessToken = data?.accessToken;

        if (!accessToken) {
          return {
            error: { message: 'Facebook login did not return an access token' } as AuthError,
          };
        }
        
        // Get Facebook user info
        const facebookResponse = await fetch(`https://graph.facebook.com/me?fields=id,name,email,picture&access_token=${accessToken}`);
        const facebookUser = await facebookResponse.json();

        if (facebookUser.error) {
          return {
            error: {
              message: facebookUser.error.message || 'Failed to get Facebook user info',
            } as AuthError,
          };
        }

        if (!facebookUser.id) {
          return { error: { message: 'Facebook Sign-In did not return a user ID' } as AuthError };
        }

        const { data: { user: supabaseUser }, error } = await supabase.auth.signInWithIdToken({
          provider: 'facebook',
          token: accessToken,
        });
        if (error) {
          return { error };
        }
        
        if (!supabaseUser) {
          return { error: { message: 'Facebook Sign-In succeeded but Supabase did not return a user.' } as AuthError };
        }
        
        // Ensure profile exists and update with Facebook ID
        await ensureUserExists(
          supabaseUser.id,
          supabaseUser.email ?? facebookUser.email,
          supabaseUser.user_metadata?.name ?? facebookUser.name ?? 'User'
        );
        
        // Update profile with Facebook ID
        await supabase
          .from('profiles')
          .update({ facebookId: facebookUser.id })
          .eq('id', supabaseUser.id);
        
        return { error: null };
      } catch (error) {
        log.error('[Auth] Facebook sign in error:', error);
        return { error: error as AuthError };
      }
    }, [ensureUserExists]);

    const signInWithApple = useCallback(async () => {
      try {
        if (!appleAuth || !appleAuth.isSupported) {
          return { error: { message: 'Apple Sign-In is not available on this device' } as AuthError };
        }
        
        const requestOptions = {
          requestedScopes: [appleAuth.Scope.FULL_NAME, appleAuth.Scope.EMAIL],
        };
        
        const response = await appleAuth.performRequest(requestOptions);
        
        if (response.identityToken) {
          const { data: { user: supabaseUser }, error } = await supabase.auth.signInWithIdToken({
            provider: 'apple',
            token: response.identityToken,
            nonce: response.nonce,
          });
          if (error) {
            return { error };
          }
          
          if (!supabaseUser) {
            return { error: { message: 'Apple Sign-In succeeded but Supabase did not return a user.' } as AuthError };
          }
          
          // Ensure profile exists and update with Apple ID
          const nameFromMetadata = supabaseUser.user_metadata?.name;
          const nameFromResponse = `${response.fullName?.givenName ?? ''} ${response.fullName?.familyName ?? ''}`.trim();
          const safeName = (nameFromMetadata ?? nameFromResponse) || 'User';
          await ensureUserExists(
            supabaseUser.id,
            supabaseUser.email ?? response.email,
            safeName
          );
          
          // Update profile with Apple ID
          await supabase
            .from('profiles')
            .update({ appleId: response.user })
            .eq('id', supabaseUser.id);
          
          return { error: null };
        }

        return { error: { message: AUTH_SIGN_IN_CANCELLED } as AuthError };
      } catch (error) {
        const msg = error instanceof Error ? error.message : String(error ?? '');
        if (/cancel/i.test(msg)) {
          return { error: { message: AUTH_SIGN_IN_CANCELLED } as AuthError };
        }
        log.error('[Auth] Apple Sign-In error:', error);
        return { error: error as AuthError };
      }
    }, [ensureUserExists]);

    // Social account linking methods
    const linkGoogleAccount = useCallback(async () => {
      try {
        if (!user) return { error: { message: 'No authenticated user' } as AuthError };
        
        // Initiate Google Sign-In to get the actual user ID
        GoogleSignin.configure({
          webClientId: googleWebClientId,
          ...(Platform.OS === 'android' && googleAndroidClientId ? { androidClientId: googleAndroidClientId } : {}),
          ...(Platform.OS === 'ios' && googleIosClientId ? { iosClientId: googleIosClientId } : {}),
        });
        
        // Check if play services are available (Android)
        if (Platform.OS === 'android') {
          const hasPlayServices = await GoogleSignin.hasPlayServices();
          if (!hasPlayServices) {
            return { error: { message: 'Google Play Services not available' } as AuthError };
          }
        }
        
        const result = await GoogleSignin.signIn();
        
        // In v16+, the result has data property
        const userInfo = (result as any).data ?? result;
        const googleUser = userInfo.user ?? (result as any).user;
        
        if (!googleUser?.id) {
          return { error: { message: 'Google Sign-In did not return a user ID' } as AuthError };
        }
        
        const { error } = await supabase.auth.updateUser({
          data: {
            googleId: googleUser.id
          }
        });
        
        if (error) return { error };
        
        // Update profile with Google ID
        await supabase
          .from('profiles')
          .update({ googleId: googleUser.id })
          .eq('id', user.id);
        
        // Refresh profile to update UI
        await refreshProfile();
          
        return { error: null };
      } catch (error: any) {
        // Check if user cancelled the sign-in
        if (error?.code === '12501' || error?.message?.includes('cancelled')) {
          return { error: { message: AUTH_SIGN_IN_CANCELLED } as AuthError };
        }
        log.error('[Auth] Link Google account error:', error);
        return { error: { message: error?.message || 'Failed to link Google account' } as AuthError };
      }
    }, [user, refreshProfile, googleWebClientId, googleAndroidClientId, googleIosClientId]);

    const linkFacebookAccount = useCallback(async () => {
      try {
        if (!user) return { error: { message: 'No authenticated user' } as AuthError };
        
        if (!fbsdk) {
          return { error: { message: 'Facebook Sign-In is not available on this platform' } as AuthError };
        }
        
        const { LoginManager, AccessToken } = fbsdk;
        const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);
        
        if (result.isCancelled) {
          return { error: { message: AUTH_SIGN_IN_CANCELLED } as AuthError };
        }

        const data = await AccessToken.getCurrentAccessToken();
        const accessToken = data?.accessToken;

        if (!accessToken) {
          return { error: { message: 'Failed to get Facebook access token' } as AuthError };
        }

        // Get Facebook user info
        const facebookResponse = await fetch(`https://graph.facebook.com/me?fields=id,name,email&access_token=${accessToken}`);
        const facebookUser = await facebookResponse.json();
        
        if (facebookUser.error) {
          return { error: { message: facebookUser.error.message || 'Failed to get Facebook user info' } as AuthError };
        }
        
        if (!facebookUser.id) {
          return { error: { message: 'Facebook Sign-In did not return a user ID' } as AuthError };
        }
        
        const { error } = await supabase.auth.updateUser({
          data: {
            facebookId: facebookUser.id
          }
        });
        
        if (error) return { error };
        
        // Update profile with Facebook ID
        await supabase
          .from('profiles')
          .update({ facebookId: facebookUser.id })
          .eq('id', user.id);
        
        // Refresh profile to update UI
        await refreshProfile();
          
        return { error: null };
      } catch (error) {
        log.error('[Auth] Link Facebook account error:', error);
        return { error: error as AuthError };
      }
    }, [user, refreshProfile]);

    const linkAppleAccount = useCallback(async () => {
      try {
        if (!user) return { error: { message: 'No authenticated user' } as AuthError };
        
        if (!appleAuth || !appleAuth.isSupported) {
          return { error: { message: 'Apple Sign-In is not available on this device' } as AuthError };
        }
        
        const requestOptions = {
          requestedScopes: [appleAuth.Scope.FULL_NAME, appleAuth.Scope.EMAIL],
        };
        
        const response = await appleAuth.performRequest(requestOptions);
        
        if (response.identityToken) {
          // Get the Apple user ID from the response
          const appleUserId = response.user;
          
          if (!appleUserId) {
            return { error: { message: 'Apple Sign-In did not return a user ID' } as AuthError };
          }
          
          const { error } = await supabase.auth.updateUser({
            data: {
              appleId: appleUserId
            }
          });
          
          if (error) return { error };
          
          // Update profile with Apple ID
          await supabase
            .from('profiles')
            .update({ appleId: appleUserId })
            .eq('id', user.id);
          
          // Refresh profile to update UI
          await refreshProfile();
          
          return { error: null };
        }

        return { error: { message: AUTH_SIGN_IN_CANCELLED } as AuthError };
      } catch (error) {
        if (error instanceof Error && (error.message.includes('cancel') || error.message.includes('cancelled'))) {
          return { error: { message: AUTH_SIGN_IN_CANCELLED } as AuthError };
        }
        log.error('[Auth] Link Apple account error:', error);
        return { error: error as AuthError };
      }
    }, [user, refreshProfile]);

    // Social account unlinking methods
    const unlinkGoogleAccount = useCallback(async () => {
      try {
        if (!user) return { error: { message: 'No authenticated user' } as AuthError };
        
        const { error } = await supabase.auth.updateUser({
          data: {
            googleId: null
          }
        });
        
        if (error) return { error };
        
        // Update profile to remove Google ID
        await supabase
          .from('profiles')
          .update({ googleId: null })
          .eq('id', user.id);
        
        // Refresh profile to update UI
        await refreshProfile();
          
        return { error: null };
      } catch (error) {
        log.error('[Auth] Unlink Google account error:', error);
        return { error: error as AuthError };
      }
    }, [user, refreshProfile]);

    const unlinkFacebookAccount = useCallback(async () => {
      try {
        if (!user) return { error: { message: 'No authenticated user' } as AuthError };
        
        const { error } = await supabase.auth.updateUser({
          data: {
            facebookId: null
          }
        });
        
        if (error) return { error };
        
        // Update profile to remove Facebook ID
        await supabase
          .from('profiles')
          .update({ facebookId: null })
          .eq('id', user.id);
        
        // Refresh profile to update UI
        await refreshProfile();
          
        return { error: null };
      } catch (error) {
        log.error('[Auth] Unlink Facebook account error:', error);
        return { error: error as AuthError };
      }
    }, [user, refreshProfile]);

    const unlinkAppleAccount = useCallback(async () => {
      try {
        if (!user) return { error: { message: 'No authenticated user' } as AuthError };
        
        const { error } = await supabase.auth.updateUser({
          data: {
            appleId: null
          }
        });
        
        if (error) return { error };
        
        // Update profile to remove Apple ID
        await supabase
          .from('profiles')
          .update({ appleId: null })
          .eq('id', user.id);
        
        // Refresh profile to update UI
        await refreshProfile();
          
        return { error: null };
      } catch (error) {
        log.error('[Auth] Unlink Apple account error:', error);
        return { error: error as AuthError };
      }
    }, [user, refreshProfile]);

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
        log.info('[Auth] Presence updated');
      } catch (error) {
        log.error('[Auth] Error updating presence:', error);
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
     applyServerProfilePatch,
     signInWithGoogle,
     signInWithFacebook,
     signInWithApple,
     // Social account linking
     linkGoogleAccount,
     linkFacebookAccount,
     linkAppleAccount,
     unlinkGoogleAccount,
     unlinkFacebookAccount,
     unlinkAppleAccount,
   };
});

