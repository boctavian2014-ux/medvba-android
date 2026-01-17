import React, { useState, useMemo, useCallback } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Image,
  ActivityIndicator,
  Platform,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import * as Haptics from 'expo-haptics';
import { ArrowLeft, Camera, Save, User, MapPin, School, BookOpen, Eye, EyeOff, X } from 'lucide-react-native';
import { useTheme } from '@/providers/ThemeProvider';
import { useAuth } from '@/providers/AuthProvider';
import GlassCard from '@/components/GlassCard';
import { useUpdateUserProfile, useUserProfile, uploadProfilePhoto } from '@/lib/supabase-hooks';
import PhotoPicker from '@/components/PhotoPicker';

export default function EditProfileScreen() {
  const router = useRouter();
  const { user, refreshProfile } = useAuth();
  const { colors } = useTheme();

  const { data: profile, isLoading: isLoadingProfile } = useUserProfile(user?.id);
  const updateProfileMutation = useUpdateUserProfile();

  const [name, setName] = useState('');
  const [bio, setBio] = useState('');
  const [city, setCity] = useState('');
  const [university, setUniversity] = useState('');
  const [yearOfStudy, setYearOfStudy] = useState('');
  const [isPublic, setIsPublic] = useState(true);
  const [isPickingPhoto, setIsPickingPhoto] = useState(false);
  const [isUploadingPhoto, setIsUploadingPhoto] = useState(false);
  const [localPhotoUri, setLocalPhotoUri] = useState<string | null>(null);

  React.useEffect(() => {
    if (profile) {
      setName(profile.name);
      setBio(profile.bio || '');
      setCity(profile.city || '');
      setUniversity(profile.university || '');
      setYearOfStudy(profile.year_of_study ? profile.year_of_study.toString() : '');
      setIsPublic(profile.is_public);
    }
  }, [profile]);

  const handlePhotoSelected = useCallback(async (uri: string) => {
    if (!user?.id) return;

    setIsPickingPhoto(false);
    setLocalPhotoUri(uri);
    setIsUploadingPhoto(true);

    try {
      const photoUrl = await uploadProfilePhoto(user.id, uri);
      
      await updateProfileMutation.mutateAsync({
        userId: user.id,
        profile_photo_url: photoUrl,
      });

      await refreshProfile();

      if (Platform.OS !== 'web') {
        Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
      }
    } catch (error) {
      console.error('Error uploading photo:', error);
      if (Platform.OS === 'web') {
        alert('Failed to upload photo. Please try again.');
      } else {
        Alert.alert('Error', 'Failed to upload photo. Please try again.');
      }
      setLocalPhotoUri(null);
    } finally {
      setIsUploadingPhoto(false);
    }
  }, [user?.id, updateProfileMutation, refreshProfile]);

  const handleSave = async () => {
    if (!user?.id) return;
    if (!name.trim()) {
      if (Platform.OS === 'web') {
        alert('Please enter your name');
      } else {
        Alert.alert('Error', 'Please enter your name');
      }
      return;
    }

    if (Platform.OS !== 'web') {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    }

    try {
      await updateProfileMutation.mutateAsync({
        userId: user.id,
        name: name.trim(),
        bio: bio.trim() || undefined,
        city: city.trim() || undefined,
        university: university.trim() || undefined,
        year_of_study: yearOfStudy ? parseInt(yearOfStudy, 10) : undefined,
        is_public: isPublic,
      });

      await refreshProfile();

      if (Platform.OS !== 'web') {
        Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
      }

      router.back();
    } catch (error) {
      console.error('Error updating profile:', error);
      if (Platform.OS === 'web') {
        alert('Failed to update profile. Please try again.');
      } else {
        Alert.alert('Error', 'Failed to update profile. Please try again.');
      }
    }
  };

  const styles = useMemo(() => createStyles(colors), [colors]);

  if (isLoadingProfile) {
    return (
      <View style={styles.container}>
        <LinearGradient colors={[colors.background, colors.backgroundLight]} style={StyleSheet.absoluteFill} />
        <SafeAreaView style={styles.safeArea} edges={['top']}>
          <View style={styles.header}>
            <TouchableOpacity style={styles.backButton} onPress={() => router.back()} activeOpacity={0.7}>
              <ArrowLeft color={colors.text} size={24} />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>Edit Profile</Text>
            <View style={styles.backButton} />
          </View>
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color={colors.primary} />
            <Text style={styles.loadingText}>Loading profile...</Text>
          </View>
        </SafeAreaView>
      </View>
    );
  }

  const displayAvatar = localPhotoUri || profile?.profile_photo_url || profile?.avatar;

  return (
    <View style={styles.container}>
      <LinearGradient colors={[colors.background, colors.backgroundLight]} style={StyleSheet.absoluteFill} />
      <SafeAreaView style={styles.safeArea} edges={['top']}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton} onPress={() => router.back()} activeOpacity={0.7}>
            <ArrowLeft color={colors.text} size={24} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Edit Profile</Text>
          <TouchableOpacity
            style={[styles.saveButton, updateProfileMutation.isPending && styles.saveButtonDisabled]}
            onPress={handleSave}
            disabled={updateProfileMutation.isPending}
            activeOpacity={0.7}
          >
            {updateProfileMutation.isPending ? (
              <ActivityIndicator size="small" color={colors.primary} />
            ) : (
              <Save color={colors.primary} size={22} />
            )}
          </TouchableOpacity>
        </View>

        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
          <GlassCard style={styles.photoSection}>
            <View style={styles.avatarContainer}>
              {displayAvatar && <Image source={{ uri: displayAvatar }} style={styles.avatar} />}
              {isUploadingPhoto && (
                <View style={styles.avatarOverlay}>
                  <ActivityIndicator size="large" color={colors.primary} />
                </View>
              )}
            </View>
            <TouchableOpacity
              style={styles.changePhotoButton}
              onPress={() => setIsPickingPhoto(true)}
              disabled={isUploadingPhoto}
              activeOpacity={0.7}
            >
              <Camera color={colors.primary} size={18} />
              <Text style={styles.changePhotoText}>Change Photo</Text>
            </TouchableOpacity>
          </GlassCard>

          <GlassCard style={styles.formSection}>
            <Text style={styles.sectionTitle}>Basic Information</Text>

            <View style={styles.inputGroup}>
              <View style={styles.inputLabel}>
                <User color={colors.textSecondary} size={18} />
                <Text style={styles.labelText}>Name *</Text>
              </View>
              <TextInput
                style={styles.input}
                value={name}
                onChangeText={setName}
                placeholder="Your name"
                placeholderTextColor={colors.textMuted}
                autoCapitalize="words"
              />
            </View>

            <View style={styles.inputGroup}>
              <View style={styles.inputLabel}>
                <BookOpen color={colors.textSecondary} size={18} />
                <Text style={styles.labelText}>Bio</Text>
              </View>
              <TextInput
                style={[styles.input, styles.textArea]}
                value={bio}
                onChangeText={setBio}
                placeholder="Tell others about yourself..."
                placeholderTextColor={colors.textMuted}
                multiline
                numberOfLines={4}
                textAlignVertical="top"
              />
            </View>
          </GlassCard>

          <GlassCard style={styles.formSection}>
            <Text style={styles.sectionTitle}>Study Information</Text>

            <View style={styles.inputGroup}>
              <View style={styles.inputLabel}>
                <MapPin color={colors.textSecondary} size={18} />
                <Text style={styles.labelText}>City</Text>
              </View>
              <TextInput
                style={styles.input}
                value={city}
                onChangeText={setCity}
                placeholder="Your city"
                placeholderTextColor={colors.textMuted}
                autoCapitalize="words"
              />
            </View>

            <View style={styles.inputGroup}>
              <View style={styles.inputLabel}>
                <School color={colors.textSecondary} size={18} />
                <Text style={styles.labelText}>University</Text>
              </View>
              <TextInput
                style={styles.input}
                value={university}
                onChangeText={setUniversity}
                placeholder="Your university"
                placeholderTextColor={colors.textMuted}
                autoCapitalize="words"
              />
            </View>

            <View style={styles.inputGroup}>
              <View style={styles.inputLabel}>
                <BookOpen color={colors.textSecondary} size={18} />
                <Text style={styles.labelText}>Year of Study</Text>
              </View>
              <TextInput
                style={styles.input}
                value={yearOfStudy}
                onChangeText={(text) => setYearOfStudy(text.replace(/[^0-9]/g, ''))}
                placeholder="1-6"
                placeholderTextColor={colors.textMuted}
                keyboardType="number-pad"
                maxLength={1}
              />
            </View>
          </GlassCard>

          <GlassCard style={styles.formSection}>
            <Text style={styles.sectionTitle}>Privacy</Text>

            <TouchableOpacity
              style={styles.toggleRow}
              onPress={() => {
                if (Platform.OS !== 'web') {
                  Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
                }
                setIsPublic(!isPublic);
              }}
              activeOpacity={0.7}
            >
              <View style={styles.toggleLabel}>
                {isPublic ? <Eye color={colors.success} size={20} /> : <EyeOff color={colors.textMuted} size={20} />}
                <View style={styles.toggleTextContainer}>
                  <Text style={styles.toggleTitle}>Public Profile</Text>
                  <Text style={styles.toggleDescription}>
                    {isPublic ? 'Others can find you in study partners' : 'Your profile is hidden from others'}
                  </Text>
                </View>
              </View>
              <View style={[styles.toggle, isPublic && styles.toggleActive]}>
                <View style={[styles.toggleThumb, isPublic && styles.toggleThumbActive]} />
              </View>
            </TouchableOpacity>
          </GlassCard>
        </ScrollView>
      </SafeAreaView>

      {isPickingPhoto && (
        <View style={StyleSheet.absoluteFill}>
          <PhotoPicker
            currentPhotoUrl={displayAvatar}
            onPhotoSelected={handlePhotoSelected}
            size={120}
            showRemoveButton={false}
          />
          <TouchableOpacity
            style={styles.photoPickerClose}
            onPress={() => setIsPickingPhoto(false)}
            activeOpacity={0.7}
          >
            <X color={colors.text} size={24} />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const createStyles = (colors: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
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
      borderBottomColor: colors.glassBorder,
    },
    headerTitle: {
      fontSize: 20,
      fontWeight: '700' as const,
      color: colors.text,
    },
    backButton: {
      width: 40,
      height: 40,
      borderRadius: 20,
      backgroundColor: colors.cardBg,
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: colors.glassBorder,
    },
    saveButton: {
      width: 40,
      height: 40,
      borderRadius: 20,
      backgroundColor: colors.cardBg,
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: colors.primary,
    },
    saveButtonDisabled: {
      opacity: 0.5,
    },
    loadingContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    loadingText: {
      fontSize: 15,
      color: colors.textSecondary,
      marginTop: 16,
    },
    scrollContent: {
      padding: 20,
      paddingBottom: 40,
    },
    photoSection: {
      alignItems: 'center',
      paddingVertical: 24,
      marginBottom: 16,
    },
    avatarContainer: {
      position: 'relative',
      marginBottom: 16,
    },
    avatar: {
      width: 100,
      height: 100,
      borderRadius: 50,
      borderWidth: 3,
      borderColor: colors.primary,
    },
    avatarOverlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0,0,0,0.5)',
      borderRadius: 50,
      justifyContent: 'center',
      alignItems: 'center',
    },
    changePhotoButton: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 8,
      paddingHorizontal: 20,
      paddingVertical: 10,
      backgroundColor: colors.cardBgLight,
      borderRadius: 20,
      borderWidth: 1,
      borderColor: colors.primary,
    },
    changePhotoText: {
      fontSize: 14,
      fontWeight: '600' as const,
      color: colors.primary,
    },
    formSection: {
      marginBottom: 16,
    },
    sectionTitle: {
      fontSize: 18,
      fontWeight: '700' as const,
      color: colors.text,
      marginBottom: 20,
    },
    inputGroup: {
      marginBottom: 20,
    },
    inputLabel: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 8,
      marginBottom: 10,
    },
    labelText: {
      fontSize: 14,
      fontWeight: '600' as const,
      color: colors.textSecondary,
    },
    input: {
      backgroundColor: colors.cardBgLight,
      borderRadius: 12,
      paddingHorizontal: 16,
      paddingVertical: 14,
      fontSize: 15,
      color: colors.text,
      borderWidth: 1,
      borderColor: colors.glassBorder,
    },
    textArea: {
      minHeight: 100,
      paddingTop: 14,
    },
    toggleRow: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingVertical: 12,
    },
    toggleLabel: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      gap: 12,
    },
    toggleTextContainer: {
      flex: 1,
    },
    toggleTitle: {
      fontSize: 15,
      fontWeight: '600' as const,
      color: colors.text,
      marginBottom: 4,
    },
    toggleDescription: {
      fontSize: 13,
      color: colors.textMuted,
    },
    toggle: {
      width: 52,
      height: 30,
      borderRadius: 15,
      backgroundColor: colors.cardBgLight,
      borderWidth: 2,
      borderColor: colors.glassBorder,
      padding: 2,
      justifyContent: 'center',
    },
    toggleActive: {
      backgroundColor: colors.success,
      borderColor: colors.success,
    },
    toggleThumb: {
      width: 22,
      height: 22,
      borderRadius: 11,
      backgroundColor: colors.text,
    },
    toggleThumbActive: {
      alignSelf: 'flex-end',
    },
    photoPickerClose: {
      position: 'absolute',
      top: 60,
      right: 20,
      width: 50,
      height: 50,
      borderRadius: 25,
      backgroundColor: colors.cardBg,
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 2,
      borderColor: colors.primary,
      zIndex: 1000,
    },
  });
