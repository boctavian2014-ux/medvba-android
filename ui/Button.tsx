import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { Button as PaperButton } from 'react-native-paper';

type Variant = 'default' | 'bordered' | 'borderless' | 'outlined' | 'elevated' | 'borderedProminent' | 'plain';

export type UIButtonProps = {
  children: string;
  onPress?: () => void;
  variant?: Variant;
  disabled?: boolean;
  color?: string;
  style?: StyleProp<ViewStyle>;
  /** Material icon name (leadingIcon). */
  icon?: string;
};

/**
 * Cross-platform Button using React Native Paper (avoids @expo/ui native view warnings on SDK 54).
 */
export function UIButton({
  children,
  onPress,
  variant = 'default',
  disabled = false,
  color,
  style,
  icon,
}: UIButtonProps) {
  const mode = variant === 'borderless' || variant === 'plain' ? 'text' : variant === 'bordered' || variant === 'outlined' ? 'outlined' : 'contained';
  return (
    <PaperButton mode={mode} onPress={onPress} disabled={disabled} icon={icon} textColor={color} style={style}>
      {children}
    </PaperButton>
  );
}
