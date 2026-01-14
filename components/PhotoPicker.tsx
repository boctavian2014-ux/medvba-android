import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Image, Alert, ActivityIndicator, Platform } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Haptics from 'expo-haptics';
import { Camera, Upload } from 'lucide-react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Colors from '@/constants/colors';

interface PhotoPickerProps {
  currentPhotoUrl?: string;
  onPhotoSelected: (uri: string) => void;
  onPhotoRemoved?: () => void;
  size?: number;
  showRemoveButton?: boolean;
}

export default function PhotoPicker({
  currentPhotoUrl,
  onPhotoSelected,
  onPhotoRemoved,
  size = 120,
  showRemoveButton = true,
}: PhotoPickerProps) {
  const [isLoading, setIsLoading] = useState(false);

  const requestPermissions = async () => {
    if (Platform.OS !== 'web') {
      const { status: cameraStatus } = await ImagePicker.requestCameraPermissionsAsync();
      const { status: libraryStatus } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      
      if (cameraStatus !== 'granted' || libraryStatus !== 'granted') {
        Alert.alert(
          'Permissions Required',
          'We need camera and photo library permissions to change your profile picture.',
          [{ text: 'OK' }]
        );
        return false;
      }
    }
    return true;
  };

  const pickImage = async (useCamera: boolean) => {
    const hasPermissions = await requestPermissions();
    if (!hasPermissions) return;

    try {
      setIsLoading(true);
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);

      const result = useCamera
        ? await ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 0.8,
          })
        : await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 0.8,
          });

      if (!result.canceled && result.assets[0]) {
        onPhotoSelected(result.assets[0].uri);
        Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
      }
    } catch (error) {
      console.error('Error picking image:', error);
      Alert.alert('Error', 'Failed to pick image. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handlePhotoOptions = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    
    Alert.alert(
      'Change Profile Photo',
      'Choose an option',
      [
        {
          text: 'Take Photo',
          onPress: () => pickImage(true),
        },
        {
          text: 'Choose from Library',
          onPress: () => pickImage(false),
        },
        ...(currentPhotoUrl && showRemoveButton && onPhotoRemoved
          ? [
              {
                text: 'Remove Photo',
                style: 'destructive' as const,
                onPress: () => {
                  Haptics.notificationAsync(Haptics.NotificationFeedbackType.Warning);
                  onPhotoRemoved();
                },
              },
            ]
          : []),
        {
          text: 'Cancel',
          style: 'cancel' as const,
        },
      ]
    );
  };

  return (
    <View style={[styles.container, { width: size, height: size }]}>
      <TouchableOpacity
        style={[styles.photoContainer, { width: size, height: size, borderRadius: size / 2 }]}
        onPress={handlePhotoOptions}
        activeOpacity={0.8}
        disabled={isLoading}
      >
        {currentPhotoUrl ? (
          <Image source={{ uri: currentPhotoUrl }} style={styles.photo} />
        ) : (
          <View style={styles.placeholder}>
            <Camera color={Colors.textSecondary} size={size / 3} />
          </View>
        )}
        
        {isLoading && (
          <View style={styles.loadingOverlay}>
            <ActivityIndicator size="large" color={Colors.primary} />
          </View>
        )}

        <View style={styles.editButton}>
          <LinearGradient
            colors={[Colors.primary, Colors.secondary]}
            style={StyleSheet.absoluteFill}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
          />
          <Upload color={Colors.text} size={16} />
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  photoContainer: {
    borderWidth: 3,
    borderColor: Colors.primary,
    overflow: 'hidden',
    backgroundColor: Colors.cardBg,
  },
  photo: {
    width: '100%',
    height: '100%',
  },
  placeholder: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.cardBgLight,
  },
  loadingOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  editButton: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: Colors.background,
    overflow: 'hidden',
  },
});
