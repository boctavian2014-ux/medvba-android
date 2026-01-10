import React, { useEffect, useRef } from 'react';
import { Text, StyleSheet, Animated } from 'react-native';
import { Flame } from 'lucide-react-native';
import Colors from '@/constants/colors';

interface StreakBadgeProps {
  streak: number;
  size?: 'small' | 'medium' | 'large';
}

export default function StreakBadge({ streak, size = 'medium' }: StreakBadgeProps) {
  const pulseAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    const pulse = Animated.loop(
      Animated.sequence([
        Animated.timing(pulseAnim, {
          toValue: 1.1,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(pulseAnim, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
      ])
    );
    pulse.start();
    return () => pulse.stop();
  }, [pulseAnim]);

  const getSize = () => {
    switch (size) {
      case 'small':
        return { icon: 16, text: 14, padding: 6 };
      case 'large':
        return { icon: 28, text: 24, padding: 14 };
      default:
        return { icon: 20, text: 18, padding: 10 };
    }
  };

  const sizeConfig = getSize();

  return (
    <Animated.View 
      style={[
        styles.container, 
        { paddingHorizontal: sizeConfig.padding, paddingVertical: sizeConfig.padding / 2 },
        { transform: [{ scale: pulseAnim }] }
      ]}
    >
      <Flame color={Colors.streakOrange} size={sizeConfig.icon} fill={Colors.streakOrange} />
      <Text style={[styles.text, { fontSize: sizeConfig.text }]}>{streak}</Text>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 149, 0, 0.2)',
    borderRadius: 20,
    gap: 4,
  },
  text: {
    color: Colors.streakOrange,
    fontWeight: '700' as const,
  },
});
