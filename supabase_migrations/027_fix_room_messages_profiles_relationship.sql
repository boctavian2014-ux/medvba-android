-- Comprehensive fix for room_messages -> profiles relationship
-- This migration ensures PostgREST can find the relationship

-- Step 1: Drop existing constraints and indexes
DROP INDEX IF EXISTS idx_room_messages_user_id CASCADE;
DROP INDEX IF EXISTS idx_profiles_id CASCADE;

ALTER TABLE room_messages 
  DROP CONSTRAINT IF EXISTS room_messages_user_id_fkey CASCADE;

-- Step 2: Ensure profiles table has all necessary users
INSERT INTO profiles (id, name, avatar)
SELECT DISTINCT 
  rm.user_id,
  COALESCE(au.raw_user_meta_data->>'name', au.email, 'User ' || SUBSTRING(rm.user_id, 1, 8)),
  COALESCE(
    au.raw_user_meta_data->>'avatar', 
    'https://api.dicebear.com/7.x/avataaars/png?seed=' || rm.user_id
  )
FROM room_messages rm
LEFT JOIN auth.users au ON au.id = rm.user_id
WHERE rm.user_id IS NOT NULL
  AND rm.user_id NOT IN (SELECT id FROM profiles)
ON CONFLICT (id) DO UPDATE
  SET name = EXCLUDED.name,
      avatar = EXCLUDED.avatar;

-- Step 3: Remove any orphaned messages (messages without users)
DELETE FROM room_messages 
WHERE user_id IS NOT NULL 
  AND user_id NOT IN (SELECT id FROM profiles);

-- Step 4: Create the foreign key constraint with proper options
ALTER TABLE room_messages 
  ADD CONSTRAINT room_messages_user_id_fkey 
  FOREIGN KEY (user_id) 
  REFERENCES profiles(id) 
  ON DELETE CASCADE
  ON UPDATE CASCADE;

-- Step 5: Create optimized indexes
CREATE INDEX idx_room_messages_user_id ON room_messages(user_id);
CREATE INDEX idx_room_messages_room_id_created ON room_messages(room_id, created_at DESC);
CREATE INDEX idx_profiles_id ON profiles(id);

-- Step 6: Analyze tables for query optimization
ANALYZE room_messages;
ANALYZE profiles;

-- Step 7: Update table statistics
ALTER TABLE room_messages SET (autovacuum_analyze_scale_factor = 0.05);
ALTER TABLE profiles SET (autovacuum_analyze_scale_factor = 0.05);

-- Step 8: Add helpful comments
COMMENT ON TABLE room_messages IS 'Chat messages in study rooms - FK to profiles table';
COMMENT ON TABLE profiles IS 'User profiles - referenced by room_messages';
COMMENT ON COLUMN room_messages.user_id IS 'References profiles.id';
COMMENT ON CONSTRAINT room_messages_user_id_fkey ON room_messages IS 'FK to profiles table for user information';

-- Step 9: Force multiple schema reloads with delays
DO $$
BEGIN
  -- First reload
  NOTIFY pgrst, 'reload schema';
  PERFORM pg_sleep(1);
  
  -- Second reload
  NOTIFY pgrst, 'reload schema';
  PERFORM pg_sleep(1);
  
  -- Reload config
  NOTIFY pgrst, 'reload config';
  PERFORM pg_sleep(0.5);
  
  -- Final schema reload
  NOTIFY pgrst, 'reload schema';
END $$;

-- Step 10: Verify the setup
DO $$
DECLARE
  fk_count INTEGER;
  profile_count INTEGER;
  message_count INTEGER;
BEGIN
  -- Check FK exists
  SELECT COUNT(*) INTO fk_count
  FROM information_schema.table_constraints 
  WHERE constraint_name = 'room_messages_user_id_fkey' 
    AND table_name = 'room_messages'
    AND constraint_type = 'FOREIGN KEY';
    
  IF fk_count = 0 THEN
    RAISE EXCEPTION 'Foreign key constraint was not created!';
  END IF;
  
  -- Check no orphaned records
  SELECT COUNT(*) INTO message_count
  FROM room_messages
  WHERE user_id NOT IN (SELECT id FROM profiles);
  
  IF message_count > 0 THEN
    RAISE WARNING 'Found % orphaned messages without profiles', message_count;
  END IF;
  
  -- Log success
  SELECT COUNT(*) INTO profile_count FROM profiles;
  RAISE NOTICE 'Successfully established FK relationship. Profiles: %, Messages with FK: %', 
    profile_count, 
    (SELECT COUNT(*) FROM room_messages WHERE user_id IS NOT NULL);
END $$;
