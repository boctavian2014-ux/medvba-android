import { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import {
  X,
  Crown,
  Check,
  Zap,
  Brain,
  Users,
  Infinity,
  Star,
  Shield,
} from 'lucide-react-native';
import * as Haptics from 'expo-haptics';
import Colors from '@/constants/colors';
import GlassCard from '@/components/GlassCard';
import { useSubscription } from '@/providers/SubscriptionProvider';

const premiumFeatures = [
  {
    icon: Infinity,
    title: 'Unlimited Quizzes',
    description: 'Practice as much as you want, any mode',
  },
  {
    icon: Brain,
    title: 'Unlimited AI Tutor',
    description: 'Ask unlimited questions to your AI medical tutor',
  },
  {
    icon: Zap,
    title: 'All Quiz Modes',
    description: 'Access Practice (25Q) and Exam Simulation (100Q)',
  },
  {
    icon: Users,
    title: 'Study Rooms',
    description: 'Create and join unlimited study rooms',
  },
  {
    icon: Star,
    title: 'Priority Support',
    description: 'Get help faster with priority customer support',
  },
  {
    icon: Shield,
    title: 'Early Access',
    description: 'Be first to try new features and content',
  },
];

interface PlanOption {
  id: string;
  name: string;
  price: string;
  period: string;
  savings?: string;
  popular?: boolean;
}

const plans: PlanOption[] = [
  {
    id: 'weekly',
    name: 'Weekly',
    price: '$4.99',
    period: '/week',
  },
  {
    id: 'monthly',
    name: 'Monthly',
    price: '$9.99',
    period: '/month',
    savings: 'Save 50%',
    popular: true,
  },
  {
    id: 'yearly',
    name: 'Yearly',
    price: '$59.99',
    period: '/year',
    savings: 'Save 75%',
  },
];

export default function PaywallScreen() {
  const router = useRouter();
  const { setPremiumStatus, getRemainingQuizzes, getRemainingAiQuestions } = useSubscription();
  const [selectedPlan, setSelectedPlan] = useState('monthly');
  const [isLoading, setIsLoading] = useState(false);

  const remainingQuizzes = getRemainingQuizzes();
  const remainingAi = getRemainingAiQuestions();

  const handleClose = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    router.back();
  };

  const handleSelectPlan = (planId: string) => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    setSelectedPlan(planId);
  };

  const handleSubscribe = async () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    setIsLoading(true);
    
    // TODO: Integrate with RevenueCat here
    // For now, simulate a purchase
    console.log('[Paywall] Subscribe to plan:', selectedPlan);
    
    setTimeout(async () => {
      // This will be replaced with actual RevenueCat purchase flow
      await setPremiumStatus(true);
      setIsLoading(false);
      router.back();
    }, 1500);
  };

  const handleRestorePurchases = async () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    setIsLoading(true);
    
    // TODO: Integrate with RevenueCat restore
    console.log('[Paywall] Restoring purchases...');
    
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[Colors.background, '#0A2540', Colors.background]}
        style={StyleSheet.absoluteFill}
        locations={[0, 0.5, 1]}
      />
      
      <SafeAreaView style={styles.safeArea} edges={['top', 'bottom']}>
        <TouchableOpacity style={styles.closeButton} onPress={handleClose}>
          <X color={Colors.textSecondary} size={24} />
        </TouchableOpacity>

        <ScrollView 
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          <View style={styles.header}>
            <LinearGradient
              colors={[Colors.warning, '#FF9500']}
              style={styles.crownContainer}
            >
              <Crown color={Colors.background} size={32} />
            </LinearGradient>
            <Text style={styles.title}>Upgrade to Premium</Text>
            <Text style={styles.subtitle}>
              Unlock your full learning potential
            </Text>
          </View>

          {(remainingQuizzes === 0 || remainingAi === 0) && (
            <GlassCard style={styles.limitWarning}>
              <Text style={styles.limitWarningText}>
                {remainingQuizzes === 0 && remainingAi === 0
                  ? "You've reached your daily quiz and AI tutor limits"
                  : remainingQuizzes === 0
                  ? "You've used all 2 free quizzes today"
                  : "You've used your free AI question today"}
              </Text>
              <Text style={styles.limitWarningSubtext}>
                Upgrade to continue learning without limits
              </Text>
            </GlassCard>
          )}

          <View style={styles.featuresSection}>
            {premiumFeatures.map((feature, index) => (
              <View key={index} style={styles.featureRow}>
                <View style={styles.featureIconContainer}>
                  <feature.icon color={Colors.primary} size={20} />
                </View>
                <View style={styles.featureContent}>
                  <Text style={styles.featureTitle}>{feature.title}</Text>
                  <Text style={styles.featureDescription}>{feature.description}</Text>
                </View>
                <Check color={Colors.success} size={20} />
              </View>
            ))}
          </View>

          <View style={styles.plansSection}>
            <Text style={styles.plansSectionTitle}>Choose your plan</Text>
            
            <View style={styles.plansGrid}>
              {plans.map((plan) => (
                <TouchableOpacity
                  key={plan.id}
                  onPress={() => handleSelectPlan(plan.id)}
                  style={[
                    styles.planCard,
                    selectedPlan === plan.id && styles.planCardSelected,
                  ]}
                >
                  {plan.popular && (
                    <View style={styles.popularBadge}>
                      <Text style={styles.popularBadgeText}>MOST POPULAR</Text>
                    </View>
                  )}
                  <Text style={styles.planName}>{plan.name}</Text>
                  <View style={styles.planPriceRow}>
                    <Text style={styles.planPrice}>{plan.price}</Text>
                    <Text style={styles.planPeriod}>{plan.period}</Text>
                  </View>
                  {plan.savings && (
                    <View style={styles.savingsBadge}>
                      <Text style={styles.savingsText}>{plan.savings}</Text>
                    </View>
                  )}
                  <View style={[
                    styles.planRadio,
                    selectedPlan === plan.id && styles.planRadioSelected,
                  ]}>
                    {selectedPlan === plan.id && (
                      <View style={styles.planRadioInner} />
                    )}
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          <TouchableOpacity
            style={[styles.subscribeButton, isLoading && styles.subscribeButtonDisabled]}
            onPress={handleSubscribe}
            disabled={isLoading}
          >
            <LinearGradient
              colors={[Colors.primary, Colors.primaryDark]}
              style={styles.subscribeGradient}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
            >
              {isLoading ? (
                <ActivityIndicator color={Colors.text} />
              ) : (
                <>
                  <Crown color={Colors.text} size={20} />
                  <Text style={styles.subscribeButtonText}>
                    Start Premium
                  </Text>
                </>
              )}
            </LinearGradient>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.restoreButton}
            onPress={handleRestorePurchases}
            disabled={isLoading}
          >
            <Text style={styles.restoreButtonText}>Restore Purchases</Text>
          </TouchableOpacity>

          <Text style={styles.disclaimer}>
            Payment will be charged to your App Store account. Subscription automatically renews unless cancelled at least 24 hours before the end of the current period.
          </Text>
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
  closeButton: {
    position: 'absolute' as const,
    top: 60,
    right: 20,
    zIndex: 10,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: Colors.cardBgLight,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 40,
  },
  header: {
    alignItems: 'center',
    marginBottom: 24,
  },
  crownContainer: {
    width: 72,
    height: 72,
    borderRadius: 36,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: '700' as const,
    color: Colors.text,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: Colors.textSecondary,
    textAlign: 'center' as const,
  },
  limitWarning: {
    backgroundColor: 'rgba(255, 71, 87, 0.15)',
    borderColor: Colors.error,
    borderWidth: 1,
    marginBottom: 24,
    alignItems: 'center',
  },
  limitWarningText: {
    fontSize: 15,
    fontWeight: '600' as const,
    color: Colors.error,
    textAlign: 'center' as const,
  },
  limitWarningSubtext: {
    fontSize: 13,
    color: Colors.textSecondary,
    marginTop: 4,
    textAlign: 'center' as const,
  },
  featuresSection: {
    marginBottom: 28,
  },
  featureRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: Colors.glassBorder,
  },
  featureIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: Colors.cardBgLight,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  featureContent: {
    flex: 1,
  },
  featureTitle: {
    fontSize: 15,
    fontWeight: '600' as const,
    color: Colors.text,
  },
  featureDescription: {
    fontSize: 13,
    color: Colors.textSecondary,
    marginTop: 2,
  },
  plansSection: {
    marginBottom: 24,
  },
  plansSectionTitle: {
    fontSize: 18,
    fontWeight: '700' as const,
    color: Colors.text,
    marginBottom: 16,
    textAlign: 'center' as const,
  },
  plansGrid: {
    flexDirection: 'row',
    gap: 12,
  },
  planCard: {
    flex: 1,
    backgroundColor: Colors.cardBgLight,
    borderRadius: 16,
    padding: 16,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'transparent',
    position: 'relative' as const,
  },
  planCardSelected: {
    borderColor: Colors.primary,
    backgroundColor: 'rgba(0, 180, 216, 0.1)',
  },
  popularBadge: {
    position: 'absolute' as const,
    top: -10,
    backgroundColor: Colors.primary,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },
  popularBadgeText: {
    fontSize: 9,
    fontWeight: '700' as const,
    color: Colors.text,
  },
  planName: {
    fontSize: 14,
    fontWeight: '600' as const,
    color: Colors.textSecondary,
    marginBottom: 8,
    marginTop: 4,
  },
  planPriceRow: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  planPrice: {
    fontSize: 20,
    fontWeight: '700' as const,
    color: Colors.text,
  },
  planPeriod: {
    fontSize: 12,
    color: Colors.textMuted,
  },
  savingsBadge: {
    backgroundColor: 'rgba(0, 196, 140, 0.2)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
    marginTop: 8,
  },
  savingsText: {
    fontSize: 10,
    fontWeight: '600' as const,
    color: Colors.success,
  },
  planRadio: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: Colors.textMuted,
    marginTop: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  planRadioSelected: {
    borderColor: Colors.primary,
  },
  planRadioInner: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: Colors.primary,
  },
  subscribeButton: {
    borderRadius: 16,
    overflow: 'hidden',
    marginBottom: 12,
  },
  subscribeButtonDisabled: {
    opacity: 0.7,
  },
  subscribeGradient: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 18,
    gap: 10,
  },
  subscribeButtonText: {
    fontSize: 18,
    fontWeight: '700' as const,
    color: Colors.text,
  },
  restoreButton: {
    paddingVertical: 12,
    alignItems: 'center',
  },
  restoreButtonText: {
    fontSize: 14,
    color: Colors.textSecondary,
    textDecorationLine: 'underline' as const,
  },
  disclaimer: {
    fontSize: 11,
    color: Colors.textMuted,
    textAlign: 'center' as const,
    lineHeight: 16,
    marginTop: 16,
  },
});
