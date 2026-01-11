import { Generated, ColumnType } from 'kysely';

export type ZoomStatus = 'IDLE' | 'LIVE' | 'ENDED';
export type SessionStatus = 'SCHEDULED' | 'LIVE' | 'ENDED';

export interface UsersTable {
  id: Generated<string>;
  name: string;
  avatar: string;
  rank: number;
  points: number;
  streak: number;
  questions_answered: number;
  accuracy: number;
  study_hours: number;
  badges: string[];
  joined_at: ColumnType<Date, string | undefined, string | undefined>;
}

export interface StudyRoomsTable {
  id: Generated<string>;
  name: string;
  host_id: string;
  host_name: string;
  host_avatar: string;
  category: string;
  participants: number;
  max_participants: number;
  is_live: boolean;
  zoom_meeting_id: string | null;
  join_url: string | null;
  start_url: string | null;
  zoom_status: ZoomStatus;
  created_at: ColumnType<Date, string | undefined, string | undefined>;
}

export interface StudySessionsTable {
  id: Generated<string>;
  room_id: string;
  title: string;
  description: string | null;
  scheduled_for: ColumnType<Date, string, string>;
  duration_minutes: number;
  host_id: string;
  host_name: string;
  host_avatar: string;
  zoom_meeting_id: string | null;
  join_url: string | null;
  start_url: string | null;
  status: SessionStatus;
  attendees: string[];
  category: string;
  created_at: ColumnType<Date, string | undefined, string | undefined>;
}

export interface Database {
  users: UsersTable;
  study_rooms: StudyRoomsTable;
  study_sessions: StudySessionsTable;
}
