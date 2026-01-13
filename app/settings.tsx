import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  Alert,
  Platform,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Haptics from 'expo-haptics';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { 
  X, 
  Shield, 
  FileText, 
  Heart, 
  ChevronRight,
  Bell,
  Moon,
  HelpCircle,
  Mail,
  Info,
  Ban,
  UserX,
  Trash2,
  Globe,
  LogOut,
} from 'lucide-react-native';
import Colors from '@/constants/colors';
import { useAuth } from '@/providers/AuthProvider';
import { useLanguage, Language } from '@/providers/LanguageProvider';

interface SettingsItemProps {
  icon: React.ReactNode;
  title: string;
  subtitle?: string;
  onPress: () => void;
  showBorder?: boolean;
}

function SettingsItem({ icon, title, subtitle, onPress, showBorder = true }: SettingsItemProps) {
  return (
    <TouchableOpacity 
      style={[styles.settingsItem, showBorder && styles.settingsItemBorder]} 
      onPress={onPress}
      activeOpacity={0.7}
    >
      <View style={styles.settingsItemIcon}>{icon}</View>
      <View style={styles.settingsItemContent}>
        <Text style={styles.settingsItemTitle}>{title}</Text>
        {subtitle && <Text style={styles.settingsItemSubtitle}>{subtitle}</Text>}
      </View>
      <ChevronRight color={Colors.textMuted} size={20} />
    </TouchableOpacity>
  );
}

const BLOCKED_USERS_KEY = '@medix_blocked_users';

interface BlockedUser {
  id: string;
  name: string;
  avatar: string;
  blockedAt: string;
}

const languages: { code: Language; label: string; flag: string }[] = [
  { code: 'en', label: 'English', flag: '🇬🇧' },
  { code: 'ro', label: 'Română', flag: '🇷🇴' },
];

