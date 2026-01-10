import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import Colors from '@/constants/colors';

interface GlassCardProps {
  children: React.ReactNode;
  style?: ViewStyle;
  variant?: 'default' | 'light' | 'accent';
}

export default function GlassCard({ children, style, variant = 'default' }: GlassCardProps) {
  const getBackgroundColor = () => {
    switch (variant) {
      case 'light':
        return Colors.cardBgLight;
      case 'accent':
        return 'rgba(0, 180, 216, 0.15)';
      default:
        return Colors.cardBg;
    }
  };

  return (
    <View style={[styles.card, { backgroundColor: getBackgroundColor() }, style]}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 20,
    borderWidth: 1,
    borderColor: Colors.glassBorder,
    padding: 16,
    overflow: 'hidden',
  },
});
