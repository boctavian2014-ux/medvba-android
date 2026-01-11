import React, { useState, useCallback } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { 
  Settings, 
  Crown, 
  Award, 
  Target, 
  Clock, 
  TrendingUp,
  ChevronRight,
  Star,
  Zap,
  Calendar
} from 'lucide-react-native';
import Colors from '@/constants/colors';
import { t, getCurrentLanguage, setCurrentLanguage, Language } from '@/lib/i18n';
import GlassCard from '@/components/GlassCard';
import ProgressRing from '@/components/ProgressRing';
import StreakBadge from '@/components/StreakBadge';
import { currentUser, leaderboard } from '@/mocks/users';

const languages: { code: Language; label: string; flag: string }[] = [
  { code: 'en', label: 'EN', flag: '🇬🇧' },
  { code: 'ro', label: 'RO', flag: '🇷🇴' },
  { code: 'es', label: 'ES', flag: '🇪🇸' },
  { code: 'pt', label: 'PT', flag: '🇵🇹' },
];

const badges = [
  { id: 'early_bird', name: 'Early Bird', icon: '🌅', description: 'Complete 10 quizzes before 8 AM' },
  { id: 'streak_master', name: 'Streak Master', icon: '🔥', description: '7-day streak achieved' },
  { id: 'anatomy_expert', name: 'Anatomy Expert', icon: '🦴', description: '1000 anatomy questions' },
  { id: 'week_warrior', name: 'Week Warrior', icon: '⚔️', description: 'Study every day for a week' },
];

