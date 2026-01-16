-- Fix foreign key relationship between room_messages and profiles
-- PostgREST needs a direct FK between these tables to enable joins

-- 1. Drop the existing constraint to auth.users
DO $$ 
BEGIN
  IF EXISTS (
    SELECT 1 FROM information_schema.table_constraints 
    WHERE constraint_name = 'room_messages_user_id_fkey' 
    AND table_name = 'room_messages'
  ) THEN
    ALTER TABLE room_messages DROP CONSTRAINT room_messages_user_id_fkey;
  END IF;
END $$;

-- 2. Add foreign key constraint to profiles table instead
ALTER TABLE room_messages 
  ADD CONSTRAINT room_messages_user_id_fkey 
  FOREIGN KEY (user_id) 
  REFERENCES profiles(id) 
  ON DELETE CASCADE;

-- 3. Ensure profiles table exists and is properly indexed
CREATE INDEX IF NOT EXISTS idx_profiles_id ON profiles(id);

-- 4. Force PostgREST schema cache reload
COMMENT ON TABLE room_messages IS 'Room messages with profiles FK - ' || now()::text;
COMMENT ON TABLE profiles IS 'User profiles for room messages join - ' || now()::text;

-- 5. Notify PostgREST to reload
NOTIFY pgrst, 'reload schema';

-- 6. Grant proper permissions for joins
GRANT SELECT ON profiles TO authenticated, anon;
GRANT SELECT, INSERT, DELETE ON room_messages TO authenticated;
GRANT SELECT ON room_messages TO anon;

-- 7. Final schema reload
NOTIFY pgrst, 'reload schema';
NOTIFY pgrst, 'reload config';
