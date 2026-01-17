-- Force PostgREST to reload schema cache for direct_chats tables
-- This ensures the API layer recognizes all tables and columns

-- Notify PostgREST to reload schema cache
NOTIFY pgrst, 'reload schema';

-- Drop and recreate policies to force schema refresh
DROP POLICY IF EXISTS "Users can view chats they participate in" ON public.direct_chats;
DROP POLICY IF EXISTS "Users can create chats" ON public.direct_chats;
DROP POLICY IF EXISTS "Users can view chat participants" ON public.direct_chat_participants;
DROP POLICY IF EXISTS "Chat creators can add participants" ON public.direct_chat_participants;
DROP POLICY IF EXISTS "Users can view messages in their chats" ON public.direct_chat_messages;
DROP POLICY IF EXISTS "Users can send messages in their chats" ON public.direct_chat_messages;

-- Recreate policies for direct_chats
CREATE POLICY "Users can view chats they participate in"
  ON public.direct_chats FOR SELECT
  USING (
    auth.uid() IN (
      SELECT user_id FROM public.direct_chat_participants WHERE chat_id = id
    )
  );

CREATE POLICY "Users can create chats"
  ON public.direct_chats FOR INSERT
  WITH CHECK (auth.uid() = created_by);

-- Recreate policies for direct_chat_participants
CREATE POLICY "Users can view chat participants"
  ON public.direct_chat_participants FOR SELECT
  USING (
    auth.uid() IN (
      SELECT user_id FROM public.direct_chat_participants WHERE chat_id = direct_chat_participants.chat_id
    )
  );

CREATE POLICY "Chat creators can add participants"
  ON public.direct_chat_participants FOR INSERT
  WITH CHECK (
    auth.uid() IN (
      SELECT created_by FROM public.direct_chats WHERE id = chat_id
    )
  );

-- Recreate policies for direct_chat_messages
CREATE POLICY "Users can view messages in their chats"
  ON public.direct_chat_messages FOR SELECT
  USING (
    auth.uid() IN (
      SELECT user_id FROM public.direct_chat_participants WHERE chat_id = direct_chat_messages.chat_id
    )
  );

CREATE POLICY "Users can send messages in their chats"
  ON public.direct_chat_messages FOR INSERT
  WITH CHECK (
    auth.uid() = user_id AND
    auth.uid() IN (
      SELECT user_id FROM public.direct_chat_participants WHERE chat_id = direct_chat_messages.chat_id
    )
  );

-- Refresh schema cache
SELECT pg_notify('pgrst', 'reload schema');

-- Grant necessary permissions
GRANT SELECT, INSERT ON public.direct_chats TO anon, authenticated;
GRANT SELECT, INSERT ON public.direct_chat_participants TO anon, authenticated;
GRANT SELECT, INSERT ON public.direct_chat_messages TO anon, authenticated;

-- Verify tables exist
DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM information_schema.tables WHERE table_schema = 'public' AND table_name = 'direct_chats') THEN
    RAISE EXCEPTION 'Table direct_chats does not exist';
  END IF;
  
  IF NOT EXISTS (SELECT 1 FROM information_schema.tables WHERE table_schema = 'public' AND table_name = 'direct_chat_participants') THEN
    RAISE EXCEPTION 'Table direct_chat_participants does not exist';
  END IF;
  
  IF NOT EXISTS (SELECT 1 FROM information_schema.tables WHERE table_schema = 'public' AND table_name = 'direct_chat_messages') THEN
    RAISE EXCEPTION 'Table direct_chat_messages does not exist';
  END IF;
  
  RAISE NOTICE 'All direct chat tables verified successfully';
END $$;

COMMENT ON TABLE public.direct_chats IS 'Stores direct and group chats between users - schema reloaded';
COMMENT ON TABLE public.direct_chat_participants IS 'Tracks which users are in which chats - schema reloaded';
COMMENT ON TABLE public.direct_chat_messages IS 'Messages sent in direct chats - schema reloaded';
