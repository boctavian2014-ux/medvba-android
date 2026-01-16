-- Ensure room_messages has all required columns
-- This migration checks and adds missing columns instead of dropping the table

-- Add user_name if it doesn't exist
DO $$ 
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_name = 'room_messages' AND column_name = 'user_name'
  ) THEN
    ALTER TABLE room_messages ADD COLUMN user_name TEXT;
  END IF;
END $$;

-- Add user_avatar if it doesn't exist
DO $$ 
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_name = 'room_messages' AND column_name = 'user_avatar'
  ) THEN
    ALTER TABLE room_messages ADD COLUMN user_avatar TEXT;
  END IF;
END $$;

-- If the table exists but doesn't have the columns, we need to backfill
-- Set user_name to 'Anonymous' for existing rows with NULL
UPDATE room_messages 
SET user_name = 'Anonymous' 
WHERE user_name IS NULL;

-- Make user_name NOT NULL after backfilling
ALTER TABLE room_messages ALTER COLUMN user_name SET NOT NULL;

-- Ensure message column exists and is NOT NULL
DO $$ 
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_name = 'room_messages' AND column_name = 'message'
  ) THEN
    ALTER TABLE room_messages ADD COLUMN message TEXT NOT NULL;
  END IF;
END $$;

-- Recreate indexes if they don't exist
DROP INDEX IF EXISTS idx_room_messages_room_id;
DROP INDEX IF EXISTS idx_room_messages_user_id;
DROP INDEX IF EXISTS idx_room_messages_created_at;

CREATE INDEX idx_room_messages_room_id ON room_messages(room_id);
CREATE INDEX idx_room_messages_user_id ON room_messages(user_id);
CREATE INDEX idx_room_messages_created_at ON room_messages(created_at);

-- Force PostgREST schema cache reload using multiple methods
-- Method 1: NOTIFY
NOTIFY pgrst, 'reload schema';

-- Method 2: Update a dummy comment to trigger schema change detection
COMMENT ON TABLE room_messages IS 'Room messages table - updated schema';

-- Method 3: Revoke and re-grant permissions to force cache refresh
REVOKE ALL ON room_messages FROM authenticated, anon;

GRANT SELECT, INSERT, DELETE ON room_messages TO authenticated;
GRANT SELECT ON room_messages TO anon;

-- Ensure RLS is enabled
ALTER TABLE room_messages ENABLE ROW LEVEL SECURITY;

-- Drop and recreate policies to ensure they're up to date
DROP POLICY IF EXISTS "Anyone can read room messages" ON room_messages;
DROP POLICY IF EXISTS "Authenticated users can create messages" ON room_messages;
DROP POLICY IF EXISTS "Users can delete their own messages" ON room_messages;

CREATE POLICY "Anyone can read room messages"
  ON room_messages
  FOR SELECT
  USING (true);

CREATE POLICY "Authenticated users can create messages"
  ON room_messages
  FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete their own messages"
  ON room_messages
  FOR DELETE
  USING (auth.uid() = user_id);
