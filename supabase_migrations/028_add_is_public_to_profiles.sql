-- Add is_public field to profiles table for privacy settings
ALTER TABLE profiles
ADD COLUMN IF NOT EXISTS is_public BOOLEAN DEFAULT true NOT NULL;

-- Create index for filtering public profiles
CREATE INDEX IF NOT EXISTS idx_profiles_is_public ON profiles(is_public);

-- Add comment
COMMENT ON COLUMN profiles.is_public IS 'Whether user profile is visible in searches, study rooms, and online status';

-- Notify PostgREST to reload schema cache
NOTIFY pgrst, 'reload schema';
