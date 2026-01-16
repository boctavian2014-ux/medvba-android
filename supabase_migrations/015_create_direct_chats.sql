-- Direct chats table
CREATE TABLE IF NOT EXISTS public.direct_chats (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  is_group BOOLEAN DEFAULT false,
  title TEXT,
  created_by UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Direct chat participants
CREATE TABLE IF NOT EXISTS public.direct_chat_participants (
  chat_id UUID REFERENCES public.direct_chats(id) ON DELETE CASCADE,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  role TEXT CHECK (role IN ('owner', 'member')) DEFAULT 'member',
  joined_at TIMESTAMPTZ DEFAULT now(),
  PRIMARY KEY (chat_id, user_id)
);

-- Direct chat messages (reusing room_messages pattern)
CREATE TABLE IF NOT EXISTS public.direct_chat_messages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  chat_id UUID REFERENCES public.direct_chats(id) ON DELETE CASCADE,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  content TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Activity feed table (if not exists)
CREATE TABLE IF NOT EXISTS public.activity_feed (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  actor_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  type TEXT CHECK (type IN ('achievement', 'started_chat', 'joined_room', 'milestone')) NOT NULL,
  chat_id UUID REFERENCES public.direct_chats(id) ON DELETE CASCADE,
  payload JSONB DEFAULT '{}'::jsonb,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.direct_chats ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.direct_chat_participants ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.direct_chat_messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.activity_feed ENABLE ROW LEVEL SECURITY;

-- Policies for direct_chats
DROP POLICY IF EXISTS "Users can view chats they participate in" ON public.direct_chats;
CREATE POLICY "Users can view chats they participate in"
  ON public.direct_chats FOR SELECT
  USING (
    auth.uid() IN (
      SELECT user_id FROM public.direct_chat_participants WHERE chat_id = id
    )
  );

DROP POLICY IF EXISTS "Users can create chats" ON public.direct_chats;
CREATE POLICY "Users can create chats"
  ON public.direct_chats FOR INSERT
  WITH CHECK (auth.uid() = created_by);

-- Policies for direct_chat_participants
DROP POLICY IF EXISTS "Users can view chat participants" ON public.direct_chat_participants;
CREATE POLICY "Users can view chat participants"
  ON public.direct_chat_participants FOR SELECT
  USING (
    auth.uid() IN (
      SELECT user_id FROM public.direct_chat_participants WHERE chat_id = direct_chat_participants.chat_id
    )
  );

DROP POLICY IF EXISTS "Chat creators can add participants" ON public.direct_chat_participants;
CREATE POLICY "Chat creators can add participants"
  ON public.direct_chat_participants FOR INSERT
  WITH CHECK (
    auth.uid() IN (
      SELECT created_by FROM public.direct_chats WHERE id = chat_id
    )
  );

-- Policies for direct_chat_messages
DROP POLICY IF EXISTS "Users can view messages in their chats" ON public.direct_chat_messages;
CREATE POLICY "Users can view messages in their chats"
  ON public.direct_chat_messages FOR SELECT
  USING (
    auth.uid() IN (
      SELECT user_id FROM public.direct_chat_participants WHERE chat_id = direct_chat_messages.chat_id
    )
  );

DROP POLICY IF EXISTS "Users can send messages in their chats" ON public.direct_chat_messages;
CREATE POLICY "Users can send messages in their chats"
  ON public.direct_chat_messages FOR INSERT
  WITH CHECK (
    auth.uid() = user_id AND
    auth.uid() IN (
      SELECT user_id FROM public.direct_chat_participants WHERE chat_id = direct_chat_messages.chat_id
    )
  );

-- Policies for activity_feed
DROP POLICY IF EXISTS "Users can view activity feed" ON public.activity_feed;
CREATE POLICY "Users can view activity feed"
  ON public.activity_feed FOR SELECT
  USING (true);

DROP POLICY IF EXISTS "Users can create activity feed items" ON public.activity_feed;
CREATE POLICY "Users can create activity feed items"
  ON public.activity_feed FOR INSERT
  WITH CHECK (auth.uid() = actor_id);

-- Indexes for performance
CREATE INDEX IF NOT EXISTS idx_direct_chat_participants_user_id ON public.direct_chat_participants(user_id);
CREATE INDEX IF NOT EXISTS idx_direct_chat_participants_chat_id ON public.direct_chat_participants(chat_id);
CREATE INDEX IF NOT EXISTS idx_direct_chat_messages_chat_id ON public.direct_chat_messages(chat_id);
CREATE INDEX IF NOT EXISTS idx_direct_chat_messages_created_at ON public.direct_chat_messages(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_activity_feed_created_at ON public.activity_feed(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_activity_feed_actor_id ON public.activity_feed(actor_id);

-- Enable realtime for direct_chat_messages
ALTER PUBLICATION supabase_realtime ADD TABLE public.direct_chat_messages;
ALTER PUBLICATION supabase_realtime ADD TABLE public.activity_feed;

COMMENT ON TABLE public.direct_chats IS 'Stores direct and group chats between users';
COMMENT ON TABLE public.direct_chat_participants IS 'Tracks which users are in which chats';
COMMENT ON TABLE public.direct_chat_messages IS 'Messages sent in direct chats';
COMMENT ON TABLE public.activity_feed IS 'Social activity feed showing achievements, chat creation, etc.';
