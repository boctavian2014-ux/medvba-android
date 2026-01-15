-- Force PostgREST schema cache refresh for room_messages table
-- This migration ensures the schema cache is properly updated

-- Verify table and columns exist
DO $$ 
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.tables 
    WHERE table_schema = 'public' AND table_name = 'room_messages'
  ) THEN
    RAISE EXCEPTION 'Table room_messages does not exist';
  END IF;
  
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_schema = 'public' AND table_name = 'room_messages' AND column_name = 'user_name'
  ) THEN
    RAISE EXCEPTION 'Column user_name does not exist in room_messages table';
  END IF;
  
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_schema = 'public' AND table_name = 'room_messages' AND column_name = 'user_avatar'
  ) THEN
    RAISE EXCEPTION 'Column user_avatar does not exist in room_messages table';
  END IF;
END $$;

-- Grant explicit permissions
GRANT SELECT, INSERT, UPDATE, DELETE ON room_messages TO authenticated;
GRANT SELECT ON room_messages TO anon;
GRANT USAGE, SELECT ON ALL SEQUENCES IN SCHEMA public TO authenticated;
GRANT USAGE, SELECT ON ALL SEQUENCES IN SCHEMA public TO anon;

-- Refresh the schema cache using multiple methods
-- Method 1: Send reload signal
NOTIFY pgrst, 'reload schema';

-- Method 2: Temporarily revoke and re-grant permissions to trigger cache invalidation
DO $$
BEGIN
  -- This forces PostgREST to re-examine the table structure
  REVOKE ALL ON room_messages FROM authenticated;
  GRANT SELECT, INSERT, UPDATE, DELETE ON room_messages TO authenticated;
END $$;

-- Add a comment to force metadata change
COMMENT ON TABLE room_messages IS 'Chat messages for study rooms - schema refreshed';
