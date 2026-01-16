import React, { useEffect, useRef } from 'react';
import { View, StyleSheet, ActivityIndicator, Text, Animated } from 'react-native';
import { useTheme } from '@/providers/ThemeProvider';
import { spacing, typography } from '@/constants/design';

interface LoadingOverlayProps {
  visible: boolean;
  message?: string;
}

export default function LoadingOverlay({ visible, message }: LoadingOverlayProps) {
  const { colors } = useTheme();
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const [shouldRender, setShouldRender] = React.useState(false);

  useEffect(() => {
    if (visible) {
      setShouldRender(true);
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 150,
        useNativeDriver: true,
      }).start(() => {
        setShouldRender(false);
      });
    }
  }, [visible, fadeAnim]);

  if (!shouldRender) {
    return null;
  }

  return (
    <Animated.View 
      style={[
        styles.overlay,
        { opacity: fadeAnim }
      ]}
      pointerEvents={visible ? 'auto' : 'none'}
    >
      <View style={[styles.content, { backgroundColor: colors.cardBg, borderColor: colors.glassBorder }]}>
        <ActivityIndicator size="large" color={colors.primary} />
        {message && (
          <Text style={[styles.message, { color: colors.text }]}>{message}</Text>
        )}
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 9999,
  },
  content: {
    borderRadius: 16,
    padding: spacing.xxl,
    borderWidth: 1,
    alignItems: 'center',
    minWidth: 120,
  },
  message: {
    marginTop: spacing.md,
    fontSize: typography.small.fontSize,
    fontWeight: typography.smallMedium.fontWeight,
    textAlign: 'center',
  },
});
