import React from 'react';
import { View, StyleSheet, ViewStyle, Platform } from 'react-native';
import { useTheme } from '@/providers/ThemeProvider';
import { spacing, borderRadius, elevation } from '@/constants/design';

interface GlassCardProps {
  children: React.ReactNode;
  style?: ViewStyle;
  variant?: 'default' | 'light' | 'accent';
  elevation?: 'default' | 'light' | 'heavy';
  noPadding?: boolean;
}

export default function GlassCard({ 
  children, 
  style, 
  variant = 'default',
  elevation: elevationLevel = 'default',
  noPadding = false 
}: GlassCardProps) {
  const { colorScheme } = useTheme();
  
  const getBackgroundColor = () => {
    const elevConfig = elevation.glass[elevationLevel];
    const baseOpacity = colorScheme === 'dark' ? elevConfig.opacity : elevConfig.opacity * 0.5;
    
    switch (variant) {
      case 'light':
        return colorScheme === 'dark' 
          ? `rgba(255, 255, 255, ${elevConfig.opacity + 0.04})`
          : `rgba(0, 0, 0, ${baseOpacity + 0.02})`;
      case 'accent':
        return colorScheme === 'dark'
          ? 'rgba(0, 180, 216, 0.15)'
          : 'rgba(0, 180, 216, 0.08)';
      default:
        return colorScheme === 'dark'
          ? `rgba(255, 255, 255, ${elevConfig.opacity})`
          : `rgba(0, 0, 0, ${baseOpacity})`;
    }
  };

  const getBorderColor = () => {
    const elevConfig = elevation.glass[elevationLevel];
    return colorScheme === 'dark'
      ? `rgba(255, 255, 255, ${elevConfig.borderOpacity})`
      : `rgba(0, 0, 0, ${elevConfig.borderOpacity * 0.8})`;
  };

  return (
    <View 
      style={[
        styles.card, 
        { 
          backgroundColor: getBackgroundColor(), 
          borderColor: getBorderColor(),
          padding: noPadding ? 0 : spacing.lg,
        }, 
        Platform.OS === 'web' && styles.webOptimized,
        style
      ]}
    >
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: borderRadius.xl,
    borderWidth: 1,
    overflow: 'hidden',
  },
  webOptimized: {
    backdropFilter: 'blur(4px)',
    WebkitBackdropFilter: 'blur(4px)',
  } as ViewStyle,
});
