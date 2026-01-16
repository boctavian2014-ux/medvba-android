-- Fix room_messages and profiles relationship for PostgREST joins
-- This ensures PostgREST can properly join room_messages with profiles

-- 1. Ensure profiles table exists with proper structure
CREATE TABLE IF NOT EXISTS profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  name TEXT,
  avatar TEXT,
  bio TEXT,
  university TEXT,
  year TEXT,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- 2. Ensure room_messages table has proper structure
CREATE TABLE IF NOT EXISTS room_messages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  room_id UUID NOT NULL,
  user_id UUID NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- 3. Drop old constraint if it exists
DO $$ 
BEGIN
  IF EXISTS (
    SELECT 1 FROM information_schema.table_constraints 
    WHERE constraint_name = 'room_messages_user_id_fkey' 
    AND table_name = 'room_messages'
  ) THEN
    ALTER TABLE room_messages DROP CONSTRAINT room_messages_user_id_fkey CASCADE;
  END IF;
END $$;

-- 4. Add proper foreign key to profiles
ALTER TABLE room_messages 
  ADD CONSTRAINT room_messages_user_id_fkey 
  FOREIGN KEY (user_id) 
  REFERENCES profiles(id) 
  ON DELETE CASCADE;

-- 5. Create indexes for better join performance
CREATE INDEX IF NOT EXISTS idx_room_messages_user_id ON room_messages(user_id);
CREATE INDEX IF NOT EXISTS idx_room_messages_room_id ON room_messages(room_id);
CREATE INDEX IF NOT EXISTS idx_profiles_id ON profiles(id);

-- 6. Grant permissions
GRANT SELECT, INSERT, UPDATE ON profiles TO authenticated, anon;
GRANT SELECT, INSERT, DELETE ON room_messages TO authenticated;
GRANT SELECT ON room_messages TO anon;

-- 7. Enable RLS
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE room_messages ENABLE ROW LEVEL SECURITY;

-- 8. Drop old policies
DROP POLICY IF EXISTS "Anyone can read profiles" ON profiles;
DROP POLICY IF EXISTS "Users can update own profile" ON profiles;
DROP POLICY IF EXISTS "room_messages_select_policy" ON room_messages;
DROP POLICY IF EXISTS "room_messages_insert_policy" ON room_messages;
DROP POLICY IF EXISTS "room_messages_delete_policy" ON room_messages;

-- 9. Create fresh policies
CREATE POLICY "profiles_select_all" 
  ON profiles FOR SELECT 
  USING (true);

CREATE POLICY "profiles_update_own" 
  ON profiles FOR UPDATE 
  USING (auth.uid() = id);

CREATE POLICY "profiles_insert_own" 
  ON profiles FOR INSERT 
  WITH CHECK (auth.uid() = id);

CREATE POLICY "messages_select_all" 
  ON room_messages FOR SELECT 
  USING (true);

CREATE POLICY "messages_insert_auth" 
  ON room_messages FOR INSERT 
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "messages_delete_own" 
  ON room_messages FOR DELETE 
  USING (auth.uid() = user_id);

-- 10. Update table comments to force cache refresh
COMMENT ON TABLE profiles IS 'User profiles - join target - ' || now()::text;
COMMENT ON TABLE room_messages IS 'Room messages with profiles FK - ' || now()::text;

-- 11. Update column comments
COMMENT ON COLUMN room_messages.user_id IS 'FK to profiles.id - ' || now()::text;
COMMENT ON COLUMN profiles.id IS 'PK and FK to auth.users - ' || now()::text;

-- 12. Force PostgREST schema reload multiple times
NOTIFY pgrst, 'reload schema';
NOTIFY pgrst, 'reload config';

-- 13. Verify the constraint exists
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.table_constraints 
    WHERE constraint_name = 'room_messages_user_id_fkey' 
    AND table_name = 'room_messages'
  ) THEN
    RAISE EXCEPTION 'Foreign key constraint was not created properly';
  END IF;
  
  RAISE NOTICE 'Foreign key relationship between room_messages and profiles is now established';
END $$;
