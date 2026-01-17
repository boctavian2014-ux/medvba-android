-- Drop existing table if needed and recreate with proper relationships
DROP TABLE IF EXISTS user_presence CASCADE;

-- Create user_presence table with proper foreign key to profiles
CREATE TABLE user_presence (
  user_id UUID PRIMARY KEY REFERENCES profiles(id) ON DELETE CASCADE,
  last_seen TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Create index for querying recent activity
CREATE INDEX idx_user_presence_last_seen ON user_presence(last_seen DESC);

-- Enable RLS
ALTER TABLE user_presence ENABLE ROW LEVEL SECURITY;

-- Policy: Users can view all presence records
CREATE POLICY "Anyone can view user presence"
  ON user_presence
  FOR SELECT
  USING (true);

-- Policy: Users can insert their own presence
CREATE POLICY "Users can insert their own presence"
  ON user_presence
  FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- Policy: Users can update their own presence
CREATE POLICY "Users can update their own presence"
  ON user_presence
  FOR UPDATE
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- Grant permissions
GRANT SELECT, INSERT, UPDATE ON user_presence TO authenticated;
GRANT SELECT ON user_presence TO anon;

-- Function to automatically update updated_at
CREATE OR REPLACE FUNCTION update_user_presence_timestamp()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger to update timestamp
CREATE TRIGGER update_user_presence_timestamp
  BEFORE UPDATE ON user_presence
  FOR EACH ROW
  EXECUTE FUNCTION update_user_presence_timestamp();

-- Add comments
COMMENT ON TABLE user_presence IS 'Tracks user online status and last seen timestamps';
COMMENT ON COLUMN user_presence.user_id IS 'Reference to profiles.id (which references auth.users.id)';
COMMENT ON COLUMN user_presence.last_seen IS 'Last time user was active';

-- Notify PostgREST to reload schema cache
NOTIFY pgrst, 'reload schema';
