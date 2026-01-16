import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Platform,
} from 'react-native';
import * as Haptics from 'expo-haptics';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { ChevronLeft, Sun, Moon, Smartphone } from 'lucide-react-native';
import { useLanguage } from '@/providers/LanguageProvider';
import { useTheme } from '@/providers/ThemeProvider';

type ThemeMode = 'auto' | 'light' | 'dark';

interface ThemeOption {
  mode: ThemeMode;
  icon: typeof Sun;
  titleKey: string;
  descKey: string;
}

export default function AppearanceScreen() {
  const router = useRouter();
  const { t } = useLanguage();
  const { preference, setPreference, colors } = useTheme();

  const selectTheme = (theme: ThemeMode) => {
    if (Platform.OS !== 'web') {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    }
    setPreference(theme === 'auto' ? 'system' : theme);
    console.log('Theme saved:', theme);
  };

  const themeOptions: ThemeOption[] = [
    {
      mode: 'auto',
      icon: Smartphone,
      titleKey: 'appearance.themeAuto',
      descKey: 'appearance.themeAutoDesc',
    },
    {
      mode: 'light',
      icon: Sun,
      titleKey: 'appearance.themeLight',
      descKey: 'appearance.themeLightDesc',
    },
    {
      mode: 'dark',
      icon: Moon,
      titleKey: 'appearance.themeDark',
      descKey: 'appearance.themeDarkDesc',
    },
  ];

  const currentMode = preference === 'system' ? 'auto' : preference;

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[colors.background, colors.backgroundLight, colors.background]}
        style={StyleSheet.absoluteFill}
        locations={[0, 0.5, 1]}
      />
      <SafeAreaView style={styles.safeArea} edges={['top', 'bottom']}>
        <View style={[styles.header, { borderBottomColor: colors.glassBorder }]}>
          <TouchableOpacity
            style={[
              styles.backButton,
              {
                backgroundColor: colors.cardBg,
                borderColor: colors.glassBorder,
              },
            ]}
            onPress={() => router.back()}
            activeOpacity={0.7}
          >
            <ChevronLeft color={colors.text} size={24} />
          </TouchableOpacity>
          <Text style={[styles.title, { color: colors.text }]}>
            {t('appearance.title')}
          </Text>
          <View style={styles.placeholder} />
        </View>

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          <View style={styles.section}>
            <Text style={[styles.sectionTitle, { color: colors.textSecondary }]}>
              {t('appearance.themeSection')}
            </Text>
            <View style={[styles.sectionCard, { borderColor: colors.glassBorder }]}>
              <LinearGradient
                colors={[colors.cardBgLight, colors.cardBg]}
                style={StyleSheet.absoluteFill}
              />
              {themeOptions.map((option, index) => {
                const Icon = option.icon;
                const isSelected = currentMode === option.mode;
                const isLast = index === themeOptions.length - 1;

                const iconColors: Record<ThemeMode, string> = {
                  auto: colors.primary,
                  light: colors.warning,
                  dark: colors.accent,
                };

                return (
                  <TouchableOpacity
                    key={option.mode}
                    style={[
                      styles.themeOption,
                      !isLast && {
                        borderBottomWidth: 1,
                        borderBottomColor: colors.glassBorder,
                      },
                    ]}
                    onPress={() => selectTheme(option.mode)}
                    activeOpacity={0.7}
                  >
                    <View
                      style={[
                        styles.radioCircle,
                        {
                          borderColor: isSelected
                            ? colors.primary
                            : colors.textMuted,
                        },
                      ]}
                    >
                      {isSelected && (
                        <View
                          style={[
                            styles.radioInner,
                            { backgroundColor: colors.primary },
                          ]}
                        />
                      )}
                    </View>
                    <View
                      style={[
                        styles.themeIconContainer,
                        { backgroundColor: colors.cardBgLight },
                      ]}
                    >
                      <Icon color={iconColors[option.mode]} size={22} />
                    </View>
                    <View style={styles.themeInfo}>
                      <Text style={[styles.themeTitle, { color: colors.text }]}>
                        {t(option.titleKey)}
                      </Text>
                      <Text
                        style={[
                          styles.themeDescription,
                          { color: colors.textSecondary },
                        ]}
                      >
                        {t(option.descKey)}
                      </Text>
                    </View>
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: '700' as const,
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
    textTransform: 'uppercase' as const,
    letterSpacing: 1,
    marginBottom: 12,
    marginLeft: 4,
  },
  sectionCard: {
    borderRadius: 16,
    borderWidth: 1,
    overflow: 'hidden',
  },
  themeOption: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    gap: 12,
  },
  radioCircle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  radioInner: {
    width: 12,
    height: 12,
    borderRadius: 6,
  },
  themeIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  themeInfo: {
    flex: 1,
  },
  themeTitle: {
    fontSize: 16,
    fontWeight: '600' as const,
    marginBottom: 4,
  },
  themeDescription: {
    fontSize: 13,
    lineHeight: 18,
  },
});
