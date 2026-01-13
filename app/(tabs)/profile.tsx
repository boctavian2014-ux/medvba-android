import React, { useState, useCallback, useRef, useMemo } from 'react';
import { useRouter } from 'expo-router';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  Animated,
  Dimensions,
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
  Calendar,
  Flame,
  Trophy,
  Lock,
  ChevronUp,
  ChevronDown,
  Minus,
} from 'lucide-react-native';
import Colors from '@/constants/colors';
import { useLanguage } from '@/providers/LanguageProvider';
import ProgressRing from '@/components/ProgressRing';
import { currentUser, leaderboard } from '@/mocks/users';
import { useQuizProgress } from '@/providers/QuizProgressProvider';

const { width: SCREEN_WIDTH } = Dimensions.get('window');



interface Achievement {
  id: string;
  name: string;
  icon: string;
  description: string;
  requirement: number;
  currentProgress: number;
  type: 'questions' | 'streak' | 'accuracy' | 'time';
  gradient: readonly [string, string];
}

type LeaderboardPeriod = 'daily' | 'weekly' | 'monthly' | 'allTime';

function getDayName(dateString: string): string {
  const date = new Date(dateString);
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  return days[date.getDay()];
}

function getLast7Days(): string[] {
  const dates: string[] = [];
  for (let i = 6; i >= 0; i--) {
    const date = new Date();
    date.setDate(date.getDate() - i);
    dates.push(date.toISOString().split('T')[0]);
  }
  return dates;
}

