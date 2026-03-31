/* eslint-disable */
import '@testing-library/jest-native/extend-expect';

const shouldKeepConsole =
  process.env.JEST_VERBOSE_CONSOLE === '1' ||
  process.env.JEST_VERBOSE_CONSOLE === 'true';

if (!shouldKeepConsole) {
  jest.spyOn(console, 'log').mockImplementation(() => {});
  jest.spyOn(console, 'info').mockImplementation(() => {});
  jest.spyOn(console, 'warn').mockImplementation(() => {});
  jest.spyOn(console, 'error').mockImplementation(() => {});
}

jest.mock('expo-router', () => {
  const router = {
    push: jest.fn(),
    replace: jest.fn(),
    back: jest.fn(),
  };
  return {
    router,
    useRouter: () => router,
    useSegments: () => [],
    useLocalSearchParams: () => ({}),
  };
});

jest.mock('expo-splash-screen', () => ({
  preventAutoHideAsync: jest.fn(),
  hideAsync: jest.fn(),
}));

jest.mock('expo-constants', () => ({
  expoConfig: { extra: {} },
  executionEnvironment: 'storeClient',
}));

jest.mock('@expo/vector-icons', () => {
  const React = require('react');
  const { View } = require('react-native');
  return {
    Ionicons: () => React.createElement(View),
  };
});

jest.mock('expo-haptics', () => ({
  impactAsync: jest.fn(),
  notificationAsync: jest.fn(),
  selectionAsync: jest.fn(),
  NotificationFeedbackType: { Success: 'success', Warning: 'warning', Error: 'error' },
  ImpactFeedbackStyle: { Light: 'light', Medium: 'medium', Heavy: 'heavy', Rigid: 'rigid', Soft: 'soft' },
}));

jest.mock('@react-native-google-signin/google-signin', () => ({
  GoogleSignin: {
    configure: jest.fn(),
    hasPlayServices: jest.fn().mockResolvedValue(true),
    signIn: jest.fn(),
  },
}));

jest.mock('@react-native-async-storage/async-storage', () => {
  const storage = {
    getItem: jest.fn(),
    setItem: jest.fn(),
    removeItem: jest.fn(),
    clear: jest.fn(),
    getAllKeys: jest.fn(),
    multiRemove: jest.fn(),
  };
  return {
    __esModule: true,
    default: storage,
    ...storage,
  };
});

jest.mock('expo-linear-gradient', () => ({
  LinearGradient: jest.fn(({ children, ...props }) => {
    const React = require('react');
    const { View } = require('react-native');
    return React.createElement(View, props, children);
  }),
}));

jest.mock('react-native-safe-area-context', () => {
  const React = require('react');
  const { View } = require('react-native');

  const defaultInsets = { top: 0, right: 0, bottom: 0, left: 0 };
  const defaultFrame = { x: 0, y: 0, width: 390, height: 844 };

  const SafeAreaInsetsContext = React.createContext(defaultInsets);
  const SafeAreaFrameContext = React.createContext(defaultFrame);

  function SafeAreaProvider({ children, initialMetrics }) {
    const insets = initialMetrics?.insets ?? defaultInsets;
    const frame = initialMetrics?.frame ?? defaultFrame;
    return React.createElement(
      SafeAreaInsetsContext.Provider,
      { value: insets },
      React.createElement(SafeAreaFrameContext.Provider, { value: frame }, children),
    );
  }

  return {
    __esModule: true,
    SafeAreaInsetsContext,
    SafeAreaFrameContext,
    SafeAreaProvider,
    SafeAreaView: View,
    initialWindowMetrics: null,
    useSafeAreaInsets: () => defaultInsets,
    useSafeAreaFrame: () => defaultFrame,
  };
});

jest.mock('react-native-purchases', () => ({
  __esModule: true,
  default: {
    configure: jest.fn(),
    logIn: jest.fn().mockResolvedValue({
      customerInfo: { entitlements: { active: {} } },
    }),
    logOut: jest.fn().mockResolvedValue(undefined),
    getOfferings: jest.fn().mockResolvedValue({ current: null }),
    getCustomerInfo: jest.fn().mockResolvedValue({
      entitlements: { active: {} },
    }),
    addCustomerInfoUpdateListener: jest.fn(),
    removeCustomerInfoUpdateListener: jest.fn(),
    purchasePackage: jest.fn(),
    restorePurchases: jest.fn().mockResolvedValue({
      entitlements: { active: {} },
    }),
  },
}));

jest.mock('@/lib/supabase', () => ({
  isSupabaseConfigured: true,
  supabase: {
    from: jest.fn(() => ({
      select: jest.fn().mockReturnValue({
        eq: jest.fn().mockReturnValue({
          single: jest.fn().mockResolvedValue({ data: null, error: null }),
        }),
      }),
      insert: jest.fn().mockResolvedValue({ error: null }),
      update: jest.fn().mockReturnValue({
        eq: jest.fn().mockResolvedValue({ error: null }),
      }),
      upsert: jest.fn().mockResolvedValue({ error: null }),
    })),
    auth: {
      getSession: jest.fn(),
      signUp: jest.fn(),
      signInWithPassword: jest.fn(),
      signOut: jest.fn(),
      updateUser: jest.fn(),
      signInWithIdToken: jest.fn(),
      resetPasswordForEmail: jest.fn(),
      onAuthStateChange: jest.fn(() => ({
        data: { subscription: { unsubscribe: jest.fn() } },
      })),
    },
  },
}));

jest.mock('@/lib/supabase-hooks', () => ({
  useUserProfile: jest.fn(() => ({ data: null })),
  useUserProgress: jest.fn(() => ({ data: null, isLoading: false })),
  useWeeklyProgress: jest.fn(() => ({ data: [], isLoading: false })),
  useUpsertUserProgress: jest.fn(() => ({ mutateAsync: jest.fn().mockResolvedValue({}) })),
  useUpsertDailyProgress: jest.fn(() => ({ mutateAsync: jest.fn().mockResolvedValue({}) })),
  useCheckAchievements: jest.fn(() => ({ data: { earned: [], progress: {} }, isLoading: false })),
  useGrantAchievement: jest.fn(() => ({ mutateAsync: jest.fn().mockResolvedValue({}) })),
  useUpdateSubscription: jest.fn(() => ({
    mutateAsync: jest.fn().mockResolvedValue({}),
  })),
}));

jest.mock('@/lib/monitoring', () => ({
  monitoring: {
    init: jest.fn(),
    logError: jest.fn(),
    logEvent: jest.fn(),
    setUser: jest.fn(),
    clearUser: jest.fn(),
  },
}));

// RN's default rAF uses jest.now(); deferred callbacks can run after Jest env teardown.
// Microtask avoids leaving active timers (Jest worker "force exited" warnings).
global.requestAnimationFrame = (callback) => {
  queueMicrotask(() => callback(Date.now()));
  return -1;
};
global.cancelAnimationFrame = jest.fn();