export default function ProfileScreen() {
  const [activeLanguage, setActiveLanguage] = useState<Language>(getCurrentLanguage());

  const handleLanguageChange = useCallback((lang: Language) => {
    setCurrentLanguage(lang);
    setActiveLanguage(lang);
  }, []);

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[Colors.background, Colors.backgroundLight]}
        style={StyleSheet.absoluteFill}
      />
      <SafeAreaView style={styles.safeArea} edges={['top']}>
        <ScrollView 
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          <View style={styles.header}>
            <Text style={styles.title}>{t('profile')}</Text>
            <TouchableOpacity style={styles.settingsButton}>
              <Settings color={Colors.textSecondary} size={24} />
            </TouchableOpacity>
          </View>

          <GlassCard style={styles.profileCard} variant="accent">
            <View style={styles.profileHeader}>
              <View style={styles.avatarContainer}>
                <Image source={{ uri: currentUser.avatar }} style={styles.avatar} />
                <View style={styles.rankBadge}>
                  <Text style={styles.rankText}>#{currentUser.rank}</Text>
                </View>
              </View>
              <View style={styles.profileInfo}>
                <Text style={styles.profileName}>{currentUser.name}</Text>
                <View style={styles.profileStats}>
                  <StreakBadge streak={currentUser.streak} size="small" />
                  <View style={styles.pointsBadge}>
                    <Star color={Colors.warning} size={14} fill={Colors.warning} />
                    <Text style={styles.pointsText}>{currentUser.points.toLocaleString()}</Text>
                  </View>
                </View>
              </View>
            </View>
            <TouchableOpacity style={styles.premiumButton}>
              <LinearGradient
                colors={[Colors.warning, '#FF9500']}
                style={styles.premiumGradient}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
              >
                <Crown color={Colors.background} size={18} />
                <Text style={styles.premiumButtonText}>Upgrade to Premium</Text>
              </LinearGradient>
            </TouchableOpacity>
          </GlassCard>

          <View style={styles.languageSection}>
            <Text style={styles.languageSectionTitle}>{t('language')}</Text>
            <View style={styles.languageSelector}>
              {languages.map((lang) => {
                const isActive = activeLanguage === lang.code;
                return (
                  <TouchableOpacity
                    key={lang.code}
                    style={[
                      styles.languageButton,
                      isActive && styles.languageButtonActive,
                    ]}
                    onPress={() => handleLanguageChange(lang.code)}
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

          <View style={styles.statsGrid}>
            <GlassCard style={styles.statCard}>
              <View style={styles.statIconContainer}>
                <Target color={Colors.primary} size={22} />
              </View>
              <Text style={styles.statValue}>{currentUser.questionsAnswered.toLocaleString()}</Text>
              <Text style={styles.statLabel}>Questions</Text>
            </GlassCard>
            <GlassCard style={styles.statCard}>
              <View style={styles.statIconContainer}>
                <TrendingUp color={Colors.success} size={22} />
              </View>
              <Text style={styles.statValue}>{currentUser.accuracy}%</Text>
              <Text style={styles.statLabel}>Accuracy</Text>
            </GlassCard>
            <GlassCard style={styles.statCard}>
              <View style={styles.statIconContainer}>
                <Clock color={Colors.accentPink} size={22} />
              </View>
              <Text style={styles.statValue}>{currentUser.studyHours}h</Text>
              <Text style={styles.statLabel}>Study Time</Text>
            </GlassCard>
            <GlassCard style={styles.statCard}>
              <View style={styles.statIconContainer}>
                <Calendar color={Colors.warning} size={22} />
              </View>
              <Text style={styles.statValue}>{currentUser.streak}</Text>
              <Text style={styles.statLabel}>Day Streak</Text>
            </GlassCard>
          </View>

          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Award color={Colors.primary} size={20} />
              <Text style={styles.sectionTitle}>Achievements</Text>
            </View>
            <ScrollView 
              horizontal 
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.badgesScroll}
            >
              {badges.map((badge) => {
                const isUnlocked = currentUser.badges.includes(badge.id);
                return (
                  <GlassCard 
                    key={badge.id} 
                    style={[styles.badgeCard, !isUnlocked && styles.badgeCardLocked]}
                    variant={isUnlocked ? 'light' : 'default'}
                  >
                    <Text style={styles.badgeIcon}>{badge.icon}</Text>
                    <Text style={[styles.badgeName, !isUnlocked && styles.badgeNameLocked]}>
                      {badge.name}
                    </Text>
                    <Text style={styles.badgeDescription} numberOfLines={2}>
                      {badge.description}
                    </Text>
                  </GlassCard>
                );
              })}
            </ScrollView>
          </View>

          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Crown color={Colors.warning} size={20} />
              <Text style={styles.sectionTitle}>Leaderboard</Text>
              <TouchableOpacity style={styles.seeAllButton}>
                <Text style={styles.seeAllText}>See all</Text>
                <ChevronRight color={Colors.primary} size={16} />
              </TouchableOpacity>
            </View>
            <GlassCard>
              {leaderboard.slice(0, 5).map((user, index) => (
                <View 
                  key={user.id} 
                  style={[
                    styles.leaderboardItem,
                    index < leaderboard.slice(0, 5).length - 1 && styles.leaderboardItemBorder
                  ]}
                >
                  <Text style={[
                    styles.leaderboardRank,
                    index === 0 && styles.rankGold,
                    index === 1 && styles.rankSilver,
                    index === 2 && styles.rankBronze,
                  ]}>
                    {index < 3 ? ['🥇', '🥈', '🥉'][index] : `#${user.rank}`}
                  </Text>
                  <Image source={{ uri: user.avatar }} style={styles.leaderboardAvatar} />
                  <View style={styles.leaderboardInfo}>
                    <Text style={styles.leaderboardName}>{user.name}</Text>
                    <View style={styles.leaderboardStats}>
                      <Zap color={Colors.warning} size={12} />
                      <Text style={styles.leaderboardPoints}>{user.points.toLocaleString()} pts</Text>
                    </View>
                  </View>
                  <View style={styles.leaderboardStreak}>
                    <Text style={styles.streakNumber}>{user.streak}</Text>
                    <Text style={styles.streakLabel}>🔥</Text>
                  </View>
                </View>
              ))}
            </GlassCard>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Weekly Progress</Text>
            <GlassCard style={styles.weeklyCard}>
              <View style={styles.weeklyHeader}>
                <ProgressRing 
                  progress={75} 
                  size={100} 
                  strokeWidth={10}
                  color={Colors.accent}
                  label="weekly"
                />
                <View style={styles.weeklyInfo}>
                  <Text style={styles.weeklyTitle}>Great Progress!</Text>
                  <Text style={styles.weeklySubtitle}>
                    You have completed 75% of your weekly goal. Keep it up!
                  </Text>
                  <View style={styles.weeklyStats}>
                    <View style={styles.weeklyStat}>
                      <Text style={styles.weeklyStatValue}>234</Text>
                      <Text style={styles.weeklyStatLabel}>Questions</Text>
                    </View>
                    <View style={styles.weeklyStat}>
                      <Text style={styles.weeklyStatValue}>12h</Text>
                      <Text style={styles.weeklyStatLabel}>Study Time</Text>
                    </View>
                  </View>
                </View>
              </View>
            </GlassCard>
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
  scrollContent: {
    paddingBottom: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 20,
    marginTop: 8,
  },
  title: {
    fontSize: 28,
    fontWeight: '700' as const,
    color: Colors.text,
  },
  settingsButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: Colors.cardBg,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileCard: {
    marginHorizontal: 20,
    marginBottom: 20,
  },
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  avatarContainer: {
    position: 'relative',
  },
  avatar: {
    width: 72,
    height: 72,
    borderRadius: 36,
    borderWidth: 3,
    borderColor: Colors.primary,
  },
  rankBadge: {
    position: 'absolute',
    bottom: -4,
    right: -4,
    backgroundColor: Colors.secondary,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: Colors.background,
  },
  rankText: {
    fontSize: 11,
    fontWeight: '700' as const,
    color: Colors.text,
  },
  profileInfo: {
    flex: 1,
    marginLeft: 16,
  },
  profileName: {
    fontSize: 22,
    fontWeight: '700' as const,
    color: Colors.text,
    marginBottom: 8,
  },
  profileStats: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  pointsBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 184, 0, 0.2)',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 12,
    gap: 4,
  },
  pointsText: {
    fontSize: 14,
    fontWeight: '600' as const,
    color: Colors.warning,
  },
  premiumButton: {
    borderRadius: 12,
    overflow: 'hidden',
  },
  premiumGradient: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 14,
    gap: 8,
  },
  premiumButtonText: {
    fontSize: 16,
    fontWeight: '700' as const,
    color: Colors.background,
  },
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 20,
    gap: 12,
    marginBottom: 24,
  },
  statCard: {
    width: '47%',
    alignItems: 'center',
    paddingVertical: 16,
  },
  statIconContainer: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: Colors.cardBgLight,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  statValue: {
    fontSize: 24,
    fontWeight: '700' as const,
    color: Colors.text,
  },
  statLabel: {
    fontSize: 13,
    color: Colors.textSecondary,
    marginTop: 2,
  },
  section: {
    marginBottom: 24,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 12,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700' as const,
    color: Colors.text,
    flex: 1,
    paddingHorizontal: 20,
    marginBottom: 12,
  },
  seeAllButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  seeAllText: {
    fontSize: 14,
    color: Colors.primary,
    fontWeight: '600' as const,
  },
  badgesScroll: {
    paddingHorizontal: 20,
    gap: 12,
  },
  badgeCard: {
    width: 120,
    alignItems: 'center',
    paddingVertical: 16,
  },
  badgeCardLocked: {
    opacity: 0.5,
  },
  badgeIcon: {
    fontSize: 32,
    marginBottom: 8,
  },
  badgeName: {
    fontSize: 13,
    fontWeight: '600' as const,
    color: Colors.text,
    textAlign: 'center',
    marginBottom: 4,
  },
  badgeNameLocked: {
    color: Colors.textMuted,
  },
  badgeDescription: {
    fontSize: 11,
    color: Colors.textSecondary,
    textAlign: 'center',
    paddingHorizontal: 4,
  },
  leaderboardItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
  },
  leaderboardItemBorder: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.glassBorder,
  },
  leaderboardRank: {
    width: 36,
    fontSize: 14,
    fontWeight: '600' as const,
    color: Colors.textSecondary,
    textAlign: 'center',
  },
  rankGold: {
    fontSize: 20,
  },
  rankSilver: {
    fontSize: 20,
  },
  rankBronze: {
    fontSize: 20,
  },
  leaderboardAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginLeft: 8,
  },
  leaderboardInfo: {
    flex: 1,
    marginLeft: 12,
  },
  leaderboardName: {
    fontSize: 15,
    fontWeight: '600' as const,
    color: Colors.text,
  },
  leaderboardStats: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginTop: 2,
  },
  leaderboardPoints: {
    fontSize: 13,
    color: Colors.textSecondary,
  },
  leaderboardStreak: {
    alignItems: 'center',
  },
  streakNumber: {
    fontSize: 16,
    fontWeight: '700' as const,
    color: Colors.streakOrange,
  },
  streakLabel: {
    fontSize: 12,
  },
  weeklyCard: {
    marginHorizontal: 20,
  },
  weeklyHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  weeklyInfo: {
    flex: 1,
    marginLeft: 20,
  },
  weeklyTitle: {
    fontSize: 18,
    fontWeight: '700' as const,
    color: Colors.text,
    marginBottom: 4,
  },
  weeklySubtitle: {
    fontSize: 13,
    color: Colors.textSecondary,
    lineHeight: 18,
    marginBottom: 12,
  },
  weeklyStats: {
    flexDirection: 'row',
    gap: 20,
  },
  weeklyStat: {},
  weeklyStatValue: {
    fontSize: 18,
    fontWeight: '700' as const,
    color: Colors.primary,
  },
  weeklyStatLabel: {
    fontSize: 11,
    color: Colors.textSecondary,
  },
  languageSection: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  languageSectionTitle: {
    fontSize: 14,
    fontWeight: '600' as const,
    color: Colors.textSecondary,
    marginBottom: 12,
    textTransform: 'uppercase' as const,
    letterSpacing: 1,
  },
  languageSelector: {
    flexDirection: 'row',
    backgroundColor: Colors.cardBg,
    borderRadius: 16,
    padding: 4,
    gap: 4,
  },
  languageButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 8,
    borderRadius: 12,
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