export default function ProfileScreen() {
  const router = useRouter();
  const { t } = useLanguage();
  const [selectedPeriod, setSelectedPeriod] = useState<LeaderboardPeriod>('weekly');
  const scaleAnims = useRef<{ [key: string]: Animated.Value }>({}).current;
  
  const { 
    allTimeStats, 
    streakData, 
    weeklyHistory, 
    accuracy, 
    formattedQuestionsCount, 
    formattedStudyTime,
    weeklyQuestionsTotal,
    weeklyStudyTimeSeconds,
    weeklyGoalProgress,
  } = useQuizProgress();



  const achievements: Achievement[] = useMemo(() => [
    { 
      id: 'question_master', 
      name: 'Question Master', 
      icon: '🎯', 
      description: 'Answer 1,000 questions',
      requirement: 1000,
      currentProgress: allTimeStats.totalQuestionsAnswered,
      type: 'questions',
      gradient: ['#FF6B6B', '#FF8E53'],
    },
    { 
      id: 'streak_champion', 
      name: 'Streak Champion', 
      icon: '🔥', 
      description: '30-day streak achieved',
      requirement: 30,
      currentProgress: streakData.currentStreak,
      type: 'streak',
      gradient: ['#F093FB', '#F5576C'],
    },
    { 
      id: 'accuracy_ace', 
      name: 'Accuracy Ace', 
      icon: '✨', 
      description: 'Maintain 80% accuracy',
      requirement: 80,
      currentProgress: Math.round(accuracy),
      type: 'accuracy',
      gradient: ['#4FACFE', '#00F2FE'],
    },
    { 
      id: 'study_warrior', 
      name: 'Study Warrior', 
      icon: '⚔️', 
      description: 'Study for 50 hours',
      requirement: 50,
      currentProgress: Math.floor(allTimeStats.totalStudyTimeSeconds / 3600),
      type: 'time',
      gradient: ['#43E97B', '#38F9D7'],
    },
    { 
      id: 'anatomy_expert', 
      name: 'Anatomy Expert', 
      icon: '🦴', 
      description: 'Answer 5,000 questions',
      requirement: 5000,
      currentProgress: allTimeStats.totalQuestionsAnswered,
      type: 'questions',
      gradient: ['#FA709A', '#FEE140'],
    },
    { 
      id: 'dedication', 
      name: 'Dedication', 
      icon: '💎', 
      description: '100-day streak',
      requirement: 100,
      currentProgress: streakData.longestStreak,
      type: 'streak',
      gradient: ['#667EEA', '#764BA2'],
    },
  ], [allTimeStats.totalQuestionsAnswered, allTimeStats.totalStudyTimeSeconds, streakData.currentStreak, streakData.longestStreak, accuracy]);

  const unlockedCount = useMemo(() => {
    return achievements.filter(a => a.currentProgress >= a.requirement).length;
  }, [achievements]);

  const getAchievementProgress = useCallback((achievement: Achievement) => {
    return Math.min((achievement.currentProgress / achievement.requirement) * 100, 100);
  }, []);

  const handleAchievementPress = useCallback((id: string) => {
    if (!scaleAnims[id]) {
      scaleAnims[id] = new Animated.Value(1);
    }
    Animated.sequence([
      Animated.timing(scaleAnims[id], {
        toValue: 0.95,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnims[id], {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start();
  }, [scaleAnims]);

  const getScaleAnim = useCallback((id: string) => {
    if (!scaleAnims[id]) {
      scaleAnims[id] = new Animated.Value(1);
    }
    return scaleAnims[id];
  }, [scaleAnims]);

  const weeklyData = useMemo(() => {
    const last7Days = getLast7Days();
    return last7Days.map(date => {
      const entry = weeklyHistory.find(h => h.date === date);
      return {
        date,
        day: getDayName(date),
        questions: entry?.questionsAnswered || 0,
        studyTime: entry?.studyTimeSeconds || 0,
      };
    });
  }, [weeklyHistory]);

  const maxQuestions = useMemo(() => {
    return Math.max(...weeklyData.map(d => d.questions), 1);
  }, [weeklyData]);

  const formattedWeeklyStudyTime = useMemo(() => {
    const hours = Math.floor(weeklyStudyTimeSeconds / 3600);
    const minutes = Math.floor((weeklyStudyTimeSeconds % 3600) / 60);
    if (hours > 0) {
      return `${hours}h ${minutes}m`;
    }
    return `${minutes}m`;
  }, [weeklyStudyTimeSeconds]);

  const getMotivationalMessage = useCallback(() => {
    if (weeklyGoalProgress >= 100) return "🎉 Goal achieved! You're amazing!";
    if (weeklyGoalProgress >= 75) return "Almost there! Keep pushing!";
    if (weeklyGoalProgress >= 50) return "Great progress! Stay focused!";
    if (weeklyGoalProgress >= 25) return "Good start! Build momentum!";
    return "Let's get started this week!";
  }, [weeklyGoalProgress]);

  const periods: { key: LeaderboardPeriod; label: string }[] = [
    { key: 'daily', label: 'Daily' },
    { key: 'weekly', label: 'Weekly' },
    { key: 'monthly', label: 'Monthly' },
    { key: 'allTime', label: 'All-time' },
  ];

  const getRankChangeIcon = useCallback((index: number) => {
    const changes = [0, 1, -1, 2, 0, -2, 1];
    const change = changes[index] || 0;
    if (change > 0) return <ChevronUp color={Colors.success} size={14} />;
    if (change < 0) return <ChevronDown color={Colors.error} size={14} />;
    return <Minus color={Colors.textMuted} size={14} />;
  }, []);

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[Colors.background, '#0D1F35', Colors.backgroundLight]}
        style={StyleSheet.absoluteFill}
        locations={[0, 0.5, 1]}
      />
      <SafeAreaView style={styles.safeArea} edges={['top']}>
        <ScrollView 
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          <View style={styles.header}>
            <Text style={styles.title}>{t('profile')}</Text>
            <TouchableOpacity 
              style={styles.settingsButton} 
              activeOpacity={0.7}
              onPress={() => router.push('/settings')}
            >
              <LinearGradient
                colors={['rgba(255,255,255,0.1)', 'rgba(255,255,255,0.05)']}
                style={StyleSheet.absoluteFill}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
              />
              <Settings color={Colors.textSecondary} size={22} />
            </TouchableOpacity>
          </View>

          <View style={styles.profileCard}>
            <LinearGradient
              colors={['rgba(0, 180, 216, 0.2)', 'rgba(2, 62, 138, 0.15)']}
              style={[StyleSheet.absoluteFill, { borderRadius: 24 }]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
            />
            <View style={styles.glassOverlay} />
            <View style={styles.profileHeader}>
              <View style={styles.avatarContainer}>
                <LinearGradient
                  colors={[Colors.primary, Colors.secondary]}
                  style={styles.avatarBorder}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                >
                  <Image source={{ uri: currentUser.avatar }} style={styles.avatar} />
                </LinearGradient>
                <View style={styles.rankBadge}>
                  <LinearGradient
                    colors={[Colors.secondary, Colors.primaryDark]}
                    style={StyleSheet.absoluteFill}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                  />
                  <Text style={styles.rankText}>#{currentUser.rank}</Text>
                </View>
              </View>
              <View style={styles.profileInfo}>
                <Text style={styles.profileName}>{currentUser.name}</Text>
                <View style={styles.profileStats}>
                  <View style={styles.streakBadgeSmall}>
                    <Flame color={Colors.streakOrange} size={14} fill={Colors.streakOrange} />
                    <Text style={styles.streakTextSmall}>{streakData.currentStreak}</Text>
                  </View>
                  <View style={styles.pointsBadge}>
                    <Star color={Colors.warning} size={14} fill={Colors.warning} />
                    <Text style={styles.pointsText}>{currentUser.points.toLocaleString()}</Text>
                  </View>
                </View>
              </View>
            </View>
            <TouchableOpacity style={styles.premiumButton} activeOpacity={0.8}>
              <LinearGradient
                colors={[Colors.warning, '#FF9500', '#FFB800']}
                style={styles.premiumGradient}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
              >
                <Crown color={Colors.background} size={18} />
                <Text style={styles.premiumButtonText}>Upgrade to Premium</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>



          <View style={styles.statsGrid}>
            <View style={styles.statCard}>
              <LinearGradient
                colors={['rgba(0, 180, 216, 0.15)', 'rgba(0, 180, 216, 0.05)']}
                style={[StyleSheet.absoluteFill, { borderRadius: 20 }]}
              />
              <View style={styles.glassOverlay} />
              <View style={[styles.statIconContainer, { backgroundColor: 'rgba(0, 180, 216, 0.2)' }]}>
                <Target color={Colors.primary} size={22} />
              </View>
              <Text style={styles.statValue}>{formattedQuestionsCount}</Text>
              <Text style={styles.statLabel}>Questions</Text>
            </View>
            <View style={styles.statCard}>
              <LinearGradient
                colors={['rgba(0, 196, 140, 0.15)', 'rgba(0, 196, 140, 0.05)']}
                style={[StyleSheet.absoluteFill, { borderRadius: 20 }]}
              />
              <View style={styles.glassOverlay} />
              <View style={[styles.statIconContainer, { backgroundColor: 'rgba(0, 196, 140, 0.2)' }]}>
                <TrendingUp color={Colors.success} size={22} />
              </View>
              <Text style={styles.statValue}>{accuracy.toFixed(1)}%</Text>
              <Text style={styles.statLabel}>Accuracy</Text>
            </View>
            <View style={styles.statCard}>
              <LinearGradient
                colors={['rgba(255, 107, 157, 0.15)', 'rgba(255, 107, 157, 0.05)']}
                style={[StyleSheet.absoluteFill, { borderRadius: 20 }]}
              />
              <View style={styles.glassOverlay} />
              <View style={[styles.statIconContainer, { backgroundColor: 'rgba(255, 107, 157, 0.2)' }]}>
                <Clock color={Colors.accentPink} size={22} />
              </View>
              <Text style={styles.statValue}>{formattedStudyTime}</Text>
              <Text style={styles.statLabel}>Study Time</Text>
            </View>
            <View style={styles.statCard}>
              <LinearGradient
                colors={['rgba(255, 149, 0, 0.15)', 'rgba(255, 149, 0, 0.05)']}
                style={[StyleSheet.absoluteFill, { borderRadius: 20 }]}
              />
              <View style={styles.glassOverlay} />
              <View style={[styles.statIconContainer, { backgroundColor: 'rgba(255, 149, 0, 0.2)' }]}>
                <Flame color={Colors.streakOrange} size={22} />
              </View>
              <Text style={styles.statValue}>{streakData.currentStreak}</Text>
              <Text style={styles.statLabel}>Day Streak</Text>
            </View>
          </View>

          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Award color={Colors.primary} size={22} />
              <Text style={styles.sectionTitleInline}>Achievements</Text>
              <View style={styles.achievementCounter}>
                <Text style={styles.achievementCounterText}>{unlockedCount}/{achievements.length}</Text>
              </View>
            </View>
            <ScrollView 
              horizontal 
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.achievementsScroll}
            >
              {achievements.map((achievement) => {
                const isUnlocked = achievement.currentProgress >= achievement.requirement;
                const progress = getAchievementProgress(achievement);
                
                return (
                  <TouchableOpacity
                    key={achievement.id}
                    activeOpacity={0.8}
                    onPress={() => handleAchievementPress(achievement.id)}
                  >
                    <Animated.View 
                      style={[
                        styles.achievementCard,
                        { transform: [{ scale: getScaleAnim(achievement.id) }] },
                      ]}
                    >
                      <LinearGradient
                        colors={isUnlocked ? achievement.gradient : ['rgba(255,255,255,0.08)', 'rgba(255,255,255,0.04)']}
                        style={[StyleSheet.absoluteFill, { borderRadius: 20, opacity: isUnlocked ? 0.3 : 1 }]}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 1 }}
                      />
                      <View style={styles.glassOverlay} />
                      {!isUnlocked && (
                        <View style={styles.lockedOverlay}>
                          <Lock color={Colors.textMuted} size={16} />
                        </View>
                      )}
                      <View style={styles.achievementIconContainer}>
                        <Text style={[styles.achievementIcon, !isUnlocked && styles.achievementIconLocked]}>
                          {achievement.icon}
                        </Text>
                      </View>
                      <Text style={[styles.achievementName, !isUnlocked && styles.achievementNameLocked]}>
                        {achievement.name}
                      </Text>
                      <View style={styles.achievementProgressContainer}>
                        <View style={styles.achievementProgressBg}>
                          <LinearGradient
                            colors={isUnlocked ? achievement.gradient : [Colors.primary, Colors.primaryDark]}
                            style={[styles.achievementProgressFill, { width: `${progress}%` }]}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0 }}
                          />
                        </View>
                        <Text style={styles.achievementProgressText}>
                          {achievement.currentProgress}/{achievement.requirement}
                        </Text>
                      </View>
                    </Animated.View>
                  </TouchableOpacity>
                );
              })}
            </ScrollView>
          </View>

          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Trophy color={Colors.warning} size={22} />
              <Text style={styles.sectionTitleInline}>Leaderboard</Text>
              <TouchableOpacity style={styles.seeAllButton} activeOpacity={0.7}>
                <Text style={styles.seeAllText}>See all</Text>
                <ChevronRight color={Colors.primary} size={16} />
              </TouchableOpacity>
            </View>
            
            <View style={styles.periodSelector}>
              {periods.map((period) => (
                <TouchableOpacity
                  key={period.key}
                  style={[
                    styles.periodButton,
                    selectedPeriod === period.key && styles.periodButtonActive,
                  ]}
                  onPress={() => setSelectedPeriod(period.key)}
                  activeOpacity={0.7}
                >
                  {selectedPeriod === period.key && (
                    <LinearGradient
                      colors={[Colors.primary, Colors.primaryDark]}
                      style={StyleSheet.absoluteFill}
                      start={{ x: 0, y: 0 }}
                      end={{ x: 1, y: 1 }}
                    />
                  )}
                  <Text style={[
                    styles.periodButtonText,
                    selectedPeriod === period.key && styles.periodButtonTextActive,
                  ]}>
                    {period.label}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>

            <View style={styles.leaderboardCard}>
              <LinearGradient
                colors={['rgba(255,255,255,0.08)', 'rgba(255,255,255,0.04)']}
                style={[StyleSheet.absoluteFill, { borderRadius: 20 }]}
              />
              <View style={styles.glassOverlay} />
              
              <View style={styles.podium}>
                {leaderboard.slice(0, 3).map((user, index) => {
                  const positions = [1, 0, 2];
                  const heights = [70, 90, 60];
                  const colors: readonly [string, string][] = [
                    ['#C0C0C0', '#A8A8A8'],
                    ['#FFD700', '#FFA500'],
                    ['#CD7F32', '#8B4513'],
                  ];
                  const orderIndex = positions[index];
                  
                  return (
                    <View key={user.id} style={[styles.podiumItem, { order: orderIndex }]}>
                      <View style={styles.podiumAvatarContainer}>
                        <LinearGradient
                          colors={colors[index]}
                          style={styles.podiumAvatarBorder}
                        >
                          <Image source={{ uri: user.avatar }} style={styles.podiumAvatar} />
                        </LinearGradient>
                        <View style={[styles.podiumBadge, { backgroundColor: colors[index][0] }]}>
                          <Text style={styles.podiumBadgeText}>{index + 1}</Text>
                        </View>
                      </View>
                      <Text style={styles.podiumName} numberOfLines={1}>{user.name.split(' ')[0]}</Text>
                      <Text style={styles.podiumPoints}>{(user.points / 1000).toFixed(1)}k</Text>
                      <View style={[styles.podiumBar, { height: heights[index] }]}>
                        <LinearGradient
                          colors={colors[index]}
                          style={StyleSheet.absoluteFill}
                        />
                      </View>
                    </View>
                  );
                })}
              </View>

              {leaderboard.slice(3, 7).map((user, index) => (
                <View 
                  key={user.id} 
                  style={[
                    styles.leaderboardItem,
                    index < 3 && styles.leaderboardItemBorder,
                    user.id === 'current' && styles.leaderboardItemHighlight,
                  ]}
                >
                  <Text style={styles.leaderboardRank}>#{user.rank}</Text>
                  <View style={styles.rankChange}>
                    {getRankChangeIcon(index + 3)}
                  </View>
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
                    <Text style={styles.streakEmoji}>🔥</Text>
                  </View>
                </View>
              ))}
            </View>
          </View>

          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Calendar color={Colors.accent} size={22} />
              <Text style={styles.sectionTitleInline}>Weekly Progress</Text>
            </View>
            <View style={styles.weeklyCard}>
              <LinearGradient
                colors={['rgba(0, 245, 212, 0.15)', 'rgba(0, 180, 216, 0.08)']}
                style={[StyleSheet.absoluteFill, { borderRadius: 20 }]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
              />
              <View style={styles.glassOverlay} />
              
              <View style={styles.weeklyHeader}>
                <ProgressRing 
                  progress={weeklyGoalProgress} 
                  size={100} 
                  strokeWidth={10}
                  color={Colors.accent}
                  label="goal"
                />
                <View style={styles.weeklyInfo}>
                  <Text style={styles.weeklyTitle}>{getMotivationalMessage()}</Text>
                  <Text style={styles.weeklySubtitle}>
                    {weeklyQuestionsTotal}/350 questions this week
                  </Text>
                  <View style={styles.weeklyStats}>
                    <View style={styles.weeklyStat}>
                      <Text style={styles.weeklyStatValue}>{weeklyQuestionsTotal}</Text>
                      <Text style={styles.weeklyStatLabel}>Questions</Text>
                    </View>
                    <View style={styles.weeklyStat}>
                      <Text style={styles.weeklyStatValue}>{formattedWeeklyStudyTime}</Text>
                      <Text style={styles.weeklyStatLabel}>Study Time</Text>
                    </View>
                  </View>
                </View>
              </View>

              <View style={styles.chartContainer}>
                <View style={styles.chartBars}>
                  {weeklyData.map((day, index) => {
                    const barHeight = day.questions > 0 ? (day.questions / maxQuestions) * 80 : 4;
                    const isToday = index === 6;
                    
                    return (
                      <View key={day.date} style={styles.chartBarContainer}>
                        <View style={styles.chartBarWrapper}>
                          <View style={[styles.chartBarBg, { height: 80 }]} />
                          <View style={[styles.chartBar, { height: barHeight }]}>
                            <LinearGradient
                              colors={isToday ? [Colors.accent, Colors.primary] : [Colors.primary, Colors.primaryDark]}
                              style={StyleSheet.absoluteFill}
                            />
                          </View>
                        </View>
                        <Text style={[styles.chartLabel, isToday && styles.chartLabelToday]}>
                          {day.day}
                        </Text>
                        <Text style={styles.chartValue}>{day.questions}</Text>
                      </View>
                    );
                  })}
                </View>
              </View>
            </View>
          </View>

          <View style={{ height: 40 }} />
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
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.glassBorder,
    overflow: 'hidden',
  },
  profileCard: {
    marginHorizontal: 20,
    marginBottom: 20,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: Colors.glassBorder,
    padding: 20,
    overflow: 'hidden',
  },
  glassOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(255,255,255,0.03)',
    borderRadius: 20,
  },
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  avatarContainer: {
    position: 'relative',
  },
  avatarBorder: {
    width: 78,
    height: 78,
    borderRadius: 39,
    padding: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    width: 72,
    height: 72,
    borderRadius: 36,
  },
  rankBadge: {
    position: 'absolute',
    bottom: -4,
    right: -4,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: Colors.background,
    overflow: 'hidden',
  },
  rankText: {
    fontSize: 12,
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
  streakBadgeSmall: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 149, 0, 0.2)',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 12,
    gap: 4,
  },
  streakTextSmall: {
    fontSize: 14,
    fontWeight: '700' as const,
    color: Colors.streakOrange,
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
    borderRadius: 14,
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
    width: (SCREEN_WIDTH - 52) / 2,
    alignItems: 'center',
    paddingVertical: 18,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: Colors.glassBorder,
    overflow: 'hidden',
  },
  statIconContainer: {
    width: 46,
    height: 46,
    borderRadius: 23,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  statValue: {
    fontSize: 26,
    fontWeight: '700' as const,
    color: Colors.text,
  },
  statLabel: {
    fontSize: 13,
    color: Colors.textSecondary,
    marginTop: 4,
  },
  section: {
    marginBottom: 24,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 14,
    paddingHorizontal: 20,
  },
  sectionTitleInline: {
    fontSize: 18,
    fontWeight: '700' as const,
    color: Colors.text,
    flex: 1,
  },
  achievementCounter: {
    backgroundColor: 'rgba(0, 180, 216, 0.2)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
  },
  achievementCounterText: {
    fontSize: 13,
    fontWeight: '600' as const,
    color: Colors.primary,
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
  achievementsScroll: {
    paddingHorizontal: 20,
    gap: 12,
  },
  achievementCard: {
    width: 140,
    alignItems: 'center',
    paddingVertical: 18,
    paddingHorizontal: 12,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: Colors.glassBorder,
    overflow: 'hidden',
  },
  lockedOverlay: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  achievementIconContainer: {
    width: 48,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  achievementIcon: {
    fontSize: 32,
  },
  achievementIconLocked: {
    opacity: 0.4,
  },
  achievementName: {
    fontSize: 13,
    fontWeight: '600' as const,
    color: Colors.text,
    textAlign: 'center',
    marginBottom: 10,
  },
  achievementNameLocked: {
    color: Colors.textMuted,
  },
  achievementProgressContainer: {
    width: '100%',
  },
  achievementProgressBg: {
    height: 6,
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: 3,
    overflow: 'hidden',
  },
  achievementProgressFill: {
    height: '100%',
    borderRadius: 3,
  },
  achievementProgressText: {
    fontSize: 10,
    color: Colors.textSecondary,
    textAlign: 'center',
    marginTop: 6,
  },
  periodSelector: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginBottom: 14,
    backgroundColor: 'rgba(255,255,255,0.06)',
    borderRadius: 12,
    padding: 4,
    borderWidth: 1,
    borderColor: Colors.glassBorder,
  },
  periodButton: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
    overflow: 'hidden',
  },
  periodButtonActive: {},
  periodButtonText: {
    fontSize: 12,
    fontWeight: '600' as const,
    color: Colors.textSecondary,
  },
  periodButtonTextActive: {
    color: Colors.text,
    fontWeight: '700' as const,
  },
  leaderboardCard: {
    marginHorizontal: 20,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: Colors.glassBorder,
    padding: 16,
    overflow: 'hidden',
  },
  podium: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginBottom: 20,
    paddingTop: 10,
  },
  podiumItem: {
    alignItems: 'center',
    width: (SCREEN_WIDTH - 72) / 3,
  },
  podiumAvatarContainer: {
    position: 'relative',
    marginBottom: 8,
  },
  podiumAvatarBorder: {
    width: 54,
    height: 54,
    borderRadius: 27,
    padding: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  podiumAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  podiumBadge: {
    position: 'absolute',
    bottom: -4,
    left: '50%',
    marginLeft: -12,
    width: 24,
    height: 24,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: Colors.background,
  },
  podiumBadgeText: {
    fontSize: 12,
    fontWeight: '700' as const,
    color: Colors.background,
  },
  podiumName: {
    fontSize: 12,
    fontWeight: '600' as const,
    color: Colors.text,
    marginBottom: 2,
  },
  podiumPoints: {
    fontSize: 11,
    color: Colors.textSecondary,
    marginBottom: 8,
  },
  podiumBar: {
    width: 50,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    overflow: 'hidden',
  },
  leaderboardItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
  },
  leaderboardItemBorder: {
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255,255,255,0.08)',
  },
  leaderboardItemHighlight: {
    backgroundColor: 'rgba(0, 180, 216, 0.1)',
    marginHorizontal: -16,
    paddingHorizontal: 16,
    borderRadius: 12,
  },
  leaderboardRank: {
    width: 32,
    fontSize: 13,
    fontWeight: '600' as const,
    color: Colors.textSecondary,
  },
  rankChange: {
    width: 20,
    alignItems: 'center',
  },
  leaderboardAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginLeft: 4,
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
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2,
  },
  streakNumber: {
    fontSize: 16,
    fontWeight: '700' as const,
    color: Colors.streakOrange,
  },
  streakEmoji: {
    fontSize: 14,
  },
  weeklyCard: {
    marginHorizontal: 20,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: Colors.glassBorder,
    padding: 20,
    overflow: 'hidden',
  },
  weeklyHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  weeklyInfo: {
    flex: 1,
    marginLeft: 20,
  },
  weeklyTitle: {
    fontSize: 16,
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
    gap: 24,
  },
  weeklyStat: {},
  weeklyStatValue: {
    fontSize: 18,
    fontWeight: '700' as const,
    color: Colors.accent,
  },
  weeklyStatLabel: {
    fontSize: 11,
    color: Colors.textSecondary,
    marginTop: 2,
  },
  chartContainer: {
    marginTop: 8,
  },
  chartBars: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  chartBarContainer: {
    alignItems: 'center',
    flex: 1,
  },
  chartBarWrapper: {
    height: 80,
    width: 24,
    justifyContent: 'flex-end',
    position: 'relative',
  },
  chartBarBg: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(255,255,255,0.05)',
    borderRadius: 4,
  },
  chartBar: {
    width: '100%',
    borderRadius: 4,
    overflow: 'hidden',
    minHeight: 4,
  },
  chartLabel: {
    fontSize: 11,
    color: Colors.textSecondary,
    marginTop: 8,
  },
  chartLabelToday: {
    color: Colors.accent,
    fontWeight: '600' as const,
  },
  chartValue: {
    fontSize: 10,
    color: Colors.textMuted,
    marginTop: 2,
  },
});
