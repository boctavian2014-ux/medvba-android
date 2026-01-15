-- Fix study_sessions table - add missing column if it doesn't exist
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
END $$;
