-- Row-Level Security (RLS) Policies for Supabase
-- Run this SQL in your Supabase SQL Editor after 001_initial_schema.sql

-- =============================================================================
-- ENABLE RLS ON ALL TABLES
-- =============================================================================

ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE study_rooms ENABLE ROW LEVEL SECURITY;
ALTER TABLE study_sessions ENABLE ROW LEVEL SECURITY;

-- =============================================================================
-- USERS TABLE POLICIES
-- =============================================================================

-- Anyone can read user profiles (needed for leaderboard, host info, etc.)
CREATE POLICY "users_select_all" ON users
  FOR SELECT
  TO anon, authenticated
  USING (true);

-- Users can only update their own profile
CREATE POLICY "users_update_own" ON users
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = id)
  WITH CHECK (auth.uid() = id);

-- Users can only delete their own account
CREATE POLICY "users_delete_own" ON users
  FOR DELETE
  TO authenticated
  USING (auth.uid() = id);

-- Users can insert their own profile (for registration)
CREATE POLICY "users_insert_own" ON users
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = id);

-- =============================================================================
-- STUDY_ROOMS TABLE POLICIES
-- =============================================================================

-- Anyone can view study rooms
CREATE POLICY "study_rooms_select_all" ON study_rooms
  FOR SELECT
  TO anon, authenticated
  USING (true);

-- Authenticated users can create study rooms
CREATE POLICY "study_rooms_insert_authenticated" ON study_rooms
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() IS NOT NULL AND auth.uid() = host_id);

-- Only the host can update their room
CREATE POLICY "study_rooms_update_host" ON study_rooms
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = host_id)
  WITH CHECK (auth.uid() = host_id);

-- Only the host can delete their room
CREATE POLICY "study_rooms_delete_host" ON study_rooms
  FOR DELETE
  TO authenticated
  USING (auth.uid() = host_id);

-- =============================================================================
-- STUDY_SESSIONS TABLE POLICIES
-- Note: study_sessions references host via room_id -> study_rooms.host_id
-- =============================================================================

-- Anyone can view study sessions
CREATE POLICY "study_sessions_select_all" ON study_sessions
  FOR SELECT
  TO anon, authenticated
  USING (true);

-- Authenticated users can create sessions (must be host of the room)
CREATE POLICY "study_sessions_insert_host" ON study_sessions
  FOR INSERT
  TO authenticated
  WITH CHECK (
    auth.uid() IS NOT NULL 
    AND auth.uid() = (SELECT host_id FROM study_rooms WHERE id = study_sessions.room_id)
  );

-- Only the room host can update the session
CREATE POLICY "study_sessions_update_host" ON study_sessions
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = (SELECT host_id FROM study_rooms WHERE id = study_sessions.room_id))
  WITH CHECK (auth.uid() = (SELECT host_id FROM study_rooms WHERE id = study_sessions.room_id));

-- Only the room host can delete the session
CREATE POLICY "study_sessions_delete_host" ON study_sessions
  FOR DELETE
  TO authenticated
  USING (auth.uid() = (SELECT host_id FROM study_rooms WHERE id = study_sessions.room_id));

-- =============================================================================
-- ENSURE FK + INDEX ON study_sessions.room_id
-- =============================================================================

-- Add FK constraint if not exists (ensures subquery returns at most one row)
ALTER TABLE study_sessions
  DROP CONSTRAINT IF EXISTS study_sessions_room_id_fkey;

ALTER TABLE study_sessions
  ADD CONSTRAINT study_sessions_room_id_fkey
  FOREIGN KEY (room_id) REFERENCES study_rooms(id) ON DELETE CASCADE;

-- Index for performance on subquery lookups
CREATE INDEX IF NOT EXISTS idx_study_sessions_room_id
  ON study_sessions(room_id);

-- =============================================================================
-- SERVICE ROLE BYPASS
-- Note: The service role (used by your backend with DATABASE_URL) bypasses RLS.
-- These policies apply when using the Supabase client with anon/authenticated keys.
-- =============================================================================

-- =============================================================================
-- OPTIONAL: Policies for attendees (uncomment if needed)
-- =============================================================================

-- Allow users to add themselves as attendees
-- CREATE POLICY "study_sessions_join_attendee" ON study_sessions
--   FOR UPDATE
--   USING (auth.uid() = ANY(attendees) OR auth.uid() = host_id)
--   WITH CHECK (auth.uid() = ANY(attendees) OR auth.uid() = host_id);

-- =============================================================================
-- GRANT PERMISSIONS TO ROLES
-- =============================================================================

-- Grant usage on schema
GRANT USAGE ON SCHEMA public TO anon, authenticated;

-- Grant table permissions
GRANT SELECT ON users TO anon, authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON users TO authenticated;

GRANT SELECT ON study_rooms TO anon, authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON study_rooms TO authenticated;

GRANT SELECT ON study_sessions TO anon, authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON study_sessions TO authenticated;
