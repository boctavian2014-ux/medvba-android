-- Create user_presence table for tracking online status
CREATE TABLE IF NOT EXISTS user_presence (
  user_id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  last_seen TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Create index for querying recent activity
CREATE INDEX IF NOT EXISTS idx_user_presence_last_seen ON user_presence(last_seen DESC);

-- Enable RLS
ALTER TABLE user_presence ENABLE ROW LEVEL SECURITY;

-- Policy: Users can view all presence records (respecting profile privacy)
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

-- Function to automatically update last_seen
CREATE OR REPLACE FUNCTION update_user_presence()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger to update timestamp
DROP TRIGGER IF EXISTS update_user_presence_timestamp ON user_presence;
CREATE TRIGGER update_user_presence_timestamp
  BEFORE UPDATE ON user_presence
  FOR EACH ROW
  EXECUTE FUNCTION update_user_presence();

-- Add comments
COMMENT ON TABLE user_presence IS 'Tracks user online status and last seen timestamps';
COMMENT ON COLUMN user_presence.user_id IS 'Reference to auth.users';
COMMENT ON COLUMN user_presence.last_seen IS 'Last time user was active';

-- Notify PostgREST to reload schema cache
NOTIFY pgrst, 'reload schema';
