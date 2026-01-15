export interface UserProfile {
  id: string;
  name: string;
  avatar: string;
  rank: number;
  points: number;
  streak: number;
  questionsAnswered: number;
  accuracy: number;
  studyHours: number;
  badges: string[];
  joinedAt: string;
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
