import React, { useState } from 'react';
import { Image, ImageStyle, StyleProp } from 'react-native';

const FALLBACK_BASE = 'https://api.dicebear.com/7.x/avataaars/png?seed=';

interface AvatarImageProps {
  uri: string | undefined | null;
  size: number;
  style?: StyleProp<ImageStyle>;
  seed?: string;
}

export default function AvatarImage({ uri, size, style, seed = 'fallback' }: AvatarImageProps) {
  const [errored, setErrored] = useState(false);
  const source = !uri || errored
    ? { uri: `${FALLBACK_BASE}${seed}` }
    : { uri };

  return (
    <Image
      source={source}
      style={[{ width: size, height: size, borderRadius: size / 2 }, style]}
      onError={() => setErrored(true)}
    />
  );
}
