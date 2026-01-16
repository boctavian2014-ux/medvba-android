import React, { useMemo } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { Shield, Database, Users, Lock, Mail, Globe } from 'lucide-react-native';
import { useTheme } from '@/providers/ThemeProvider';

const LAST_UPDATED = 'January 12, 2026';
const COMPANY_NAME = 'Dev AI LTD';
const COMPANY_ADDRESS = 'Bogdan Voivoda, № 1, Ruse 7002, Ruse Region, Ruse Municipality, Bulgaria';
const CONTACT_EMAIL = 'dev.ai.eood@icloud.com';

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

export default function PrivacyPolicyScreen() {
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
                colors={[colors.primary, colors.secondary]}
                style={StyleSheet.absoluteFill}
              />
              <Shield color={colors.text} size={32} />
            </View>
            <Text style={styles.lastUpdated}>Last Updated: {LAST_UPDATED}</Text>
          </View>

          <Text style={styles.intro}>
            This Privacy Policy describes how {COMPANY_NAME} (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) 
            collects, uses, and protects your personal information when you use 
            MedixStudyHub (the &quot;App&quot;).
          </Text>

          <Section
            icon={<Database color={colors.primary} size={20} />}
            title="Information We Collect"
          >
            <Text style={styles.paragraph}>
              <Text style={styles.bold}>Account Information:</Text> When you create an account, 
              we collect your name, email address, and profile picture.
            </Text>
            <Text style={styles.paragraph}>
              <Text style={styles.bold}>Quiz Progress Data:</Text> We track your quiz answers, 
              scores, accuracy rates, study time, and learning progress to provide personalized 
              learning experiences.
            </Text>
            <Text style={styles.paragraph}>
              <Text style={styles.bold}>Study Session Data:</Text> Duration of study sessions, 
              topics studied, and performance metrics.
            </Text>
            <Text style={styles.paragraph}>
              <Text style={styles.bold}>Video Call Data:</Text> When you participate in live 
              study rooms, we may access your camera and microphone through Zoom integration. 
              We do not record these sessions unless explicitly stated.
            </Text>
            <Text style={styles.paragraph}>
              <Text style={styles.bold}>Device Information:</Text> Device type, operating system, 
              and app version for troubleshooting and optimization.
            </Text>
          </Section>

          <Section
            icon={<Users color={colors.accent} size={20} />}
            title="Third-Party Services"
          >
            <Text style={styles.paragraph}>
              We use the following third-party services that may collect data:
            </Text>
            <View style={styles.bulletList}>
              <Text style={styles.bulletItem}>
                • <Text style={styles.bold}>Supabase:</Text> Database hosting and authentication
              </Text>
              <Text style={styles.bulletItem}>
                • <Text style={styles.bold}>Zoom:</Text> Video conferencing for live study rooms
              </Text>
              <Text style={styles.bulletItem}>
                • <Text style={styles.bold}>Google Cloud Vision:</Text> OCR functionality (if enabled)
              </Text>
              <Text style={styles.bulletItem}>
                • <Text style={styles.bold}>RevenueCat:</Text> Subscription management (if applicable)
              </Text>
            </View>
            <Text style={styles.paragraph}>
              Each service has its own privacy policy. We encourage you to review them.
            </Text>
          </Section>

          <Section
            icon={<Lock color={colors.success} size={20} />}
            title="How We Use Your Information"
          >
            <View style={styles.bulletList}>
              <Text style={styles.bulletItem}>• Provide and improve the App&apos;s functionality</Text>
              <Text style={styles.bulletItem}>• Track your learning progress and provide statistics</Text>
              <Text style={styles.bulletItem}>• Enable social features like study rooms and leaderboards</Text>
              <Text style={styles.bulletItem}>• Send important notifications about your account</Text>
              <Text style={styles.bulletItem}>• Analyze usage patterns to improve user experience</Text>
              <Text style={styles.bulletItem}>• Respond to your support requests</Text>
            </View>
          </Section>

          <Section
            icon={<Globe color={colors.accentPink} size={20} />}
            title="Your Rights (GDPR)"
          >
            <Text style={styles.paragraph}>
              If you are located in the European Economic Area (EEA), you have the following rights:
            </Text>
            <View style={styles.bulletList}>
              <Text style={styles.bulletItem}>
                • <Text style={styles.bold}>Access:</Text> Request a copy of your personal data
              </Text>
              <Text style={styles.bulletItem}>
                • <Text style={styles.bold}>Rectification:</Text> Request correction of inaccurate data
              </Text>
              <Text style={styles.bulletItem}>
                • <Text style={styles.bold}>Erasure:</Text> Request deletion of your personal data
              </Text>
              <Text style={styles.bulletItem}>
                • <Text style={styles.bold}>Portability:</Text> Request transfer of your data
              </Text>
              <Text style={styles.bulletItem}>
                • <Text style={styles.bold}>Restriction:</Text> Request limitation of processing
              </Text>
              <Text style={styles.bulletItem}>
                • <Text style={styles.bold}>Objection:</Text> Object to certain processing activities
              </Text>
            </View>
            <Text style={styles.paragraph}>
              To exercise these rights, contact us at {CONTACT_EMAIL}.
            </Text>
          </Section>

          <Section
            icon={<Shield color={colors.warning} size={20} />}
            title="Data Security"
          >
            <Text style={styles.paragraph}>
              We implement industry-standard security measures to protect your data, including:
            </Text>
            <View style={styles.bulletList}>
              <Text style={styles.bulletItem}>• Encrypted data transmission (HTTPS/TLS)</Text>
              <Text style={styles.bulletItem}>• Secure database storage with access controls</Text>
              <Text style={styles.bulletItem}>• Regular security audits and updates</Text>
              <Text style={styles.bulletItem}>• Limited employee access to personal data</Text>
            </View>
          </Section>

          <Section
            icon={<Database color={colors.primary} size={20} />}
            title="Data Retention"
          >
            <Text style={styles.paragraph}>
              We retain your personal data for as long as your account is active or as needed 
              to provide services. You can request deletion of your account and associated 
              data at any time.
            </Text>
            <Text style={styles.paragraph}>
              Quiz progress and statistics may be retained in anonymized form for analytical purposes.
            </Text>
          </Section>

          <Section
            icon={<Users color={colors.accent} size={20} />}
            title="Children's Privacy"
          >
            <Text style={styles.paragraph}>
              The App is intended for users aged 13 and older. We do not knowingly collect 
              personal information from children under 13. If you believe we have collected 
              such information, please contact us immediately.
            </Text>
          </Section>

          <Section
            icon={<Mail color={colors.accentPink} size={20} />}
            title="Contact Us"
          >
            <Text style={styles.paragraph}>
              If you have questions about this Privacy Policy or our data practices, contact us at:
            </Text>
            <View style={styles.contactBox}>
              <Text style={styles.contactText}>{COMPANY_NAME}</Text>
              <Text style={styles.contactText}>{COMPANY_ADDRESS}</Text>
              <Text style={styles.contactEmail}>{CONTACT_EMAIL}</Text>
            </View>
          </Section>

          <Text style={styles.footer}>
            We may update this Privacy Policy from time to time. We will notify you of any 
            material changes by posting the new policy on this page and updating the 
            &quot;Last Updated&quot; date.
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
    marginBottom: 24,
    textAlign: 'center',
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
  paragraph: {
    fontSize: 14,
    color: colors.textSecondary,
    lineHeight: 22,
    marginBottom: 12,
  },
  bold: {
    fontWeight: '600' as const,
    color: colors.text,
  },
  bulletList: {
    marginTop: 8,
  },
  bulletItem: {
    fontSize: 14,
    color: colors.textSecondary,
    lineHeight: 24,
    marginBottom: 4,
  },
  contactBox: {
    backgroundColor: 'rgba(0, 180, 216, 0.1)',
    padding: 16,
    borderRadius: 12,
    marginTop: 12,
  },
  contactText: {
    fontSize: 14,
    color: colors.textSecondary,
    lineHeight: 22,
  },
  contactEmail: {
    fontSize: 14,
    color: colors.primary,
    marginTop: 4,
  },
  footer: {
    fontSize: 13,
    color: colors.textMuted,
    lineHeight: 20,
    textAlign: 'center',
    marginTop: 16,
    fontStyle: 'italic',
  },
});
