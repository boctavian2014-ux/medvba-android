/** Returns the deterministic DiceBear avatar URL for a given seed (usually a user ID). */
export const getDefaultAvatarUrl = (seed: string): string =>
  `https://api.dicebear.com/7.x/avataaars/png?seed=${seed}`;
