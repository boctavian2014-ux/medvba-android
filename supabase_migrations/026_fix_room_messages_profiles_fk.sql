-- Fix the foreign key relationship between room_messages and profiles
-- PostgREST needs a direct FK to recognize the relationship for joins

-- Step 1: Drop the existing foreign key to auth.users
ALTER TABLE room_messages 
  DROP CONSTRAINT IF EXISTS room_messages_user_id_fkey CASCADE;

-- Step 2: Ensure all user_ids in room_messages exist in profiles
-- This prevents FK constraint failures
INSERT INTO profiles (id, name, avatar)
SELECT DISTINCT 
  rm.user_id,
  COALESCE(au.raw_user_meta_data->>'name', au.email, 'User'),
  COALESCE(au.raw_user_meta_data->>'avatar', 'https://api.dicebear.com/7.x/avataaars/png?seed=' || rm.user_id)
FROM room_messages rm
JOIN auth.users au ON au.id = rm.user_id
WHERE rm.user_id NOT IN (SELECT id FROM profiles)
ON CONFLICT (id) DO NOTHING;

-- Step 3: Create the new foreign key pointing to profiles
ALTER TABLE room_messages 
  ADD CONSTRAINT room_messages_user_id_fkey 
  FOREIGN KEY (user_id) 
  REFERENCES profiles(id) 
  ON DELETE CASCADE;

-- Step 4: Verify and recreate indexes
DROP INDEX IF EXISTS idx_room_messages_user_id;
CREATE INDEX idx_room_messages_user_id ON room_messages(user_id);

DROP INDEX IF EXISTS idx_profiles_id;
CREATE INDEX idx_profiles_id ON profiles(id);

-- Step 5: Update table and column comments to force schema cache refresh
COMMENT ON TABLE room_messages IS 'Chat messages with FK to profiles - updated ' || now()::text;
COMMENT ON TABLE profiles IS 'User profiles - join target for room_messages - updated ' || now()::text;
COMMENT ON COLUMN room_messages.user_id IS 'Foreign key to profiles.id - updated ' || now()::text;

-- Step 6: Force PostgREST to reload schema multiple times
NOTIFY pgrst, 'reload schema';
SELECT pg_sleep(0.5);
NOTIFY pgrst, 'reload schema';
SELECT pg_sleep(0.5);
NOTIFY pgrst, 'reload config';

-- Step 7: Verify the constraint was created
DO $$
DECLARE
  constraint_count INTEGER;
BEGIN
  SELECT COUNT(*) INTO constraint_count
  FROM information_schema.table_constraints 
  WHERE constraint_name = 'room_messages_user_id_fkey' 
    AND table_name = 'room_messages'
    AND constraint_type = 'FOREIGN KEY';
    
  IF constraint_count = 0 THEN
    RAISE EXCEPTION 'Foreign key constraint was not created!';
  END IF;
  
  RAISE NOTICE 'Foreign key relationship established: room_messages.user_id -> profiles.id';
END $$;
