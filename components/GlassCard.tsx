import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import { useTheme } from '@/providers/ThemeProvider';

interface GlassCardProps {
  children: React.ReactNode;
  style?: ViewStyle;
  variant?: 'default' | 'light' | 'accent';
}

export default function GlassCard({ children, style, variant = 'default' }: GlassCardProps) {
  const { colors } = useTheme();
  
  const getBackgroundColor = () => {
    switch (variant) {
      case 'light':
        return colors.cardBgLight;
      case 'accent':
        return 'rgba(0, 180, 216, 0.15)';
      default:
        return colors.cardBg;
    }
  };

  return (
    <View style={[styles.card, { backgroundColor: getBackgroundColor(), borderColor: colors.glassBorder }, style]}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 20,
    borderWidth: 1,
    padding: 16,
    overflow: 'hidden',
  },
});
