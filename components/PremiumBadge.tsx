import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Crown } from 'lucide-react-native';
import { useTheme } from '@/providers/ThemeProvider';

interface PremiumBadgeProps {
  size?: 'small' | 'medium' | 'large';
  style?: any;
}

export default function PremiumBadge({ size = 'medium', style }: PremiumBadgeProps) {
  const { colors } = useTheme();

  const dimensions = {
    small: { height: 20, padding: 4, fontSize: 10, iconSize: 10 },
    medium: { height: 24, padding: 6, fontSize: 12, iconSize: 12 },
    large: { height: 32, padding: 8, fontSize: 14, iconSize: 14 },
  };

  const dim = dimensions[size];

  return (
    <View style={[styles.container, { height: dim.height }, style]}>
      <LinearGradient
        colors={['#FFD700', '#FFA500', '#FF8C00']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.gradient}
      >
        <View style={[styles.content, { paddingHorizontal: dim.padding }]}>
          <Crown size={dim.iconSize} color="#FFF" strokeWidth={2.5} />
          <Text style={[styles.text, { fontSize: dim.fontSize }]}>PRO</Text>
        </View>
      </LinearGradient>
      <View style={[styles.glassEffect, { backgroundColor: colors.background + '30' }]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 12,
    overflow: 'hidden',
    alignSelf: 'flex-start',
  },
  gradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  text: {
    color: '#FFF',
    fontWeight: '800' as const,
    letterSpacing: 0.5,
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  glassEffect: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '50%',
    opacity: 0.3,
  },
});
