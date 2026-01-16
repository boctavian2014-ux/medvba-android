import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Platform,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Haptics from 'expo-haptics';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { ChevronLeft, Sun, Moon, Smartphone } from 'lucide-react-native';
import Colors from '@/constants/colors';
import { useLanguage } from '@/providers/LanguageProvider';

const APPEARANCE_KEY = '@medix_appearance';

type ThemeMode = 'auto' | 'light' | 'dark';

interface ThemeOption {
  mode: ThemeMode;
  icon: typeof Sun;
  iconColor: string;
  titleKey: string;
  descKey: string;
}

const THEME_OPTIONS: ThemeOption[] = [
  {
    mode: 'auto',
    icon: Smartphone,
    iconColor: Colors.primary,
    titleKey: 'appearance.themeAuto',
    descKey: 'appearance.themeAutoDesc',
  },
  {
    mode: 'light',
    icon: Sun,
    iconColor: Colors.warning,
    titleKey: 'appearance.themeLight',
    descKey: 'appearance.themeLightDesc',
  },
  {
    mode: 'dark',
    icon: Moon,
    iconColor: Colors.accent,
    titleKey: 'appearance.themeDark',
    descKey: 'appearance.themeDarkDesc',
  },
];

export default function AppearanceScreen() {
  const router = useRouter();
  const { t } = useLanguage();
  const [selectedTheme, setSelectedTheme] = useState<ThemeMode>('dark');

  useEffect(() => {
    loadTheme();
  }, []);

  const loadTheme = async () => {
    try {
      const stored = await AsyncStorage.getItem(APPEARANCE_KEY);
      if (stored && ['auto', 'light', 'dark'].includes(stored)) {
        setSelectedTheme(stored as ThemeMode);
      }
    } catch (error) {
      console.error('Failed to load theme:', error);
    }
  };

  const selectTheme = async (theme: ThemeMode) => {
    try {
      if (Platform.OS !== 'web') {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
      }
      setSelectedTheme(theme);
      await AsyncStorage.setItem(APPEARANCE_KEY, theme);
      console.log('Theme saved:', theme);
    } catch (error) {
      console.error('Failed to save theme:', error);
    }
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[Colors.background, '#0D1F35', Colors.backgroundLight]}
        style={StyleSheet.absoluteFill}
        locations={[0, 0.5, 1]}
      />
      <SafeAreaView style={styles.safeArea} edges={['top', 'bottom']}>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => router.back()}
            activeOpacity={0.7}
          >
            <ChevronLeft color={Colors.text} size={24} />
          </TouchableOpacity>
          <Text style={styles.title}>{t('appearance.title')}</Text>
          <View style={styles.placeholder} />
        </View>

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>
              {t('appearance.themeSection')}
            </Text>
            <View style={styles.sectionCard}>
              <LinearGradient
                colors={['rgba(255,255,255,0.08)', 'rgba(255,255,255,0.04)']}
                style={StyleSheet.absoluteFill}
              />
              {THEME_OPTIONS.map((option, index) => {
                const Icon = option.icon;
                const isSelected = selectedTheme === option.mode;
                const isLast = index === THEME_OPTIONS.length - 1;

                return (
                  <TouchableOpacity
                    key={option.mode}
                    style={[
                      styles.themeOption,
                      !isLast && styles.themeOptionBorder,
                    ]}
                    onPress={() => selectTheme(option.mode)}
                    activeOpacity={0.7}
                  >
                    <View
                      style={[
                        styles.radioCircle,
                        isSelected && styles.radioCircleSelected,
                      ]}
                    >
                      {isSelected && <View style={styles.radioInner} />}
                    </View>
                    <View style={styles.themeIconContainer}>
                      <Icon color={option.iconColor} size={22} />
                    </View>
                    <View style={styles.themeInfo}>
                      <Text style={styles.themeTitle}>
                        {t(option.titleKey)}
                      </Text>
                      <Text style={styles.themeDescription}>
                        {t(option.descKey)}
                      </Text>
                    </View>
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>

          <View style={styles.noteSection}>
            <Text style={styles.noteText}>
              Note: The app currently uses dark mode by default. Theme switching will be available in a future update.
            </Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  safeArea: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: Colors.glassBorder,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: Colors.cardBg,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.glassBorder,
  },
  title: {
    fontSize: 20,
    fontWeight: '700' as const,
    color: Colors.text,
  },
  placeholder: {
    width: 40,
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 40,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 13,
    fontWeight: '600' as const,
    color: Colors.textSecondary,
    textTransform: 'uppercase' as const,
    letterSpacing: 1,
    marginBottom: 12,
    marginLeft: 4,
  },
  sectionCard: {
    borderRadius: 16,
    borderWidth: 1,
    borderColor: Colors.glassBorder,
    overflow: 'hidden',
  },
  themeOption: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    gap: 12,
  },
  themeOptionBorder: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.glassBorder,
  },
  radioCircle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: Colors.textMuted,
    justifyContent: 'center',
    alignItems: 'center',
  },
  radioCircleSelected: {
    borderColor: Colors.primary,
  },
  radioInner: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: Colors.primary,
  },
  themeIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: 'rgba(255,255,255,0.06)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  themeInfo: {
    flex: 1,
  },
  themeTitle: {
    fontSize: 16,
    fontWeight: '600' as const,
    color: Colors.text,
    marginBottom: 4,
  },
  themeDescription: {
    fontSize: 13,
    color: Colors.textSecondary,
    lineHeight: 18,
  },
  noteSection: {
    padding: 16,
    backgroundColor: 'rgba(255, 184, 0, 0.1)',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgba(255, 184, 0, 0.3)',
  },
  noteText: {
    fontSize: 13,
    color: Colors.textSecondary,
    lineHeight: 18,
    textAlign: 'center',
  },
});
