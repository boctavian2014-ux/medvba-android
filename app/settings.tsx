import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
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
} from 'lucide-react-native';
import Colors from '@/constants/colors';

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

export default function SettingsScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[Colors.background, '#0D1F35', Colors.backgroundLight]}
        style={StyleSheet.absoluteFill}
        locations={[0, 0.5, 1]}
      />
      <SafeAreaView style={styles.safeArea} edges={['top', 'bottom']}>
        <View style={styles.header}>
          <Text style={styles.title}>Settings</Text>
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
            <Text style={styles.sectionTitle}>Preferences</Text>
            <View style={styles.sectionCard}>
              <LinearGradient
                colors={['rgba(255,255,255,0.08)', 'rgba(255,255,255,0.04)']}
                style={StyleSheet.absoluteFill}
              />
              <SettingsItem
                icon={<Bell color={Colors.primary} size={22} />}
                title="Notifications"
                subtitle="Manage push notifications"
                onPress={() => console.log('Notifications')}
              />
              <SettingsItem
                icon={<Moon color={Colors.accent} size={22} />}
                title="Appearance"
                subtitle="Dark mode enabled"
                onPress={() => console.log('Appearance')}
                showBorder={false}
              />
            </View>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Support</Text>
            <View style={styles.sectionCard}>
              <LinearGradient
                colors={['rgba(255,255,255,0.08)', 'rgba(255,255,255,0.04)']}
                style={StyleSheet.absoluteFill}
              />
              <SettingsItem
                icon={<HelpCircle color={Colors.warning} size={22} />}
                title="Help Center"
                subtitle="FAQs and tutorials"
                onPress={() => console.log('Help')}
              />
              <SettingsItem
                icon={<Mail color={Colors.accentPink} size={22} />}
                title="Contact Support"
                subtitle="support@medixstudyhub.com"
                onPress={() => console.log('Contact')}
                showBorder={false}
              />
            </View>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Legal</Text>
            <View style={styles.sectionCard}>
              <LinearGradient
                colors={['rgba(255,255,255,0.08)', 'rgba(255,255,255,0.04)']}
                style={StyleSheet.absoluteFill}
              />
              <SettingsItem
                icon={<Shield color={Colors.primary} size={22} />}
                title="Privacy Policy"
                subtitle="How we handle your data"
                onPress={() => router.push('/legal/privacy-policy')}
              />
              <SettingsItem
                icon={<FileText color={Colors.accent} size={22} />}
                title="Terms of Service"
                subtitle="Usage terms and conditions"
                onPress={() => router.push('/legal/terms-of-service')}
              />
              <SettingsItem
                icon={<Heart color={Colors.success} size={22} />}
                title="Code of Conduct"
                subtitle="Community guidelines"
                onPress={() => router.push('/legal/code-of-conduct')}
                showBorder={false}
              />
            </View>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>About</Text>
            <View style={styles.sectionCard}>
              <LinearGradient
                colors={['rgba(255,255,255,0.08)', 'rgba(255,255,255,0.04)']}
                style={StyleSheet.absoluteFill}
              />
              <SettingsItem
                icon={<Info color={Colors.textSecondary} size={22} />}
                title="App Version"
                subtitle="1.0.0"
                onPress={() => {}}
                showBorder={false}
              />
            </View>
          </View>

          <View style={styles.footer}>
            <Text style={styles.footerText}>MedixStudyHub</Text>
            <Text style={styles.footerSubtext}>Made with ❤️ for medical students</Text>
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
});
