import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { 
  Bone, 
  Heart, 
  User, 
  Brain,
  Clock,
  Zap,
  Trophy,
  ChevronRight
} from 'lucide-react-native';
import { useRouter } from 'expo-router';
import * as Haptics from 'expo-haptics';
import Colors from '@/constants/colors';
import GlassCard from '@/components/GlassCard';
import { categories } from '@/mocks/questions';

const categoryIcons: Record<string, React.ComponentType<{ color: string; size: number }>> = {
  'upper-lower-limbs': Bone,
  'internal-organs': Heart,
  'head-neck': User,
  'neuroanatomy': Brain,
};

type QuizMode = 'practice' | 'exam' | 'quick';

export default function QuizScreen() {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleCategorySelect = (categoryId: string) => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    setSelectedCategory(categoryId === selectedCategory ? null : categoryId);
  };

  const handleStartQuiz = (mode: QuizMode) => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    router.push({
      pathname: '/quiz-session',
      params: { 
        category: selectedCategory || 'mixed',
        mode: mode
      }
    });
  };

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
            <Text style={styles.title}>Quiz</Text>
            <Text style={styles.subtitle}>Choose a category and start learning</Text>
          </View>

          <View style={styles.modesSection}>
            <Text style={styles.sectionTitle}>Quiz Modes</Text>
            <View style={styles.modesGrid}>
              <TouchableOpacity 
                style={styles.modeCard}
                onPress={() => handleStartQuiz('quick')}
              >
                <LinearGradient
                  colors={[Colors.primary, Colors.primaryDark]}
                  style={styles.modeGradient}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                >
                  <Zap color={Colors.text} size={28} />
                  <Text style={styles.modeTitle}>Quick Quiz</Text>
                  <Text style={styles.modeSubtitle}>10 questions</Text>
                </LinearGradient>
              </TouchableOpacity>

              <TouchableOpacity 
                style={styles.modeCard}
                onPress={() => handleStartQuiz('practice')}
              >
                <LinearGradient
                  colors={['#FF6B9D', '#FF4757']}
                  style={styles.modeGradient}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                >
                  <Clock color={Colors.text} size={28} />
                  <Text style={styles.modeTitle}>Practice</Text>
                  <Text style={styles.modeSubtitle}>25 questions</Text>
                </LinearGradient>
              </TouchableOpacity>

              <TouchableOpacity 
                style={[styles.modeCard, styles.examCard]}
                onPress={() => handleStartQuiz('exam')}
              >
                <LinearGradient
                  colors={[Colors.secondary, '#012A5E']}
                  style={[styles.modeGradient, styles.examGradient]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                >
                  <Trophy color={Colors.warning} size={32} />
                  <View style={styles.examContent}>
                    <Text style={styles.modeTitle}>Exam Simulation</Text>
                    <Text style={styles.modeSubtitle}>100 questions • 3 hours • Realistic exam conditions</Text>
                  </View>
                  <ChevronRight color={Colors.text} size={24} />
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Categories</Text>
            <Text style={styles.sectionSubtitle}>
              {selectedCategory ? 'Tap again to deselect' : 'Select a category or start with mixed'}
            </Text>
            
            <View style={styles.categoriesGrid}>
              {categories.map((category) => {
                const IconComponent = categoryIcons[category.id] || Zap;
                const isSelected = selectedCategory === category.id;
                const progress = (category.completedCount / category.questionCount) * 100;
                
                return (
                  <TouchableOpacity
                    key={category.id}
                    onPress={() => handleCategorySelect(category.id)}
                  >
                    <GlassCard 
                      style={[
                        styles.categoryCard,
                        isSelected && styles.categoryCardSelected,
                        isSelected && { borderColor: category.color }
                      ]}
                      variant={isSelected ? 'light' : 'default'}
                    >
                      <View style={[styles.categoryIconContainer, { backgroundColor: category.color + '25' }]}>
                        <IconComponent color={category.color} size={28} />
                      </View>
                      <Text style={styles.categoryName}>{category.name}</Text>
                      <Text style={styles.categoryCount}>
                        {category.questionCount.toLocaleString()} Q
                      </Text>
                      <View style={styles.categoryProgressBar}>
                        <View 
                          style={[
                            styles.categoryProgressFill, 
                            { width: `${progress}%`, backgroundColor: category.color }
                          ]} 
                        />
                      </View>
                      <Text style={styles.categoryProgressText}>{progress.toFixed(0)}%</Text>
                    </GlassCard>
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>

          <GlassCard style={styles.statsCard}>
            <View style={styles.statsHeader}>
              <Text style={styles.statsTitle}>28,055+</Text>
              <Text style={styles.statsSubtitle}>Total Questions Available</Text>
            </View>
            <View style={styles.statsRow}>
              <View style={styles.statItem}>
                <Text style={styles.statItemValue}>4</Text>
                <Text style={styles.statItemLabel}>Languages</Text>
              </View>
              <View style={styles.statDivider} />
              <View style={styles.statItem}>
                <Text style={styles.statItemValue}>3</Text>
                <Text style={styles.statItemLabel}>Difficulty Levels</Text>
              </View>
              <View style={styles.statDivider} />
              <View style={styles.statItem}>
                <Text style={styles.statItemValue}>∞</Text>
                <Text style={styles.statItemLabel}>Practice</Text>
              </View>
            </View>
          </GlassCard>
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
    marginBottom: 24,
    marginTop: 8,
  },
  title: {
    fontSize: 28,
    fontWeight: '700' as const,
    color: Colors.text,
  },
  subtitle: {
    fontSize: 15,
    color: Colors.textSecondary,
    marginTop: 4,
  },
  modesSection: {
    marginBottom: 28,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700' as const,
    color: Colors.text,
    marginBottom: 4,
  },
  sectionSubtitle: {
    fontSize: 13,
    color: Colors.textSecondary,
    marginBottom: 16,
  },
  modesGrid: {
    gap: 12,
    marginTop: 12,
  },
  modeCard: {
    borderRadius: 16,
    overflow: 'hidden',
  },
  modeGradient: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    gap: 12,
  },
  modeTitle: {
    fontSize: 18,
    fontWeight: '700' as const,
    color: Colors.text,
  },
  modeSubtitle: {
    fontSize: 13,
    color: 'rgba(255,255,255,0.8)',
    flex: 1,
  },
  examCard: {
    marginTop: 4,
  },
  examGradient: {
    paddingVertical: 24,
  },
  examContent: {
    flex: 1,
  },
  categoriesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  categoryCard: {
    width: 160,
    alignItems: 'center',
    paddingVertical: 20,
  },
  categoryCardSelected: {
    borderWidth: 2,
  },
  categoryIconContainer: {
    width: 56,
    height: 56,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  categoryName: {
    fontSize: 15,
    fontWeight: '600' as const,
    color: Colors.text,
    marginBottom: 4,
  },
  categoryCount: {
    fontSize: 12,
    color: Colors.textSecondary,
    marginBottom: 8,
  },
  categoryProgressBar: {
    width: '80%',
    height: 4,
    backgroundColor: Colors.cardBgLight,
    borderRadius: 2,
    overflow: 'hidden',
  },
  categoryProgressFill: {
    height: '100%',
    borderRadius: 2,
  },
  categoryProgressText: {
    fontSize: 11,
    color: Colors.textMuted,
    marginTop: 6,
  },
  statsCard: {
    marginBottom: 20,
  },
  statsHeader: {
    alignItems: 'center',
    marginBottom: 16,
  },
  statsTitle: {
    fontSize: 32,
    fontWeight: '700' as const,
    color: Colors.primary,
  },
  statsSubtitle: {
    fontSize: 14,
    color: Colors.textSecondary,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  statItem: {
    alignItems: 'center',
  },
  statItemValue: {
    fontSize: 24,
    fontWeight: '700' as const,
    color: Colors.text,
  },
  statItemLabel: {
    fontSize: 12,
    color: Colors.textSecondary,
    marginTop: 2,
  },
  statDivider: {
    width: 1,
    height: 40,
    backgroundColor: Colors.glassBorder,
  },
});
