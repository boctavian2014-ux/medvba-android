import React, { useEffect, useRef } from 'react';
import { Animated, ViewStyle } from 'react-native';

interface AnimatedTransitionProps {
  children: React.ReactNode;
  type?: 'fade' | 'slide' | 'scale' | 'slideUp';
  duration?: number;
  delay?: number;
  style?: ViewStyle;
}

export default function AnimatedTransition({
  children,
  type = 'fade',
  duration = 250,
  delay = 0,
  style,
}: AnimatedTransitionProps) {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const translateAnim = useRef(new Animated.Value(type === 'slideUp' ? 20 : 30)).current;
  const scaleAnim = useRef(new Animated.Value(0.95)).current;

  useEffect(() => {
    const animations: Animated.CompositeAnimation[] = [];

    if (type === 'fade') {
      animations.push(
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration,
          delay,
          useNativeDriver: true,
        })
      );
    } else if (type === 'slide' || type === 'slideUp') {
      animations.push(
        Animated.parallel([
          Animated.timing(fadeAnim, {
            toValue: 1,
            duration,
            delay,
            useNativeDriver: true,
          }),
          Animated.spring(translateAnim, {
            toValue: 0,
            delay,
            useNativeDriver: true,
            tension: 50,
            friction: 8,
          }),
        ])
      );
    } else if (type === 'scale') {
      animations.push(
        Animated.parallel([
          Animated.timing(fadeAnim, {
            toValue: 1,
            duration,
            delay,
            useNativeDriver: true,
          }),
          Animated.spring(scaleAnim, {
            toValue: 1,
            delay,
            useNativeDriver: true,
            tension: 50,
            friction: 7,
          }),
        ])
      );
    }

    Animated.parallel(animations).start();
  }, [fadeAnim, translateAnim, scaleAnim, type, duration, delay]);

  const getAnimatedStyle = (): ViewStyle => {
    if (type === 'fade') {
      return { opacity: fadeAnim };
    } else if (type === 'slide') {
      return {
        opacity: fadeAnim,
        transform: [{ translateX: translateAnim }],
      };
    } else if (type === 'slideUp') {
      return {
        opacity: fadeAnim,
        transform: [{ translateY: translateAnim }],
      };
    } else if (type === 'scale') {
      return {
        opacity: fadeAnim,
        transform: [{ scale: scaleAnim }],
      };
    }
    return {};
  };

  return (
    <Animated.View style={[getAnimatedStyle(), style]}>
      {children}
    </Animated.View>
  );
}
