-- Migration: Simplify Zoom Integration
-- Replace complex zoom fields with simple meeting_url TEXT

-- For study_sessions table
ALTER TABLE study_sessions 
DROP COLUMN IF EXISTS zoom_info CASCADE;

ALTER TABLE study_sessions 
DROP COLUMN IF EXISTS zoom_meeting_id CASCADE;

ALTER TABLE study_sessions 
DROP COLUMN IF EXISTS join_url CASCADE;

ALTER TABLE study_sessions 
DROP COLUMN IF EXISTS start_url CASCADE;

ALTER TABLE study_sessions 
ADD COLUMN meeting_url TEXT;

COMMENT ON COLUMN study_sessions.meeting_url IS 'Simple meeting URL (Zoom, Google Meet, Teams, etc)';

-- For study_rooms table
ALTER TABLE study_rooms 
DROP COLUMN IF EXISTS zoom_info CASCADE;

ALTER TABLE study_rooms 
DROP COLUMN IF EXISTS zoom_meeting_id CASCADE;

ALTER TABLE study_rooms 
DROP COLUMN IF EXISTS join_url CASCADE;

ALTER TABLE study_rooms 
DROP COLUMN IF EXISTS start_url CASCADE;

ALTER TABLE study_rooms 
DROP COLUMN IF EXISTS zoom_status CASCADE;

ALTER TABLE study_rooms 
ADD COLUMN meeting_url TEXT;

COMMENT ON COLUMN study_rooms.meeting_url IS 'Simple meeting URL for the room';
