export interface User {
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
  joinedDate: string;
}

export interface LeaderboardUser {
  id: string;
  name: string;
  avatar: string;
  rank: number;
  points: number;
  streak: number;
}

export const currentUser: User = {
  id: 'current',
  name: 'Alexandra M.',
  avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
  rank: 47,
  points: 12450,
  streak: 23,
  questionsAnswered: 3842,
  accuracy: 78.5,
  studyHours: 156,
  badges: ['early_bird', 'streak_master', 'anatomy_expert', 'week_warrior'],
  joinedDate: '2024-09-15',
};

export const leaderboard: LeaderboardUser[] = [
  { id: '1', name: 'Mihai D.', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop', rank: 1, points: 45200, streak: 89 },
  { id: '2', name: 'Elena R.', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop', rank: 2, points: 43800, streak: 67 },
  { id: '3', name: 'Andrei P.', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop', rank: 3, points: 41500, streak: 45 },
  { id: '4', name: 'Maria S.', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop', rank: 4, points: 38900, streak: 52 },
  { id: '5', name: 'Cristian B.', avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop', rank: 5, points: 36200, streak: 38 },
  { id: '6', name: 'Ioana T.', avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop', rank: 6, points: 34100, streak: 41 },
  { id: '7', name: 'Radu M.', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop', rank: 7, points: 31800, streak: 29 },
];
