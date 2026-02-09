import type { ExpoConfig, ConfigContext } from 'expo/config';
import fs from 'fs';
import path from 'path';

type EnvMap = Record<string, string>;

const readEnvText = (filePath: string): string => {
  const buf = fs.readFileSync(filePath);
  if (buf.length >= 2 && buf[0] === 0xff && buf[1] === 0xfe) {
    return buf.slice(2).toString('utf16le');
  }
  if (buf.length >= 2 && buf[0] === 0xfe && buf[1] === 0xff) {
    return buf.slice(2).toString('utf16le');
  }
  return buf.toString('utf8');
};

const loadEnvFile = (filePath: string, target: EnvMap) => {
  if (!fs.existsSync(filePath)) return;
  const raw = readEnvText(filePath);

  raw.split(/\r?\n/).forEach((line) => {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) return;
    const eqIndex = trimmed.indexOf('=');
    if (eqIndex === -1) return;

    let key = trimmed.slice(0, eqIndex).trim();
    let value = trimmed.slice(eqIndex + 1).trim();

    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }

    if (key.charAt(0) === '\ufeff') {
      key = key.slice(1);
    }

    if (!target[key]) {
      target[key] = value;
    }
    if (process.env[key] === undefined || process.env[key] === '') {
      process.env[key] = value;
    }
  });
};

export default ({ config, projectRoot }: ConfigContext): ExpoConfig => {
  const root = projectRoot || process.cwd();
  const envFromFile: EnvMap = {};
  loadEnvFile(path.join(root, '.env'), envFromFile);
  loadEnvFile(path.join(root, '.env.local'), envFromFile);

  return {
    ...config,
  name: 'MEDVBA',
  slug: 'medvba',
  version: '1.0.6',
  orientation: 'portrait',
  icon: './assets/images/icon.png',
  scheme: 'rork-app',
  userInterfaceStyle: 'automatic',
  newArchEnabled: true,
  splash: {
    image: './assets/images/splash-icon.png',
    resizeMode: 'contain',
    backgroundColor: '#ffffff',
  },
  updates: {
    url: 'https://u.expo.dev/667a66db-a3be-4c1e-b7da-8ad212c92bb4',
  },
  runtimeVersion: {
    policy: 'appVersion',
  },
  ios: {
    supportsTablet: false,
    bundleIdentifier: 'com.devaieood.medvba',
    icon: './assets/images/icon.png',
    buildNumber: '12',
    infoPlist: {
      NSPhotoLibraryUsageDescription: 'Allow $(PRODUCT_NAME) to access your photos',
    },
  },
  android: {
    adaptiveIcon: {
      foregroundImage: './assets/images/adaptive-icon.png',
      backgroundColor: '#000000',
    },
    versionCode: 12,
    package: 'com.devaieood.medvba',
    blockedPermissions: [
      'android.permission.CAMERA',
      'android.permission.RECORD_AUDIO',
    ],
    permissions: [
      'android.permission.VIBRATE',
    ],
  },
  web: {
    favicon: './assets/images/favicon.png',
  },
  plugins: [
    [
      'expo-router',
      {
        origin: 'https://rork.com/',
      },
    ],
    'expo-font',
    'expo-web-browser',
    [
      'expo-image-picker',
      {
        photosPermission:
          'The app accesses your photos to let you share them with your friends.',
      },
    ],
  ],
  experiments: {
    typedRoutes: true,
  },
    extra: {
    router: {
      origin: 'https://rork.com/',
    },
    eas: {
      projectId: '667a66db-a3be-4c1e-b7da-8ad212c92bb4',
    },
      EXPO_PUBLIC_SUPABASE_URL:
        envFromFile.EXPO_PUBLIC_SUPABASE_URL || process.env.EXPO_PUBLIC_SUPABASE_URL,
      EXPO_PUBLIC_SUPABASE_ANON_KEY:
        envFromFile.EXPO_PUBLIC_SUPABASE_ANON_KEY || process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY,
      EXPO_PUBLIC_RORK_API_BASE_URL:
        envFromFile.EXPO_PUBLIC_RORK_API_BASE_URL || process.env.EXPO_PUBLIC_RORK_API_BASE_URL,
    },
    owner: 'devaieood79',
  };
};
