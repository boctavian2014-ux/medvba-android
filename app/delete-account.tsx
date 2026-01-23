import React, { useState, useCallback } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
  Alert,
  ScrollView,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Haptics from 'expo-haptics';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter, Link } from 'expo-router';
import { 
  X, 
  AlertTriangle,
  User,
  BarChart3,
  Users,
  Flag,
  Trash2,
  CheckCircle,
} from 'lucide-react-native';
import Colors from '@/constants/colors';
import { supabase } from '@/lib/supabase';
import { useAuth } from '@/providers/AuthProvider';

const STORAGE_KEYS_TO_CLEAR = [
  'quiz_daily_progress',
  'quiz_session_state',
  'quiz_all_time_stats',
  'quiz_streak_data',
  'quiz_weekly_history',
  '@medvba_blocked_users',
  '@medvba_user_reports',
  '@medvba_app_language',
];

type DeletionStep = 'confirm' | 'deleting' | 'success';

export default function DeleteAccountScreen() {
  const router = useRouter();
  const { user } = useAuth();
  const [confirmText, setConfirmText] = useState('');
  const [step, setStep] = useState<DeletionStep>('confirm');
  


  const clearLocalData = async () => {
    console.log('[DeleteAccount] Clearing local data...');
    try {
      await AsyncStorage.multiRemove(STORAGE_KEYS_TO_CLEAR);
      console.log('[DeleteAccount] Local data cleared successfully');
    } catch (error) {
      console.error('[DeleteAccount] Error clearing local data:', error);
    }
  };

  const handleDeleteAccount = useCallback(async () => {
    if (confirmText.toUpperCase() !== 'DELETE') {
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
      Alert.alert('Confirmation Required', 'Please type DELETE to confirm.');
      return;
    }

    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
    setStep('deleting');
    
    console.log('[DeleteAccount] Initiating account deletion...');
    if (!user?.id) {
      Alert.alert('Error', 'You must be logged in to delete your account.');
      setStep('confirm');
      return;
    }

    try {
      await clearLocalData();
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      
      setStep('success');
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
      console.log('[DeleteAccount] Account deleted successfully');
    } catch (error: any) {
      console.error('[DeleteAccount] Deletion failed:', error);
      setStep('confirm');
      Alert.alert(
        'Deletion Failed',
        'Something went wrong while deleting your account. Please try again.',
        [{ text: 'OK' }]
      );
    }
  }, [confirmText, user?.id]);

  const handleFinish = useCallback(() => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    router.replace('/(tabs)');
  }, [router]);

  const isDeleteEnabled = confirmText.toUpperCase() === 'DELETE';

  if (step === 'success') {
    return (
      <View style={styles.container}>
        <LinearGradient
          colors={[Colors.background, '#0D1F35', Colors.backgroundLight]}
          style={StyleSheet.absoluteFill}
          locations={[0, 0.5, 1]}
        />
        <SafeAreaView style={styles.safeArea} edges={['top', 'bottom']}>
          <View style={styles.successContainer}>
            <View style={styles.successIconWrapper}>
              <CheckCircle color={Colors.success} size={64} />
            </View>
            <Text style={styles.successTitle}>Account Deleted</Text>
            <Text style={styles.successText}>
              Your account has been permanently deleted. Thank you for using MEDVBA.
            </Text>
            <TouchableOpacity
              style={styles.finishButton}
              onPress={handleFinish}
              activeOpacity={0.8}
            >
              <Text style={styles.finishButtonText}>Continue</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </View>
    );
  }

  if (step === 'deleting') {
    return (
      <View style={styles.container}>
        <LinearGradient
          colors={[Colors.background, '#0D1F35', Colors.backgroundLight]}
          style={StyleSheet.absoluteFill}
          locations={[0, 0.5, 1]}
        />
        <SafeAreaView style={styles.safeArea} edges={['top', 'bottom']}>
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color={Colors.error} />
            <Text style={styles.loadingText}>Deleting your account...</Text>
            <Text style={styles.loadingSubtext}>This may take a moment</Text>
          </View>
        </SafeAreaView>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[Colors.background, '#0D1F35', Colors.backgroundLight]}
        style={StyleSheet.absoluteFill}
        locations={[0, 0.5, 1]}
      />
      <SafeAreaView style={styles.safeArea} edges={['top', 'bottom']}>
        <View style={styles.header}>
          <TouchableOpacity 
            style={styles.closeButton} 
            onPress={() => router.back()}
            activeOpacity={0.7}
          >
            <X color={Colors.text} size={24} />
          </TouchableOpacity>
          <Text style={styles.title}>Delete Account</Text>
          <View style={styles.headerSpacer} />
        </View>

        <ScrollView 
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          <View style={styles.warningCard}>
            <LinearGradient
              colors={['rgba(255, 71, 87, 0.15)', 'rgba(255, 71, 87, 0.05)']}
              style={StyleSheet.absoluteFill}
            />
            <View style={styles.warningIconWrapper}>
              <AlertTriangle color={Colors.error} size={32} />
            </View>
            <Text style={styles.warningTitle}>This action is permanent</Text>
            <Text style={styles.warningText}>
              Deleting your MEDVBA account will permanently remove your profile, 
              quiz history, study rooms you host, and all associated data. This action cannot be undone.
            </Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>What will be deleted</Text>
            <View style={styles.deletionList}>
              <View style={styles.deletionItem}>
                <View style={styles.deletionIconWrapper}>
                  <User color={Colors.textSecondary} size={20} />
                </View>
                <Text style={styles.deletionItemText}>Profile and avatar</Text>
              </View>
              <View style={styles.deletionItem}>
                <View style={styles.deletionIconWrapper}>
                  <BarChart3 color={Colors.textSecondary} size={20} />
                </View>
                <Text style={styles.deletionItemText}>Quiz stats, progress, and streaks</Text>
              </View>
              <View style={styles.deletionItem}>
                <View style={styles.deletionIconWrapper}>
                  <Users color={Colors.textSecondary} size={20} />
                </View>
                <Text style={styles.deletionItemText}>Study rooms you host and their sessions</Text>
              </View>
              <View style={[styles.deletionItem, styles.deletionItemLast]}>
                <View style={styles.deletionIconWrapper}>
                  <Flag color={Colors.textSecondary} size={20} />
                </View>
                <Text style={styles.deletionItemText}>Reports you sent and reports about you</Text>
              </View>
            </View>
            <Text style={styles.retentionNote}>
              Note: Certain non-identifiable or legally required records (for example, payment or tax records, or aggregated analytics that cannot be linked back to you) may be retained by Dev AI LTD for compliance and auditing purposes, as described in our{' '}
              <Link href="/legal/privacy-policy" asChild>
                <Text style={styles.retentionNoteLink}>Privacy Policy</Text>
              </Link>.
            </Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Confirm deletion</Text>
            <Text style={styles.confirmInstructions}>
              Type <Text style={styles.deleteKeyword}>DELETE</Text> below to confirm you want to permanently delete your account.
            </Text>
            <TextInput
              style={styles.confirmInput}
              placeholder="Type DELETE to confirm"
              placeholderTextColor={Colors.textMuted}
              value={confirmText}
              onChangeText={setConfirmText}
              autoCapitalize="characters"
              autoCorrect={false}
            />
          </View>

          <TouchableOpacity
            style={[
              styles.deleteButton,
              !isDeleteEnabled && styles.deleteButtonDisabled
            ]}
            onPress={handleDeleteAccount}
            disabled={!isDeleteEnabled}
            activeOpacity={0.8}
          >
            <Trash2 color="#FFFFFF" size={20} />
            <Text style={styles.deleteButtonText}>Delete my account</Text>
          </TouchableOpacity>

          <Text style={styles.footerNote}>
            By proceeding, you acknowledge that this action is irreversible and all your data will be permanently removed from our servers.
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
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: Colors.glassBorder,
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
  title: {
    fontSize: 18,
    fontWeight: '600' as const,
    color: Colors.text,
  },
  headerSpacer: {
    width: 40,
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 40,
  },
  warningCard: {
    borderRadius: 16,
    borderWidth: 1,
    borderColor: 'rgba(255, 71, 87, 0.3)',
    padding: 20,
    alignItems: 'center',
    marginBottom: 24,
    overflow: 'hidden',
  },
  warningIconWrapper: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: 'rgba(255, 71, 87, 0.15)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  warningTitle: {
    fontSize: 18,
    fontWeight: '700' as const,
    color: Colors.error,
    marginBottom: 12,
    textAlign: 'center',
  },
  warningText: {
    fontSize: 14,
    lineHeight: 22,
    color: Colors.textSecondary,
    textAlign: 'center',
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
  deletionList: {
    backgroundColor: 'rgba(255,255,255,0.04)',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: Colors.glassBorder,
    overflow: 'hidden',
  },
  deletionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: Colors.glassBorder,
  },
  deletionIconWrapper: {
    width: 36,
    height: 36,
    borderRadius: 10,
    backgroundColor: 'rgba(255,255,255,0.06)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  deletionItemText: {
    flex: 1,
    fontSize: 15,
    color: Colors.text,
  },
  deletionItemLast: {
    borderBottomWidth: 0,
  },
  retentionNote: {
    fontSize: 12,
    color: Colors.textMuted,
    lineHeight: 18,
    marginTop: 12,
    marginHorizontal: 4,
  },
  retentionNoteLink: {
    fontSize: 12,
    color: Colors.textMuted,
    textDecorationLine: 'underline' as const,
  },
  confirmInstructions: {
    fontSize: 14,
    color: Colors.textSecondary,
    marginBottom: 12,
    lineHeight: 22,
  },
  deleteKeyword: {
    color: Colors.error,
    fontWeight: '700' as const,
  },
  confirmInput: {
    backgroundColor: 'rgba(255,255,255,0.06)',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: Colors.glassBorder,
    padding: 16,
    fontSize: 16,
    color: Colors.text,
    textAlign: 'center',
    fontWeight: '600' as const,
    letterSpacing: 2,
  },
  deleteButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.error,
    borderRadius: 14,
    padding: 18,
    gap: 10,
    marginBottom: 16,
  },
  deleteButtonDisabled: {
    backgroundColor: 'rgba(255, 71, 87, 0.3)',
  },
  deleteButtonText: {
    fontSize: 17,
    fontWeight: '700' as const,
    color: '#FFFFFF',
  },
  footerNote: {
    fontSize: 12,
    color: Colors.textMuted,
    textAlign: 'center',
    lineHeight: 18,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
  },
  loadingText: {
    fontSize: 18,
    fontWeight: '600' as const,
    color: Colors.text,
    marginTop: 24,
  },
  loadingSubtext: {
    fontSize: 14,
    color: Colors.textSecondary,
    marginTop: 8,
  },
  successContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
  },
  successIconWrapper: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: 'rgba(46, 213, 115, 0.15)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
  },
  successTitle: {
    fontSize: 24,
    fontWeight: '700' as const,
    color: Colors.text,
    marginBottom: 12,
  },
  successText: {
    fontSize: 16,
    color: Colors.textSecondary,
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 32,
  },
  finishButton: {
    backgroundColor: Colors.primary,
    borderRadius: 14,
    paddingVertical: 16,
    paddingHorizontal: 48,
  },
  finishButtonText: {
    fontSize: 17,
    fontWeight: '700' as const,
    color: '#FFFFFF',
  },
});
