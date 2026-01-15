-- Ensure room_messages table has all required columns
-- This migration verifies the schema and refreshes PostgREST cache

-- Verify the table structure (this will fail if columns don't exist)
DO $$ 
BEGIN
  -- Check if columns exist
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_name = 'room_messages' AND column_name = 'user_name'
  ) THEN
    RAISE EXCEPTION 'Column user_name does not exist in room_messages table';
  END IF;
  
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_name = 'room_messages' AND column_name = 'user_avatar'
  ) THEN
    RAISE EXCEPTION 'Column user_avatar does not exist in room_messages table';
  END IF;
END $$;

-- Force PostgREST to reload its schema cache
NOTIFY pgrst, 'reload schema';

-- Grant necessary permissions
GRANT ALL ON room_messages TO authenticated;
GRANT ALL ON room_messages TO anon;
