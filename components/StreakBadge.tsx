import React, { useEffect, useRef } from 'react';
import { Text, StyleSheet, Animated, View } from 'react-native';
import { Flame } from 'lucide-react-native';
import { useTheme } from '@/providers/ThemeProvider';
import { spacing, typography, borderRadius } from '@/constants/design';

interface StreakBadgeProps {
  streak: number;
  size?: 'small' | 'medium' | 'large';
}

export default function StreakBadge({ streak, size = 'medium' }: StreakBadgeProps) {
  const { colors } = useTheme();
  const pulseAnim = useRef(new Animated.Value(1)).current;
  const glowAnim = useRef(new Animated.Value(0)).current;
  const mountAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.spring(mountAnim, {
      toValue: 1,
      useNativeDriver: true,
      tension: 50,
      friction: 7,
    }).start();
  }, [mountAnim]);

  useEffect(() => {
    if (streak > 0) {
      const pulse = Animated.loop(
        Animated.sequence([
          Animated.timing(pulseAnim, {
            toValue: 1.08,
            duration: 800,
            useNativeDriver: true,
          }),
          Animated.timing(pulseAnim, {
            toValue: 1,
            duration: 800,
            useNativeDriver: true,
          }),
        ])
      );
      
      const glow = Animated.loop(
        Animated.sequence([
          Animated.timing(glowAnim, {
            toValue: 1,
            duration: 1200,
            useNativeDriver: true,
          }),
          Animated.timing(glowAnim, {
            toValue: 0,
            duration: 1200,
            useNativeDriver: true,
          }),
        ])
      );
      
      pulse.start();
      glow.start();
      
      return () => {
        pulse.stop();
        glow.stop();
      };
    }
  }, [pulseAnim, glowAnim, streak]);

  const getSize = () => {
    switch (size) {
      case 'small':
        return { icon: 16, fontSize: typography.small.fontSize, padding: spacing.sm };
      case 'large':
        return { icon: 28, fontSize: typography.h4.fontSize, padding: spacing.lg };
      default:
        return { icon: 20, fontSize: typography.bodySemibold.fontSize, padding: spacing.md };
    }
  };

  const sizeConfig = getSize();
  const glowOpacity = glowAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0.2, 0.5],
  });

  return (
    <Animated.View 
      style={[
        { 
          transform: [
            { scale: mountAnim },
            { scale: pulseAnim },
          ] 
        }
      ]}
    >
      <Animated.View
        style={[
          styles.glowContainer,
          {
            opacity: glowOpacity,
            borderRadius: borderRadius.full,
          },
        ]}
      />
      <View 
        style={[
          styles.container,
          { 
            paddingHorizontal: sizeConfig.padding * 1.5, 
            paddingVertical: sizeConfig.padding * 0.6,
            borderRadius: borderRadius.full,
          },
        ]}
      >
        <Flame color={colors.streakOrange} size={sizeConfig.icon} fill={colors.streakOrange} />
        <Text 
          style={[
            styles.text, 
            { 
              fontSize: sizeConfig.fontSize, 
              color: colors.streakOrange,
              fontWeight: typography.bodySemibold.fontWeight,
            }
          ]}
        >
          {streak}
        </Text>
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 149, 0, 0.2)',
    gap: spacing.xs,
  },
  text: {
    fontWeight: '700' as const,
  },
  glowContainer: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(255, 149, 0, 0.3)',
  },
});
