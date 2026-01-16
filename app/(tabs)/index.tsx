import React, { useCallback } from 'react';
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
import { Play, TrendingUp, Target, Clock, ChevronRight, Bone, Heart, User, Brain } from 'lucide-react-native';
import { useRouter } from 'expo-router';
import { useLanguage } from '@/providers/LanguageProvider';
import { useTheme } from '@/providers/ThemeProvider';
import GlassCard from '@/components/GlassCard';
import ProgressRing from '@/components/ProgressRing';
import StreakBadge from '@/components/StreakBadge';
import { currentUser } from '@/mocks/users';
import { categories } from '@/mocks/questions';
import { useQuizProgress } from '@/providers/QuizProgressProvider';

export default function HomeScreen() {
  const router = useRouter();
  const { t, getModuleName } = useLanguage();
  const { colors } = useTheme();
  const { dailyProgress, hasActiveSession, sessionState, lastSessionInfo, accuracy, formattedQuestionsCount, formattedStudyTime } = useQuizProgress();
  
  const totalQuestions = categories.reduce((sum, cat) => sum + cat.questionCount, 0);
  const completedQuestions = categories.reduce((sum, cat) => sum + cat.completedCount, 0);
  const overallProgress = (completedQuestions / totalQuestions) * 100;

  const todayGoal = dailyProgress.goal;
  const todayProgress = dailyProgress.questionsAnswered;
  
  const handleContinueLearning = useCallback(() => {
    if (hasActiveSession && sessionState) {
      console.log('[Home] Resuming active session at question', sessionState.currentIndex + 1, 'of', sessionState.questions.length);
      router.push({
        pathname: '/quiz-session',
        params: { 
          category: sessionState.category,
          mode: sessionState.mode,
          resume: 'true'
        }
      });
    } else if (lastSessionInfo) {
      console.log('[Home] Starting new session with last used settings:', lastSessionInfo.category, lastSessionInfo.mode);
      router.push({
        pathname: '/quiz-session',
        params: { 
          category: lastSessionInfo.category,
          mode: lastSessionInfo.mode
        }
      });
    } else {
      console.log('[Home] Starting default session');
      router.push({
        pathname: '/quiz-session',
        params: { 
          category: 'mixed',
          mode: 'practice'
        }
      });
    }
  }, [hasActiveSession, sessionState, lastSessionInfo, router]);

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <LinearGradient
        colors={[colors.background, colors.backgroundLight]}
        style={StyleSheet.absoluteFill}
      />
      <SafeAreaView style={styles.safeArea} edges={['top']}>
        <ScrollView 
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          <View style={styles.header}>
            <View style={styles.headerLeft}>
              <Image 
                source={{ uri: 'https://pub-e001eb4506b145aa938b5d3badbff6a5.r2.dev/attachments/zgrijzw7qzcug5rgiqbrr' }} 
                style={styles.appIcon} 
              />
              <View>
                <Text style={[styles.greeting, { color: colors.textSecondary }]}>{t('home.greeting')}</Text>
                <Text style={[styles.userName, { color: colors.text }]}>{currentUser.name.split(' ')[0]} 👋</Text>
              </View>
            </View>
            <View style={styles.headerRight}>
              <StreakBadge streak={currentUser.streak} />
              <TouchableOpacity onPress={() => router.push('/(tabs)/profile')}>
                <Image source={{ uri: currentUser.avatar }} style={styles.avatar} />
              </TouchableOpacity>
            </View>
          </View>

          <GlassCard style={styles.heroCard} variant="accent">
            <View style={styles.heroContent}>
              <View style={styles.heroLeft}>
                <Text style={[styles.heroTitle, { color: colors.text }]}>{t('home.continueLearning')}</Text>
                <Text style={[styles.heroSubtitle, { color: colors.textSecondary }]}>
                  {t('home.questionsToday').replace('{current}', String(todayProgress)).replace('{goal}', String(todayGoal))}
                </Text>
                <TouchableOpacity 
                  style={styles.heroButton}
                  onPress={handleContinueLearning}
                >
                  <LinearGradient
                    colors={[colors.primary, colors.primaryDark]}
                    style={styles.heroButtonGradient}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                  >
                    <Play color={colors.text} size={18} fill={colors.text} />
                    <Text style={[styles.heroButtonText, { color: colors.text }]}>
                      {hasActiveSession ? t('home.continueQuiz') : t('home.startQuiz')}
                    </Text>
                  </LinearGradient>
                </TouchableOpacity>
              </View>
              <ProgressRing 
                progress={(todayProgress / todayGoal) * 100} 
                size={90} 
                strokeWidth={10}
                color={colors.accent}
                label={t('home.today')}
              />
            </View>
          </GlassCard>

          <View style={styles.statsRow}>
            <GlassCard style={styles.statCard}>
              <TrendingUp color={colors.success} size={24} />
              <Text style={[styles.statValue, { color: colors.text }]}>{accuracy.toFixed(1)}%</Text>
              <Text style={[styles.statLabel, { color: colors.textSecondary }]}>{t('home.accuracy')}</Text>
            </GlassCard>
            <GlassCard style={styles.statCard}>
              <Target color={colors.accentPink} size={24} />
              <Text style={[styles.statValue, { color: colors.text }]}>{formattedQuestionsCount}</Text>
              <Text style={[styles.statLabel, { color: colors.textSecondary }]}>{t('home.questions')}</Text>
            </GlassCard>
            <GlassCard style={styles.statCard}>
              <Clock color={colors.warning} size={24} />
              <Text style={[styles.statValue, { color: colors.text }]}>{formattedStudyTime}</Text>
              <Text style={[styles.statLabel, { color: colors.textSecondary }]}>{t('home.studyTime')}</Text>
            </GlassCard>
          </View>

          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Text style={[styles.sectionTitle, { color: colors.text }]}>{t('home.yourProgress')}</Text>
              <Text style={[styles.sectionSubtitle, { color: colors.primary }]}>{overallProgress.toFixed(1)}% {t('home.complete')}</Text>
            </View>
            <GlassCard>
              <View style={[styles.progressBar, { backgroundColor: colors.cardBgLight }]}>
                <LinearGradient
                  colors={[colors.primary, colors.accent]}
                  style={[styles.progressFill, { width: `${overallProgress}%` }]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                />
              </View>
              <View style={styles.progressStats}>
                <Text style={[styles.progressText, { color: colors.textSecondary }]}>
                  <Text style={[styles.progressHighlight, { color: colors.text }]}>{completedQuestions.toLocaleString()}</Text> {t('home.ofQuestions').replace('{total}', totalQuestions.toLocaleString())}
                </Text>
              </View>
            </GlassCard>
          </View>

          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Text style={[styles.sectionTitle, { color: colors.text }]}>{t('home.quickStartAnatomy')}</Text>
              <TouchableOpacity onPress={() => router.push('/quiz')}>
                <Text style={[styles.seeAll, { color: colors.primary }]}>{t('home.seeAll')}</Text>
              </TouchableOpacity>
            </View>
            {categories.map((category) => {
              const iconMap: Record<string, React.ComponentType<{ color: string; size: number }>> = {
                'upper-lower-limbs': Bone,
                'internal-organs': Heart,
                'head-neck': User,
                'neuroanatomy': Brain,
              };
              const IconComponent = iconMap[category.id] || Bone;
              return (
                <TouchableOpacity 
                  key={category.id}
                  onPress={() => router.push({
                    pathname: '/quiz-session',
                    params: { category: category.id, mode: 'sequential' }
                  })}
                >
                  <GlassCard style={styles.categoryCard}>
                    <View style={[styles.categoryIcon, { backgroundColor: category.color + '20' }]}>
                      <IconComponent color={category.color} size={20} />
                    </View>
                    <View style={styles.categoryInfo}>
                      <Text style={[styles.categoryName, { color: colors.text }]}>{getModuleName(category.id)}</Text>
                      <Text style={[styles.categoryProgress, { color: colors.textSecondary }]}>
                        {t('home.categoryQuestions')
                          .replace('{current}', category.completedCount.toLocaleString())
                          .replace('{total}', category.questionCount.toLocaleString())}
                      </Text>
                    </View>
                    <ChevronRight color={colors.textMuted} size={20} />
                  </GlassCard>
                </TouchableOpacity>
              );
            })}
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
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    marginTop: 8,
  },
  greeting: {
    fontSize: 14,
  },
  userName: {
    fontSize: 24,
    fontWeight: '700' as const,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  appIcon: {
    width: 44,
    height: 44,
    borderRadius: 22,
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  avatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
  },
  heroCard: {
    marginBottom: 20,
    minHeight: 140,
  },
  heroContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  heroLeft: {
    flex: 1,
    marginRight: 16,
    justifyContent: 'center',
  },
  heroTitle: {
    fontSize: 20,
    fontWeight: '700' as const,
    marginBottom: 6,
  },
  heroSubtitle: {
    fontSize: 14,
    marginBottom: 16,
  },
  heroButton: {
    alignSelf: 'flex-start',
  },
  heroButtonGradient: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 25,
    gap: 8,
  },
  heroButtonText: {
    fontSize: 16,
    fontWeight: '600' as const,
  },
  statsRow: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 24,
  },
  statCard: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 16,
    minHeight: 100,
  },
  statValue: {
    fontSize: 20,
    fontWeight: '700' as const,
    marginTop: 8,
  },
  statLabel: {
    fontSize: 12,
    marginTop: 2,
  },
  section: {
    marginBottom: 24,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700' as const,
  },
  sectionSubtitle: {
    fontSize: 14,
    fontWeight: '600' as const,
  },
  seeAll: {
    fontSize: 14,
    fontWeight: '600' as const,
  },
  progressBar: {
    height: 8,
    borderRadius: 4,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    borderRadius: 4,
  },
  progressStats: {
    marginTop: 12,
  },
  progressText: {
    fontSize: 14,
  },
  progressHighlight: {
    fontWeight: '600' as const,
  },
  categoryCard: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    minHeight: 72,
    paddingVertical: 12,
  },
  categoryIcon: {
    width: 44,
    height: 44,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryInfo: {
    flex: 1,
    marginLeft: 12,
    justifyContent: 'center',
  },
  categoryName: {
    fontSize: 16,
    fontWeight: '600' as const,
    flexShrink: 1,
  },
  categoryProgress: {
    fontSize: 13,
    marginTop: 2,
    flexShrink: 1,
  },
});
