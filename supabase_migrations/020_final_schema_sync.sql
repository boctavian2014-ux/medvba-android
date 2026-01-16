-- Final schema synchronization for room_messages
-- This migration ensures PostgREST cache is completely in sync

-- 1. Ensure the table structure is exactly what we want
DO $$ 
BEGIN
  -- Drop problematic columns if they exist
  IF EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_name = 'room_messages' AND column_name = 'user_name'
  ) THEN
    ALTER TABLE room_messages DROP COLUMN user_name CASCADE;
  END IF;
  
  IF EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_name = 'room_messages' AND column_name = 'user_avatar'
  ) THEN
    ALTER TABLE room_messages DROP COLUMN user_avatar CASCADE;
  END IF;
END $$;

-- 2. Verify required columns exist
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_name = 'room_messages' AND column_name = 'room_id'
  ) THEN
    RAISE EXCEPTION 'room_messages is missing room_id column';
  END IF;
  
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_name = 'room_messages' AND column_name = 'user_id'
  ) THEN
    RAISE EXCEPTION 'room_messages is missing user_id column';
  END IF;
  
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_name = 'room_messages' AND column_name = 'message'
  ) THEN
    RAISE EXCEPTION 'room_messages is missing message column';
  END IF;
END $$;

-- 3. Force complete schema reload by recreating the table metadata
ALTER TABLE room_messages ALTER COLUMN created_at SET DEFAULT now();
COMMENT ON TABLE room_messages IS 'Room messages normalized schema - final sync ' || now()::text;

-- 4. Drop and recreate all permissions to invalidate cache
REVOKE ALL ON room_messages FROM authenticated, anon, postgres;
GRANT SELECT, INSERT, DELETE ON room_messages TO authenticated;
GRANT SELECT ON room_messages TO anon;

-- 5. Ensure profiles table is accessible for joins
GRANT SELECT ON profiles TO authenticated, anon;

-- 6. Recreate all policies with new names to force cache invalidation
DROP POLICY IF EXISTS "Anyone can read room messages" ON room_messages;
DROP POLICY IF EXISTS "Authenticated users can create messages" ON room_messages;
DROP POLICY IF EXISTS "Users can delete their own messages" ON room_messages;
DROP POLICY IF EXISTS "room_messages_select_policy" ON room_messages;
DROP POLICY IF EXISTS "room_messages_insert_policy" ON room_messages;
DROP POLICY IF EXISTS "room_messages_delete_policy" ON room_messages;

CREATE POLICY "room_messages_select_policy"
  ON room_messages
  FOR SELECT
  USING (true);

CREATE POLICY "room_messages_insert_policy"
  ON room_messages
  FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "room_messages_delete_policy"
  ON room_messages
  FOR DELETE
  USING (auth.uid() = user_id);

-- 7. Multiple schema reload notifications
NOTIFY pgrst, 'reload schema';
NOTIFY pgrst, 'reload config';

-- 8. Update indexes to force metadata refresh
DROP INDEX IF EXISTS idx_room_messages_room_id;
DROP INDEX IF EXISTS idx_room_messages_user_id;
DROP INDEX IF EXISTS idx_room_messages_created_at;

CREATE INDEX idx_room_messages_room_id ON room_messages(room_id);
CREATE INDEX idx_room_messages_user_id ON room_messages(user_id);
CREATE INDEX idx_room_messages_created_at ON room_messages(created_at DESC);

-- 9. Final reload
NOTIFY pgrst, 'reload schema';
