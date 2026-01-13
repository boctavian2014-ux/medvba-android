# Supabase Chat Setup

## Database Schema

Run these SQL commands in your Supabase SQL Editor:

```sql
-- Create room_messages table
CREATE TABLE IF NOT EXISTS room_messages (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  room_id UUID NOT NULL REFERENCES study_rooms(id) ON DELETE CASCADE,
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  user_name TEXT NOT NULL,
  user_avatar TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index for faster queries
CREATE INDEX IF NOT EXISTS idx_room_messages_room_id_created_at 
ON room_messages(room_id, created_at DESC);

-- Enable Row Level Security
ALTER TABLE room_messages ENABLE ROW LEVEL SECURITY;

-- Create policies for room_messages
CREATE POLICY "Anyone can read messages in rooms they can see"
ON room_messages FOR SELECT
USING (true);

CREATE POLICY "Authenticated users can insert messages"
ON room_messages FOR INSERT
WITH CHECK (auth.uid() = user_id);

-- Enable Realtime for room_messages
ALTER PUBLICATION supabase_realtime ADD TABLE room_messages;
```

## Enable Realtime in Supabase Dashboard

1. Go to Database → Replication
2. Find `room_messages` table
3. Enable Realtime for this table
4. Save changes

That's it! The chat system is ready to use.
