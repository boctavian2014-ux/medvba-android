-- Migration 006: Remove Zoom-specific columns and simplify to meeting_url
-- This removes zoom_info JSONB and ensures meeting_url TEXT is available

-- For study_sessions table
ALTER TABLE study_sessions 
DROP COLUMN IF EXISTS zoom_info CASCADE;

ALTER TABLE study_sessions 
ADD COLUMN IF NOT EXISTS meeting_url TEXT;

COMMENT ON COLUMN study_sessions.meeting_url IS 'Simple meeting URL (Zoom, Google Meet, Teams, etc)';

-- For study_rooms table
ALTER TABLE study_rooms 
DROP COLUMN IF EXISTS zoom_info CASCADE;

ALTER TABLE study_rooms 
ADD COLUMN IF NOT EXISTS meeting_url TEXT;

COMMENT ON COLUMN study_rooms.meeting_url IS 'Simple meeting URL for the room';
