-- Fix study_sessions table and simplify Zoom integration
DO $$ 
BEGIN
  -- Add host_avatar column if it doesn't exist
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_name = 'study_sessions' 
    AND column_name = 'host_avatar'
  ) THEN
    ALTER TABLE study_sessions ADD COLUMN host_avatar TEXT;
  END IF;
  
  -- Add meeting_url column for simple meeting links (replacing Zoom complexity)
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_name = 'study_sessions' 
    AND column_name = 'meeting_url'
  ) THEN
    ALTER TABLE study_sessions ADD COLUMN meeting_url TEXT;
  END IF;
  
  -- Add meeting_url column to study_rooms as well
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_name = 'study_rooms' 
    AND column_name = 'meeting_url'
  ) THEN
    ALTER TABLE study_rooms ADD COLUMN meeting_url TEXT;
  END IF;
END $$;

-- Refresh the schema cache
NOTIFY pgrst, 'reload schema';
