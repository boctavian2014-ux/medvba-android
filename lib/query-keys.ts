/**
 * Centralized TanStack Query keys for cache consistency and type-safe invalidation.
 * Use these instead of inline string arrays in supabase-hooks and components.
 */

export const queryKeys = {
  studyRooms: ['studyRooms'] as const,
  studyRoomsList: () => [...queryKeys.studyRooms] as const,

  upcomingSessions: ['upcomingSessions'] as const,
  upcomingSessionsList: () => [...queryKeys.upcomingSessions] as const,

  zoomRequests: (userId: string) => ['zoomRequests', userId] as const,

  studyPartners: (filters?: Record<string, unknown>) =>
    ['studyPartners', filters] as const,

  userProfile: (userId: string) => ['userProfile', userId] as const,

  userProgress: (userId: string) => ['userProgress', userId] as const,
  dailyProgress: (userId: string, date: string) =>
    ['dailyProgress', userId, date] as const,
  weeklyProgress: (userId: string, startDate: string, endDate: string) =>
    ['weeklyProgress', userId, startDate, endDate] as const,

  userAchievements: (userId: string) => ['userAchievements', userId] as const,
  recentAchievements: (limit: number) => ['recentAchievements', limit] as const,
  checkAchievements: (userId: string) => ['checkAchievements', userId] as const,

  directChats: (userId: string) => ['directChats', userId] as const,
  activityFeed: (userId: string, limit?: number) =>
    ['activityFeed', userId, limit] as const,

  subscription: (userId: string) => ['subscription', userId] as const,
  userPresence: (userId: string) => ['userPresence', userId] as const,
  onlineFriends: (userId: string) => ['onlineFriends', userId] as const,
  friendActivity: (userId: string, limit: number) =>
    ['friendActivity', userId, limit] as const,
} as const;
