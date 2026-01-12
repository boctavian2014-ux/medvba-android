import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { FileText, UserCheck, AlertTriangle, Scale, ShieldX, Ban } from 'lucide-react-native';
import Colors from '@/constants/colors';

const LAST_UPDATED = 'January 12, 2026';
const COMPANY_NAME = '[YOUR COMPANY NAME]';
const COMPANY_ADDRESS = '[YOUR COMPANY ADDRESS]';
const CONTACT_EMAIL = 'support@medixstudyhub.com';

interface SectionProps {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}

function Section({ icon, title, children }: SectionProps) {
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

export default function TermsOfServiceScreen() {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[Colors.background, '#0D1F35', Colors.backgroundLight]}
        style={StyleSheet.absoluteFill}
        locations={[0, 0.5, 1]}
      />
      <SafeAreaView style={styles.safeArea} edges={['bottom']}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          <View style={styles.header}>
            <View style={styles.iconContainer}>
              <LinearGradient
                colors={[Colors.accent, Colors.primary]}
                style={StyleSheet.absoluteFill}
              />
              <FileText color={Colors.text} size={32} />
            </View>
            <Text style={styles.lastUpdated}>Last Updated: {LAST_UPDATED}</Text>
          </View>

          <Text style={styles.intro}>
            By using MedixStudyHub, you agree to these Terms of Service. Please read them carefully 
            before using the application.
          </Text>

          <Section
            icon={<UserCheck color={Colors.primary} size={20} />}
            title="Account Responsibilities"
          >
            <Text style={styles.paragraph}>
              <Text style={styles.bold}>Account Creation:</Text> You must provide accurate and 
              complete information when creating an account. You are responsible for maintaining 
              the confidentiality of your account credentials.
            </Text>
            <Text style={styles.paragraph}>
              <Text style={styles.bold}>Age Requirement:</Text> You must be at least 13 years old 
              to use this service. Users under 18 should have parental consent.
            </Text>
            <Text style={styles.paragraph}>
              <Text style={styles.bold}>Account Security:</Text> You are responsible for all 
              activities that occur under your account. Notify us immediately of any unauthorized 
              use at {CONTACT_EMAIL}.
            </Text>
          </Section>

          <Section
            icon={<AlertTriangle color={Colors.warning} size={20} />}
            title="Acceptable Use"
          >
            <Text style={styles.paragraph}>
              When using MedixStudyHub, you agree NOT to:
            </Text>
            <View style={styles.bulletList}>
              <Text style={styles.bulletItem}>• Share quiz answers or content outside the app</Text>
              <Text style={styles.bulletItem}>• Use automated tools or bots to access the service</Text>
              <Text style={styles.bulletItem}>• Attempt to manipulate leaderboards or statistics</Text>
              <Text style={styles.bulletItem}>• Harass, bully, or intimidate other users</Text>
              <Text style={styles.bulletItem}>• Share inappropriate content in study rooms</Text>
              <Text style={styles.bulletItem}>• Impersonate other users or medical professionals</Text>
              <Text style={styles.bulletItem}>• Use the app for commercial purposes without permission</Text>
              <Text style={styles.bulletItem}>• Circumvent any security measures</Text>
            </View>
          </Section>

          <Section
            icon={<Scale color={Colors.accent} size={20} />}
            title="Intellectual Property"
          >
            <Text style={styles.paragraph}>
              <Text style={styles.bold}>Our Content:</Text> All quiz questions, educational 
              materials, graphics, and software are owned by {COMPANY_NAME} or our licensors. 
              You may not reproduce, distribute, or create derivative works without permission.
            </Text>
            <Text style={styles.paragraph}>
              <Text style={styles.bold}>User Content:</Text> You retain ownership of any content 
              you create (such as study notes). By posting content in public areas, you grant us 
              a non-exclusive license to display that content.
            </Text>
            <Text style={styles.paragraph}>
              <Text style={styles.bold}>Medical Disclaimer:</Text> Content is for educational 
              purposes only and should not be considered medical advice. Always consult healthcare 
              professionals for medical decisions.
            </Text>
          </Section>

          <Section
            icon={<Ban color={Colors.error} size={20} />}
            title="Account Termination"
          >
            <Text style={styles.paragraph}>
              We may suspend or terminate your account if you:
            </Text>
            <View style={styles.bulletList}>
              <Text style={styles.bulletItem}>• Violate these Terms of Service</Text>
              <Text style={styles.bulletItem}>• Violate our Code of Conduct</Text>
              <Text style={styles.bulletItem}>• Engage in fraudulent activity</Text>
              <Text style={styles.bulletItem}>• Fail to pay for premium subscriptions</Text>
              <Text style={styles.bulletItem}>• Create multiple accounts to abuse the system</Text>
            </View>
            <Text style={styles.paragraph}>
              You may delete your account at any time through the app settings. Upon termination, 
              your right to use the service immediately ceases.
            </Text>
          </Section>

          <Section
            icon={<ShieldX color={Colors.accentPink} size={20} />}
            title="Disclaimer of Warranties"
          >
            <Text style={styles.paragraph}>
              THE SERVICE IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY 
              KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO:
            </Text>
            <View style={styles.bulletList}>
              <Text style={styles.bulletItem}>• Merchantability or fitness for a particular purpose</Text>
              <Text style={styles.bulletItem}>• Accuracy or completeness of quiz content</Text>
              <Text style={styles.bulletItem}>• Uninterrupted or error-free service</Text>
              <Text style={styles.bulletItem}>• Security of data transmission</Text>
            </View>
            <Text style={styles.paragraph}>
              We do not guarantee that using our app will result in passing any medical examination.
            </Text>
          </Section>

          <Section
            icon={<Scale color={Colors.warning} size={20} />}
            title="Limitation of Liability"
          >
            <Text style={styles.paragraph}>
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, {COMPANY_NAME} SHALL NOT BE LIABLE FOR:
            </Text>
            <View style={styles.bulletList}>
              <Text style={styles.bulletItem}>• Indirect, incidental, or consequential damages</Text>
              <Text style={styles.bulletItem}>• Loss of data or business interruption</Text>
              <Text style={styles.bulletItem}>• Damages from reliance on educational content</Text>
              <Text style={styles.bulletItem}>• Actions of other users in study rooms</Text>
            </View>
            <Text style={styles.paragraph}>
              Our total liability shall not exceed the amount you paid for the service in the 
              past 12 months.
            </Text>
          </Section>

          <Section
            icon={<FileText color={Colors.primary} size={20} />}
            title="Subscription & Payments"
          >
            <Text style={styles.paragraph}>
              <Text style={styles.bold}>Premium Features:</Text> Some features require a paid 
              subscription. Prices are displayed before purchase.
            </Text>
            <Text style={styles.paragraph}>
              <Text style={styles.bold}>Billing:</Text> Subscriptions are billed through the 
              App Store or Google Play. Renewal occurs automatically unless cancelled 24 hours 
              before the end of the current period.
            </Text>
            <Text style={styles.paragraph}>
              <Text style={styles.bold}>Refunds:</Text> Refund requests are handled by Apple or 
              Google according to their policies.
            </Text>
          </Section>

          <Section
            icon={<Scale color={Colors.accent} size={20} />}
            title="Governing Law"
          >
            <Text style={styles.paragraph}>
              These Terms shall be governed by the laws of [YOUR JURISDICTION]. Any disputes 
              shall be resolved in the courts of [YOUR JURISDICTION].
            </Text>
            <Text style={styles.paragraph}>
              If any provision of these Terms is found unenforceable, the remaining provisions 
              will continue in effect.
            </Text>
          </Section>

          <Section
            icon={<FileText color={Colors.accentPink} size={20} />}
            title="Changes to Terms"
          >
            <Text style={styles.paragraph}>
              We reserve the right to modify these Terms at any time. Material changes will be 
              notified through the app or via email. Continued use after changes constitutes 
              acceptance of the new Terms.
            </Text>
          </Section>

          <View style={styles.contactSection}>
            <Text style={styles.contactTitle}>Questions?</Text>
            <Text style={styles.contactText}>Contact us at:</Text>
            <View style={styles.contactBox}>
              <Text style={styles.contactInfo}>{COMPANY_NAME}</Text>
              <Text style={styles.contactInfo}>{COMPANY_ADDRESS}</Text>
              <Text style={styles.contactEmail}>{CONTACT_EMAIL}</Text>
            </View>
          </View>

          <Text style={styles.footer}>
            By using MedixStudyHub, you acknowledge that you have read, understood, and agree 
            to be bound by these Terms of Service.
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
    color: Colors.textSecondary,
  },
  intro: {
    fontSize: 15,
    color: Colors.textSecondary,
    lineHeight: 24,
    marginBottom: 24,
    textAlign: 'center',
  },
  section: {
    marginBottom: 24,
    backgroundColor: Colors.cardBg,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: Colors.glassBorder,
    overflow: 'hidden',
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: Colors.glassBorder,
    backgroundColor: 'rgba(255,255,255,0.03)',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600' as const,
    color: Colors.text,
  },
  sectionContent: {
    padding: 16,
  },
  paragraph: {
    fontSize: 14,
    color: Colors.textSecondary,
    lineHeight: 22,
    marginBottom: 12,
  },
  bold: {
    fontWeight: '600' as const,
    color: Colors.text,
  },
  bulletList: {
    marginTop: 8,
  },
  bulletItem: {
    fontSize: 14,
    color: Colors.textSecondary,
    lineHeight: 24,
    marginBottom: 4,
  },
  contactSection: {
    alignItems: 'center',
    marginTop: 8,
    marginBottom: 24,
  },
  contactTitle: {
    fontSize: 18,
    fontWeight: '600' as const,
    color: Colors.text,
    marginBottom: 8,
  },
  contactText: {
    fontSize: 14,
    color: Colors.textSecondary,
    marginBottom: 12,
  },
  contactBox: {
    backgroundColor: 'rgba(0, 245, 212, 0.1)',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    width: '100%',
  },
  contactInfo: {
    fontSize: 14,
    color: Colors.textSecondary,
    lineHeight: 22,
  },
  contactEmail: {
    fontSize: 14,
    color: Colors.accent,
    marginTop: 4,
  },
  footer: {
    fontSize: 13,
    color: Colors.textMuted,
    lineHeight: 20,
    textAlign: 'center',
    fontStyle: 'italic',
  },
});
