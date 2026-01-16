import React, { useMemo } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { Heart, Users, AlertOctagon, Flag, ShieldCheck, MessageCircle } from 'lucide-react-native';
import { useTheme } from '@/providers/ThemeProvider';

const LAST_UPDATED = 'January 12, 2026';
const CONTACT_EMAIL = 'contact@devaieood.com';

interface SectionProps {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}

function Section({ icon, title, children }: SectionProps) {
  const { colors } = useTheme();
  const styles = useMemo(() => createStyles(colors), [colors]);

  return (
    <View style={styles.section}>
      <View style={styles.sectionHeader}>
        {icon}
        <Text style={styles.sectionTitle}>{title}</Text>
      </View>
      <View style={styles.sectionContent}>
        {children}
      </View>
    </View>
  );
}

export default function CodeOfConductScreen() {
  const { colors } = useTheme();
  const styles = useMemo(() => createStyles(colors), [colors]);

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[colors.background, colors.backgroundLight]}
        style={StyleSheet.absoluteFill}
      />
      <SafeAreaView style={styles.safeArea} edges={['bottom']}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          <View style={styles.header}>
            <View style={styles.iconContainer}>
              <LinearGradient
                colors={[colors.success, colors.accent]}
                style={StyleSheet.absoluteFill}
              />
              <Heart color={colors.text} size={32} />
            </View>
            <Text style={styles.lastUpdated}>Last Updated: {LAST_UPDATED}</Text>
          </View>

          <Text style={styles.intro}>
            MedixStudyHub is a community of medical students supporting each other. This Code of 
            Conduct ensures a safe, respectful, and productive learning environment for everyone.
          </Text>

          <View style={styles.highlightBox}>
            <LinearGradient
              colors={['rgba(0, 196, 140, 0.15)', 'rgba(0, 245, 212, 0.1)']}
              style={StyleSheet.absoluteFill}
            />
            <Text style={styles.highlightTitle}>Our Core Values</Text>
            <Text style={styles.highlightText}>
              Respect • Integrity • Collaboration • Inclusivity • Excellence
            </Text>
          </View>

          <Section
            icon={<Users color={colors.primary} size={20} />}
            title="Study Room Behavior"
          >
            <Text style={styles.subheading}>Expected Behavior:</Text>
            <View style={styles.bulletList}>
              <Text style={styles.bulletItem}>✓ Be respectful and courteous to all participants</Text>
              <Text style={styles.bulletItem}>✓ Keep discussions relevant to studying and learning</Text>
              <Text style={styles.bulletItem}>✓ Use appropriate language at all times</Text>
              <Text style={styles.bulletItem}>✓ Mute your microphone when not speaking</Text>
              <Text style={styles.bulletItem}>✓ Use appropriate virtual backgrounds</Text>
              <Text style={styles.bulletItem}>✓ Help fellow students when they have questions</Text>
              <Text style={styles.bulletItem}>✓ Report any technical issues promptly</Text>
            </View>
            
            <Text style={[styles.subheading, { marginTop: 16 }]}>Prohibited Behavior:</Text>
            <View style={styles.bulletList}>
              <Text style={styles.bulletItemRed}>✗ Sharing inappropriate or offensive content</Text>
              <Text style={styles.bulletItemRed}>✗ Recording sessions without consent</Text>
              <Text style={styles.bulletItemRed}>✗ Disrupting study sessions intentionally</Text>
              <Text style={styles.bulletItemRed}>✗ Sharing personal information of others</Text>
              <Text style={styles.bulletItemRed}>✗ Using study rooms for non-educational purposes</Text>
            </View>
          </Section>

          <Section
            icon={<AlertOctagon color={colors.error} size={20} />}
            title="Zero Tolerance Policy"
          >
            <Text style={styles.paragraph}>
              We have <Text style={styles.bold}>ZERO TOLERANCE</Text> for the following behaviors. 
              Violations will result in immediate account suspension:
            </Text>
            <View style={styles.warningBox}>
              <Text style={styles.warningItem}>🚫 Harassment or bullying of any kind</Text>
              <Text style={styles.warningItem}>🚫 Discrimination based on race, gender, religion, nationality, or any other characteristic</Text>
              <Text style={styles.warningItem}>🚫 Sexual harassment or inappropriate advances</Text>
              <Text style={styles.warningItem}>🚫 Threats of violence or harm</Text>
              <Text style={styles.warningItem}>🚫 Sharing explicit or pornographic content</Text>
              <Text style={styles.warningItem}>🚫 Doxxing or revealing personal information</Text>
              <Text style={styles.warningItem}>🚫 Hate speech or slurs</Text>
            </View>
          </Section>

          <Section
            icon={<ShieldCheck color={colors.success} size={20} />}
            title="Consequences of Violations"
          >
            <Text style={styles.paragraph}>
              Violations of this Code of Conduct will be addressed according to severity:
            </Text>
            
            <View style={styles.consequenceItem}>
              <View style={[styles.consequenceBadge, { backgroundColor: 'rgba(255, 184, 0, 0.2)' }]}>
                <Text style={[styles.consequenceLevel, { color: colors.warning }]}>Level 1</Text>
              </View>
              <View style={styles.consequenceContent}>
                <Text style={styles.consequenceTitle}>Warning</Text>
                <Text style={styles.consequenceDesc}>First minor offense - written warning via email</Text>
              </View>
            </View>

            <View style={styles.consequenceItem}>
              <View style={[styles.consequenceBadge, { backgroundColor: 'rgba(255, 149, 0, 0.2)' }]}>
                <Text style={[styles.consequenceLevel, { color: colors.streakOrange }]}>Level 2</Text>
              </View>
              <View style={styles.consequenceContent}>
                <Text style={styles.consequenceTitle}>Temporary Suspension</Text>
                <Text style={styles.consequenceDesc}>24-72 hour suspension from study rooms</Text>
              </View>
            </View>

            <View style={styles.consequenceItem}>
              <View style={[styles.consequenceBadge, { backgroundColor: 'rgba(255, 107, 157, 0.2)' }]}>
                <Text style={[styles.consequenceLevel, { color: colors.accentPink }]}>Level 3</Text>
              </View>
              <View style={styles.consequenceContent}>
                <Text style={styles.consequenceTitle}>Extended Suspension</Text>
                <Text style={styles.consequenceDesc}>7-30 day suspension from all social features</Text>
              </View>
            </View>

            <View style={styles.consequenceItem}>
              <View style={[styles.consequenceBadge, { backgroundColor: 'rgba(255, 71, 87, 0.2)' }]}>
                <Text style={[styles.consequenceLevel, { color: colors.error }]}>Level 4</Text>
              </View>
              <View style={styles.consequenceContent}>
                <Text style={styles.consequenceTitle}>Permanent Ban</Text>
                <Text style={styles.consequenceDesc}>Account termination without refund</Text>
              </View>
            </View>

            <Text style={styles.note}>
              Note: Severe violations (zero tolerance items) may result in immediate Level 4 action.
            </Text>
          </Section>

          <Section
            icon={<Flag color={colors.accentPink} size={20} />}
            title="How to Report Violations"
          >
            <Text style={styles.paragraph}>
              If you witness or experience any violation of this Code of Conduct:
            </Text>
            <View style={styles.reportSteps}>
              <View style={styles.reportStep}>
                <View style={styles.stepNumber}>
                  <Text style={styles.stepNumberText}>1</Text>
                </View>
                <Text style={styles.stepText}>
                  During a study room session, use the in-app report button to flag inappropriate behavior
                </Text>
              </View>
              <View style={styles.reportStep}>
                <View style={styles.stepNumber}>
                  <Text style={styles.stepNumberText}>2</Text>
                </View>
                <Text style={styles.stepText}>
                  Email us at {CONTACT_EMAIL} with details and any screenshots
                </Text>
              </View>
              <View style={styles.reportStep}>
                <View style={styles.stepNumber}>
                  <Text style={styles.stepNumberText}>3</Text>
                </View>
                <Text style={styles.stepText}>
                  Our team will review and respond within 24-48 hours
                </Text>
              </View>
            </View>
            <Text style={styles.paragraph}>
              All reports are confidential. We do not tolerate retaliation against reporters.
            </Text>
          </Section>

          <Section
            icon={<MessageCircle color={colors.accent} size={20} />}
            title="Creating a Positive Environment"
          >
            <Text style={styles.paragraph}>
              Help us build a supportive learning community:
            </Text>
            <View style={styles.bulletList}>
              <Text style={styles.bulletItem}>💡 Share study tips and resources</Text>
              <Text style={styles.bulletItem}>🤝 Offer help to struggling students</Text>
              <Text style={styles.bulletItem}>🎉 Celebrate others&apos; achievements</Text>
              <Text style={styles.bulletItem}>📚 Stay focused on educational goals</Text>
              <Text style={styles.bulletItem}>🌟 Be a role model for new members</Text>
              <Text style={styles.bulletItem}>❤️ Show empathy and understanding</Text>
            </View>
          </Section>

          <View style={styles.commitmentBox}>
            <LinearGradient
              colors={['rgba(0, 180, 216, 0.2)', 'rgba(2, 62, 138, 0.15)']}
              style={StyleSheet.absoluteFill}
            />
            <Text style={styles.commitmentTitle}>Our Commitment to You</Text>
            <Text style={styles.commitmentText}>
              We are committed to providing a safe, inclusive, and harassment-free learning 
              environment. We will enforce this Code of Conduct fairly and consistently.
            </Text>
          </View>

          <Text style={styles.footer}>
            By using MedixStudyHub, you agree to abide by this Code of Conduct. Thank you for 
            helping us maintain a positive learning community.
          </Text>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const createStyles = (colors: any) => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  safeArea: {
    flex: 1,
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 40,
  },
  header: {
    alignItems: 'center',
    marginBottom: 24,
  },
  iconContainer: {
    width: 64,
    height: 64,
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    marginBottom: 12,
  },
  lastUpdated: {
    fontSize: 13,
    color: colors.textSecondary,
  },
  intro: {
    fontSize: 15,
    color: colors.textSecondary,
    lineHeight: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  highlightBox: {
    borderRadius: 16,
    padding: 20,
    marginBottom: 24,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.glassBorder,
    overflow: 'hidden',
  },
  highlightTitle: {
    fontSize: 16,
    fontWeight: '700' as const,
    color: colors.text,
    marginBottom: 8,
  },
  highlightText: {
    fontSize: 14,
    color: colors.accent,
    textAlign: 'center',
    letterSpacing: 1,
  },
  section: {
    marginBottom: 24,
    backgroundColor: colors.cardBg,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: colors.glassBorder,
    overflow: 'hidden',
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.glassBorder,
    backgroundColor: 'rgba(255,255,255,0.03)',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600' as const,
    color: colors.text,
  },
  sectionContent: {
    padding: 16,
  },
  subheading: {
    fontSize: 14,
    fontWeight: '600' as const,
    color: colors.text,
    marginBottom: 12,
  },
  paragraph: {
    fontSize: 14,
    color: colors.textSecondary,
    lineHeight: 22,
    marginBottom: 12,
  },
  bold: {
    fontWeight: '700' as const,
    color: colors.error,
  },
  bulletList: {
    gap: 6,
  },
  bulletItem: {
    fontSize: 14,
    color: colors.textSecondary,
    lineHeight: 22,
  },
  bulletItemRed: {
    fontSize: 14,
    color: colors.error,
    lineHeight: 22,
  },
  warningBox: {
    backgroundColor: 'rgba(255, 71, 87, 0.1)',
    borderRadius: 12,
    padding: 16,
    marginTop: 12,
    borderWidth: 1,
    borderColor: 'rgba(255, 71, 87, 0.3)',
  },
  warningItem: {
    fontSize: 14,
    color: colors.textSecondary,
    lineHeight: 26,
  },
  consequenceItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 16,
    gap: 12,
  },
  consequenceBadge: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 8,
  },
  consequenceLevel: {
    fontSize: 12,
    fontWeight: '700' as const,
  },
  consequenceContent: {
    flex: 1,
  },
  consequenceTitle: {
    fontSize: 14,
    fontWeight: '600' as const,
    color: colors.text,
    marginBottom: 2,
  },
  consequenceDesc: {
    fontSize: 13,
    color: colors.textSecondary,
  },
  note: {
    fontSize: 12,
    color: colors.textMuted,
    fontStyle: 'italic',
    marginTop: 8,
  },
  reportSteps: {
    marginTop: 12,
    gap: 16,
  },
  reportStep: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 12,
  },
  stepNumber: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  stepNumberText: {
    fontSize: 14,
    fontWeight: '700' as const,
    color: colors.text,
  },
  stepText: {
    flex: 1,
    fontSize: 14,
    color: colors.textSecondary,
    lineHeight: 20,
  },
  commitmentBox: {
    borderRadius: 16,
    padding: 20,
    marginBottom: 24,
    borderWidth: 1,
    borderColor: colors.glassBorder,
    overflow: 'hidden',
  },
  commitmentTitle: {
    fontSize: 16,
    fontWeight: '700' as const,
    color: colors.text,
    marginBottom: 12,
    textAlign: 'center',
  },
  commitmentText: {
    fontSize: 14,
    color: colors.textSecondary,
    lineHeight: 22,
    textAlign: 'center',
  },
  footer: {
    fontSize: 13,
    color: colors.textMuted,
    lineHeight: 20,
    textAlign: 'center',
    fontStyle: 'italic',
  },
});
