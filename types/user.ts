export interface UserProfile {
  id: string;
  name: string;
  avatar: string;
  /** Supabase custom photo URL when set; mirrors profiles.profile_photo_url for screens that read it directly. */
  profile_photo_url?: string;
  rank: number;
  points: number;
  streak: number;
  questionsAnswered: number;
  accuracy: number;
  studyHours: number;
  badges: string[];
  joinedAt: string;
  isPublic: boolean;
  // Social account IDs for linking
  googleId?: string;
  facebookId?: string;
  appleId?: string;
  // Email from auth
  email?: string;
}

export interface UserAccount {
  id: string;
  email?: string;
  name: string;
  avatar: string;
  city?: string;
  university?: string;
  year_of_study?: number;
  bio?: string;
  is_public: boolean;
  profile_photo_url?: string;
  created_at: string;
}

export interface UserPresence {
  userId: string;
  isOnline: boolean;
  lastSeen: string;
  status?: 'online' | 'away' | 'offline';
}

export interface FriendActivity {
  id: string;
  userId: string;
  userName: string;
  userAvatar: string;
  activityType: 'came_online' | 'started_quiz' | 'joined_room' | 'earned_achievement';
  timestamp: string;
  metadata?: Record<string, any>;
}
