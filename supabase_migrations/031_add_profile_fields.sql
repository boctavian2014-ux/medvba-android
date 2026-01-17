-- Add additional profile fields for study partners feature
ALTER TABLE profiles ADD COLUMN IF NOT EXISTS city TEXT;
ALTER TABLE profiles ADD COLUMN IF NOT EXISTS university TEXT;
ALTER TABLE profiles ADD COLUMN IF NOT EXISTS year_of_study INTEGER;
ALTER TABLE profiles ADD COLUMN IF NOT EXISTS interests TEXT[];
ALTER TABLE profiles ADD COLUMN IF NOT EXISTS profile_photo_url TEXT;

-- Create indexes for filtering
CREATE INDEX IF NOT EXISTS idx_profiles_city ON profiles(city);
CREATE INDEX IF NOT EXISTS idx_profiles_university ON profiles(university);
CREATE INDEX IF NOT EXISTS idx_profiles_year_of_study ON profiles(year_of_study);

-- Update RLS policies (already in place from previous migrations)

-- Add comment
COMMENT ON COLUMN profiles.city IS 'User city for study partner matching';
COMMENT ON COLUMN profiles.university IS 'User university for study partner matching';
COMMENT ON COLUMN profiles.year_of_study IS 'User year of study (1-6)';
COMMENT ON COLUMN profiles.interests IS 'User study interests/topics';
COMMENT ON COLUMN profiles.profile_photo_url IS 'Custom profile photo URL';
