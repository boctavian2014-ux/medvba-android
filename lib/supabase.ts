import { createClient } from '@supabase/supabase-js';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as SecureStore from 'expo-secure-store';
import { Platform } from 'react-native';
import Constants from 'expo-constants';

const extraConfig = Constants.expoConfig?.extra ?? (Constants as any)?.manifest?.extra ?? {};
const supabaseUrl =
  process.env.EXPO_PUBLIC_SUPABASE_URL ||
  extraConfig.EXPO_PUBLIC_SUPABASE_URL ||
  extraConfig.supabaseUrl ||
  '';
const supabaseAnonKey =
  process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY ||
  extraConfig.EXPO_PUBLIC_SUPABASE_ANON_KEY ||
  extraConfig.supabaseAnonKey ||
  '';

export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseAnonKey);

if (!isSupabaseConfigured) {
  console.warn(
    '[Supabase] Missing EXPO_PUBLIC_SUPABASE_URL or EXPO_PUBLIC_SUPABASE_ANON_KEY. Copy .env.example to .env and set values. Auth and data will not work.'
  );
}

// Use placeholder values when env is missing so createClient() doesn't throw and the app can load (e.g. in Expo Go without .env)
const effectiveUrl = supabaseUrl || 'https://placeholder.supabase.co';
const effectiveKey = supabaseAnonKey || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.placeholder';

const storage = {
  getItem: async (key: string) => {
    try {
      console.log(`[Storage] Getting item for key: ${key}`);
      if (Platform.OS === 'web') {
        const item = localStorage.getItem(key);
        console.log(`[Storage] Web localStorage result: ${item ? 'found' : 'not found'}`);
        return item;
      }
      const result = await SecureStore.getItemAsync(key);
      console.log(`[Storage] SecureStore result for ${key}: ${result ? 'found' : 'not found'}`);
      return result;
    } catch (error) {
      console.error(`[Storage] Error getting item for key ${key}:`, error);
      return null;
    }
  },
  setItem: async (key: string, value: string) => {
    try {
      console.log(`[Storage] Setting item for key: ${key} (${value.length} chars)`);
      if (Platform.OS === 'web') {
        localStorage.setItem(key, value);
        console.log(`[Storage] Web localStorage: item set successfully`);
        return;
      }
      await SecureStore.setItemAsync(key, value);
      console.log(`[Storage] SecureStore: item set successfully for ${key}`);
    } catch (error) {
      console.error(`[Storage] Error setting item for key ${key}:`, error);
    }
  },
  removeItem: async (key: string) => {
    try {
      console.log(`[Storage] Removing item for key: ${key}`);
      if (Platform.OS === 'web') {
        localStorage.removeItem(key);
        console.log(`[Storage] Web localStorage: item removed`);
        return;
      }
      await SecureStore.deleteItemAsync(key);
      console.log(`[Storage] SecureStore: item removed for ${key}`);
    } catch (error) {
      console.error(`[Storage] Error removing item for key ${key}:`, error);
    }
  },
};

export const supabase = createClient(effectiveUrl, effectiveKey, {
  auth: {
    storage: storage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: Platform.OS === 'web',
  },
});

export type SupabaseUser = {
  id: string;
  email?: string;
  user_metadata?: {
    name?: string;
    avatar_url?: string;
  };
};