export default function SettingsScreen() {
  const router = useRouter();
  const { signOut } = useAuth();
  const { currentLanguage, changeLanguage, t } = useLanguage();
  const [blockedUsers, setBlockedUsers] = useState<BlockedUser[]>([]);

  useEffect(() => {
    loadBlockedUsers();
  }, []);

  const loadBlockedUsers = async () => {
    try {
      const stored = await AsyncStorage.getItem(BLOCKED_USERS_KEY);
      if (stored) {
        setBlockedUsers(JSON.parse(stored));
      }
    } catch (error) {
      console.error('Failed to load blocked users:', error);
    }
  };

  const handleUnblockUser = (user: BlockedUser) => {
    Alert.alert(
      t('settings.unblockUser'),
      t('settings.unblockConfirmMessage').replace('{name}', user.name),
      [
        { text: t('settings.cancel'), style: 'cancel' },
        {
          text: t('settings.unblockButton'),
          onPress: async () => {
            Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
            const updated = blockedUsers.filter(u => u.id !== user.id);
            setBlockedUsers(updated);
            await AsyncStorage.setItem(BLOCKED_USERS_KEY, JSON.stringify(updated));
          },
        },
      ]
    );
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
          <Text style={styles.title}>{t('settings.title')}</Text>
          <TouchableOpacity 
            style={styles.closeButton} 
            onPress={() => router.back()}
            activeOpacity={0.7}
          >
            <X color={Colors.text} size={24} />
          </TouchableOpacity>
        </View>

        <ScrollView 
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>{t('settings.preferences')}</Text>
            <View style={styles.sectionCard}>
              <LinearGradient
                colors={['rgba(255,255,255,0.08)', 'rgba(255,255,255,0.04)']}
                style={StyleSheet.absoluteFill}
              />
              <View style={styles.languageSection}>
                <View style={styles.languageSectionHeader}>
                  <View style={styles.settingsItemIcon}>
                    <Globe color={Colors.primary} size={22} />
                  </View>
                  <View style={styles.settingsItemContent}>
                    <Text style={styles.settingsItemTitle}>{t('settings.language')}</Text>
                    <Text style={styles.settingsItemSubtitle}>{t('settings.languageSubtitle')}</Text>
                  </View>
                </View>
                <View style={styles.languageSelector}>
                  {languages.map((lang) => {
                    const isActive = currentLanguage === lang.code;
                    return (
                      <TouchableOpacity
                        key={lang.code}
                        style={[
                          styles.languageButton,
                          isActive && styles.languageButtonActive,
                        ]}
                        onPress={() => {
                          if (Platform.OS !== 'web') {
                            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
                          }
                          changeLanguage(lang.code);
                        }}
                        activeOpacity={0.7}
                      >
                        {isActive && (
                          <LinearGradient
                            colors={[Colors.primary, Colors.secondary]}
                            style={StyleSheet.absoluteFill}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 1 }}
                          />
                        )}
                        <Text style={styles.languageFlag}>{lang.flag}</Text>
                        <Text style={[
                          styles.languageLabel,
                          isActive && styles.languageLabelActive,
                        ]}>
                          {lang.label}
                        </Text>
                      </TouchableOpacity>
                    );
                  })}
                </View>
              </View>
              <SettingsItem
                icon={<Bell color={Colors.primary} size={22} />}
                title={t('settings.notifications')}
                subtitle={t('settings.notificationsSubtitle')}
                onPress={() => console.log('Notifications')}
              />
              <SettingsItem
                icon={<Moon color={Colors.accent} size={22} />}
                title={t('settings.appearance')}
                subtitle={t('settings.appearanceSubtitle')}
                onPress={() => console.log('Appearance')}
                showBorder={false}
              />
            </View>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>{t('settings.privacySafety')}</Text>
            <View style={styles.sectionCard}>
              <LinearGradient
                colors={['rgba(255,255,255,0.08)', 'rgba(255,255,255,0.04)']}
                style={StyleSheet.absoluteFill}
              />
              <View style={styles.blockedUsersHeader}>
                <View style={styles.blockedUsersIcon}>
                  <Ban color={Colors.error} size={22} />
                </View>
                <View style={styles.blockedUsersInfo}>
                  <Text style={styles.settingsItemTitle}>{t('settings.blockedUsers')}</Text>
                  <Text style={styles.settingsItemSubtitle}>
                    {blockedUsers.length === 0 
                      ? t('settings.noBlockedUsers') 
                      : blockedUsers.length === 1
                        ? t('settings.blockedUsersCount').replace('{count}', String(blockedUsers.length))
                        : t('settings.blockedUsersCountPlural').replace('{count}', String(blockedUsers.length))}
                  </Text>
                </View>
              </View>
              
              {blockedUsers.length > 0 && (
                <View style={styles.blockedUsersList}>
                  {blockedUsers.map((user, index) => (
                    <View 
                      key={user.id} 
                      style={[
                        styles.blockedUserItem,
                        index < blockedUsers.length - 1 && styles.blockedUserItemBorder
                      ]}
                    >
                      <Image source={{ uri: user.avatar }} style={styles.blockedUserAvatar} />
                      <View style={styles.blockedUserInfo}>
                        <Text style={styles.blockedUserName}>{user.name}</Text>
                        <Text style={styles.blockedUserDate}>
                          {t('settings.blockedDate').replace('{date}', new Date(user.blockedAt).toLocaleDateString())}
                        </Text>
                      </View>
                      <TouchableOpacity
                        style={styles.unblockButton}
                        onPress={() => handleUnblockUser(user)}
                      >
                        <UserX color={Colors.error} size={18} />
                        <Text style={styles.unblockButtonText}>{t('settings.unblockButton')}</Text>
                      </TouchableOpacity>
                    </View>
                  ))}
                </View>
              )}
            </View>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>{t('settings.support')}</Text>
            <View style={styles.sectionCard}>
              <LinearGradient
                colors={['rgba(255,255,255,0.08)', 'rgba(255,255,255,0.04)']}
                style={StyleSheet.absoluteFill}
              />
              <SettingsItem
                icon={<HelpCircle color={Colors.warning} size={22} />}
                title={t('settings.helpCenter')}
                subtitle={t('settings.helpCenterSubtitle')}
                onPress={() => console.log('Help')}
              />
              <SettingsItem
                icon={<Mail color={Colors.accentPink} size={22} />}
                title={t('settings.contactSupport')}
                subtitle={t('settings.contactSupportSubtitle')}
                onPress={() => console.log('Contact')}
                showBorder={false}
              />
            </View>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>{t('settings.legal')}</Text>
            <View style={styles.sectionCard}>
              <LinearGradient
                colors={['rgba(255,255,255,0.08)', 'rgba(255,255,255,0.04)']}
                style={StyleSheet.absoluteFill}
              />
              <SettingsItem
                icon={<Shield color={Colors.primary} size={22} />}
                title={t('settings.privacyPolicy')}
                subtitle={t('settings.privacyPolicySubtitle')}
                onPress={() => router.push('/legal/privacy-policy')}
              />
              <SettingsItem
                icon={<FileText color={Colors.accent} size={22} />}
                title={t('settings.termsOfService')}
                subtitle={t('settings.termsOfServiceSubtitle')}
                onPress={() => router.push('/legal/terms-of-service')}
              />
              <SettingsItem
                icon={<Heart color={Colors.success} size={22} />}
                title={t('settings.codeOfConduct')}
                subtitle={t('settings.codeOfConductSubtitle')}
                onPress={() => router.push('/legal/code-of-conduct')}
                showBorder={false}
              />
            </View>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>{t('settings.account')}</Text>
            <View style={styles.sectionCard}>
              <LinearGradient
                colors={['rgba(255,255,255,0.08)', 'rgba(255,255,255,0.04)']}
                style={StyleSheet.absoluteFill}
              />
              <TouchableOpacity 
                style={[styles.deleteAccountItem, styles.settingsItemBorder]} 
                onPress={() => router.push('/delete-account')}
                activeOpacity={0.7}
              >
                <View style={styles.deleteAccountIcon}>
                  <Trash2 color={Colors.error} size={22} />
                </View>
                <View style={styles.settingsItemContent}>
                  <Text style={styles.deleteAccountTitle}>{t('settings.deleteAccount')}</Text>
                  <Text style={styles.deleteAccountSubtitle}>{t('settings.deleteAccountSubtitle')}</Text>
                </View>
                <ChevronRight color={Colors.error} size={20} />
              </TouchableOpacity>
              <TouchableOpacity 
                style={styles.signOutItem} 
                onPress={() => {
                  Alert.alert(
                    t('settings.signOutConfirmTitle'),
                    t('settings.signOutConfirmMessage'),
                    [
                      { text: t('settings.cancel'), style: 'cancel' },
                      {
                        text: t('settings.signOut'),
                        style: 'destructive',
                        onPress: async () => {
                          if (Platform.OS !== 'web') {
                            Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
                          }
                          await signOut();
                          router.replace('/(auth)/login');
                        },
                      },
                    ]
                  );
                }}
                activeOpacity={0.7}
              >
                <View style={styles.signOutIcon}>
                  <LogOut color={Colors.warning} size={22} />
                </View>
                <View style={styles.settingsItemContent}>
                  <Text style={styles.signOutTitle}>{t('settings.signOut')}</Text>
                  <Text style={styles.signOutSubtitle}>{t('settings.signOutSubtitle')}</Text>
                </View>
                <ChevronRight color={Colors.warning} size={20} />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>{t('settings.about')}</Text>
            <View style={styles.sectionCard}>
              <LinearGradient
                colors={['rgba(255,255,255,0.08)', 'rgba(255,255,255,0.04)']}
                style={StyleSheet.absoluteFill}
              />
              <SettingsItem
                icon={<Info color={Colors.textSecondary} size={22} />}
                title={t('settings.appVersion')}
                subtitle="1.0.0"
                onPress={() => {}}
                showBorder={false}
              />
            </View>
          </View>

          <View style={styles.footer}>
            <Text style={styles.footerText}>{t('settings.footer')}</Text>
            <Text style={styles.footerSubtext}>{t('settings.footerSubtext')}</Text>
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
  title: {
    fontSize: 24,
    fontWeight: '700' as const,
    color: Colors.text,
  },
  closeButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: Colors.cardBg,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.glassBorder,
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
  settingsItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  settingsItemBorder: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.glassBorder,
  },
  settingsItemIcon: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: 'rgba(255,255,255,0.06)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  settingsItemContent: {
    flex: 1,
    marginLeft: 14,
  },
  settingsItemTitle: {
    fontSize: 16,
    fontWeight: '600' as const,
    color: Colors.text,
  },
  settingsItemSubtitle: {
    fontSize: 13,
    color: Colors.textSecondary,
    marginTop: 2,
  },
  footer: {
    alignItems: 'center',
    marginTop: 20,
    paddingTop: 20,
    borderTopWidth: 1,
    borderTopColor: Colors.glassBorder,
  },
  footerText: {
    fontSize: 16,
    fontWeight: '600' as const,
    color: Colors.textSecondary,
  },
  footerSubtext: {
    fontSize: 13,
    color: Colors.textMuted,
    marginTop: 4,
  },
  blockedUsersHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  blockedUsersIcon: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: 'rgba(255, 71, 87, 0.15)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  blockedUsersInfo: {
    flex: 1,
    marginLeft: 14,
  },
  blockedUsersList: {
    borderTopWidth: 1,
    borderTopColor: Colors.glassBorder,
  },
  blockedUserItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 14,
    paddingLeft: 16,
  },
  blockedUserItemBorder: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.glassBorder,
  },
  blockedUserAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  blockedUserInfo: {
    flex: 1,
    marginLeft: 12,
  },
  blockedUserName: {
    fontSize: 15,
    fontWeight: '600' as const,
    color: Colors.text,
  },
  blockedUserDate: {
    fontSize: 12,
    color: Colors.textMuted,
    marginTop: 2,
  },
  unblockButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 71, 87, 0.1)',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 16,
    gap: 6,
  },
  unblockButtonText: {
    fontSize: 13,
    fontWeight: '600' as const,
    color: Colors.error,
  },
  deleteAccountItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  deleteAccountIcon: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: 'rgba(255, 71, 87, 0.15)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  deleteAccountTitle: {
    fontSize: 16,
    fontWeight: '600' as const,
    color: Colors.error,
  },
  deleteAccountSubtitle: {
    fontSize: 13,
    color: Colors.textMuted,
    marginTop: 2,
  },
  signOutItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  signOutIcon: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: 'rgba(255, 184, 0, 0.15)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  signOutTitle: {
    fontSize: 16,
    fontWeight: '600' as const,
    color: Colors.warning,
  },
  signOutSubtitle: {
    fontSize: 13,
    color: Colors.textMuted,
    marginTop: 2,
  },
  languageSection: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: Colors.glassBorder,
  },
  languageSectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  languageSelector: {
    flexDirection: 'row',
    backgroundColor: 'rgba(255,255,255,0.06)',
    borderRadius: 12,
    padding: 4,
    gap: 4,
    borderWidth: 1,
    borderColor: Colors.glassBorder,
  },
  languageButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 8,
    borderRadius: 8,
    gap: 6,
    overflow: 'hidden',
  },
  languageButtonActive: {
    shadowColor: Colors.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
  },
  languageFlag: {
    fontSize: 18,
  },
  languageLabel: {
    fontSize: 14,
    fontWeight: '600' as const,
    color: Colors.textSecondary,
  },
  languageLabelActive: {
    color: Colors.text,
    fontWeight: '700' as const,
  },
});
