-- Fix room_messages table and PostgREST schema cache issue
-- Drop existing table and recreate cleanly
DROP TABLE IF EXISTS room_messages CASCADE;

-- Recreate with explicit structure
CREATE TABLE room_messages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  room_id UUID NOT NULL,
  user_id UUID NOT NULL,
  user_name TEXT NOT NULL,
  user_avatar TEXT,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW() NOT NULL,
  
  -- Explicit foreign key constraints with proper naming
  CONSTRAINT fk_room_messages_room FOREIGN KEY (room_id) 
    REFERENCES study_rooms(id) ON DELETE CASCADE,
  CONSTRAINT fk_room_messages_user FOREIGN KEY (user_id) 
    REFERENCES auth.users(id) ON DELETE CASCADE
);

-- Create indexes
CREATE INDEX idx_room_messages_room_id ON room_messages(room_id);
CREATE INDEX idx_room_messages_user_id ON room_messages(user_id);
CREATE INDEX idx_room_messages_created_at ON room_messages(created_at);

-- Enable Row Level Security
ALTER TABLE room_messages ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if any
DROP POLICY IF EXISTS "Anyone can read room messages" ON room_messages;
DROP POLICY IF EXISTS "Authenticated users can create messages" ON room_messages;
DROP POLICY IF EXISTS "Users can delete their own messages" ON room_messages;

-- RLS Policies
CREATE POLICY "Anyone can read room messages"
  ON room_messages
  FOR SELECT
  USING (true);

CREATE POLICY "Authenticated users can create messages"
  ON room_messages
  FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete their own messages"
  ON room_messages
  FOR DELETE
  USING (auth.uid() = user_id);

-- Grant explicit permissions
GRANT ALL ON room_messages TO postgres;
GRANT SELECT, INSERT, DELETE ON room_messages TO authenticated;
GRANT SELECT ON room_messages TO anon;

-- Add table comment to trigger schema update
COMMENT ON TABLE room_messages IS 'Chat messages for study rooms - fixed PostgREST schema cache';

-- Notify PostgREST to reload schema cache
NOTIFY pgrst, 'reload schema';
