-- Run this SQL in your Supabase SQL Editor to create the tables

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Users table
CREATE TABLE IF NOT EXISTS users (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  avatar TEXT NOT NULL DEFAULT '',
  rank INTEGER NOT NULL DEFAULT 0,
  points INTEGER NOT NULL DEFAULT 0,
  streak INTEGER NOT NULL DEFAULT 0,
  questions_answered INTEGER NOT NULL DEFAULT 0,
  accuracy NUMERIC(5,2) NOT NULL DEFAULT 0,
  study_hours NUMERIC(10,2) NOT NULL DEFAULT 0,
  badges TEXT[] NOT NULL DEFAULT '{}',
  joined_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Study rooms table
CREATE TABLE IF NOT EXISTS study_rooms (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  host_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  host_name TEXT NOT NULL,
  host_avatar TEXT NOT NULL DEFAULT '',
  category TEXT NOT NULL DEFAULT 'general',
  participants INTEGER NOT NULL DEFAULT 0,
  max_participants INTEGER NOT NULL DEFAULT 20,
  is_live BOOLEAN NOT NULL DEFAULT FALSE,
  zoom_meeting_id TEXT,
  join_url TEXT,
  start_url TEXT,
  zoom_status TEXT NOT NULL DEFAULT 'IDLE' CHECK (zoom_status IN ('IDLE', 'LIVE', 'ENDED')),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Study sessions table
CREATE TABLE IF NOT EXISTS study_sessions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  room_id UUID NOT NULL REFERENCES study_rooms(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  description TEXT,
  scheduled_for TIMESTAMPTZ NOT NULL,
  duration_minutes INTEGER NOT NULL DEFAULT 60,
  host_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  host_name TEXT NOT NULL,
  host_avatar TEXT NOT NULL DEFAULT '',
  zoom_meeting_id TEXT,
  join_url TEXT,
  start_url TEXT,
  status TEXT NOT NULL DEFAULT 'SCHEDULED' CHECK (status IN ('SCHEDULED', 'LIVE', 'ENDED')),
  attendees UUID[] NOT NULL DEFAULT '{}',
  category TEXT NOT NULL DEFAULT 'general',
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_users_rank ON users(rank);
CREATE INDEX IF NOT EXISTS idx_users_points ON users(points DESC);
CREATE INDEX IF NOT EXISTS idx_study_rooms_host_id ON study_rooms(host_id);
CREATE INDEX IF NOT EXISTS idx_study_rooms_is_live ON study_rooms(is_live);
CREATE INDEX IF NOT EXISTS idx_study_sessions_room_id ON study_sessions(room_id);
CREATE INDEX IF NOT EXISTS idx_study_sessions_host_id ON study_sessions(host_id);
CREATE INDEX IF NOT EXISTS idx_study_sessions_scheduled_for ON study_sessions(scheduled_for);
CREATE INDEX IF NOT EXISTS idx_study_sessions_status ON study_sessions(status);

-- Insert some seed data for testing
INSERT INTO users (id, name, avatar, rank, points, streak, questions_answered, accuracy, study_hours, badges)
VALUES 
  ('00000000-0000-0000-0000-000000000001', 'Mihai D.', 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop', 1, 45200, 89, 5200, 92.5, 320, ARRAY['streak_master', 'anatomy_expert']),
  ('00000000-0000-0000-0000-000000000002', 'Elena R.', 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop', 2, 43800, 67, 4800, 89.3, 285, ARRAY['early_bird', 'quiz_champion']),
  ('00000000-0000-0000-0000-000000000003', 'Andrei P.', 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop', 3, 41500, 45, 4200, 85.7, 250, ARRAY['week_warrior']),
  ('00000000-0000-0000-0000-000000000004', 'Maria S.', 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop', 4, 38900, 52, 3900, 88.1, 230, ARRAY['milestone_5k']),
  ('00000000-0000-0000-0000-000000000005', 'Cristian B.', 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop', 5, 36200, 38, 3500, 82.4, 200, ARRAY['pharmacology_pro']),
  ('00000000-0000-0000-0000-000000000006', 'Ioana T.', 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop', 6, 34100, 41, 3200, 86.9, 180, ARRAY['pathology_master']),
  ('00000000-0000-0000-0000-000000000007', 'Radu M.', 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop', 7, 31800, 29, 2800, 79.5, 160, ARRAY['consistent_learner'])
ON CONFLICT (id) DO NOTHING;

-- Insert study rooms
INSERT INTO study_rooms (id, name, host_id, host_name, host_avatar, category, participants, max_participants, is_live, zoom_status)
VALUES
  ('00000000-0000-0000-0000-000000000101', 'Anatomy Night Owls', '00000000-0000-0000-0000-000000000003', 'Andrei P.', 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop', 'anatomy', 12, 20, FALSE, 'IDLE'),
  ('00000000-0000-0000-0000-000000000102', 'Biochemistry Basics', '00000000-0000-0000-0000-000000000002', 'Elena R.', 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop', 'biochemistry', 8, 15, FALSE, 'IDLE'),
  ('00000000-0000-0000-0000-000000000103', 'Exam Prep Sprint', '00000000-0000-0000-0000-000000000001', 'Mihai D.', 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop', 'mixed', 18, 25, FALSE, 'IDLE')
ON CONFLICT (id) DO NOTHING;
