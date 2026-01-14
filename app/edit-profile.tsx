import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Alert,
  ActivityIndicator,
  Switch,
  Platform,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import * as Haptics from 'expo-haptics';
import { X, Save, MapPin, School, User, AlignLeft, Eye, EyeOff } from 'lucide-react-native';
import Colors from '@/constants/colors';
import { useAuth } from '@/providers/AuthProvider';
import { useUserProfile, useUpdateUserProfile, uploadProfilePhoto } from '@/lib/supabase-hooks';
import PhotoPicker from '@/components/PhotoPicker';

export default function EditProfileScreen() {
  const router = useRouter();
  const { user, refreshProfile } = useAuth();
  const { data: profile, isLoading: profileLoading } = useUserProfile(user?.id);
  const updateProfileMutation = useUpdateUserProfile();

  const [name, setName] = useState('');
  const [city, setCity] = useState('');
  const [university, setUniversity] = useState('');
  const [yearOfStudy, setYearOfStudy] = useState('');
  const [bio, setBio] = useState('');
  const [isPublic, setIsPublic] = useState(true);
  const [photoUri, setPhotoUri] = useState<string | undefined>();
  const [isUploading, setIsUploading] = useState(false);

  useEffect(() => {
    if (profile) {
      setName(profile.name || '');
      setCity(profile.city || '');
      setUniversity(profile.university || '');
      setYearOfStudy(profile.year_of_study?.toString() || '');
      setBio(profile.bio || '');
      setIsPublic(profile.is_public);
      setPhotoUri(profile.profile_photo_url || profile.avatar);
    }
  }, [profile]);

  const handleSave = async () => {
    if (!user?.id) return;

    if (!name.trim()) {
      Alert.alert('Missing Information', 'Please enter your name.');
      return;
    }

    try {
      if (Platform.OS !== 'web') {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
      }

      let photoUrl = profile?.profile_photo_url;

      if (photoUri && photoUri !== profile?.profile_photo_url && photoUri !== profile?.avatar) {
        setIsUploading(true);
        try {
          photoUrl = await uploadProfilePhoto(user.id, photoUri);
        } catch (error) {
          console.error('Error uploading photo:', error);
          Alert.alert('Upload Error', 'Failed to upload photo. Saving other changes...');
        } finally {
          setIsUploading(false);
        }
      }

      await updateProfileMutation.mutateAsync({
        userId: user.id,
        name: name.trim(),
        city: city.trim() || undefined,
        university: university.trim() || undefined,
        year_of_study: yearOfStudy ? parseInt(yearOfStudy, 10) : undefined,
        bio: bio.trim() || undefined,
        is_public: isPublic,
        profile_photo_url: photoUrl,
      });

      await refreshProfile();

      if (Platform.OS !== 'web') {
        Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
      }

      Alert.alert('Success', 'Your profile has been updated!', [
        {
          text: 'OK',
          onPress: () => router.back(),
        },
      ]);
    } catch (error) {
      console.error('Error updating profile:', error);
      Alert.alert('Error', 'Failed to update profile. Please try again.');
    }
  };

  if (profileLoading) {
    return (
      <View style={[styles.container, styles.centerContent]}>
        <LinearGradient
          colors={[Colors.background, '#0D1F35', Colors.backgroundLight]}
          style={StyleSheet.absoluteFill}
          locations={[0, 0.5, 1]}
        />
        <ActivityIndicator size="large" color={Colors.primary} />
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
          <TouchableOpacity style={styles.closeButton} onPress={() => router.back()} activeOpacity={0.7}>
            <X color={Colors.text} size={24} />
          </TouchableOpacity>
          <Text style={styles.title}>Edit Profile</Text>
          <TouchableOpacity
            style={[styles.saveButton, (updateProfileMutation.isPending || isUploading) && styles.saveButtonDisabled]}
            onPress={handleSave}
            disabled={updateProfileMutation.isPending || isUploading}
            activeOpacity={0.7}
          >
            {updateProfileMutation.isPending || isUploading ? (
              <ActivityIndicator size="small" color={Colors.primary} />
            ) : (
              <Save color={Colors.primary} size={22} />
            )}
          </TouchableOpacity>
        </View>

        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
          <View style={styles.photoSection}>
            <PhotoPicker
              currentPhotoUrl={photoUri}
              onPhotoSelected={setPhotoUri}
              onPhotoRemoved={() => setPhotoUri(profile?.avatar)}
              size={120}
            />
            <Text style={styles.photoHint}>Tap to change photo</Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Basic Information</Text>

            <View style={styles.inputGroup}>
              <View style={styles.inputLabel}>
                <User color={Colors.primary} size={18} />
                <Text style={styles.inputLabelText}>Name *</Text>
              </View>
              <TextInput
                style={styles.textInput}
                value={name}
                onChangeText={setName}
                placeholder="Your name"
                placeholderTextColor={Colors.textMuted}
                maxLength={100}
              />
            </View>

            <View style={styles.inputGroup}>
              <View style={styles.inputLabel}>
                <MapPin color={Colors.accent} size={18} />
                <Text style={styles.inputLabelText}>City</Text>
              </View>
              <TextInput
                style={styles.textInput}
                value={city}
                onChangeText={setCity}
                placeholder="e.g., Bucharest, Cluj-Napoca"
                placeholderTextColor={Colors.textMuted}
                maxLength={100}
              />
            </View>

            <View style={styles.inputGroup}>
              <View style={styles.inputLabel}>
                <School color={Colors.secondary} size={18} />
                <Text style={styles.inputLabelText}>University/Faculty</Text>
              </View>
              <TextInput
                style={styles.textInput}
                value={university}
                onChangeText={setUniversity}
                placeholder="e.g., Carol Davila University"
                placeholderTextColor={Colors.textMuted}
                maxLength={200}
              />
            </View>

            <View style={styles.inputGroup}>
              <View style={styles.inputLabel}>
                <School color={Colors.warning} size={18} />
                <Text style={styles.inputLabelText}>Year of Study</Text>
              </View>
              <View style={styles.yearSelector}>
                {[1, 2, 3, 4, 5, 6].map((year) => (
                  <TouchableOpacity
                    key={year}
                    style={[styles.yearButton, yearOfStudy === year.toString() && styles.yearButtonActive]}
                    onPress={() => {
                      if (Platform.OS !== 'web') {
                        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
                      }
                      setYearOfStudy(year.toString());
                    }}
                  >
                    <Text style={[styles.yearButtonText, yearOfStudy === year.toString() && styles.yearButtonTextActive]}>
                      {year}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>

            <View style={styles.inputGroup}>
              <View style={styles.inputLabel}>
                <AlignLeft color={Colors.accentPink} size={18} />
                <Text style={styles.inputLabelText}>Bio</Text>
              </View>
              <TextInput
                style={[styles.textInput, styles.textArea]}
                value={bio}
                onChangeText={setBio}
                placeholder="Tell others about yourself, your interests, study goals..."
                placeholderTextColor={Colors.textMuted}
                multiline
                numberOfLines={4}
                maxLength={500}
              />
              <Text style={styles.charCount}>{bio.length}/500</Text>
            </View>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Privacy</Text>

            <View style={styles.privacyCard}>
              <LinearGradient
                colors={['rgba(255,255,255,0.08)', 'rgba(255,255,255,0.04)']}
                style={StyleSheet.absoluteFill}
              />
              <View style={styles.privacyHeader}>
                <View style={styles.privacyIcon}>
                  {isPublic ? <Eye color={Colors.success} size={22} /> : <EyeOff color={Colors.textMuted} size={22} />}
                </View>
                <View style={styles.privacyInfo}>
                  <Text style={styles.privacyTitle}>Public Profile</Text>
                  <Text style={styles.privacySubtitle}>
                    {isPublic
                      ? 'Other students can find and connect with you'
                      : 'Your profile is hidden from study partner search'}
                  </Text>
                </View>
                <Switch
                  value={isPublic}
                  onValueChange={(value) => {
                    if (Platform.OS !== 'web') {
                      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
                    }
                    setIsPublic(value);
                  }}
                  trackColor={{ false: Colors.cardBgLight, true: Colors.success }}
                  thumbColor={Colors.text}
                />
              </View>
            </View>
          </View>

          <View style={styles.footer}>
            <Text style={styles.footerText}>* Required fields</Text>
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
  centerContent: {
    justifyContent: 'center',
    alignItems: 'center',
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
    fontSize: 20,
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
  saveButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: Colors.cardBg,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.primary,
  },
  saveButtonDisabled: {
    opacity: 0.5,
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 40,
  },
  photoSection: {
    alignItems: 'center',
    marginBottom: 32,
  },
  photoHint: {
    fontSize: 13,
    color: Colors.textSecondary,
    marginTop: 12,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700' as const,
    color: Colors.text,
    marginBottom: 16,
  },
  inputGroup: {
    marginBottom: 20,
  },
  inputLabel: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 8,
  },
  inputLabelText: {
    fontSize: 14,
    fontWeight: '600' as const,
    color: Colors.textSecondary,
  },
  textInput: {
    backgroundColor: Colors.cardBg,
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 15,
    color: Colors.text,
    borderWidth: 1,
    borderColor: Colors.glassBorder,
  },
  textArea: {
    minHeight: 100,
    textAlignVertical: 'top',
  },
  charCount: {
    fontSize: 12,
    color: Colors.textMuted,
    textAlign: 'right',
    marginTop: 6,
  },
  yearSelector: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  yearButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: Colors.cardBg,
    borderWidth: 1,
    borderColor: Colors.glassBorder,
    justifyContent: 'center',
    alignItems: 'center',
  },
  yearButtonActive: {
    backgroundColor: Colors.primary,
    borderColor: Colors.primary,
  },
  yearButtonText: {
    fontSize: 16,
    fontWeight: '600' as const,
    color: Colors.textSecondary,
  },
  yearButtonTextActive: {
    color: Colors.text,
    fontWeight: '700' as const,
  },
  privacyCard: {
    borderRadius: 16,
    borderWidth: 1,
    borderColor: Colors.glassBorder,
    overflow: 'hidden',
  },
  privacyHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  privacyIcon: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: 'rgba(255,255,255,0.06)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  privacyInfo: {
    flex: 1,
    marginLeft: 14,
    marginRight: 12,
  },
  privacyTitle: {
    fontSize: 16,
    fontWeight: '600' as const,
    color: Colors.text,
  },
  privacySubtitle: {
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
    fontSize: 13,
    color: Colors.textMuted,
  },
});
