-- Force PostgREST to reload schema cache for room_messages
-- The schema cache is incorrectly expecting user_name column that was removed

-- Verify the table structure is correct (no user_name, no user_avatar)
DO $$ 
BEGIN
  IF EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_name = 'room_messages' AND column_name = 'user_name'
  ) THEN
    ALTER TABLE room_messages DROP COLUMN user_name;
  END IF;
  
  IF EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_name = 'room_messages' AND column_name = 'user_avatar'
  ) THEN
    ALTER TABLE room_messages DROP COLUMN user_avatar;
  END IF;
END $$;

-- Update table comment to force schema change detection
COMMENT ON TABLE room_messages IS 'Room messages - normalized (no denormalized user data) - v2';

-- Temporarily drop and recreate the table's permissions to force cache invalidation
REVOKE ALL ON room_messages FROM authenticated, anon;
GRANT SELECT, INSERT, DELETE ON room_messages TO authenticated;
GRANT SELECT ON room_messages TO anon;

-- Ensure profiles table has proper grants for joins
GRANT SELECT ON profiles TO authenticated, anon;

-- Recreate policies with updated timestamps to force cache refresh
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

-- Force multiple schema cache reload methods
NOTIFY pgrst, 'reload schema';
NOTIFY pgrst, 'reload config';

-- Touch the table metadata
ALTER TABLE room_messages ALTER COLUMN created_at SET DEFAULT now();

-- Final notification
NOTIFY pgrst, 'reload schema';
