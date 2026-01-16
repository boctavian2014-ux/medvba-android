import React, { createContext, useContext, useEffect, useState } from 'react';
import { useColorScheme } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { darkColors, lightColors } from '@/constants/colors';

type ThemePreference = 'light' | 'dark' | 'system';

type ThemeContextValue = {
  preference: ThemePreference;
  setPreference: (value: ThemePreference) => void;
  colorScheme: 'light' | 'dark';
  colors: typeof darkColors;
};

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

const THEME_KEY = '@medix_theme_preference';

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const systemScheme = useColorScheme();
  const [preference, setPreferenceState] = useState<ThemePreference>('system');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    AsyncStorage.getItem(THEME_KEY).then(stored => {
      if (stored === 'light' || stored === 'dark' || stored === 'system') {
        setPreferenceState(stored);
      }
      setIsLoaded(true);
    }).catch(() => {
      setIsLoaded(true);
    });
  }, []);

  const setPreference = (value: ThemePreference) => {
    setPreferenceState(value);
    AsyncStorage.setItem(THEME_KEY, value).catch((error) => {
      console.error('Failed to save theme preference:', error);
    });
  };

  const colorScheme: 'light' | 'dark' =
    preference === 'system' ? (systemScheme === 'dark' ? 'dark' : 'light') : preference;

  const colors = colorScheme === 'dark' ? darkColors : lightColors;

  if (!isLoaded) {
    return null;
  }

  return (
    <ThemeContext.Provider value={{ preference, setPreference, colorScheme, colors }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used inside ThemeProvider');
  return ctx;
};
