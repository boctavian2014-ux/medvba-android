import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Switch,
  Platform,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Haptics from 'expo-haptics';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { ChevronLeft, Clock } from 'lucide-react-native';
import Colors from '@/constants/colors';
import { useLanguage } from '@/providers/LanguageProvider';
import DateTimePicker from '@react-native-community/datetimepicker';

const NOTIFICATIONS_KEY = '@medix_notifications';

interface NotificationSettings {
  studyReminders: boolean;
  studyTime: string;
  chatNotifications: boolean;
  medixUpdates: boolean;
  soundEnabled: boolean;
  doNotDisturb: boolean;
  doNotDisturbStart: string;
  doNotDisturbEnd: string;
}

const DEFAULT_SETTINGS: NotificationSettings = {
  studyReminders: false,
  studyTime: '09:00',
  chatNotifications: true,
  medixUpdates: true,
  soundEnabled: true,
  doNotDisturb: false,
  doNotDisturbStart: '22:00',
  doNotDisturbEnd: '08:00',
};

export default function NotificationsScreen() {
  const router = useRouter();
  const { t } = useLanguage();
  const [settings, setSettings] = useState<NotificationSettings>(DEFAULT_SETTINGS);
  const [showStudyTimePicker, setShowStudyTimePicker] = useState(false);

  useEffect(() => {
    loadSettings();
  }, []);

  const loadSettings = async () => {
    try {
      const stored = await AsyncStorage.getItem(NOTIFICATIONS_KEY);
      if (stored) {
        setSettings({ ...DEFAULT_SETTINGS, ...JSON.parse(stored) });
      }
    } catch (error) {
      console.error('Failed to load notification settings:', error);
    }
  };

  const saveSettings = async (newSettings: NotificationSettings) => {
    try {
      await AsyncStorage.setItem(NOTIFICATIONS_KEY, JSON.stringify(newSettings));
      setSettings(newSettings);
      console.log('Notification settings saved:', newSettings);
    } catch (error) {
      console.error('Failed to save notification settings:', error);
    }
  };

  const updateSetting = (key: keyof NotificationSettings, value: boolean | string) => {
    if (Platform.OS !== 'web') {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    }
    const newSettings = { ...settings, [key]: value };
    saveSettings(newSettings);
  };

  const parseTime = (timeString: string): Date => {
    const [hours, minutes] = timeString.split(':').map(Number);
    const date = new Date();
    date.setHours(hours, minutes, 0, 0);
    return date;
  };

  const formatTime = (date: Date): string => {
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
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
          <Text style={styles.title}>{t('notifications.title')}</Text>
          <View style={styles.placeholder} />
        </View>

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          <View style={styles.section}>
            <View style={styles.sectionCard}>
              <LinearGradient
                colors={['rgba(255,255,255,0.08)', 'rgba(255,255,255,0.04)']}
                style={StyleSheet.absoluteFill}
              />

              <View style={styles.settingItem}>
                <View style={styles.settingInfo}>
                  <Text style={styles.settingTitle}>
                    {t('notifications.studyReminders')}
                  </Text>
                  <Text style={styles.settingDescription}>
                    {t('notifications.studyRemindersDesc')}
                  </Text>
                </View>
                <Switch
                  value={settings.studyReminders}
                  onValueChange={(value) => updateSetting('studyReminders', value)}
                  trackColor={{ false: Colors.cardBgLight, true: Colors.primary }}
                  thumbColor={Colors.text}
                />
              </View>

              {settings.studyReminders && (
                <TouchableOpacity
                  style={styles.timePickerContainer}
                  onPress={() => setShowStudyTimePicker(true)}
                  activeOpacity={0.7}
                >
                  <View style={styles.timePickerIcon}>
                    <Clock color={Colors.primary} size={20} />
                  </View>
                  <View style={styles.timePickerInfo}>
                    <Text style={styles.timePickerLabel}>
                      {t('notifications.studyTime')}
                    </Text>
                    <Text style={styles.timePickerValue}>{settings.studyTime}</Text>
                  </View>
                </TouchableOpacity>
              )}

              {showStudyTimePicker && (
                <DateTimePicker
                  value={parseTime(settings.studyTime)}
                  mode="time"
                  is24Hour={true}
                  display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                  onChange={(event, selectedDate) => {
                    setShowStudyTimePicker(Platform.OS === 'ios');
                    if (selectedDate) {
                      updateSetting('studyTime', formatTime(selectedDate));
                    }
                  }}
                />
              )}

              <View style={[styles.settingItem, styles.settingItemBorder]}>
                <View style={styles.settingInfo}>
                  <Text style={styles.settingTitle}>
                    {t('notifications.chatNotifications')}
                  </Text>
                  <Text style={styles.settingDescription}>
                    {t('notifications.chatNotificationsDesc')}
                  </Text>
                </View>
                <Switch
                  value={settings.chatNotifications}
                  onValueChange={(value) => updateSetting('chatNotifications', value)}
                  trackColor={{ false: Colors.cardBgLight, true: Colors.primary }}
                  thumbColor={Colors.text}
                />
              </View>

              <View style={[styles.settingItem, styles.settingItemBorder]}>
                <View style={styles.settingInfo}>
                  <Text style={styles.settingTitle}>
                    {t('notifications.medixUpdates')}
                  </Text>
                  <Text style={styles.settingDescription}>
                    {t('notifications.medixUpdatesDesc')}
                  </Text>
                </View>
                <Switch
                  value={settings.medixUpdates}
                  onValueChange={(value) => updateSetting('medixUpdates', value)}
                  trackColor={{ false: Colors.cardBgLight, true: Colors.primary }}
                  thumbColor={Colors.text}
                />
              </View>

              <View style={styles.settingItem}>
                <View style={styles.settingInfo}>
                  <Text style={styles.settingTitle}>
                    {t('notifications.soundEnabled')}
                  </Text>
                  <Text style={styles.settingDescription}>
                    {t('notifications.soundEnabledDesc')}
                  </Text>
                </View>
                <Switch
                  value={settings.soundEnabled}
                  onValueChange={(value) => updateSetting('soundEnabled', value)}
                  trackColor={{ false: Colors.cardBgLight, true: Colors.primary }}
                  thumbColor={Colors.text}
                />
              </View>
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
  sectionCard: {
    borderRadius: 16,
    borderWidth: 1,
    borderColor: Colors.glassBorder,
    overflow: 'hidden',
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    gap: 12,
  },
  settingItemBorder: {
    borderTopWidth: 1,
    borderTopColor: Colors.glassBorder,
  },
  settingInfo: {
    flex: 1,
  },
  settingTitle: {
    fontSize: 16,
    fontWeight: '600' as const,
    color: Colors.text,
    marginBottom: 4,
  },
  settingDescription: {
    fontSize: 13,
    color: Colors.textSecondary,
    lineHeight: 18,
  },
  timePickerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    paddingTop: 0,
    paddingLeft: 16,
    gap: 12,
  },
  timePickerIcon: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: 'rgba(255,255,255,0.06)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  timePickerInfo: {
    flex: 1,
  },
  timePickerLabel: {
    fontSize: 14,
    fontWeight: '600' as const,
    color: Colors.textSecondary,
    marginBottom: 4,
  },
  timePickerValue: {
    fontSize: 18,
    fontWeight: '700' as const,
    color: Colors.primary,
  },
});
