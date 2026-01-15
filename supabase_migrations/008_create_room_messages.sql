-- Create room_messages table
CREATE TABLE IF NOT EXISTS room_messages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  room_id UUID REFERENCES study_rooms(id) ON DELETE CASCADE NOT NULL,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  user_name TEXT NOT NULL,
  user_avatar TEXT,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW() NOT NULL
);

-- Create indexes
CREATE INDEX IF NOT EXISTS idx_room_messages_room_id ON room_messages(room_id);
CREATE INDEX IF NOT EXISTS idx_room_messages_user_id ON room_messages(user_id);
CREATE INDEX IF NOT EXISTS idx_room_messages_created_at ON room_messages(created_at);

-- Enable Row Level Security
ALTER TABLE room_messages ENABLE ROW LEVEL SECURITY;

-- RLS Policies for room_messages
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
