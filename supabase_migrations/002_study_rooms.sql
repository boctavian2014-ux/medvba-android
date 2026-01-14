-- Create study_rooms table
CREATE TABLE IF NOT EXISTS study_rooms (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  host_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  category TEXT DEFAULT 'general' NOT NULL,
  max_participants INTEGER DEFAULT 20 NOT NULL,
  participants INTEGER DEFAULT 0 NOT NULL,
  zoom_meeting_id TEXT,
  join_url TEXT,
  start_url TEXT,
  zoom_status TEXT DEFAULT 'IDLE' NOT NULL CHECK (zoom_status IN ('IDLE', 'LIVE', 'ENDED')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW() NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW() NOT NULL
);

-- Create study_sessions table
CREATE TABLE IF NOT EXISTS study_sessions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  room_id UUID REFERENCES study_rooms(id) ON DELETE CASCADE NOT NULL,
  room_name TEXT NOT NULL,
  title TEXT NOT NULL,
  description TEXT,
  scheduled_for TIMESTAMP WITH TIME ZONE NOT NULL,
  duration_minutes INTEGER DEFAULT 60 NOT NULL,
  host_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  host_name TEXT NOT NULL,
  host_avatar TEXT,
  category TEXT DEFAULT 'general' NOT NULL,
  status TEXT DEFAULT 'SCHEDULED' NOT NULL CHECK (status IN ('SCHEDULED', 'LIVE', 'ENDED')),
  zoom_meeting_id TEXT,
  join_url TEXT,
  start_url TEXT,
  attendees TEXT[] DEFAULT ARRAY[]::TEXT[],
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW() NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW() NOT NULL
);

-- Create indexes
CREATE INDEX IF NOT EXISTS idx_study_rooms_host_id ON study_rooms(host_id);
CREATE INDEX IF NOT EXISTS idx_study_rooms_created_at ON study_rooms(created_at);
CREATE INDEX IF NOT EXISTS idx_study_sessions_room_id ON study_sessions(room_id);
CREATE INDEX IF NOT EXISTS idx_study_sessions_host_id ON study_sessions(host_id);
CREATE INDEX IF NOT EXISTS idx_study_sessions_scheduled_for ON study_sessions(scheduled_for);

-- Enable Row Level Security
ALTER TABLE study_rooms ENABLE ROW LEVEL SECURITY;
ALTER TABLE study_sessions ENABLE ROW LEVEL SECURITY;

-- RLS Policies for study_rooms (everyone can read, only host can modify)
CREATE POLICY "Anyone can read study rooms"
  ON study_rooms
  FOR SELECT
  USING (true);

CREATE POLICY "Authenticated users can create study rooms"
  ON study_rooms
  FOR INSERT
  WITH CHECK (auth.uid() = host_id);

CREATE POLICY "Hosts can update their own study rooms"
  ON study_rooms
  FOR UPDATE
  USING (auth.uid() = host_id);

CREATE POLICY "Hosts can delete their own study rooms"
  ON study_rooms
  FOR DELETE
  USING (auth.uid() = host_id);

-- RLS Policies for study_sessions (everyone can read, only host can modify)
CREATE POLICY "Anyone can read study sessions"
  ON study_sessions
  FOR SELECT
  USING (true);

CREATE POLICY "Authenticated users can create study sessions"
  ON study_sessions
  FOR INSERT
  WITH CHECK (auth.uid() = host_id);

CREATE POLICY "Hosts can update their own study sessions"
  ON study_sessions
  FOR UPDATE
  USING (auth.uid() = host_id);

CREATE POLICY "Hosts can delete their own study sessions"
  ON study_sessions
  FOR DELETE
  USING (auth.uid() = host_id);

-- Triggers for updated_at
CREATE TRIGGER update_study_rooms_updated_at
  BEFORE UPDATE ON study_rooms
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_study_sessions_updated_at
  BEFORE UPDATE ON study_sessions
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();
