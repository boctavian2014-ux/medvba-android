import React from 'react';
import { Image, ImageStyle, StyleProp, View } from 'react-native';

const FALLBACK_BASE = 'https://api.dicebear.com/7.x/avataaars/png?seed=';

interface AvatarImageProps {
  uri: string | undefined | null;
  size: number;
  style?: StyleProp<ImageStyle>;
  seed?: string;
  accessibilityLabel?: string;
}

export default function AvatarImage({ uri, size, style, seed = 'fallback', accessibilityLabel }: AvatarImageProps) {
  const [errored, setErrored] = React.useState(false);
  const source = !uri || errored
    ? { uri: `${FALLBACK_BASE}${seed}` }
    : { uri };

  return (
    <View accessibilityLabel={accessibilityLabel} accessibilityRole="image">
      <Image
        source={source}
        style={[{ width: size, height: size, borderRadius: size / 2 }, style]}
        onError={() => setErrored(true)}
      />
    </View>
  );
}
