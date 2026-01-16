import React, { createContext, useContext, useEffect, useState, useMemo } from 'react';
import { useColorScheme } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { darkColors, lightColors } from '@/constants/colors';

type ThemePreference = 'light' | 'dark' | 'system';

type ThemeContextValue = {
  preference: ThemePreference;
  setPreference: (value: ThemePreference) => void;
  colorScheme: 'light' | 'dark';
  colors: typeof darkColors;
  isTransitioning: boolean;
};

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

const THEME_KEY = '@medix_theme_preference';

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const systemScheme = useColorScheme();
  const [preference, setPreferenceState] = useState<ThemePreference>('system');
  const [isLoaded, setIsLoaded] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    AsyncStorage.getItem(THEME_KEY).then(stored => {
      console.log('[ThemeProvider] Loaded preference from storage:', stored);
      if (stored === 'light' || stored === 'dark' || stored === 'system') {
        setPreferenceState(stored);
      }
      setIsLoaded(true);
    }).catch(() => {
      setIsLoaded(true);
    });
  }, []);

  const setPreference = (value: ThemePreference) => {
    console.log('[ThemeProvider] Setting preference to:', value);
    setIsTransitioning(true);
    setPreferenceState(value);
    AsyncStorage.setItem(THEME_KEY, value).catch((error) => {
      console.error('Failed to save theme preference:', error);
    });
    
    setTimeout(() => {
      setIsTransitioning(false);
    }, 300);
  };

  const colorScheme: 'light' | 'dark' = useMemo(() => {
    if (preference === 'system') {
      return systemScheme === 'dark' ? 'dark' : 'light';
    }
    return preference === 'light' ? 'light' : 'dark';
  }, [preference, systemScheme]);

  const colors = useMemo(() => {
    return colorScheme === 'dark' ? darkColors : lightColors;
  }, [colorScheme]);

  useEffect(() => {
    console.log('[ThemeProvider] State updated - preference:', preference, 'systemScheme:', systemScheme, 'computed colorScheme:', colorScheme);
  }, [preference, systemScheme, colorScheme]);

  const value = useMemo(
    () => ({ preference, setPreference, colorScheme, colors, isTransitioning }),
    [preference, colorScheme, colors, isTransitioning]
  );

  if (!isLoaded) {
    return null;
  }

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used inside ThemeProvider');
  return ctx;
};
