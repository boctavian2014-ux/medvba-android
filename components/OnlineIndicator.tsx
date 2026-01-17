import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useTheme } from '@/providers/ThemeProvider';

interface OnlineIndicatorProps {
  isOnline: boolean;
  size?: number;
  style?: any;
}

export default function OnlineIndicator({ isOnline, size = 12, style }: OnlineIndicatorProps) {
  const { colors } = useTheme();

  if (!isOnline) return null;

  return (
    <View
      style={[
        styles.container,
        {
          width: size,
          height: size,
          borderRadius: size / 2,
          backgroundColor: colors.success,
          borderColor: colors.cardBg,
        },
        style,
      ]}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
  },
});
