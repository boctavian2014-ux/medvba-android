import React from 'react';
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
import Colors from '@/constants/colors';
import GlassCard from '@/components/GlassCard';
import ProgressRing from '@/components/ProgressRing';
import StreakBadge from '@/components/StreakBadge';
import { currentUser } from '@/mocks/users';
import { categories } from '@/mocks/questions';

export default function HomeScreen() {
  const router = useRouter();
  const totalQuestions = categories.reduce((sum, cat) => sum + cat.questionCount, 0);
  const completedQuestions = categories.reduce((sum, cat) => sum + cat.completedCount, 0);
  const overallProgress = (completedQuestions / totalQuestions) * 100;

  const todayGoal = 50;
  const todayProgress = 32;

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
            <View>
              <Text style={styles.greeting}>Good morning,</Text>
              <Text style={styles.userName}>{currentUser.name.split(' ')[0]} 👋</Text>
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
                <Text style={styles.heroTitle}>Continue Learning</Text>
                <Text style={styles.heroSubtitle}>
                  You have completed {todayProgress}/{todayGoal} questions today
                </Text>
                <TouchableOpacity 
                  style={styles.heroButton}
                  onPress={() => router.push('/quiz')}
                >
                  <LinearGradient
                    colors={[Colors.primary, Colors.primaryDark]}
                    style={styles.heroButtonGradient}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                  >
                    <Play color={Colors.text} size={18} fill={Colors.text} />
                    <Text style={styles.heroButtonText}>Start Quiz</Text>
                  </LinearGradient>
                </TouchableOpacity>
              </View>
              <ProgressRing 
                progress={(todayProgress / todayGoal) * 100} 
                size={90} 
                strokeWidth={10}
                color={Colors.accent}
                label="today"
              />
            </View>
          </GlassCard>

          <View style={styles.statsRow}>
            <GlassCard style={styles.statCard}>
              <TrendingUp color={Colors.success} size={24} />
              <Text style={styles.statValue}>{currentUser.accuracy}%</Text>
              <Text style={styles.statLabel}>Accuracy</Text>
            </GlassCard>
            <GlassCard style={styles.statCard}>
              <Target color={Colors.accentPink} size={24} />
              <Text style={styles.statValue}>{(currentUser.questionsAnswered / 1000).toFixed(1)}k</Text>
              <Text style={styles.statLabel}>Questions</Text>
            </GlassCard>
            <GlassCard style={styles.statCard}>
              <Clock color={Colors.warning} size={24} />
              <Text style={styles.statValue}>{currentUser.studyHours}h</Text>
              <Text style={styles.statLabel}>Study Time</Text>
            </GlassCard>
          </View>

          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>Your Progress</Text>
              <Text style={styles.sectionSubtitle}>{overallProgress.toFixed(1)}% complete</Text>
            </View>
            <GlassCard>
              <View style={styles.progressBar}>
                <LinearGradient
                  colors={[Colors.primary, Colors.accent]}
                  style={[styles.progressFill, { width: `${overallProgress}%` }]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                />
              </View>
              <View style={styles.progressStats}>
                <Text style={styles.progressText}>
                  <Text style={styles.progressHighlight}>{completedQuestions.toLocaleString()}</Text> of {totalQuestions.toLocaleString()} questions
                </Text>
              </View>
            </GlassCard>
          </View>

          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>Quick Start - Anatomy</Text>
              <TouchableOpacity onPress={() => router.push('/quiz')}>
                <Text style={styles.seeAll}>See all</Text>
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
                      <Text style={styles.categoryName}>{category.name}</Text>
                      <Text style={styles.categoryProgress}>
                        {category.completedCount.toLocaleString()} / {category.questionCount.toLocaleString()} questions
                      </Text>
                    </View>
                    <ChevronRight color={Colors.textMuted} size={20} />
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
    backgroundColor: Colors.background,
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
    color: Colors.textSecondary,
  },
  userName: {
    fontSize: 24,
    fontWeight: '700' as const,
    color: Colors.text,
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
    borderWidth: 2,
    borderColor: Colors.primary,
  },
  heroCard: {
    marginBottom: 20,
  },
  heroContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  heroLeft: {
    flex: 1,
    marginRight: 16,
  },
  heroTitle: {
    fontSize: 20,
    fontWeight: '700' as const,
    color: Colors.text,
    marginBottom: 6,
  },
  heroSubtitle: {
    fontSize: 14,
    color: Colors.textSecondary,
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
    color: Colors.text,
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
  },
  statValue: {
    fontSize: 20,
    fontWeight: '700' as const,
    color: Colors.text,
    marginTop: 8,
  },
  statLabel: {
    fontSize: 12,
    color: Colors.textSecondary,
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
    color: Colors.text,
  },
  sectionSubtitle: {
    fontSize: 14,
    color: Colors.primary,
    fontWeight: '600' as const,
  },
  seeAll: {
    fontSize: 14,
    color: Colors.primary,
    fontWeight: '600' as const,
  },
  progressBar: {
    height: 8,
    backgroundColor: Colors.cardBgLight,
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
    color: Colors.textSecondary,
  },
  progressHighlight: {
    color: Colors.text,
    fontWeight: '600' as const,
  },
  categoryCard: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
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
  },
  categoryName: {
    fontSize: 16,
    fontWeight: '600' as const,
    color: Colors.text,
  },
  categoryProgress: {
    fontSize: 13,
    color: Colors.textSecondary,
    marginTop: 2,
  },
});
